document.querySelector("form").addEventListener("submit", e => {
    e.preventDefault();

url ='https://api.airtable.com/v0/app21K5M0hyi8ln3Y/Table%201';

var name = document.getElementById("addName").value;
var description = document.getElementById("addDescription").value;

const addData = {
    "fields":{
        "Name": name,
        "Description": description,
    }
}

fetch (url, {method: 'POST' , body: JSON.stringify(addData),
headers: {'Authorization': 'Bearer keyRQk40LCvcEo9s1', 'Content-Type': 'application/json'}})
.then(response => response.json())
.then(json => {console.log(json)
    window.location.href= "/";})
.catch(err => console.log (err));

});

