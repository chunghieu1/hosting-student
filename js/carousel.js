const partners = [
  {
    name: "ĐH Bách Khoa Hà Nội",
    logo: "/assets/images/logo_zhost.webp",
    url: "#",
  },
  {
    name: "ĐH Quốc Gia Hà Nội",
    logo: "/assets/images/hosting-icon.webp",
    url: "#",
  },
  {
    name: "ĐH Kinh tế TP.HCM",
    logo: "/assets/images/logo_zhost.webp",
    url: "#",
  },
  {
    name: "ĐH FPT",
    logo: "/assets/images/hosting-icon.webp",
    url: "#",
  },
  {
    name: "ĐH Cần Thơ",
    logo: "/assets/images/logo_zhost.webp",
    url: "#",
  },
  {
    name: "ĐH Đà Nẵng",
    logo: "/assets/images/hosting-icon.webp",
    url: "#",
  },
];

function initPartnersCarousel(items, autoplayDelay = 2500) {
  const container = document.querySelector(".carousel-container");
  const prevBtn = document.querySelector(".carousel-prev");
  const nextBtn = document.querySelector(".carousel-next");

  if (!container || !prevBtn || !nextBtn || !items.length) {
    return;
  }

  const track = document.createElement("div");
  track.className = "carousel-track";
  container.innerHTML = "";
  container.appendChild(track);

  const renderedItems = items.map((partner) => {
    const item = document.createElement("div");
    item.className = "carousel-item";
    item.innerHTML = `
      <a href="${partner.url}" aria-label="${partner.name}">
        <img src="${partner.logo}" alt="${partner.name}" loading="lazy" />
        <p class="partner-name">${partner.name}</p>
      </a>
    `;
    track.appendChild(item);
    return item;
  });

  let currentIndex = 0;
  let autoplayId;

  const getItemStep = () => {
    const sample = renderedItems[0];
    const itemWidth = sample.getBoundingClientRect().width;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap || 0);
    return itemWidth + gap;
  };

  const getVisibleCount = () => {
    const step = getItemStep();
    if (!step) {
      return 1;
    }
    return Math.max(1, Math.floor(container.clientWidth / step));
  };

  const render = () => {
    const step = getItemStep();
    track.style.transform = `translateX(-${currentIndex * step}px)`;
  };

  const goNext = () => {
    const maxIndex = Math.max(0, items.length - getVisibleCount());
    currentIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1;
    render();
  };

  const goPrev = () => {
    const maxIndex = Math.max(0, items.length - getVisibleCount());
    currentIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1;
    render();
  };

  const stopAutoplay = () => {
    if (autoplayId) {
      clearInterval(autoplayId);
    }
  };

  const startAutoplay = () => {
    stopAutoplay();
    autoplayId = setInterval(goNext, autoplayDelay);
  };

  nextBtn.addEventListener("click", () => {
    goNext();
    startAutoplay();
  });

  prevBtn.addEventListener("click", () => {
    goPrev();
    startAutoplay();
  });

  container.addEventListener("mouseenter", stopAutoplay);
  container.addEventListener("mouseleave", startAutoplay);

  window.addEventListener("resize", render);

  render();
  startAutoplay();
}

document.addEventListener("DOMContentLoaded", () => {
  initPartnersCarousel(partners);
});
