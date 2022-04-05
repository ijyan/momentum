const player = {
    name: 'nico',
    sayHello: function (otherPersonsName){
        console.log('hello! ' + otherPersonsName + ' nice to meet you');
    }
};

console.log(player.name);
player.sayHello('lynn');