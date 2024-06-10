//promises are used to handle async operations in JS

/**
 * by using promises we resolves callback hell and inversion control
 */
const cart1 = ["shoes", "shirts", "pants"];
function validCart(cart) {
    return cart.length > 0 ;
}
function createOrder(cart) {
    return new Promise((resolve, reject) => {
        if(!validCart(cart)) {
            const err = new Error("cart is not valid");
            reject(err);
        }
        else{
            const orderId = '12';
            console.log(cart);
            resolve(orderId);
        }
    })
}
function proceedPayment(orderId) {
    return new Promise((resolve, reject) => {
        console.log(orderId);
        resolve("payment successfull")
    })
}
function showOrderSummary(payInfo) {
    return new Promise((resolve, reject) => {
        const orderSummary = "xyz";//dummy order summary
        console.log(orderSummary)
        resolve(orderSummary)
    })

}
function updateWalletBalance(balance) {
    return new Promise((resolve, reject) => {
        const updateBalance = "$100"//dummy balance
        console.log(updateBalance)
        resolve(updateBalance);
    })
}

createOrder(cart1)
.then((orderId)=>proceedPayment(orderId))
.then((payInfo)=>showOrderSummary(payInfo))
.then((balance)=>updateWalletBalance(balance))
.then(updateBalance=>console.log("process complete" + updateBalance))
.catch(error => console.error(error.message));
