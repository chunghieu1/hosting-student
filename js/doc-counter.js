function updateDocumentCount() {
  const docItems = document.querySelectorAll(".doc-item");
  const count = docItems.length;
  const docCountEl = document.querySelector(".doc-count");

  if (docCountEl && count > 0) {
    docCountEl.innerHTML = `${count} tài liệu <i class="fa fa-arrow-right"></i>`;
  }
}

function toggleDocCategory(el) {
  const items = el.nextElementSibling;
  const folderIcon = el.querySelector(".doc-folder-icon");

  if (items && folderIcon) {
    if (items.classList.contains("expanded")) {
      items.classList.remove("expanded");
      el.classList.remove("expanded");
      items.style.maxHeight = "0px";
      folderIcon.classList.remove("fa-folder-open");
      folderIcon.classList.add("fa-folder");
    } else {
      items.classList.add("expanded");
      el.classList.add("expanded");
      items.style.maxHeight = `${items.scrollHeight}px`;
      folderIcon.classList.remove("fa-folder");
      folderIcon.classList.add("fa-folder-open");
    }
  }
}

document.addEventListener("DOMContentLoaded", updateDocumentCount);
