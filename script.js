const quote = document.getElementById("quote");
const author = document.getElementById("author");
const button = document.getElementById("quoteBtn");

async function getQuote() {

    quote.innerHTML = "Loading quote...";
    author.innerHTML = "";

    try {

        const response = await fetch("https://dummyjson.com/quotes/random");

        if (!response.ok) {
            throw new Error("Failed to fetch data");
        }

        const data = await response.json();

        quote.innerHTML = `"${data.quote}"`;
        author.innerHTML = `— ${data.author}`;

    } catch (error) {

        quote.innerHTML = "❌ Failed to load quote.";
        author.innerHTML = "";

        console.error(error);

    }

}

getQuote();

button.addEventListener("click", getQuote);