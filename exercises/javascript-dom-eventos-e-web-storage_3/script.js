function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
window.onload = function () {
    // Exercício 1

    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let diasLista = document.getElementById("days");
    for (let index = 0; index < dezDaysList.length; index += 1) {
        let diaMes = dezDaysList[index];
        let day = document.createElement("li");
        if (diaMes === 24 || diaMes === 31) {
            day.className = "day holiday";
            diasLista.appendChild(day);
        } else if (diaMes === 4 || diaMes === 11 || diaMes === 18) {
            day.className = "day friday";
            diasLista.appendChild(day);
        } else if (diaMes === 25) {
            day.className = "day friday holiday";
            diasLista.appendChild(day);
        } else {
            day.className = "day"
            diasLista.appendChild(day);
        }
        day.innerText = diaMes;   
    }   
}

// Exercício 2

function criaBotao(btnName) {
    let botao = document.createElement("button");
    let btnContainer = document.querySelector(".buttons-container");
    botao.id = "btn-holiday";
    botao.innerText = `${btnName}`;
    btnContainer.appendChild(botao);
}

criaBotao("Feriados");

