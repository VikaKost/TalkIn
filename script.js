



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

      if (item.isPersonal && item.to === localStorage.getItem('user')){
          mesList += `<div class='mes private-mes' id= ${item.id}>
                      <img class='user-img' src='images/mn_icon.png'>`
      }
      else if(item.author === localStorage.getItem('user')){
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

//  class MessageList{
//    constructor() {
//      this._user = localStorage.getItem('user') || undefined;
//      const msgs = this.restore();
//      this._messages = [];
//      msgs.forEach(item => {
//        this._messages.push(new Message(item));
//      });
//    }
//
//    get messages(){
//      return this._messages;
//    }
//
//    set user(value){
//      throw new Error("this field can't be changed");
//    };
//
//    save(mes){
//      let msg = {}
//      msg.id = mes._id;
//      msg.text = mes.text;
//      msg.createdAt = mes._createdAt;
//      msg.author = mes._author;
//      msg.isPersonal = mes.isPersonal;
//      if (mes.to){
//        msg.to = mes.to;
//      }
//      let json = JSON.stringify(msg);
//      localStorage.setItem(msg.id,json);
//    }
//
//    restore(){
//      let msgs = [];
//      let value;
//      let j = 0;
//      for(let i = 0; i<localStorage.length; i++){
//        let tmp = localStorage.key(i);
//         if (tmp.includes('m')){
//          value = localStorage.getItem(tmp);
//          value = JSON.parse(value);
//          value.createdAt = new Date (value.createdAt);
//          msgs[j] = value;
//          j++;
//        }
//      }
//      return msgs;
//    }
//      getPage( skip = 0, top = 10, filterConfig={}) {
//
//        const filterObj = {
//          author: (item, author) => !author || item.author.toLowerCase().includes(author.toLowerCase()),
//          text: (item, text) => !text || item.text.toLowerCase().includes(text.toLowerCase()),
//          dateTo: (item, dateTo) => item.createdAt <= dateTo,
//          dateFrom: (item, dateFrom) => item.createdAt >= dateFrom,
//        };
//
//      let result = this._messages.slice();
//        result = this._messages.filter(item=> !item.to || item.to === this._user || item.author === this._user);
//      Object.keys(filterConfig).forEach((key) => {
//        result = result.filter((item) => filterObj[key](item, filterConfig[key]));
//      });
//      result.sort((a,b ) => a.createdAt <= b.createdAt ? 1 : -1)
//      result = result.slice(skip, top + skip);
//      result.sort((a,b ) => a.createdAt >= b.createdAt ? 1 : -1)
//      return result;
//    }
//
//    get(idMes){
//      return this._messages.find(item => item.id === idMes);
//    }
//
//     validate(msg){
//      const validateObj ={
//        id: (item) => item.id,
//        createdAt: (item) => item.createdAt,
//        isPersonal: (item) => item.isPersonal !== undefined,
//        text: (item) => item.text && item.text.length <= 200 && item.text.length > 0,
//        author: (item) => item.author && item.author.length <= 30 && item.author.length > 0
//      };
//      return Object.keys(validateObj).every((key) => validateObj[key](msg));
//    }
//
//     add(msg){
//        const mes = new Message({id : 'm' + String(+new Date()), createdAt : new Date(), text: msg.text, author: this._user,  to: msg.to});
//        if (this.validate(mes)){
//          this.save(mes);
//        this._messages.push(mes);
//
//        return mes;
//      }
//      else {
//        return false;
//      }
//    }
//
//    edit(id, msg){
//      let idEdit = this.get(id);
//      if ((this._user !== idEdit.author)){
//        return false;
//      }
//      if (this.validate(idEdit) ){
//        for(let key in msg){
//          idEdit[key] = msg[key];
//        }
//        this.save(idEdit);
//        return true;
//      }
//      else{
//        return false;
//      }
//    }
//
//    remove(id){
//      let idRemove = this._messages.findIndex( currentValue => currentValue.id === id );
//      if (this._user !== this._messages[idRemove].author){
//        return false;
//      }
//      this._messages.splice(idRemove,1);
//      localStorage.removeItem(id);
//      return true;
//
//    }
//
//    addAll(msgs){
//      const arr = []
//      msgs.forEach(item => {
//      if (this.validate(item)){
//        this._messages.push(item);
//      }
//      else {
//        arr.push(item)
//      }
//      });
//      return arr;
//    }
//
//    clear(){
//      this._messages = [];
//    }
//
// }
//


class Controller {
  constructor() {
    this.chatApiService = new ChatApiService('https://jslabdb.datamola.com');
    this.headerView = new HeaderView('user');
    this.messagesView = new MessagesView('list');
    this.activeUsersView = new ActiveUsersView('usersList');
    this.usersSelect = new UsersSelect('users');
  }

  setCurrentUser(user) {

      this.headerView.display(localStorage.getItem('user'));
  }

  showActiveUsers() {
    this.chatApiService.getUsers()
      .then(response => {
        if(response.status === 200 || response.status === 201) {
          return response.result;
        }
      })
      .then((data) => {
        return data.filter(user => user.isActive).map(user => user.name)
      })
      .then((activeUsers) => {
        this.activeUsersView.display(activeUsers);
      })
  }

  showSelectUsers(){
    this.chatApiService.getUsers()
      .then(response => {
        if(response.status === 200 || response.status === 201) {
          return response.result;
        }
      })
      .then((data) => {
        return data.filter(user => user.isActive).map(user => user.name)
      })
      .then((activeUsers) => {
        this.usersSelect.display(activeUsers);
      })
  }

  showMessages(skip, top, filterConfig) {
    this.chatApiService.getMessages(skip, top, filterConfig)
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          return response.result;
        }
      })
      .then((data) => {
        return data.map(message => {
          if (message.isPersonal) {
            return new Message({
              id: message.id,
              createdAt: new Date (message.createdAt),
              author: message.author,
              text: message.text,
              isPersonal: message.isPersonal,
              to: message.to
            });
          }
          return new Message({
            id: message.id,
            createdAt: new Date (message.createdAt),
            author: message.author,
            text: message.text,
            isPersonal: message.isPersonal
          });
        });
      })
      .then((msgsViewed) => {
        this.messages = msgsViewed;
        console.log(this.messages);
        this.messagesView.display(msgsViewed.reverse());
      })

  }

  addMessage(msg) {

      let data = {
        "text": msg.text,
        "isPersonal": false
      }

      console.log(data);
      this.chatApiService.addMessage(data);
      this.showMessages();
      return true;
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
    //let msg = messageList.get(id);
    if(target.parentNode.className === 'toEdit'){
      //controller.ToEdit(msg)
    }
    else if(target.parentNode.className === 'toDelete'){
      //controller.ToDelete(msg.id);
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
    let data;
    if (event.target[1].value === event.target[2].value && event.target[1].value && event.target[2].value){
      this.chatApiService.Registration(event.target[0].value, event.target[1].value);
       //this.showMessages(0, 10);
      localStorage.setItem('user', event.target[0].value)
      controller.ChangeForm('regForm', 'formMain', event.target[0].value)
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
      this.chatApiService.Login(event.target[0].value, event.target[1].value);
      this.ChangeForm('loginForm', 'formMain')
      this.setCurrentUser(localStorage.getItem('user'))
      //this.showMessages(0, 10);
      //controller.ChangeForm('loginForm', 'formMain')
    }
    else{
      alert('Заполните форму!');
    }
  }

   ShowMore(){
   mesAmount += 10;
    controller.showMessages(0,mesAmount);
  }

  ChangeForm(blockFrom, blockTo, user){
    let from = document.getElementById(blockFrom);
    let to = document.getElementById(blockTo);
    if (blockFrom === 'formMain'){
       this.chatApiService.LogOut()
         .then((response) => {
           if(response.status === 200 || response.status === 201) {
             return response.result;
           }
         })
         .then((result) => {
           if(result) {
             localStorage.removeItem("user");
             localStorage.removeItem("token");
             this.init();
           }
         })
     }
    from.style.display = "none";
    to.style.display = "block";
  }

}

