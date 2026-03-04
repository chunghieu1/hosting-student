function initSpecToggle() {
  document.querySelectorAll(".specs").forEach(function (container) {
    const specs = Array.from(container.children);
    if (specs.length <= 5) {
      return;
    }

    const extraWrapper = document.createElement("div");
    extraWrapper.className = "spec-extra-group";

    specs.slice(5).forEach((el) => extraWrapper.appendChild(el));
    container.appendChild(extraWrapper);

    const toggle = document.createElement("a");
    toggle.href = "javascript:void(0)";
    toggle.className = "toggle-specs";
    toggle.innerHTML =
      "Xem thêm thông số <i class='fa fa-chevron-down spec-toggle-icon'></i>";
    toggle.setAttribute("data-expanded", "false");

    toggle.addEventListener("click", function () {
      const expanded = toggle.getAttribute("data-expanded") === "true";

      if (expanded) {
        extraWrapper.classList.remove("expanded");
        toggle.innerHTML =
          "Xem thêm thông số <i class='fa fa-chevron-down spec-toggle-icon'></i>";
        toggle.setAttribute("data-expanded", "false");
      } else {
        extraWrapper.classList.add("expanded");
        toggle.innerHTML = "Ẩn đi <i class='fa fa-chevron-up spec-toggle-icon'></i>";
        toggle.setAttribute("data-expanded", "true");
      }
    });

    container.appendChild(toggle);
  });
}

document.addEventListener("DOMContentLoaded", initSpecToggle);
