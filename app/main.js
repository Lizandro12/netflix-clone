
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