const apiKey = 'your-api-key';
const searchForm = document.querySelector('#search-form');
const scientistInfoDiv = document.querySelector('#scientist-info');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const scientistName = document.querySelector('#scientist-name').value;
    const apiUrl = `https://api.example.com/scientist?name=${scientistName}&apikey=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const name = data.name;
            const field = data.field;
            const bio = data.bio;
            const imageUrl = data.imageUrl;

            let scientistInfoHtml = `
                <h2>${name}</h2>
                <p><strong>Field:</strong> ${field}</p>
                <p><strong>Bio:</strong> ${bio}</p>
                <img src="${imageUrl}" alt="${name}">
            `;

            scientistInfoDiv.innerHTML = scientistInfoHtml;
        })
        .catch(error => {
            console.error(error);
            scientistInfoDiv.innerHTML = '<p>Scientist information not found. Please try again.</p>';
        });
});
