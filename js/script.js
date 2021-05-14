/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/


// Defined the quote objects:
let quote1 = {
  quote: "A computer terminal is not some clunky old television with a typewriter in front of it." + 
  "It is an interface where the mind and body can connect with the universe and move bits of it about.",
  source: "Douglas Noel Adams",
  citation: "https://miniwebtool.com/random-quote-generator/",
  
}
let quote2 = {
  quote: "Don't be afraid to go out on a limb. That's where the fruit is.",
  source: "Arthur F. Lenehan",
  citation: "https://miniwebtool.com/random-quote-generator/",
  
}
let quote3 = {
  quote: "The greatest service which can be rendered any country is to add a useful plant to its culture.",
  source: "Thomas Jefferson",
  citation: "https://miniwebtool.com/random-quote-generator/",
  
}
let quote4 = {
  quote: "It is better to remain silent and be thought a fool, than open one's mouth and remove all doubt.",
  source: "Samuel Johnson",
  citation: "https://miniwebtool.com/random-quote-generator/",
  year: 1750
}
let quote5 = {
  quote: "I am an optimist. It does not seem too much use being anything else.",
  source: "Winston Churchill",
  citation: "https://miniwebtool.com/random-quote-generator/",
}

//Places the quote objects in array of quotes
let quotes = [quote1, quote2, quote3, quote4, quote5];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  // This funcion uses math random function and the length of the quotes array to generate a random number
  // within the range of the length of the array. Then the number is used to return a random quote from the quotes array.
  let randomNum = Math.floor(Math.random() * (quotes.length));
  return quotes[randomNum];
}



/***
 * `printQuote` function
***/
function printQuote() {

  // In this function, first a random number is placed in a varibale using getRandomQuote()
  let randomQuote = getRandomQuote();
  console.log(randomQuote);
  // Next the html string that will be placed in the html element is created.
  let html = "<p class='quote'>" + randomQuote.quote + "</p> <p class='source'>" + randomQuote.source;
  
  // Then it checks the quote. If the object has citation or year property a span element is concatenated to the html string. 
  if ("citation" in randomQuote) {
    html += "<span class='citation'>" + randomQuote.citation + "</span>";
  }
  if ("year" in randomQuote) {
    html += "<span class='year'>" + randomQuote.year + "</span>"
  }
  html += "</p>";
  console.log(html);
  // Finally the html string is placed in the html element.
  document.getElementById('quote-box').innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);