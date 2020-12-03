

const messages = [
  {
    id: 'm1',
    text: 'Есть много вариантов Lorem Ipsum, но',
    createdAt: new Date('2020-10-12T23:17:36'),
    author: 'Dasha',
    isPersonal: false
  },
  {
    id: 'm2',
    text: 'Какие дела?',
    createdAt: new Date('2020-10-12T23:19:37'),
    author: 'Max',
    isPersonal: false
  },
  {
    id: 'm4',
    text: 'Если вам нужен Lorem Ipsum для серьёзного проекта',
    createdAt: new Date('2020-10-12T23:34:38'),
    author: 'Liza',
    isPersonal: false
  },
  {
    id: 'm3',
    text: 'Есть много вариантов Lorem Ipsum, но',
    createdAt: new Date('2020-10-12T23:21:36'),
    author: 'Dasha',
    isPersonal: false
  },
  {
    id: 'm10',
    text: 'Многие программы электронной вёрстки и редакторы HTML ',
    createdAt: new Date('2020-10-12T23:19:00'),
    author: 'Ivan',
    isPersonal: false
  },

  {
    id: 'm5',
    text: 'в классической латинской литературе',
    createdAt: new Date('2020-10-12T23:41:38'),
    author: 'Max',
    isPersonal: true,
    to: 'Alina'
  },
  {
    id: 'm6',
    text: 'Он использует словарь из более чем 200',
    createdAt: new Date('2020-10-12T23:56:39'),
    author: 'Liza',
    isPersonal: false
  },
  {
    id: 'm7',
    text: 'в классической латинской литературе',
    createdAt: new Date('2020-10-12T23:17:40'),
    author: 'Dasha',
    isPersonal: true,
    to: 'Liza'
  },
  {
    id: 'm8',
    text: ' Его корни уходят в один фрагмент',
    createdAt: new Date('2020-10-12T23:18:56'),
    author: 'Viktoria',
    isPersonal: false
  },
  {
    id: 'm9',
    text: 'Его популяризации в новое время',
    createdAt: new Date('2020-10-12T23:18:57'),
    author: 'Liza',
    isPersonal: false
  },
  {
    id: 'm11',
    text: 'Его популяризации в новое время',
    createdAt: new Date('2020-10-13T14:18:57'),
    author: 'Liza',
    isPersonal: false
  },
  {
    id: 'm12',
    text: 'что тот обеспечивает более или менее стандартное заполнение шаблона',
    createdAt: new Date('2020-10-13T15:08:40'),
    author: 'Alisa',
    isPersonal: true,
    to: 'Sasha'
  },
  {
    id: 'm13',
    text: 'это текст-"рыба", часто используемый в печать',
    createdAt: new Date('2020-10-13T15:08:43'),
    author: 'Sasha',
    isPersonal: true,
    to: 'Alisa'
  },
  {
    id: 'm14',
    text: 'За прошедшие годы текст Lorem Ipsum получил много версий',
    createdAt: new Date('2020-10-13T18:56:00'),
    author: 'Andrey',
    isPersonal: false
  },
  {
    id: 'm15',
    text: 'Также все другие известные генераторы',
    createdAt: new Date('2020-10-13T18:57:40'),
    author: 'Liza',
    isPersonal: false
  },
  {
    id: 'm16',
    text: ' Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet.."',
    createdAt: new Date('2020-10-16T06:18:40'),
    author: 'Liza',
    isPersonal: false
  },
  {
    id: 'm17',
    text: 'В то время некий безымянный печатник создал',
    createdAt: new Date('2020-10-16T09:35:43'),
    author: 'Liza',
    isPersonal: true,
    to: 'Viktoria'
  },
  {
    id: 'm18',
    text: 'Некоторые версии появились по ошибке',
    createdAt: new Date('2020-10-24T15:56:50'),
    author: 'Max',
    isPersonal: false
  },
  {
    id: 'm19',
    text: 'Если вам нужен Lorem Ipsum для серьёзного проекта',
    createdAt: new Date('2020-10-24T16:02:50'),
    author: 'Liza',
    isPersonal: false
  },
  {
    id: 'm20',
    text: 'Его популяризации в новое время послужили',
    createdAt: new Date('2020-10-24T19:41:43'),
    author: 'Liza',
    isPersonal: true,
    to: 'Vlad'
  },
  {
    id: 'm21',
    text: 'Классический текст Lorem Ipsum, используемый с XVI века',
    createdAt: new Date('2020-10-29T12:21:50'),
    author: 'Liza',
    isPersonal: false
  },
  {
    id: 'm22',
    text: 'он нашёл неоспоримый первоисточник',
    createdAt: new Date('2020-10-29T13:58:06'),
    author: 'Viktoria',
    isPersonal: false
  },
  {
    id: 'm23',
    text: 'Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML',
    createdAt: new Date('2020-11-01T17:07:06'),
    author: 'Alina',
    isPersonal: false
  },
  {
    id: 'm24',
    text: 'происходит от одной из строк в разделе',
    createdAt: new Date('2020-11-01T17:18:06'),
    author: 'Ivan',
    isPersonal: true,
    to : 'Viktoria'

  },
  {
    id: 'm25',
    text: 'За прошедшие годы',
    createdAt: new Date('2020-11-01T18:43:06'),
    author: 'Viktoria',
    isPersonal: false
  }
];

