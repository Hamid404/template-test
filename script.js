const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const tweeterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')

 
 let apiQuotes = [];

 //Show Loading
 function loading() {
     loader.hidden = false;
     quoteContainer.hidden = true; 
 }

 //Reomve Loading
 function complete() {
     quoteContainer.hidden = false;
     loader.hidden = true;
 }

//Show New Quote From apiQuotes
function newQuote() {
    loading();
    //Pick a Random Quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // console.log(quote);
    
    
    // Check if Author field is blank and replace it with 'UNknown'  
    if (!quote.author) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
      // Check Quote length to determine styling
      if (quote.text.length > 80) {
          quoteText.classList.add('quote.text');
      } else {
        quoteText.classList.remove('quote.text');
      }
      // Set Qoute , Hide Loading
      quoteText.textContent = quote.text;
      complete();
}

//Get Quotes From Api
 async function getQuotes() {
    loading();
     const apiUrl = 'https://type.fit/api/quotes';
     //const apiUrl = 'https://one-api.ir/danestani/?token={token}';
     
     try{
       const response = await fetch(apiUrl);
       apiQuotes = await response.json();
       console.log(apiQuotes);
       //Instead of console
       newQuote();
     }
     catch(error){
         //Catch Error Here
         //alert(error)
     }
 }

 

 // Tweeter Quote
 function tweetQuote() {
     const tweeterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
     window.open(tweeterUrl, '_blank');
 }

 // Event Listeners
 newQuoteBtn.addEventListener('click', newQuote);
 tweeterBtn.addEventListener('click', tweetQuote);
 
// newQuote();
 getQuotes();

//loading();

