//saltare da una casella all'altra quando scrivi
$(".letterBox").keyup(function () {
  if (this.value.length >= $(this).attr("maxlength")) {
    $(this).next().focus();
  }
});
$(".letterBox").keyup(function () {
  var key = event.keyCode || event.charCode;
  if (key == 8 || key == 46) {
    $(this).prev().focus();
  }
});

//recupera l'array delle soluzioni dall'api
const ul = document.getElementById('solutionsUl');
const list = document.createDocumentFragment();
let url = "http://localhost:9013/api/parole";

let response = fetch(url, {
  method: 'GET'
})
.then((response) => {
  return response.json();
})
.then((data) => {
  let solutions = data;

console.log(solutions);

  solutions.map(function(solutions) {
    let list = document.createElement("li");
    let words = document.createTextNode(`${solutions.parola}`);
    list.appendChild(words);
    document.getElementById("solutionsUl").appendChild(list);
    list.appendChild(words);
  });
})
.catch(function(error) {
  console.log(error);
});



function myFunction() {
  var x = document.getElementById("letterForm");
  var text = "";
  var i;
  for (i = 0; i < x.length ;i++) {
    text += x.elements[i].value + "<br>";
  }
  console.log((text));
  document.getElementById("demo").innerHTML = text;
}


let randomLetters = [];
let correctLetters = [];
let wrongLetters = [];

let letterToSend = {
  correctLettersObj: "",
  randomLettersObj: "",
  wrongLettersObj: ""
}

let button = document.getElementById("submitBtn");

eventHandler();

function eventHandler(){
  button.addEventListener('click', sendData);
}

function sendData(){

  const myNode = document.getElementById("solutionsUl");
  myNode.innerHTML = '';


  for (let i = 0; i < 5; i++) {
    let corrId = "correct"+(i+1);
    if(document.getElementById(corrId).value == ""){
      correctLetters[i] = ".";
    }else{
      correctLetters[i] = document.getElementById(corrId).value;
    }
  }

  for (let i = 0; i < 5; i++) {
    let randId = "random"+(i+1);
    if(document.getElementById(randId).value == ""){
      randomLetters[i] = ".";
    }else{
      randomLetters[i] = document.getElementById(randId).value;
    }
  }

  for (let i = 0; i < 5; i++) {
    let wrongId = "wrong"+(i+1);
    if(document.getElementById(wrongId).value == ""){
      wrongLetters[i] = "";
    }else{
      wrongLetters[i] = document.getElementById(wrongId).value;
    } 
  }

  letterToSend.correctLettersObj = correctLetters;
  letterToSend.randomLettersObj = randomLetters;
  letterToSend.wrongLettersObj = wrongLetters;

  const myJSON = JSON.stringify(letterToSend);

  const headers = new Headers()
  headers.append("Content-Type", "application/json")

  fetch("http://localhost:9013/api/parole", {
    method: "POST",
    headers,
    //mode: "cors",
    body: myJSON,
  })

  setTimeout(() => {
    let response = fetch("http://localhost:9013/api/soluzioni", {
    method: 'GET'
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let solutions = data;

    const ul = document.querySelector('#solutionsUl');
    // get all children
    const childern = ul.childNodes;
    // iterate over all child nodes
    childern.forEach(li => {
       console.log(li);
       li.remove();
    });
      console.log(solutions);
      solutions.map(function (solution) {
        let list = document.createElement("li");
        let word = document.createTextNode(solution);
        list.appendChild(word);
        document.getElementById("solutionsUl").appendChild(list);
        list.appendChild(word);
    });
  })
  .catch(function(error) {
    console.log(error);
  });
  }, 500);
  
}