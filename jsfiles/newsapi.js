// API Key
const apikey = '165a04ca7dd748cc89aa37d46023a3e2';

// Retrieve the news from API
async function loadNews(title) {
    const url = `https://newsapi.org/v2/everything?q=${title}&apikey=${apikey}`;
    const res = await fetch(`${url}`);
    const data = await res.json();
    return data
}
loadNews("all").then(data => displayNews(data.articles))

// Display the news
function displayNews(details) {
    let mainHTML = ''
    for (let i = 0; i < details.length; i++) {
        if (details[i].urlToImage) {
            mainHTML += `
            <div class="news-card">
                <a href=${details[i].url} style="color:#fff" target="_blank">
                <img src=${details[i].urlToImage} lazy="loading"/>
                <h4>${details[i].title}</h4>
                <div class="publisherdate">
                    <p>${details[i].source.name}</p>
                    <span> • </span>
                    <p>${new Date(details[i].publishedAt).toLocaleDateString()}</p>
                </div>
                <div class="description">
                    ${details[i].description}
                </div>
                </a>
            </div>`
        }
    }
    document.querySelector("main").innerHTML = mainHTML
}

// Search news
const searchForm = document.getElementById("search-form")
const newsSearchBox = document.getElementById('news-search-box');

searchForm.addEventListener("submit",async(e)=>{
    e.preventDefault()
    console.log(newsSearchBox.value)

    const data = await loadNews(newsSearchBox.value)
    displayNews(data.articles)
});

async function Search(query) {
    const data = await loadNews(query)
    displayNews(data.articles)
}