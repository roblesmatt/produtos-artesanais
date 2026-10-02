// ==========================================
// 1. INJETA O GLOBAL (Header, Menu e Busca)
// ==========================================
fetch("global.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("cabecalho-container").innerHTML = data;

    // >>> CHAMAMOS AQUI PARA GARANTIR QUE O BADGE JÁ EXISTE NO ECRÃ <<<
    if (typeof atualizarContadorCarrinho === "function") {
      atualizarContadorCarrinho();
    }

    // Lógica do Menu Hambúrguer (Mobile) - Injetado dinamicamente
    const menuToggle = document.getElementById("menuToggle");
    const navMenu = document.getElementById("navMenu");
    const menuFechar = document.getElementById("menuFechar");

    if (menuToggle && navMenu) {
      menuToggle.addEventListener("click", () =>
        navMenu.classList.add("ativo"),
      );
    }
    if (menuFechar && navMenu) {
      menuFechar.addEventListener("click", () =>
        navMenu.classList.remove("ativo"),
      );
    }

    // Lógica da Busca
    const searchInput = document.getElementById("searchInput");
    const searchModal = document.getElementById("searchModal");
    const closeSearchModal = document.getElementById("closeSearchModal");
    const searchResultsList = document.getElementById("searchResultsList");
    // ... (o resto do código continua igualzinho abaixo)

    const produtosDisponiveis = [
      {
        nome: "Perfume Artesanal de Capim Limão",
        preco: "R$ 79,90",
        imagem: "produtos/thairo-1x1.svg",
        link: "perfume-artesanal-capim-limao.html",
      },
      {
        nome: "Sabonete Artesanal de Fubá",
        preco: "R$ 25,00",
        imagem: "produtos/thairo-1x1.svg",
        link: "sabonete-artesanal-fuba.html",
      },
      {
        nome: "Esfoliante Corporal de Mel",
        preco: "R$ 45,00",
        imagem: "produtos/thairo-1x1.svg",
        link: "esfoliante-corporal-mel.html",
      },
      {
        nome: "Perfume Artesanal de Lavanda Provence",
        preco: "R$ 89,90",
        imagem: "produtos/thairo-1x1.svg",
        link: "perfume-artesanal-lavanda-provence.html",
      },
    ];

    if (searchInput && searchModal) {
      searchInput.addEventListener("input", (e) => {
        const termo = e.target.value.toLowerCase().trim();

        if (termo.length > 0) {
          searchModal.style.display = "flex";
          searchResultsList.innerHTML = "";

          let encontrados = 0;

          produtosDisponiveis.forEach((produto) => {
            if (produto.nome.toLowerCase().includes(termo)) {
              encontrados++;
              const item = document.createElement("a");
              item.href = produto.link;
              item.className = "search-result-card";
              item.innerHTML = `
                <img src="${produto.imagem}" alt="" style="width: 50px; height: 50px; object-fit: cover; border-radius: 4px;">
                <div>
                  <h4 style="margin: 0 0 4px 0; font-size: 14px; color: #333;">${produto.nome}</h4>
                  <span style="font-size: 13px; font-weight: bold; color: #111;">${produto.preco}</span>
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
        searchInput.value = "";
      });
    }

    window.addEventListener("click", (e) => {
      if (e.target === searchModal) {
        searchModal.style.display = "none";
      }
    });
  });

// ==========================================
// 2. SEGURANÇA E PREVENÇÕES GLOBAIS
// ==========================================
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("mousedown", () => {
  if (window.getSelection) window.getSelection().removeAllRanges();
});

// ==========================================
// 3. LÓGICA DO CARROSSEL (Isolada e Segura)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
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
  let carouselIndex = 0; // Nome único para evitar conflitos
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
// 4. VÍDEOS, CARRINHO E OUTRAS FUNCIONALIDADES
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  // Carrinho
  const cartBtn = document.getElementById("cartBtn");
  const cartModal = document.getElementById("cartModal");
  const closeCartModal = document.getElementById("closeCartModal");

  if (cartBtn && cartModal) {
    cartBtn.addEventListener("click", () => {
      cartModal.style.display = "flex";
    });
    if (closeCartModal) {
      closeCartModal.addEventListener("click", () => {
        cartModal.style.display = "none";
      });
    }
  }

  // Tema Claro/Escuro
  const themeToggleBtn = document.getElementById("theme-toggle");
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

  // Vídeos Visibilidade
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

  // Seletor de Quantidade e Galeria de Produtos (Páginas de Detalhe)
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
        thumbIndex = (thumbIndex + 1) % thumbs.length;
        updateMainImage(thumbIndex);
      });
    }
  }

  // Acordeão
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
// 5. FUNÇÕES GLOBAIS (WhatsApp, etc.)
// ==========================================
function enviarPedidoWhatsApp() {
  const numeroWhatsApp = "551199624974";
  const itensCarrinho = document.querySelectorAll(".item-carrinho");

  if (itensCarrinho.length === 0) {
    alert("O seu carrinho está vazio!");
    return;
  }

  let mensagem = "Olá! Gostaria de fazer o seguinte pedido:\n\n*Produtos:* \n";
  let totalGeral = 0;

  itensCarrinho.forEach((item) => {
    const nome = item.querySelector(".nome-produto").innerText;
    const quantidade = item.querySelector(".qtd-produto").value;
    const precoUnitario = parseFloat(
      item
        .querySelector(".preco-produto")
        .innerText.replace("R$", "")
        .replace(",", ".")
        .trim(),
    );

    const subtotal = precoUnitario * quantidade;
    totalGeral += subtotal;

    mensagem += `- ${quantidade}x ${nome} (R$ ${subtotal.toFixed(2)})\n`;
  });

  mensagem += `\n*Total do Pedido: R$ ${totalGeral.toFixed(2)}*`;
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  window.open(urlWhatsApp, "_blank");
}



// ==========================================
// 5. LÓGICA DE PERSISTÊNCIA DA CESTA (LocalStorage)
// ==========================================

// A. Adicionar Produto à Cesta (Página do Produto - ex: Capim Limão)
document.addEventListener("DOMContentLoaded", () => {
  const btnAdicionarCesta = document.getElementById("cartBtn");

  if (btnAdicionarCesta) {
    btnAdicionarCesta.addEventListener("click", () => {
      const nomeElemento = document.querySelector("h1");
      const nome = nomeElemento ? nomeElemento.innerText : "Produto Artesanal";

      const precoElemento = document.querySelector(".preco");
      const preco = precoElemento ? precoElemento.innerText : "R$ 0,00";

      const qtyElemento = document.getElementById("qtyValue");
      const quantidade = qtyElemento ? parseInt(qtyElemento.innerText) || 1 : 1;

      const imgElemento = document.querySelector("img");
      const imagem = imgElemento ? imgElemento.getAttribute("src") : "produtos/thairo-1x1.svg";

      let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];

      const indexExistente = carrinho.findIndex((item) => item.nome === nome);
      if (indexExistente >= 0) {
        carrinho[indexExistente].quantidade += quantidade;
      } else {
        carrinho.push({ nome, preco, imagem, quantidade });
      }

      localStorage.setItem("carrinho", JSON.stringify(carrinho));
    });
  }
});

// B. Renderizar Produtos na Página "cesta.html" com Layout Moderno
document.addEventListener("DOMContentLoaded", () => {
  const cartItemsList = document.getElementById("cartItemsList");
  const cartTotal = document.getElementById("cartTotal");

  if (cartItemsList) {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    cartItemsList.innerHTML = "";
    let totalGeral = 0;

    if (carrinho.length === 0) {
      cartItemsList.innerHTML = "<p style='text-align: center; padding: 20px; color: #666;'>A sua cesta está vazia.</p>";
      if (cartTotal) cartTotal.innerText = "R$ 0,00";
      return;
    }

    carrinho.forEach((item, index) => {
      let valorNumerico = parseFloat(
        item.preco.replace("R$", "").replace(".", "").replace(",", ".").trim()
      );
      let subtotal = valorNumerico * item.quantidade;
      totalGeral += subtotal;

      const divItem = document.createElement("div");
      divItem.classList.add("cart-item-card");

      divItem.innerHTML = `
        <img src="${item.imagem || 'produtos/thairo-1x1.svg'}" alt="${item.nome}" class="cart-item-img">
        
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
// 6. FUNÇÕES GLOBAIS DE CONTROLO DO CARRINHO
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
// 7. ENVIO DE PEDIDO VIA WHATSAPP
// ==========================================
function enviarPedidoWhatsApp() {
  const numeroWhatsApp = "551199624974";
  const itensCarrinho = document.querySelectorAll(".item-carrinho");

  if (itensCarrinho.length === 0) {
    alert("O seu carrinho está vazio!");
    return;
  }

  let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
  let mensagem = "Olá! Gostaria de fazer o seguinte pedido:\n\n*Produtos:* \n";
  let totalGeral = 0;

  carrinho.forEach((item) => {
    let valorNumerico = parseFloat(
      item.preco.replace("R$", "").replace(".", "").replace(",", ".").trim()
    );
    const subtotal = valorNumerico * item.quantidade;
    totalGeral += subtotal;

    mensagem += `- ${item.quantidade}x ${item.nome} (R$ ${subtotal.toFixed(2).replace(".", ",")})\n`;
  });

  mensagem += `\n*Total do Pedido: R$ ${totalGeral.toFixed(2).replace(".", ",")}*`;
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
  window.open(urlWhatsApp, "_blank");
}



// ==========================================
// COMPRAR AGORA (Direto para o Checkout)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const btnComprarAgora = document.getElementById("btnComprarAgora");

  if (btnComprarAgora) {
    btnComprarAgora.addEventListener("click", (e) => {
      e.preventDefault();

      // 1. Recolhe os dados da página atual do produto
      const nomeElemento = document.querySelector("h1");
      const nome = nomeElemento ? nomeElemento.innerText.trim() : "Produto Artesanal";

      const precoElemento = document.querySelector(".preco");
      const preco = precoElemento ? precoElemento.innerText.trim() : "R$ 0,00";

      const qtyElemento = document.getElementById("qtyValue");
      const quantidade = qtyElemento ? parseInt(qtyElemento.innerText) || 1 : 1;

      const imgElemento = document.querySelector(".main-image, .produto-img, img");
      const imagem = imgElemento ? imgElemento.getAttribute("src") : "produtos/thairo-1x1.svg";

      // 2. Cria ou atualiza o carrinho apenas com este produto (ou adiciona a ele)
      let carrinho = [{ nome, preco, imagem, quantidade }];
      localStorage.setItem("carrinho", JSON.stringify(carrinho));

      // 3. Redireciona para o checkout
      window.location.href = "checkout.html";
    });
  }
});




// ==========================================
// ADICIONAR À CESTA (CORRIGIDO PARA NÃO DUPLICAR)
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  const btnAdicionarCesta = document.getElementById("cartBtn");

  if (btnAdicionarCesta) {
    const nomeElemento = document.querySelector("h1");
    const nomeAtual = nomeElemento ? nomeElemento.innerText.trim() : "";

    // 1. Verifica ao carregar a página se o produto já está no carrinho
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    const produtoExiste = carrinho.some(item => item.nome === nomeAtual);

    if (produtoExiste && nomeAtual !== "") {
      btnAdicionarCesta.innerText = "ADICIONADO À CESTA";
      btnAdicionarCesta.style.backgroundColor = "#3d2d2d";
      btnAdicionarCesta.style.color = "#ffffff";
      btnAdicionarCesta.style.borderColor = "#3d2d2d";
    }

    // 2. Ação ao clicar no botão
    btnAdicionarCesta.addEventListener("click", () => {
      const nome = nomeAtual || "Produto Artesanal";

      const precoElemento = document.querySelector(".preco");
      const preco = precoElemento ? precoElemento.innerText.trim() : "R$ 0,00";

      const qtyElemento = document.getElementById("qtyValue");
      const quantidadeSelecionada = qtyElemento ? parseInt(qtyElemento.innerText) || 1 : 1;

      const imgElemento = document.querySelector(".main-image, .produto-img, img");
      const imagem = imgElemento ? imgElemento.getAttribute("src") : "produtos/thairo-1x1.svg";

      let carrinhoAtualizado = JSON.parse(localStorage.getItem("carrinho")) || [];

      const indexExistente = carrinhoAtualizado.findIndex((item) => item.nome === nome);
      
      if (indexExistente >= 0) {
        // Em vez de somar, define exatamente a quantidade que está selecionada no ecrã no momento do clique
        carrinhoAtualizado[indexExistente].quantidade = quantidadeSelecionada;
      } else {
        carrinhoAtualizado.push({ nome, preco, imagem, quantidade: quantidadeSelecionada });
      }

      localStorage.setItem("carrinho", JSON.stringify(carrinhoAtualizado));
      if (typeof atualizarContadorCarrinho === "function") {
        atualizarContadorCarrinho();
      }

      // --- MUDANÇA VISUAL PERMANENTE AO CLICAR ---
      btnAdicionarCesta.innerText = "ADICIONADO À CESTA";
      btnAdicionarCesta.style.backgroundColor = "#3d2d2d";
      btnAdicionarCesta.style.color = "#e0d4b9";
      btnAdicionarCesta.style.borderColor = "#3d2d2d";
      btnAdicionarCesta.style.transition = "all 0.3s ease";
    });
  }
});

// ==========================================
// CONTADOR DINÂMICO DO CARRINHO (BADGE)
// ==========================================
function atualizarContadorCarrinho() {
    let carrinho = JSON.parse(localStorage.getItem("carrinho")) || [];
    let totalItens = carrinho.reduce((acc, item) => acc + (item.quantidade || 1), 0);
    
    let badge = document.getElementById("cart-count");
    if (badge) {
        badge.innerText = totalItens;
        
        if (totalItens > 0) {
            badge.style.setProperty("display", "inline-flex", "important");
            badge.style.setProperty("visibility", "visible", "important");
        } else {
            // Força ocultação total ignorando qualquer CSS externo
            badge.style.setProperty("display", "none", "important");
            badge.style.setProperty("visibility", "hidden", "important");
        }
    }
}

