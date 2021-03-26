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
const quotes = [
  {quote: "Deep in the human unconscious is a pervasive need for a logical universe that makes sense. But the real universe is always one step beyond logic.",
    source: "Princess Irulan",
    year: undefined,
  citation: "The Sayings of Muad'Dib",
},
{quote: "Think of the life you have lived until now as over and, as a dead man, see what’s left as a bonus and live it according to Nature. Love the hand that fate deals you and play it as your own, for what could be more fitting?",
    source: "Marcus Aurelius",
    year: undefined,
  citation: undefined,
},
{quote: "However [political parties] may now and then answer popular ends, they are likely in the course of time and things, to become potent engines, by which cunning, ambitious, and unprincipled men will be enabled to subvert the power of the people and to usurp for themselves the reins of government, destroying afterwards the very engines which have lifted them to unjust dominion.",
    source: "George Washington",
    year: 1796,
  citation: "Farewell Address",
},
{quote: "Any human being, any where, is well within his right to do whatever is necessary, by any means necessary, to protect his life and property",
    source: "Malcom X",
    year: 1965,
  citation: 'Front Page Challenge (CBC)',
},
{quote: "Everyone should consider his body as a priceless gift from one whom he loves above all, a marvelous work of art, of indescribable beauty, and mystery beyond human conception, and so delicate that  a word, a breath, a look, nay, a thought may injure it.",
source: "Nikola Tesla",
year: 1900,
citation: The Problem of Increasing Human Energy,
}
]


/***
 * `getRandomQuote` function
***/

function getRandomQuote(arr) {
 let maxNumber = arr.length;
 let randomNumber = Math.floor((Math.random() * maxNumber))
 return arr[randomNumber];
}

/***
 * `printQuote` function
***/
function printQuote(quoteObject) {

}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);