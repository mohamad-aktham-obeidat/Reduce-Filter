console.log('Here is : ', 'Reduce & Filter')

//Using Reduce 1 -5
var persons = [{
    name: {
      first: 'John',
      last: 'Hob'
    },
    age: 35
  },
  {
    name: {
      first: 'Alex',
      last: 'Mercer'
    },
    age: 25
  },
  {
    name: {
      first: 'Alice',
      last: 'Zaheer'
    },
    age: 24
  },
  {
    name: {
      first: 'Zues',
      last: 'Odin'
    },
    age: 55
  },
  {
    name: {
      first: 'Soso',
      last: 'Al-Amora'
    },
    age: 67
  }
];

/*
1
Using Reduce
Using the varabile persons
Create a function called avgAge
that accept an array
and return average age of this array

Ex: avgAge(persons) => 41.2
*/
function avgAge(arr) {
  var result = arr.reduce(function (acc, current) {
    return acc + current.age; // acc = acc + current.age
  }, 0);

  return result / arr.length;
}
console.log(avgAge(persons));


/*
2
Using Reduce
Using the varabile persons
Create a function called longestName
that accept an array
and
return the longerst full name

Ex: longestName(persons) => 'Soso Al-Amora'
*/
function longestName(array) {
  var output = array.reduce(function (previous, current, index) {
    previous = array[0].name.first + ' ' + array[0].name.last;
    current = array[index].name.first + ' ' + array[index].name.last;
    if (current > previous) {
      return current;
    }
    return previous;
  })
  return output;
}
console.log(longestName(persons))
/*
3
Using Reduce
Create a function called maxNumber
that accept an array
and return max number

Ex: maxNumber([1,2,4,9]) => 9
*/
function maxNumber(arr) {

  var output = arr.reduce(function (first, second) {
    if (second > first) {
      return second;
    }
    return first
  })
  return output;
}
console.log(maxNumber([1, 20000, 999, 50]))
/*
4
Using Reduce
Create a function called repeatChar
that accept a string and char
and return number times that this char repeat inside the string

Ex: repeatChar("hello world",w) => 1
*/
function repeatChar(string, char) {
  string = string.toLowerCase();
  string = string.split("");
  var result = string.reduce(function (prev, curr) {
    if (curr === char) {
      prev++;
    }
    return prev;
  }, 0);
  return result;
}
console.log(repeatChar("hello world", 'w'))
/*
5
Using Reduce
Create a function called usAndNumberBeetweenUs
that accept two numbers
and return array of these two numbers and the numbers between them

Ex: usAndNumberBeetweenUs(2,5) => [2,3,4,5]
*/
function usAndNumberBeetweenUs(num1, num2) {
  var numsBetween = [];
  while (num1 <= num2) {
    numsBetween.push(numsBetween.reduce( previous => {
      return previous
    }, num1))
    num1++;
  }
  return numsBetween;
}
console.log(usAndNumberBeetweenUs(2,5));
//Filter 6 - 11
/*
6
Using Filter
Create a function called evenOnly
that accept an array
and return an array of even number only

Ex: evenOnly([1,8,6,4]) => [8,6,4]
*/
function evenOnly(arr) {
  return arr.filter(even => even % 2 === 0);
}
console.log(evenOnly([1, 8, 6, 4]))

/*
7
Using Filter
Create a function called multiFour
that accept an array
and return an array of these number that is a mutiply by 4

Ex: multiFour([1,8,6,4]) => [8,4]
*/
function multiFour(arr) {
 return arr.filter(multiFour => multiFour % 4 === 0);
}
console.log(multiFour([1, 8, 6, 4]))

/*
8
Using Filter
**this question not that easy mybe you will need to use two function inside each other

Create a function called containChar
that accept an array of string
and return an array of these string that contain this char

Ex: containChar(["hello","world"],w) => ["world"]
Ex: containChar(["hello","world"],l) => ["hello","world"]
*/
function containChar(srtArray, char) {
  return srtArray.filter(function (current) {
    var output;
    var latter = current.split("");
    latter.filter(function (currVal) {
      if (currVal === char) {
        output = current;
      }
    });
    return output;
  })

}
console.log(containChar(["hello", "world"], 'w'))
console.log(containChar(["hello", "world"], 'l'))
/*
9
Using Filter
Create a function called evenIndexOddLength
that accept an array of strings
and return an array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]
*/
function evenIndexOddLength(strArray) {
  return strArray.filter((current, i) => {
    return i % 2 === 0 && current.length % 2 !== 0
  })
}
var strings = ["alex", "mercer", "madrasa", "rashed2", "emad", "hala"]
console.log(evenIndexOddLength(strings))


