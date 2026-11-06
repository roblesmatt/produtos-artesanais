// ==========================================
// 2. INJETA O GLOBAL (Header, Menu e Busca)
// ==========================================
function resolveUrlParaPagina(caminho) {
  if (
    !caminho ||
    caminho.startsWith("http") ||
    caminho.startsWith("/") ||
    caminho.startsWith("#") ||
    caminho.startsWith("mailto:") ||
    caminho.startsWith("tel:")
  ) {
    return caminho;
  }

  const estaNaPastaProdutos = window.location.pathname.includes("/produtos/");
  if (estaNaPastaProdutos && !caminho.startsWith("../")) {
    return `../${caminho}`;
  }

  return caminho;
}

function resolveAssetUrl(caminho) {
  if (
    !caminho ||
    caminho.startsWith("http") ||
    caminho.startsWith("/") ||
    caminho.startsWith("data:")
  ) {
    return caminho;
  }

  const estaNaPastaProdutos = window.location.pathname.includes("/produtos/");
  if (
    estaNaPastaProdutos &&
    !caminho.startsWith("../") &&
    !caminho.startsWith("./")
  ) {
    return `../${caminho}`;
  }

  return caminho;
}

function obterProdutoDaPaginaAtual() {
  if (typeof BANCO_PRODUTOS === "undefined") return undefined;

  const parametros = new URLSearchParams(window.location.search);
  const idNaUrl =
    parametros.get("id") ||
    window.location.pathname
      .split("/")
      .filter(Boolean)
      .pop()
      ?.replace(/\.html$/, "");
  const produtoPorId = BANCO_PRODUTOS.find(
    (produto) => produto.id === idNaUrl,
  );
  if (produtoPorId) return produtoPorId;

  const nomeNaPagina = document
    .querySelector(".product-header h1")
    ?.innerText.replace(/\s+/g, " ")
    .trim();
  return BANCO_PRODUTOS.find(
    (produto) =>
      produto.nome
        .replace(/<br\s*[\/]?>/gi, " ")
        .replace(/\s+/g, " ")
        .trim() === nomeNaPagina,
  );
}

function normalizarTextoBusca(texto) {
  return String(texto || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function pontuarProdutoBusca(produto, consulta) {
  const palavrasNome = normalizarTextoBusca(produto.nome)
    .split(/\s+/)
    .filter((palavra) => palavra && palavra !== "de");
  const termos = normalizarTextoBusca(consulta)
    .split(/\s+/)
    .filter((termo) => termo && termo !== "de");
  if (termos.length === 0) return 0;

  if (termos.length === 1) {
    return palavrasNome.some((palavra) => palavra.startsWith(termos[0]))
      ? 10
      : 0;
  }

  let indicePalavraNome = 0;
  let pontuacao = 0;
  for (const termo of termos) {
    let indiceEncontrado = -1;
    for (
      let indice = indicePalavraNome;
      indice < palavrasNome.length;
      indice++
    ) {
      if (palavrasNome[indice].startsWith(termo)) {
        indiceEncontrado = indice;
        break;
      }
    }
    if (indiceEncontrado === -1) return 0;

    pontuacao += 10 + (indiceEncontrado === indicePalavraNome ? 5 : 0);
    indicePalavraNome = indiceEncontrado + 1;
  }

  return pontuacao;
}

function embaralharArray(itens) {
  const embaralhados = [...itens];
  for (let i = embaralhados.length - 1; i > 0; i--) {
    const indiceAleatorio = Math.floor(Math.random() * (i + 1));
    [embaralhados[i], embaralhados[indiceAleatorio]] = [
      embaralhados[indiceAleatorio],
      embaralhados[i],
    ];
  }
  return embaralhados;
}

const CHAVE_PIX_STORAGE = "pix_chave_checkout";
const CHAVE_PIX_PADRAO = "595f8490-c36b-461b-8fdc-a15e602b22a6";

const paginaInfo = window.location.pathname.endsWith("/info.html");
const paginaGlobal = paginaInfo
  ? "global.html"
  : window.location.pathname.includes("/produtos/")
    ? "../global.html"
    : "global.html";

fetch(paginaGlobal)
.then((response) => {
  if (!response.ok) {
    throw new Error(`Não foi possível carregar o cabeçalho: ${response.status}`);
  }
  return response.text();
})
  .then((data) => {
    const cabecalhoContainer = document.getElementById("cabecalho-container");
    if (cabecalhoContainer) {
      cabecalhoContainer.innerHTML = data;

      cabecalhoContainer.querySelectorAll("a[href]").forEach((link) => {
        const hrefOriginal = link.getAttribute("href");
        if (hrefOriginal) {
          link.setAttribute("href", resolveUrlParaPagina(hrefOriginal));
        }
      });

      if (paginaInfo) {
        const cabecalho = cabecalhoContainer.querySelector(".header");
        cabecalho?.classList.add("admin-site-header");
        cabecalhoContainer.querySelector("#menuToggle")?.remove();
        cabecalhoContainer.querySelector("#navMenu")?.remove();

        const carrinho = cabecalhoContainer.querySelector(".header-actions .botao-icone");
        if (carrinho) {
          const linkPedidos = carrinho.querySelector("a[href]");
          const iconeCarrinho = carrinho.querySelector(".icone");
          const contadorCarrinho = carrinho.querySelector("#cart-count");
          const chavePedidosVisualizados = "admin_pedidos_checkout_visualizados";

          if (linkPedidos && iconeCarrinho) {
            linkPedidos.href = "#pedidos";
            linkPedidos.setAttribute("aria-label", "Abrir pedidos novos do checkout");
            carrinho.setAttribute("aria-label", "Pedidos novos do checkout");
            if (contadorCarrinho) contadorCarrinho.hidden = true;

            const badgePedidos = document.createElement("span");
            badgePedidos.id = "admin-orders-badge";
            badgePedidos.className = "badge-contador admin-orders-badge";
            badgePedidos.hidden = true;
            badgePedidos.setAttribute("aria-live", "polite");
            iconeCarrinho.appendChild(badgePedidos);

            const atualizarNotificacaoPedidos = () => {
              const pedidos = JSON.parse(localStorage.getItem("pedidos_admin") || "[]");
              const visualizados = new Set(
                JSON.parse(localStorage.getItem(chavePedidosVisualizados) || "[]"),
              );
              const novosPedidos = pedidos.filter(
                (pedido) =>
                  pedido.origem === "Site" &&
                  pedido.demonstracao !== true &&
                  pedido.id &&
                  !visualizados.has(String(pedido.id)),
              );
              badgePedidos.textContent = novosPedidos.length > 99
                ? "99+"
                : String(novosPedidos.length);
              badgePedidos.hidden = novosPedidos.length === 0;
              badgePedidos.setAttribute(
                "aria-label",
                `${novosPedidos.length} ${novosPedidos.length === 1 ? "pedido novo" : "pedidos novos"} do checkout`,
              );
              linkPedidos.title = novosPedidos.length
                ? `${novosPedidos.length} pedido(s) novo(s) do checkout; pagamento informado para conferência`
                : "Abrir pedidos";
            };

            linkPedidos.addEventListener("click", (event) => {
              event.preventDefault();
              const pedidosTab = document.getElementById("pedidos");
              if (!pedidosTab) return;

              pedidosTab.checked = true;
              pedidosTab.dispatchEvent(new Event("change", { bubbles: true }));
              const pedidosSite = JSON.parse(localStorage.getItem("pedidos_admin") || "[]")
                .filter((pedido) => pedido.origem === "Site" && pedido.demonstracao !== true && pedido.id)
                .map((pedido) => String(pedido.id));
              localStorage.setItem(chavePedidosVisualizados, JSON.stringify(pedidosSite));
              atualizarNotificacaoPedidos();
            });
            window.addEventListener("storage", (event) => {
              if (event.key === "pedidos_admin" || event.key === chavePedidosVisualizados) {
                atualizarNotificacaoPedidos();
              }
            });
            window.addEventListener("admin:refresh-products", atualizarNotificacaoPedidos);
            atualizarNotificacaoPedidos();
          }

          const botaoAtualizar = document.createElement("button");
          botaoAtualizar.type = "button";
          botaoAtualizar.className = "botao-icone admin-notifications-button";
          botaoAtualizar.setAttribute("aria-label", "Atualizar dados do painel administrativo");
          botaoAtualizar.title = "Atualizar dados do painel administrativo";
          botaoAtualizar.innerHTML = `<span class="admin-notifications-icon" aria-hidden="true">↻</span><span id="admin-products-badge" class="badge-contador" hidden></span>`;
          botaoAtualizar.addEventListener("click", () => {
            window.dispatchEvent(new CustomEvent("admin:refresh-products"));
          });
          carrinho.insertAdjacentElement("afterend", botaoAtualizar);
        }
      }

      const rodape = cabecalhoContainer.querySelector(".site-footer");
      if (rodape) {
        document.body.appendChild(rodape);
      }
    }

    if (typeof atualizarContadorCarrinho === "function") {
      atualizarContadorCarrinho();
    }

    inicializarGlobalEvents();
  });

function inicializarGlobalEvents() {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  const menuFechar = document.getElementById("menuFechar");

  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => navMenu.classList.add("ativo"));
  }
  if (menuFechar && navMenu) {
    menuFechar.addEventListener("click", () =>
      navMenu.classList.remove("ativo"),
    );
  }

  // Lógica da Busca (Utiliza o BANCO_PRODUTOS unificado)
  const searchInput = document.getElementById("searchInput");
  const searchModal = document.getElementById("searchModal");
  const closeSearchModal = document.getElementById("closeSearchModal");
  const searchResultsList = document.getElementById("searchResultsList");

  if (searchInput && searchModal && searchResultsList) {
    searchInput.addEventListener("input", (e) => {
      const termo = e.target.value.trim();

      if (termo.length > 0) {
        searchModal.style.display = "flex";
        searchResultsList.innerHTML = "";
        const encontradosOrdenados = BANCO_PRODUTOS.map((produto) => ({
          produto,
          pontuacao: pontuarProdutoBusca(produto, termo),
        }))
          .filter(({ pontuacao }) => pontuacao > 0)
          .sort((a, b) => b.pontuacao - a.pontuacao);
        const encontrados = [];
        for (let inicioGrupo = 0; inicioGrupo < encontradosOrdenados.length; ) {
          let fimGrupo = inicioGrupo + 1;
          while (
            fimGrupo < encontradosOrdenados.length &&
            encontradosOrdenados[fimGrupo].pontuacao ===
              encontradosOrdenados[inicioGrupo].pontuacao
          ) {
            fimGrupo++;
          }
          encontrados.push(
            ...embaralharArray(
              encontradosOrdenados.slice(inicioGrupo, fimGrupo),
            ),
          );
          inicioGrupo = fimGrupo;
        }

        encontrados.forEach(({ produto }) => {
          const item = document.createElement("a");
          item.href = resolveUrlParaPagina(gerarLinkPaginaProduto(produto));
          item.className = `search-result-card${produto.esgotado ? " search-result-card-esgotado" : ""}`;

          const imagem = document.createElement("img");
          imagem.className = "search-result-image";
          imagem.src = resolveAssetUrl(produto.imagemFrente);
          imagem.alt = "";

          const detalhes = document.createElement("div");
          const nome = document.createElement("h4");
          nome.className = "search-result-name";
          nome.textContent = produto.nome.replace(/<br\s*[\/]?>/gi, " ");
          detalhes.appendChild(nome);

          const precos = document.createElement("div");
          precos.className = "search-result-prices";
          const precoAtual = document.createElement("span");
          precoAtual.className = "preco-atual";
          precoAtual.textContent =
            produto.precoDesconto || produto.precoOriginal;
          precos.appendChild(precoAtual);

          if (produto.precoDesconto) {
            const precoOriginal = document.createElement("span");
            precoOriginal.className = "preco-antigo";
            precoOriginal.textContent = produto.precoOriginal;
            precos.appendChild(precoOriginal);
          }
          detalhes.appendChild(precos);

          if (produto.esgotado) {
            const etiquetaEsgotado = document.createElement("span");
            etiquetaEsgotado.className = "produto-esgotado-label";
            etiquetaEsgotado.textContent = "ESGOTADO";
            detalhes.appendChild(etiquetaEsgotado);
          }

          item.append(imagem, detalhes);
          searchResultsList.appendChild(item);
        });

        if (encontrados.length === 0) {
          const mensagem = document.createElement("p");
          mensagem.className = "search-empty-state";
          mensagem.textContent = "Nenhum produto encontrado";
          searchResultsList.appendChild(mensagem);
        }
      } else {
        searchModal.style.display = "none";
        searchResultsList.innerHTML = "";
      }
    });
  }

  if (closeSearchModal && searchModal) {
    closeSearchModal.addEventListener("click", () => {
      searchModal.style.display = "none";
      if (searchInput) {
        searchInput.value = "";
        searchInput.dispatchEvent(new Event("input", { bubbles: true }));
      }
    });
  }

  window.addEventListener("click", (e) => {
    if (searchModal && e.target === searchModal) {
      searchModal.style.display = "none";
    }
  });

  const cartModal = document.getElementById("cartModal");
  const closeCartModal = document.getElementById("closeCartModal");

  if (cartModal && closeCartModal) {
    closeCartModal.addEventListener("click", () => {
      cartModal.style.display = "none";
    });
  }

  const themeToggleBtn = document.getElementById("theme-toggle");
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const isLight = document.body.classList.toggle("theme-light");
      sessionStorage.setItem("theme", isLight ? "light" : "dark");
      const svgElement = themeToggleBtn.querySelector("svg");
      if (svgElement && svgElement.ks) {
        svgElement.ks.play();
      }
    });
  }
}

// ==========================================
// 3. RENDERIZAÇÃO AUTOMÁTICA DAS VITRINES
// ==========================================
function renderizarVitrinesAutomaticas() {
  if (typeof BANCO_PRODUTOS === "undefined") return;

  const gridsRenderizados = new Set();

  BANCO_PRODUTOS.forEach((produto) => {
    const destinos = ["categoria", "linha", "funcao", "ativo", "cor"].flatMap(
      (classificacao) => {
        const valor = produto.tags[classificacao];
        return Array.isArray(valor) ? valor : [valor];
      },
    );

    destinos.forEach((tagCompleta) => {
      if (!tagCompleta) return;

      const tagId = tagCompleta
        .replace("linhas-", "")
        .replace("funcao-", "")
        .replace("ativos-", "")
        .replace("cores-", "");

      let grid =
        document.getElementById(`grid-${tagId}`) ||
        document.getElementById(`grid-${tagCompleta}`) ||
        document.getElementById(tagCompleta) ||
        document.getElementById(tagId);

      if (!grid) return;
      gridsRenderizados.add(grid);

      let blocoPreco = `<span class="preco-atual">${produto.precoOriginal}</span>`;
      if (produto.precoDesconto && produto.precoDesconto.trim() !== "") {
        blocoPreco = `
          <div style="display: flex; flex-direction: row; align-items: baseline; justify-content: center; gap: 6px;">
            <span class="preco-atual">${produto.precoDesconto}</span>
            <span class="preco-antigo">${produto.precoOriginal}</span>
          </div>
        `;
      }

      let seloEsgotadoHtml = "";
      let classeEsgotado = "";
      if (produto.esgotado) {
        classeEsgotado = "produto-esgotado";
        seloEsgotadoHtml = `
          <div class="button1 produto-selo-esgotado">ESGOTADO</div>`;
      }

      const card = document.createElement("div");
      card.className = `produto-card ${classeEsgotado}`;
      card.style.cssText = "position: relative; display: block;";
      // Estrutura interna contendo a imagem frontal, o vídeo 3D (se houver) ou a imagem do verso (se houver)
      card.innerHTML = `
        ${seloEsgotadoHtml}
        <a href="${resolveUrlParaPagina(gerarLinkPaginaProduto(produto))}" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center; justify-content: space-between; width: 100%; height: 100%; ${produto.esgotado ? "opacity: 0.4;" : ""}">
          <div class="media-container" style="width: 100%; display: flex; justify-content: center; align-items: center; position: relative; overflow: hidden;">
            <img src="${resolveAssetUrl(produto.imagemFrente)}" alt="${produto.nome}" class="card-img" style="width: 100%; display: block; transition: opacity 0.3s ease;">
            ${produto.video3d ? `<video src="${resolveAssetUrl(produto.video3d)}" class="card-video" muted loop playsinline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; pointer-events: none; transition: opacity 0.3s ease;"></video>` : produto.imagemVerso ? `<img src="${resolveAssetUrl(produto.imagemVerso)}" alt="${produto.nome} Verso" class="card-verso" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; pointer-events: none; transition: opacity 0.3s ease;">` : ""}
          </div>
          <div style="width: 100%;">
            <h4>${produto.nome}</h4>
            <div style="width: 100%; margin-top: 5px; text-align: center;">${blocoPreco}</div>
          </div>
        </a>
      `;

      // Adiciona a lógica de Hover com reinício do vídeo ao sair do card
      const imgEl = card.querySelector(".card-img");
      const videoEl = card.querySelector(".card-video");
      const versoEl = card.querySelector(".card-verso");

      if (produto.video3d && videoEl) {
        card.addEventListener("mouseenter", () => {
          if (imgEl) imgEl.style.opacity = "0";
          videoEl.style.opacity = "1";
          videoEl.play().catch(() => {});
        });

        card.addEventListener("mouseleave", () => {
          videoEl.pause();
          videoEl.currentTime = 0;
          videoEl.style.opacity = "0";
          if (imgEl) imgEl.style.opacity = "1";
        });
      } else if (!produto.video3d && produto.imagemVerso && versoEl) {
        card.addEventListener("mouseenter", () => {
          if (imgEl) imgEl.style.opacity = "0";
          versoEl.style.opacity = "1";
        });

        card.addEventListener("mouseleave", () => {
          versoEl.style.opacity = "0";
          if (imgEl) imgEl.style.opacity = "1";
        });
      }

      grid.appendChild(card);
    });
  });

  gridsRenderizados.forEach((grid) => {
    const cards = Array.from(grid.querySelectorAll(":scope > .produto-card"));
    embaralharArray(cards).forEach((card) => grid.appendChild(card));
  });
}

