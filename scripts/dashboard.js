document.querySelectorAll(".dashboard_tab_title").forEach((tab) => {
  tab.addEventListener("click", function () {
    document.querySelectorAll(".dashboard_tab_title").forEach((title) => {
      title.classList.remove("active_dashboard_tab_title");
    });

    this.classList.add("active_dashboard_tab_title");

    document.querySelectorAll(".dashboard_tab_content").forEach((content) => {
      content.classList.remove("active_dashboard_tab_content");
    });

    const activeTabId = this.getAttribute("data-tab");
    document.getElementById(activeTabId).classList.add("active_dashboard_tab_content");
  });
});

document
  .querySelector(".dashboard_tab_title.active_dashboard_tab_title")
  .click();
