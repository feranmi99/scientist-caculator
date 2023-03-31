
function mynumber(done) {
    user.value += done
    // console.log(user.value);
}
function myac() {
    var result = eval(user.value);
    user.value = result;

}
function clear() {
    user.pop()
    user.value = hh
}
function sig () {
        cart.push(user.value)
        // user.value = ""
        console.log(cart);
}