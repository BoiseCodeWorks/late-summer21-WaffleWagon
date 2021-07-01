const totalElem = document.getElementById('total')

const food = {
  waffle: {
    name: 'waffle',
    price: 4.99,
    img: 'assets/imgs/waffle.jpg'
  },
  syrup: {
    name: 'syrup',
    price: .50,
    img: 'assets/imgs/syrup.jpg'
  },
  strawberry: {
    name: 'strawberry',
    price: 2.35,
    img: 'assets/imgs/strawberry.jpg'
  },
  banana: {
    name: 'banana',
    price: 1.15,
    img: 'assets/imgs/banana.jpg'
  },
  topping: {
    name: 'topping',
    price: .15,
    img: 'assets/imgs/whipped-topping.jpg'
  },
  butter: {
    name: 'butter',
    price: .35,
    img: 'assets/imgs/butter.jpg'
  }
}


let cart = []

function drawTotal() {
  let total = 0
  for (let i = 0; i < cart.length; i++) {
    const item = cart[i]
    total += item.price
  }
  totalElem.innerText = total.toFixed(2)
}

function drawCart() {
  let template = ''
  cart.forEach(item => template += `<li>${item.name} - $${item.price.toFixed(2)}</li>`)
  document.getElementById('cart-items').innerHTML = template
}

function drawMenu() {
  let template = ''
  for (let key in food) {
    let item = food[key]
    template += `
      <div class="col-4">
        <div class="bg-light shadow text-primary rounded">
          <img class="w-100 rounded-top" src="${item.img}" alt="yummy ${item.name}">
          <div class="d-flex justify-content-between p-2">
            <h4>${item.name}</h4>
            <h4>$${item.price.toFixed(2)}</h4>
          </div>
          <div class="text-center pb-2">
            <button type="button" class="btn btn-outline-primary" onclick="buyItem('${item.name}')">Buy</button>
          </div>
        </div>
      </div>`
  }
  document.getElementById('menu-items').innerHTML = template
}






// SECTION phase 1
// let total = 0

function buyItem(itemName) {
  cart.push(food[itemName])
  drawTotal()
  drawCart()
}

// #region SECTION phase 2
// function buySyrup() {
//   // SECTION first try
//   // total += 4.99
//   // NOTE toFixed converts the number to a string and specifies the numer of decimal points
//   // document.getElementById('total').innerText = total.toFixed(2)

//   cart.push(food.syrup)
//   drawTotal()
//   drawCart()
// }

// function buyWaffle() {
//   // SECTION first try
//   // total += 4.99
//   // NOTE toFixed converts the number to a string and specifies the numer of decimal points
//   // document.getElementById('total').innerText = total.toFixed(2)

//   cart.push(food.waffle)
//   drawTotal()
//   drawCart()
// }
//#endregion


function checkout() {
  cart = []
  drawTotal()
  drawCart()
}

let count = 0
let signElem = document.getElementById('sign')
let partyInterval;
function partyMode() {
  // // run a function every interval number of miliseconds
  // document.querySelectorAll('div').forEach(elem => elem.classList.add('spin'))
  // setTimeout(() => {
  //   document.querySelectorAll('div').forEach(elem => elem.classList.remove('spin'))
  // }, 1500)

  // partyInterval = setInterval(() => {
  //   count++
  //   if (count % 2) {
  //     // remove class for yellow
  //     signElem.classList.remove('flashy-border-yellow')
  //     // add class for primary
  //     signElem.classList.add('flashy-border-primary')
  //   }
  //   else {
  //     // remove class for primary
  //     signElem.classList.remove('flashy-border-primary')
  //     // add class for yellow
  //     signElem.classList.add('flashy-border-yellow')
  //   }
  // }, 500);
}

setInterval(() => {
  count++
  if (count % 2) {
    // remove class for yellow
    signElem.classList.remove('flashy-border-yellow')
    // add class for primary
    signElem.classList.add('flashy-border-primary')
  }
  else {
    // remove class for primary
    signElem.classList.remove('flashy-border-primary')
    // add class for yellow
    signElem.classList.add('flashy-border-yellow')
  }
}, 500);




drawMenu()