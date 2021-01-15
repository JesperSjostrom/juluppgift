document.querySelector("p").addEventListener("click", e => {
    e.preventDefault();

url ='https://api.airtable.com/v0/appw9OO3eoSUmoKdt/Receipt%20Log';

var title = document.getElementById("title").value;
var description = document.getElementById("description").value;

const addData = {
    "fields":{
        "title": title,
        "description": description,
    }
}

fetch (url, {method: 'POST' , body: JSON.stringify(addData),
headers: {'Authorization': 'Bearer keyRQk40LCvcEo9s1', 'Content-Type': 'application/json'}})
.then(response => response.json())
.then(json => {console.log(json)
    window.location.href= "/";})
.catch(err => console.log (err));

});

