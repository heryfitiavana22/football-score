import {loading} from '../others/animation'

/* calendar */
let date =  new Date(),
    currentDate = date.getDate(),
    monthSelected = date.getMonth() + 1, // mois selectionné (miova rehefa manao setDate)
    currentMonth = monthSelected, // ilay miovaova rehfe upMonth sy down
    yearSelected = date.getFullYear(), // annee selectionné (miova rehefa manao setDate)
    currentYear = yearSelected; // ilay miovaova rehfe upMonth sy down

export function createCalendar(month,year,date) {
    let currentMonthHTML = document.querySelector('.current-date'),
        tbody = document.querySelector('.day-container tbody');

    let monthText = ['January','February','Mars','April','May','June','July','August','September','October','November','December'];

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
            dayContainer += `<td><span class="day-item day-out" onclick="calendar.setDate(false, ${month-1},${endMonthBefore})">${endMonthBefore}</span></td>`;
            endMonthBefore++;
        } else {
            // premiere jour du mois
            if((countDay === date) && (month === monthSelected) && (year === yearSelected)) { // raha date courant
                dayContainer += `<td><span class="day-item currentDate">${countDay}</span></td>`;
            } else {
                dayContainer += `<td><span class="day-item" onclick="calendar.setDate(false, ${month},${countDay})">${countDay}</span></td>`;
            }
            countDay++;
        }
    }
    dayContainer += '</tr>';

    // créer la seconde
    dayContainer += '<tr class="day" >';
    for(let i=1; i<=7; i++) {
        if((countDay === date) && (month === monthSelected) && (year === yearSelected)) { // raha date courant
            dayContainer += `<td><span class="day-item currentDate">${countDay}</span></td>`;
        } else {
            dayContainer += `<td><span class="day-item" onclick="calendar.setDate(false, ${month},${countDay})">${countDay}</span></td>`;
        }
        countDay++;
    }
    dayContainer += '</tr>';

    // créer la troiseme
    dayContainer += '<tr class="day" >';
    for(let i=1; i<=7; i++) {
        if((countDay === date) && (month === monthSelected) && (year === yearSelected)) { // raha date courant
            dayContainer += `<td><span class="day-item currentDate">${countDay}</span></td>`;
        } else {
            dayContainer += `<td><span class="day-item" onclick="calendar.setDate(false, ${month},${countDay})">${countDay}</span></td>`;
        }
        countDay++;
    }
    dayContainer += '</tr>';

    // créer la quatrieme
    dayContainer += '<tr class="day" >';
    for(let i=1; i<=7; i++) {
        // verifier si c'est le fin du mois
        if(endMonth >= countDay) {
            if((countDay === date) && (month === monthSelected) && (year === yearSelected)) { // raha date courant
                dayContainer += `<td><span class="day-item currentDate">${countDay}</span></td>`;
            } else {
                dayContainer += `<td><span class="day-item" onclick="calendar.setDate(false, ${month},${countDay})">${countDay}</span></td>`;
            }
            countDay++;
        } else {
            // si c'est apres la fin du mois
            dayContainer += `<td><span class="day-item day-out" onclick="calendar.setDate(false, ${month+1},${dayAfterMonth})">${dayAfterMonth}</span></td>`;
            dayAfterMonth++;
        }
    }
    dayContainer += '</tr>';

    // créer la cinquieme
    dayContainer += '<tr class="day" >';
    for(let i=1; i<=7; i++) {
        // verifier si c'est le fin du mois
        if(endMonth >= countDay) {
            if((countDay === date) && (month === monthSelected) && (year === yearSelected)) { // raha date courant
                dayContainer += `<td><span class="day-item currentDate">${countDay}</span></td>`;
            } else {
                dayContainer += `<td><span class="day-item" onclick="calendar.setDate(false, ${month},${countDay})">${countDay}</span></td>`;
            }
            countDay++;
        } else {
            // si c'est apres la fin du mois
            dayContainer += `<td><span class="day-item day-out" onclick="calendar.setDate(false, ${month+1},${dayAfterMonth})">${dayAfterMonth}</span></td>`;
            dayAfterMonth++;
        }
    }
    dayContainer += '</tr>';

    // créer la sixieme
    dayContainer += '<tr class="day" >';
    for(let i=1; i<=7; i++) {
        // verifier si c'est le fin du mois
        if(endMonth >= countDay) {
            if((countDay === date) && (month === monthSelected) && (year === yearSelected)) { // raha date courant
                dayContainer += `<td><span class="day-item currentDate">${countDay}</span></td>`;
            } else {
                dayContainer += `<td><span class="day-item" onclick="calendar.setDate(false, ${month},${countDay})">${countDay}</span></td>`;
            }
            countDay++;
        } else {
            // si c'est apres la fin du mois
            dayContainer += `<td><span class="day-item day-out" onclick="calendar.setDate(false, ${month+1},${dayAfterMonth})">${dayAfterMonth}</span></td>`;
            dayAfterMonth++;
        }
    }
    dayContainer += '</tr>';

    currentMonthHTML.innerHTML = monthText[month-1] + ' ' + year;
    document.querySelector('#icon-toggle-calendar').style.visibility = 'visible'
    tbody.insertAdjacentHTML('beforeend', dayContainer)
    document.querySelector('#close-calendar').addEventListener('click', () => {
        document.querySelector('.actual').style.top = '-100%'
    })
}

/* mampidina mois */
export function downMonth() {
    currentMonth--;
    // si annee precedent
    if(currentMonth < 1) {
        currentYear--;
        currentMonth = 12;
    }
    deleteCurrentMonth();
    createCalendar(currentMonth, currentYear, currentDate);
}

/* mampiakatra mois */
export function upMonth() {
    currentMonth++;
    // si anne suivant
    if(currentMonth > 12) {
        currentYear++;
        currentMonth = 1;
    }
    deleteCurrentMonth();
    createCalendar(currentMonth, currentYear, currentDate);
}

/* mamafa anle mi-affiche eo */
export function deleteCurrentMonth() {
    let dayContainer = document.querySelectorAll('.day');
    dayContainer.forEach(e => e.remove())
}

/* maka ireo annee, mois , date courant */
export function getCurrentDate() {
    return {
        currentYear, currentMonth, currentDate
    }
}

let currentIdLeague = undefined; // tazomina le idLeague jerena raha misy
/* manova date */
export async function setDate(isPopState=false, m, d, idLeague, toDisplay) {
    window.scroll(0,0)
    // hideCalendar (valable ito rehefa le ecran <= 768)
    let actualContainer = document.querySelector('.actual')
    if(actualContainer) actualContainer.style.top = '-100%' // raha misy
    loading()

    if(idLeague !== undefined) currentIdLeague = idLeague // raha misy valeur vao ovaina
    // console.log('currentIdLeague');
    // console.log(currentIdLeague);
    currentMonth = m;
    currentDate = d
    if(m > 12) {
        currentMonth = 1
        currentYear++
    } else if(m < 1) {
        currentMonth = 12
        currentYear--
    }
    monthSelected = currentMonth;
    yearSelected = currentYear;
    
    let listMatch = await import('../listMatch/listMatch');
    listMatch.listMatch(isPopState, (`${currentYear}-${currentMonth}-${currentDate}`), currentIdLeague, toDisplay)
}
/* end calendar */