const generateBtn = document.getElementById('generate-btn');
const jokeContainer = document.getElementById('joke-container');

generateBtn.addEventListener('click', () => {
    fetch('https://icanhazdadjoke.com/', {
        headers: {
            'Accept': 'application/json',
        }
    })
        .then(response => response.json())
        .then(data => {
            const joke = data.joke;
            jokeContainer.innerHTML = `<p>${joke}</p>`;
        })
        .catch(error => console.log(error));
});
