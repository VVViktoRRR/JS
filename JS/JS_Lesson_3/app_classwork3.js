// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
let array = [2,17,13,6,22,31,45,66,100,-18];

// 1. перебрати його циклом while
let i = 0;
while (i < array.length) {
    console.log(array[i]);
    i++;
}
// 2. перебрати його циклом for
for (i = 0; i < array.length; i++) {
    console.log(array[i]);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i=0;
while (i < array.length) {
    if ( i%2 === 1 ) {
        console.log(`${array.indexOf(array[i])} : ${array[i]}`);
        document.write( `<div> ${array.indexOf(array[i])} :  ${array[i]} </div>`);
    }
    i++;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (i = 0; i < array.length; i++) {
    if ( i%2 === 1) {
        console.log(`${array.indexOf(array[i])} : ${array[i]}`);
        document.write( `<div> ${array.indexOf(array[i])} :  ${array[i]} </div>`);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while ( i < array.length) {
    if ( array[i]%2 === 0 ) {
        console.log(array[i]);
        document.write(`<div> ${array[i]} </div>`);
    }
    i++;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (i = 0; i < array.length; i++) {
    if (array[i]%2 === 0 ) {
        console.log(array[i]);
        document.write(`<h3> ${array[i]} </h3>`)
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
for (i = 0; i < array.length; i++) {
    if (array[i]%2 === 1 ) {
        array[i] = 'okten';
    }
}
console.log(array);
// 8. вивести масив в зворотньому порядку.
let arrayRev = array.reverse();
console.log(arrayRev);

// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
// _______________________________________________________________________________________
// 1. перебрати його циклом while
let arr = [2,17,13,6,22,31,45,66,100,-18];
i = arr.length-1;
while ( i >= 0 ) {
    console.log(arr[i]);
    document.write(`<div> ${arr[i]} </div>`)
    i--;
}
// 2. перебрати його циклом for
for (i = arr.length-1; i >= 0 ; i--) {
    console.log(arr[i]);
}
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = arr.length-1;
while (i >= 0 ) {
    if ( i%2 ===1 ) {
        console.log(`${arr.indexOf(arr[i])} : ${arr[i]}`);
    }
    i--;
}
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for ( i = arr.length-1; i >= 0; i--) {
    if ( i%2 ===1 ) {
        console.log(`${arr.indexOf(arr[i])} : ${arr[i]}`);
    }
}
// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = arr.length-1;
while ( i >= 0) {
    if (arr[i]%2 ===0 ) {
        console.log(arr[i]);
    }
    i--;
}
// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (i = arr.length-1; i >= 0; i--) {
    if ( arr[i]%2 === 0 ) {
        console.log(arr[i]);
    }
}
// 7. замінити кожне число кратне 3 на слово "okten"
document.write(`<hr>`)
for (i = arr.length-1; i >= 0; i--) {
    if ( arr[i]%2 === 1 ) {
        arr[i] = 'OKTEN';
    }
    document.write(`<div> ${arr[i]} </div>`);
}