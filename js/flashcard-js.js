// This is the js for flashcard.html

let questions = ["Favorite exotic fruit:",
                 "Choose a condiment",
                 "How do you like your fish:",
                 "Preferred flavor:",
                 "Best fast food restaurant:",
                 "The most goated chef is..."];
let answers = [["pineapple", "guava", "mango", "coconut"],
               ["ketchup", "mustard", "mayonaise", "sriracha"],
               ["raw/smoked", "grilled", "fried", "I don't like fish"],
               ["savoury", "sweet", "spicy", "sour"],
               ["McDonalds", "Burger King", "A&W", "Wendy's"],
               ["Gordon Ramsay", "Jamie Oliver", "Alaine Ducasse", "Thomas Keller"]];
let question = 0;
let answer1;

document.getElementById("profile_button").addEventListener("click", function(event) {
  location.href = "profile.html";
});

document.getElementById("startButton").addEventListener("click", function(event) {
  if (document.getElementById("graph")) {
    document.getElementById("graph").remove();
  }

  let txt = questions[question];
  document.getElementById("questionText").innerText = txt;
  let button = document.getElementById("startButton");
  button.style.display = "none";

  answer1 = document.createElement("BUTTON");
  answer1.className = "answerButton";
  answer1.innerHTML = answers[question][0];
  document.getElementById("answerBox").appendChild(answer1);

  answer1 = document.createElement("BUTTON");
  answer1.className = "answerButton";
  answer1.innerHTML = answers[question][1];
  document.getElementById("answerBox").appendChild(answer1);

  answer1 = document.createElement("BUTTON");
  answer1.className = "answerButton";
  answer1.innerHTML = answers[question][2];
  document.getElementById("answerBox").appendChild(answer1);

  answer1 = document.createElement("BUTTON");
  answer1.className = "answerButton";
  answer1.innerHTML = answers[question][3];
  document.getElementById("answerBox").appendChild(answer1);

  question ++;
});

document.addEventListener('click', function(event) {
  let target = event.target;
  if (target.classList.contains('answerButton')) {
      document.getElementsByClassName("answerButton")[0].remove();
      document.getElementsByClassName("answerButton")[0].remove();
      document.getElementsByClassName("answerButton")[0].remove();
      document.getElementsByClassName("answerButton")[0].remove();

      let image = document.createElement("img")
      image.setAttribute('src', 'images/graph' + question + '.jpeg');
      image.setAttribute('id', 'graph');
      image.setAttribute('alt', 'na');
      document.getElementById("questionBox").appendChild(image);

      document.getElementById("startButton").style.display = "block";
  }
});

document.getElementById("about_footer").addEventListener("click", function(event) {
    location.href = "index.html";
});

document.getElementById("contact_footer").addEventListener("click", function(event) {
    location.href = "index.html";
});

document.getElementById("flashmatchlogo").addEventListener("click", function(event) {
    location.href = "index.html";
});


document.getElementById("header_logo").addEventListener("click", function(event) {
    location.href = "index.html";
});

document.getElementById("header_title").addEventListener("click", function(event) {
    location.href = "index.html";
});

document.getElementById("flashcard_genres").addEventListener("click", function(event) {
    location.href = "genre.html";
});

document.getElementById("about_link").addEventListener("click", function(event) {
    location.href = "index.html";
});

document.getElementById("contact_link").addEventListener("click", function(event) {
    location.href = "index.html";
});

document.getElementById("about_footer").addEventListener("click", function(event) {
    location.href = "index.html";
});

document.getElementById("contact_footer").addEventListener("click", function(event) {
    location.href = "index.html";
});
