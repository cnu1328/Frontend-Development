const select = document.querySelector("select");
const poem = document.querySelector("pre");

select.addEventListener("change", () => {
    const verse = select.value;
    updateDisplay(verse);
});

function updateDisplay(verse) {
    verse = verse.replace(" ", "").toLowerCase();
    const url = `../Text/${verse}.txt`;

    // Call `fetch()`, passing in the URL.

    fetch(url)
        // fetch() returns a promise. When we have received a response from the server,
        // the promise's `then()` handler is called with the response.
        .then((response) => {
            // Our handler throws an error if the request did not succeed.
            if(!response.ok) {
                throw new Error(`HTTP error : ${response.status}`);
            }

            // Otherwise (if the response succeeded), our handler fetches the response
            // as text by calling response.text(), and immediately returns the promise
            // returned by `response.text()`.

            return response.text();
        })

        // When response.text() has succeeded, the `then()` handler is called with
        // the text, and we copy it into the `poemDisplay` box.

        .then((text) => {
            poem.textContent = text;
        })

        // Catch any errors that might happen, and display a message
        // in the `poemDisplay` box.

        .catch((error) => {
            poem.textContent = `Could not fecth verse : ${error}`;
        });
}

updateDisplay("Verse 1");
select.value = "Verse 1";