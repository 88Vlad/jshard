"use strict";

// Создаем функцию
const processString = (input) => {
    // Проверяем, является ли аргумент строкой
    if (typeof input !== 'string') {
        alert('Пожалуйста, введите строку');
        return; // Выходим из функции, если аргумент не строка
    }

    // Убираем пробелы в начале и в конце строки
    const trimmedString = input.trim();

    // Проверяем длину строки
    if (trimmedString.length > 30) {
        // Если строка более 30 символов, скрываем лишнее и добавляем три точки
        return trimmedString.substring(0, 30) + '...';
    }

    // Возвращаем обработанную строку
    return trimmedString;
}

// Пример использования функции
const inputString = "  Это строка с пробелами в начале и в конце   ";
const processedString = processString(inputString);
console.log(processedString); // Выведет: "Это строка с пробелами в н..."