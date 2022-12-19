const homeSignInBtn = document.getElementById("navLinkCreateAccount");
const googleBtn = document.getElementById("googleBtn");
const facebookBtn = document.getElementById("facebookBtn");

homeSignInBtn.addEventListener("click", () => {
        document.getElementById("home").hidden = true;
        document.getElementById("googleFacebookPage").classList.remove("hidden");
});

googleBtn.addEventListener("click", () => {
    document.getElementById("googleFacebookPage").hidden = true;
    document.getElementById("signupSection").classList.remove("hidden");
})

facebookBtn.addEventListener("click", () => {
    document.getElementById("googleFacebookPage").hidden = true;
    document.getElementById("signupSection").classList.remove("hidden");
})