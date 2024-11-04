
function analyzeArray(inputArr){

let len = inputArr.length
let sorted = inputArr.sort()
let av = ((inputArr.reduce((a,b) => a + b) / len))


let object = {
    avg: parseInt(av),
    length: len,
    max: sorted[len - 1],
    min: sorted[0]
}
console.log(av)
return object

}


module.exports = analyzeArray