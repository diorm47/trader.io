// faq sliders
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq_item");

  faqItems.forEach((item) => {
    const title = item.querySelector(".faq_item_title");
    const content = item.querySelector(".faq_item_content");
    const openIcon = item.querySelector(".faq_icon.open");
    const closeIcon = item.querySelector(".faq_icon.close");

    title.addEventListener("click", () => {
      const isOpen = content.style.display === "block";

      content.style.display = isOpen ? "none" : "block";
      openIcon.style.display = isOpen ? "block" : "none";
      closeIcon.style.display = isOpen ? "none" : "block";
    });
  });
});

// scroll navigation
document.addEventListener("DOMContentLoaded", () => {
  const scrollToBlock = (buttonId, blockId) => {
    const button = document.getElementById(buttonId);
    const block = document.getElementById(blockId);

    if (button && block) {
      button.addEventListener("click", () => {
        block.scrollIntoView({ behavior: "smooth" });
      });
    } else {
      console.error(`Element with ID ${buttonId} or ${blockId} not found.`);
    }
  };

  scrollToBlock("our-goal-btn", "our-goal");
  scrollToBlock("our-goal-btn-mob", "our-goal");
  scrollToBlock("about-us-btn", "about-us");
  scrollToBlock("about-us-btn-mob", "about-us");
  scrollToBlock("how-it-works-btn", "how-it-works");
  scrollToBlock("how-it-works-btn-mob", "how-it-works");
  scrollToBlock("tokenomics-btn", "tokenomics");
  scrollToBlock("tokenomics-btn-mob", "tokenomics");
  scrollToBlock("roadmap-btn", "roadmap");
  scrollToBlock("roadmap-btn-mob", "roadmap");
  scrollToBlock("community-support-btn", "community-support");
  scrollToBlock("community-support-btn-mob", "community-support");
});
