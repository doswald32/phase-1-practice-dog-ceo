console.log('%c HI', 'color: firebrick')

// document.addEventListener("DOMContentLoaded", function () {
//     fetch("https://dog.ceo/api/breeds/image/random/4")
//     .then((res) => res.json())
//     .then((data) => {
//         data.message.forEach(function (imageURL) {
//             let li = document.createElement('li');
//             let img = document.createElement('img');
//             li.appendChild(img);
//             img.src = imageURL;
//             let list = document.getElementById('dog-breeds');
//             list.appendChild(li);
//             console.log(li.innerHTML);
//     })});
// });


document.addEventListener("DOMContentLoaded", function () {
    fetch("https://dog.ceo/api/breeds/list/all")
    .then((res) => res.json())
    .then((data) => {
        for (let breed in data.message) {
            let li = document.createElement('li');
            li.textContent = breed;
            let list = document.getElementById('dog-breeds');
            list.appendChild(li);
            li.addEventListener('click', () => li.style.color = 'blue')
        };
})});