// ==========================================
// 4. PREENCHIMENTO DA PÁGINA DE DETALHE DO PRODUTO
// ==========================================
function preencherPaginaProduto() {
  const params = new URLSearchParams(window.location.search);
  let idProduto = params.get("id");
  const paginaDetalhe = document.querySelector(".product-layout-grid");

  if (!idProduto) {
    const paginaAtualSemDiretorio = window.location.pathname
      .split("/")
      .filter(Boolean)
      .slice(-1)[0];
    const produtoEncontrado = BANCO_PRODUTOS.find(
      (produto) => `${produto.id}.html` === paginaAtualSemDiretorio,
    );
    if (produtoEncontrado) {
      idProduto = produtoEncontrado.id;
    }
  }

  if (!paginaDetalhe) return;

  if (!idProduto) {
    paginaDetalhe.innerHTML = `
      <section class="stock-unavailable">
        <h1>PRODUTO NÃO ENCONTRADO</h1>
        <p>Não foi possível identificar o produto solicitado.</p>
        <a href="${resolveUrlParaPagina("index.html")}" class="button1">Voltar para o Catálogo</a>
      </section>
    `;
    return;
  }

  const produto = BANCO_PRODUTOS.find((p) => p.id === idProduto);
  if (!produto) {
    paginaDetalhe.innerHTML = `
      <section class="stock-unavailable">
        <h1>PRODUTO NÃO ENCONTRADO</h1>
        <p>Este produto não está disponível no catálogo.</p>
        <a href="${resolveUrlParaPagina("index.html")}" class="button1">Voltar para o Catálogo</a>
      </section>
    `;
    return;
  }

  document.title = produto.nome.replace(/<br\s*[\/]?>/gi, " ").replace(/<\/?[^>]+(>|$)/g, "").replace(/\s+/g, " ").trim();

  const h1El = document.querySelector("h1");
  if (h1El) h1El.innerHTML = produto.nome;

  const precoEl = document.querySelector(".preco");
  const unidadeEl = document.querySelector(".unidade");

  if (precoEl) {
    if (produto.precoDesconto && produto.precoDesconto.trim() !== "") {
      precoEl.innerHTML = `
        <div style="display: flex; align-items: baseline; gap: 10px;">
          <span class="preco">${produto.precoDesconto}</span>
          ${unidadeEl ? unidadeEl.outerHTML : ""}
        </div>
        <del style="font-size: 16px; color: #9A8E7E; display: block; line-height: 1; margin-top: 6px; text-decoration: line-through;">${produto.precoOriginal}</del>
      `;

      if (unidadeEl) unidadeEl.style.display = "none";
    } else {
      precoEl.innerHTML = produto.precoOriginal;
    }
  }

  const subtituloEl =
    document.getElementById("subtituloProduto") ||
    document.querySelector(".substitulo");
  if (subtituloEl && produto.subtitulo) {
    subtituloEl.innerText = produto.subtitulo;
  }

  const mainImage = document.getElementById("mainImage");
  if (mainImage) {
    mainImage.setAttribute("src", resolveAssetUrl(produto.imagemFrente));
    mainImage.setAttribute("alt", produto.nome);
  }
  const carouselTrack = document.querySelector(".carousel-track");
  const carouselDots = document.querySelector(".carousel-progress-bar");
  const imagemVersoExistente = carouselTrack?.querySelector("[data-product-image-verso]");
  imagemVersoExistente?.remove();
  if (carouselTrack && produto.imagemVerso) {
    const itemVerso = document.createElement("div");
    itemVerso.className = "carousel-item";
    itemVerso.dataset.productImageVerso = "";
    const imagemVerso = document.createElement("img");
    imagemVerso.src = resolveAssetUrl(produto.imagemVerso);
    imagemVerso.alt = `${produto.nome.replace(/<br\s*[\/]?>/gi, " ")} — verso`;
    itemVerso.appendChild(imagemVerso);
    carouselTrack.appendChild(itemVerso);
  }
  if (carouselTrack && carouselDots) {
    const itensCarrossel = [...carouselTrack.querySelectorAll(".carousel-item")];
    carouselDots.replaceChildren();
    carouselDots.hidden = itensCarrossel.length < 2;
    itensCarrossel.forEach((item, index) => {
      const indicador = document.createElement("button");
      indicador.type = "button";
      indicador.className = "carousel-progress-dot";
      indicador.setAttribute("aria-label", `Exibir imagem ${index + 1} de ${itensCarrossel.length}`);
      indicador.setAttribute("aria-current", index === 0 ? "true" : "false");
      indicador.dataset.carouselIndex = String(index);
      carouselDots.appendChild(indicador);
    });
  }
  if (produto.esgotado) {
    const gallery = document.querySelector(".product-column-gallery");
    const carouselItem = mainImage?.closest(".carousel-item");
    gallery?.classList.add("product-out-of-stock");
    if (carouselItem && !carouselItem.querySelector(".produto-selo-esgotado")) {
      const label = document.createElement("div");
      label.className = "button1 produto-selo-esgotado";
      label.textContent = "ESGOTADO";
      carouselItem.appendChild(label);
    }
    document
      .querySelectorAll("#btnMinus, #btnPlus, #cartBtn")
      .forEach((control) => {
        control.disabled = true;
      });
    const cartButton = document.getElementById("cartBtn");
    if (cartButton) {
      cartButton.setAttribute("aria-label", "Produto esgotado");
      const cartButtonText = cartButton.querySelector("span");
      if (cartButtonText) cartButtonText.textContent = "ESGOTADO";
    }
    const orderButton = document.getElementById("btnComprarAgora");
    if (orderButton) {
      orderButton.setAttribute("aria-disabled", "true");
      orderButton.textContent = "PRODUTO ESGOTADO";
      orderButton.removeAttribute("href");
    }
  }

  const thumb1 = document.querySelector(".thumb-frente");
  if (thumb1) thumb1.setAttribute("src", resolveAssetUrl(produto.imagemFrente));

  const thumb2 = document.querySelector(".thumb-verso");
  if (thumb2) {
    thumb2.setAttribute("src", resolveAssetUrl(produto.imagemVerso));
    thumb2.setAttribute("alt", `${produto.nome} verso`);
  }

  const videoSourceEl = document.getElementById("videoSource");
  const videoEl =
    videoSourceEl?.closest("video") ||
    document.querySelector(".phone-video, .responsive-video");
  if (videoEl) {
    if (produto.video3d) {
      const videoSource = videoSourceEl || videoEl;
      videoSource.setAttribute("src", resolveAssetUrl(produto.video3d));
      videoEl.load();
    } else {
      videoEl.pause();
      videoEl.removeAttribute("src");
      videoSourceEl?.removeAttribute("src");
      videoEl.load();
      videoEl.closest(".carousel-item")?.remove();
      document.querySelector(".carousel-progress-dot:last-child")?.remove();
    }
  }

  const camposAcordeoes = [
    ["sobre", "#conteudo-sobre", "SOBRE O PRODUTO"],
    ["beneficios", "#conteudo-beneficios", "BENEFÍCIOS"],
    ["composicao", "#conteudo-composicao", "COMPOSIÇÃO"],
    ["modoUso", "#conteudo-modo-uso", "MODO DE USO"],
    ["advertencias", "#conteudo-advertencias", "ADVERTÊNCIAS E PRECAUÇÕES"],
    ["fichaTecnica", "#conteudo-ficha", "FICHA TÉCNICA"],
    ["pagamentos", "#conteudo-pagamento", "FORMAS DE PAGAMENTO"],
    ["frete", "#conteudo-frete", "VALOR DE FRETE"],
    ["trocas", "#conteudo-trocas", "TROCAS E DEVOLUÇÕES"],
  ];

  camposAcordeoes.forEach(([chave, seletor, tituloPadrao]) => {
    const conteudo = document.querySelector(seletor);
    const acordeao = conteudo?.closest(".accordion-item");
    const titulo = acordeao?.querySelector(".accordion-title");
    const valor = produto.acordeoes?.[chave];

    if (titulo) {
      titulo.textContent = produto.titulosAcordeoes?.[chave] || tituloPadrao;
    }
    if (conteudo) {
      conteudo.innerHTML = valor ? `<p>${valor}</p>` : "";
    }
  });

  const listaAcordeoes = document.querySelector(".accordion-list");
  if (listaAcordeoes) {
    listaAcordeoes.querySelectorAll(".accordion-extra-item").forEach((item) => item.remove());
    (Array.isArray(produto.acordeoesExtras) ? produto.acordeoesExtras : []).forEach((extra) => {
      if (!extra.titulo?.trim() && !extra.conteudo?.trim()) return;

      const acordeao = document.createElement("details");
      acordeao.className = "accordion-item accordion-extra-item";
      const resumo = document.createElement("summary");
      resumo.className = "accordion-header";
      const titulo = document.createElement("span");
      titulo.className = "accordion-title";
      titulo.textContent = extra.titulo || "INFORMAÇÕES ADICIONAIS";
      resumo.appendChild(titulo);

      const conteudo = document.createElement("div");
      conteudo.className = "accordion-content";
      conteudo.innerHTML = extra.conteudo ? `<p>${extra.conteudo}</p>` : "";
      acordeao.append(resumo, conteudo);
      listaAcordeoes.appendChild(acordeao);
    });
  }
}

// ==========================================
// 5. SEGURANÇA E PREVENÇÕES GLOBAIS
// ==========================================
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("mousedown", () => {
  if (window.getSelection) window.getSelection().removeAllRanges();
});

// ==========================================
// 6. LÓGICA DO CARROSSEL
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  renderizarVitrinesAutomaticas();
  preencherPaginaProduto();

  const track = document.querySelector(".carousel-track");
  if (!track) return;

  const items = [...track.querySelectorAll(".carousel-item")];
  const indicatorDots = document.querySelectorAll(".carousel-progress-dot");
  if (!items.length) return;

  function updateCarouselIndicator(index) {
    carouselIndex = index;
    items.forEach((item, itemIndex) => {
      const active = itemIndex === index;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-hidden", String(!active));
    });
    indicatorDots.forEach((dot, dotIndex) => {
      dot.classList.toggle("ativo", dotIndex === index);
      dot.setAttribute("aria-current", String(dotIndex === index));
    });
  }

  function getNearestSlideIndex() {
    const trackRect = track.getBoundingClientRect();
    const trackCenter = trackRect.left + track.clientWidth / 2;
    let nearestIndex = 0;
    let nearestDistance = Infinity;

    items.forEach((item, index) => {
      const itemRect = item.getBoundingClientRect();
      const itemCenter = itemRect.left + itemRect.width / 2;
      const distance = Math.abs(trackCenter - itemCenter);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    return nearestIndex;
  }

  function goToSlide(index, behavior = "smooth") {
    const nextIndex = (index + items.length) % items.length;
    const item = items[nextIndex];
    const trackRect = track.getBoundingClientRect();
    const itemRect = item.getBoundingClientRect();
    const left =
      track.scrollLeft +
      itemRect.left -
      trackRect.left -
      (track.clientWidth - item.clientWidth) / 2;

    updateCarouselIndicator(nextIndex);
    track.scrollTo({ left, behavior });
  }

  let carouselIndex = 0;
  updateCarouselIndicator(carouselIndex);
  indicatorDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      goToSlide(index);
    });
  });

  let autoPlayTimer = null;
  let hoverResumeTimer = null;
  let isHovered = false;
  let isDragging = false;
  let isCarouselVisible = false;
  let startX = 0;
  let startScrollLeft = 0;
  let scrollSyncFrame = null;

  const HOVER_PAUSE_DURATION = 6000;

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
    }
  }

  function checkAndStartAutoPlay(forceResume = false) {
    const canPlay = items.length > 1 &&
      isCarouselVisible &&
      !isDragging &&
      (!isHovered || forceResume);
    if (canPlay && !autoPlayTimer) {
      autoPlayTimer = setInterval(nextSlide, 6000);
    } else if (!canPlay) {
      stopAutoPlay();
    }
  }

  function clearHoverResumeTimer() {
    if (hoverResumeTimer) {
      clearTimeout(hoverResumeTimer);
      hoverResumeTimer = null;
    }
  }

  const carouselVisibilityObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        isCarouselVisible = entry.isIntersecting;
        if (isCarouselVisible) {
          checkAndStartAutoPlay();
        } else {
          stopAutoPlay();
          clearHoverResumeTimer();
        }
      });
    },
    { threshold: 0.2 },
  );

  carouselVisibilityObserver.observe(track);

  function nextSlide() {
    goToSlide(carouselIndex + 1);
  }

  track.addEventListener(
    "scroll",
    () => {
      if (scrollSyncFrame !== null) return;
      scrollSyncFrame = requestAnimationFrame(() => {
        scrollSyncFrame = null;
        updateCarouselIndicator(getNearestSlideIndex());
      });
    },
    { passive: true },
  );

  track.addEventListener("scrollend", () => {
    updateCarouselIndicator(getNearestSlideIndex());
  });

  track.addEventListener("mouseenter", () => {
    isHovered = true;
    checkAndStartAutoPlay();
    clearHoverResumeTimer();
    hoverResumeTimer = setTimeout(() => {
      checkAndStartAutoPlay(true);
    }, HOVER_PAUSE_DURATION);
  });

  track.addEventListener("mouseleave", () => {
    isHovered = false;
    clearHoverResumeTimer();
    checkAndStartAutoPlay();
  });

  track.addEventListener("pointerdown", (event) => {
    if (!event.isPrimary || event.pointerType !== "mouse") return;
    isDragging = true;
    startX = event.clientX;
    startScrollLeft = track.scrollLeft;
    track.classList.add("is-dragging");
    clearHoverResumeTimer();
    stopAutoPlay();
    track.setPointerCapture(event.pointerId);
  });

  track.addEventListener("pointermove", (event) => {
    if (!isDragging) return;
    event.preventDefault();
    track.scrollLeft = startScrollLeft - (event.clientX - startX);
  });

  function stopDragging(event) {
    if (!isDragging) return;
    isDragging = false;
    track.classList.remove("is-dragging");
    updateCarouselIndicator(getNearestSlideIndex());
    if (track.hasPointerCapture(event.pointerId)) {
      track.releasePointerCapture(event.pointerId);
    }
    checkAndStartAutoPlay();
  }

  track.addEventListener("pointerup", stopDragging);
  track.addEventListener("pointercancel", stopDragging);
});

// ==========================================
// 7. TEMA, VÍDEOS E INTERAÇÕES DA PÁGINA
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const navEntries = performance.getEntriesByType("navigation");
  if (navEntries.length > 0 && navEntries[0].type === "reload") {
    sessionStorage.removeItem("theme");
  }
  const savedTheme = sessionStorage.getItem("theme");
  if (savedTheme === "light") {
    document.body.classList.add("theme-light");
  } else {
    document.body.classList.remove("theme-light");
  }

  const videos = document.querySelectorAll(".phone-video, .responsive-video");
  if (videos.length > 0) {
    const videoObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target;
          if (entry.isIntersecting) {
            video.play().catch(() => {
              video.muted = true;
              video.play();
            });
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0, rootMargin: "-49% 0px -49% 0px" },
    );
    videos.forEach((video) => videoObserver.observe(video));
  }

  const btnMinus = document.getElementById("btnMinus");
  const btnPlus = document.getElementById("btnPlus");
  const qtyValue = document.getElementById("qtyValue");

  if (btnMinus && btnPlus && qtyValue) {
    let currentQty = parseInt(qtyValue.textContent, 10) || 1;
    btnMinus.addEventListener("click", () => {
      if (currentQty > 1) {
        currentQty--;
        qtyValue.textContent = currentQty;
      }
    });
    btnPlus.addEventListener("click", () => {
      currentQty++;
      qtyValue.textContent = currentQty;
    });
  }

  const thumbs = document.querySelectorAll(".thumb");
  const mainImage = document.getElementById("mainImage");
  const prevThumbBtn = document.getElementById("prevThumb");
  const nextThumbBtn = document.getElementById("nextThumb");

  if (thumbs.length > 0 && mainImage) {
    let thumbIndex = 0;
    function updateMainImage(index) {
      thumbs.forEach((thumb, i) => {
        if (i === index) thumb.classList.add("active");
        else thumb.classList.remove("active");
      });
      const newSrc = thumbs[index].querySelector("img").getAttribute("src");
      mainImage.style.opacity = "0";
      setTimeout(() => {
        mainImage.setAttribute("src", newSrc);
        mainImage.style.opacity = "1";
      }, 150);
    }

    thumbs.forEach((thumb, index) => {
      thumb.addEventListener("click", () => {
        thumbIndex = index;
        updateMainImage(thumbIndex);
      });
    });

    if (prevThumbBtn) {
      prevThumbBtn.addEventListener("click", () => {
        thumbIndex = (thumbIndex - 1 + thumbs.length) % thumbs.length;
        updateMainImage(thumbIndex);
      });
    }

    if (nextThumbBtn) {
      nextThumbBtn.addEventListener("click", () => {
        thumbIndex = (thumbIndex + 1 + thumbs.length) % thumbs.length;
        updateMainImage(thumbIndex);
      });
    }
  }

  const accordions = document.querySelectorAll(".accordion-item");
  accordions.forEach((acc) => {
    acc.addEventListener("toggle", () => {
      if (acc.open) {
        accordions.forEach((otherAcc) => {
          if (otherAcc !== acc) otherAcc.removeAttribute("open");
        });
      }
    });
  });
});

// ==========================================
// 8. RENDERIZAÇÃO DA CESTA / CHECKOUT
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const cartItemsList = document.getElementById("cartItemsList");
  const cartTotal = document.getElementById("cartTotal");
  const checkoutLink = document.getElementById("checkoutLink");

  if (cartItemsList) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    cartItemsList.innerHTML = "";
    let totalGeral = 0;

    if (checkoutLink) {
      const cestaVazia = carrinho.length === 0;
      checkoutLink.setAttribute("aria-disabled", String(cestaVazia));
      checkoutLink.tabIndex = cestaVazia ? -1 : 0;
      checkoutLink.addEventListener("click", (event) => {
        if (cestaVazia) event.preventDefault();
      });
    }

    if (carrinho.length === 0) {
      cartItemsList.innerHTML =
        "<p style='text-align: center; padding: 20px; color: #9A8E7E;'>A sua cesta está vazia.</p>";
      if (cartTotal) cartTotal.innerText = "R$ 0,00";
      return;
    }

    carrinho.forEach((item, index) => {
      const produto = encontrarProdutoDoCarrinho(item);
      const nomeBruto = produto?.nome || item.nome;
      const nomeProduto = nomeBruto.replace(/<br\s*[\/]?>/gi, " ").replace(/<\/?[^>]+(>|$)/g, "").replace(/\s+/g, " ").trim();
      const precoOriginal = produto ? produto.precoOriginal : item.preco;
      const precoDesconto = produto
        ? produto.precoDesconto
        : item.precoDesconto || "";
      let precoParaCalculo =
        precoDesconto.trim() !== "" ? precoDesconto : precoOriginal;

      let valorNumerico =
        parseFloat(
          precoParaCalculo
            .replace("R$", "")
            .replace(/\./g, "")
            .replace(",", ".")
            .trim(),
        ) || 0;

      let subtotal = valorNumerico * item.quantidade;
      totalGeral += subtotal;

      const divItem = document.createElement("div");
      divItem.classList.add("cart-item-card");
      const imagem =
        produto?.imagemFrente || item.imagem || "produtos/thairo-1x1.svg";

      let blocoPrecoCarrinho = `<span class="preco-atual">${precoOriginal}</span>`;

      if (precoDesconto.trim() !== "") {
        blocoPrecoCarrinho = `
          <div style="display: flex; flex-direction: row; align-items: baseline; gap: 6px;">
            <span class="preco-atual">${precoDesconto}</span>
            <span class="preco-antigo">${precoOriginal}</span>
          </div>
        `;
      }

      divItem.innerHTML = `
        <img src="${resolveAssetUrl(imagem)}" alt="${nomeProduto}" class="cart-item-img">
        
        <div class="cart-item-content" style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
            <h4 class="cart-item-title" style="margin: 0; font-size: 15px; font-weight: bold; color: #3d2d2d;">${nomeProduto}</h4>
            
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div class="cart-item-price-area">
                    ${blocoPrecoCarrinho}
                </div>

                <div class="cart-item-controls" style="display: flex; align-items: center; gap: 14px;">
                    <div class="qty-selector">
                        <button onclick="alterarQtd(${index}, -1, this)" aria-label="Diminuir quantidade">-</button>
                        <span>${item.quantidade}</span>
                        <button onclick="alterarQtd(${index}, 1, this)" aria-label="Aumentar quantidade">+</button>
                    </div>
                    <button onclick="removerDaCesta(${index}, this)" class="cart-item-delete" style="background: none; border: none; cursor: pointer;" title="Remover item">
<svg xmlns="http://www.w3.org/2000/svg" width="32.8" height="32.8" viewBox="0 0 32.8 32.8"><path d="M16.8 15l7.5-7.5l1.8 1.8l-7.5 7.5l7.5 7.5l-1.8 1.8l-7.5-7.5l-7.5 7.5l-1.8-1.8l7.5-7.5l-7.5-7.5l1.8-1.8l7.5 7.5Z" fill="#3d2d2d"/></svg>            </div>
        </div>
      `;
      if (produto) {
        divItem.dataset.productUrl = resolveUrlParaPagina(
          gerarLinkPaginaProduto(produto),
        );
        divItem.setAttribute("role", "link");
        divItem.tabIndex = 0;
        divItem.setAttribute("aria-label", `Ver ${nomeProduto}`);
        divItem.addEventListener("click", (event) => {
          if (event.target.closest("button, a, input, select, textarea")) return;
          window.location.href = divItem.dataset.productUrl;
        });
        divItem.addEventListener("keydown", (event) => {
          if (
            event.target === divItem &&
            (event.key === "Enter" || event.key === " ")
          ) {
            event.preventDefault();
            window.location.href = divItem.dataset.productUrl;
          }
        });
      }
      cartItemsList.appendChild(divItem);
    });

    if (cartTotal) {
      cartTotal.innerText = `R$ ${totalGeral.toFixed(2).replace(".", ",")}`;
    }
  }
});

// ==========================================
// 9. FUNÇÕES GLOBAIS DE CONTROLO DO CARRINHO
// ==========================================
window.removerDaCesta = function (index, botao) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  botao.classList.add("animando");
  setTimeout(() => location.reload(), 150);
};

window.alterarQtd = function (index, delta, botao) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho[index].quantidade += delta;

  if (carrinho[index].quantidade < 1) {
    carrinho[index].quantidade = 1;
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  botao.closest(".qty-selector").classList.add("animando");
  setTimeout(() => location.reload(), 150);
};

