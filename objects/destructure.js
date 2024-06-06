//basic syntax : let{var1,var2} ={var1:..,var2:...}
let options = {
    title:"menu",
    width:100,
    height:20,
}
// let {title, width, height} = options;
// console.log(title);
// console.log(width);
// console.log(height)
let {width:w, title, height:h} = options;
console.log(w)
console.log(h)
console.log(title);

let option = {
    titl:"abc",
    height:100,
    width:233
}
let{titl, ...rest} = option;
console.log(rest.height, rest.width)

let a = {
    sizes:{
        widths :100,
        heights:199
    },
    items:["cake","donuts"],
    extra:true
}
let{sizes:{widths,heights}, items:[item1,item2],titles='memu'}=options;
