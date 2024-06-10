console.log("Anime");
setTimeout(()=>{
    console.log("Onepiece")
},2000);
console.log("name")
//here we are delaying the execution using setTimout api

/**
Assume a scenario of e-Commerce web, where one user is placing order, he has added items like, shoes, pants and kurta in cart and now he is placing order. So in backend the situation could look something like this.
 */
const cart = ["shoes", "pants", "kurt"];
//create a order
//payement
api.createOrder();
api.proceedToPayment();

/**
 * Assumption, once order is created then only we can proceed to payment, so there is a dependency. So How to manage this dependency. Callback can come as rescue,
 */
api.createOrder(cart, function() {
    api.proceedToPayment();
})
//here createOrder api is first creating order then it is responsible to call 
// procedTOpay api :api.proceedtoPay as part of callback
/**
 * To make it a bit complicated, what if after payment is done, you have to show Order summary by calling api.showOrderSummary() and now it has dependency on api.proceedToPayment()
 * i want to upadate a wallet
 */
api.createOrder(cart, function() {
    api.proceedToPayment(function() {
        api.showOrderSummary(function(){
            api.updateWallet
        });
    })
})
//THis creates callback hell

//lets see inversion of control
//it is like you lose the control of code when we are using callback

api.createOrder(cart, function() {
    api.proceedToPayement();
})
/**
 * Here we are creating order and blindly trusting creatOrder to call proceedtoPayment
 * it is risky , as pay is imp part of code and we are blindly trusting createorder to call it and handle it
 * 
 * When we pass a function as callback, basically we are dependant on our parent function that is resp to run that function
 * this is called inversion of control, we are dependent on function
 * lets say parent fun is stoped to work, what if callback run two times or never run at all
 */
const orderId = createOrder(cart);
proceedToPayement(orderId);
createOrder(cart, function(){
    proceedToPayement(orderId)
})
//causes inversion of control


//withoutcallback
function createOrder(cart){
    console.log(cart);
    return "12"//dummy orderid
}
function payment(orderNo){
    console.log(orderNo)
}
const orderNo = createOder(cart);
payment(orderNo);


//with callbacks
const cart1 = ["shoes","abc",'asdf'];
function createOder(cart, callback) {
    const orderNum = "123";
    console.log(cart1)
    callback(orderNum);
}
function proceedPayment(orderId) {
    console.log(orderNum);
}
const orderNum = createOder(cart1);
createOrder(function(orderNum) {
    proceedPayment(orderNum)
})
