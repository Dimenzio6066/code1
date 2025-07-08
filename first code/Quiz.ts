type Question = {
    question: string;
    answer: string; // correct answer (case-insensitive)
};

// questions
const questions: Question[] = [
    {
        question: "What fun value do you have to have to get the sound test when entering the snowman room?",
        answer: "66",
    },

    {
        question: "Which gender has Frisk?",
        answer: "No gender"
    },
    {
        question: "Which boss is notorious for giving people a bad time?",
        answer: "Sans the Skeleton",
    },
    {
        question: "What is Sans' special attack?",
        answer: "Nothing",
    },
    {
        question: "How is Toriel's and Asgore's son called?",
        answer: "Asriel Dreemurr",
    },
    {
        question: "What does the Great Papyrus like to say?",
        answer: "Nyeh heh heh!",
    },
    {
        question: "What does Temmie need a lot of money for?",
        answer: "Colleg",
    },
    {
        question: "In which route can you see the famous line “But nobody came”?",
        answer: "Genocide Route",
    },
    {
        question: "What is the secret boss in Undertale which is exclusively for the switch version?",
        answer: "Mad Mew Mew",
    },
    {
        question: "Which two popular acronyms can be made with the word Undertale?",
        answer: "Deltarune and Nutdealer",
    },

    {
        question: "What are the odds in Papyrus' tile puzzle to get the exact combination that he rolls during the playthrough?",
        answer: "1 in 36,703,368,217,294,125,441,230,211,032,033,660,188,801",
    },
    {
        question: "What is Lancers evil villain laugh?",
        answer: "Ho ho ho!"
    },
    {
        question: "Who is Spamton G. Spamton?",
        answer: "[Hyperlink Blocked]",
    },
    {
        question: "Are arcade games mobile games? (Yes or No)",
        answer: "Yes",
    },
    {
        question: "What is NEO known for?",
        answer: "High Defense",
    },
    {
        question: "What is Ralsei smoking (fanon)?",
        answer: "A big fat blunt",
    },
    {
        question: "Willst du wissen wie viel dein Auto wert ist?",
        answer: "Ralf Schumacher",
    },
    {
        question: "What kind of gamer is Queen?",
        answer: "A mobile gamer",
    },
    {
        question: "What does Asgore like to do in his free time? (besides flower gardening)",
        answer: "Driving his truck.",
    },
    {
        question: "Who did Sans 'befriend' last night?",
        answer: "Your mom",
    },

    {
        question: "Which two popular acronyms can be made with the word Deltarune?",
        answer: "Undertale and Nutdealer",
    },
   
    // Add 19 more prompt questions here...
];

let score = 0;

for (const q of questions) {
    const userInput = prompt(q.question);
    if (
        userInput &&
        userInput.trim().toLowerCase() === q.answer.trim().toLowerCase()
    ) {
        alert("Correct!");
        score++;
    } else {
        alert(`Wrong! The correct answer was: ${q.answer}`);
    }
}

alert(`Quiz finished! Your score: ${score}/${questions.length}`);
crypto.getRandomValues(new Uint8Array(1));
