// Defining a baseURL and key to as part of the request URL

const baseUrl = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'muQWOEQa8AclJhfeoETROCvpRn5pWSZ9';

// Grab references to all the DOM elements you'll need to manipulate

const search = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const form = document.querySelector('form');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
const section = document.querySelector('section');
const nav = document.querySelector('nav');

// Hide the "Previous"/"Next" navigation to begin with, as we don't need it immediately
nav.style.disply = 'none';

// define the initial page number and status of the navigation being displayed
let pageNumber = 0;
// Event listeners to control the functionalityj
form.addEventListener('submit', submitSearch);
nextBtn.addEventListener('click', nextPage);
prevBtn.addEventListener('click', previousPage);


function nextPage(e) {
    pageNumber++;
    fetchResults(e);
}

function previousPage(e) {
    if(pageNumber>0) {
        pageNumber--;
    } else {
        return;
    }

    fetchResults(e);
}



function submitSearch(e) {
    pageNumber = 0;
    fetchResults(e);
}

function fetchResults(e) {
    // Use preventDefault() to stop the form submitting
    e.preventDefault();

    // Assemble the full URL
    let url = `${baseUrl}?api-key=${key}&page=${pageNumber}&q=${search.value}&fq=document_type:("article")`;

    if(startDate.value !== "") {
        url = `${url}&begin_date=${startDate.value}`;
    }

    if(endDate.value !== "") {
        url = `${url}&end_date=${endDate.value}`;
    }

    // Use fetch() to make the request to the API
    fetch(url)
        .then((response) => response.json())
        .then((json) => displayResults(json))
        .catch((error) => console.error(`Error fetching data : ${error.message}`));
}

function displayResults(json) {
    while(section.firstChild) {
        section.removeChild(section.firstChild);
    }

    const articles = json.response.docs;

    nav.style.display = articles.length === 10 ? "block" : "none";

    if(articles.length === 0) {
        const para = document.createElement('p');
        para.textContent = "No results Returned";
        section.appendChild(para);
    } else {
        for(const current of articles) {
            const article = document.createElement('article');
            const heading = document.createElement('h2');
            const link = document.createElement('a');
            const img = document.createElement('img');
            const para1 = document.createElement('p');
            const keyWordPara = document.createElement('p');

            keyWordPara.classList.add('keywords');

            link.href = current.web_url;
            link.textContent = current.headline.main;
            para1.textContent = current.snippet;
            keyWordPara.textContent = "Keywords : ";
            for(const keyword of current.keywords) {
                const span = document.createElement('span');
                span.textContent = `${keyword.value}`;
                keyWordPara.appendChild(span);
            }

            if(current.multimedia.length > 0) {
                img.src = `http://www.nytimes.com/${current.multimedia[0].url}`;
                img.alt = current.headline.main;
            }

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para1);
            article.appendChild(keyWordPara);
            section.appendChild(article);

        }
    }
}


