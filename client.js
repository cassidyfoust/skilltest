let stories = "";
var more = '<div style="height: 1000px; background: #EEE;"></div>';

function getStories() {
  fetch("https://hacker-news.firebaseio.com/v0/newstories.json")
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      stories = myJson;
      for (let i = 0; i < 4; i++) {
        getFirstStoryObjects(myJson[i]);
      }
    });
}

getStories();

function getFirstStoryObjects(json) {
  fetch(`https://hacker-news.firebaseio.com/v0/item/${json}.json?print=pretty`)
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

function getScrollStoryObjects(json) {
  fetch(`https://hacker-news.firebaseio.com/v0/item/${json}.json?print=pretty`)
    .then((response) => {
      return response.json();
    })
    .then((myJson) => {
      time = formatTime(myJson.time);
      let more =
        "<tr><td><h2>" +
        myJson.title +
        "</h2>" +
        "<p> Posted by <strong>" +
        myJson.by +
        "</strong> at <strong>" +
        time +
        "</strong></p></td></tr>";
      content.innerHTML += more;
    });
}

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

let newContent = 4;

var wrapper = document.getElementById("wrapper");
var content = document.getElementById("stories");

function addEvent(obj, ev, fn) {
  if (obj.addEventListener) obj.addEventListener(ev, fn, false);
  else if (obj.attachEvent) obj.attachEvent("on" + ev, fn);
}

function scroller() {
  content.innerHTML =
    wrapper.scrollTop +
    "+" +
    wrapper.offsetHeight +
    "+100>" +
    content.offsetHeight;
  if (wrapper.scrollTop + wrapper.offsetHeight + 100 > content.offsetHeight) {
    newContent += 1;
    getScrollStoryObjects(stories[newContent]);
  }
}
addEvent(wrapper, "scroll", scroller);
