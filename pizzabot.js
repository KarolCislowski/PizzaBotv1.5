const pizzaPrice = 80

const output = document.getElementById("alert")
const pizzaQuantity = document.getElementById("orderQuantity")
let orderName
let timeLeft = 0

const setName = (name) => {
  orderName = name
  document.querySelectorAll(".pizza").forEach(pizza => {
    pizza.classList.remove("chosen")
  })
  document.getElementById(name).classList.add("chosen")
}

const checkOrderName = (orderName) =>  {
  if (orderName === "vegetarian" || orderName === "hawaiian" || orderName === "pepperoni") {
    return true
  } else {
    return false
  }
}

const totalCost = (orderQuantity) => {
  return orderQuantity * pizzaPrice
}

const cookingTime = (orderQuantity) => {
  if (orderQuantity >= 6) {
    return 20
  } else if (orderQuantity >= 3) {
    return 15
  } else {
    return 10
  }
}

// Extracting 1second from prep time and display the timer
const countDown = () => {
  if (timeLeft >= 1) {
    timeLeft--
    minutes = Math.floor(timeLeft / 60)
    seconds = timeLeft % 60
    document.getElementById("timer").innerHTML = `Time left to epic feast: ${minutes > 0 ? `${minutes} minutes` : ""}  ${seconds} seconds`
  }
}

// Seting timer 
let timer = setInterval(countDown, 1000)


const order = () => {
  if (checkOrderName(orderName)) {
    let orderQuantity = pizzaQuantity.value
    if (orderQuantity > 0) {
      let orderTotal = totalCost(orderQuantity)
      let prepTime = cookingTime(orderQuantity)
      output.innerHTML = `Great, I'll get started on your ${orderName} pizza right away, it will cost ${orderTotal} kr. The pizzas will take ${prepTime} minutes. `
      timeLeft = prepTime * 60 // minutes to seconds   
      timer
    }
  }
}
