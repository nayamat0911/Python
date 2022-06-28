const car_t = {
    name:"fiat",
    model: 500,
    weight: '850kg',
    color: "white",
    start:function(){
        console.log("car has start")
    },
    drive:function(){
        console.log("car has start drive")
    },

};

console.log(car_t.color)
console.log(car_t['model'])
car_t.start()


let k = "Rahim"
console.log(k)
console.log(typeof(x))