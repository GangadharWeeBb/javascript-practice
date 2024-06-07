/*
call() method calls a function with a given "this" value and arguments provided individually

when we call any function and explicitly specify what "this"
should reference within the calling function

call() method doesnot make a copy of function it is being called on.
call accepts all parameters to be passed in indvidually
*/
let pokemon = {
    firsName : "pika",
    lastName : 'chu',
    getPokemon : function() {
        let fullName = this.firsName +" "+this.lastName
        return fullName;
    }
}
let pokemonName = function(snack, hobby) {
    console.log(this.getPokemon() + ' loves ' + snack+'and ' + hobby)
}
pokemonName.call(pokemon, 'sushi', 'algorithms')
pokemonName.apply(pokemon,['sushi','algorithms'])

/*
call and apply serve exact same purpose. only diff between is how tehey work that
call accepts all parameters to be passed individually 
apply accepts an array of all our parameters

*/