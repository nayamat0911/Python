const fruits = ["banana", "mango", "orange","apple","paineple"]
console.log(fruits)
//sort
fruits.sort()
console.log(fruits)
//reverise short

fruits.reverse()
console.log(fruits)

//
//neumaric sort
const points = [45,67, 50.1,34,50,3,5,1,2,78,70,200]
points.sort(function(a,b){
    return b - a;
});

// sort from small to learg
console.log(points)


