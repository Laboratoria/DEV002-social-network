const homeSignInBtn = document.getElementById("navLinkCreateAccount");
const emailBtn = document.getElementById("emailBtn");
const facebookBtn = document.getElementById("facebookBtn");

homeSignInBtn.addEventListener("click", () => {
        document.getElementById("home").hidden = true;
        document.getElementById("emailFacebookPage").classList.remove("hidden");
});

emailBtn.addEventListener("click", () => {
    document.getElementById("emailFacebookPage").hidden = true;
    document.getElementById("register").classList.remove("hidden");
})

facebookBtn.addEventListener("click", () => {
    document.getElementById("emailFacebookPage").hidden = true;
    document.getElementById("register").classList.remove("hidden");
})