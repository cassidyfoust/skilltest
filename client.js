let stories = "";

// fetches IDs of stories from Hacker News API
function getStories() {
  fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      stories = myJson;
      for (let i = 0; i < stories.length; i++) {
        getStoryObjects(myJson[i]);
      }
    });
}

// takes in news story id and returns news story object, then appends to table
function getStoryObjects(id) {
  fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      time = formatTime(myJson.time);
      document.getElementById("stories").innerHTML +=
        "<tr><td><h2>" +
        myJson.title +
        "</h2>" +
        "<p> Posted by <strong>" +
        myJson.by +
        "</strong> at <strong>" +
        time +
        "</strong></p></td></tr>";
    });
}

// converts time from unix timestamp to 24-hour:m:s format
function formatTime(time) {
  let unix_timestamp = time;

  var date = new Date(unix_timestamp * 1000);
  var hours = date.getHours();
  var minutes = "0" + date.getMinutes();
  var seconds = "0" + date.getSeconds();

  var formattedTime =
    hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);

  return formattedTime;
}

// retrieve stories on page load
getStories();