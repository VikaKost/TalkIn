let arr = [
  {
    value: 'Пункт 1.',
    children: null,
  },
  {
    value: 'Пункт 2.',
    children: [
      {
        value: 'Подпункт 2.1.',
        children: null,
      },
      {
        value: 'Подпункт 2.2.',
        children: [
          {
            value: 'Подпункт 2.2.1.',
            children: null,
          },
          {
            value: 'Подпункт 2.2.2.',
            children: null,
          }
        ],
      },
      {
        value: 'Подпункт 2.3.',
        children: null,
      }
    ]
  },
  {
    value: 'Пункт 3.',
    children: null,
  }
];

function createList(title, items) {
  let mainList = document.getElementById("list");
  let titleMain = `<h2>${title}</h2>`;
  mainList.insertAdjacentHTML("beforeBegin", titleMain);

  mainList.innerHTML = items.map(item => {
    let htmlStr = `<li>${item.value}`;
    let id = 0;
    if(item.children !== null) {
      id ++;
      htmlStr += Filling(item.children, id);
    }
    htmlStr += `</li>`;
    return htmlStr;
  }).join('');

}

function Filling (mainList, id) {
  let htmlStr = `<ul id="${id}" style="font-size: 90%">`;
  mainList.map(item => {
    htmlStr += `<li>${item.value}`;
    if(item.children !== null) {
      htmlStr += Filling(item.children);
    }
    htmlStr += `</li>`;
    return htmlStr;
  });
  htmlStr += `</ul>`;
  return htmlStr;
}

function HideChildren(event) {
  if (event.target.children[0]) {
    const childId = event.target.children[0].id;
    if (document.getElementById(childId).style.display === 'none') {
      document.getElementById(childId).style.display = 'block';
    }
    else {
      document.getElementById(childId).style.display = 'none';
    }
  }
}

createList("Заголовок",arr);
const Hide = document.getElementById('list');
 Hide.addEventListener('click', (event) => {
  HideChildren(event);
 });