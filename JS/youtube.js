// Get references to DOM elements we need to manipulate

const InputSearch = document.querySelector('.search');
const form = document.querySelector('form');
const submit = document.querySelector('.submit');

const section = document.querySelector('section');

// When the window (tab) has finished loading, run onClientLoad()
// to get it all started

window.addEventListener('load', onClientLoad);

function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Attach your key to the API

function onYouTubeApiLoad() {
    gapi.client.setApiKey('AIzaSyCdu41UXxr5cHVOU9vmY2dYJ7jI7x0DcJY')

    form.addEventListener('submit', search);
}

function search(e) {
    // use preventDefault() to stop form actually submitting
    e.preventDefault();

    // create a search request using the Data API;

    const request = gapi.client.youtube.search.list({
        // set what kind of data the response will include
        part: 'snippet',
        // set the number of results that will be returned
        maxResults: 10,
        //set the search query to search for
        q: InputSearch.value
    });


    // send the request, and specify a function to run when the response returns
    request.execute(onSearchResponse);
}

function onSearchResponse(response) {
    // Empty the <section> element
    while(section.firstChild) {
        section.removeChild(section.firstChild);
    }

    // Store the actual results of the search in a variable

    const results = response.items;

     // loop through the results and run displayVideo() on each
     for(let i=0; i<results.length; i++) {
        const result = results[i];
        
        if(result.id.kind === 'youtube#video') 
            displayVideo(result, i);
     }
}


function displayVideo(result, i) {
    // Create a div with a unique ID for each video, and append it to the <section>
    // The YouTube Iframe Player API will replace each one with
    // an <iframe> containing the corresponding video

    const vid = document.createElement('div');
    const vidId = 'vid' + i;
    vid.id = vidId;
    section.appendChild(vid);

    // Use the YT.Player() constructor to create a new video player object,
  // Specifying the ID of the element to be replaced by it (the <div>),
  // A height and width, and an event handler to handle the custom onReady event

  const player = new YT.Player(vidId, {
    height: '360',
    width: '480',
    videoId: result.id.videoId,
    events: {
        'onReady' : OnPlayerReady
    }
  });

  // The onPlayerReady() handler grabs the ID of each video, and checks its duration
  // If the duration is 0, the video can't be played, so we just delete it

  function OnPlayerReady(e) {
    console.log(e.target);

    const myId = e.target.id;
    const duration = e.target.getDuration();

    if(duration === 0) {
        console.log(`video ${myId} cnnot be played, so it was deleted.`);
        const videoElement = e.target.a;

        if (videoElement && videoElement.parentNode === section) {
            section.removeChild(videoElement);
        }
    }

    else {
        console.log(`vedio ${myId} ready to play.`);
    }
  }
}
