const items = document.querySelectorAll(".item");

items.forEach(item => {
  const button = item.querySelector(".question");

  button.addEventListener("click", () => {
    const isActive = item.classList.contains("active");

    // tutup semua
    items.forEach(i => i.classList.remove("active"));

    // toggle
    if (!isActive) {
      item.classList.add("active");
    }
  });
});