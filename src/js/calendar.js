import {listMatch} from './listMatch'
/* calendar */
let date =  new Date(),
    currentDate = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear();

export function createCalendar(month,year,date) {
    let currentMonthHTML = document.querySelector('.current-date'),
        monthContainerHtml = document.querySelector('.addDayMonth');

    // recuperer la date du jour
    let monthFrench = ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Août','Septembre','Octobre','Novembre','Décembre'];

    let firstMonth = year + '-' + (month) + '-01',
        dateFirstMonth = new Date(firstMonth),
        dayFirstMonth = dateFirstMonth.getDay(),
        dayFinal = [31,28,31,30,31,30,31,31,30,31,30,31],
        countDay = 1,
        endMonth = dayFinal[dateFirstMonth.getMonth()],
        endMonthBefore = dayFinal[(dateFirstMonth.getMonth()-1)],
        dayAfterMonth = 1;

    // veirifier si c'est dimanche qui devra etre d'indice 7
    if(dayFirstMonth == 0) {dayFirstMonth = 7}
    // si on passe a l'annee suivante, endMonthBefore = 31 (decembre)
    if(endMonthBefore == undefined) {endMonthBefore = 31}

    let dayContainer = '';
    // créer la premiere ligne
    dayContainer += '<tr class="day" >';
    // calculeo amle sary 
    endMonthBefore = endMonthBefore - dayFirstMonth + 2;
    for(let i=1; i<=7; i++) {
        // verifier quelle est le jour du premier mois
        if(dayFirstMonth > i) {
            // jour pas dans le mois
            dayContainer += `<td><span class="day-item day-out" onclick="calendar.setDate(this,${month-1},${endMonthBefore})">${endMonthBefore}</span></td>`;
            endMonthBefore++;
        } else {
            // premiere jour du mois
            if(countDay === date) {
                dayContainer += `<td><span class="day-item currentDate" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
            } else {
                dayContainer += `<td><span class="day-item" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
            }
            countDay++;
        }
    }
    dayContainer += '</tr>';

    // créer la seconde
    dayContainer += '<tr class="day" >';
    for(let i=1; i<=7; i++) {
        if(countDay === date) {
            dayContainer += `<td><span class="day-item currentDate" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
        } else {
            dayContainer += `<td><span class="day-item" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
        }
        countDay++;
    }
    dayContainer += '</tr>';

    // créer la troiseme
    dayContainer += '<tr class="day" >';
    for(let i=1; i<=7; i++) {
        if(countDay === date) {
            dayContainer += `<td><span class="day-item currentDate" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
        } else {
            dayContainer += `<td><span class="day-item" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
        }
        countDay++;
    }
    dayContainer += '</tr>';

    // créer la quatrieme
    dayContainer += '<tr class="day" >';
    for(let i=1; i<=7; i++) {
        // verifier si c'est le fin du mois
        if(endMonth >= countDay) {
            if(countDay === date) {
                dayContainer += `<td><span class="day-item currentDate" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
            } else {
                dayContainer += `<td><span class="day-item" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
            }
            countDay++;
        } else {
            // si c'est apres la fin du mois
            dayContainer += `<td><span class="day-item day-out" onclick="calendar.setDate(this,${month+1},${dayAfterMonth})">${dayAfterMonth}</span></td>`;
            dayAfterMonth++;
        }
    }
    dayContainer += '</tr>';

    // créer la cinquieme
    dayContainer += '<tr class="day" >';
    for(let i=1; i<=7; i++) {
        // verifier si c'est le fin du mois
        if(endMonth >= countDay) {
            if(countDay === date) {
                dayContainer += `<td><span class="day-item currentDate" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
            } else {
                dayContainer += `<td><span class="day-item" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
            }
            countDay++;
        } else {
            // si c'est apres la fin du mois
            dayContainer += `<td><span class="day-item day-out" onclick="calendar.setDate(this,${month+1},${dayAfterMonth})">${dayAfterMonth}</span></td>`;
            dayAfterMonth++;
        }
    }
    dayContainer += '</tr>';

    // créer la sixieme
    dayContainer += '<tr class="day" >';
    for(let i=1; i<=7; i++) {
        // verifier si c'est le fin du mois
        if(endMonth >= countDay) {
            if(countDay === date) {
                dayContainer += `<td><span class="day-item currentDate" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
            } else {
                dayContainer += `<td><span class="day-item" onclick="calendar.setDate(this,${month},${countDay})">${countDay}</span></td>`;
            }
            countDay++;
        } else {
            // si c'est apres la fin du mois
            dayContainer += `<td><span class="day-item day-out" onclick="calendar.setDate(this,${month+1},${dayAfterMonth})">${dayAfterMonth}</span></td>`;
            dayAfterMonth++;
        }
    }
    dayContainer += '</tr>';

    currentMonthHTML.innerHTML = monthFrench[month-1] + ' ' + year;
    monthContainerHtml.insertAdjacentHTML('beforeend', dayContainer)
}

export function downMonth() {
    month--;
    // si annee precedent
    if(month < 1) {
        year--;
        month = 12;
    }
    deleteCurrentMonth();
    createCalendar(month,year);
}

export function upMonth() {
    month++;
    // si anne suivant
    if(month > 12) {
        year++;
        month = 1;
    }
    deleteCurrentMonth();
    createCalendar(month,year);
}
export function deleteCurrentMonth() {
    let dayContainer = document.querySelectorAll('.day');
    for(let i=0; i<dayContainer.length; i++) {
        dayContainer[i].remove();
    }
}

export function getCurrentDate() {
    return {
        year, month, currentDate
    }
}

export function setDate(item,m, d) {
    // raha sendra amle date efa affiché no click-eny
    if(d === currentDate)
        return
    loading()
    let currentDateHTML = document.querySelector('.currentDate');
    if(currentDateHTML) // raha misy, (tsy misy mantsy ito rehefa miova mois)
        currentDateHTML.classList.remove('currentDate')
    item.classList.add('currentDate')
    month = m;
    currentDate = d
    if(m > 12) {
        month = 1
        year++
    } else if(m < 1) {
        month = 12
        year--
    }
    listMatch((`${year}-${month}-${currentDate}`))
}
/* end calendar */