// ==========================================
// 10. ENVIO DE PEDIDO VIA WHATSAPP
// ==========================================
function enviarPedidoWhatsApp() {
  const numeroWhatsApp = "5511996624974";
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

  if (carrinho.length === 0) {
    alert("O seu carrinho está vazio!");
    return;
  }

  let mensagem = "Olá! Gostaria de fazer o seguinte pedido:\n\n*Produtos:* \n";
  let totalGeral = 0;

  carrinho.forEach((item) => {
    const produto = encontrarProdutoDoCarrinho(item);
    const nomeProduto = produto?.nome || item.nome;
    const precoOriginal = produto ? produto.precoOriginal : item.preco;
    const precoDesconto = produto
      ? produto.precoDesconto
      : item.precoDesconto || "";
    const precoCobrado =
      precoDesconto.trim() !== "" ? precoDesconto : precoOriginal;
    let valorNumerico =
      parseFloat(
        precoCobrado
          .replace("R$", "")
          .replace(/\./g, "")
          .replace(",", ".")
          .trim(),
      ) || 0;
    const subtotal = valorNumerico * item.quantidade;
    totalGeral += subtotal;

    mensagem += `- ${item.quantidade}x ${nomeProduto} (R$ ${subtotal.toFixed(2).replace(".", ",")})\n`;
  });

  mensagem += `\n*Total do Pedido: R$ ${totalGeral.toFixed(2).replace(".", ",")}*`;

  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  window.open(urlWhatsApp, "_blank");
}

// ==========================================
// 11. BOTÃO "COMPRAR AGORA" (Direto para Checkout)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const btnComprarAgora = document.getElementById("btnComprarAgora");

  if (btnComprarAgora) {
    btnComprarAgora.addEventListener("click", (e) => {
      e.preventDefault();
      const produto = obterProdutoDaPaginaAtual();
      if (!produto || produto.esgotado) return;

      const nomeElemento = document.querySelector("h1");
      const nome = nomeElemento
        ? nomeElemento.innerText.trim()
        : "Produto Artesanal";

      const precoElemento = document.querySelector(".preco");
      const preco =
        produto?.precoOriginal ||
        (precoElemento ? precoElemento.innerText.trim() : "R$ 0,00");
      const precoDesconto = produto?.precoDesconto || "";

      const qtyElemento = document.getElementById("qtyValue");
      const quantidade = qtyElemento ? parseInt(qtyElemento.innerText) || 1 : 1;

      const imgElemento = document.querySelector(
        "#mainImage, .main-image, .produto-img",
      );
      const imagem =
        produto?.imagemFrente ||
        (imgElemento?.getAttribute("src")
          ? new URL(imgElemento.getAttribute("src"), document.baseURI).href
          : "produtos/thairo-1x1.svg");

      let carrinho = [
        {
          id: produto?.id,
          nome: produto?.nome || nome,
          preco,
          precoDesconto,
          imagem,
          quantidade,
        },
      ];
      localStorage.setItem("carrinho", JSON.stringify(carrinho));

      window.location.href = resolveUrlParaPagina("checkout.html");
    });
  }
});

// ==========================================
// 12. ADICIONAR À CESTA
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const btnAdicionarCesta = document.getElementById("cartBtn");

  if (btnAdicionarCesta) {
    const nomeElemento = document.querySelector("h1");
    const nomeAtual = nomeElemento ? nomeElemento.innerText.trim() : "";

    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const produtoAtual = obterProdutoDaPaginaAtual();
    const produtoExiste = carrinho.some(
      (item) =>
        (produtoAtual && item.id === produtoAtual.id) ||
        (!item.id && item.nome === (produtoAtual?.nome || nomeAtual)),
    );

    if (produtoExiste && nomeAtual !== "") {
      btnAdicionarCesta.innerText = "Adicionado à Cesta";
      btnAdicionarCesta.style.backgroundColor = "#3d2d2d";
      btnAdicionarCesta.style.color = "#CEC8B8";
      btnAdicionarCesta.style.borderColor = "#3d2d2d";
    }

    btnAdicionarCesta.addEventListener("click", () => {
      const nome = nomeAtual || "Produto Artesanal";

      const produto = obterProdutoDaPaginaAtual();
      if (produto?.esgotado) return;
      const precoElemento = document.querySelector(".preco");
      const preco =
        produto?.precoOriginal ||
        (precoElemento ? precoElemento.innerText.trim() : "R$ 0,00");
      const precoDesconto = produto?.precoDesconto || "";

      const qtyElemento = document.getElementById("qtyValue");
      const quantidadeSelecionada = qtyElemento
        ? parseInt(qtyElemento.innerText) || 1
        : 1;

      const imgElemento = document.querySelector(
        "#mainImage, .main-image, .produto-img",
      );
      const imagem =
        produto?.imagemFrente ||
        (imgElemento?.getAttribute("src")
          ? new URL(imgElemento.getAttribute("src"), document.baseURI).href
          : "produtos/thairo-1x1.svg");

      let carrinhoAtualizado =
        JSON.parse(localStorage.getItem("carrinho")) || [];

      const indexExistente = carrinhoAtualizado.findIndex(
        (item) =>
          (produto && item.id === produto.id) ||
          (!item.id && item.nome === (produto?.nome || nome)),
      );

      if (indexExistente >= 0) {
        carrinhoAtualizado[indexExistente].id = produto?.id;
        carrinhoAtualizado[indexExistente].nome = produto?.nome || nome;
        carrinhoAtualizado[indexExistente].quantidade = quantidadeSelecionada;
        carrinhoAtualizado[indexExistente].preco = preco;
        carrinhoAtualizado[indexExistente].precoDesconto = precoDesconto;
        carrinhoAtualizado[indexExistente].imagem = imagem;
      } else {
        carrinhoAtualizado.push({
          id: produto?.id,
          nome: produto?.nome || nome,
          preco,
          precoDesconto,
          imagem,
          quantidade: quantidadeSelecionada,
        });
      }

      localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
      if (typeof atualizarContadorCarrinho === "function") {
        atualizarContadorCarrinho();
      }

      btnAdicionarCesta.innerText = "Adicionado à Cesta";
      btnAdicionarCesta.style.backgroundColor = "#3d2d2d";
      btnAdicionarCesta.style.color = "#CEC8B8";
      btnAdicionarCesta.style.borderColor = "#3d2d2d";
      btnAdicionarCesta.style.transition = "all 0.3s ease";
    });
  }
});

// ==========================================
// 13. CONTADOR DINÂMICO DO CARRINHO (BADGE)
// ==========================================
function atualizarContadorCarrinho() {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  let totalItens = carrinho.reduce(
    (acc, item) => acc + (item.quantidade || 1),
    0,
  );

  let badge = document.getElementById("cart-count");
  if (badge) {
    badge.innerText = totalItens;

    if (totalItens > 0) {
      badge.style.setProperty("display", "inline-flex", "important");
      badge.style.setProperty("visibility", "visible", "important");
    } else {
      badge.style.setProperty("display", "none", "important");
      badge.style.setProperty("visibility", "hidden", "important");
    }
  }
}

window.addEventListener("pageshow", (event) => {
  if (event.persisted) {
    window.location.reload();
  }
});




// ==========================================
// 14. INFO EDIÇÃO (Integrado ao novo carregarBancoProdutos + Memória de Token)
// ==========================================
function gerarConteudoProdutosJs(produtosCustomizados, produtosExcluidos) {
  const produtosOriginais = typeof BANCO_PRODUTOS_ORIGINAIS !== "undefined"
    ? BANCO_PRODUTOS_ORIGINAIS
    : [];

  return `const BANCO_PRODUTOS_ORIGINAIS = ${JSON.stringify(produtosOriginais, null, 2)};
const PRODUTOS_CUSTOMIZADOS_GITHUB = ${JSON.stringify(produtosCustomizados, null, 2)};
const PRODUTOS_EXCLUIDOS_GITHUB = ${JSON.stringify(produtosExcluidos, null, 2)};

function gerarLinkPaginaProduto(produto) {
  return \`produto.html?id=\${encodeURIComponent(produto.id)}\`;
}

function carregarBancoProdutos() {
  const customizadosLocais = JSON.parse(localStorage.getItem("banco_produtos_custom") || "[]");
  const produtosExcluidosLocais = JSON.parse(localStorage.getItem("banco_produtos_excluidos") || "[]");
  const produtosExcluidos = [...PRODUTOS_EXCLUIDOS_GITHUB, ...produtosExcluidosLocais];
  const produtos = [...BANCO_PRODUTOS_ORIGINAIS];

  [...PRODUTOS_CUSTOMIZADOS_GITHUB, ...customizadosLocais].forEach((customizado) => {
    const indice = produtos.findIndex((produto) => produto.id === customizado.id);
    if (indice >= 0) {
      produtos[indice] = customizado;
    } else {
      produtos.push(customizado);
    }
  });

  const produtosAtivos = produtos.filter((produto) => !produtosExcluidos.includes(produto.id));
  const codigosUtilizados = new Set(
    produtosAtivos.map((produto) => produto.codigoBarras).filter(Boolean),
  );
  produtosAtivos.forEach((produto, indice) => {
    if (!produto.id) produto.id = \`produto-\${String(indice + 1).padStart(3, "0")}\`;
    if (!produto.codigoBarras) {
      let hash = 17;
      for (const caractere of String(produto.id)) {
        hash = (hash * 31 + caractere.charCodeAt(0)) % 10000000000;
      }
      for (let tentativa = 0; ; tentativa += 1) {
        const base = \`20\${String((hash + tentativa) % 10000000000).padStart(10, "0")}\`;
        const soma = [...base].reduce(
          (total, digito, posicao) =>
            total + Number(digito) * (posicao % 2 === 0 ? 1 : 3),
          0,
        );
        const codigo = \`\${base}\${(10 - (soma % 10)) % 10}\`;
        if (!codigosUtilizados.has(codigo)) {
          codigosUtilizados.add(codigo);
          produto.codigoBarras = codigo;
          break;
        }
      }
    }
  });

  return produtosAtivos;
}

const BANCO_PRODUTOS = carregarBancoProdutos();

function encontrarProdutoDoCarrinho(item) {
  return (
    BANCO_PRODUTOS.find((produto) => produto.id === item.id) ||
    BANCO_PRODUTOS.find((produto) => produto.nome === item.nome)
  );
}`;
}

