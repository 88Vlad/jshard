'use strict'
// массив week
const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// текущий день недели
const currentDayIndex = new Date().getDay();
//вывод дней недели
const daysContainer = document.getElementById('daysContainer');

if (daysContainer) {
    // все дни недели
    week.forEach((day, index) => {
        const dayElement = document.createElement('p');
        dayElement.textContent = day;

        // Выходные дни - курсив
        if (index === 0 || index === 6) {
            dayElement.style.fontStyle = 'italic';
        }

        // Текущий день - жирный
        if (index === currentDayIndex) {
            dayElement.style.fontWeight = 'bold';
        }


        daysContainer.appendChild(dayElement);
    });
} else {
    console.error('daysContainer not found in the document.');
}