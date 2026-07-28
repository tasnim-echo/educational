class InfoGridAccordion {
  constructor() {
    this.init();
  }

  init() {
    const accordions = document.querySelectorAll(".info-grid__accordion");

    accordions.forEach((accordion) => {
      const button = accordion.querySelector(".accordion__header");
      const content = accordion.querySelector(".accordion__content");

      if (accordion.classList.contains("is-open")) {
        content.style.maxHeight = content.scrollHeight + "px";
      }

      button.addEventListener("click", () => {
        const isOpen = accordion.classList.contains("is-open");

        // Close all accordions
        accordions.forEach((item) => {
          item.classList.remove("is-open");
          item.querySelector(".accordion__content").style.maxHeight = null;
        });

        // Open clicked accordion
        if (!isOpen) {
          accordion.classList.add("is-open");
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    });
  }
}

new InfoGridAccordion();
