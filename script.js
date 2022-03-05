// Delete the elements
let repo;

const main = () => {
  const btn = document.querySelector("#refresh");

  btn.addEventListener("click", () => {
    location.reload();
  });
};

const clearElements = () => {
  const e = document.getElementById("repo-container");
  let child = e.lastElementChild;
  while (child) {
    e.removeChild(child);
    child = e.lastElementChild;
  }
};

const handleSubmit = async () => {
  clearElements();

  const inputElement = document.getElementById("user-input-org");

  // Fetch github API
  const response = await fetch(
    `https://api.github.com/orgs/${inputElement.value}/repos?per_page=50`
  );

  // Convert to json readable format
  const data = await response.json();

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
  clearElements();

  let name2 = document.getElementById("filter");

  const found = repo.filter((element) =>
    element.name.toUpperCase().includes(name2.value.toUpperCase())
  );
  console.log("found", found);
  const containerElement = document.getElementById("repo-container");

  if (found !== undefined && found.length > 0) {
    found.map((item) => {
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
  }
};

main();
