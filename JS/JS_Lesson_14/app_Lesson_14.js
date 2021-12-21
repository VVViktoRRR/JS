// Promise

// function morning (time){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(`Жизнь обычного человека`);
//             if (time < 6 ){
//                 console.log(`Рано, до 6:00 ещё есть время - спи дальше`)
//                 reject(`Спать`)
//             } else {
//                 console.log(`6:00 Просыпайся`)
//                 resolve (`Подъём`)
//             }
//         }, 600);
//     })
// }
// function morning1 (time){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log(`Проснулся`);
//             resolve()
//         }, 300)
//     } )
// }
// function morning2 (time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`Включил чайник`);
//             resolve()
//         }, 500)
//     })
// }
// function morning3 (time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`Умылся`);
//             resolve()
//         }, 300)
//     })
// }
// function morning4 (time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`Сделал кофе`);
//             resolve()
//         }, 700)
//     })
// }
// function morning5 (time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`Время курить`);
//             resolve()
//         }, 400)
//     })
// }
// function morning6 (time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`Завтрак`);
//             resolve()
//         }, 1500)
//     })
// }
// function morning7 (time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`Водные процедуры`);
//             resolve()
//         }, 1400)
//     })
// }
// function morning8 (time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`Выезд на работу`);
//             resolve()
//         }, 800)
//     })
// }
// function morning9 (time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`Начало работы`);
//             resolve()
//         }, 2000)
//     })
// }
// function morning10 (time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//         }, 200)
//     })
// }
// morning(5)
//
// .then((value)=>{
//     console.log(`Молодец`)
//     console.log(value, `Казак`)
//     return morning1();
// })
//     .then(() => {
//         return morning2();
//         })
//     .then (()=>{
//     return morning3()
//         })
//     .then (()=>{
//         return morning4()
//     })
//     .then (()=>{
//         return morning5()
//     })
//     .then (()=>{
//         return morning6()
//     })
//     .then (()=>{
//         return morning7()
//     })
//     .then (()=>{
//         return morning8()
//     })
//     .then (()=>{
//         return morning9()
//     })
//     .then (()=>{
//         return morning10()
//     })
//
// .catch(reason =>{
//     console.log(`************** !!!!!!!!!!************`)
//     console.log(reason)
//     console.log(`************** !!!!!!!!!!************`)
// });

// Async/await:
//
// function morning0 (time, ){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             console.log(`Жизнь обычного человека`);
//             if (time < 6 ){
//                 console.log(`Рано - спи дальше`)
//                 reject(`Спать`)
//             } else {
//                 console.log(`6:00 Просыпайся`)
//                 resolve (`Подъём`)
//             }
//         }, 600);
//     })
// }
// function morning11 (time){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             console.log(`Проснулся`);
//             resolve()
//         }, 300)
//     } )
// }
// function morning21 (time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`Включил чайник`);
//             resolve()
//         }, 500)
//     })
// }
// function morning31 (time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`Умылся`);
//             resolve()
//         }, 300)
//     })
// }
// function morning41 (time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`Сделал кофе`);
//             resolve()
//         }, 700)
//     })
// }
// function morning51 (time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`Время курить`);
//             resolve()
//         }, 400)
//     })
// }
// function morning61 (time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`Завтрак`);
//             resolve()
//         }, 1500)
//     })
// }
// function morning71 (time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`Водные процедуры`);
//             resolve()
//         }, 1400)
//     })
// }
// function morning81 (time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`Выезд на работу`);
//             resolve()
//         }, 800)
//     })
// }
// function morning91 (time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`Начало работы`);
//             resolve()
//         }, 2000)
//     })
// }
// function morning101 (time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             console.log(`Обед`);
//            }, 200)
//     })
// }
// async function WorkingDay(){
//     const day = await morning0( 6)
//     await morning11();
//     await morning21();
//     await morning31();
//     await morning41();
//     await morning51();
//     await morning61();
//     await morning71();
//     await morning81();
//     await morning91();
//     await morning101();
// }
// WorkingDay().then();


// Callback

function morning (time, cb){
           setTimeout(()=>{
            console.log(`Жизнь обычного человека`);
            if (time < 6 ){
                console.log(`Рано, до 6:00 ещё есть время - спи дальше`);
              } if  (time > 6 ) {
                   console.log('Проспал !!!! ');
               }
            else {
                console.log(`6:00 Просыпайся`);
                cb (`Подъём`);
            }
        }, 600);

}
function morning1 (time, cb){
           setTimeout(()=>{
            console.log(`Проснулся`);
               cb();
        }, 300)
}
function morning2 (time, cb){
        setTimeout(()=>{
            console.log(`Включил чайник`);
            cb();
        }, 500)
}
function morning3 (time, cb){
        setTimeout(()=>{
            console.log(`Умылся`);
            cb();
        }, 300)
 }
function morning4 (time, cb){
           setTimeout(()=>{
            console.log(`Сделал кофе`);
               cb();
        }, 700)
}
function morning5 (time, cb){
        setTimeout(()=>{
            console.log(`Время курить`);
            cb();
        }, 400)
}
function morning6 (time, cb){
        setTimeout(()=>{
            console.log(`Завтрак`);
            cb();
        }, 1500)
}
function morning7 (time, cb){
        setTimeout(()=>{
            console.log(`Водные процедуры`);
            cb();
        }, 1400)
}
function morning8 (time, cb){
        setTimeout(()=>{
            console.log(`Выезд на работу`);
            cb();
        }, 800)
}
function morning9 (time, cb){
        setTimeout(()=>{
            console.log(`Начало работы`);
            cb();
        }, 2000)
}
function morning10 (time, cb){
        setTimeout(()=>{
            console.log(`Обед`);
            cb();
        }, 200)
}

let time = 6;

morning (time, ((morning)=>{
    morning1(time, ((morning1)=>{
        morning2(time, ((morning2)=>{
            morning3(time, ((morning3) => {
                morning4(time, ((morning4) =>{
                    morning5(time, ((morning5) =>{
                        morning6(time, ((morning6) =>{
                            morning7(time, ((morning7) =>{
                                morning8(time, ((morning8) => {
                                    morning9(time, ((morning9) => {
                                        morning10(time, (morning10) => {
                                            console.log('Поели - можно и поспать )))');
                                        });
                                    }))
                                }))
                            }))
                        }))
                    }))
                }));
            }));
        }))
    }))
}))
