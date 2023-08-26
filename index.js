const MAXCOMPUTERS = 12;

const initPage = async () => {
  for (let i = 0; i < MAXCOMPUTERS; i++) {
    const Computer = document.getElementById("ComputerComponent-" + i);
    getComponent("computer", Computer);
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