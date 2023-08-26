const MAXROTINSTANCES = 12;

const initPage = async () => {
  for (let i = 0; i < MAXROTINSTANCES; i++) {
    const Computer = document.getElementById("ComputerComponent-" + i);
    getComponent("computer", Computer);
    const ArchLogo = document.getElementById("ArchLogoComponent-" + i);
    getComponent("archlogo", ArchLogo);
    const Neovim = document.getElementById("NeovimComponent-" + i);
    getComponent("neovim", Neovim);
  }
}

console.log("Start");
window.onload = initPage;





const getComponent = async(componentName, componentPlace) => {
  if (!componentPlace) return;
  let component = await fetch(`./data/${componentName}/${componentName}.html`);
  let cmp = await component.text();
  componentPlace.innerHTML += cmp;

  return cmp;
}




// jQuery ??