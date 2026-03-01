function reload() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => displayData(data))
}

// const displayData = (data)=>
// {
//     const postContainer = document.getElementById("post-container");
//     data.forEach((element) => {
//         // console.log(element);
//         const li = document.createElement("li");
//         li.innerText = element.title;
//         postContainer.appendChild(li);
//     });
//     console.log(data);
// }


// {
// "userId": 1,
// "id": 1,
// "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
// "body": "quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto"
// }

const displayData = (post)=>{
    
        const postContainer = document.getElementById("post-container");
        postContainer.innerHTML = "";
    post.forEach(element => {
        const card = document.createElement("div");


        card.innerHTML = `
        <div class="post-card">
            <h2>${element.title}</h2>
            <p>${element.body}</p>
            
        </div>`
        postContainer.appendChild(card);
        
    });
}

// displayData()
// reload()
