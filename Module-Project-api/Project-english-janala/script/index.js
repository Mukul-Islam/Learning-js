const connetLesson = () => {
    const url = "https://openapi.programming-hero.com/api/levels/all"
    fetch(url)
        .then(res => res.json())
        .then(json => displayData(json.data))
}

const connectLevelData = (id) => {
    const url = `https://openapi.programming-hero.com/api/level/${id}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            
            const activebtn = document.getElementById(`active-btn-${id}`);
                console.log(activebtn);
            activebtn.classList.add("active");
            displayLevelData(data.data)})
};
const displayLevelData = (words) => {
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML ="";
    if (words.length == 0) {
        // alert("no one detected");
        wordContainer.innerHTML =
            `
         <div class="col-span-full py-4  text-center">
         <img class="mx-auto" src="./assets/alert-error.png" alt="" srcset="">
        <p class="text-gray-400 py-2">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h2 class="text-4xl font-bold">নেক্সট Lesson এ যান</h2>
       </div>`;
    }
    // const emptyState = document.getElementById("empty-state");
    // if (emptyState) emptyState.classList.add("hidden");


    console.log(words)
    words.forEach(element => {
        const divList = document.createElement("div");
        divList.innerHTML = `
        <div class="bg-white p-10 text-center  shadow-md rounded-lg space-y-2">
            <h1 class="font-bold text-xl">${element.word}</h1>
            <h5>Meaning/Pronounciation</h5>
            <h1 class="font-bangla font-semibold text-2xl">"${element.meaning}"</h1>
             <div class="flex items-center justify-between">
            <button class ="btn"><i class="fa-solid fa-circle-info"></i></button>
            <button class = "btn"><i class="fa-solid fa-volume-high"></i></button>
        </div>
        </div>`
        wordContainer.append(divList);
    });
};
//------------- displayData------------
const displayData = (lessons) => {
    const lessonContainer = document.getElementById("lesson-container");
    lessonContainer.innerHTML = "";
    lessons.forEach(element => {
        const divList = document.createElement("div");
        divList.innerHTML = `
        <button id="active-btn-${element.level_no}" onclick="connectLevelData(${element.level_no})" class="btn btn-outline btn-primary"><i class="fa-solid fa-book-open"></i>Lesson-${element.level_no}</button>
        `
        lessonContainer.append(divList);

    });
}

connetLesson()