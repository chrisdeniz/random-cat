let generate = document.getElementById('generate');
generate.addEventListener('click',fetchPics);

function fetchPics(){
    let catsImgDiv = document.querySelector('.catsImgDiv')
    catsImgDiv.innerHTML=''
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(response => response.json ())
    .then((data) => {
        let catsImgUrl = data[0].url 
        let catsImgEl = document.createElement("img")
        catsImgEl.setAttribute('src',`${catsImgUrl}`)
        let catsImgDiv = document.querySelector('.catsImgDiv')
        catsImgDiv.appendChild(catsImgEl)
        catsImgDiv.classList.add("showcase")
    })
    .catch(err => console.log(err))
}