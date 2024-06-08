async function populate() {
    const requestURL = "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json";

    const request = new Request(requestURL);

    const response = await fetch(request);
    //const superHeros = await response.json();

    const superHeroesText = await response.text();
    const superHeroes = JSON.parse(superHeroesText);
    populateHeader(superHeroes);
    populateHeroes(superHeroes);
}

function populateHeader(obj) {
    const header = document.querySelector('header');
    const myH1 = document.createElement("h1");
    myH1.textContent = obj.squadName;
    header.appendChild(myH1);

    const myPara = document.createElement('p');
    myPara.textContent = `Hometown : ${obj.homeTown} // Formed : ${obj.formed}`;
    header.appendChild(myPara);
}

function populateHeroes(obj) {
    const section = document.querySelector("section");
    const heroes = obj.members;

    for(const hero of heroes) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const para1 = document.createElement('p');
        const para2 = document.createElement('p');
        const para3 = document.createElement('p');
        const myList = document.createElement('ul');

        myH2.textContent = hero.name;
        para1.textContent = `Secret Identity : ${hero.secretIdentity}`;
        para2.textContent = `Age : ${hero.age}`;
        para3.textContent = "Super Powers";

        const powers = hero.powers;

        for(const power of powers) {
            const li = document.createElement('li');
            li.textContent = power;
            myList.appendChild(li);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(para1);
        myArticle.appendChild(para2);
        myArticle.appendChild(para3);
        myArticle.appendChild(myList);

        section.append(myArticle);
    }


}

populate();
