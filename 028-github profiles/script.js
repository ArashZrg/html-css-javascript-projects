"use strict ";

const info = document.querySelector(".info-box");
const inputValue = document.querySelector(".search-box");

inputValue.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    updateInfo(inputValue.value);
  }
});

const fetchData = async function (userName) {
  const request = await fetch(`https://api.github.com/users/${userName}`);
  const response = await request.json();
  return response;
};

const fetchRepos = async function (reposUrl) {
  const request = await fetch(reposUrl);
  const response = await request.json();
  return response;
};

const updateInfo = async function (userName) {
  const data = await fetchData(userName);
  const repos = await fetchRepos(data.repos_url);

  const html = `
    <img src="${data.avatar_url}" alt="" id="profile-image">
          
          <div class="text-info">
            <h2>${data.name}</h2>
            <p>${data.bio}</p>
          </div>
          
          <div id="status">
            <p class="followers">${data.followers} Followers</p>
            <p class="following">${data.following} Following</p>
            <p class="repos">${data.public_repos} Repos</p>
          </div>
    `;
  info.innerHTML = html;
  const reposDiv = document.createElement("div");
  reposDiv.id = "repos-name";

  for (let i = 0; i < repos.length; i++) {
    if (i === 5) {
      break;
    }
    const div = document.createElement("div");
    div.textContent = repos[i].name;
    reposDiv.appendChild(div);
  }
  info.appendChild(reposDiv);
};

// updateInfo("AminAbdollahpour");
