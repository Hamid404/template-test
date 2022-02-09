const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author')
const tweeterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
 
 let apiQuotes = [];


//Show New Quote From apiQuotes
function newQuote() {
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
      quoteText.textContent = quote.text;
}

//Get Quotes From Api
 async function getQuotes() {
     const apiUrl = 'https://type.fit/api/quotes';
     
     try{
       const response = await fetch(apiUrl);
       apiQuotes = await response.json();
       //console.log(apiQuotes);
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
 getQuotes();
// newQuote();

