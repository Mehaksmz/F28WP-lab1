var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://mehaksmz.github.io/F28WP-lab1/week4/cities1.json');
ourRequest.onload = function() {
console.log(ourRequest.responseText);
};
ourRequest.send();

var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://your-github-username.github.io/your-repositoryname/cities1.json');
ourRequest.onload = function() {
var ourData = ourRequest.responseText;
console.log(ourData[0]);
};
ourRequest.send();