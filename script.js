const quotes = [
    "How much do you really know about coding? -  Hafeeza",
    "Everybody should learn to program a computer, because it teaches you how to think - Steve Jobs",
]
const photos = [
  'image/images.jpg',
  'image/stevejobs.jpg'
]
function setQuote(){
 const quote = document.getElementById('quote');
 const author = document.getElementById('author');
 const randomIndex = Math.floor(Math.random() * quotes.length)
 const randomQuote = quotes[randomIndex]
 const randomPhoto = photos[randomIndex]

 const quoteParts = randomQuote.split(' - ');
 console.log(quoteParts)
 quote.innerHTML = quoteParts[0];
 author.innerHTML = `-${quoteParts[1]}`;
 document.getElementById("image").src = randomPhoto;
}




