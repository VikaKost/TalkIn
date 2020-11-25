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

function createList(title, list) {
  let listA = document.body;
  listA.innerHTML += `<h2>${title}</h2>`;

  listA.innerHTML += list.map(item => {
    let str = `<li>${item.value}</li>`;
    if(item.children !== null) {
      str += filling(item.children);
    }
    return str;
  }).join('');

}

function filling (childList) {
  return childList.map(item => {
    let str = `<ul style="font-size: 90%">`;
    str += `<li>${item.value}</li>`;
    if(item.children !== null) {
      str += filling(item.children);
    }
    str += `</ul>`;
    return str;
  }).join('');
}


createList("Заголовок",arr);