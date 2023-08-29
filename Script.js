const compliments = [
    "Nos meus dias cinzas, você deixa tudo mais colorido!",
    "Canetei seu sorriso em uma linha e a folha se apaixonou.",
    "Você é literalmente como a lua, porque eu amo todas suas fases.",
    "Ganhei o mundo quando comecei a namorar com você.",
    "Assim como jão irei te amar como um idiota ama.",
    "Sua inteligência é inspiradora.",
    "Qualquer lugar fica melhor quando você tá nele.",
    "Diante da lua brilhante, lembro do seu sorriso, brilhante, vivo, radiante e que ilumina a escuridão.",
    "Você é a resposta para todas perguntas de amor e felicidade.",
    "Tipo Sol e Lua, separados pela distância e conectados pelo amor.",
    "I get so lost inside your eyes",
    {
        text: "Abra o link"
        link: "https://spotify.link/cmb5ssSyECb"
];

const complimentElement = document.getElementById("compliment");
const generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click", () => {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];

    if (typeof randomCompliment === "object") {
        complimentElement.innerHTML = `<p onclick="openLink('${randomCompliment.link}')">${randomCompliment.text}</p>`;
    } else {
        complimentElement.textContent = randomCompliment;
    }
    
function openLink(link) {
window.open(link, "_blank");
});
