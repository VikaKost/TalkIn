let combsX = [
  [1, 2, 3, {result: 0}],
  [4, 5, 6, {result: 0}],
  [7, 8, 9, {result: 0}],
  [1, 4, 7, {result: 0}],
  [2, 5, 8, {result: 0}],
  [3, 6, 9, {result: 0}],
  [1, 5, 9, {result: 0}],
  [3, 5, 7, {result: 0}],
];
let combs0 = [
  [1, 2, 3, {result: 0}],
  [4, 5, 6, {result: 0}],
  [7, 8, 9, {result: 0}],
  [1, 4, 7, {result: 0}],
  [2, 5, 8, {result: 0}],
  [3, 6, 9, {result: 0}],
  [1, 5, 9, {result: 0}],
  [3, 5, 7, {result: 0}],
];
let box = document.getElementById('box');
let mes = document.getElementById('mes');
let hod = 1;
let flag = false;
window.onload = NewGame();

function Filling() {
  let fields = `<div class="cell" id="1"></div>`;
  for (let i = 2; i < 10; i++) {
    fields += `<div class="cell" id="${i}"></div>`;
  }
  box.innerHTML = fields;
}


  document.getElementById('box').onclick = function (event) {
    if (event.target.className === 'cell') {
        if(event.target.innerHTML === ""){
          event.target.innerHTML = 'x';
          Check('user', `${event.target.id}`);
          if(flag === true){
            return;
          }
          hod++;
          if (hod === 10){
            setTimeout(Message, 300, 'НИЧЬЯ');
            return;
          }
            setTimeout(AutoHod, 100);


        }

    }
  }

  function AutoHod() {

    let number = Math.random() * (9 - 1) + 1;
    number = Math.floor(number);
    let block = document.getElementById(`${number}`);
    if (block.innerHTML === '') {
      block.innerHTML = '0';
      Check('bot', number);
      hod++;
      return true;
    } else {
      number = 0;
      AutoHod();
    }
  }



  function Check(player, id) {
  let arr;
  if (player === 'user'){
    arr = combsX;

  }
  else{
    arr = combs0;
  }
      arr.forEach(item => {
        if (item.includes(parseInt(id))) {
          item[3].result += 1;
        }
          if (item[3].result === 3){
            if( player === 'user'){
              flag = true;
              setTimeout(Message, 300, 'Вы выйграли!');
          }
            else{
              setTimeout(Message, 300, 'Вы проиграли!');
              flag = true;
            }
        }

      })
}

function Message(text){
  box.style.display = 'none';
  mes.style.display = 'flex';
  document.getElementById('text').innerHTML = text;
}

function NewGame(){
  combsX.forEach(item =>{
    item[3].result = 0;
  });
  combs0.forEach(item =>{
    item[3].result = 0;
  });
  box.style.display = 'block';
  mes.style.display = 'none';
  hod = 1;
  flag = false;
  Filling();
}

document.getElementById('newGame').onclick = NewGame;
