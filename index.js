const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];
//function that iterates over element of tutorials and applies a function to it
//in this case tutorial is a parameter which is each individual element in the array
const titleCased = () => tutorials.map((tutorial) =>
//.split takes each element and splits it up based upon the space
//basically each word is its own element
//then it maps each word....  
  tutorial.split(' ').map((word) =>
  //maps it where the first letter of each word is upper cased, and the rest of the word is added
    word.charAt(0).toUpperCase() + word.slice(1)
    //then it joins it back together with a space added back
  ).join(' ')
)


