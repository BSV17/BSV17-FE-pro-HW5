const errorMessage = "Введены некорректные данные";

function isNumber(n) {
    return typeof n === "number" && !Number.isNaN(n);
}

function circleSquare(radius) {
    if (isNumber(radius)) {
        return Math.PI * (radius ** 2);
    }

    return errorMessage;
}

console.log("Площать круга: " + circleSquare('fdhj'));

function circleCircumference(radius) {
    if (isNumber(radius)) {
        return Math.PI * (radius * 2);
    }

    return errorMessage;
}

console.log("Длина окружности: " + circleCircumference(3));

function average(x, y) {
    if (isNumber(x) && isNumber(y)) {
        return (x + y) / 2;
    }

    return errorMessage;
}

console.log("Среднее арифметическое: " + average(4, 6));

function calc(x, y, action) {
    if (isNumber(x) && isNumber(y)) {
        switch (action) {
            case "+":
                return (x + y);
                break;
            case "-":
                return (x - y);
                break;
            case "*":
                return (x * y);
                break;
            case "/":
                return (x / y);
                break;
            case "%":
                return (x % y);
                break;
            case "^":
                return (x ^ y);
                break;
        }
        
    }

    return errorMessage;
}

console.log("Результат функции: " + calc(9, 7, "/"));
