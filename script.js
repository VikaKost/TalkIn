const MainModule = (function() {
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
        },
    ];
    const filterObj = {
        author: (item, author) => !author || item.author.toLowerCase().includes(author.toLowerCase()),
        text: (item, text) => !text || item.text.toLowerCase().includes(text.toLowerCase()),
        dateTo: (item, dateTo) => !dateTo || item.dateTo < dateTo,
        dateFrom: (item, dateFrom) => !dateFrom || item.dateFrom > dateFrom,
    };

    const validateObj ={
        text: (item) => item.text && item.text.length <= 200
    };

    let currentAuthor = 'Sergey';

    function getMessages(skip = 0, top = 10, filterConfig={}) {
        let result = messages.slice();
        Object.keys(filterConfig).forEach((key) => {
            result = result.filter((item) => filterObj[key](item, filterConfig[key]));
        });
        function sortByDate(arr) {
            arr.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1)
        }
        sortByDate(result);
        result = result.slice(skip, skip + top);
        return result;

    }

    function getMessage(idMes){
        return messages.find(item => item.id === idMes);
    }

    function  validate(msg){
        return Object.keys(validateObj).every((key) => validateObj[key](msg));
    }

    function addMessage(msg){

        if (validate(msg)){
            msg.id = String(+new Date());
            msg.createdAt = new Date();
            msg.author = currentAuthor;
            msg.isPersonal = false;
            messages.push(msg);
            return true;
        }
        return false;
    }

    function editMessage(id, msg){
        let idEdit = getMessage(id);

        for(let key in msg){
            idEdit[key] = msg[key];
        }
        if (validate(idEdit)){
            return true;
        }
        return false;
    }

    function removeMessage(id){
        let idRemove = messages.map((el) => el.id).indexOf(id);
        messages.splice(idRemove,1);
        return messages;

    }



    //CHECK
    console.log(getMessages());
    //console.log(getMessage('5'));
    //addMessage({text:'Текст нового сообщения'});
    //editMessage('5', {text: 'Текст измененного сообщения'});
    //removeMessage('5');
    //console.log(messages);


}());




