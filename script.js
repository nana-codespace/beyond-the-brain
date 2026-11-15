// WELCOME SURPRISE FUNCTION

function showWelcomeMessage() {

    alert("Dear Awogun Ibrahim Adekunle,\n\nThis website was created especially for you as a little expression of appreciation.\n\nThank you for your consistency, encouragement and support throughout my technology journey.\n\nYou are truly appreciated! ❤️");

}
// BRAIN FACTS FUNCTION

const brainFacts = [

    "The adult human brain contains approximately 86 billion neurons.",

    "The brain uses about 20% of the body's energy while at rest.",

    "The brain itself has no pain receptors.",

    "Neurons communicate using electrical and chemical signals.",

    "Sleep helps the brain process information and form memories."

];

function showBrainFact() {

    const randomIndex = Math.floor(Math.random() * brainFacts.length);

    document.getElementById("brainFact").textContent = brainFacts[randomIndex];

}