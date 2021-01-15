url =`https://api.airtable.com/v0/app21K5M0hyi8ln3Y/Table%201?api_key=keyRQk40LCvcEo9s1`;

fetch(url)
     .then(response => response.json())
     .then(data => {
        const {records} = data;
  
        for(var i=0; i < data.records.length ; i++){
        const li = document.createElement("p");
        li.classList.add("utgifter");
    
        title= data.records[i].fields.title;
        description= data.records[i].fields.description;
        
        document.getElementById
  
        const markup = `
        <a href="/summary?=${data.records[i].id}" >
          <div id= "notesList">
              <p id="NotesTitle">${title} <p>
              <p id="NotesDescription">${description} <p>
              <p id="notesListDate">${data.records[i].fields.date}</p>
          </div></a>
        `;
       
        li.innerHTML = markup;
        document.getElementById("utgifter").appendChild(li);
     }
      })
