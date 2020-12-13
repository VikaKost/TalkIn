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

class MessagesView{
  constructor(containerId) {
    this.idmes = containerId
  }

  display(msg){
    let msgs = document.getElementById(this.idmes);
    let mesList = '<div id="msgs-list">';
    msg.forEach(item =>{
      let time = item.createdAt.getDate() + '.' + item.createdAt.getMonth()+ '.' +item.createdAt.getFullYear() +'/'+ item.createdAt.getHours()+':'+item.createdAt.getMinutes();
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
      userList.innerHTML = onlUser;
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

class Controller {
  constructor() {
    this.chatApiService = new ChatApiService('https://jslabdb.datamola.com');
    this._messageTimeout = null;
    this._usersTimeout = null;
    this.headerView = new HeaderView('user');
    this.messagesView = new MessagesView('list');
    this.activeUsersView = new ActiveUsersView('usersList');
    this.usersSelect = new UsersSelect('users');
    this._mesAmount = 10;
    this.filter = {};
    this.messageTimeout = null;
    this.usersTimeout = null;

    const loginBtn = document.getElementById('login');
    loginBtn.addEventListener('click', () => {
      if(localStorage.getItem("user")){
        this.ChangeForm('formMain', 'loginForm');
        this.logout();
      }
      else {
        this.ChangeForm('formMain', 'loginForm');
      }
    });

    const show = document.getElementById('showMore');
    show.addEventListener('click', this.ShowMore);

    const list = document.getElementById("list");
    list.addEventListener('click', this.ChangeMessage);
  }

  get mesAmount() {
    return this._mesAmount;
  }

  set mesAmount(number) {
    this._mesAmount = number;
  }

  update(){
    this.setCurrentUser();
    this.showActiveUsers();
    this.showMessages();
    this.showSelectUsers();
  }

  setCurrentUser(user) {
      this.headerView.display(localStorage.getItem('user'));
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

  showActiveUsers() {
    this.chatApiService.getUsers()
      .then(response => {
        return this.toResponse(response);
      })
      .then((data) => {
        return data.filter(user => user.isActive).map(user => user.name)
      })
      .then((activeUsers) => {
        this.activeUsersView.display(activeUsers);
        this.usersTimeout = setTimeout(() => {
          this.showActiveUsers();
        }, 6000);
      });
  }

  showMessages(skip = 0, top = controller.mesAmount, filterConfig) {
    if(this.messageTimeout) {
      clearTimeout(this.messageTimeout);
    }
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
        this.messagesView.display(msgsViewed.reverse());
        this.messageTimeout = setTimeout(() => {
          this.showMessages(skip, top, controller.filter);
        }, 6000);
      })
  }

  addMessage(msg) {
    controller.filter = {};
    document.getElementById('filter').reset();
      this.chatApiService.addMessage(msg);
      this.showMessages();

  }

  editMessage(id, msg) {
    controller.filter = {};
    document.getElementById('filter').reset();
    this.chatApiService.editMessage(id, msg)
      .then(response => {
        return this.toResponse(response);
      })
      .then((result) => {
        if(result) {
          this.showMessages();
          return true;
        }
        return false;
      });
  }

  ToSend(event) {
    let msg = {}
      if (select.options.selectedIndex !== 0){
        msg.isPersonal = true
        msg.to = select.value;
      }
      else{
        msg.isPersonal = false;
      }
    let text = event.srcElement[0].value;
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

  ToEdit(id, mes){
    controller.filter = {};
    document.getElementById('filter').reset();
    let msg = {};
    sendBtn.value = id;
    inputValue.value = mes;
    inputValue.focus();
    if (select.options.selectedIndex !== 0){
      msg.isPersonal = true
      msg.to = select.value;
    }
    else{
      msg.isPersonal = false;
    }
    msg.text = mes;
    this.chatApiService.editMessage(id, msg)
      .then(response => {
        return this.toResponse(response)
      })
      .then((result) => {
        if(result) {
          this.showMessages();
          return true;
        }
        return false;
      });
  }

  ToDelete(del) {
    if (confirm('Удалить сообщение?')) {
      this.chatApiService.deleteMessage(del)
        .then(response => {
          return this.toResponse(response);
        })
        .then((result) => {
          if (result) {
            this.showMessages();
            return true;
          }
          return false;
        });
    }
  }

  ChangeMessage(){
    let target = event.target;
    let id = target.parentNode.parentNode.parentNode.id
    let mes = document.getElementById(id).querySelectorAll('span.mes-text');
    let text = mes[0].innerText;

    if(target.parentNode.className === 'toEdit'){
      controller.ToEdit(id, text)
    }
    else if(target.parentNode.className === 'toDelete'){
      controller.ToDelete(id);
    }

  }


ToFilter(event){
    let dateFrom;
      let dateTo;
      this.filter = {};

    if(event.target[0].value){
      this.filter.author = event.target[0].value;
    }
    if(event.target[1].value){
      this.filter.text = event.target[1].value;
    }
    if(event.target[2].value){
      dateFrom = new Date (event.target[2].value);
      this.filter.dateFrom = `${ dateFrom.getFullYear()}${ dateFrom.getMonth()+1}${ dateFrom.getDate()}`;
    }
    if(event.target[3].value){
      dateTo = new Date (event.target[3].value);
      this.filter.dateTo = `${ dateTo.getFullYear()}${ dateTo.getMonth()+1}${dateTo.getDate()}`;
    }
  this.showMessages(0, 10, this.filter);
}

  logout() {
    this.chatApiService.logOut()
      .then((response) => {
        return this.toResponse(response);
      })
      .then((result) => {
        if(result) {
          localStorage.removeItem("user");
          localStorage.removeItem("token");
          this.update();
        }
      })
  }


  Registration(event) {
    let name = event.target[0].value;
    let pass = event.target[1].value;
    let repass = event.target[2].value;

    if (pass === repass && pass && repass){
      let formdata = new FormData();
      formdata.append("name", name);
      formdata.append("pass", pass);

      this.chatApiService.Registration(formdata)
        .then((data) => {
          if(data.status === 409) {
            alert("Это имя пользователя уже занято!");
          }
          if(data.status === 200) {

            this.ChangeForm('regForm', 'formMain')
          }
          // else {
          //   this.goToErrorPage();
          // }
        })
     }
    else if(!name || !pass || !repass){
      alert('Заполните форму!');
    }
    else{
      alert('Пароли не совпадают');
    }



  }

  Login(event){
    let formdata = new FormData();
    let name = event.target[0].value;
    let pass = event.target[1].value
    formdata.append("name", name);
    formdata.append("pass", pass);

    this.chatApiService.Login(formdata)
      .then((response) => {
        const token = this.toResponse(response);
        return token;
      })
      .then((response) => {
        localStorage.setItem("user", name);
        localStorage.setItem("token", response.token);
        this.ChangeForm('loginForm', 'formMain');
        this.update();
      });
    }


   ShowMore(){
     let number = controller.mesAmount + 10
     controller.showMessages(0, number, controller.filter);
     controller.mesAmount = number;
  }

  ChangeForm(blockFrom, blockTo){
    let from = document.getElementById(blockFrom);
    let to = document.getElementById(blockTo);
    from.style.display = "none";
    to.style.display = "block";
  }


  toResponse(response) {
    if (response.status === 200 || response.status === 201) {
      return response.result;
    }
    if (response.status === 401) {
      alert('Ошибка авторизации')
    } else {
      if (response.status === 409) {
        alert('Это имя пользователя уже занято')
      } else {
        this.ChangeForm('regForm', 'errorPage');
      }

    }
  }
}

class ChatApiService{
  constructor(ip) {
    this.server = ip;
  }

  serverRequest(url, obj) {
    return fetch(url, obj)
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
      });
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

  editMessage(id, msg) {
    const url = `${this.server}/messages/${id}`;
    const params = {
      method: "PUT",
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`,
        "content-type": "application/json"
      },
      body: JSON.stringify(msg)
    };
    return this.serverRequest(url, params);
  }

  deleteMessage(id) {
    const url = `${this.server}/messages/${id}`;
    const params = {
      method: 'DELETE',
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("token")}`
      }
    };
    return this.serverRequest(url, params);
  }

  Registration(formdata){
    const url = `${this.server}/auth/register`;
    return fetch(url, {
      method: 'POST',
      body: formdata
    });
  }

  Login(formdata){
    const url = `${this.server}/auth/login`;
    return fetch(url, {
      method: 'POST',
      body: formdata
    })
      .then((response) => {
        return {
          status: response.status,
          result: response.json()
        }
      });
  }

   logOut(){
     const url = `${this.server}/auth/logout`;
     const params = {
       method: 'POST',
       headers: {
         "Authorization": `Bearer ${localStorage.getItem("token")}`,
       }
     };
     return this.serverRequest(url, params);
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

const controller = new Controller();
controller.update();



const select = document.getElementById('users');
const inputValue = document.getElementById('text');
const sendBtn = document.getElementById('addMes');







