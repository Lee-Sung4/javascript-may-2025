
// const lUser = new Object();

const vUser ={}

vUser.id = '256eqs'
vUser.name = 'peter'
vUser.isLoggedIn = false


// console.log(vUser);

const gameCom = {
    name: 'Hoyoverse',
    game:{
        gacha:{
            gachagame1 : 'Genshin Impact',
            gachagame2 : 'HSR',
            gachagame3 : 'ZZZ'
       }
    }

}
// console.log(gameCom.name);
console.log(gameCom.game.gacha.gachagame1);


// object merging

const obj1 = {1: 'a', 2: 'b'}
const obj2 = {3:'c', 4: 'd'}
const obj3 = {5: 'e', 6:'f'}

// const obj4 = Object.assign({}, obj1, obj2, obj3)
const obj4 = {...obj1, ...obj2, ...obj3}
console.log(obj4);

// object to array

console.log(Object.keys(vUser));
console.log(Object.values(vUser));
console.log(Object.entries(vUser));
console.log(vUser.hasOwnProperty("256eqs"));


//*************************** destructuring ***********************
// converting properties from Object into a variable

const character = {
    pyroArhcon: 'Mavuika',
    electroArhcon: 'Raiden Shogun',
    hydroArhcon: 'Furina'
}

const {electroArhcon: Electro} = character
console.log(Electro);



//*********************API*****************
// JSON
// {}

