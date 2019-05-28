"use strict";

window.onload = input.focus();

(function() {
  const words = [
    "this",
    "function",
    "if()",
    "data",
    "var",
    "const",
    "return",
    "the",
    "i",
    "a",
    "value",
    "else",
    "for",
    "true",
    "length",
    "let",
    "name",
    "let",
    "null",
    "options",
    "is",
    "type",
    "of",
    "param",
    "event",
    "new",
    "element",
    "and",
    "object",
    "prototype",
    "x",
    "keyStroke",
    "id",
    "string",
    "self",
    "on",
    "from",
    "push",
    "class",
    "<a>",
    "<li>",
    "<div>",
    "<td>",
    "<href>",
    "<span>",
    "<html>",
    "<&nbsp>",
    "<tr>",
    "<ul>",
    "<p>",
    "<name>",
    "<script>",
    "<id>",
    "<code>",
    "<type>",
    "<text>",
    "<table>",
    "<td>",
    "<tr>",
    "<title>",
    "<style>",
    "<css>",
    "<i>",
    "<top>",
    "<src>",
    "</ br>",
    "<http://>",
    "<js>",
    "<dd>",
    "<dt>",
    "<class>",
    "<content>",
    "<th>",
    "<link>",
    "<javascript>",
    "<width>",
    "<h4>",
    "<body>",
    "<h3>",
    "<head>",
    "<html>",
    "color",
    "border",
    "background",
    "margin",
    "left",
    "width",
    "font",
    "top",
    "padding",
    "content",
    "right",
    "::before",
    "btn",
    "height",
    "bottom",
    "none",
    "position",
    "1px",
    "webkit",
    "ui",
    "display",
    "a",
    "text",
    "box",
    "size",
    "radius",
    "table",
    "icon",
    ":hover",
    "li",
    "block",
    "important",
    "navbar",
    "5px",
    "solid",
    "align",
    "nav",
    "rgba",
    "10px",
    "moz",
    "button",
    "shadow",
    "focus",
    "0px",
    "form",
    "col",
    "tr",
    "auto",
    "panel",
    "list",
    "disabled",
    "float",
    "menu",
    "inline",
    "20px",
    "transition",
    "image",
    "4px",
    "x",
    "style",
    "item",
    "opacity",
    "type",
    "dropdown",
    "weight",
    "center",
    "fa",
    "relative",
    "absolute",
    "header",
    "<header>",
    "<main>",
    "<article>",
    "<footer>",
    "<aside>"
  ];

  const randomWord = words => {
    const word = words[Math.floor(Math.random() * words.length)];
    wordLetters = word.split("");
    return word;
  };

  const displayWord = document.getElementById("displayWord");
  const input = document.getElementById("input");

  const characterCountDisplay = document.getElementById(
    "characterCountDisplay"
  );
  const characterCountPerMinuteDisplay = document.getElementById(
    "characterCountPerMinuteDisplay"
  );

  const wordCountDisplay = document.getElementById("wordCountDisplay");
  const wordCountPerMinuteDisplay = document.getElementById(
    "wordCountPerMinuteDisplay"
  );

  const audioToggle = document.getElementById("audioToggle");

  const bell = new Audio("assets/mp3/bell.mp3");

  const keyStrokeSound = [
    new Audio("assets/mp3/keyStroke1.mp3"),
    new Audio("assets/mp3/keyStroke2.mp3"),
    new Audio("assets/mp3/keyStroke3.mp3")
  ];

  const typeSound = () => {
    keyStrokeSound[Math.floor(Math.random() * 3)].play();
  };

  let wordLetters;

  let characterCount = 0;
  let wordCount = 0;

  const compareTypedWord = e => {
    for (let i = 0; i < wordLetters.length; i++) {
      if (e.key === wordLetters[i]) {
        characterCount++;
        characterCountDisplay.innerText = `Characters typed: ${characterCount}`;
        charactersTypedPerMinute();
        typeSound();
        if (
          e.key === wordLetters[wordLetters.length - 1] &&
          e.target.value.length === wordLetters.length
        ) {
          wordCount++;
          wordCountDisplay.innerText = `Words typed: ${wordCount}`;
          wordsTypedPerMinute();
          e.target.value = "";
          bell.play();
          displayWord.innerText = randomWord(words);
        }
      }
    }
  };

  const start = new Date().getTime();

  const charactersTypedPerMinute = () => {
    function calculate() {
      let now = new Date().getTime();
      let secondsPassed = parseInt((now - start) / 1000);
      let characterCountPerMinute = parseInt(
        characterCount / (secondsPassed / 60)
      );
      characterCountPerMinuteDisplay.innerText = `Characters per minute: ${characterCountPerMinute}`;
    }
    setInterval(calculate, 1000);
  };

  const wordsTypedPerMinute = () => {
    function calculate() {
      let now = new Date().getTime();
      let secondsPassed = parseInt((now - start) / 1000);
      let wordCountPerMinute = parseInt(wordCount / (secondsPassed / 60));
      wordCountPerMinuteDisplay.innerText = `Words per minute: ${wordCountPerMinute}`;
    }
    setInterval(calculate, 1000);
  };

  let muted = false;

  const toggleAudio = () => {
    if (muted) {
      keyStrokeSound.forEach(keyStroke => (keyStroke.volume = 1));
      bell.volume = 1;
      muted = false;
      audioToggle.src = "assets/img/sound.svg";
      input.focus();
    } else {
      keyStrokeSound.forEach(keyStroke => (keyStroke.volume = 0));
      bell.volume = 0;
      muted = true;
      input.focus();
      audioToggle.src = "assets/img/mute-sound.svg";
    }
  };

  displayWord.innerText = randomWord(words);

  input.addEventListener("keyup", compareTypedWord);
  audioToggle.addEventListener("click", toggleAudio);
})();
