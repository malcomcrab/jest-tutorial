const capitalise = require("./capitalise")


const cypher = 'abcdefghijklmnopqrstuvwxyz'
var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~" "'

function ceaserCypher(string, shift) {
    //split string to array so i can iterate over the array. 
    let split = string.split('')
    const newString = split.map(letter => {
        // If current letter is punctuation return it unchanged to the newString array.
        if (punctuation.includes(letter)) {
            return letter
        } 
        
        // If not punctuation find the index of the number in the alphabet and add the shift to that index
        let newIndex = cypher.indexOf(letter.toLowerCase()) + shift
        // If the index plus shift number is above 26 start from 0 by subtracting 26 from the newIndex. 
        if (newIndex >= 26) {
            newIndex -= 26
            }
        
        /* if the original letter is not capitalised return the letter at the new index, else return 
        the letter at the newIndex capitalised */
        return letter != letter.toUpperCase(letter) ? cypher[newIndex] : cypher[newIndex].toUpperCase(letter)
        

    })
    //join the letters in the array and return the new string
    return newString.join('')

}

module.exports = ceaserCypher