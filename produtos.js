// ==========================================
// BANCO DE DADOS DE PRODUTOS
// ==========================================

const BANCO_PRODUTOS = [
  {
    id: "perfume-capim-limao",
    nome: "Perfume Artesanal de Capim Limão",
    precoOriginal: "R$89,90",
    precoDesconto: "",
    subtitulo: "[1 un. / 60ml]",
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
      categoria: "mais-vendido"
    },
    acordeoes: {
      sobre: "Perfume artesanal formulado com extratos naturais de capim-limão.",
      composicao: "Álcool para perfume, óleo vegetal de amêndoa doce, óleo essencial de capim-limão, essência e corante verde.",
      modoUso: "Borrifar a 20cm da pele.",
      advertencias: "Manter fora do alcance de crianças.",
      fichaTecnica: "Volume: 50ml",
      pagamentos: "Pix, cartão e boleto.",
      frete: "Enviado para todo o Brasil.",
      trocas: "Até 7 dias após o recebimento."
    }
  },
  {
    id: "perfume-lavanda-provence",
    nome: "Perfume Artesanal de Lavanda Provence",
    precoOriginal: "R$79,90",
    precoDesconto: "R$69,90",
    subtitulo: "[1 un. / 60ml]",
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
      categoria: "mais-vendido"
    },
    acordeoes: {
      sobre: "Perfume artesanal formulado com extratos naturais de capim-limão.",
      composicao: "Álcool para perfume, óleo vegetal de amêndoa doce, óleo essencial de capim-limão, essência e corante verde.",
      modoUso: "Borrifar a 20cm da pele.",
      advertencias: "Manter fora do alcance de crianças.",
      fichaTecnica: "Volume: 50ml",
      pagamentos: "Pix, cartão e boleto.",
      frete: "Enviado para todo o Brasil.",
      trocas: "Até 7 dias após o recebimento."
    }
  },
  {
    id: "perfume-alecrim-rosmarino",
    nome: "Perfume Artesanal de Alecrim Rosmarino",
    precoOriginal: "R$79,90",
    precoDesconto: "R$69,90",
    subtitulo: "[1 un. / 60ml]",
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
      categoria: "mais-vendido"
    },
    acordeoes: {
      sobre: "Perfume artesanal formulado com extratos naturais de capim-limão.",
      composicao: "Álcool para perfume, óleo vegetal de amêndoa doce, óleo essencial de capim-limão, essência e corante verde.",
      modoUso: "Borrifar a 20cm da pele.",
      advertencias: "Manter fora do alcance de crianças.",
      fichaTecnica: "Volume: 50ml",
      pagamentos: "Pix, cartão e boleto.",
      frete: "Enviado para todo o Brasil.",
      trocas: "Até 7 dias após o recebimento."
    }
  }
];

// ==========================================
// RENDERIZAÇÃO AUTOMÁTICA DAS VITRINES E FILTROS
// ==========================================
function renderizarVitrinesAutomaticas() {
  if (typeof BANCO_PRODUTOS === 'undefined') return;

  BANCO_PRODUTOS.forEach(produto => {
    // Mapeamento das tags para os IDs das grelhas no HTML
    const destinos = [
      produto.tags.categoria,   // ex: "mais-vendido", "lancamentos", "promocao"
      produto.tags.linha,       // ex: "linhas-classico" -> precisamos tratar para "classico" ou usar o ID correto
      produto.tags.funcao,      // ex: "funcao-perfume-artesanal"
      produto.tags.ativo,       // ex: "ativos-capim-limao"
      produto.tags.cor          // ex: "cores-verde"
    ];

    destinos.forEach(tagCompleta => {
      if (!tagCompleta) return;
      
      // Limpa prefixes como "linhas-", "funcao-", "ativos-", "cores-" para bater certo com os IDs do HTML ("grid-classico", "grid-verde", etc.)
      const tagId = tagCompleta
        .replace("linhas-", "")
        .replace("funcao-", "")
        .replace("ativos-", "")
        .replace("cores-", "");

      const grid = document.getElementById(`grid-${tagId}`);
      if (!grid) return;

      // Criação do HTML do card
      let blocoPreco = `<span class="preco">${produto.precoOriginal}</span>`;
      if (produto.precoDesconto && produto.precoDesconto.trim() !== "") {
        blocoPreco = `<del style="font-size: 14px; color: #3d2d2d80; margin-right: 8px;">${produto.precoOriginal}</del><span class="preco" style="color: #3d2d2d;">${produto.precoDesconto}</span>`;
      }

      let seloEsgotadoHtml = "";
      let classeEsgotado = "";
      if (produto.esgotado) {
        classeEsgotado = "produto-esgotado";
        seloEsgotadoHtml = `
          <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%) rotate(-15deg); background-color: #3d2d2d; color: #e0d4b9; padding: 10px 20px; font-weight: bold; border: 2px solid #000; z-index: 10; font-size: 18px; pointer-events: none; box-shadow: 4px 4px 0px #000;">
            ESGOTADO
          </div>`;
      }

      const card = document.createElement("div");
      card.className = `produto-card ${classeEsgotado}`;
      card.style.cssText = "position: relative; display: block;";
      
      card.innerHTML = `
        ${seloEsgotadoHtml}
        <a href="${produto.linkPagina}" style="text-decoration: none; color: inherit; display: flex; flex-direction: column; align-items: center; justify-content: space-between; width: 100%; height: 100%; ${produto.esgotado ? 'pointer-events: none; opacity: 0.4;' : ''}">
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
// PREENCHIMENTO DA PÁGINA DE DETALHE DO PRODUTO
// ==========================================
function preencherPaginaProduto() {
  const params = new URLSearchParams(window.location.search);
  let idProduto = params.get("id");

  if (!idProduto) {
    const paginaAtual = window.location.pathname.split("/").pop();
    const produtoEncontrado = BANCO_PRODUTOS.find(p => p.linkPagina === paginaAtual);
    if (produtoEncontrado) {
      idProduto = produtoEncontrado.id;
    }
  }

  if (!idProduto) return;

  const produto = BANCO_PRODUTOS.find(p => p.id === idProduto);
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
          ${unidadeEl ? unidadeEl.outerHTML : ''}
        </div>
        <del style="font-family: 'Merrie', sans-serif; font-size: 16px; color: #3d2d2d50; display: block; line-height: 1; margin-top: 6px; text-decoration: line-through;">${produto.precoOriginal}</del>
      `;
      
      if (unidadeEl) unidadeEl.style.display = 'none';
    } else {
      precoEl.innerHTML = produto.precoOriginal;
    }
  }

  const subtituloEl = document.getElementById("subtituloProduto") || document.querySelector(".substitulo");
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
    preencherAcordeao("#conteudo-composicao", produto.acordeoes.composicao);
    preencherAcordeao("#conteudo-modo-uso", produto.acordeoes.modoUso);
    preencherAcordeao("#conteudo-advertencias", produto.acordeoes.advertencias);
    preencherAcordeao("#conteudo-ficha", produto.acordeoes.fichaTecnica);
    preencherAcordeao("#conteudo-pagamento", produto.acordeoes.pagamentos);
    preencherAcordeao("#conteudo-frete", produto.acordeoes.frete);
    preencherAcordeao("#conteudo-trocas", produto.acordeoes.trocas);
  }
}

// Inicialização correta e limpa ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  renderizarVitrinesAutomaticas();
  preencherPaginaProduto();
});