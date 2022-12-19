const homeSignInBtn = document.getElementById("navLinkCreateAccount");
const gmailBtn = document.getElementById("gmailBtn");
const facebookBtn = document.getElementById("facebookBtn");

homeSignInBtn.addEventListener("click", () => {
        document.getElementById("home").hidden = true;
        document.getElementById("gmailFacebookPage").classList.remove("hidden");
});

gmailBtn.addEventListener("click", () => {
    document.getElementById("gmailFacebookPage").hidden = true;
    document.getElementById("signupSection").classList.remove("hidden");
})

facebookBtn.addEventListener("click", () => {
    document.getElementById("gmailFacebookPage").hidden = true;
    document.getElementById("signupSection").classList.remove("hidden");
})