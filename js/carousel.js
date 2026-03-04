const partners = [
  {
    name: "ĐH Bách Khoa Hà Nội",
    logo: "/assets/logos/daihocbachkhoahanoi.webp",
  },
  {
    name: "ĐH Quốc Gia Hà Nội",
    logo: "/assets/logos/daihocquocgiahanoi.webp",
  },
  {
    logo: "/assets/logos/daihockinhtequocdan.webp",
  },
  {
    name: "ĐH Quốc Gia TP.HCM",
    logo: "/assets/logos/daihocquocgiatphcm.webp",
  },
  {
    name: "Học viện Chính trị Quốc gia Hồ Chí Minh",
    logo: "/assets/logos/hocvienchinhtriquocgiatphcm.webp",
  },
  {
    name: "ĐH Huế",
    logo: "/assets/logos/daihochue.webp",
  },
  {
    name: "ĐH Cần Thơ",
    logo: "/assets/logos/daihoccantho.webp",
  },
  {
    name: "Học viện Bưu chính Viễn thông",
    logo: "/assets/logos/hocvienbuuchinhvienthong.webp",
  },
  {
    name: "VinSchool",
    logo: "/assets/logos/vinschool.webp",
  },
  {
    name: "Vin University",
    logo: "/assets/logos/vinuni.webp",
  },
  {
    name: "EQUEST",
    logo: "/assets/logos/equest.webp",
  },
  {
    name: "ĐH Công Nghệ",
    logo: "/assets/logos/uet.webp",
  },
  {
    name: "ĐH Thương Mại",
    logo: "/assets/logos/tmu.webp",
  },
  {
    name: "ĐH FPT",
    logo: "/assets/logos/fpt.webp",
  },
  {
    name: "ĐH Y Hà Nội",
    logo: "/assets/logos/daihocyhanoi.webp",
  },
  {
    name: "ĐH Dược Hà Nội",
    logo: "/assets/logos/daihocduochanoi.webp",
  },
  {
    name: "ĐH Sư Phạm Hà Nội",
    logo: "/assets/logos/daihocsuphamhanoi.webp",
  },
  {
    name: "Học viện Ngoại Giao Việt Nam",
    logo: "/assets/logos/hocvienngoaigiaovietnam.webp",
  },
  {
    name: "ĐH Tôn Đức Thắng",
    logo: "/assets/logos/daihoctonducthang.webp",
  },
  {
    name: "ĐH Sài Gòn",
    logo: "/assets/logos/daihocsaigon.webp",
  },
  {
    name: "ĐH Xây Dựng",
    logo: "/assets/logos/daihocxaydung.webp",
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
        <img src="${partner.logo}" alt="${partner.name}" loading="lazy" />
    `;
    track.appendChild(item);
    return item;
  });

  let currentIndex = 0;
  let autoplayId;

  const getItemStep = () => {
    const sample = renderedItems[0];
    const itemWidth = sample.getBoundingClientRect().width;
    const gap = Number.parseFloat(
      getComputedStyle(track).columnGap || getComputedStyle(track).gap || 0,
    );
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
