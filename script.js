let products = [
    {
        "name": "Black Tea",
        "description": "Comes from the Camellia sinensis plant. Black tea leaves are allowed to fully oxidize before being processed and dried, which makes the leaves dark brown and gives the tea its signature flavor profile.",
        "price": '12',
        "amount": "",
        "image": "./imgs/black-tea.jpg"
    },
    {
        "name": "Green Tea",
        "description": "Sweet, bittersweet, nutty, vegetal, buttery, floral, swampy, fruity, and oceanic. Steamed green teas tend to taste bittersweet (especially in the aftertaste), while other green teas tend to taste sweet",
        "price": "20",
        "amount": "",
        "image": "./imgs/green-tea.jpg"
    },
    {
        "name": "Lemon Tea",
        "description": "Lemon tea is prepared using black tea or green tea and by adding the right amount of lemon juice to it. When you add lemon juice to your tea, it changes the colour of tea. Super healthy and recommended.",
        "price": "150",
        "amount": "",
        "image": "./imgs/lemon-tea.jpeg"
    }

]

const checkoutWrapper = document.querySelector("#checkout-wrapper")
const currProductsAmount = document.createElement("DIV")
const newSpan = document.createElement("SPAN")
const checkoutBtn = document.createElement("BUTTON")
const Br = document.createElement("BR")
const checkoutMsgDiv = document.createElement("DIV")
let checkoutMsg = "Thank you for buying!"
const totalItemsAmountTitel = document.createElement("SPAN")
const totalItemsAmountNum = document.createElement("SPAN")
const totalPriceTitel = document.createElement("SPAN")
const totalPriceNum = document.createElement("SPAN")

products.forEach((product) => {
    const productsContainer = document.querySelector('#products-container')
    const newProduct = document.createElement('DIV')
    const newProductHeader = document.createElement('H2')
    const newDescription = document.createElement('P')
    const newProductPriceTitel = document.createElement('DIV')
    const newProductPriceNum = document.createElement('SPAN')
    const newProductAmount = document.createElement('DIV')
    const newProductAmountTitel = document.createElement('SPAN')
    const newProductAmountNum = document.createElement('INPUT')
    const newAddBtn = document.createElement('BUTTON')
    const newProductImg = document.createElement('IMG')




    //Product card 
    productsContainer.appendChild(newProduct)
    newProduct.classList.add("product")

    //Product image
    newProduct.appendChild(newProductImg)
    newProductImg.setAttribute("src", `${product.image}`)
    newProductImg.setAttribute("alt", `${product.name} image `)
    newProductImg.classList.add("productImg")

    //Product header
    newProduct.appendChild(newProductHeader)
    newProductHeader.textContent = product.name
    newProductHeader.classList.add("productTitle")

    //Product description
    newProduct.appendChild(newDescription)
    newDescription.textContent = product.description
    newDescription.classList.add("productDescription")

    //Product price titel
    newProduct.appendChild(newProductPriceTitel)
    newProductPriceTitel.textContent = 'Price:'
    newProductPriceTitel.classList.add("productPriceTitel")

    //Product price number
    newProduct.appendChild(newProductPriceNum)
    newProductPriceNum.textContent = product.price + '$'
    newProductPriceNum.classList.add("productPriceNum")

    //Product amount wrapper
    newProduct.appendChild(newProductAmount)
    newProductAmount.classList.add("productAmount")

    //Product amount titel
    newProductAmount.appendChild(newProductAmountTitel)
    newProductAmountTitel.textContent = 'Amount:'

    //Product amount number
    newProductAmount.appendChild(newProductAmountNum)
    newProductAmountNum.textContent = product.amount
    newProductAmountNum.classList.add("inputBar")
    newProductAmountNum.setAttribute("type", "number")

    //Add btn
    newProduct.appendChild(newAddBtn)
    newAddBtn.textContent = "Add"
    newAddBtn.classList.add("addBtn")
})



checkoutWrapper.appendChild(Br)

// //Checkout MSG
// checkoutWrapper.appendChild(checkoutMsgDiv)
// checkoutMsgDiv.textContent = checkoutMsg
// checkoutMsgDiv.classList.add("checkoutMsg")

// checkoutWrapper.appendChild(Br)


//Products amount 
checkoutWrapper.appendChild(totalItemsAmountTitel).textContent = "Total amount of items:"
totalItemsAmountTitel.classList.add("totalItemsAmount")
checkoutWrapper.appendChild(totalItemsAmountNum)
totalItemsAmountNum.classList.add("totalItemsAmoun")

checkoutWrapper.appendChild(Br)

//products price
checkoutWrapper.appendChild(totalPriceTitel).textContent = "Total price of items:"
totalPriceTitel.classList.add("totalPrice")
checkoutWrapper.appendChild(totalPriceNum)
totalPriceNum.classList.add("totalPrice")


//checkout Btn
checkoutWrapper.appendChild(checkoutBtn)
checkoutBtn.textContent = "Pay now"
checkoutBtn.setAttribute("class", "checkoutBtn")



