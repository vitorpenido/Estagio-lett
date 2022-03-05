const main = () => { };

//Delet the elements

let repo;

const handleSubmit = async () => {
  var e = document.getElementById("repo-container")
  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child)
    child = e.lastElementChild
  }

  // Get elements
  const inputElement = document.getElementById("user-input-org");

  // Fetch github API
  const response = await fetch(
    `https://api.github.com/orgs/${inputElement.value}/repos`
  );

  // Convert to json readable format
  const data = await response.json();

  // for (let i = 0; i < data.length; i++) {
  //   console.log(data[i].name);
  // }

  // loop over data array
  // map, filter, find
  data.map((item) => {
    console.log(item.name)
  });

  repo = data;

  // Show a list of repos on screen
  const containerElement = document.getElementById("repo-container");

  const firstNData = data.slice(0, 50);

  firstNData.map((item) => {
    const repoNameTag = document.createElement("h1");
    repoNameTag.textContent = item.name;


    const repoCardTag = document.createElement("a");
    repoCardTag.href = item.html_url;
    repoCardTag.target = "_blank";
    repoCardTag.style.color = "#022601";
    repoCardTag.style.textDecoration = "none";
    repoCardTag.appendChild(repoNameTag);
    repoCardTag.className = "card";


    containerElement.appendChild(repoCardTag);
  });
};

const help = () => {
  var e = document.getElementById("repo-container")
  var child = e.lastElementChild;
  while (child) {
    e.removeChild(child)
    child = e.lastElementChild
  }

  let name2 = document.getElementById("filter");

  const found = repo.find(element => element.name === name2.value);
  const firstNDate = repo.slice(0, 50);
  const containerElement = document.getElementById("repo-container");



  if (found != undefined) {
    const repoNameTag = document.createElement("h1");
    repoNameTag.textContent = found.name;


    const repoCardTag = document.createElement("a");
    repoCardTag.href = found.html_url;
    repoCardTag.target = "_blank";
    repoCardTag.style.color = "#022601";
    repoCardTag.style.textDecoration = "none";
    repoCardTag.appendChild(repoNameTag);
    repoCardTag.className = "card";


    containerElement.appendChild(repoCardTag);
  }
}




const btn = document.querySelector("#refresh");

btn.addEventListener("click", function () {

  location.reload();


});

main();
