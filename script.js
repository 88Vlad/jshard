'use strict'
// массив week и записать в него дни недели в виде строк
const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
// текущий день недели
const currentDayIndex = new Date().getDay();
// контейнер для вывода дней недели
const daysContainer = document.getElementById('daysContainer');

// Убедитесь, что контейнер существует
if (daysContainer) {
    // все дни недели
    week.forEach((day, index) => {
        const dayElement = document.createElement('p');
        dayElement.textContent = day;

        // Выходные дни - курсивом
        if (index === 0 || index === 6) {
            dayElement.style.fontStyle = 'italic';
        }

        // Текущий день - жирным шрифтом
        if (index === currentDayIndex) {
            dayElement.style.fontWeight = 'bold';
        }

        // Добавляем элемент в контейнер
        daysContainer.appendChild(dayElement);
    });
} else {
    console.error('daysContainer not found in the document.');
}

<
!DOCTYPE html >
    ...