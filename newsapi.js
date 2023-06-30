const newsSearchBox = document.getElementById('news-search-box');
const searchContainer = document.getElementById('search-container');

// load news from API
const apikey = '165a04ca7dd748cc89aa37d46023a3e2';

async function loadNews(title) {
    const url = `https://newsapi.org/v2/everything?q=${title}&apikey=${apikey}`;
    const res = await fetch(`${url}`);
    const data = await res.json();
    return data

    //if (data.Response == "True") displayNewsList(data.Search);
}
loadNews("all").then(data => displayNews(data.articles))

function displayNews(details) {
    let mainHTML = ''
    for (let i = 0; i < details.length; i++) {
        if (details[i].urlToImage) {
            mainHTML += `
            <div class="card">
                <a href=${details[i].url}>
                <img src=${details[i].urlToImage} lazy="loading"/>
                <h3>${details[i].title}</h3>
                <div class="publisherdate">
                    <p>${details[i].source.name}</p>
                    <span> • </span>
                    <p>${new Date(details[i].publishedAt).toLocaleDateString()}</p>
                </div>
                <div class="description">
                    ${details[i].description}
                </div>
            </div>`
        }
    }
    document.querySelector("main").innerHTML = mainHTML
}

searchContainer.addEventListener("submit",async(e)=>{
    e.preventDefault()
    console.log(newsSearchBox.value)

    const data = await loadNews(newsSearchBox.value)
    displayNews(data.articles)

})

// searchBtnMobile.addEventListener("submit",async(e)=>{
//     e.preventDefault()
//     const data = await fetchData(searchInputMobile.value)
//     renderMain(data.articles)
// })


async function Search(query){
    const data = await loadNews(query)
    displayNews(data.articles)
}

window.addEventListener('click', (event) => {
    if (event.target.className != "form-control") {
        searchList.classList.add('hide-search-list');
    }
});