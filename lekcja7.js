function test1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Raz");//wykonuje consol loga Raz
            resolve();//odcinamy się z obietnicy 
        }, 500)
    })
}

function test2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Dwa");
            resolve();
        }, 300)
    })
}

function test3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Trzy");
            resolve();
        }, 400)
    })
}
// wykonanie funkcji bezpośrenio: winik: Dwa,Trzy,Raz
test1();
test2();
test3();
// wynonywanie funkcji w async i await (await musi być wykonywany w funkcji async)
async function wykonajFunkcjePozostale(){
    await test1();
    await test2();
    await test3();
}

wykonajFunkcjePozostale();
