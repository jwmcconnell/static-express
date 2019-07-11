const main = document.getElementById('root');

const search = new URLSearchParams(window.location.search);
const color = search.get('color');

fetch(`/api/v1/colors/${color}`)
  .then(res => res.json())
  .then(color => {
    const colorName = document.createElement('h2');
    const colorHex = document.createElement('h2');
    const colorRGB = document.createElement('h2');

    colorName.textContent = `Name: ${color.name}`;
    colorHex.textContent = `Hex: ${color.hex}`;
    colorRGB.textContent = `R: ${color.r}, G: ${color.g}, B: ${color.b}`;

    main.style.color = color.name;

    main.appendChild(colorName);
    main.appendChild(colorHex);
    main.appendChild(colorRGB);
  });
