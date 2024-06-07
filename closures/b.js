function x(){
    var a = 10;
    y();
    function y(){
        console.log(10)
    }
}
x();