const users = ['Max', 'Alina', 'Vlad', 'Liza', 'Dasha', 'Катя', 'Nik', 'Вика', 'Sasha', 'Vlad', 'Olha'];
const activeUsers = ['Max', 'Alina', 'Vlad', 'Liza', 'Dasha', 'Катя', 'Sasha'];

class UserList{
 constructor(users, activeUsers){
   const userList = this.restoreUsers();
    this.users = userList;
    this.activeUsers = activeUsers;

  }
  addUser(user){
    this.saveUsers(user)
   users.push(user);
    messageList._user = user;
  }
  saveUsers(user){
    localStorage.setItem('user',user);
    localStorage.setItem('user_' + this.users.length+1,user);
  }

  restoreUsers(){
    let usersArray = [];
    let value;
    let j = 0;
    for(let i = 0; i<localStorage.length; i++){
      let tmp = localStorage.key(i);
      if (tmp.includes('user_')){
        value = localStorage.getItem(tmp);
       // value = JSON.parse(value);
        usersArray[j] = value;
        j++;
      }
    }
    console.log(usersArray);
    return usersArray;
  }

}
class HeaderView{
  constructor(containerId) {
    this.id = containerId;
  }

  display(userName){
    const idUser = document.getElementById(this.id);
    const inOut = document.getElementById('exit-text');
    if(userName){
      idUser.textContent = userName;
      inOut.textContent = 'Выйти';
    }
    else{
      idUser.textContent = 'user';
      inOut.textContent = 'Войти';
    }

}
}

class UsersSelect{
  constructor(containerId) {
    this.iduser = containerId
  }
  display(users){
    let select = document.getElementById(this.iduser);
    let usersList = '<option>Всем</option>'
    users.forEach(item =>{
      usersList += `<option>${item}</option>`
    })
    select.innerHTML = usersList;
  }
}

class MessagesView{
  constructor(containerId) {
    this.idmes = containerId
  }
  display(msg){
    let msgs = document.getElementById(this.idmes);
    let mesList = '<div id="msgs-list">';
    msg.forEach(item =>{
      let time = item.createdAt.getDay() + '.' + item.createdAt.getMonth()+ '.' +item.createdAt.getFullYear() +'/'+ item.createdAt.getHours()+':'+item.createdAt.getMinutes();
      let author = item.author;

      if (item.isPersonal && item.to === messageList.user){
          mesList += `<div class='mes private-mes' id= ${item.id}>
                      <img class='user-img' src='images/mn_icon.png'>`
      }
      else if(item.author === MessageList._user){
        mesList += `<div class='mes self-mes' id= ${item.id}> <div class="self-edit" >
       <div  class="toEdit"><span title="Изменить" class="iconify ed click" data-icon="emojione-monotone:pencil" data-inline="false"></span></div>
       <div class="toDelete"> <span  title="Удалить" class="iconify del ed click" data-icon="carbon:delete" data-inline="false"></span></div>
      </div>`
        author = 'Вы';
        if (item.to){
          mesList +=`
              <div class="nameTo">
              <span class="mes-name">to ${item.to}</span>
              </div>`
        }
      }
      else
      {
        mesList += `<div class='mes' id= ${item.id}>
                    <img class='user-img' src='images/mn_icon.png'>`
      }
      mesList += `<div class='mes-info'>
        <span class='mes-name'> ${author} </span>
        <span class='mes-text'> ${item.text} </span>
        </div>
        <span class='mes-time'> ${time} </span>
        </div>`

    });
    mesList += '</div>';
    msgs. innerHTML = mesList;
  }
}


class ActiveUsersView{
  constructor(containerId) {
    this.idmes = containerId
  }
  display(users){
    let userList = document.getElementById(this.idmes);
    users.forEach(item =>{
      let onlUser = `<div class="onl-user">
                  <img src="images/mn_icon.png">
                  <span> ${item} </span>
                 </div>`
      userList.innerHTML += onlUser;
    });
  }
}

