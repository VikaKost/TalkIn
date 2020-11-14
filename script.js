const messages = [
  {
    id: '1',
    text: 'Есть много вариантов Lorem Ipsum, но',
    createdAt: new Date('2020-10-12T23:17:36'),
    author: 'Dasha',
    isPersonal: false
  },
  {
    id: '2',
    text: 'Какие дела?',
    createdAt: new Date('2020-10-12T23:19:37'),
    author: 'Max',
    isPersonal: false
  },
  {
    id: '4',
    text: 'Если вам нужен Lorem Ipsum для серьёзного проекта',
    createdAt: new Date('2020-10-12T23:34:38'),
    author: 'Liza',
    isPersonal: false
  },
  {
    id: '3',
    text: 'Есть много вариантов Lorem Ipsum, но',
    createdAt: new Date('2020-10-12T23:21:36'),
    author: 'Dasha',
    isPersonal: false
  },
  {
    id: '10',
    text: 'Многие программы электронной вёрстки и редакторы HTML ',
    createdAt: new Date('2020-10-12T23:19:00'),
    author: 'Ivan',
    isPersonal: false
  },

  {
    id: '5',
    text: 'в классической латинской литературе',
    createdAt: new Date('2020-10-12T23:41:38'),
    author: 'Max',
    isPersonal: true,
    to: 'Alina'
  },
  {
    id: '6',
    text: 'Он использует словарь из более чем 200',
    createdAt: new Date('2020-10-12T23:56:39'),
    author: 'Liza',
    isPersonal: false
  },
  {
    id: '7',
    text: 'в классической латинской литературе',
    createdAt: new Date('2020-10-12T23:17:40'),
    author: 'Dasha',
    isPersonal: true,
    to: 'Liza'
  },
  {
    id: '8',
    text: ' Его корни уходят в один фрагмент',
    createdAt: new Date('2020-10-12T23:18:56'),
    author: 'Viktoria',
    isPersonal: false
  },
  {
    id: '9',
    text: 'Его популяризации в новое время',
    createdAt: new Date('2020-10-12T23:18:57'),
    author: 'Liza',
    isPersonal: false
  },
  {
    id: '11',
    text: 'Его популяризации в новое время',
    createdAt: new Date('2020-10-13T14:18:57'),
    author: 'Liza',
    isPersonal: false
  },
  {
    id: '12',
    text: 'что тот обеспечивает более или менее стандартное заполнение шаблона',
    createdAt: new Date('2020-10-13T15:08:40'),
    author: 'Alisa',
    isPersonal: true,
    to: 'Sasha'
  },
  {
    id: '13',
    text: 'это текст-"рыба", часто используемый в печать',
    createdAt: new Date('2020-10-13T15:08:43'),
    author: 'Sasha',
    isPersonal: true,
    to: 'Alisa'
  },
  {
    id: '14',
    text: 'За прошедшие годы текст Lorem Ipsum получил много версий',
    createdAt: new Date('2020-10-13T18:56:00'),
    author: 'Andrey',
    isPersonal: false
  },
  {
    id: '15',
    text: 'Также все другие известные генераторы',
    createdAt: new Date('2020-10-13T18:57:40'),
    author: 'Liza',
    isPersonal: false
  },
  {
    id: '16',
    text: ' Первая строка Lorem Ipsum, "Lorem ipsum dolor sit amet.."',
    createdAt: new Date('2020-10-16T06:18:40'),
    author: 'Liza',
    isPersonal: false
  },
  {
    id: '17',
    text: 'В то время некий безымянный печатник создал',
    createdAt: new Date('2020-10-16T09:35:43'),
    author: 'Liza',
    isPersonal: true,
    to: 'Viktoria'
  },
  {
    id: '18',
    text: 'Некоторые версии появились по ошибке',
    createdAt: new Date('2020-10-24T15:56:50'),
    author: 'Max',
    isPersonal: false
  },
  {
    id: '19',
    text: 'Если вам нужен Lorem Ipsum для серьёзного проекта',
    createdAt: new Date('2020-10-24T16:02:50'),
    author: 'Liza',
    isPersonal: false
  },
  {
    id: '20',
    text: 'Его популяризации в новое время послужили',
    createdAt: new Date('2020-10-24T19:41:43'),
    author: 'Liza',
    isPersonal: true,
    to: 'Vlad'
  },
  {
    id: '21',
    text: 'Классический текст Lorem Ipsum, используемый с XVI века',
    createdAt: new Date('2020-10-29T12:21:50'),
    author: 'Liza',
    isPersonal: false
  },
  {
    id: '22',
    text: 'он нашёл неоспоримый первоисточник',
    createdAt: new Date('2020-10-29T13:58:06'),
    author: 'Liza',
    isPersonal: false
  },
  {
    id: '23',
    text: 'Здесь ваш текст.." Многие программы электронной вёрстки и редакторы HTML',
    createdAt: new Date('2020-11-01T17:07:06'),
    author: 'Alina',
    isPersonal: false
  },
  {
    id: '24',
    text: 'происходит от одной из строк в разделе',
    createdAt: new Date('2020-11-01T17:18:06'),
    author: 'Ivan',
    isPersonal: false
  },
  {
    id: '25',
    text: 'За прошедшие годы',
    createdAt: new Date('2020-11-01T18:43:06'),
    author: 'Max',
    isPersonal: false
  }
];

