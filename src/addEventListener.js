const homeSignInBtn = document.getElementById("navLinkCreateAccount")

homeSignInBtn.addEventListener("click", () => {
    document.getElementById("home").hidden = true;
    document.getElementById("gmailFacebookPage").classList.remove("hidden");
})

const gmailBtn = document.getElementById("gmailBtn")
const facebookBtn = document.getElementById("facebookBtn")

gmailBtn.addEventListener("click", () => {
    document.getElementById("gmailFacebookPage").hidden = true;
    document.getElementById("signupSection").classList.remove("hidden");
})

facebookBtn.addEventListener("click", () => {
    document.getElementById("gmailFacebookPage").hidden = true;
    document.getElementById("signupSection").classList.remove("hidden");
})