const printString = (string) => {
    return new Promise(( resolve, reject )=>{
        setTimeout(()=>{
            console.log(string);
            resolve();
        },
        Math.floor( Math.random() *100 ) +1
        )
    })
}

const printAll = () => {
    printString("A")
    .then(()=>{
        printString("B")
    })
    .then(()=>{
        printString("C")
    })
}
printAll();