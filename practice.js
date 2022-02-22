let animal={
    eats:true
};
let rabbit={
    jumps:true
};
//rabbit.__proto__=animal;
animal.__proto__=rabbit;
alert(rabbit.eats)
alert(animal.jumps)