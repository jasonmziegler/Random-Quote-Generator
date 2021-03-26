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
citation: 'The Problem of Increasing Human Energy',
}
]


/***
 * `getRandomQuote` function
 * @param {Array} arr - An array param
 * @return {Object} An Object Param
 * 
 * @example
 * 
 *  getRandomQuotes(quotes);
***/

function getRandomQuote(arr) {
  // need to get a max number
  /**
 * @type {number} - maxNumber
 */
 let maxNumber = arr.length;
 // random number will be the index of the array which can range from 0 to maxNumber-1
 /**
 * @type {number} - randomNumber
 */
 let randomNumber = Math.floor((Math.random() * maxNumber))
 console.log('Random Number: ', randomNumber);
 // return the quote object
 return arr[randomNumber];
}

/***
 * `printQuote` function
***/
function printQuote() {

  function isDefined(objectParameter) {
    if (objectParameter) return true;
    return false;
  }
  // get Random Quote
  /**
 * @type {Object}
 */
  let quoteObject = getRandomQuote(quotes);
  // locate location in HTML to update
  /**
 * @type {Object}
 */
  let container = document.querySelector('.container');

  // create a template string and interpolate quote attributes into the html
 
  // need to have if conditionals so that certain elements are only displayed if present
// set inner HTML equal to template string

//I thought I could use logic inside of the template string interpolation, but the console had an error on the word if so I looked up this on stack overflow: 
//https://stackoverflow.com/questions/44488434/inserting-if-statement-inside-es6-template-literal and it recommended to use ternary operator
// may need to scrap this line of reasoning as it still displays commas "--Marcus Aurelius,," which apear to be coming from the css
// likely will need to construct the HTML piece by piece checking each parameter with isDefined
  // container.innerHTML = 
  //     `<div id="quote-box" class="quote-box">
  //       <p class="quote">${quoteObject.quote}</p>
  //       <p class="source">${isDefined(quoteObject.source) ? quoteObject.source:''}<span class="citation">${isDefined(quoteObject.citation) ? quoteObject.citation:''}</span><span class="year">${isDefined(quoteObject.year) ? quoteObject.year:''}</span></p>
  //     </div>`; 
  // }
  let html = '<div id="quote-box" class="quote-box">';
  
  if (isDefined(quoteObject.quote)) {
    html += `<p class="quote">${quoteObject.quote}</p>`;
  }

  html += '<p class="source">';
  
  if (isDefined(quoteObject.source)) {
    html += quoteObject.source;
  } else {
    html += 'Unkown';
  }
  
  if (isDefined(quoteObject.citation)) {
    html += `<span class="citation">${quoteObject.citation}</span>`
  }
  
  if (isDefined(quoteObject.year)) {
    html += `<span class="year">${quoteObject.year}</span>`;
  }
  html += '</p></div>';

  container.innerHTML = html;
}


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);