/*
10
Using Filter
Using the varabile persons
Create a function called olderThan
that accept an array and number
and return the person that have age older than this number

Ex: olderThan(persons,56) => [{ name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }]
*/
function olderThan(array, perAge) {
  return array.filter((person) => {
    return person.age > perAge;
  })
}
console.log(olderThan(persons, 56));
/*
11
Using Filter
Create a function called shorterThan
that accept an array of strings and a number
and return the shorter string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterThan(strings,5) => ["alex","emad","hala"]
*/
function shorterThan(strArray, number) {
  return strArray.filter(name => {
    return name.length < number;
  })
}
console.log(shorterThan(strings, 5))

/*
Advanced Part {for your benefits}

Dont solve any question here if you didnt finish all the question a bove with your pair

This part you can try it
You should solve this part solo not with your pair

This part is extra (and there is no help from the trainer) it is good to try it
*/

//Using filter 12 -15

/*
12
Using Filter
Create a function called longerThan
that accept an array of strings
and return the longer string than the number

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: longerThan(strings,4) => ["mercer","madrasa","rashed2"]
*/
function longerThan(strArray, number) {
  return strArray.filter(name => {
    return name.length > number;
  })
}
console.log(longerThan(strings, 5))

/*
13
Using Filter
Create a function called onlyOneWord
that accept an array of strings
and return only those strings with a single word (no spaces)

var strings= [ 'return', 'phrases', 'with one word' ];
Ex: onlyOneWord(strings) => [ 'return', 'phrases' ]
*/

function onlyOneWord(array) {
  return array.filter((oneWord) => {
    return oneWord.indexOf(" ") === -1;
  })
}
var strings2 = ['return', 'phrases', 'with one word'];
console.log(onlyOneWord(strings2))

/*
14
Using Filter
Create a function called positiveRowsOnly
that accept an array of array of numbers(matrix)
and return only the rows in the matrix that have all positive integers

var numbers= [[ 1, 10, -100 ], [ 2, -20, 200 ],[ 3, 30,  300 ]];
Ex: positiveRowsOnly(numbers) => [ 3, 30,  300 ]
*/
function positiveRowsOnly(arr) {
  var counter = 0;
    return arr.filter((element) =>{
      return element.filter(i => {
        if (i > 0) {
          counter++;
        }
        return counter;
      }) === counter;
    }) 
}
var numbers= [[ 1, -10, -100 ], [ 2, -20, 200 ],[ 3, 30,  300 ]];
console.log(positiveRowsOnly(numbers))
/*
15
Using Filter
Create a function called allSameVowels
that accept an array of strings
return only those words where all the vowels are the same

var strings= [ 'racecar', 'amalgam', 'oligopoly', 'zoom' ];
Ex: allSameVowels(strings) =>  [ 'amalgam', 'zoom' ]
*/
function allSameVowels(array){
  array = array.toLowerCase();
  array = array.split("");
  array.filter((element) => {
    if(element ==='a' || 'o' || 'u' || 'i' || 'e'){
      
    }
  })
return obj;
}
//Using Reduce 16 -

/*
16
Using Reduce
Create a function called objectify
that accept an array of pairs array
and turns an array of arrays into an object

var array= [[ 'Thundercats', '80s' ],[ 'The Powerpuff Girls', '90s' ],[ 'Sealab 2021', '00s' ]]
Ex: objectify(array) =>  { 'Thundercats': '80s', 'The Powerpuff Girls': '90s', 'Sealab 2021': '00s' };
*/


/*
17
Using Reduce
Create a function called luckyNumbers
that accept an array of number
and turns an array of arrays into an object

var array= [ 30, 48, 11, 5, 32 ]
Ex: luckyNumbers(array) => 'Your lucky numbers are: 30, 48, 11, 5, and 32';
*/

// if you finish the exercises review the material of the week and help your classmate
