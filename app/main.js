
/* FUNCIONALIDADE QUE EXIBE E ESCONDE O SUBMENU */

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