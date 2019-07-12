const main = document.getElementById('root');
const list = document.createElement('ul');

fetch('/api/v1/colors')
  .then(res => res.json())
  .then(colors => {
    colors.forEach(color => {
      const link = document.createElement('a');
      const li = document.createElement('li');

      link.href = `./color.html?color=${color.name}`;
      li.textContent = color.name;

      link.appendChild(li);
      list.appendChild(link);
    });
  });

main.appendChild(list);
