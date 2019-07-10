const main = document.getElementById('root');
const list = document.createElement('ul');

fetch('/api/v1/colors')
  .then(res => res.json())
  .then(colors => {
    colors.forEach(color => {
      const li = document.createElement('li');
      li.textContent = color.name;
      list.appendChild(li);
    });
  });

main.appendChild(list);
