

const cypher = 'abcdefghijklmnopqrstuvwxyz'
var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~" "'

function ceaserCypher(string, shift) {

    let split = string.split('')
    const newString = split.map(letter => {

        if (punctuation.includes(letter)) {
            return letter
        } 
            
        let newIndex = cypher.indexOf(letter.toLowerCase()) + shift
        if (newIndex >= 26) {
            newIndex -= 26
            }
        
        return letter != letter.toUpperCase(letter) ? cypher[newIndex] : cypher[newIndex].toUpperCase(letter)
        

    })
    return newString.join('')

}

module.exports = ceaserCypher