class ChatApiService{
  constructor(ip) {
    this.server = ip;
  }

  getMessages(skip = 0, top = 10, filterConfig) {
    let url = `${this.server}/messages?skip=${skip}&top=${top}`;
    if(filterConfig) {
      const urlParams = Object.entries(filterConfig);
      urlParams.forEach(item => {
        url += `&${item[0]}=${item[1]}`;
      });
    }
    let params = {};
    if(localStorage.getItem("token")) {
      params = {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`,
          "content-type": "application/json"
        },
      }
    }
    return  fetch(url, params)
      .then((response) => {
        return {
          status: response.status,
          result: response.json()
        }
      });
  }
  addMessage(data){
    let url = `${this.server}/messages`;
    return fetch(url,{
      method: "POST",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
        "content-type": "application/json"
      },
      body: JSON.stringify(data),
    })
      .then((response)=>{
        console.log(response);
      })

  }

  Registration(name, pass){
    let formdata = new FormData();
    formdata.append("name", name);
    formdata.append("pass", pass);

    console.log(name, pass);
    let url = `${this.server}/auth/register`
    return fetch(url,{
      method: "POST",
      body: formdata
    })
      .then((response)=>{
        console.log(response);
      })
  }

  Login(name, pass){
    let formdata = new FormData();
    formdata.append("name", name);
    formdata.append("pass", pass);

    console.log(name, pass);
    let url = `${this.server}/auth/login`
    return fetch(url,{
      method: "POST",
      body: formdata
    })
      .then(response => response.json())
      .then(result => {localStorage.setItem('token', result.token);
        localStorage.setItem("user", name);
      })
  }

   LogOut(){
     const url = `${this.server}/auth/logout`;
     const params = {
       method: 'POST',
       headers: {
         "Authorization": `Bearer ${localStorage.getItem("token")}`,
       }
     };
      return fetch(url, params)
       .then((response) => {
         if(response.status === 200 || response.status === 201) {
           return {
             status: response.status,
             result: true
           }
         }
         else {
           return {
             status: response.status,
             result: false
           }
         }
       });;
   }

  getUsers() {
    const url = `${this.server}/users`;
    return fetch(url)
      .then((response) => {
        return {
          status: response.status,
          result: response.json()
        }
      });
  }
}


let mesAmount = 10;
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









