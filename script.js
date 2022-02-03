// Object destructuring 1
8
1846

// Object destructuring 2
discoveryYears = {
    yearNeptuneDiscovered: 1846, 
    yearMarsDiscovered: 1659
}

// Object destructuring 3
'Your name is Alejandro and you like purple'
'Your name is Melissa and you like green'
'Your name is undefined and you like green'

// Array destructuring 1
'Maya'
'Marissa'
'Chi'

// Array destructuring 2
'Raindrops on roses'
'whiskers on kittens'
['Bright copper kettles', 'warm woolen mittens', 'Brown paper packages tied up with strings']

// Array destructuring 3
[10,30,20]

// ES2015 Assigning Variables to Object Properties
let {a, b} = obj.numbers;

//ES2015 Array swap
[arr[1], arr[0]] = [arr[0], arr[1]]

// raceResults
const raceResults = ([first, second, third, ...rest]) => { return {first, second, third, rest}};