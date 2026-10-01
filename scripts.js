// ==========================================
// 1. INJETA O GLOBAL (Header, Menu e Busca)
// ==========================================
fetch("global.html")
  .then((response) => response.text())
  .then((data) => {
    document.getElementById("cabecalho-container").innerHTML = data;

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
