/* function startMachine(callback:Function) {

    setTimeout(async () => {
        console.log("Machine Started");
        callback();
    }, 5000);
}

function boilWater(callback:Function) {

    setTimeout(async () => {
        console.log("Boil Water");
        callback();
    }, 2000);
}

function addToCoffePowder(callback:Function) {

    setTimeout(async () => {
        console.log("Add Coffe Powder");
        callback();
    }, 3000);
}

function pourIntoCup() {

    setTimeout(async () => {
        console.log("Pour into the Cup!");
    }, 4000);
}




 startMachine();
boilWater();
addToCoffePowder();
pourIntoCup();

startMachine(() => {
    boilWater(() => {
        addToCoffePowder(() => {
            pourIntoCup()
        });
    }); 
}); */


//Promises Chaining

function startMachine(): Promise<void> {

    return new Promise<void>((resolve, reject) => {

        setTimeout(() => {
            let success = true;
            if (success) {
                console.log("Start Machine");
                resolve();
            } else {
                console.log("Machine start failed!");
                reject();
            }

        }, 2000)
    })
}


function boilWater():Promise<void> {

    return new Promise<void>((resolve, reject) => {

        setTimeout(() => {
            let success = true;
            if (success) {
                console.log("Boil Water");
                resolve();
            } else {
                console.log("Boil Water failed!");
                reject();
            }

        }, 5000)
    })
}

function addMilk(): Promise<void> {

    return new Promise<void>((resolve, reject) => {

        setTimeout(() => {
            let success = true;
            if (success) {
                console.log("Milk Added");
                resolve();
            } else {
                console.log("Adding milk failed!");
                reject();
            }

        }, 3000)
    })
}

function addToCoffePowder(): Promise<void> {

    return new Promise<void>((resolve, reject) => {

        setTimeout(() => {
            let success = true;
            if (success) {
                console.log("Coffe Powder Added");
                resolve();
            } else {
                console.log("failed to add coffee Powder!");
                reject();
            }

        }, 4000)
    })
}


/* startMachine().then(() =>
    boilWater()).then(() =>
        addMilk()).then(() =>
            addToCoffePowder()); */

//Asyc await

async function test(){
    await startMachine();
    await boilWater();
    await addMilk();
    addToCoffePowder();

}

test();