let services = []
const washCarBtn = document.getElementById('washCar-btn')
const mowLawnBtn = document.getElementById('mowLawn-btn')
const pullWeedsBtn = document.getElementById('pullWeeds-btn')
const list = document.querySelector('#list-display')
let totalAmount = document.getElementById("total-display")
const sendBtn = document.getElementById("send-btn")
const removeEl = document.getElementById('remove-el')

let sum = 0;
let rendered = false

const washCar = {
    name: "Wash Car",
    price: 10
}

const mowLawn = {
    name: "Mow Lawn",
    price: 20
}

const pullWeeds = {
    name: "Pull Weeds",
    price: 30
}

washCarBtn.addEventListener('click', function(){
    rendered = iterateArray(washCar)
    if (rendered === false) {
        pushToArray(washCar)
        render()
        total()   
    }
    
})

mowLawnBtn.addEventListener('click', function(){
    rendered = iterateArray(mowLawn)
    if (rendered === false) {
        pushToArray(mowLawn)
        render()
        total()   
    }
})
pullWeedsBtn.addEventListener('click', function(){
    rendered = iterateArray(pullWeeds)
    if (rendered === false) {
        pushToArray(pullWeeds)
        render()
        total()   
    }
})

sendBtn.addEventListener("click", resetList)

//functions

//Function to push to array
function pushToArray(el) {
    services.push(el)
}

//function to add total
function total() {
    for(let i = 0; i < services.length; i++){
        sum += services[i].price
        totalAmount.innerHTML = `<p><span>$</span>${sum}</p>`
    }
    sum = 0;
}

function render() {
    let li = document.createElement('li')
    for (let i = 0; i < services.length; i++) {
        li.innerHTML = `<p>${services[i].name}<span class="remove" id="remove-el">remove</span></p> <p><span>$</span>${services[i].price}</p>`
    }
    list.appendChild(li)
}

function iterateArray(n) {
    for (let i = 0; i < services.length; i++) {
        if (services[i].name == n.name ) {
            return true
        }
    } return false
}

//function reset list

function resetList() {
    list.innerHTML = ""
    totalAmount.innerHTML = ""
    services = []
}


