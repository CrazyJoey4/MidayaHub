// API Key
const apikey = '165a04ca7dd748cc89aa37d46023a3e2';

// Request Parameters
const pageSize = 27;

// Retrieve the news from API
async function loadNews(title) {
    const url = `https://newsapi.org/v2/everything?q=${title}&pageSize=${pageSize}&apikey=${apikey}`;
    const res = await fetch(`${url}`);
    const data = await res.json();
    return data
}
loadNews("all").then(data => displayNews(data.articles))

// Display the news
// function displayNews(details) {
//     let mainHTML = ''
//     for (let i = 0; i < details.length; i++) {
//         if (details[i].title) {
//             mainHTML += `
//             <div class="news-card">
//                 <div class="news-bmbtn" id="news-bmbtn">
//                     <button id="news-bookmark-btn"><span class="fa fa-star"></span></button>
//                 </div>
//                 <img src=${details[i].urlToImage}/>
//                 <a href=${details[i].url} style="color:#fff" target="_blank">
//                 <h4>${details[i].title}</h4>
//                 <h6>${details[i].author}</h6>
//                 <div class="publisherdate">
//                     <p>${details[i].source.name}</p>
//                     <span> • </span>
//                     <p>${new Date(details[i].publishedAt).toLocaleDateString()}</p>
//                 </div>
//                 <div class="description">
//                     ${details[i].description}
//                 </div>
//                 </a>
//             </div>
//             `
//         }
//     }
//     document.querySelector("main").innerHTML = mainHTML
// }

// Search news
const searchForm = document.getElementById("search-form")
const newsSearchBox = document.getElementById('news-search-box');

searchForm.addEventListener("submit", async (e) => {
    e.preventDefault()
    console.log(newsSearchBox.value)

    const data = await loadNews(newsSearchBox.value)
    displayNews(data.articles)
});

async function Search(query) {
    const data = await loadNews(query)
    displayNews(data.articles)
}

// Function to toggle bookmark status
function toggleBookmark(newsId, newsTitle, button) {
    if (!userId) {
        console.error('User not logged in');
        return;
    }

    const userRef = collection(db, 'users').doc(userId);

    userRef.get().then((doc) => {
        if (doc.exists) {
            const userData = doc.data();
            const bookmarks = userData.bookmarks || [];

            if (bookmarks.includes(newsId)) {
                removeBookmarkFromUser(userRef, newsId);
                button.innerHTML = '<span class="fa fa-star-o"></span>'; // Update button icon
            } else {
                addBookmarkToUser(userRef, newsId, newsTitle);
                button.innerHTML = '<span class="fa fa-star"></span>'; // Update button icon
            }
        } else {
            console.error('User document does not exist');
        }
    }).catch((error) => {
        console.error('Error getting user document:', error);
    });
}

// Display the news
function displayNews(details) {
    let mainHTML = '';
    for (let i = 0; i < details.length; i++) {
        if (details[i].urlToImage) {
            const newsId = `news-${i}`;
            const bookmarked = isNewsBookmarked(newsId); // Check if the news article is bookmarked

            mainHTML += `
          <div class="news-card">
              <img src=${details[i].urlToImage} lazy="loading"/>
              <div class="news-bookmark-btn" id="news-bookmark-btn">
                <button class="bookmark-button" id="${newsId}">
                  <span class="fa ${bookmarked ? 'fa-star' : 'fa-star-o'}"></span>
                </button>
              </div>
              <a href=${details[i].url} style="color:#fff" target="_blank">
              <div class="title">
                <h4>${details[i].title}</h4>
                <h6>${details[i].author}</h6>
              </div>
              <div class="publisherdate">
                <p>${details[i].source.name}</p>
                <span> • </span>
                <p>${new Date(details[i].publishedAt).toLocaleDateString()}</p>
              </div>
              <div class="description">
                ${details[i].description}
              </div>
            </a>
          </div>
        `;
        }
    }
    document.querySelector("main").innerHTML = mainHTML;

    // Add event listeners to bookmark buttons
    const bookmarkButtons = document.querySelectorAll('.bookmark-button');
    bookmarkButtons.forEach((button) => {
        button.addEventListener('click', () => {
            const newsId = button.id;
            const newsTitle = details[parseInt(newsId.split('-')[1])].title;
            toggleBookmark(newsId, newsTitle, button);
        });
    });
}

// Check if a news article is bookmarked by the user
async function isNewsBookmarked(newsId) {
    if (!userId) {
        return false;
    }

    const userRef = collection(db, 'users').doc(userId);
    const userSnapshot = await userRef.get();

    if (userSnapshot.exists) {
        const userData = userSnapshot.data();
        const bookmarks = userData.bookmarks || [];

        return bookmarks.includes(newsId);
    }

    return false;
}