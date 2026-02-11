function reload() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => displayData(data))
}

const displayData = (data)=>
{
    const postContainer = document.getElementById("post-container");
    data.forEach((element) => {
        // console.log(element);
        const li = document.createElement("li");
        li.innerText = element.title;
        postContainer.appendChild(li);
    });
    console.log(data);
}