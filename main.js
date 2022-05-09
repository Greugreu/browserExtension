const api = "https://chympy.net/api/articles/";
const errors = document.querySelector('.errors');
const data = document.querySelector('.data');
const form = document.querySelector('.form-data');

const  searchForArticle = async ()  => {
    errors.textContent  = '';
    try {
        let myHeaders = new Headers();

        httpGetAsync(api,function (e) {

            let arr = JSON.parse(e);
            for (let i = 0 ; i < arr.length ; i++ ){
                data.innerHTML += `<h2> ${arr[i].Title}</h2>`
            }
        })

    }catch (error){
        console.log(error);
        errors.textContent = error.toString();
    }
}
window.addEventListener('load', searchForArticle)

function httpGetAsync(theUrl, callback)
{
    let xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.send(null);
}