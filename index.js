



function searchRepositories(){
const searchTerms = document.getElementById('searchTerms').value
const searchURL = "https://api.github.com/search/repositories?q=" + searchTerms
console.log("Search URL is: " + searchURL)


$(document).ready(function(){
$.get(searchURL, function(response){
  console.log(Object.keys(response.items[0].owner))
  let reposHTML = "<ul>" +
  response.items.map(
    repo =>{
    let name = repo.name
    let description = repo.description
    let url = repo.html_url
    let owner = repo.owner.login
    let ownerAvatar = repo.owner.avatar_url
    let ownerLink = repo.owner.html_url
return `<li><h2><a href='${url}'>${name}</a></h2><br>${description}<br><strong><a href='{ownerLink}'>${owner} <img src='${ownerAvatar}' height='20'></a></li>`
  }).join("")
  + "</ul>"


})
$("#results").html(reposHTML)
});




}
