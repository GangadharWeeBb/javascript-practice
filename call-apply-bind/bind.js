/*
bind() method creates a new function that, when called, has its this keyword
set to provide value

It lets us explicitly define the value of this when calling the function
*/


var pokemon = {
    firstName :'poke',
    lastName :'chu',
    getPokeName() {
        var fullName = this.firstName + this.lastName;
        return fullName;
    }
}
var pokemonName = function(snack, hobby) {
    console.log(this.getPokeName() + 'I choose you');
    console.log(this.getPokeName()+'loves'+snack+'and'+hobby)
}
var logPokemon = pokemonName.bind(pokemon)
//creates new object and binds pokemon,'this'  of pokemon === pokemon now
logPokemon('sushi', 'algorithms')
/*
js engine is creating a new pokemonName instance and binding pokemon as its this variable
here it copies the pokemonName function

-after creating a copy of pokemonName function it is able o clal logPokemon() although it wasnt on pokemon object initially
it will now recoginzes it properties and its methods

after we bind() a value we can use the function just like any other normal function
*/