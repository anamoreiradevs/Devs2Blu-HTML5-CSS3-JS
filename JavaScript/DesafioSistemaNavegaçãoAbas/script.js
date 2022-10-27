const $ = document.querySelector.bind(document);

function tabNav() {
  const html = {
    links: [...$(".links").children],
    conteudo: [...$(".conteudo").children],
  };
  function hideTabs() {
    html.conteudo.forEach((section) => {
      section.style.display = "none";
    });
  }
  function showTabs(id) {
    const tabconteudo = $("#" + id);
    tabconteudo.style.display = "block";
  }
  function selectTab(event) {
    hideTabs();
    const target = event.currentTarget;
    showTabs(target.dataset.id);
  }
  function listenChange() {
    html.links.forEach((tab) => {
      tab.addEventListener("click", selectTab);
    });
  }
  function initTab() {
    hideTabs();
    listenChange();
  }
  return {
    initTab,
  };
}
window.addEventListener("load", () => {
  const tabnav = tabNav();
  tabnav.initTab();
});
