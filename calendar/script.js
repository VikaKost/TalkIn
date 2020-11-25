function createCalendar(elem, year, month){
  let block = document.getElementById(elem);
  let table;
  let firstDay = new Date(`${year}-${month}-1`).getDay();
  let temp = 0;
  let daysAmount = new Date(year, month, 0).getDate();
  const daysNames = ['пн','вт','ср','чт','пт','сб','вс'];
  firstDay = (firstDay === 0)? 7 : 0;
  table = `<table class="calendar"><tr>`
daysNames.forEach(item => {
  table += `<th> ${item} </th>`})
  table += `</tr><tr>`;

  for(let i = 1; i<firstDay; i++){
    table +=`<td></td>`;
    temp++;
  }
  for(let i=1; i <= daysAmount; i++){
    table += `<td>${i}</td>`;
    temp++;
    if (temp > 6){
      table += `</tr>`;
      if (i !== daysAmount){
        table += `<tr>`;
        temp = 0;
      }
    }
  }
  for(let i = 0; i<7-temp; i++){
    table +=`<td></td>`;
  }
  table += `</tr>`;
  table += '</table>';
  block.innerHTML = table;
console.log(daysAmount, firstDay);
}
createCalendar('date-block', '2020', '11');