document.addEventListener("DOMContentLoaded", () => {
    const listaLateral = document.getElementById("listaLateralProdutos");
    const formEdicao = document.getElementById("formEdicaoProduto");
    const tituloAcao = document.getElementById("tituloAcaoAdmin");
    const imgPreview = document.getElementById("previewImagemProduto");
    const placeholderMsg = document.getElementById("placeholderImgMsg");
    const areaExport = document.getElementById("areaCodigoExportado");
    const outputJson = document.getElementById("outputJsonProdutos");
    const containerExtras = document.getElementById("containerAcordeoesExtras");
    const btnAddExtra = document.getElementById("btnAdicionarAcordeaoExtra");
    if (
      !listaLateral ||
      !formEdicao ||
      !tituloAcao ||
      !imgPreview ||
      !placeholderMsg ||
      !areaExport ||
      !outputJson ||
      !containerExtras ||
      !btnAddExtra
    ) {
      return;
    }
    const painelConteudoProduto = document.getElementById("painelConteudoProduto");
    if (painelConteudoProduto) {
      painelConteudoProduto.open = !window.matchMedia("(max-width: 1024px)").matches;
    }

    localStorage.removeItem("github_token_admin");

    // Usa a função do seu novo produtos.js para carregar unificado
    let produtosLocal = typeof carregarBancoProdutos === "function" ? carregarBancoProdutos() : (typeof BANCO_PRODUTOS !== "undefined" ? BANCO_PRODUTOS : []);

    function obterCategoriaSelecionada() {
      const categoriaSelecionada = document.querySelector("input[name='sub-produtos']:checked");
      return categoriaSelecionada
        ? `funcao-${categoriaSelecionada.id.replace("sub-", "")}`
        : "funcao-sabonete-corporal";
    }

    function renderizarListaLateral(filtroFuncao = obterCategoriaSelecionada(), produtoSelecionadoIndex = null) {
      listaLateral.innerHTML = "";
      const filtrados = produtosLocal.filter(p => p.tags && p.tags.funcao === filtroFuncao);

      const seletorMobile = document.createElement("select");
      seletorMobile.className = "admin-product-mobile-select";
      seletorMobile.setAttribute("aria-label", "Selecionar produto");

      filtrados.forEach((produto, indiceProdutoLista) => {
        const globalIndex = produtosLocal.indexOf(produto);
        const opcao = document.createElement("option");
        opcao.value = String(globalIndex);
        opcao.textContent = produto.nome.replace(/<br\s*[\/]?>/gi, " ");
        seletorMobile.appendChild(opcao);

        const divItem = document.createElement("button");
        divItem.type = "button";
        divItem.className = "item-lista-admin";
        divItem.dataset.produtoIndex = String(globalIndex);
        divItem.textContent = produto.nome.replace(/<br\s*[\/]?>/gi, " ");
        
        divItem.addEventListener("click", () => {
          document.querySelectorAll(".item-lista-admin").forEach(el => el.classList.remove("ativo"));
          divItem.classList.add("ativo");
          seletorMobile.value = String(globalIndex);
          carregarFormulario(globalIndex);
        });
        
        listaLateral.appendChild(divItem);
      });

      const opcaoAdicionar = document.createElement("option");
      opcaoAdicionar.value = "__adicionar__";
      opcaoAdicionar.textContent = "+ Adicionar produto";
      seletorMobile.appendChild(opcaoAdicionar);
      seletorMobile.addEventListener("change", () => {
        if (seletorMobile.value === "__adicionar__") {
          prepararNovoProduto(filtroFuncao);
          return;
        }

        const produtoSelecionado = listaLateral.querySelector(
          `.item-lista-admin[data-produto-index="${seletorMobile.value}"]`,
        );
        produtoSelecionado?.click();
      });
      listaLateral.prepend(seletorMobile);

      const btnAdicionar = document.createElement("button");
      btnAdicionar.type = "button";
      btnAdicionar.className = "item-lista-admin item-adicionar";
      btnAdicionar.textContent = "+ Adicionar";
      btnAdicionar.addEventListener("click", () => {
        document.querySelectorAll(".item-lista-admin").forEach(el => el.classList.remove("ativo"));
        btnAdicionar.classList.add("ativo");
        prepararNovoProduto(filtroFuncao);
      });
      listaLateral.appendChild(btnAdicionar);

      if (filtrados.length === 0) {
        formEdicao.hidden = true;
        tituloAcao.textContent = "Nenhum produto nesta categoria";
        areaExport.hidden = true;
        outputJson.value = "";
        document.getElementById("btnExcluirProduto").hidden = true;
        imgPreview.hidden = true;
        placeholderMsg.textContent = "Use “+ Adicionar” para cadastrar o primeiro produto desta categoria.";
        placeholderMsg.hidden = false;
        containerExtras.innerHTML = "";
        return;
      }

      const indiceProduto = produtoSelecionadoIndex === null
        ? 0
        : filtrados.findIndex((produto) => produtosLocal.indexOf(produto) === produtoSelecionadoIndex);
      const itemSelecionado = listaLateral.querySelectorAll(".item-lista-admin")[indiceProduto >= 0 ? indiceProduto : 0];
      if (itemSelecionado) itemSelecionado.click();
    }

    const chaveProdutosVisualizados = "admin_produtos_visualizados";
    if (localStorage.getItem(chaveProdutosVisualizados) === null) {
      const idsOriginais = typeof BANCO_PRODUTOS_ORIGINAIS === "undefined"
        ? []
        : BANCO_PRODUTOS_ORIGINAIS.map((produto) => produto.id);
      localStorage.setItem(chaveProdutosVisualizados, JSON.stringify(idsOriginais));
    }

    function atualizarNotificacaoProdutos() {
      const visualizados = new Set(
        JSON.parse(localStorage.getItem(chaveProdutosVisualizados) || "[]"),
      );
      const novos = produtosLocal.filter((produto) => !visualizados.has(produto.id));
      const badge = document.getElementById("admin-products-badge");
      const aviso = document.getElementById("notificacaoProdutosNovos");
      const quantidade = novos.length;

      if (badge) {
        badge.textContent = quantidade > 99 ? "99+" : String(quantidade);
        badge.hidden = quantidade === 0;
        badge.setAttribute(
          "aria-label",
          `${quantidade} ${quantidade === 1 ? "produto novo" : "produtos novos"}`,
        );
      }
      if (aviso) {
        aviso.textContent = quantidade
          ? `${quantidade} ${quantidade === 1 ? "produto novo" : "produtos novos"}`
          : "Nenhum produto novo";
        aviso.hidden = quantidade === 0;
      }
    }

    function atualizarListaProdutosAdmin() {
      const indiceSelecionado = document.getElementById("editIndex").value;
      produtosLocal = typeof carregarBancoProdutos === "function"
        ? carregarBancoProdutos()
        : produtosLocal;
      if (typeof BANCO_PRODUTOS !== "undefined" && Array.isArray(BANCO_PRODUTOS)) {
        BANCO_PRODUTOS.splice(0, BANCO_PRODUTOS.length, ...produtosLocal);
      }
      renderizarListaLateral(
        obterCategoriaSelecionada(),
        indiceSelecionado === "" || indiceSelecionado === "novo"
          ? null
          : Number(indiceSelecionado),
      );
      atualizarNotificacaoProdutos();
    }

    window.addEventListener("admin:refresh-products", atualizarListaProdutosAdmin);

    function criarCampoAcordeaoExtra(titulo = "", conteudo = "") {
      const wrapper = document.createElement("div");
      wrapper.className = "acordeao-extra-item";
      const cabecalho = document.createElement("div");
      cabecalho.className = "acordeao-extra-heading";
      const labelTitulo = document.createElement("label");
      labelTitulo.textContent = "Título do acordeão";
      const inputTitulo = document.createElement("input");
      inputTitulo.className = "extra-titulo";
      inputTitulo.value = titulo;
      inputTitulo.placeholder = "Ex.: Informações de segurança";
      labelTitulo.appendChild(inputTitulo);

      const btnRemover = document.createElement("button");
      btnRemover.type = "button";
      btnRemover.className = "btn-excluir-admin btn-remover-extra";
      btnRemover.textContent = "Remover";
      cabecalho.append(labelTitulo, btnRemover);

      const labelConteudo = document.createElement("label");
      labelConteudo.textContent = "Conteúdo / descrição";
      const inputConteudo = document.createElement("textarea");
      inputConteudo.className = "extra-conteudo";
      inputConteudo.rows = 3;
      inputConteudo.value = conteudo;
      inputConteudo.placeholder = "Escreva o conteúdo aqui...";
      labelConteudo.appendChild(inputConteudo);
      wrapper.append(cabecalho, labelConteudo);

      btnRemover.addEventListener("click", () => {
        wrapper.remove();
      });

      containerExtras.appendChild(wrapper);
    }

    btnAddExtra.addEventListener("click", () => {
      criarCampoAcordeaoExtra();
    });

    function carregarFormulario(index) {
      const p = produtosLocal[index];
      if (!p) return;

      const f = p.filtrosMockup || {};
      const fBrilho = document.getElementById("filtroBrilho");
      const fSaturacao = document.getElementById("filtroSaturacao");
      const fContraste = document.getElementById("filtroContraste");
      const fMatiz = document.getElementById("filtroMatiz");

      if (fBrilho) fBrilho.value = f.brilho !== undefined ? f.brilho : 100;
      if (fSaturacao) fSaturacao.value = f.saturacao !== undefined ? f.saturacao : 100;
      if (fContraste) fContraste.value = f.contraste !== undefined ? f.contraste : 100;
      if (fMatiz) fMatiz.value = f.matiz !== undefined ? f.matiz : 0;

      if (imgPreview) {
        imgPreview.style.filter = `brightness(${fBrilho ? fBrilho.value : 100}%) saturate(${fSaturacao ? fSaturacao.value : 100}%) contrast(${fContraste ? fContraste.value : 100}%) hue-rotate(${fMatiz ? fMatiz.value : 0}deg)`;
      }

      tituloAcao.textContent = `${p.nome.replace(/<br>/g, " ")}`;
      formEdicao.hidden = false;
      areaExport.hidden = false;
      document.getElementById("btnExcluirProduto").hidden = false;

      document.getElementById("editIndex").value = index;
      document.getElementById("editId").value = p.id || "";
      document.getElementById("editCodigoBarras").value = p.codigoBarras || "";
      document.getElementById("editNome").value = (p.nome || "").replace(/<br\s*[\/]?>/gi, " ");
      document.getElementById("editPrecoOriginal").value = p.precoOriginal || "";
      document.getElementById("editPrecoDesconto").value = p.precoDesconto || "";
      document.getElementById("editSubtitulo").value = p.subtitulo || "";
      document.getElementById("editEsgotado").checked = Boolean(p.esgotado);
      document.getElementById("editImagem").value = p.imagemFrente || "";
      document.getElementById("editImagemVerso").value = p.imagemVerso || "";

      const ac = p.acordeoes || {};
      document.getElementById("editSobre").value = ac.sobre || "";
      document.getElementById("editBeneficios").value = ac.beneficios || "";
      document.getElementById("editComposicao").value = ac.composicao || "";
      document.getElementById("editModoUso").value = ac.modoUso || "";
      document.getElementById("editAdvertencias").value = ac.advertencias || "";
      document.getElementById("editFichaTecnica").value = ac.fichaTecnica || "";
      document.getElementById("editPagamentos").value = ac.pagamentos || "";
      document.getElementById("editFrete").value = ac.frete || "";
      document.getElementById("editTrocas").value = ac.trocas || "";

      const tit = p.titulosAcordeoes || {};
      document.getElementById("editTituloSobre").value = tit.sobre || "SOBRE O PRODUTO";
      document.getElementById("editTituloBeneficios").value = tit.beneficios || "BENEFÍCIOS";
      document.getElementById("editTituloComposicao").value = tit.composicao || "COMPOSIÇÃO";
      document.getElementById("editTituloModoUso").value = tit.modoUso || "MODO DE USO";
      document.getElementById("editTituloAdvertencias").value = tit.advertencias || "ADVERTÊNCIAS E PRECAUÇÕES";
      document.getElementById("editTituloFichaTecnica").value = tit.fichaTecnica || "FICHA TÉCNICA";
      document.getElementById("editTituloPagamentos").value = tit.pagamentos || "FORMAS DE PAGAMENTO";
      document.getElementById("editTituloFrete").value = tit.frete || "VALOR DE FRETE";
      document.getElementById("editTituloTrocas").value = tit.trocas || "TROCAS E DEVOLUÇÕES";

      containerExtras.innerHTML = "";
      if (p.acordeoesExtras && Array.isArray(p.acordeoesExtras)) {
        p.acordeoesExtras.forEach(item => {
          criarCampoAcordeaoExtra(item.titulo, item.conteudo);
        });
      }

      if (p.imagemFrente) {
        const caminhoFinal = typeof resolveAssetUrl === "function" ? resolveAssetUrl(p.imagemFrente) : p.imagemFrente;
        imgPreview.src = caminhoFinal;
        imgPreview.hidden = false;
        placeholderMsg.hidden = true;
      } else {
        imgPreview.hidden = true;
        placeholderMsg.hidden = false;
      }

      outputJson.value = JSON.stringify(p, null, 2);
    }

    function prepararNovoProduto(funcaoAtual) {
      tituloAcao.textContent = "Adicionar Novo Produto";
      formEdicao.hidden = false;
      areaExport.hidden = true;
      document.getElementById("btnExcluirProduto").hidden = true;

      document.getElementById("editIndex").value = "novo";
      document.getElementById("editId").value = "novo-produto-id";
      document.getElementById("editCodigoBarras").value = "";
      document.getElementById("editNome").value = "Novo Produto<br>Artesanal";
      document.getElementById("editPrecoOriginal").value = "R$10";
      document.getElementById("editPrecoDesconto").value = "";
      document.getElementById("editSubtitulo").value = "[1 un. / 85g].";
      document.getElementById("editEsgotado").checked = false;
      document.getElementById("editImagem").value = "produtos/";
      document.getElementById("editImagemVerso").value = "";
      
      document.getElementById("editSobre").value = "Descrição...";
      document.getElementById("editBeneficios").value = "- Produção artesanal";
      document.getElementById("editComposicao").value = "Ingredientes naturais";
      document.getElementById("editModoUso").value = "Uso externo";
      document.getElementById("editAdvertencias").value = "Conservar em local seco";
      document.getElementById("editFichaTecnica").value = "Volume: 60ml";
      document.getElementById("editPagamentos").value = "Pagamento facilitado via Pix com aprovação imediata.";
      document.getElementById("editFrete").value = "Retirada no local ou envio a combinar pelo WhatsApp.";
      document.getElementById("editTrocas").value = "Conforme o CDC.";

      document.getElementById("editTituloSobre").value = "SOBRE O PRODUTO";
      document.getElementById("editTituloBeneficios").value = "BENEFÍCIOS";
      document.getElementById("editTituloComposicao").value = "COMPOSIÇÃO";
      document.getElementById("editTituloModoUso").value = "MODO DE USO";
      document.getElementById("editTituloAdvertencias").value = "ADVERTÊNCIAS E PRECAUÇÕES";
      document.getElementById("editTituloFichaTecnica").value = "FICHA TÉCNICA";
      document.getElementById("editTituloPagamentos").value = "PAGAMENTO";
      document.getElementById("editTituloFrete").value = "FRETE E ENVIO";
      document.getElementById("editTituloTrocas").value = "POLÍTICA DE TROCAS E DEVOLUÇÕES";

      containerExtras.innerHTML = "";

      imgPreview.hidden = true;
      placeholderMsg.hidden = false;
    }

    document.getElementById("editImagem").addEventListener("input", (event) => {
      const caminho = event.target.value;
      if (caminho.trim() !== "") {
        const caminhoFinal = typeof resolveAssetUrl === "function" ? resolveAssetUrl(caminho) : caminho;
        imgPreview.src = caminhoFinal;
        imgPreview.hidden = false;
        placeholderMsg.hidden = true;
      } else {
        imgPreview.hidden = true;
        placeholderMsg.hidden = false;
      }
    });

    // Função auxiliar para atualizar o localStorage mantendo a lógica de customizados
    function salvarCustomizados() {
      const originais = (typeof BANCO_PRODUTOS_ORIGINAIS !== "undefined") ? BANCO_PRODUTOS_ORIGINAIS : [];
      const idsExcluidos = originais
        .filter((produto) => !produtosLocal.some((item) => item.id === produto.id))
        .map((produto) => produto.id);
      localStorage.setItem("banco_produtos_excluidos", JSON.stringify(idsExcluidos));
      
      const customizados = produtosLocal.filter(p => {
        const original = originais.find(o => o.id === p.id);
        if (!original) return true; // É novo
        return JSON.stringify(original) !== JSON.stringify(p); // Foi alterado
      });

      localStorage.setItem("banco_produtos_custom", JSON.stringify(customizados));
      if (typeof BANCO_PRODUTOS !== "undefined" && Array.isArray(BANCO_PRODUTOS)) {
        BANCO_PRODUTOS.splice(0, BANCO_PRODUTOS.length, ...produtosLocal);
      }
      return customizados;
    }

    // ==========================================
    // FORMULÁRIO DE SALVAMENTO COM API DO GITHUB
    // ==========================================
    formEdicao.addEventListener("submit", async (e) => {
      e.preventDefault();

      const usuario = document.getElementById("gitUser")?.value.trim();
      const repositorio = document.getElementById("gitRepo")?.value.trim();
      const token = document.getElementById("gitToken")?.value.trim();

      const idx = document.getElementById("editIndex").value;
      const produtoAtual = idx !== "novo" ? produtosLocal[idx] : {};
      const indiceAtual = idx === "novo" ? -1 : Number(idx);
      const campoId = document.getElementById("editId");
      const campoNome = document.getElementById("editNome");
      const campoPrecoOriginal = document.getElementById("editPrecoOriginal");
      const campoImagem = document.getElementById("editImagem");
      const idProduto = campoId.value.trim();
      const nomeProduto = campoNome.value.trim();
      const precoOriginal = campoPrecoOriginal.value.trim();
      const imagemFrente = campoImagem.value.trim();
      const precoNumerico = converterPrecoParaNumero(precoOriginal);

      const campoObrigatorioInvalido = [
        [campoId, idProduto, "Informe o ID do produto."],
        [campoNome, nomeProduto, "Informe o nome do produto."],
        [campoPrecoOriginal, precoOriginal, "Informe o preço original do produto."],
        [campoImagem, imagemFrente, "Informe o caminho da imagem do produto."],
      ].find(([, valor]) => !valor);
      if (campoObrigatorioInvalido) {
        const [campo, , mensagem] = campoObrigatorioInvalido;
        alert(mensagem);
        campo.focus();
        return;
      }

      if (!Number.isFinite(precoNumerico) || precoNumerico <= 0) {
        alert("Informe um preço original válido e maior que zero.");
        campoPrecoOriginal.focus();
        return;
      }

      if (imagemFrente.endsWith("/")) {
        alert("Informe o nome do arquivo da imagem, não apenas a pasta.");
        campoImagem.focus();
        return;
      }

      if (produtosLocal.some((produto, index) => index !== indiceAtual && produto.id === idProduto)) {
        alert("Este ID já está vinculado a outro produto.");
        campoId.focus();
        return;
      }

      let codigoBarras = document.getElementById("editCodigoBarras").value.trim();
      const codigoDuplicado = codigoBarras && produtosLocal.some((produto, index) =>
        index !== indiceAtual && produto.codigoBarras === codigoBarras
      );

      if (codigoDuplicado) {
        alert("Este código de barras já está vinculado a outro produto.");
        document.getElementById("editCodigoBarras").focus();
        return;
      }

      if (!codigoBarras && typeof gerarCodigoBarrasInterno === "function") {
        const codigosUtilizados = new Set(
          produtosLocal
            .filter((_, index) => index !== indiceAtual)
            .map((produto) => produto.codigoBarras)
            .filter(Boolean),
        );
        codigoBarras = gerarCodigoBarrasInterno(
          document.getElementById("editId").value.trim(),
          codigosUtilizados,
        );
        document.getElementById("editCodigoBarras").value = codigoBarras;
      }

      const acordeoesExtrasArray = [];
      document.querySelectorAll(".acordeao-extra-item").forEach(item => {
        const titulo = item.querySelector(".extra-titulo").value.trim();
        const conteudo = item.querySelector(".extra-conteudo").value.trim();
        if (titulo !== "" || conteudo !== "") {
          acordeoesExtrasArray.push({ titulo, conteudo });
        }
      });

      const dadosForm = {
        id: idProduto,
        codigoBarras,
        nome: nomeProduto,
        precoOriginal,
        precoDesconto: document.getElementById("editPrecoDesconto").value,
        subtitulo: document.getElementById("editSubtitulo").value,
        esgotado: document.getElementById("editEsgotado").checked,
        imagemFrente,
        imagemVerso: document.getElementById("editImagemVerso").value.trim(),
        tags: produtoAtual.tags || {
          linha: "linhas-classico",
          funcao: obterCategoriaSelecionada(),
          categoria: ["catalogo"]
        },
        titulosAcordeoes: {
          sobre: document.getElementById("editTituloSobre").value,
          beneficios: document.getElementById("editTituloBeneficios").value,
          composicao: document.getElementById("editTituloComposicao").value,
          modoUso: document.getElementById("editTituloModoUso").value,
          advertencias: document.getElementById("editTituloAdvertencias").value,
          fichaTecnica: document.getElementById("editTituloFichaTecnica").value,
          pagamentos: document.getElementById("editTituloPagamentos").value,
          frete: document.getElementById("editTituloFrete").value,
          trocas: document.getElementById("editTituloTrocas").value
        },
        acordeoes: {
          sobre: document.getElementById("editSobre").value,
          beneficios: document.getElementById("editBeneficios").value,
          composicao: document.getElementById("editComposicao").value,
          modoUso: document.getElementById("editModoUso").value,
          advertencias: document.getElementById("editAdvertencias").value,
          fichaTecnica: document.getElementById("editFichaTecnica").value,
          pagamentos: document.getElementById("editPagamentos").value,
          frete: document.getElementById("editFrete").value,
          trocas: document.getElementById("editTrocas").value
        },
        acordeoesExtras: acordeoesExtrasArray
      };

      if (idx === "novo") {
        produtosLocal.push(dadosForm);
      } else {
        dadosForm.tags = produtosLocal[idx].tags;
        produtosLocal[idx] = dadosForm;
      }

      salvarCustomizados();
      const indiceProdutoSalvo = idx === "novo" ? produtosLocal.length - 1 : Number(idx);
      atualizarNotificacaoProdutos();

      if (!usuario || !repositorio || !token) {
        alert("Produto salvo neste navegador. Para publicar a alteração para outros visitantes, configure a sincronização do GitHub.");
        renderizarListaLateral(obterCategoriaSelecionada(), indiceProdutoSalvo);
        return;
      }

      alert("Salvando alteração local e enviando diretamente para o GitHub... Aguarde um momento.");

      try {
        const customizadosParaSalvar = JSON.parse(localStorage.getItem("banco_produtos_custom")) || [];
        const produtosExcluidos = JSON.parse(localStorage.getItem("banco_produtos_excluidos") || "[]");
        const conteudoNovoJS = gerarConteudoProdutosJs(customizadosParaSalvar, produtosExcluidos);

        const caminhoArquivo = "produtos.js";
        const urlApi = `https://api.github.com/repos/${usuario}/${repositorio}/contents/${caminhoArquivo}`;

        const respostaGet = await fetch(urlApi, {
          headers: { Authorization: `Bearer ${token}` }
        });
        
        if (!respostaGet.ok) {
          const erroGitHub = await respostaGet.json();
          throw new Error(erroGitHub.message || "Não foi possível ler produtos.js no GitHub. Confira usuário, repositório e permissões Contents: read/write do token.");
        }
        const dadosArquivo = await respostaGet.json();
        const shaAtual = dadosArquivo.sha;

        const respostaPut = await fetch(urlApi, {
          method: "PUT",
          headers: {
            Authorization: `Bearer ${token}`,
            "X-GitHub-Api-Version": "2022-11-28",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            message: `Atualização automática de produtos via painel (${new Date().toLocaleString()})`,
            content: btoa(unescape(encodeURIComponent(conteudoNovoJS))),
            sha: shaAtual
          })
        });

        if (respostaPut.ok) {
          localStorage.removeItem("banco_produtos_custom");
          localStorage.removeItem("banco_produtos_excluidos");
          alert("Sucesso absoluto! O produtos.js foi atualizado no GitHub e refletirá no site em 1 minuto.");
          renderizarListaLateral(obterCategoriaSelecionada(), indiceProdutoSalvo);
        } else {
          const erroGitHub = await respostaPut.json();
          throw new Error(erroGitHub.message || "O GitHub recusou a gravação. Confira permissões Contents: read/write e proteção da branch.");
        }

      } catch (erro) {
        alert("Aviso: Salvo localmente, mas ocorreu um erro ao atualizar o GitHub: " + erro.message);
      }
    });

    const btnExcluir = document.getElementById("btnExcluirProduto");

    if (btnExcluir) {
      btnExcluir.addEventListener("click", async () => {
        const idx = document.getElementById("editIndex").value;
        if (idx === "novo") {
          alert("Este produto ainda não foi guardado.");
          return;
        }

        const produtoParaExcluir = produtosLocal[idx];
        if (!produtoParaExcluir) return;

        if (confirm(`Tens a certeza de que queres excluir o produto "${produtoParaExcluir.nome.replace(/<br\s*[\/]?>/gi, " ")}"?`)) {
          produtosLocal.splice(idx, 1);
          salvarCustomizados();

          const usuario = document.getElementById("gitUser")?.value.trim();
          const repositorio = document.getElementById("gitRepo")?.value.trim();
          const token = document.getElementById("gitToken")?.value.trim();

          if (usuario && repositorio && token) {
            try {
              const customizadosParaSalvar = JSON.parse(localStorage.getItem("banco_produtos_custom")) || [];
              const produtosExcluidos = JSON.parse(localStorage.getItem("banco_produtos_excluidos") || "[]");
              const conteudoNovoJS = gerarConteudoProdutosJs(customizadosParaSalvar, produtosExcluidos);
              const caminhoArquivo = "produtos.js";
              const urlApi = `https://api.github.com/repos/${usuario}/${repositorio}/contents/${caminhoArquivo}`;
              const respostaGet = await fetch(urlApi, {
                headers: { Authorization: `Bearer ${token}` }
              });
              if (!respostaGet.ok) {
                const erroGitHub = await respostaGet.json();
                throw new Error(erroGitHub.message || "Não foi possível ler produtos.js no GitHub.");
              }
              const dadosArquivo = await respostaGet.json();
              const respostaPut = await fetch(urlApi, {
                method: "PUT",
                headers: {
                  Authorization: `Bearer ${token}`,
                  "X-GitHub-Api-Version": "2022-11-28",
                  "Content-Type": "application/json"
                },
                body: JSON.stringify({
                  message: `Exclusão de produto via painel (${new Date().toLocaleString()})`,
                  content: btoa(unescape(encodeURIComponent(conteudoNovoJS))),
                  sha: dadosArquivo.sha
                })
              });
              if (!respostaPut.ok) {
                const erroGitHub = await respostaPut.json();
                throw new Error(erroGitHub.message || "O GitHub recusou a exclusão.");
              }
              localStorage.removeItem("banco_produtos_custom");
              localStorage.removeItem("banco_produtos_excluidos");
            } catch (erro) {
              alert(`Produto excluído neste navegador, mas não foi possível atualizar o GitHub: ${erro.message}`);
            }
          } else {
            alert("Produto excluído neste navegador. Para remover também do site publicado, configure usuário, repositório e token GitHub.");
          }
          
          location.reload();
        }
      });
    }

    document.querySelectorAll("input[name='sub-produtos']").forEach((input) => {
      input.addEventListener("change", () => renderizarListaLateral());
    });

    renderizarListaLateral();
    atualizarNotificacaoProdutos();
});

function lerPedidosArmazenados() {
  const valor = localStorage.getItem("pedidos_admin");
  if (!valor) return [];
  const pedidos = JSON.parse(valor);
  if (!Array.isArray(pedidos)) {
    throw new Error("Os pedidos salvos no navegador estão em um formato inválido.");
  }
  return pedidos;
}

function salvarPedidosArmazenados(pedidos) {
  localStorage.setItem("pedidos_admin", JSON.stringify(pedidos));
}

function converterPrecoParaNumero(preco) {
  const valor = String(preco || "").replace(/[^\d,.-]/g, "").trim();
  if (!valor) return 0;
  const normalizado = valor.includes(",")
    ? valor.replace(/\./g, "").replace(",", ".")
    : valor;
  const numero = Number(normalizado);
  return Number.isFinite(numero) ? numero : 0;
}

