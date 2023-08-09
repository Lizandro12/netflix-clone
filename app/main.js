
/* FUNCIONALIDADE QUE EXIBE E ESCONDE O SUBMENU do USUÁRIOS */

const userIcon = document.querySelector(".navBar__list__extras-user");

const upIcon = document.querySelector(".user__icon");

const subMenuOfUsers = document.querySelector(".settings__container");

userIcon.addEventListener("mouseover", displaySubmenuOfUsers);
userIcon.addEventListener("mouseout", hideSubmenuOfUsers);

function displaySubmenuOfUsers(){
    upIcon.classList.add("active")
    subMenuOfUsers.classList.add("active")

}

function hideSubmenuOfUsers(){
    upIcon.classList.remove("active");
    subMenuOfUsers.classList.remove("active");
}

/* FUNCIONALIDADE QUE EXIBE E ESCONDE O SUBMENU DAS NOTIFICAÇÕES */

const bellIcon = document.querySelector(".navBar__list-extras-extra");

const subMenuOfNotifications = document.querySelector(".notifications__container")

bellIcon.addEventListener("mouseover",displaySubmenuOfNotifications)
bellIcon.addEventListener("mouseout",hideSubmenuOfNotifications)

function displaySubmenuOfNotifications(event){
    subMenuOfNotifications.classList.add("active")
}

function hideSubmenuOfNotifications(event){
    subMenuOfNotifications.classList.remove("active")
}

//USING TMDB API

const apiKEy = 'api_key=131374a70a23eebf5dc4b5caa10ef409';
const baseURL = 'https://api.themoviedb.org/3'
const urlAPI  = baseURL + '/discover/movie?sort_by=popularity.desc&' + apiKEy;
const imageURL = 'https://image.tmdb.org/t/p/w500'

const movieElement = document.getElementById("movie__list__1")

async function getAPIMovie(url){
    const response = await fetch(url);
    const movies = await response.json();
    showMovies(movies.results);
}

getAPIMovie(urlAPI);

function showMovies(data){

    data.forEach(element => {
        movieElement.innerHTML += `
            <li class="my__lists__list--item tmda carroussel--item">
            <img src="${imageURL+element.poster_path}" alt="" class="my__lists__list--image">
            </li>
        `;
    })
}

//CARROUSSEL

const carr = document.querySelector(".carr");
const card = document.querySelectorAll(".carroussel--item")

let indx = 0;

function carroussel(){

    indx++
 
    if(indx > 4 ){
        indx = 0;
    }

        carr.style.transform = `translateX(${-indx *1200}px)`
        carr.style.transition = "all 0.5s"


}

setInterval(carroussel, 2500)