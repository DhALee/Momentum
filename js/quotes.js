const quotes = [
    {
        quote: "All our dreams can come true, if we have the courage to pursue them.",
        author: "Walt Disney",
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain",
    },
    {
        quote: "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed.",
        author: "Michael Jordan",
    },
    {
        quote: "Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
        author: "Mary Kay Ash",
    },
    {
        quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
        author: "Chinese Proverb",
    },
    {
        quote: "Only the paranoid survive.",
        author: "Andy Grove",
    },
    {
        quote: "It’s hard to beat a person who never gives up.",
        author: "Babe Ruth",
    },
    {
        quote: "I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.",
        author: "Leah Busque",
    },
    {
        quote: "If people are doubting how far you can go, go so far that you can’t hear them anymore.",
        author: "Michele Ruiz",
    },
    {
        quote: "We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success.",
        author: "Arianna Huffington",
    }
]

const quote = document.querySelector("#quote span:first-child")
const author = document.querySelector("#quote span:last-child")

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;