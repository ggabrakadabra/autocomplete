const { sortWordsByTopTwentyFive } = require('./sortWordsByTopTwentyFive.js');

describe('sortWordsByTopTwentyFive', () => {
  it('will return top 25', () => {
    const inputObject = [
      {'black-panther': 10},
      {'superman': 1},
      {'batman': 2},
      {'captain-america': 1},
      {'iron-man': 3},
      {'spiderman': 6},
      {'a\'d': 1},
      {'toucah\'d': 50},
      {'madam': 2},
      {'muliera': 92},
      {'mallis': 342},
      {'musac': 2},
      {'muma': 2},
      {'manyaaa': 472},
      {'aaff': 882},
      {'uuayyy': 432},
      {'aaaaa': 2},
      {'yjkkka': 2},
      {'heeeellloooa': 2},
      {'luna': 2},
      {'yyyyaaaaayyyy': 25},
      {'keetah': 2},
      {'computera': 277},
      {'usa': 1122},
      {'hsa': 254},
      {'chair': 222},
      {'lala': 562},
      {'looooa': 82},
    ];

    const expected = [
      {'usa': 1122}, 
      {'aaff': 882}, 
      {'lala': 562}, 
      {'manyaaa': 472}, 
      {'uuayyy': 432}, 
      {'mallis': 342}, 
      {'computera': 277}, 
      {'hsa': 254}, 
      {'chair': 222}, 
      {'muliera': 92}, 
      {'looooa': 82}, 
      {'toucah\'d': 50}, 
      {'yyyyaaaaayyyy': 25}, 
      {'black-panther': 10}, 
      {'spiderman': 6}, 
      {'iron-man': 3}, 
      {'aaaaa': 2}, 
      {'yjkkka': 2}, 
      {'heeeellloooa': 2}, 
      {'muma': 2}, 
      {'madam': 2}, 
      {'keetah': 2}, 
      {'batman': 2}, 
      {'musac': 2}, 
      {'luna': 2}
    ];

    expect(sortWordsByTopTwentyFive(inputObject)).toEqual(expected)
    expect(sortWordsByTopTwentyFive(inputObject).length).toEqual(25)
  });
});