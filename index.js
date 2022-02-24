//=========================================================//
//==============Variable declarations=====================//
//========================================================//
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

const washCar = {name: "Wash Car", price: 10}
const mowLawn = {name: "Mow Lawn", price: 20}
const pullWeeds = {name: "Pull Weeds", price: 30}

//=================================================//
//===============Events============================//
//=================================================//
washCarBtn.addEventListener('click', function(){
    rendered = iterateArray(washCar)
    if (rendered === false) {
        pushToArray(washCar)
        render(washCar.name, washCar.price)
    }
})

mowLawnBtn.addEventListener('click', function(){
    rendered = iterateArray(mowLawn)
    if (rendered === false) {
        pushToArray(mowLawn)
        render(mowLawn.name, mowLawn.price) 
    }
})
pullWeedsBtn.addEventListener('click', function(){
    rendered = iterateArray(pullWeeds)
    if (rendered === false) {
        pushToArray(pullWeeds)
        render(pullWeeds.name, pullWeeds.price) 
    }
})

sendBtn.addEventListener("click", resetList)

//=======================================================//
//===================FUNCTIONS===========================//
//=======================================================//

//Function to render the invoice
function render(elem, elemPrice) {
    let li = document.createElement('li')
    for (let i = 0; i < services.length; i++) {
        li.innerHTML = `<p>${elem}<span class="remove" id="remove-el">remove</span></p> <p><span>$</span>${services[i].price}</p>`
    }
    sum += elemPrice
    // console.log(sum)
    totalAmount.innerHTML = `<p><span>$</span>${sum}</p>`
    list.appendChild(li)
}

//==========================================//
//Function to push to array
//==========================================//
function pushToArray(el) {
    services.push(el)
}

//========================================================//
//Function to know if the element is already in the array
//========================================================//
function iterateArray(n) {
    for (let i = 0; i < services.length; i++) {
        if (services[i].name == n.name ) {
            return true
        }
    } return false
}

//========================================================//
//function reset list
//========================================================//
function resetList() {
    list.innerHTML = ""
    totalAmount.innerHTML = "<p>$0</p>"
    services = []
    sum = 0
}

//=======================================================//
//Function to remove elements
//=======================================================//
function remove(e) {
    let el = e.target
    var itemSelected = el.parentNode
    var listed = itemSelected.parentNode
    list.removeChild(listed)

    if(listed.textContent === "Wash Carremove $10"){
        services = services.filter(service => service.price != 10)
        sum = services.reduce((acc, num) => acc + num.price, 0)
    } else if(listed.textContent === "Mow Lawnremove $20"){
        services = services.filter(service => service.price != 20)
        sum = services.reduce((acc, num) => acc + num.price, 0)
    } else if(listed.textContent === "Pull Weedsremove $30"){
        services = services.filter(service => service.price != 30)
        sum = services.reduce((acc, num) => acc + num.price, 0)
    }
    totalAmount.innerHTML = `<p><span>$</span>${sum}</p>`
} 

list.addEventListener('click', remove)