function formatarMoeda(valor) {
  return Number(valor || 0).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

function baixarCsv(nome, cabecalho, linhas) {
  const escaparCelula = (valor) => {
    let texto = String(valor ?? "");
    if (/^[=+\-@\t\r]/.test(texto)) texto = `'${texto}`;
    return `"${texto.replace(/"/g, '""')}"`;
  };
  const csv = [cabecalho, ...linhas]
    .map((linha) => linha.map(escaparCelula).join(";"))
    .join("\r\n");
  const blob = new Blob(["\uFEFF", csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${nome}-${new Date().toISOString().slice(0, 10)}.csv`;
  link.hidden = true;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

function exportarRelatorio(tipo, estadoCaixa = {}, clientes = []) {
  const pedidos = lerPedidosArmazenados();
  const itensDoPedido = (pedido) =>
    Array.isArray(pedido.itens) ? pedido.itens : [];
  const dataLegivel = (valor) => {
    if (!valor) return "";
    const data = new Date(valor);
    return Number.isNaN(data.getTime()) ? String(valor) : data.toLocaleString("pt-BR");
  };

  if (tipo === "products") {
    const cabecalho = [
      "ID",
      "Código de barras",
      "Produto",
      "Preço original",
      "Preço promocional",
      "Esgotado",
      "Imagem",
      "Linha",
      "Função",
      "Categoria",
      "Conteúdo da página interna",
    ];
    const linhas = BANCO_PRODUTOS.map((produto) => [
      produto.id,
      produto.codigoBarras,
      String(produto.nome || "").replace(/<br\s*[\/]?>/gi, " "),
      produto.precoOriginal,
      produto.precoDesconto,
      produto.esgotado ? "Sim" : "Não",
      produto.imagemFrente,
      produto.tags?.linha,
      produto.tags?.funcao,
      Array.isArray(produto.tags?.categoria) ? produto.tags.categoria.join(", ") : "",
      JSON.stringify({ subtitulo: produto.subtitulo, acordeoes: produto.acordeoes }),
    ]);
    baixarCsv("relatorio-produtos", cabecalho, linhas);
    return;
  }

  if (tipo === "orders") {
    const cabecalho = [
      "Pedido",
      "Origem",
      "Data do pedido",
      "Cliente",
      "Telefone",
      "CPF",
      "Endereço",
      "CEP",
      "Produto",
      "Código de barras",
      "Quantidade",
      "Preço unitário",
      "Subtotal",
      "Total do pedido",
      "Pagamento",
      "Data de pagamento",
      "Data de entrega",
      "Status",
      "Observação",
    ];
    const linhas = pedidos.flatMap((pedido) => {
      const cliente = pedido.cliente || {};
      const itens = itensDoPedido(pedido);
      const itensRelatorio = itens.length ? itens : [{}];
      return itensRelatorio.map((item) => {
        const produto = BANCO_PRODUTOS.find(
          (registro) => registro.id === item.id || registro.nome === item.nome,
        );
        return [
          pedido.id,
          pedido.origem,
          dataLegivel(pedido.dataCriacao),
          cliente.nome || "Venda no caixa",
          cliente.telefone,
          cliente.cpf,
          [cliente.endereco, cliente.numero, cliente.complemento].filter(Boolean).join(", "),
          cliente.cep,
          String(produto?.nome || item.nome || "").replace(/<br\s*[\/]?>/gi, " "),
          produto?.codigoBarras || item.codigoBarras,
          item.quantidade,
          item.preco,
          item.subtotal ?? converterPrecoParaNumero(item.preco) * Number(item.quantidade || 1),
          pedido.total,
          pedido.formaPagamento,
          dataLegivel(pedido.dataPagamento),
          dataLegivel(pedido.dataEntrega),
          pedido.status,
          pedido.observacao || pedido.motivo,
        ];
      });
    });
    baixarCsv("relatorio-pedidos", cabecalho, linhas);
    return;
  }

  if (tipo === "cash") {
    const vendaAtual = estadoCaixa.vendaAtual || [];
    const pagamentoAtual = estadoCaixa.pagamentoAtual || "";
    const clienteVip = estadoCaixa.clienteVip === true;
    const linhas = vendaAtual.map((item) => [
      item.id,
      item.codigoBarras,
      String(item.nome || "").replace(/<br\s*[\/]?>/gi, " "),
      item.quantidade,
      item.preco,
      converterPrecoParaNumero(item.preco) * item.quantidade,
      pagamentoAtual || "Não selecionado",
      clienteVip ? "Sim" : "Não",
    ]);
    baixarCsv(
      "relatorio-caixa",
      ["ID", "Código de barras", "Produto", "Quantidade", "Preço unitário", "Subtotal", "Pagamento", "Cliente VIP"],
      linhas.length ? linhas : [["", "", "Nenhum item na venda em andamento", "", "", 0, pagamentoAtual, clienteVip ? "Sim" : "Não"]],
    );
    return;
  }

  if (tipo === "clients") {
    const clientesOrdenados = [...clientes].sort((a, b) =>
      a.nome.localeCompare(b.nome, "pt-BR"),
    );
    const linhas = clientesOrdenados.map((cliente) => {
      const compras = cliente.pedidos || [];
      const quantidadeItens = compras.reduce(
        (total, pedido) => total + itensDoPedido(pedido)
          .reduce((soma, item) => soma + Number(item.quantidade || 1), 0),
        0,
      );
      const totalCompras = compras.reduce(
        (total, pedido) => total + Number(pedido.total || 0),
        0,
      );
      const ultimaCompra = compras
        .slice()
        .sort((a, b) => new Date(b.dataCriacao || 0) - new Date(a.dataCriacao || 0))[0];
      const sugestoes = (cliente.sugestoesCliente || [])
        .map((sugestao) => sugestao.texto)
        .filter(Boolean)
        .join(" | ");
      return [
        cliente.nome,
        cliente.telefone,
        cliente.cpf,
        [cliente.endereco, cliente.numero, cliente.complemento].filter(Boolean).join(", "),
        cliente.cep,
        compras.length,
        quantidadeItens,
        totalCompras,
        dataLegivel(ultimaCompra?.dataCriacao),
        sugestoes,
      ];
    });
    baixarCsv(
      "relatorio-clientes",
      ["Cliente", "Telefone", "CPF", "Endereço", "CEP", "Pedidos", "Itens comprados", "Total comprado", "Última compra", "Comentários/sugestões do cliente"],
      linhas,
    );
    return;
  }

  if (tipo === "reports") {
    const concluidos = pedidos.filter((pedido) => pedido.status === "Concluído");
    const totalVendido = concluidos.reduce((total, pedido) => total + Number(pedido.total || 0), 0);
    const unidadesVendidas = concluidos.reduce(
      (total, pedido) => total + itensDoPedido(pedido)
        .reduce((soma, item) => soma + Number(item.quantidade || 1), 0),
      0,
    );
    const linhas = [
      ["Resumo", "Pedidos registrados", pedidos.length],
      ["Resumo", "Vendas concluídas", concluidos.length],
      ["Resumo", "Total vendido", totalVendido],
      ["Resumo", "Unidades vendidas", unidadesVendidas],
    ];
    const vendasPorDia = new Map();
    const hoje = new Date();
    hoje.setHours(0, 0, 0, 0);
    for (let atraso = 6; atraso >= 0; atraso -= 1) {
      const dia = new Date(hoje);
      dia.setDate(dia.getDate() - atraso);
      const chave = `${dia.getFullYear()}-${String(dia.getMonth() + 1).padStart(2, "0")}-${String(dia.getDate()).padStart(2, "0")}`;
      vendasPorDia.set(chave, { dia, total: 0 });
    }
    concluidos.forEach((pedido) => {
      const data = pedido.dataCriacao ? new Date(pedido.dataCriacao) : null;
      if (!data || Number.isNaN(data.getTime())) return;
      const chave = `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, "0")}-${String(data.getDate()).padStart(2, "0")}`;
      const registro = vendasPorDia.get(chave);
      if (registro) registro.total += Number(pedido.total || 0);
    });
    vendasPorDia.forEach(({ dia, total }) =>
      linhas.push(["Vendas por dia", dia.toLocaleDateString("pt-BR"), total]),
    );

    const vendasPagamento = new Map();
    const unidadesProduto = new Map();
    concluidos.forEach((pedido) => {
      const forma = pedido.formaPagamento || "Não informado";
      vendasPagamento.set(forma, (vendasPagamento.get(forma) || 0) + Number(pedido.total || 0));
      itensDoPedido(pedido).forEach((item) => {
        const id = item.id || item.nome;
        unidadesProduto.set(id, (unidadesProduto.get(id) || 0) + Number(item.quantidade || 1));
      });
    });
    [...vendasPagamento.entries()].forEach(([forma, total]) =>
      linhas.push(["Vendas por pagamento", forma, total]),
    );
    [...unidadesProduto.entries()]
      .sort((a, b) => b[1] - a[1])
      .forEach(([id, quantidade]) => {
        const produto = BANCO_PRODUTOS.find((registro) => registro.id === id || registro.nome === id);
        linhas.push(["Produtos vendidos", produto?.nome?.replace(/<br\s*[\/]?>/gi, " ") || id, quantidade]);
      });
    baixarCsv("relatorio-gerencial", ["Seção", "Indicador", "Valor"], linhas);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const listaPedidos = document.getElementById("listaPedidosAdmin");
  if (!listaPedidos) return;

  const detalhesPedido = document.getElementById("detalhesPedidoAdmin");
  const listaClientes = document.getElementById("listaClientesAdmin");
  const resumoRelatorios = document.getElementById("resumoRelatoriosAdmin");
  const graficoRelatorios = document.getElementById("graficoRelatoriosAdmin");
  const graficoPagamentos = document.getElementById("graficoPagamentosAdmin");
  const legendaPagamentos = document.getElementById("legendaPagamentosAdmin");
  const rankingProdutos = document.getElementById("rankingProdutosAdmin");
  const relatorioProdutos = document.getElementById("relatorioProdutosAdmin");
  const listaVenda = document.getElementById("listaVendaCaixa");
  const totalVenda = document.getElementById("totalVendaCaixa");
  const campoCodigo = document.getElementById("buscaCodigoBarras");
  const formaPagamento = document.getElementById("formaPagamentoSelecionada");
  let vendaAtual = [];
  let produtoEmDestaqueId = null;
  let pagamentoAtual = "";
  let clienteVip = false;
  let pedidoSelecionadoId = null;

  function criarCelula(texto, tag = "td") {
    const celula = document.createElement(tag);
    celula.textContent = texto;
    return celula;
  }

  function renderizarDetalhesPedido(pedido) {
    detalhesPedido.replaceChildren();
    const cabecalho = document.createElement("div");
    cabecalho.className = "admin-order-detail-heading";
    const titulo = document.createElement("h2");
    titulo.textContent = `Pedido ${pedido.id || ""}`;
    cabecalho.appendChild(titulo);
    const botaoExcluir = document.createElement("button");
    botaoExcluir.type = "button";
    botaoExcluir.className = "suggestion-remove-button admin-order-delete";
    botaoExcluir.setAttribute("aria-label", `Excluir pedido ${pedido.id || ""}`);
    botaoExcluir.title = "Excluir pedido";
    botaoExcluir.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32.8 32.8" aria-hidden="true"><path d="M16.8 15l7.5-7.5l1.8 1.8l-7.5 7.5l7.5 7.5l-1.8 1.8l-7.5-7.5l-7.5 7.5l-1.8-1.8l7.5-7.5l-7.5-7.5l1.8-1.8l7.5 7.5Z" fill="#3d2d2d"/></svg>`;
    botaoExcluir.addEventListener("click", () => {
      const confirmacao = window.confirm(
        `Excluir o pedido ${pedido.id || ""}? Esta ação não pode ser desfeita.`,
      );
      if (!confirmacao) return;

      salvarPedidosArmazenados(
        lerPedidosArmazenados().filter((item) => item.id !== pedido.id),
      );
      renderizarPainel();
    });
    cabecalho.appendChild(botaoExcluir);
    detalhesPedido.appendChild(cabecalho);
    if (pedido.demonstracao) {
      const avisoDemo = document.createElement("p");
      avisoDemo.className = "admin-demo-badge";
      avisoDemo.textContent = "Demonstração · dados fictícios";
      detalhesPedido.appendChild(avisoDemo);
    }

    function criarAcordeaoPedido(rotulo, aberto = false) {
      const acordeao = document.createElement("details");
      acordeao.className = "accordion-item admin-order-accordion";
      acordeao.open = aberto;
      const resumo = document.createElement("summary");
      resumo.className = "accordion-header";
      const tituloAcordeao = document.createElement("span");
      tituloAcordeao.className = "accordion-title";
      tituloAcordeao.textContent = rotulo;
      const seta = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      seta.setAttribute("class", "accordion-arrow");
      seta.setAttribute("width", "32.8");
      seta.setAttribute("height", "32.8");
      seta.setAttribute("viewBox", "0 0 32.8 32.8");
      const caminhoSeta = document.createElementNS("http://www.w3.org/2000/svg", "path");
      caminhoSeta.setAttribute("d", "M16.4 14.4l-7.5 7.5l-1.8-1.7l9.3-9.3l9.3 9.3l-1.8 1.7l-7.5-7.5Z");
      caminhoSeta.setAttribute("fill", "#3d2d2d");
      seta.appendChild(caminhoSeta);
      resumo.append(tituloAcordeao, seta);
      const conteudo = document.createElement("div");
      conteudo.className = "accordion-content admin-order-accordion-content";
      acordeao.append(resumo, conteudo);
      detalhesPedido.appendChild(acordeao);
      return conteudo;
    }

    const cliente = pedido.cliente || {};
    const dadosCliente = [
      ["Nome", cliente.nome || "Venda no caixa"],
      ["CPF", cliente.cpf || "—"],
      ["Telefone", cliente.telefone || "—"],
      ["Endereço", cliente.endereco || "—"],
      ["Número", cliente.numero || "—"],
      ["Complemento", cliente.complemento || "—"],
      ["CEP", cliente.cep || "—"],
      ["Cliente VIP", pedido.clienteVip ? "Sim" : "Não"],
      ["Data", pedido.dataCriacao ? new Date(pedido.dataCriacao).toLocaleString("pt-BR") : "—"],
      ["Pagamento", pedido.formaPagamento || "Aguardando"],
    ];
    const secaoCliente = criarAcordeaoPedido("Dados do cliente");
    const acordeaoCliente = secaoCliente.closest("details");
    const tabelaCliente = document.createElement("dl");
    tabelaCliente.className = "admin-order-customer";
    dadosCliente.forEach(([rotulo, valor]) => {
      const tituloDado = document.createElement("dt");
      tituloDado.textContent = `${rotulo}:`;
      const valorDado = document.createElement("dd");
      valorDado.textContent = valor;
      tabelaCliente.append(tituloDado, valorDado);
    });
    secaoCliente.appendChild(tabelaCliente);

    const itensPedido = Array.isArray(pedido.itens) ? pedido.itens : [];
    const secaoItens = criarAcordeaoPedido(`Produtos · ${itensPedido.length}`, true);
    const acordeaoItens = secaoItens.closest("details");
    const produtos = document.createElement("div");
    produtos.className = "admin-order-products";
    itensPedido.forEach((item) => {
      const produto = BANCO_PRODUTOS.find((registro) => registro.id === item.id);
      const linha = document.createElement("div");
      linha.className = "admin-order-product";
      if (produto?.imagemFrente) {
        const imagem = document.createElement("img");
        imagem.src = resolveAssetUrl(produto.imagemFrente);
        imagem.alt = "";
        linha.appendChild(imagem);
      }
      const texto = document.createElement("span");
      texto.className = "admin-order-product-info";
      const nomeProduto = document.createElement("strong");
      nomeProduto.textContent = (produto?.nome || item.nome || "Produto").replace(/<br\s*[\/]?>/gi, " ");
      const dadosProduto = document.createElement("div");
      dadosProduto.className = "admin-order-product-meta";
      const quantidade = Number(item.quantidade) || 1;
      const precoUnitario = converterPrecoParaNumero(item.preco);
      const subtotal = item.subtotal !== undefined && item.subtotal !== null
        ? converterPrecoParaNumero(item.subtotal)
        : precoUnitario * quantidade;
      const codigoBarras = produto?.codigoBarras || item.codigoBarras || "—";
      [
        ["Quantidade", String(quantidade)],
        ["Código de barras", codigoBarras],
        ["Preço unitário", formatarMoeda(precoUnitario)],
        ["Subtotal", formatarMoeda(subtotal)],
      ].forEach(([rotulo, valor]) => {
        const campo = document.createElement("span");
        const rotuloCampo = document.createElement("small");
        rotuloCampo.textContent = `${rotulo}:`;
        const valorCampo = document.createElement("strong");
        valorCampo.textContent = valor;
        campo.append(rotuloCampo, valorCampo);
        dadosProduto.appendChild(campo);
      });
      texto.append(nomeProduto, dadosProduto);
      linha.appendChild(texto);
      produtos.appendChild(linha);
    });
    if (!produtos.childElementCount) {
      const vazio = document.createElement("p");
      vazio.className = "admin-empty-state";
      vazio.textContent = "Este pedido não possui itens detalhados.";
      produtos.appendChild(vazio);
    }
    const cabecalhoCompra = document.createElement("div");
    cabecalhoCompra.className = "admin-order-purchase-heading";
    const dataCompra = pedido.dataCriacao
      ? new Date(pedido.dataCriacao).toLocaleString("pt-BR")
      : "Data não informada";
    cabecalhoCompra.textContent = [
      `Pedido ${pedido.id || "—"}`,
      dataCompra,
      pedido.formaPagamento || "Pagamento não informado",
      pedido.status || "Aguardando confirmação",
    ].join(" · ");
    secaoItens.prepend(cabecalhoCompra);
    secaoItens.appendChild(produtos);

    const total = document.createElement("p");
    total.className = "admin-order-total";
    total.textContent = `Total do pedido: ${formatarMoeda(pedido.total)}`;
    secaoItens.appendChild(total);

    const secaoStatus = criarAcordeaoPedido("Entrega e pagamento");
    const acordeaoStatus = secaoStatus.closest("details");
    const camposPedido = document.createElement("div");
    camposPedido.className = "admin-order-fields";
    [
      ["dataEntrega", "Data de entrega"],
      ["dataPagamento", "Data de pagamento"],
    ].forEach(([chave, rotulo]) => {
      const label = document.createElement("label");
      label.textContent = rotulo;
      const input = document.createElement("input");
      input.type = "date";
      input.value = pedido[chave] || "";
      input.addEventListener("change", () => atualizarPedido(pedido.id, chave, input.value));
      label.appendChild(input);
      camposPedido.appendChild(label);
    });
    const labelPagamento = document.createElement("label");
    labelPagamento.textContent = "Forma de pagamento";
    const selectPagamento = document.createElement("select");
    ["A combinar", "Pix", "Cartão de crédito", "Cartão de débito", "Dinheiro"].forEach((opcao) => {
      const option = document.createElement("option");
      option.value = opcao;
      option.textContent = opcao;
      selectPagamento.appendChild(option);
    });
    selectPagamento.value = pedido.formaPagamento || "A combinar";
    selectPagamento.addEventListener("change", () =>
      atualizarPedido(pedido.id, "formaPagamento", selectPagamento.value),
    );
    labelPagamento.appendChild(selectPagamento);
    camposPedido.appendChild(labelPagamento);

    const labelStatus = document.createElement("label");
    labelStatus.textContent = "Status do pedido";
    const status = document.createElement("select");
    [
      "Aguardando confirmação",
      "Pagamento informado; aguardando confirmação",
      "Em preparação",
      "Concluído",
      "Cancelado",
      "Devolução solicitada",
      "Devolvido",
      "Reembolsado",
    ].forEach((opcao) => {
      const option = document.createElement("option");
      option.value = opcao;
      option.textContent = opcao;
      status.appendChild(option);
    });
    status.value = pedido.status || "Aguardando confirmação";
    status.addEventListener("change", () => {
      atualizarPedido(pedido.id, "status", status.value);
    });
    labelStatus.appendChild(status);
    camposPedido.appendChild(labelStatus);
    secaoStatus.appendChild(camposPedido);
    detalhesPedido.append(acordeaoItens, acordeaoStatus, acordeaoCliente);
  }

  function atualizarPedido(id, chave, valor) {
    const pedidos = lerPedidosArmazenados();
    const index = pedidos.findIndex((item) => item.id === id);
    if (index < 0) return;
    pedidos[index][chave] = valor;
    salvarPedidosArmazenados(pedidos);
    renderizarPainel();
    renderizarDetalhesPedido(pedidos[index]);
  }

  function renderizarPedidos() {
    const pedidos = lerPedidosArmazenados().slice().reverse();
    listaPedidos.replaceChildren();
    if (pedidos.length === 0) {
      const vazio = document.createElement("p");
      vazio.className = "admin-empty-state";
      vazio.textContent = "Nenhum pedido registrado neste navegador.";
      listaPedidos.appendChild(vazio);
      detalhesPedido.innerHTML = "<p>Os pedidos feitos pelo checkout e as vendas concluídas no caixa aparecerão aqui.</p>";
      pedidoSelecionadoId = null;
      return;
    }
    if (!pedidos.some((pedido) => pedido.id === pedidoSelecionadoId)) {
      pedidoSelecionadoId = pedidos[0].id;
    }

    pedidos.forEach((pedido) => {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.className = "admin-order-row";
      botao.setAttribute("aria-pressed", String(pedido.id === pedidoSelecionadoId));
      const identificador = document.createElement("strong");
      identificador.textContent = pedido.id || "Pedido";
      const cliente = document.createElement("span");
      cliente.textContent = pedido.cliente?.nome || "Venda no caixa";
      const total = document.createElement("span");
      total.textContent = formatarMoeda(pedido.total);
      const status = document.createElement("small");
      status.textContent = pedido.demonstracao
        ? `Demonstração · ${pedido.status || "Aguardando confirmação"}`
        : pedido.status || "Aguardando confirmação";
      if (pedido.demonstracao) botao.classList.add("admin-order-row-demo");
      botao.append(identificador, cliente, total, status);
      botao.addEventListener("click", () => {
        pedidoSelecionadoId = pedido.id;
        listaPedidos.querySelectorAll(".admin-order-row").forEach((item) =>
          item.setAttribute("aria-pressed", String(item === botao)),
        );
        renderizarDetalhesPedido(pedido);
      });
      listaPedidos.appendChild(botao);
    });
    renderizarDetalhesPedido(pedidos.find((pedido) => pedido.id === pedidoSelecionadoId));
  }

  let clienteSelecionadoId = null;

  function obterChaveCliente(cliente) {
    const telefoneNormalizado = String(cliente.telefone || "").replace(/\D/g, "");
    return telefoneNormalizado
      ? `telefone:${telefoneNormalizado}`
      : `nome:${String(cliente.nome || "").trim().toLocaleLowerCase("pt-BR")}`;
  }

  function lerClientesAdmin() {
    const clientes = JSON.parse(localStorage.getItem("clientes_admin") || "[]");
    if (!Array.isArray(clientes)) {
      throw new Error("Os clientes salvos no navegador estão em um formato inválido.");
    }
    return clientes;
  }

  function salvarClientesAdmin(clientes) {
    localStorage.setItem("clientes_admin", JSON.stringify(clientes));
  }

  function obterDadosSalvaveisCliente(cliente) {
    return Object.fromEntries(
      Object.entries(cliente).filter(
        ([chave]) => !["chave", "pedidos", "demonstracao"].includes(chave),
      ),
    );
  }

  function obterClientesDisponiveis() {
    const clientes = new Map();
    const chavesRelacionadas = new Map();
    lerClientesAdmin().forEach((cliente) => {
      if (!cliente?.nome) return;
      const chave = obterChaveCliente(cliente);
      [chave, ...(Array.isArray(cliente.chavesVinculadas) ? cliente.chavesVinculadas : [])]
        .forEach((chaveRelacionada) => chavesRelacionadas.set(chaveRelacionada, chave));
      clientes.set(chave, {
        ...cliente,
        chave,
        pedidos: [],
        sugestoesCliente: Array.isArray(cliente.sugestoesCliente)
          ? cliente.sugestoesCliente
          : [],
        sugestoes: Array.isArray(cliente.sugestoes) ? cliente.sugestoes : [],
        sugestoesRemovidas: Array.isArray(cliente.sugestoesRemovidas)
          ? cliente.sugestoesRemovidas
          : [],
        demonstracao: false,
      });
    });
    lerPedidosArmazenados().forEach((pedido) => {
      const clientePedido = pedido.cliente;
      if (!clientePedido?.nome) return;
      const chavePedido = obterChaveCliente(clientePedido);
      const chave = chavesRelacionadas.get(chavePedido) || chavePedido;
      const atual = clientes.get(chave);
      const clienteUnificado = {
        ...clientePedido,
        ...atual,
        chave,
        pedidos: atual?.pedidos || [],
        sugestoesCliente: Array.isArray(atual?.sugestoesCliente)
          ? atual.sugestoesCliente
          : [],
        camposPersonalizados: Array.isArray(atual?.camposPersonalizados)
          ? atual.camposPersonalizados
          : [],
        demonstracao: false,
      };
      ["nome", "telefone", "cpf", "endereco", "numero", "complemento", "cep"].forEach((campo) => {
        if (!String(clienteUnificado[campo] || "").trim() && clientePedido[campo]) {
          clienteUnificado[campo] = clientePedido[campo];
        }
      });
      clienteUnificado.pedidos.push(pedido);
      clienteUnificado.demonstracao = clienteUnificado.pedidos.every(
        (registro) => registro.demonstracao === true,
      );
      clientes.set(chave, clienteUnificado);
    });
    return clientes;
  }

  function renderizarClientes() {
    const clientesUnicos = obterClientesDisponiveis();

    listaClientes.replaceChildren();
    if (clientesUnicos.size === 0) {
      const vazio = document.createElement("p");
      vazio.className = "admin-empty-state";
      vazio.textContent = "Os clientes aparecerão aqui após o primeiro pedido.";
      listaClientes.appendChild(vazio);
      return;
    }

    const colunaLista = document.createElement("nav");
    colunaLista.className = "admin-client-list";
    colunaLista.setAttribute("aria-label", "Lista de clientes");
    const painelDetalhes = document.createElement("section");
    painelDetalhes.className = "admin-client-details";
    painelDetalhes.setAttribute("aria-live", "polite");

    const clientesOrdenados = [...clientesUnicos.values()].sort((a, b) =>
      a.nome.localeCompare(b.nome, "pt-BR"),
    );
    if (!clientesUnicos.has(clienteSelecionadoId)) {
      clienteSelecionadoId = clientesOrdenados[0].chave;
    }

    clientesOrdenados.forEach((cliente) => {
      const botao = document.createElement("button");
      botao.type = "button";
      botao.className = "admin-client-row";
      botao.setAttribute("aria-pressed", String(cliente.chave === clienteSelecionadoId));
      if (cliente.chave === clienteSelecionadoId) botao.classList.add("ativo");
      const nome = document.createElement("strong");
      nome.textContent = cliente.nome;
      const telefone = document.createElement("span");
      telefone.textContent = cliente.telefone || "Telefone não informado";
      const resumo = document.createElement("small");
      resumo.textContent = `${cliente.pedidos.length} ${cliente.pedidos.length === 1 ? "pedido" : "pedidos"}`;
      botao.append(nome, telefone, resumo);
      if (cliente.demonstracao) {
        const demo = document.createElement("small");
        demo.className = "admin-client-demo";
        demo.textContent = "Demonstração";
        botao.appendChild(demo);
      }
      botao.addEventListener("click", () => {
        clienteSelecionadoId = cliente.chave;
        renderizarClientes();
      });
      colunaLista.appendChild(botao);
    });

    const cliente = clientesUnicos.get(clienteSelecionadoId);
    const pedidosCliente = cliente.pedidos.slice().sort((a, b) =>
      new Date(b.dataCriacao || 0) - new Date(a.dataCriacao || 0),
    );
    const titulo = document.createElement("h3");
    titulo.textContent = cliente.nome;
    painelDetalhes.appendChild(titulo);
    if (cliente.demonstracao) {
      const aviso = document.createElement("p");
      aviso.className = "admin-demo-badge";
      aviso.textContent = "Demonstração · dados fictícios";
      painelDetalhes.appendChild(aviso);
    }

    const criarAcordeao = (rotulo, aberto = false) => {
      const acordeao = document.createElement("details");
      acordeao.className = "accordion-item admin-client-accordion";
      acordeao.open = aberto;
      const resumo = document.createElement("summary");
      resumo.className = "accordion-header";
      const tituloAcordeao = document.createElement("span");
      tituloAcordeao.className = "accordion-title";
      tituloAcordeao.textContent = rotulo;
      const seta = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      seta.setAttribute("class", "accordion-arrow");
      seta.setAttribute("width", "32.8");
      seta.setAttribute("height", "32.8");
      seta.setAttribute("viewBox", "0 0 32.8 32.8");
      const caminhoSeta = document.createElementNS("http://www.w3.org/2000/svg", "path");
      caminhoSeta.setAttribute("d", "M16.4 14.4l-7.5 7.5l-1.8-1.7l9.3-9.3l9.3 9.3l-1.8 1.7l-7.5-7.5Z");
      caminhoSeta.setAttribute("fill", "#3d2d2d");
      seta.appendChild(caminhoSeta);
      resumo.append(tituloAcordeao, seta);
      const conteudo = document.createElement("div");
      conteudo.className = "accordion-content admin-client-accordion-content";
      acordeao.append(resumo, conteudo);
      painelDetalhes.appendChild(acordeao);
      return conteudo;
    };

    const dadosCliente = criarAcordeao("Dados do cliente", true);
    const dados = document.createElement("dl");
    dados.className = "admin-client-data";
    [
      ["Nome", cliente.nome || "—"],
      ["CPF", cliente.cpf || "—"],
      ["Telefone", cliente.telefone || "—"],
      ["Endereço", cliente.endereco || "—"],
      ["Número", cliente.numero || "—"],
      ["Complemento", cliente.complemento || "—"],
      ["CEP", cliente.cep || "—"],
      ["Cliente VIP", cliente.clienteVip === true || pedidosCliente.some((pedido) => pedido.clienteVip === true) ? "Sim" : "Não"],
      ["Pedidos", String(pedidosCliente.length)],
      ["Total comprado", formatarMoeda(pedidosCliente.reduce((total, pedido) => total + Number(pedido.total || 0), 0))],
      ["Última compra", pedidosCliente[0]?.dataCriacao
        ? new Date(pedidosCliente[0].dataCriacao).toLocaleString("pt-BR")
        : "—"],
    ].forEach(([rotulo, valor]) => {
      const termo = document.createElement("dt");
      termo.textContent = rotulo;
      const descricao = document.createElement("dd");
      descricao.textContent = valor;
      dados.append(termo, descricao);
    });
    dadosCliente.appendChild(dados);

    const camposPersonalizados = Array.isArray(cliente.camposPersonalizados)
      ? cliente.camposPersonalizados
      : [];
    if (camposPersonalizados.length) {
      const listaCamposPersonalizados = document.createElement("dl");
      listaCamposPersonalizados.className = "admin-client-data admin-client-custom-data";
      camposPersonalizados.forEach((campo) => {
        const termo = document.createElement("dt");
        termo.textContent = campo.nome;
        const descricao = document.createElement("dd");
        const textoDescricao = document.createElement("span");
        textoDescricao.className = "admin-client-custom-description";
        textoDescricao.textContent = campo.descricao;
        const acoes = document.createElement("span");
        acoes.className = "admin-client-custom-actions";
        const botaoEditarCampo = document.createElement("button");
        botaoEditarCampo.type = "button";
        botaoEditarCampo.className = "btn-secundario";
        botaoEditarCampo.textContent = "Editar";
        botaoEditarCampo.addEventListener("click", () => {
          formularioCampoPersonalizado.hidden = false;
          botaoNovoCampo.hidden = true;
          formularioCampoPersonalizado.elements.namedItem("id").value = campo.id;
          formularioCampoPersonalizado.elements.namedItem("nome").value = campo.nome;
          formularioCampoPersonalizado.elements.namedItem("descricao").value = campo.descricao;
          formularioCampoPersonalizado.elements.namedItem("nome").focus();
        });
        const botaoRemoverCampo = document.createElement("button");
        botaoRemoverCampo.type = "button";
        botaoRemoverCampo.className = "suggestion-remove-button";
        botaoRemoverCampo.setAttribute("aria-label", `Remover campo ${campo.nome}`);
        botaoRemoverCampo.title = "Remover campo";
        botaoRemoverCampo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32.8 32.8" aria-hidden="true"><path d="M16.8 15l7.5-7.5l1.8 1.8l-7.5 7.5l7.5 7.5l-1.8 1.8l-7.5-7.5l-7.5 7.5l-1.8-1.8l7.5-7.5l-7.5-7.5l1.8-1.8l7.5 7.5Z" fill="#3d2d2d"/></svg>`;
        botaoRemoverCampo.addEventListener("click", () => {
          salvarCamposPersonalizadosCliente(
            camposPersonalizados.filter((item) => item.id !== campo.id),
          );
        });
        acoes.append(botaoEditarCampo, botaoRemoverCampo);
        descricao.append(textoDescricao, acoes);
        listaCamposPersonalizados.append(termo, descricao);
      });
      dadosCliente.appendChild(listaCamposPersonalizados);
    }

    const botaoNovoCampo = document.createElement("button");
    botaoNovoCampo.type = "button";
    botaoNovoCampo.className = "btn-salvar-admin admin-client-add-field";
    botaoNovoCampo.textContent = "Adicionar campo";
    const formularioCampoPersonalizado = document.createElement("form");
    formularioCampoPersonalizado.className = "admin-client-custom-field-form";
    formularioCampoPersonalizado.hidden = true;
    const idCampoPersonalizado = document.createElement("input");
    idCampoPersonalizado.type = "hidden";
    idCampoPersonalizado.name = "id";
    const labelNomeCampo = document.createElement("label");
    labelNomeCampo.textContent = "Nome do campo";
    const inputNomeCampo = document.createElement("input");
    inputNomeCampo.name = "nome";
    inputNomeCampo.required = true;
    labelNomeCampo.appendChild(inputNomeCampo);
    const labelDescricaoCampo = document.createElement("label");
    labelDescricaoCampo.textContent = "Dados / descrição";
    const textareaDescricaoCampo = document.createElement("textarea");
    textareaDescricaoCampo.name = "descricao";
    textareaDescricaoCampo.rows = 3;
    textareaDescricaoCampo.required = true;
    labelDescricaoCampo.appendChild(textareaDescricaoCampo);
    const botoesCampo = document.createElement("div");
    botoesCampo.className = "admin-client-edit-actions";
    const botaoSalvarCampo = document.createElement("button");
    botaoSalvarCampo.type = "submit";
    botaoSalvarCampo.className = "btn-salvar-admin";
    botaoSalvarCampo.textContent = "Salvar campo";
    const botaoCancelarCampo = document.createElement("button");
    botaoCancelarCampo.type = "button";
    botaoCancelarCampo.className = "btn-excluir-admin";
    botaoCancelarCampo.textContent = "Cancelar";
    botaoCancelarCampo.addEventListener("click", () => {
      formularioCampoPersonalizado.reset();
      formularioCampoPersonalizado.hidden = true;
      botaoNovoCampo.hidden = false;
    });
    botoesCampo.append(botaoSalvarCampo, botaoCancelarCampo);
    formularioCampoPersonalizado.append(
      idCampoPersonalizado,
      labelNomeCampo,
      labelDescricaoCampo,
      botoesCampo,
    );
    function salvarCamposPersonalizadosCliente(novosCampos) {
      const clientesSalvos = lerClientesAdmin();
      const indiceCliente = clientesSalvos.findIndex((registro) =>
        obterChaveCliente(registro) === cliente.chave ||
        (Array.isArray(registro.chavesVinculadas) &&
          registro.chavesVinculadas.includes(cliente.chave)),
      );
      const registroCliente = indiceCliente >= 0
        ? clientesSalvos[indiceCliente]
        : obterDadosSalvaveisCliente(cliente);
      const registroAtualizado = {
        ...registroCliente,
        camposPersonalizados: novosCampos,
      };
      if (indiceCliente < 0) clientesSalvos.push(registroAtualizado);
      else clientesSalvos[indiceCliente] = registroAtualizado;
      salvarClientesAdmin(clientesSalvos);
      renderizarClientes();
    }
    botaoNovoCampo.addEventListener("click", () => {
      formularioCampoPersonalizado.reset();
      formularioCampoPersonalizado.hidden = false;
      botaoNovoCampo.hidden = true;
      inputNomeCampo.focus();
    });
    formularioCampoPersonalizado.addEventListener("submit", (event) => {
      event.preventDefault();
      const dadosCampo = new FormData(formularioCampoPersonalizado);
      const idExistente = String(dadosCampo.get("id") || "");
      const novoCampo = {
        id: idExistente || `campo-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        nome: String(dadosCampo.get("nome") || "").trim(),
        descricao: String(dadosCampo.get("descricao") || "").trim(),
      };
      if (!novoCampo.nome || !novoCampo.descricao) return;
      const novosCampos = idExistente
        ? camposPersonalizados.map((campo) => campo.id === idExistente ? novoCampo : campo)
        : [...camposPersonalizados, novoCampo];
      salvarCamposPersonalizadosCliente(novosCampos);
    });
    dadosCliente.append(botaoNovoCampo, formularioCampoPersonalizado);

    const formularioEdicaoCliente = document.createElement("form");
    formularioEdicaoCliente.className = "admin-client-edit-form";
    formularioEdicaoCliente.hidden = true;
    const camposEdicaoCliente = document.createElement("div");
    camposEdicaoCliente.className = "admin-client-edit-grid";
    [
      ["nome", "Nome", true],
      ["cpf", "CPF", false],
      ["telefone", "Telefone", false],
      ["endereco", "Endereço", false],
      ["numero", "Número", false],
      ["complemento", "Complemento", false],
      ["cep", "CEP", false],
    ].forEach(([chave, rotulo, obrigatorio]) => {
      const label = document.createElement("label");
      label.textContent = rotulo;
      const input = document.createElement("input");
      input.name = chave;
      input.value = cliente[chave] || "";
      input.required = obrigatorio;
      input.autocomplete = chave === "nome" ? "name" : chave === "telefone" ? "tel" : "off";
      label.appendChild(input);
      camposEdicaoCliente.appendChild(label);
    });
    const acoesEdicaoCliente = document.createElement("div");
    acoesEdicaoCliente.className = "admin-client-edit-actions";
    const botaoSalvarCliente = document.createElement("button");
    botaoSalvarCliente.type = "submit";
    botaoSalvarCliente.className = "btn-salvar-admin";
    botaoSalvarCliente.textContent = "Salvar dados";
    const botaoCancelarEdicao = document.createElement("button");
    botaoCancelarEdicao.type = "button";
    botaoCancelarEdicao.className = "btn-excluir-admin";
    botaoCancelarEdicao.textContent = "Cancelar";
    botaoCancelarEdicao.addEventListener("click", () => {
      formularioEdicaoCliente.reset();
      formularioEdicaoCliente.hidden = true;
      botaoEditarCliente.hidden = false;
    });
    acoesEdicaoCliente.append(botaoSalvarCliente, botaoCancelarEdicao);
    formularioEdicaoCliente.append(camposEdicaoCliente, acoesEdicaoCliente);
    const botaoEditarCliente = document.createElement("button");
    botaoEditarCliente.type = "button";
    botaoEditarCliente.className = "btn-salvar-admin admin-client-edit-toggle";
    botaoEditarCliente.textContent = "Editar dados";
    botaoEditarCliente.addEventListener("click", () => {
      formularioEdicaoCliente.hidden = false;
      botaoEditarCliente.hidden = true;
      formularioEdicaoCliente.querySelector("input[name='nome']").focus();
    });
    formularioEdicaoCliente.addEventListener("submit", (event) => {
      event.preventDefault();
      const dadosAtualizados = Object.fromEntries(
        new FormData(formularioEdicaoCliente).entries(),
      );
      Object.keys(dadosAtualizados).forEach((chave) => {
        dadosAtualizados[chave] = String(dadosAtualizados[chave]).trim();
      });
      const chaveAtualizada = obterChaveCliente(dadosAtualizados);
      const clientesSalvos = lerClientesAdmin();
      const indiceAtual = clientesSalvos.findIndex((registro) =>
        obterChaveCliente(registro) === cliente.chave ||
        (Array.isArray(registro.chavesVinculadas) &&
          registro.chavesVinculadas.includes(cliente.chave)),
      );
      const registroAtual = indiceAtual >= 0
        ? clientesSalvos[indiceAtual]
        : obterDadosSalvaveisCliente(cliente);
      const indiceDuplicado = clientesSalvos.findIndex((registro, indice) =>
        indice !== indiceAtual && (
          obterChaveCliente(registro) === chaveAtualizada ||
          (Array.isArray(registro.chavesVinculadas) &&
            registro.chavesVinculadas.includes(chaveAtualizada))
        ),
      );
      if (indiceDuplicado >= 0) {
        window.alert("Já existe outro cliente cadastrado com este telefone.");
        formularioEdicaoCliente.querySelector("input[name='telefone']").focus();
        return;
      }

      const chavesVinculadas = new Set([
        ...(Array.isArray(registroAtual.chavesVinculadas)
          ? registroAtual.chavesVinculadas
          : []),
        cliente.chave,
        obterChaveCliente(registroAtual),
        chaveAtualizada,
      ]);
      const registroAtualizado = {
        ...registroAtual,
        ...dadosAtualizados,
        chavesVinculadas: [...chavesVinculadas],
      };
      if (indiceAtual < 0) clientesSalvos.push(registroAtualizado);
      else clientesSalvos[indiceAtual] = registroAtualizado;
      salvarClientesAdmin(clientesSalvos);
      clienteSelecionadoId = chaveAtualizada;
      renderizarClientes();
    });
    dadosCliente.append(botaoEditarCliente, formularioEdicaoCliente);

    const quantidadeCompras = pedidosCliente.reduce(
      (total, pedido) => total + (Array.isArray(pedido.itens) ? pedido.itens : [])
        .reduce((quantidade, item) => quantidade + Number(item.quantidade || 1), 0),
      0,
    );
    const totalCompras = pedidosCliente.reduce(
      (total, pedido) => total + Number(pedido.total || 0),
      0,
    );
    const resumoCompras = criarAcordeao(
      `Compras · ${pedidosCliente.length} ${pedidosCliente.length === 1 ? "pedido" : "pedidos"}`,
    );
    const indicadores = document.createElement("p");
    indicadores.className = "admin-client-purchase-summary";
    indicadores.textContent = `${quantidadeCompras} ${quantidadeCompras === 1 ? "produto comprado" : "produtos comprados"} · Total ${formatarMoeda(totalCompras)}`;
    resumoCompras.appendChild(indicadores);

    function criarDetalhesItemPedido(item) {
      const produto = BANCO_PRODUTOS.find((registro) =>
        registro.id === item.id || registro.nome === item.nome,
      );
      const linha = document.createElement("li");
      linha.className = "admin-client-product";
      if (produto?.imagemFrente) {
        const imagem = document.createElement("img");
        imagem.src = resolveAssetUrl(produto.imagemFrente);
        imagem.alt = (produto.nome || item.nome || "Produto").replace(/<br\s*[\/]?>/gi, " ");
        imagem.loading = "lazy";
        linha.appendChild(imagem);
      }
      const textoProduto = document.createElement("div");
      textoProduto.className = "admin-client-product-info";
      const nomeProduto = document.createElement("strong");
      nomeProduto.textContent = (produto?.nome || item.nome || "Produto").replace(/<br\s*[\/]?>/gi, " ");
      const precoUnitario = item.preco || produto?.precoDesconto || produto?.precoOriginal;
      const subtotal = item.subtotal ?? converterPrecoParaNumero(precoUnitario) * Number(item.quantidade || 1);
      [
        nomeProduto,
        document.createTextNode(`Quantidade: ${Number(item.quantidade || 1)}`),
        document.createTextNode(`Código de barras: ${produto?.codigoBarras || item.codigoBarras || "—"}`),
        document.createTextNode(`Preço unitário: ${formatarMoeda(converterPrecoParaNumero(precoUnitario))}`),
        document.createTextNode(`Subtotal: ${formatarMoeda(subtotal)}`),
      ].forEach((elemento) => {
        const linhaInfo = document.createElement("span");
        if (elemento instanceof Node) {
          linhaInfo.appendChild(elemento);
        }
        textoProduto.appendChild(linhaInfo);
      });
      linha.appendChild(textoProduto);
      return linha;
    }

    if (!pedidosCliente.some((pedido) => Array.isArray(pedido.itens) && pedido.itens.length)) {
      const vazio = document.createElement("p");
      vazio.className = "admin-empty-state";
      vazio.textContent = "Nenhum produto detalhado nos pedidos deste cliente.";
      resumoCompras.appendChild(vazio);
    } else {
      pedidosCliente.forEach((pedido) => {
        const grupo = document.createElement("article");
        grupo.className = "admin-client-order";
        const cabecalho = document.createElement("div");
        cabecalho.className = "admin-client-order-heading";
        const dataPedido = pedido.dataCriacao
          ? new Date(pedido.dataCriacao).toLocaleString("pt-BR")
          : "Data não informada";
        cabecalho.textContent = `Pedido ${pedido.id || "—"} · ${dataPedido}`;
        grupo.appendChild(cabecalho);
        const dadosPedido = document.createElement("dl");
        dadosPedido.className = "admin-client-order-data";
        [
          ["Total", formatarMoeda(pedido.total)],
          ["Pagamento", pedido.formaPagamento || "Pagamento não informado"],
          ["Status", pedido.status || "Status não informado"],
          ["Data do pagamento", pedido.dataPagamento
            ? new Date(pedido.dataPagamento).toLocaleDateString("pt-BR")
            : "—"],
          ["Data de entrega", pedido.dataEntrega
            ? new Date(pedido.dataEntrega).toLocaleDateString("pt-BR")
            : "—"],
        ].forEach(([rotulo, valor]) => {
          const termo = document.createElement("dt");
          termo.textContent = rotulo;
          const descricao = document.createElement("dd");
          descricao.textContent = valor;
          dadosPedido.append(termo, descricao);
        });
        grupo.appendChild(dadosPedido);
        const itens = document.createElement("ul");
        itens.className = "admin-client-product-list";
        (Array.isArray(pedido.itens) ? pedido.itens : []).forEach((item) => {
          itens.appendChild(criarDetalhesItemPedido(item));
        });
          if (!itens.childElementCount) {
            const itemVazio = document.createElement("li");
            itemVazio.textContent = "Este pedido não possui itens detalhados.";
            itens.appendChild(itemVazio);
          }
          grupo.appendChild(itens);
        resumoCompras.appendChild(grupo);
      });
    }

    const devolucoes = pedidosCliente.flatMap((pedido) => {
      const devolucoesPedido = Array.isArray(pedido.devolucoes)
        ? pedido.devolucoes
        : [];
      if (devolucoesPedido.length) {
        return devolucoesPedido.map((devolucao) => ({ pedido, devolucao }));
      }
      if (/devol|reembols/i.test(String(pedido.status || ""))) {
        return [{ pedido, devolucao: { status: pedido.status, itens: pedido.itens } }];
      }
      return [];
    });
    const areaDevolucoes = criarAcordeao(
      `Devoluções · ${devolucoes.length}`,
    );
    if (devolucoes.length) {
      devolucoes.forEach(({ pedido, devolucao }) => {
        const grupo = document.createElement("article");
        grupo.className = "admin-client-order";
        const dataEvento = devolucao.data || devolucao.dataCriacao ||
          pedido.dataDevolucao || pedido.dataAtualizacao || pedido.dataCriacao;
        const cabecalho = document.createElement("div");
        cabecalho.className = "admin-client-order-heading";
        cabecalho.textContent = `Pedido ${pedido.id || "—"} · ${dataEvento ? new Date(dataEvento).toLocaleString("pt-BR") : "Data não informada"} · ${devolucao.status || pedido.status || "Devolução registrada"}`;
        grupo.appendChild(cabecalho);
        const observacao = devolucao.motivo || devolucao.observacao || devolucao.descricao;
        if (observacao) {
          const textoObservacao = document.createElement("p");
          textoObservacao.textContent = `Motivo/observação: ${observacao}`;
          grupo.appendChild(textoObservacao);
        }
        const itensDevolvidos = Array.isArray(devolucao.itens)
          ? devolucao.itens
          : Array.isArray(devolucao.produtos)
            ? devolucao.produtos
            : pedido.itens || [];
        if (itensDevolvidos.length) {
          const listaItens = document.createElement("ul");
          listaItens.className = "admin-client-product-list";
          itensDevolvidos.forEach((item) => listaItens.appendChild(criarDetalhesItemPedido(item)));
          grupo.appendChild(listaItens);
        }
        areaDevolucoes.appendChild(grupo);
      });
    } else {
      const vazio = document.createElement("p");
      vazio.className = "admin-empty-state";
      vazio.textContent = "Nenhuma devolução registrada para este cliente.";
      areaDevolucoes.appendChild(vazio);
    }

    const areaSugestoes = criarAcordeao("Sugestões e comentários do cliente");
    const formularioSugestao = document.createElement("form");
    formularioSugestao.className = "admin-client-suggestion-form";
    const rotuloSugestao = document.createElement("label");
    rotuloSugestao.textContent = "Anote uma sugestão, comentário ou observação informada pelo cliente";
    const campoSugestao = document.createElement("textarea");
    campoSugestao.name = "sugestao";
    campoSugestao.rows = 3;
    campoSugestao.required = true;
    campoSugestao.maxLength = 2000;
    campoSugestao.placeholder = "Digite aqui o comentário do cliente...";
    rotuloSugestao.appendChild(campoSugestao);
    const salvarSugestao = document.createElement("button");
    salvarSugestao.type = "submit";
    salvarSugestao.className = "btn-salvar-admin";
    salvarSugestao.textContent = "Registrar comentário";
    formularioSugestao.append(rotuloSugestao, salvarSugestao);
    formularioSugestao.addEventListener("submit", (event) => {
      event.preventDefault();
      const texto = campoSugestao.value.trim();
      if (!texto) return;
      const clientesSalvos = lerClientesAdmin();
      const indiceSalvo = clientesSalvos.findIndex((registro) =>
        obterChaveCliente(registro) === cliente.chave ||
        (Array.isArray(registro.chavesVinculadas) &&
          registro.chavesVinculadas.includes(cliente.chave)),
      );
      const registroSalvo = indiceSalvo >= 0
        ? { ...clientesSalvos[indiceSalvo] }
        : obterDadosSalvaveisCliente(cliente);
      const sugestoesSalvas = Array.isArray(registroSalvo.sugestoesCliente)
        ? registroSalvo.sugestoesCliente
        : [];
      registroSalvo.sugestoesCliente = [
        ...sugestoesSalvas,
        {
          id: `sugestao-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
          texto,
          dataCriacao: new Date().toISOString(),
        },
      ];
      if (indiceSalvo < 0) clientesSalvos.push(registroSalvo);
      else clientesSalvos[indiceSalvo] = registroSalvo;
      salvarClientesAdmin(clientesSalvos);
      renderizarClientes();
    });
    areaSugestoes.appendChild(formularioSugestao);

    const sugestoesCliente = Array.isArray(cliente.sugestoesCliente)
      ? cliente.sugestoesCliente
      : [];
    if (sugestoesCliente.length) {
      const listaSugestoes = document.createElement("ul");
      listaSugestoes.className = "admin-client-suggestions";
      sugestoesCliente.slice().reverse().forEach((sugestao) => {
        const linha = document.createElement("li");
        const texto = document.createElement("p");
        if (sugestao.tipo) {
          const tipo = document.createElement("strong");
          tipo.textContent = `${sugestao.tipo === "reclamacao" ? "Reclamação" : "Sugestão"}: `;
          texto.appendChild(tipo);
        }
        texto.appendChild(document.createTextNode(sugestao.texto || ""));
        const data = document.createElement("time");
        data.dateTime = sugestao.dataCriacao || "";
        data.textContent = sugestao.dataCriacao
          ? new Date(sugestao.dataCriacao).toLocaleString("pt-BR")
          : "Data não informada";
        const remover = document.createElement("button");
        remover.type = "button";
        remover.className = "suggestion-remove-button";
        remover.textContent = "Excluir";
        remover.addEventListener("click", () => {
          const clientesSalvos = lerClientesAdmin();
          const indiceSalvo = clientesSalvos.findIndex((registro) =>
            obterChaveCliente(registro) === cliente.chave ||
            (Array.isArray(registro.chavesVinculadas) &&
              registro.chavesVinculadas.includes(cliente.chave)),
          );
          if (indiceSalvo < 0) return;
          clientesSalvos[indiceSalvo].sugestoesCliente = (
            clientesSalvos[indiceSalvo].sugestoesCliente || []
          ).filter((item) => item.id !== sugestao.id);
          salvarClientesAdmin(clientesSalvos);
          renderizarClientes();
        });
        linha.append(texto, data, remover);
        listaSugestoes.appendChild(linha);
      });
      areaSugestoes.appendChild(listaSugestoes);
    } else {
      const vazio = document.createElement("p");
      vazio.className = "admin-empty-state";
      vazio.textContent = "Ainda não há comentários ou sugestões registrados para este cliente.";
      areaSugestoes.appendChild(vazio);
    }

    listaClientes.append(colunaLista, painelDetalhes);
  }

  function renderizarRelatorios() {
    const pedidos = lerPedidosArmazenados();
    const pedidosConcluidos = pedidos.filter((pedido) => pedido.status === "Concluído");
    const vendasTotais = pedidosConcluidos.reduce((soma, pedido) => soma + Number(pedido.total || 0), 0);
    const unidadesVendidas = pedidosConcluidos.reduce(
      (soma, pedido) => soma + (pedido.itens || []).reduce((total, item) => total + Number(item.quantidade || 1), 0),
      0,
    );
    resumoRelatorios.replaceChildren();
    [
      ["Pedidos registrados", String(pedidos.length)],
      ["Vendas concluídas", String(pedidosConcluidos.length)],
      ["Total vendido", formatarMoeda(vendasTotais)],
      ["Unidades vendidas", String(unidadesVendidas)],
    ].forEach(([rotulo, valor]) => {
      const card = document.createElement("article");
      card.className = "admin-report-card";
      const label = document.createElement("span");
      label.textContent = rotulo;
      const strong = document.createElement("strong");
      strong.textContent = valor;
      card.append(label, strong);
      resumoRelatorios.appendChild(card);
    });

    const dataHoje = new Date();
    dataHoje.setHours(0, 0, 0, 0);
    const vendasPorDia = new Map();
    for (let diasAtras = 6; diasAtras >= 0; diasAtras -= 1) {
      const dia = new Date(dataHoje);
      dia.setDate(dia.getDate() - diasAtras);
      const chave = `${dia.getFullYear()}-${String(dia.getMonth() + 1).padStart(2, "0")}-${String(dia.getDate()).padStart(2, "0")}`;
      vendasPorDia.set(chave, { dia, total: 0 });
    }
    pedidosConcluidos.forEach((pedido) => {
      if (!pedido.dataCriacao) return;
      const data = new Date(pedido.dataCriacao);
      if (Number.isNaN(data.getTime())) return;
      const chave = `${data.getFullYear()}-${String(data.getMonth() + 1).padStart(2, "0")}-${String(data.getDate()).padStart(2, "0")}`;
      const registro = vendasPorDia.get(chave);
      if (registro) registro.total += Number(pedido.total || 0);
    });

    graficoRelatorios.replaceChildren();
    const totalMaximo = Math.max(...Array.from(vendasPorDia.values(), ({ total }) => total), 0);
    vendasPorDia.forEach(({ dia, total }) => {
      const linha = document.createElement("div");
      linha.className = "admin-sales-chart-row";
      const rotulo = document.createElement("span");
      rotulo.textContent = dia.toLocaleDateString("pt-BR", {
        weekday: "short",
        day: "2-digit",
        month: "2-digit",
      });
      const trilho = document.createElement("div");
      trilho.className = "admin-sales-chart-track";
      const barra = document.createElement("div");
      barra.className = "admin-sales-chart-bar";
      barra.style.width = `${totalMaximo > 0 ? (total / totalMaximo) * 100 : 0}%`;
      barra.setAttribute("aria-label", formatarMoeda(total));
      trilho.appendChild(barra);
      const valor = document.createElement("strong");
      valor.textContent = formatarMoeda(total);
      linha.append(rotulo, trilho, valor);
      graficoRelatorios.appendChild(linha);
    });

    const vendasPorPagamento = new Map();
    pedidosConcluidos.forEach((pedido) => {
      const forma = pedido.formaPagamento || "Não informado";
      vendasPorPagamento.set(
        forma,
        (vendasPorPagamento.get(forma) || 0) + Number(pedido.total || 0),
      );
    });
    const coresGraficos = ["#3d2d2d", "#8d6e63", "#b58b5a", "#74806a", "#c5a27c"];
    const pagamentosOrdenados = [...vendasPorPagamento.entries()]
      .filter(([, total]) => total > 0)
      .sort((a, b) => b[1] - a[1]);
    if (graficoPagamentos && legendaPagamentos) {
      graficoPagamentos.replaceChildren();
      legendaPagamentos.replaceChildren();
      if (pagamentosOrdenados.length) {
        let percentualAcumulado = 0;
        const segmentos = pagamentosOrdenados.map(([, total], index) => {
          const percentual = total / vendasTotais * 100;
          const inicio = percentualAcumulado;
          percentualAcumulado += percentual;
          return `${coresGraficos[index % coresGraficos.length]} ${inicio}% ${percentualAcumulado}%`;
        });
        graficoPagamentos.style.background = `conic-gradient(${segmentos.join(", ")})`;
        graficoPagamentos.setAttribute(
          "aria-label",
          `Distribuição das vendas por forma de pagamento: ${pagamentosOrdenados
            .map(([forma, total]) => `${forma}, ${formatarMoeda(total)}`)
            .join("; ")}`,
        );
        pagamentosOrdenados.forEach(([forma, total], index) => {
          const itemLegenda = document.createElement("li");
          const marcador = document.createElement("span");
          marcador.className = "admin-report-legend-swatch";
          marcador.style.backgroundColor = coresGraficos[index % coresGraficos.length];
          const descricao = document.createElement("span");
          descricao.textContent = forma;
          const valor = document.createElement("strong");
          valor.textContent = formatarMoeda(total);
          itemLegenda.append(marcador, descricao, valor);
          legendaPagamentos.appendChild(itemLegenda);
        });
      } else {
        graficoPagamentos.style.background = "#e4dfd4";
        graficoPagamentos.setAttribute("aria-label", "Sem vendas concluídas para exibir.");
        const vazio = document.createElement("li");
        vazio.textContent = "Sem vendas concluídas";
        legendaPagamentos.appendChild(vazio);
      }
    }

    const quantidadePorProduto = new Map();
    pedidosConcluidos.forEach((pedido) => {
      (pedido.itens || []).forEach((item) => {
        quantidadePorProduto.set(
          item.id,
          (quantidadePorProduto.get(item.id) || 0) + Number(item.quantidade || 1),
        );
      });
    });
    if (rankingProdutos) {
      rankingProdutos.replaceChildren();
      const produtosMaisVendidos = [...quantidadePorProduto.entries()]
        .map(([id, quantidade]) => ({
          produto: BANCO_PRODUTOS.find((registro) => registro.id === id),
          quantidade,
        }))
        .filter((registro) => registro.produto)
        .sort((a, b) => b.quantidade - a.quantidade)
        .slice(0, 5);
      const quantidadeMaxima = produtosMaisVendidos[0]?.quantidade || 0;
      if (produtosMaisVendidos.length) {
        produtosMaisVendidos.forEach(({ produto, quantidade }, index) => {
          const linha = document.createElement("div");
          linha.className = "admin-product-ranking-row";
          const nome = document.createElement("span");
          nome.textContent = produto.nome.replace(/<br\s*[\/]?>/gi, " ");
          const trilho = document.createElement("div");
          trilho.className = "admin-product-ranking-track";
          const barra = document.createElement("span");
          barra.style.width = `${(quantidade / quantidadeMaxima) * 100}%`;
          barra.style.backgroundColor = coresGraficos[index % coresGraficos.length];
          trilho.appendChild(barra);
          const total = document.createElement("strong");
          total.textContent = `${quantidade} un.`;
          linha.append(nome, trilho, total);
          rankingProdutos.appendChild(linha);
        });
      } else {
        const vazio = document.createElement("p");
        vazio.className = "admin-empty-state";
        vazio.textContent = "Ainda não há produtos vendidos em pedidos concluídos.";
        rankingProdutos.appendChild(vazio);
      }
    }

    const tabela = document.createElement("table");
    const cabecalho = document.createElement("tr");
    ["Produto", "Código de barras", "Unidades vendidas"].forEach((rotulo) =>
      cabecalho.appendChild(criarCelula(rotulo, "th")),
    );
    const thead = document.createElement("thead");
    thead.appendChild(cabecalho);
    tabela.appendChild(thead);
    const tbody = document.createElement("tbody");
    BANCO_PRODUTOS.forEach((produto) => {
      const linha = document.createElement("tr");
      [
        produto.nome.replace(/<br\s*[\/]?>/gi, " "),
        produto.codigoBarras || "—",
        String(quantidadePorProduto.get(produto.id) || 0),
      ].forEach((valor) => linha.appendChild(criarCelula(valor)));
      tbody.appendChild(linha);
    });
    tabela.appendChild(tbody);
    relatorioProdutos.replaceChildren(tabela);
  }

  function renderizarPainel() {
    renderizarPedidos();
    renderizarClientes();
    renderizarRelatorios();
  }

  function atualizarAbasAdministrativas() {
    renderizarPainel();
    renderizarVenda();
    alternarBotoesDemonstracao();
    atualizarClientesDoFormularioPedido();
  }

  function alternarBotoesDemonstracao() {
    const existeDemonstracao = lerPedidosArmazenados().some(
      (pedido) => pedido.demonstracao === true,
    );
    document.getElementById("carregarDemonstracao").hidden = existeDemonstracao;
    document.getElementById("removerDemonstracao").hidden = !existeDemonstracao;
  }

  function carregarDadosDemonstracao() {
    const pedidos = lerPedidosArmazenados();
    if (pedidos.some((pedido) => pedido.demonstracao === true)) return;

    const produtos = BANCO_PRODUTOS.filter((item) => !item.esgotado).slice(0, 3);
    if (produtos.length === 0) {
      alert("Não há produtos disponíveis para criar a compra de demonstração.");
      return;
    }

    const cliente = {
      nome: "Marina Exemplo",
      telefone: "(11) 90000-0000",
      cpf: "000.000.000-00",
      endereco: "Rua das Flores",
      numero: "123",
      complemento: "Apto. 12 · dados fictícios",
      cep: "01000-000",
    };
    const agora = Date.now();
    const compras = [
      { diasAtras: 5, sufixo: "01", produtos: produtos.slice(0, 2) },
      { diasAtras: 1, sufixo: "02", produtos: [produtos[produtos.length - 1]] },
    ];

    compras.forEach((compra) => {
      const dataCompra = new Date(agora - compra.diasAtras * 24 * 60 * 60 * 1000);
      const itens = compra.produtos.map((produto, index) => {
        const preco = produto.precoDesconto || produto.precoOriginal;
        const quantidade = index === 0 && compra.produtos.length > 1 ? 2 : 1;
        const subtotal = converterPrecoParaNumero(preco) * quantidade;
        return {
          id: produto.id,
          codigoBarras: produto.codigoBarras || "",
          nome: produto.nome,
          quantidade,
          preco,
          subtotal,
        };
      });
      pedidos.push({
        id: `DEMO-${agora}-${compra.sufixo}`,
        origem: "Demonstração",
        demonstracao: true,
        dataCriacao: dataCompra.toISOString(),
        dataPagamento: dataCompra.toISOString().slice(0, 10),
        cliente,
        itens,
        total: itens.reduce((soma, item) => soma + item.subtotal, 0),
        formaPagamento: "Pix",
        clienteVip: false,
        status: "Concluído",
      });
    });
    salvarPedidosArmazenados(pedidos);
    atualizarAbasAdministrativas();
  }

  function removerDadosDemonstracao() {
    salvarPedidosArmazenados(
      lerPedidosArmazenados().filter((pedido) => pedido.demonstracao !== true),
    );
    atualizarAbasAdministrativas();
  }

  function obterTotalVenda() {
    return vendaAtual.reduce(
      (total, item) => total + converterPrecoParaNumero(item.preco) * item.quantidade,
      0,
    );
  }

  function renderizarVenda() {
    listaVenda.replaceChildren();
    vendaAtual.forEach((item, index) => {
      const linha = document.createElement("div");
      linha.className = "caixa-sale-row";
      const nome = document.createElement("span");
      nome.textContent = item.nome.replace(/<br\s*[\/]?>/gi, " ");
      const codigo = document.createElement("span");
      codigo.textContent = item.codigoBarras || item.id;
      const preco = document.createElement("span");
      preco.textContent = formatarMoeda(converterPrecoParaNumero(item.preco));
      const colunaQuantidade = document.createElement("span");
      colunaQuantidade.className = "caixa-sale-quantity";
      const quantidade = document.createElement("span");
      quantidade.textContent = String(item.quantidade);
      const subtotal = document.createElement("strong");
      subtotal.textContent = formatarMoeda(converterPrecoParaNumero(item.preco) * item.quantidade);
      const diminuir = document.createElement("button");
      diminuir.type = "button";
      diminuir.textContent = "−";
      diminuir.setAttribute("aria-label", `Diminuir quantidade de ${item.nome}`);
      diminuir.addEventListener("click", () => {
        item.quantidade -= 1;
        if (item.quantidade <= 0) vendaAtual.splice(index, 1);
        renderizarVenda();
      });
      const aumentar = document.createElement("button");
      aumentar.type = "button";
      aumentar.textContent = "+";
      aumentar.setAttribute("aria-label", `Aumentar quantidade de ${item.nome}`);
      aumentar.addEventListener("click", () => {
        item.quantidade += 1;
        renderizarVenda();
      });
      colunaQuantidade.append(diminuir, quantidade, aumentar);
      linha.append(nome, codigo, preco, colunaQuantidade, subtotal);
      listaVenda.appendChild(linha);
    });
    totalVenda.textContent = formatarMoeda(obterTotalVenda());

    const imagemDestaque = document.getElementById("imagemProdutoCaixa");
    const legendaDestaque = document.getElementById("legendaProdutoCaixa");
    const itemEmDestaque = vendaAtual.find((item) => item.id === produtoEmDestaqueId)
      || vendaAtual[vendaAtual.length - 1];
    if (!itemEmDestaque) produtoEmDestaqueId = null;
    const produtoDestaque = itemEmDestaque
      ? BANCO_PRODUTOS.find((produto) => produto.id === itemEmDestaque.id)
      : null;
    if (imagemDestaque && legendaDestaque) {
      if (produtoDestaque?.imagemFrente) {
        imagemDestaque.src = resolveAssetUrl(produtoDestaque.imagemFrente);
        imagemDestaque.alt = produtoDestaque.nome.replace(/<br\s*[\/]?>/gi, " ");
        imagemDestaque.hidden = false;
        legendaDestaque.textContent = imagemDestaque.alt;
      } else {
        imagemDestaque.removeAttribute("src");
        imagemDestaque.alt = "Imagem do produto selecionado";
        imagemDestaque.hidden = true;
        legendaDestaque.textContent = "Imagem do produto";
      }
    }
  }

  function adicionarProdutoCaixa() {
    const busca = campoCodigo.value.trim();
    if (!busca) {
      campoCodigo.focus();
      return;
    }
    const produto = BANCO_PRODUTOS.find((item) => item.codigoBarras && item.codigoBarras === busca)
      || BANCO_PRODUTOS.find((item) => item.id === busca)
      || BANCO_PRODUTOS.find((item) => item.nome.replace(/<br\s*[\/]?>/gi, " ").toLowerCase() === busca.toLowerCase());
    if (!produto) {
      alert("Produto não encontrado. Cadastre o código de barras na aba Produtos ou pesquise pelo nome.");
      return;
    }
    if (produto.esgotado) {
      alert("Este produto está marcado como esgotado.");
      return;
    }
    const itemAtual = vendaAtual.find((item) => item.id === produto.id);
    if (itemAtual) {
      itemAtual.quantidade += 1;
    } else {
      vendaAtual.push({
        id: produto.id,
        codigoBarras: produto.codigoBarras || "",
        nome: produto.nome,
        quantidade: 1,
        preco: produto.precoDesconto || produto.precoOriginal,
      });
    }
    produtoEmDestaqueId = produto.id;
    campoCodigo.value = "";
    campoCodigo.focus();
    renderizarVenda();
  }

  function concluirVenda() {
    if (vendaAtual.length === 0) {
      alert("Adicione pelo menos um produto antes de concluir a venda.");
      return;
    }
    if (!pagamentoAtual) {
      alert("Selecione uma forma de pagamento.");
      return;
    }
    const pedidos = lerPedidosArmazenados();
    pedidos.push({
      id: `CX-${Date.now()}`,
      origem: "Caixa",
      dataCriacao: new Date().toISOString(),
      cliente: null,
      itens: vendaAtual.map((item) => ({
        ...item,
        subtotal: converterPrecoParaNumero(item.preco) * item.quantidade,
      })),
      total: obterTotalVenda(),
      formaPagamento: pagamentoAtual,
      clienteVip,
      status: "Concluído",
    });
    salvarPedidosArmazenados(pedidos);
    vendaAtual = [];
    produtoEmDestaqueId = null;
    pagamentoAtual = "";
    clienteVip = false;
    atualizarFormaPagamento();
    renderizarVenda();
    renderizarPainel();
    alert("Venda concluída e registrada no painel.");
  }

  const formPedido = document.getElementById("formCadastroPedido");
  const produtosDoPedido = [];
  const seletorProdutoPedido = document.getElementById("pedidoProdutoSelect");
  const seletorClientePedido = document.getElementById("pedidoClienteSelect");
  const camposNovoClientePedido = document.getElementById("pedidoNovoClienteCampos");
  const campoNomeNovoClientePedido = document.getElementById("pedidoClienteNome");
  const opcaoNovoCliente = "__novo_cliente__";

  function definirDadosNovoClientePedido(cliente = {}) {
    [
      ["pedidoClienteNome", "nome"],
      ["pedidoClienteTelefone", "telefone"],
      ["pedidoClienteCpf", "cpf"],
      ["pedidoClienteEndereco", "endereco"],
      ["pedidoClienteNumero", "numero"],
      ["pedidoClienteComplemento", "complemento"],
      ["pedidoClienteCep", "cep"],
    ].forEach(([id, chave]) => {
      document.getElementById(id).value = cliente[chave] || "";
    });
  }

  function atualizarClientesDoFormularioPedido() {
    const selecaoAnterior = seletorClientePedido.value;
    seletorClientePedido.replaceChildren();
    const opcoes = [...obterClientesDisponiveis().values()].sort((a, b) =>
      a.nome.localeCompare(b.nome, "pt-BR"),
    );
    opcoes.forEach((cliente) => {
      const opcao = document.createElement("option");
      opcao.value = cliente.chave;
      opcao.textContent = cliente.telefone
        ? `${cliente.nome} · ${cliente.telefone}`
        : cliente.nome;
      seletorClientePedido.appendChild(opcao);
    });
    const opcaoNovo = document.createElement("option");
    opcaoNovo.value = opcaoNovoCliente;
    opcaoNovo.textContent = "Cadastrar novo cliente";
    seletorClientePedido.appendChild(opcaoNovo);
    seletorClientePedido.value = opcoes.some((cliente) => cliente.chave === selecaoAnterior)
      ? selecaoAnterior
      : opcaoNovoCliente;
    aplicarSelecaoClientePedido();
  }

  function aplicarSelecaoClientePedido() {
    const clienteExistente = seletorClientePedido.value === opcaoNovoCliente
      ? null
      : obterClientesDisponiveis().get(seletorClientePedido.value);
    const novoCliente = !clienteExistente;
    camposNovoClientePedido.hidden = !novoCliente;
    camposNovoClientePedido.disabled = !novoCliente;
    campoNomeNovoClientePedido.required = novoCliente;
    if (novoCliente) {
      definirDadosNovoClientePedido();
    } else {
      definirDadosNovoClientePedido(clienteExistente);
    }
  }

  seletorClientePedido.addEventListener("change", aplicarSelecaoClientePedido);
  atualizarClientesDoFormularioPedido();

  BANCO_PRODUTOS.filter((produto) => !produto.esgotado).forEach((produto) => {
    const opcao = document.createElement("option");
    opcao.value = produto.id;
    opcao.textContent = produto.nome.replace(/<br\s*[\/]?>/gi, " ");
    seletorProdutoPedido.appendChild(opcao);
  });

  function renderizarItensPedidoNovo() {
    const lista = document.getElementById("pedidoItensSelecionados");
    lista.replaceChildren();
    produtosDoPedido.forEach((item, index) => {
      const linha = document.createElement("div");
      linha.className = "admin-create-item";
      const texto = document.createElement("span");
      texto.textContent = `${item.quantidade} × ${item.nome.replace(/<br\s*[\/]?>/gi, " ")} · ${formatarMoeda(item.subtotal)}`;
      const remover = document.createElement("button");
      remover.type = "button";
      remover.className = "btn-excluir-admin";
      remover.textContent = "Remover";
      remover.addEventListener("click", () => {
        produtosDoPedido.splice(index, 1);
        renderizarItensPedidoNovo();
      });
      linha.append(texto, remover);
      lista.appendChild(linha);
    });
    const total = produtosDoPedido.reduce((soma, item) => soma + item.subtotal, 0);
    document.getElementById("pedidoTotalCadastro").textContent = formatarMoeda(total);
  }

  document.getElementById("adicionarItemPedido").addEventListener("click", () => {
    const produto = BANCO_PRODUTOS.find(
      (item) => item.id === seletorProdutoPedido.value,
    );
    const quantidade = Number(document.getElementById("pedidoProdutoQuantidade").value);
    if (!produto || !Number.isInteger(quantidade) || quantidade < 1) {
      document.getElementById("pedidoProdutoQuantidade").focus();
      return;
    }
    const preco = produto.precoDesconto || produto.precoOriginal;
    produtosDoPedido.push({
      id: produto.id,
      codigoBarras: produto.codigoBarras || "",
      nome: produto.nome,
      quantidade,
      preco,
      subtotal: converterPrecoParaNumero(preco) * quantidade,
    });
    document.getElementById("pedidoProdutoQuantidade").value = "1";
    renderizarItensPedidoNovo();
  });

  formPedido.addEventListener("submit", (event) => {
    event.preventDefault();
    const clienteExistente = seletorClientePedido.value === opcaoNovoCliente
      ? null
      : obterClientesDisponiveis().get(seletorClientePedido.value);
    const cliente = clienteExistente || {
      nome: document.getElementById("pedidoClienteNome").value.trim(),
      telefone: document.getElementById("pedidoClienteTelefone").value.trim(),
      cpf: document.getElementById("pedidoClienteCpf").value.trim(),
      endereco: document.getElementById("pedidoClienteEndereco").value.trim(),
      numero: document.getElementById("pedidoClienteNumero").value.trim(),
      complemento: document.getElementById("pedidoClienteComplemento").value.trim(),
      cep: document.getElementById("pedidoClienteCep").value.trim(),
    };
    if (!cliente?.nome || !produtosDoPedido.length) {
      alert("Selecione ou cadastre um cliente e adicione ao menos um produto ao pedido.");
      return;
    }
    const clienteParaSalvar = {
      nome: cliente.nome,
      telefone: cliente.telefone || "",
      cpf: cliente.cpf || "",
      endereco: cliente.endereco || "",
      numero: cliente.numero || "",
      complemento: cliente.complemento || "",
      cep: cliente.cep || "",
    };
    const pedidos = lerPedidosArmazenados();
    pedidos.push({
      id: `PED-${Date.now()}`,
      origem: "Cadastro manual",
      dataCriacao: new Date().toISOString(),
      cliente: clienteParaSalvar,
      itens: [...produtosDoPedido],
      total: produtosDoPedido.reduce((total, item) => total + item.subtotal, 0),
      formaPagamento: "A combinar",
      clienteVip: false,
      status: "Aguardando confirmação",
    });
    salvarPedidosArmazenados(pedidos);
    const clientes = lerClientesAdmin();
    const chaveCliente = obterChaveCliente(clienteParaSalvar);
    const indiceCliente = clientes.findIndex(
      (registro) => obterChaveCliente(registro) === chaveCliente,
    );
    if (indiceCliente < 0) {
      clientes.push({ ...clienteParaSalvar, sugestoesCliente: [] });
    } else {
      clientes[indiceCliente] = { ...clientes[indiceCliente], ...clienteParaSalvar };
    }
    salvarClientesAdmin(clientes);
    produtosDoPedido.splice(0, produtosDoPedido.length);
    formPedido.reset();
    seletorProdutoPedido.selectedIndex = 0;
    document.getElementById("pedidoProdutoQuantidade").value = "1";
    renderizarItensPedidoNovo();
    atualizarClientesDoFormularioPedido();
    atualizarAbasAdministrativas();
  });

  document.getElementById("formCadastroCliente").addEventListener("submit", (event) => {
    event.preventDefault();
    const cliente = {
      nome: document.getElementById("novoClienteNome").value.trim(),
      telefone: document.getElementById("novoClienteTelefone").value.trim(),
      cpf: document.getElementById("novoClienteCpf").value.trim(),
      endereco: document.getElementById("novoClienteEndereco").value.trim(),
      numero: document.getElementById("novoClienteNumero").value.trim(),
      complemento: document.getElementById("novoClienteComplemento").value.trim(),
      cep: document.getElementById("novoClienteCep").value.trim(),
      sugestoesCliente: [],
    };
    const clientes = lerClientesAdmin();
    const chaveCliente = obterChaveCliente(cliente);
    const indice = clientes.findIndex(
      (registro) => obterChaveCliente(registro) === chaveCliente,
    );
    if (indice < 0) {
      clientes.push(cliente);
    } else {
      const clienteExistente = clientes[indice];
      clientes[indice] = Object.fromEntries(
        Object.entries({ ...clienteExistente, ...cliente }).filter(
          ([chave, valor]) =>
            valor !== "" || chave === "complemento" || !(chave in clienteExistente),
        ),
      );
      clientes[indice].sugestoesCliente = clienteExistente.sugestoesCliente || [];
    }
    salvarClientesAdmin(clientes);
    clienteSelecionadoId = chaveCliente;
    event.currentTarget.reset();
    renderizarClientes();
  });
  document.getElementById("btnAbrirCadastroCliente").addEventListener("click", () => {
    const painelCadastro = document.getElementById("painelCadastroCliente");
    painelCadastro.open = true;
    document.getElementById("novoClienteNome").focus();
  });

  document.getElementById("btnAdicionarProdutoCaixa").addEventListener("click", adicionarProdutoCaixa);
  campoCodigo.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      adicionarProdutoCaixa();
    }
  });
  document.querySelectorAll("[data-forma-pagamento]").forEach((botao) => {
    botao.addEventListener("click", () => {
      pagamentoAtual = botao.dataset.formaPagamento;
      atualizarFormaPagamento();
    });
  });
  function atualizarFormaPagamento() {
    const textoPagamento = pagamentoAtual
      ? `Pagamento selecionado: ${pagamentoAtual}`
      : "Selecione uma forma de pagamento.";
    formaPagamento.textContent = clienteVip
      ? `${textoPagamento} · Cliente VIP`
      : textoPagamento;
    document.querySelectorAll("[data-forma-pagamento]").forEach((botao) => {
      const selecionado = botao.dataset.formaPagamento === pagamentoAtual;
      botao.classList.toggle("selecionado", selecionado);
      botao.setAttribute("aria-pressed", String(selecionado));
    });
    const botaoVip = document.getElementById("btnClienteVip");
    botaoVip.classList.toggle("selecionado", clienteVip);
    botaoVip.setAttribute("aria-pressed", String(clienteVip));
  }
  document.getElementById("btnClienteVip").addEventListener("click", () => {
    clienteVip = !clienteVip;
    atualizarFormaPagamento();
  });
  document.getElementById("btnCancelarVenda").addEventListener("click", () => {
    vendaAtual = [];
    produtoEmDestaqueId = null;
    pagamentoAtual = "";
    clienteVip = false;
    atualizarFormaPagamento();
    renderizarVenda();
  });
  document.getElementById("btnConcluirVenda").addEventListener("click", concluirVenda);
  document.getElementById("atalhoAdicionarProdutoCaixa").addEventListener("click", () => {
    campoCodigo.focus();
  });
  document.querySelectorAll("[data-export-report]").forEach((botao) => {
    botao.addEventListener("click", () => {
      exportarRelatorio(botao.dataset.exportReport, {
        vendaAtual,
        pagamentoAtual,
        clienteVip,
      }, [...obterClientesDisponiveis().values()]);
    });
  });
  window.addEventListener("admin:refresh-products", atualizarAbasAdministrativas);
  window.addEventListener("storage", (event) => {
    if (event.key === "clientes_admin" || event.key === "pedidos_admin") {
      atualizarAbasAdministrativas();
    }
  });
  document.getElementById("carregarDemonstracao").addEventListener("click", carregarDadosDemonstracao);
  document.getElementById("removerDemonstracao").addEventListener("click", removerDadosDemonstracao);
  document.querySelectorAll("#relatorios, #clientes, #pedidos").forEach((aba) => {
    aba.addEventListener("change", renderizarPainel);
  });
  const relogioCaixa = document.getElementById("relogioCaixa");
  if (relogioCaixa) {
    const atualizarRelogioCaixa = () => {
      const agora = new Date();
      relogioCaixa.dateTime = agora.toISOString();
      relogioCaixa.textContent = `${agora.toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
      })} · ${agora.toLocaleTimeString("pt-BR")}`;
    };
    atualizarRelogioCaixa();
    window.setInterval(atualizarRelogioCaixa, 1000);
  }
  document.addEventListener("keydown", (event) => {
    if (!document.getElementById("caixa").checked) return;
    const teclaPagamento = {
      F1: "Pix",
      F2: "Cartão de débito",
      F3: "Cartão de crédito",
      F4: "Dinheiro",
    }[event.key];
    if (teclaPagamento) {
      event.preventDefault();
      document.querySelector(`[data-forma-pagamento="${teclaPagamento}"]`)?.click();
    } else if (event.key === "F6") {
      event.preventDefault();
      document.getElementById("atalhoAdicionarProdutoCaixa").click();
    } else if (event.key === "F5") {
      event.preventDefault();
      document.getElementById("btnClienteVip").click();
    } else if (event.key === "Escape") {
      event.preventDefault();
      document.getElementById("btnCancelarVenda").click();
    }
  });

  renderizarPainel();
  renderizarVenda();
  alternarBotoesDemonstracao();
});