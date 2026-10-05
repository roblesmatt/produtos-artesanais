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
        "Frescor, limpeza e revigorante. Um estímulo natural de frescor e bem-estar.<br><br><strong>[Por conter matérias-primas naturais, a tonalidade do líquido pode apresentar variações entre os lotes</strong>].",
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
      categoria: "mais-vendido",
    },
    acordeoes: {
      sobre:
        "Relaxante, harmonioso e suave. A energia das ervas frescas para despertar o foco e a vitalidade.",
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
      categoria: "mais-vendido",
    },
    acordeoes: {
      sobre: "Tonificação, ativador e adstringente.",
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

            const precoExibido =
              produto.precoDesconto && produto.precoDesconto.trim() !== ""
                ? produto.precoDesconto
                : produto.precoOriginal;

            item.innerHTML = `
              <img src="${produto.imagemFrente}" alt="" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;">
              <div>
                <h4 style="margin: 0 0 4px 0; font-size: 14px; color: #333;">${produto.nome}</h4>
                <span style="font-size: 13px; font-weight: bold; color: #111;">${precoExibido}</span>
              </div>
            `;
            searchResultsList.appendChild(item);
          }
        });

        if (encontrados === 0) {
          searchResultsList.innerHTML =
            '<p style="color: #777; text-align: center; padding: 10px;">Nenhum produto encontrado</p>';
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
    const destinos = [
      produto.tags.categoria,
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

      // Procura de forma inteligente pela grid correspondente no HTML
      let grid =
        document.getElementById(`grid-${tagId}`) ||
        document.getElementById(`grid-${tagCompleta}`) ||
        document.getElementById(tagCompleta) ||
        document.getElementById(tagId);

      if (!grid) return;

      let blocoPreco = `<span class="preco">${produto.precoOriginal}</span>`;
      if (produto.precoDesconto && produto.precoDesconto.trim() !== "") {
        blocoPreco = `<del style="font-size: 14px; color: #3d2d2d80; margin-right: 8px;">${produto.precoOriginal}</del><span class="preco" style="color: #3d2d2d;">${produto.precoDesconto}</span>`;
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

      card.innerHTML = `
        ${seloEsgotadoHtml}
        <a href="${produto.linkPagina}" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center; justify-content: space-between; width: 100%; height: 100%; ${produto.esgotado ? "pointer-events: none; opacity: 0.4;" : ""}">
          <div style="width: 100%; display: flex; justify-content: center; align-items: center;">
            <img src="${produto.imagemFrente}" alt="${produto.nome}">
          </div>
          <div style="width: 100%;">
            <h4>${produto.nome}</h4>
            <div style="margin-top: 5px;">${blocoPreco}</div>
          </div>
        </a>
      `;

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
        <del style="font-family: 'Merrie', sans-serif; font-size: 16px; color: #9A8E7E; display: block; line-height: 1; margin-top: 6px; text-decoration: line-through;">${produto.precoOriginal}</del>
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
      let valorNumerico =
        parseFloat(
          item.preco
            .replace("R$", "")
            .replace(/\./g, "")
            .replace(",", ".")
            .trim(),
        ) || 0;
      let subtotal = valorNumerico * item.quantidade;
      totalGeral += subtotal;

      const divItem = document.createElement("div");
      divItem.classList.add("cart-item-card");

      divItem.innerHTML = `
        <img src="${item.imagem || "produtos/thairo-1x1.svg"}" alt="${item.nome}" class="cart-item-img">
        
        <div class="cart-item-details">
            <h4 class="cart-item-title">${item.nome}</h4>
            <span class="cart-item-price">${item.preco}</span>
        </div>

        <div class="cart-item-controls">
            <div class="qty-selector">
                <button onclick="alterarQtd(${index}, -1)">-</button>
                <span>${item.quantidade}</span>
                <button onclick="alterarQtd(${index}, 1)">+</button>
            </div>
            <button onclick="removerDaCesta(${index})" class="cart-item-delete">
                🗑️
            </button>
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
window.removerDaCesta = function (index) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho.splice(index, 1);
  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  location.reload();
};

window.alterarQtd = function (index, delta) {
  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  carrinho[index].quantidade += delta;

  if (carrinho[index].quantidade < 1) {
    carrinho[index].quantidade = 1;
  }

  localStorage.setItem("carrinho", JSON.stringify(carrinho));
  location.reload();
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
    let valorNumerico =
      parseFloat(
        item.preco
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

      const precoElemento = document.querySelector(".preco");
      const preco = precoElemento ? precoElemento.innerText.trim() : "R$ 0,00";

      const qtyElemento = document.getElementById("qtyValue");
      const quantidade = qtyElemento ? parseInt(qtyElemento.innerText) || 1 : 1;

      const imgElemento = document.querySelector(
        ".main-image, .produto-img, img",
      );
      const imagem = imgElemento
        ? imgElemento.getAttribute("src")
        : "produtos/thairo-1x1.svg";

      let carrinho = [{ nome, preco, imagem, quantidade }];
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

      const precoElemento = document.querySelector(".preco");
      const preco = precoElemento ? precoElemento.innerText.trim() : "R$ 0,00";

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
      } else {
        carrinhoAtualizado.push({
          nome,
          preco,
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