class Message {
  constructor(msg = {}) {
    this.id = msg.id;
    this.createdAt = msg.createdAt;
    this.text = msg.text;
    this.author = msg.author;
    if (!msg.to){
      this.isPersonal = false;
    }
    else{
      this.isPersonal = true;
      this.to = msg.to;
    }

  };
  set Change(value) {
    this.id =()=>{
      if (value !==Message.id){
        throw new Error("this field can't be changed")
      }
    }
    this.createdAt=()=>{
      if (value !==Message.createdAt){
        throw new Error("this field can't be changed")
      }
    }
    this.author=()=>{
      if (value !==Message.author){
        throw new Error("this field can't be changed")
      }
    }

  };

}
class MessageList{
  constructor(msgs) {
    this._messages = [];
    msgs.forEach(item => {
      this._messages.push(new Message(item));
    });
  }
  getPage(_user, skip = 0, top = 10, filterConfig={}) {
    const filterObj = {
      author: (item, author) => !author || item.author.toLowerCase().includes(author.toLowerCase()),
      text: (item, text) => !text || item.text.toLowerCase().includes(text.toLowerCase()),
      dateTo: (item, dateTo) => item.createdAt <= dateTo,
      dateFrom: (item, dateFrom) => item.createdAt >= dateFrom,
    };

    let result = this._messages.slice();
    result = this._messages.filter(item=> !item.to || item.to === _user);
    Object.keys(filterConfig).forEach((key) => {
      result = result.filter((item) => filterObj[key](item, filterConfig[key]));
    });

    result.sort((a,b ) => a.createdAt >= b.createdAt ? 1 : -1)

    result = result.slice(skip, top + skip);
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

  add(_user, msg){
    const mes = new Message({id: String(+new Date()),  createdAt: new Date(), text: msg.text, author: _user, to: msg.to});
    if (this.validate(mes)){
      this._messages.push(mes);
      return true;
    }
    else {
      return false;
    }
  }

  edit(_user, id, msg){
    let idEdit = this.get(id);

    if ((_user !== idEdit.author)){
      return false;
    }
    if (this.validate(idEdit) ){
      for(let key in msg){
        idEdit[key] = msg[key];
      }
      return true;
    }
    else{
      return false;
    }
  }

  remove(_user, id){
    let idRemove = this._messages.map((el) => el.id).indexOf(id);

    if (_user !== this._messages[idRemove].author){
      return false;
    }
    this._messages.splice(idRemove,1);
    return this._messages;

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
let list = new MessageList(messages);



//console.log(list.getPage('Liza',0, 25));
//console.log(list.add({text:'Текст нового сообщения', to: 'Liza', author: 'Max'}));
//console.log(list._messages);
//console.log(list.edit('Max','5', {text: 'Текст измененного сообщения'}));
//console.log(list.remove('Max','5'));
//console.log(list.addAll(messages));
//console.log(list._messages);
//console.log(list);
//console.log(list.clear());
//console.log(list.get('5'));
//console.log( Object.getOwnPropertyDescriptor (mes, 'id'));