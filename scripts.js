const menuHamburguer = document.querySelector(".menu-hamburguer");
const navMenu = document.querySelector(".nav-menu");
const menuFechar = document.querySelector("#menuFechar");
const linksMenu = document.querySelectorAll(".nav-menu a");

// 1. Clicar no hambúrguer abre o menu
menuHamburguer.addEventListener("click", () => {
  navMenu.classList.add("ativo");
});

// 2. Clicar no "X" fecha o menu
if (menuFechar) {
  menuFechar.addEventListener("click", () => {
    navMenu.classList.remove("ativo");
  });
}

// 3. (Opcional) Clicar em qualquer link do menu também fecha o menu automaticamente
linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("ativo");
  });
});

// BUSCA //
document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("searchInput");
  const searchModal = document.getElementById("searchModal");
  const closeSearchModal = document.getElementById("closeSearchModal");
  const searchResultsList = document.getElementById("searchResultsList");

  if (!searchInput || !searchModal) return;

  // Lista com todos os produtos da loja (o catálogo completo)
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
      imagem: "sua-imagem2.jpg",
      link: "#",
    },
    {
      nome: "Esfoliante Corporal de Mel",
      preco: "R$ 45,00",
      imagem: "sua-imagem3.jpg",
      link: "#",
    },
    {
      nome: "Perfume Artesanal de Lavanda Provence",
      preco: "R$ 89,90",
      imagem: "produtos/thairo-1x1.svg",
      link: "perfume-artesanal-lavanda-provence.html",
    },
  ];

  searchInput.addEventListener("input", (e) => {
    const termo = e.target.value.toLowerCase().trim();

    if (termo.length > 0) {
      searchModal.style.display = "flex";
      searchResultsList.innerHTML = "";

      let encontrados = 0;

      // Filtra os produtos que coincidem com a pesquisa
      produtosDisponiveis.forEach((produto) => {
        if (produto.nome.toLowerCase().includes(termo)) {
          encontrados++;

          const item = document.createElement("a");
          item.href = produto.link;
          item.className = "search-result-card";

          item.innerHTML = `
            <img src="${produto.imagem}" alt="" style="width: 50px; height: 50px; object-fit: cover; border-radius: 6px;">
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
          '<p style="color: #777; text-align: center; padding: 10px;">Nenhum produto encontrado.</p>';
      }
    } else {
      searchModal.style.display = "none";
    }
  });

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

// WHASTAPP //
function enviarPedidoWhatsApp() {
  // Substitua pelo seu número de WhatsApp com DDI e DDD (ex: 5511999999999)
  const numeroWhatsApp = "551199624974";

  // Exemplo de como recolher os dados do carrinho (ajuste conforme as classes do seu HTML)
  const itensCarrinho = document.querySelectorAll(".item-carrinho");

  if (itensCarrinho.length === 0) {
    alert("O seu carrinho está vazio!");
    return;
  }

  let mensagem = "Olá! Gostaria de fazer o seguinte pedido:\n\n*Produtos:* \n";
  let totalGeral = 0;

  itensCarrinho.forEach((item) => {
    const nome = item.querySelector(".nome-produto").innerText;
    const quantidade = item.querySelector(".qtd-produto").value; // ou .innerText dependendo se for input ou span
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

  // Codifica a mensagem para o formato de URL do WhatsApp
  const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

  // Abre o WhatsApp numa nova aba
  window.open(urlWhatsApp, "_blank");
}

// CARRINHO //
document.addEventListener("DOMContentLoaded", function () {
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
});

// Remoção botão lateral e download
document.addEventListener("contextmenu", (event) => event.preventDefault());
document.addEventListener("mousedown", () => {
  if (window.getSelection) window.getSelection().removeAllRanges();
});

// Botão de Ação Principal
function setupVideoVisibilityObserver() {
  const videos = document.querySelectorAll(".responsive-video");
  if (videos.length === 0) return;
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
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupVideoVisibilityObserver);
} else {
  setupVideoVisibilityObserver();
}

document.addEventListener("DOMContentLoaded", () => {
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
});

// Carrossel
const track = document.querySelector(".carousel-track");
const items = track.querySelectorAll(".carousel-item");
const thumb = document.querySelector(".carousel-progress-thumb");

track.addEventListener("scroll", () => {
  const maxScrollLeft = track.scrollWidth - track.clientWidth;
  if (maxScrollLeft <= 0) return;

  // Calcula a percentagem do scroll atual
  const scrollProgress = track.scrollLeft / maxScrollLeft;

  // Move o indicador proporcionalmente
  const maxTranslatePx = thumb.parentElement.clientWidth - thumb.offsetWidth;

  // 2. Multiplica o progresso pelo valor em pixels
  const translateValue = scrollProgress * maxTranslatePx;

  // 3. Aplica a translação utilizando 'px' em vez de '%'
  thumb.style.transform = `translateX(${translateValue}px)`;
});

let autoPlayTimer = null;
let hoverResumeTimer = null;
let isDown = false,
  startX,
  scrollLeft;
let isHovered = false;
let currentIndex = 0;
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
          currentIndex = index;
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
    currentIndex >= items.length - 1 || track.scrollLeft >= maxScroll - 10;

  if (isAtEnd) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  const cardStep = getCardStep();

  track.scrollTo({
    left: currentIndex * cardStep,
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

function setupVideoVisibilityObserver() {
  const videos = document.querySelectorAll(".phone-video, .responsive-video");

  if (videos.length === 0) return;

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
    {
      threshold: 0,
      rootMargin: "-49% 0px -49% 0px",
    },
  );

  videos.forEach((video) => videoObserver.observe(video));
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", setupVideoVisibilityObserver);
} else {
  setupVideoVisibilityObserver();
}

// Arcordeao
document.addEventListener("DOMContentLoaded", () => {
  // 1. Controle da Seletor de Quantidade
  const btnMinus = document.getElementById("btnMinus");
  const btnPlus = document.getElementById("btnPlus");
  const qtyValue = document.getElementById("qtyValue");

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

  // 2. Controle da Galeria de Imagens
  const thumbs = document.querySelectorAll(".thumb");
  const mainImage = document.getElementById("mainImage");
  const prevThumbBtn = document.getElementById("prevThumb");
  const nextThumbBtn = document.getElementById("nextThumb");

  let currentIndex = 0;

  function updateMainImage(index) {
    thumbs.forEach((thumb, i) => {
      if (i === index) {
        thumb.classList.add("active");
      } else {
        thumb.classList.remove("active");
      }
    });

    const newSrc = thumbs[index].querySelector("img").getAttribute("src");

    // Efeito suave de transição na troca de imagem
    mainImage.style.opacity = "0";
    setTimeout(() => {
      mainImage.setAttribute("src", newSrc);
      mainImage.style.opacity = "1";
    }, 150);
  }

  thumbs.forEach((thumb, index) => {
    thumb.addEventListener("click", () => {
      currentIndex = index;
      updateMainImage(currentIndex);
    });
  });

  if (prevThumbBtn) {
    prevThumbBtn.addEventListener("click", () => {
      currentIndex = (currentIndex - 1 + thumbs.length) % thumbs.length;
      updateMainImage(currentIndex);
    });
  }

  if (nextThumbBtn) {
    nextThumbBtn.addEventListener("click", () => {
      currentIndex = (currentIndex + 1) % thumbs.length;
      updateMainImage(currentIndex);
    });
  }

  // 3. Comportamento Estilo Sanfona/Acordeão Único (Opcional: Fecha os outros ao abrir um)
  const accordions = document.querySelectorAll(".accordion-item");

  accordions.forEach((acc) => {
    acc.addEventListener("toggle", () => {
      if (acc.open) {
        accordions.forEach((otherAcc) => {
          if (otherAcc !== acc) {
            otherAcc.removeAttribute("open");
          }
        });
      }
    });
  });
});
