const connectUser = ()=>
{
    const url = "https://jsonplaceholder.typicode.com/users"
    fetch(url)
    .then(res=>res.json())
    .then(data=>displayData(data))
}

const displayData = (comment)=>
{
    const commentList = document.getElementById("comment-list");
    commentList.innerHTML = "";

//     "postId": 1,
// "id": 1,
// "name": "id labore ex et quam laborum",
// "email": "Eliseo@gardner.biz",
// "body": "laudantium enim quasi est quidem magnam voluptate ipsam eos tempora quo necessitatibus dolor quam autem quasi reiciendis et nam sapiente accusantium"
    comment.forEach(element => {
        const divBox = document.createElement("div");
        divBox.innerHTML =`
        <div class="comment-div">
        <h5>${element.name}</h5>
        <h4>${element.address.street}</h4>
    </div>
        `
        commentList.append(divBox);
    });
}
connectUser()

// "id": 1,
// "name": "Leanne Graham",
// "username": "Bret",
// "email": "Sincere@april.biz",
// "address": {
// "street": "Kulas Light",
// "suite": "Apt. 556",
// "city": "Gwenborough",
// "zipcode": "92998-3874",
// "geo": {
// "lat": "-37.3159",
// "lng": "81.1496"