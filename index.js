



function searchRepositories(){
const searchTerms = document.getElementById('searchTerms').value
const searchURL = "https://api.github.com/search/repositories?q=" + searchTerms
console.log("Search URL is: " + searchURL)


$(document).ready(function(){
$.get(searchURL, function(respond){
  console.log(Object.keys(respond.items[0].owner))
  let reposHTML = "<ul>" +
  respond.items.map(
    repo =>{
    let name = repo.name
    let description = repo.description
    let url = repo.html_url
    let owner = repo.owner.login
    let ownerAvatar = repo.owner.avatar_url
    let ownerLink = repo.owner.html_url
return `<li><h3><a href='${url}'>${name}</a></h3>${description}<br><strong><a href='{ownerLink}'>${owner} <img src='${ownerAvatar}' height='20'></a><a href="#" onclick="showCommits(this)" data-owner=${owner} data-repository="${name}">Show Commits</a></li> `
  }).join("")
  + "</ul>"

  document.getElementById("results").innerHTML = reposHTML

})
});
}

function showCommits(el){
  repository = el.dataset.repository
  repositoryOwner = el.dataset.owner
  debugger
  let getCommitsURL = "https://api.github.com/" + repositoryOwner + "/" + repository + "/commits"
  $(document).ready(function(){
  $.get(getCommitsURL, function(respond){
    console.log(Object.keys(respond.items[0].owner))
    let commitsHTML = "<ul>" +
    respond.items.map(
      commit =>{
      let sha = commit.sha
      let authorName = commit.author.name
      let authorLogin = commit.author.login
      let authorAvatar = commit.author.avatar_url
  return `<li><strong>${sha} ${authorName} <img src='${authorAvatar}' height='20'> ${authorLogin}</li>`
    }).join("")
    + "</ul>"

    document.getElementById("details").innerHTML = commitsHTML
  })
  });
  }
