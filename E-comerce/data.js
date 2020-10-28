
let rndNumber = Math.random().toString(36).substr(1,4);

let data = {
    fixedemail: 'dummy' + rndNumber + '@mailinator.com',
    dynamicmail: "dummy.yiy@mailinator.com",
    email: 'dummy' + rndNumber + '@mailinator.com',
    firstName: "Pedro",
    lastName: "Barragan",
    password: "88888",
    pbox: "Somewhere underthe Rainbow 1234",
    city: "Mobile",
    state: "Alabama",
    zipCode: "36602",
    country: "United States",
    mobilePhone: "219892828492",
    alias : "My Home"
}

export {data}