class Message {
  constructor(msg = {}) {
    this._id = msg.id;
    this._createdAt = msg.createdAt;
    this.text = msg.text;
    this._author = msg.author;
    if (!msg.to) {
      this.isPersonal = false;
    } else {
      this.isPersonal = true;
      this.to = msg.to;
    }

  };

  get id() {
    return this._id;
  }
  set id(value){
    throw new Error("this field can't be changed");
  }

  get createdAt() {
    return this._createdAt;
  }
  set createdAt(value){
    throw new Error("this field can't be changed");
  }

  get author() {
    return this._author;
  }
  set author(value){
    throw new Error("this field can't be changed");
  }

}

 class MessageList{
   constructor() {
     this._user = localStorage.getItem('user') || undefined;
     const msgs = this.restore();
     this._messages = [];
     msgs.forEach(item => {
       this._messages.push(new Message(item));
     });
   }

   get messages(){
     return this._messages;
   }

   set user(value){
     throw new Error("this field can't be changed");
   };

   save(mes){
     let msg = {}
     msg.id = mes._id;
     msg.text = mes.text;
     msg.createdAt = mes._createdAt;
     msg.author = mes._author;
     msg.isPersonal = mes.isPersonal;
     if (mes.to){
       msg.to = mes.to;
     }
     let json = JSON.stringify(msg);
     localStorage.setItem(msg.id,json);
   }

   restore(){
     let msgs = [];
     let value;
     let j = 0;
     for(let i = 0; i<localStorage.length; i++){
       let tmp = localStorage.key(i);
        if (tmp.includes('m')){
         value = localStorage.getItem(tmp);
         value = JSON.parse(value);
         value.createdAt = new Date (value.createdAt);
         msgs[j] = value;
         j++;
       }
     }
     return msgs;
   }
     getPage( skip = 0, top = 10, filterConfig={}) {

       const filterObj = {
         author: (item, author) => !author || item.author.toLowerCase().includes(author.toLowerCase()),
         text: (item, text) => !text || item.text.toLowerCase().includes(text.toLowerCase()),
         dateTo: (item, dateTo) => item.createdAt <= dateTo,
         dateFrom: (item, dateFrom) => item.createdAt >= dateFrom,
       };

     let result = this._messages.slice();
       result = this._messages.filter(item=> !item.to || item.to === this._user || item.author === this._user);
     Object.keys(filterConfig).forEach((key) => {
       result = result.filter((item) => filterObj[key](item, filterConfig[key]));
     });
     result.sort((a,b ) => a.createdAt <= b.createdAt ? 1 : -1)
     result = result.slice(skip, top + skip);
     result.sort((a,b ) => a.createdAt >= b.createdAt ? 1 : -1)
     return result;
   }

   get(idMes){
     return this._messages.find(item => item.id === idMes);
   }

    validate(msg){
     const validateObj ={
       id: (item) => item.id,
       createdAt: (item) => item.createdAt,
       isPersonal: (item) => item.isPersonal !== undefined,
       text: (item) => item.text && item.text.length <= 200 && item.text.length > 0,
       author: (item) => item.author && item.author.length <= 30 && item.author.length > 0
     };
     return Object.keys(validateObj).every((key) => validateObj[key](msg));
   }

    add(msg){
       const mes = new Message({id : 'm' + String(+new Date()), createdAt : new Date(), text: msg.text, author: this._user,  to: msg.to});
       if (this.validate(mes)){
         this.save(mes);
       this._messages.push(mes);

       return true;
     }
     else {
       return false;
     }
   }

   edit(id, msg){
     let idEdit = this.get(id);
     if ((this._user !== idEdit.author)){
       return false;
     }
     if (this.validate(idEdit) ){
       for(let key in msg){
         idEdit[key] = msg[key];
       }
       this.save(idEdit);
       return true;
     }
     else{
       return false;
     }
   }

   remove(id){
     let idRemove = this._messages.findIndex( currentValue => currentValue.id === id );
     if (this._user !== this._messages[idRemove].author){
       return false;
     }
     this._messages.splice(idRemove,1);
     localStorage.removeItem(id);
     return true;

   }

   addAll(msgs){
     const arr = []
     msgs.forEach(item => {
     if (this.validate(item)){
       this._messages.push(item);
     }
     else {
       arr.push(item)
     }
     });
     return arr;
   }

   clear(){
     this._messages = [];
   }

}



class Controller {
  constructor() {
    this.userList = new UserList(users, activeUsers);
    this.headerView = new HeaderView('user');
    this.messagesView = new MessagesView('list');
    this.activeUsersView = new ActiveUsersView('usersList');
    this.usersSelect = new UsersSelect('users');

  }



