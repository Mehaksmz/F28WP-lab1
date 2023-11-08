var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://github.com/Mehaksmz/F28WP-lab1/blob/main/week%204/main.js');
ourRequest.onload = function() {
console.log(ourRequest.responseText);
};
ourRequest.send();