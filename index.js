window.onload = function () {
  var b = document.querySelector("#search-form");
  b.addEventListener("submit", fetchImage);

  let result = document.getElementById("result");
  let avatar = document.createElement("img");
  result.appendChild(avatar);

  // var a = document.getElementById("username");

  /*  function test() {
    var aa = a.value;
    alert("hh" + aa);
  }
  */

  function fetchImage(e) {
    e.preventDefault();
    console.log("worked");
    const username = document.getElementById("username").value;
    const fetchUrl = "https://api.github.com/users/" + username;
    document.getElementById("username").value = "";

    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        injectImg(data);
      })
      .catch((err) => console.log(err));
  }

  function injectImg(data) {
    avatar.src = data.avatar_url;
    //result.removeChild[0];
    //result.appendChild(avatar);
    //result.appendChild(avatar);
  }

  /*
  function test1(e) {
    e.preventDefault();
    console.log("worked");
    const username = document.getElementById("username").value;
    const fetchUrl = "https://api.github.com/users/{username}";

    fetch("https://api.github.com/users/sundevilyang")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
*/
  //  let req = new Request("https://api.github.com/users/" + a.value);
};