  setCurrentUser(user) {
    if (user){
      MessageList._user = user;
      this.headerView.display(user);
    }
    else{
      MessageList._user = localStorage.getItem('user') || undefined
      this.headerView.display(MessageList._user);
    }
  }

  showActiveUsers() {
    this.activeUsersView.display(this.userList.activeUsers);
  }

  showSelectUsers(){
    this.usersSelect.display(this.userList.activeUsers);
  }

  showMessages(skip, top, filterConfig) {
    let messagesList = messageList.getPage(skip, top, filterConfig);
    this.messagesView.display(messagesList);
  }

  addMessage(msg) {
    if (messageList.add(msg)) {
      this.showMessages(0, mesAmount);
      return true;
    }
    return false;
  }

  editMessage(id, msg) {
    if (messageList.edit(id, msg)) {
      this.showMessages(0, mesAmount);
      return true;
    }
    return false;
  }

  removeMessage(id) {
    if (messageList.remove(id)) {
      this.showMessages(0, mesAmount);
      return true
    }
    return false
  }

  ToSend(event) {
      let msg = {}
      if (select.value !== 'Всем'){
        msg.to = select.value;
      }

    let text = event.srcElement[0].value;
    //console.log(event.currentTarget.parentNode.value);
    if (sendBtn.value === ''){
      msg.text = text;
      this.addMessage(msg);
    }
    else{
      msg.text = text
      this.editMessage(sendBtn.value,msg)
      sendBtn.value = '';
    }
  }

  ToEdit(msg){
    sendBtn.value = msg.id;
    text.value = msg.text;
    text.focus();
  }

  ToDelete(del){
    if(confirm('Удалить сообщение?')) {
      controller.removeMessage(del)
    }
  }

  ChangeMessage(){
    let target = event.target;
    let id = target.parentNode.parentNode.parentNode.id
    let msg = messageList.get(id);
    if(target.parentNode.className === 'toEdit'){
      controller.ToEdit(msg)
    }
    else if(target.parentNode.className === 'toDelete'){
      controller.ToDelete(msg.id);
    }

  }


ToFilter(event){
  let filter = {};
    if(event.target[0].value){
      filter.author = event.target[0].value;
    }
    if(event.target[1].value){
      filter.text = event.target[1].value;
    }
    if(event.target[2].value){
      filter.dateFrom = new Date (event.target[2].value);
    }
    if(event.target[3].value){
      filter.dateTo = new Date (event.target[3].value)
    }
  this.showMessages(0, 10, filter);
}


  Registration(event) {
    if (event.target[1].value === event.target[2].value && event.target[1].value && event.target[2].value){
      this.setCurrentUser(event.target[0].value);
       this.userList.addUser(event.target[0].value);
       this.showMessages(0, 10);
      controller.ChangeForm('regForm', 'formMain')
     }
    else if(!event.target[0].value){
      alert('Заполните форму!');
    }
    else{
      alert('Пароли не совпадают');
    }

  }

  Login(event){
    if (event.target[0].value && event.target[1].value){
      messageList._user = event.target[0].value;
      localStorage.setItem('user',event.target[0].value);
      this.setCurrentUser(event.target[0].value);
      this.showMessages(0, 10);
      controller.ChangeForm('loginForm', 'formMain')
    }
    else{
      alert('Заполните форму!');
    }
  }

   ShowMore(){
   mesAmount += 10;
    controller.showMessages(0,mesAmount);
  }

  ChangeForm(blockFrom, blockTo){
    let from = document.getElementById(blockFrom);
    let to = document.getElementById(blockTo);
    if (blockFrom === 'formMain'){
      localStorage.removeItem('user');
      controller.setCurrentUser();
    }
    from.style.display = "none";
    to.style.display = "block";
  }

}

function FillStorage(){
  messages.forEach(item =>{
    let json = JSON.stringify(item);
    localStorage.setItem(item.id,json);
  })
  let usersCol = 0;
  users.forEach(item =>{

    localStorage.setItem('user_'+usersCol,item );
    usersCol++;
  })

  let onlCol = 0;
  activeUsers.forEach(item =>{

    localStorage.setItem('onlUser_'+onlCol,item );
    onlCol++;
  })

}
if (localStorage.length === 0){
  FillStorage();
}

let mesAmount = 10;
const messageList = new MessageList();
const controller = new Controller();

controller.setCurrentUser();

controller.showActiveUsers();
controller.showMessages(0,10);

controller.showSelectUsers();

const show = document.getElementById('showMore');
show.addEventListener('click', controller.ShowMore);
const select = document.getElementById('users');
const text = document.getElementById('text');
const sendBtn = document.getElementById('addMes');

const list = document.getElementById("list");
list.addEventListener('click', controller.ChangeMessage);










