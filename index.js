const MAXROTINSTANCES = 12;
var SCROLL = 0;
var lastTop = 0;

const initPage = async () => {
  for (let i = 0; i < MAXROTINSTANCES; i++) {
    const Computer = document.getElementById("ComputerComponent-" + i);
    getComponent("computer", Computer);
    const BigComputer = document.getElementById("BigComputerComponent-" + i);
    getComponent("bigcomputer", BigComputer);
    const ArchLogo = document.getElementById("ArchLogoComponent-" + i);
    getComponent("archlogo", ArchLogo);
    const Neovim = document.getElementById("NeovimComponent-" + i);
    getComponent("neovim", Neovim);
  }
}

const handleScroll = (e) => {
  SCROLL += 5 * (lastTop > e.target.scrollingElement.scrollTop ? 1 : -1);
  let scrollElements = document.getElementsByClassName("rotate-onscroll");
  for (let i = 0; i < scrollElements.length; i++) {
    scrollElements[i].style.transform = `rotate(${SCROLL}deg) scale(var(--big-scale-val))`;
  }
  lastTop = e.target.scrollingElement.scrollTop;
}

window.onload = initPage;
window.onscroll = handleScroll;





const getComponent = async(componentName, componentPlace) => {
  if (!componentPlace) return;
  let component = await fetch(`./data/${componentName}/${componentName}.html`);
  let cmp = await component.text();
  componentPlace.innerHTML += cmp;

  return cmp;
}




// jQuery ??