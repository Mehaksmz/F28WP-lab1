var ourRequest = new XMLHttpRequest();
ourRequest.open('GET', 'https://mehaksmz.github.io/F28WP-lab1/cities1.json');
ourRequest.onload = function() {
console.log(ourRequest.responseText);
};
ourRequest.send();