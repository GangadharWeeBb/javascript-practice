// console.log("hi");
// setTimeout(() =>{
//     console.log("helo")
// },1000);
// console.log("hi")
// setTimeout(function () {
//     console.log("times")
// },5000)

//the example we discussed in callabacks can we resolves here

//we can solve inversion control issue using .then(), 
//promises fix promise chaining
createOrder(cart)
    .then(function (orderId) {
        return proceedPayment(orderId)
    })
    .then(function(payInfo){
        return showOrderSummary(payInfo)
    })
    .then(function (balance) {
        return upadateWalletBalanece(balance)
    })
    //with this inversion control issue is solved