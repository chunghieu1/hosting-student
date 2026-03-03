function initSpecToggle() {
  document.querySelectorAll(".specs").forEach(function (container) {
    const specs = Array.from(container.children);
    if (specs.length > 5) {
      // hide extras initially
      specs.slice(5).forEach((el) => (el.style.display = "none"));
      const toggle = document.createElement("a");
      toggle.href = "javascript:void(0)";
      toggle.className = "toggle-specs";
      toggle.innerHTML =
        "Xem thêm thông số <i class='fa fa-chevron-down spec-toggle-icon'></i>";
      toggle.setAttribute("data-expanded", "false");
      toggle.addEventListener("click", function () {
        const expanded = toggle.getAttribute("data-expanded") === "true";
        if (expanded) {
          // currently expanded, collapse extras
          specs.slice(5).forEach((el) => (el.style.display = "none"));
          toggle.innerHTML =
            "Xem thêm thông số <i class='fa fa-chevron-down spec-toggle-icon'></i>";
          toggle.setAttribute("data-expanded", "false");
        } else {
          // currently collapsed, show extras
          specs.slice(5).forEach((el) => (el.style.display = "block"));
          toggle.innerHTML =
            "Ẩn đi <i class='fa fa-chevron-up spec-toggle-icon'></i>";
          toggle.setAttribute("data-expanded", "true");
        }
      });
      container.appendChild(toggle);
    }
  });
}

document.addEventListener("DOMContentLoaded", initSpecToggle);
