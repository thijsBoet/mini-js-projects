url = "https://api.chucknorris.io/jokes/random";
content = document.querySelector(".content");

btn = document.querySelector('.btn');
btn.addEventListener("click", () => {
  getData();
});

const getData = () => {
  ajax = new XMLHttpRequest();

  ajax.open("GET", url, true);
  ajax.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      const joke = JSON.parse(this.responseText);
      content.textContent = joke.value;
    } else {
      console.log({
        status: ajax.status,
        text: ajax.statusText,
        state: ajax.readyState,
      });
    }
  };

  ajax.onerror = function(){
    console.log("XMLHttpRequest Error")
  };

  ajax.send();
}

