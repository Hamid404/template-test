const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author')
 
 let apiQuotes = [];

//Show New Quote From apiQuotes
function newQuote() {
    //Pick a Random Quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // console.log(quote);

    if (!quote.author) {
        authorText.textContent = 'Unknown';
    }
    else{
        authorText.textContent = quote.author;
    }
 //Check Quote Length to determine styling
 if (quote.text.length > 100) {
    quoteText.classList.add('long-quote');
} else {
    quoteText.classList.remove('long-quote');
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

 getQuotes();
// newQuote();

