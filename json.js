const object = {
    name: 'Stackers DOM',
    address: 'Kolkata',
    employes: {
        frontEnd: {
            emp1: 'Samiul',
            emp2: 'Sakib',
            emp3: 'Sohel'
        },
        backEnd: {
            emp1: 'Rahul',
            mp2: 'Danish',
            emp3: 'Tousif'
        }
    },
    isRunning: false
}

// console.log(object.employes);

const stringified = JSON.stringify(object);
// console.log(stringified);

const jsonToJS = JSON.parse(stringified);
// console.log(jsonToJS);


