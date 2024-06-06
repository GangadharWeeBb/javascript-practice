let anime = {
    name : "onepiece",
    year : 1999,
    mc : "luffy"
};
console.log(anime.name);
let key = "mc";
console.log(anime.key); // Undefined - dot notation cant be used this way
console.log(anime[key]);

//Property value shorthand
function makeUser(name, age) {
    return {
        name : name,
        age : age,
    };
}
let user = makeUser("john", 30)
console.log(user)

//As we already know, a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.
//But for an object property, there’s no such restriction:
let obj = {
    for: 1,let:2,return:3
};
console.log(obj.for + obj.let + obj.return);
//for in
console.log("year" in anime);
for (element in anime) {
    console.log(element)
    console.log(anime[element])
}


