function updateDocumentCount() {
  const docItems = document.querySelectorAll(".doc-item");
  const count = docItems.length;
  const docCountEl = document.querySelector(".doc-count");

  if (docCountEl && count > 0) {
    const countText = docCountEl.querySelector("span") || docCountEl;
    countText.textContent = count + " tài liệu ";
  }
}

function toggleDocCategory(el) {
  const items = el.nextElementSibling;
  const folderIcon = el.querySelector(".doc-folder-icon");

  if (items && folderIcon) {
    if (items.style.display === "none") {
      items.style.display = "block";
      folderIcon.classList.remove("fa-folder");
      folderIcon.classList.add("fa-folder-open");
    } else {
      items.style.display = "none";
      folderIcon.classList.remove("fa-folder-open");
      folderIcon.classList.add("fa-folder");
    }
  }
}

document.addEventListener("DOMContentLoaded", updateDocumentCount);
