const analyzeArray = require("./analyzeArray")

test('Initial test of output', () =>{
    expect(analyzeArray([1,2,3])).toStrictEqual( object = { 
        avg: 2,
        length:3,
        max:3,
        min:1
    }
    )
})


test('Initial test of output', () =>{
    expect(analyzeArray([1,2,3,5,3,2,7])).toStrictEqual( object = { 
        avg: 3,
        length:7,
        max:7,
        min:1
    }
    )
})