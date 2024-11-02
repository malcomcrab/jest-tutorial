
const cypher = 'abcdefghijklmnopqrstuvwxyz'
var punctuation = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'

function ceaserCypher(string, shift){

    let split = string.split('')

    const newString = split.map(letter => {
        
        if (punctuation.includes(letter)) {
            return letter
        } else {
            let newIndex = cypher.indexOf(letter) + shift
            if(newIndex >= 26){
                newIndex -= 26
            }
            return cypher[newIndex] 
        }

    })
    return newString.join('')
    
}

module.exports = ceaserCypher