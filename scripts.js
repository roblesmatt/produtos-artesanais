// ==========================================
// 1. BANCO DE DADOS DE PRODUTOS (Unificado)
// ==========================================
const BANCO_PRODUTOS = [
  {
    id: "perfume-capim-limao",
    nome: "Perfume Artesanal de Capim Limão",
    precoOriginal: "R$89,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/thairo-1x1.svg",
    imagemVerso: "produtos/thairo-1x1.svg",
    video3d: "produtos/perfume-teste.webm",
    linkPagina: "perfume-artesanal-capim-limao.html",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "ativos-capim-limao",
      cor: "cores-verde",
      categoria: "mais-vendido",
    },
    acordeoes: {
      sobre:
        "Frescor, limpeza e revigorante. Um estímulo natural de frescor e bem-estar.<br><br><strong>[Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes].</strong>",
      beneficios:
        "<strong>- Produção artesanal<br>- Com ativos naturais<br>- Sem corantes<br>- Aroma acentuado<br>- Sensação imediata<br>- Não testado em animais",
      composicao:
        "Álcool, Propilenoglicol, Hidroxitolueno Butilado, Hexametilindanopirano, Água, Fenoxietanol, Essência de Capim-Limão, Óleo Essencial de Capim-Limão.",
      modoUso:
        "Borrifar sobre a pele nos pontos de pulsação (pulsos e pescoço). <strong>Após aberto, consumir em até 12 (doze) meses.</strong>",
      advertencias:
        "Uso externo. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conserva em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Volume:</strong> 60ml<br><strong>Medida:</strong><br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete:
        "Enviado para todo o Brasil com taxa fixa de <strong>R$ 30,00</strong>. Opção de retirada local disponível (consulte pelo atendimento no WhatsApp).",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso. <strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC. <strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contacto connosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "perfume-lavanda-provence",
    nome: "Perfume Artesanal de Lavanda Provence",
    precoOriginal: "R$79,90",
    precoDesconto: "R$69,90",
    subtitulo: "[1 un. / 60ml].",
    esgotado: false,
    imagemFrente: "produtos/thairo-1x1.svg",
    imagemVerso: "produtos/thairo-1x1.svg",
    video3d: "produtos/perfume-teste.webm",
    linkPagina: "perfume-artesanal-lavanda-provence.html",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "ativos-lavanda-provence",
      cor: "cores-lilas",
      categoria: ["mais-vendido", "promocao"],
    },
    acordeoes: {
      sobre:
        "Relaxante, harmonioso e suave. A energia das ervas frescas para despertar o foco e a vitalidade.<br><br><strong>[Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes].</strong>",
      beneficios:
        "<strong>- Produção artesanal<br>- Com ativos naturais<br>- Sem corantes<br>- Aroma acentuado<br>- Sensação imediata<br>- Não testado em animais",
      composicao:
        "Álcool, Propilenoglicol, Hidroxitolueno Butilado, Hexametilindanopirano, Água, Fenoxietanol, Essência de Lavanda Provence, Óleo Essencial de Lavanda Provence.",
      modoUso:
        "Borrifar sobre a pele nos pontos de pulsação (pulsos e pescoço). <strong>Após aberto, consumir em até 12 (doze) meses.</strong>",
      advertencias:
        "Uso externo. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conserva em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Volume:</strong> 60ml<br><strong>Medida:</strong><br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete:
        "Enviado para todo o Brasil com taxa fixa de <strong>R$ 30,00</strong>. Opção de retirada local disponível (consulte pelo atendimento no WhatsApp).",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso. <strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC. <strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contacto connosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
  {
    id: "perfume-alecrim-rosmarino",
    nome: "Perfume Artesanal de Alecrim Rosmarino",
    precoOriginal: "R$79,90",
    precoDesconto: "R$69,90",
    subtitulo: "[1 un. / 60ml].",
    esgotado: true,
    imagemFrente: "produtos/thairo-1x1.svg",
    imagemVerso: "produtos/thairo-1x1.svg",
    video3d: "produtos/perfume-teste.webm",
    linkPagina: "perfume-artesanal-alecrim-rosmarino.html",
    tags: {
      linha: "linhas-classico",
      funcao: "funcao-perfume-artesanal",
      ativo: "ativos-alecrim-rosmarino",
      cor: "cores-verde",
      categoria: ["mais-vendido", "promocao"],
    },
    acordeoes: {
      sobre:
        "Tonificação, ativador e adstringente.<br><br><strong>[Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes].</strong>",
      beneficios:
        "<strong>- Produção artesanal<br>- Com ativos naturais<br>- Sem corantes<br>- Aroma acentuado<br>- Sensação imediata<br>- Não testado em animais",
      composicao:
        "Álcool, Propilenoglicol, Hidroxitolueno Butilado, Hexametilindanopirano, Água, Fenoxietanol, Essência de Alecrim, Óleo Essencial de Alecrim.",
      modoUso:
        "Borrifar sobre a pele nos pontos de pulsação (pulsos e pescoço). <strong>Após aberto, consumir em até 12 (doze) meses.</strong>",
      advertencias:
        "Uso externo. Em caso de contato acidental com os olhos, enxaguar com água em abundância. Havendo irritação, suspenda o uso e procure orientação médica. Manter fora do alcance de mulheres grávidas, crianças menores de 05 (cinco) anos e animais. Conserva em local seco, fresco e longe da luz solar.",
      fichaTecnica:
        "<strong>Volume:</strong> 60ml<br><strong>Medida:</strong><br><strong>Linha:</strong> Clássico<br><strong>Validade:</strong> após aberto, 12 meses<br><strong>Origem:</strong> São Paulo, Brasil<br>",
      pagamentos: "Pagamento facilitado via Pix com aprovação imediata.",
      frete:
        "Enviado para todo o Brasil com taxa fixa de <strong>R$ 30,00</strong>. Opção de retirada local disponível (consulte pelo atendimento no WhatsApp).",
      trocas:
        "<strong>Arrependimento ou Desistência:</strong> Conforme o artigo 49 do CDC, se comprar o produto através do nosso site, tem o direito de desistir da compra e solicitar o reembolso ou a troca no prazo de até 7 dias corridos a contar da data de recebimento do pedido. O produto deve ser devolvido na embalagem original, sem indícios de uso. <strong>Defeitos ou Vícios de Fabricação:</strong> Caso o produto apresente defeito, o prazo para solicitar a troca ou reparo é de até 30 dias corridos para produtos não duráveis (como cosméticos e sabonetes artesanais), contados a partir da data de entrega, nos termos do artigo 26 do CDC. <strong>Processo de Envio:</strong> Para iniciar o procedimento de troca ou devolução, entre em contacto connosco através dos nossos canais de atendimento. As instruções detalhadas para a postagem serão enviadas com total suporte.",
    },
  },
];

// ==========================================
// 2. INJETA O GLOBAL (Header, Menu e Busca)
// ==========================================
fetch("global.html")
  .then((response) => response.text())
  .then((data) => {
    const cabecalhoContainer = document.getElementById("cabecalho-container");
    if (cabecalhoContainer) {
      cabecalhoContainer.innerHTML = data;

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

  if (searchInput && searchModal) {
    searchInput.addEventListener("input", (e) => {
      const termo = e.target.value.toLowerCase().trim();

      if (termo.length > 0) {
        searchModal.style.display = "flex";
        searchResultsList.innerHTML = "";

        let encontrados = 0;

        BANCO_PRODUTOS.forEach((produto) => {
          if (produto.nome.toLowerCase().includes(termo)) {
            encontrados++;
            const item = document.createElement("a");
            item.href = produto.linkPagina;
            item.className = "search-result-card";
            item.style.cssText =
              "display: flex; align-items: center; gap: 12px; text-decoration: none; color: inherit; padding: 8px;";

            let blocoPrecoBusca = `<span class="preco-atual">${produto.precoOriginal}</span>`;

            if (produto.precoDesconto && produto.precoDesconto.trim() !== "") {
              blocoPrecoBusca = `
                <div style="display: flex; flex-direction: row; align-items: baseline; gap: 6px;">
                  <span class="preco-atual">${produto.precoDesconto}</span>
                  <span class="preco-antigo">${produto.precoOriginal}</span>
                </div>
              `;
            }

            item.innerHTML = `
              <img src="${produto.imagemFrente}" alt="" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;">
              <div>
                <h4 style="margin: 0 0 4px 0; font-size: 14px; color: #3d2d2d;">${produto.nome}</h4>
                ${blocoPrecoBusca}
              </div>
            `;

            searchResultsList.appendChild(item);
          }
        });

        if (encontrados === 0) {
          searchResultsList.innerHTML =
            '<p style="color: #9A8E7E; text-align: center; padding: 10px;">Nenhum produto encontrado</p>';
        }
      } else {
        searchModal.style.display = "none";
      }
    });
  }

  if (closeSearchModal) {
    closeSearchModal.addEventListener("click", () => {
      searchModal.style.display = "none";
      if (searchInput) searchInput.value = "";
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

  BANCO_PRODUTOS.forEach((produto) => {
    const categoriasArray = Array.isArray(produto.tags.categoria)
      ? produto.tags.categoria
      : [produto.tags.categoria];

    const destinos = [
      ...categoriasArray,
      produto.tags.linha,
      produto.tags.funcao,
      produto.tags.ativo,
      produto.tags.cor,
    ];

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
          <div class="button1" style="
            position: absolute; 
            top: 50%; 
            left: 50%; 
            transform: translate(-50%, -50%); 
            width: 70%; 
            margin: 0;   
            z-index: 10; 
            pointer-events: none; 
            text-align: center;
            font-family: inherit;
          ">
            ESGOTADO
          </div>`;
      }

      const card = document.createElement("div");
      card.className = `produto-card ${classeEsgotado}`;
      card.style.cssText = "position: relative; display: block;";

      // Estrutura interna contendo a imagem e o vídeo (inicialmente oculto/pausado)
      card.innerHTML = `
        ${seloEsgotadoHtml}
        <a href="${produto.linkPagina}" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center; justify-content: space-between; width: 100%; height: 100%; ${produto.esgotado ? "pointer-events: none; opacity: 0.4;" : ""}">
          <div class="media-container" style="width: 100%; display: flex; justify-content: center; align-items: center; position: relative; overflow: hidden;">
            <img src="${produto.imagemFrente}" alt="${produto.nome}" class="card-img" style="width: 100%; display: block; transition: opacity 0.3s ease;">
            ${produto.video3d ? `<video src="${produto.video3d}" class="card-video" muted loop playsinline style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; opacity: 0; pointer-events: none;"></video>` : ""}
          </div>
          <div style="width: 100%;">
            <h4>${produto.nome}</h4>
            <div style="width: 100%; margin-top: 5px; text-align: center;">${blocoPreco}</div>
          </div>
        </a>
      `;

      // Adiciona a lógica de Hover para trocar a imagem pelo vídeo se ele existir
      if (produto.video3d && !produto.esgotado) {
        const imgEl = card.querySelector(".card-img");
        const videoEl = card.querySelector(".card-video");

        card.addEventListener("mouseenter", () => {
          if (imgEl) imgEl.style.opacity = "0";
          if (videoEl) {
            videoEl.style.opacity = "1";
            videoEl.currentTime = 0;
            videoEl.play().catch(() => {});
          }
        });

        card.addEventListener("mouseleave", () => {
          if (videoEl) {
            videoEl.pause();
            videoEl.style.opacity = "0";
          }
          if (imgEl) imgEl.style.opacity = "1";
        });
      }

      grid.appendChild(card);
    });
  });
}

// ==========================================
// 4. PREENCHIMENTO DA PÁGINA DE DETALHE DO PRODUTO
// ==========================================
function preencherPaginaProduto() {
  const params = new URLSearchParams(window.location.search);
  let idProduto = params.get("id");

  if (!idProduto) {
    const paginaAtual = window.location.pathname.split("/").pop();
    const produtoEncontrado = BANCO_PRODUTOS.find(
      (p) => p.linkPagina === paginaAtual,
    );
    if (produtoEncontrado) {
      idProduto = produtoEncontrado.id;
    }
  }

  if (!idProduto) return;

  const produto = BANCO_PRODUTOS.find((p) => p.id === idProduto);
  if (!produto) return;

  if (produto.esgotado) {
    document.body.innerHTML = `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; background-color: #e0d4b9; color: #3d2d2d; font-family: sans-serif; text-align: center; padding: 20px;">
        <h1 style="font-size: 32px; margin-bottom: 10px; border: 3px solid #3d2d2d; padding: 15px; box-shadow: 6px 6px 0px #3d2d2d;">LOTE ESGOTADO</h1>
        <p style="font-size: 18px; margin-bottom: 20px;">O produto <strong>${produto.nome}</strong> encontra-se esgotado no momento.</p>
        <a href="index.html" style="background-color: #3d2d2d; color: #e0d4b9; padding: 12px 24px; text-decoration: none; font-weight: bold; border: 2px solid #3d2d2d; box-shadow: 3px 3px 0px #000;">Voltar para a Vitrine</a>
      </div>
    `;
    return;
  }

  const h1El = document.querySelector("h1");
  if (h1El) h1El.innerText = produto.nome;

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
  if (mainImage) mainImage.setAttribute("src", produto.imagemFrente);

  const thumb1 = document.querySelector(".thumb-frente");
  if (thumb1) thumb1.setAttribute("src", produto.imagemFrente);

  const thumb2 = document.querySelector(".thumb-verso");
  if (thumb2) thumb2.setAttribute("src", produto.imagemVerso);

  const videoSourceEl = document.getElementById("videoSource");
  if (videoSourceEl) {
    videoSourceEl.setAttribute("src", produto.video3d);
    videoSourceEl.closest("video")?.load();
  } else {
    const videoEl = document.querySelector(".phone-video, .responsive-video");
    if (videoEl) videoEl.setAttribute("src", produto.video3d);
  }

  const preencherAcordeao = (seletor, texto) => {
    const el = document.querySelector(seletor);
    if (el) el.innerHTML = `<p>${texto}</p>`;
  };

  if (produto.acordeoes) {
    preencherAcordeao("#conteudo-sobre", produto.acordeoes.sobre);
    preencherAcordeao("#conteudo-beneficios", produto.acordeoes.beneficios);
    preencherAcordeao("#conteudo-composicao", produto.acordeoes.composicao);
    preencherAcordeao("#conteudo-modo-uso", produto.acordeoes.modoUso);
    preencherAcordeao("#conteudo-advertencias", produto.acordeoes.advertencias);
    preencherAcordeao("#conteudo-ficha", produto.acordeoes.fichaTecnica);
    preencherAcordeao("#conteudo-pagamento", produto.acordeoes.pagamentos);
    preencherAcordeao("#conteudo-frete", produto.acordeoes.frete);
    preencherAcordeao("#conteudo-trocas", produto.acordeoes.trocas);
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

  const items = track.querySelectorAll(".carousel-item");
  const thumb = document.querySelector(".carousel-progress-thumb");

  track.addEventListener("scroll", () => {
    const maxScrollLeft = track.scrollWidth - track.clientWidth;
    if (maxScrollLeft <= 0 || !thumb) return;

    const scrollProgress = track.scrollLeft / maxScrollLeft;
    const maxTranslatePx = thumb.parentElement.clientWidth - thumb.offsetWidth;
    const translateValue = scrollProgress * maxTranslatePx;

    thumb.style.transform = `translateX(${translateValue}px)`;
  });

  let autoPlayTimer = null;
  let hoverResumeTimer = null;
  let isDown = false,
    startX,
    scrollLeft;
  let isHovered = false;
  let carouselIndex = 0;
  let isCarouselVisible = false;

  const HOVER_PAUSE_DURATION = 6000;

  function checkAndStartAutoPlay(forceResume = false) {
    const canPlay = isCarouselVisible && !isDown && (!isHovered || forceResume);

    if (canPlay) {
      if (!autoPlayTimer) {
        autoPlayTimer = setInterval(nextSlide, 6000);
      }
    } else {
      stopAutoPlay();
    }
  }

  function stopAutoPlay() {
    if (autoPlayTimer) {
      clearInterval(autoPlayTimer);
      autoPlayTimer = null;
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

  function setupItemObserver() {
    const trackWidth = track.clientWidth;
    const marginX = Math.floor(trackWidth / 2 - 10);

    const observerOptions = {
      root: track,
      rootMargin: `0px -${marginX}px 0px -${marginX}px`,
      threshold: 0,
    };

    const itemObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = Array.from(items).indexOf(entry.target);
          if (index !== -1) {
            carouselIndex = index;
          }
        }
      });
    }, observerOptions);

    items.forEach((item) => itemObserver.observe(item));
  }

  setupItemObserver();
  window.addEventListener("resize", setupItemObserver);

  function getCardStep() {
    const item = track.querySelector(".carousel-item");
    const gap = parseFloat(getComputedStyle(track).gap) || 20;
    return item ? item.offsetWidth + gap : 300;
  }

  function nextSlide() {
    if (items.length === 0) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const isAtEnd =
      carouselIndex >= items.length - 1 || track.scrollLeft >= maxScroll - 10;

    if (isAtEnd) {
      carouselIndex = 0;
    } else {
      carouselIndex++;
    }

    const cardStep = getCardStep();

    track.scrollTo({
      left: carouselIndex * cardStep,
      behavior: "smooth",
    });
  }

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

  track.addEventListener("pointerdown", (e) => {
    isDown = true;
    clearHoverResumeTimer();
    checkAndStartAutoPlay();
    track.classList.add("is-dragging");
    startX = e.pageX - track.offsetLeft;
    scrollLeft = track.scrollLeft;
    track.setPointerCapture(e.pointerId);
  });

  track.addEventListener("pointerup", (e) => {
    isDown = false;
    track.classList.remove("is-dragging");
    track.releasePointerCapture(e.pointerId);
    checkAndStartAutoPlay();
  });

  track.addEventListener("pointercancel", (e) => {
    isDown = false;
    track.classList.remove("is-dragging");
    track.releasePointerCapture(e.pointerId);
    checkAndStartAutoPlay();
  });

  track.addEventListener("pointermove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - track.offsetLeft;
    const walk = (x - startX) * 1.2;
    track.scrollLeft = scrollLeft - walk;
  });
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
            video.currentTime = 0;
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

  if (cartItemsList) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    cartItemsList.innerHTML = "";
    let totalGeral = 0;

    if (carrinho.length === 0) {
      cartItemsList.innerHTML =
        "<p style='text-align: center; padding: 20px; color: #666;'>A sua cesta está vazia.</p>";
      if (cartTotal) cartTotal.innerText = "R$ 0,00";
      return;
    }

    carrinho.forEach((item, index) => {
      const produto = BANCO_PRODUTOS.find(
        (produto) => produto.nome === item.nome,
      );
      const precoOriginal = produto?.precoOriginal || item.preco;
      const precoDesconto = produto?.precoDesconto || item.precoDesconto || "";
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
        <img src="${item.imagem || "produtos/thairo-1x1.svg"}" alt="${item.nome}" class="cart-item-img">
        
        <div class="cart-item-content" style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
            <h4 class="cart-item-title" style="margin: 0; font-size: 15px; font-weight: bold; color: #3d2d2d;">${item.nome}</h4>
            
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div class="cart-item-price-area">
                    ${blocoPrecoCarrinho}
                </div>

                <div class="cart-item-controls" style="display: flex; align-items: center; gap: 6px;">
                    <div class="qty-selector">
                        <button onclick="alterarQtd(${index}, -1, this)" aria-label="Diminuir quantidade">-</button>
                        <span>${item.quantidade}</span>
                        <button onclick="alterarQtd(${index}, 1, this)" aria-label="Aumentar quantidade">+</button>
                    </div>
                    <button onclick="removerDaCesta(${index}, this)" class="cart-item-delete" style="background: none; border: none; cursor: pointer; font-size: 16px;" title="Remover item">
<svg xmlns="http://www.w3.org/2000/svg" width="32.8" height="32.8" viewBox="0 0 32.8 32.8"><path d="M60.4-0.4c.5 0 2.3-0.1 4 .6c.4 .2 1.3 .7 1.4 .8c.4 .3 .9 .7 1 .8c.1 .1 .9 1.1 1 1.3c1.5 2.3 1.3 3.3 1.3 9.4c0 1.9 0 2.2 .2 2.4c.1 .1 .1 .1 7.2 .1c15.7 0 15.7 0 16.5 .1c1.5 .1 2.4 .6 3.4 1.2c.2 .1 1.2 .9 1.3 1.1c2.4 2.8 2.1 4.3 2.1 9.7c0 3.1 .2 4.4-0.6 6.2c-0.4 1-1 1.8-1.2 2c-0.5 .5-0.5 .5-1.3 1.2c-0.7 .6-2 1.1-3 1.3c-0.4 .1-1.2 .2-1.4 .3c-0.1 .2-0.1 .2-0.1 8.4c0 60.4 0 60.4-0.1 61.5c-0.1 2.8-1.3 7.1-4.9 10.5c-4.9 4.5-10.8 4-11.5 4c-52.9 0-52.9 0-53 0c-2.1-0.1-4.4-0.3-7.9-2.4c-0.2-0.1-1.7-1.2-2.8-2.3c-4.8-5.1-4.3-10.5-4.3-12.9c0-66.5 0-66.5 0-66.5c-0.1-0.8-1.4 .1-4.2-1.7c-0.3-0.1-1.3-0.9-1.3-1c-0.9-1-1.2-1.6-1.2-1.7c-1.5-2.6-0.8-5.4-1-11c0-0.3 .1-1.5 .2-2.1c.4-1.7 1.5-2.9 1.6-3.1c.5-0.6 .5-0.6 1-1c2.4-2.1 4.5-1.8 8.9-1.8c18.6 0 18.6 0 18.7 0c.4-0.1 .3-0.2 .3-0.6c.1-5.1-0.3-7.7 .7-10.1c.4-1.1 1.5-2.4 1.7-2.5c.6-0.5 2.2-2.1 5.4-2.2c.3 0 .3 0 21.9 0Zm26.9 30.8c.6 0 3.2 .3 4.4-2.1c1.2-2.2 0-5.6-3.5-5.6c-0.2 0-0.2 0-75.3 0c-0.6 0-3.1-0.4-4.5 1.6c-1.6 2.3-0.3 6 3.3 6c1.2 .1 73.8 0 75.6 .1Zm-71.9 7.7c0 .1 0 68.6 0 68.7c0 2.9 1 4.3 2.1 5.7c.1 .1 1.1 .9 1.3 1c2.4 1.5 3.7 1.3 7.7 1.3c50.4 0 50.4 0 50.9 0c4.6-0.5 6.6-4.2 6.9-6.1c.2-1.3 .2-1.3 .2-10.1c0-60.2 0-60.2 0-60.2c-0.1-0.4-0.2-0.4-0.6-0.4c-0.7 0-66.5 .1-67.9 0c-0.2 0-0.2 0-0.3 0c-0.1 .1-0.1 .1-0.3 .1Zm49.9 20.2c0-0.9 0-1.5 .1-1.9c1.1-4.2 7.2-3.9 7.6 .7c0 .1 0 .1 0 44.2c0 1.8 .1 3.2-0.8 4.3c-2.4 3-7 1.3-6.9-2.7c0-0.6 0-0.6 0-44.6Zm-38.4 0c0-0.9-0.2-2.7 1.4-4c2.1-1.8 6-0.9 6.3 2.8c0 .1 0 .1 0 44.2c0 1.8 .1 3.2-0.8 4.3c-2.4 3-7 1.3-6.9-2.7c0-0.6 0-0.6 0-44.6Zm19.2 0c0-0.9-0.2-2.7 1.4-4c2.1-1.8 6-0.9 6.3 2.8c0 .1 0 .1 0 44.2c0 1.8 .1 3.2-0.8 4.3c-2.4 3-7 1.3-6.9-2.7c0-0.6 0-0.6 0-44.6Zm-2.8-51c-0.6 0-3.2-0.3-4.4 2.1c-0.6 1.1-0.4 2.1-0.5 5c0 .6 .2 .6 .9 .6c20.7 0 20.7 0 21.6 0c.7 0 .5-0.3 .5-1.1c0-3 .3-4.2-1.2-5.6c-1.3-1.1-2.4-1-5.1-1c-11 0-11 0-11.8 0Z" fill="#3d2d2d" stroke="#3d2d2d" stroke-width="2" transform="translate(16.4,16.4) scale(.25,.25) translate(-49.9,-61.1)"/></svg>            </div>
        </div>
      `;
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
    const produto = BANCO_PRODUTOS.find(
      (produto) => produto.nome === item.nome,
    );
    const precoOriginal = produto?.precoOriginal || item.preco;
    const precoDesconto = produto?.precoDesconto || item.precoDesconto || "";
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

    mensagem += `- ${item.quantidade}x ${item.nome} (R$ ${subtotal.toFixed(2).replace(".", ",")})\n`;
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

      const nomeElemento = document.querySelector("h1");
      const nome = nomeElemento
        ? nomeElemento.innerText.trim()
        : "Produto Artesanal";

      const produto = BANCO_PRODUTOS.find((produto) => produto.nome === nome);
      const precoElemento = document.querySelector(".preco");
      const preco =
        produto?.precoOriginal ||
        (precoElemento ? precoElemento.innerText.trim() : "R$ 0,00");
      const precoDesconto = produto?.precoDesconto || "";

      const qtyElemento = document.getElementById("qtyValue");
      const quantidade = qtyElemento ? parseInt(qtyElemento.innerText) || 1 : 1;

      const imgElemento = document.querySelector(
        ".main-image, .produto-img, img",
      );
      const imagem = imgElemento
        ? imgElemento.getAttribute("src")
        : "produtos/thairo-1x1.svg";

      let carrinho = [{ nome, preco, precoDesconto, imagem, quantidade }];
      localStorage.setItem("carrinho", JSON.stringify(carrinho));

      window.location.href = "checkout.html";
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
    const produtoExiste = carrinho.some((item) => item.nome === nomeAtual);

    if (produtoExiste && nomeAtual !== "") {
      btnAdicionarCesta.innerText = "Adicionado à Cesta";
      btnAdicionarCesta.style.backgroundColor = "#3d2d2d";
      btnAdicionarCesta.style.color = "#e0d4b9";
      btnAdicionarCesta.style.borderColor = "#3d2d2d";
    }

    btnAdicionarCesta.addEventListener("click", () => {
      const nome = nomeAtual || "Produto Artesanal";

      const produto = BANCO_PRODUTOS.find((produto) => produto.nome === nome);
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
        ".main-image, .produto-img, img",
      );
      const imagem = imgElemento
        ? imgElemento.getAttribute("src")
        : "produtos/thairo-1x1.svg";

      let carrinhoAtualizado =
        JSON.parse(localStorage.getItem("carrinho")) || [];

      const indexExistente = carrinhoAtualizado.findIndex(
        (item) => item.nome === nome,
      );

      if (indexExistente >= 0) {
        carrinhoAtualizado[indexExistente].quantidade = quantidadeSelecionada;
        carrinhoAtualizado[indexExistente].preco = preco;
        carrinhoAtualizado[indexExistente].precoDesconto = precoDesconto;
      } else {
        carrinhoAtualizado.push({
          nome,
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
      btnAdicionarCesta.style.color = "#e0d4b9";
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
