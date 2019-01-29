



function searchRepositories(){
const searchTerms = document.getElementById('searchTerms').value
const searchURL = "https://api.github.com/search/repositories?q=" + searchTerms
console.log("Search URL is: " + searchURL)


$(document).ready(function(){
$.get('searchURL'), function(response){
  $("#results").html(response)
}

});
debugger
}
