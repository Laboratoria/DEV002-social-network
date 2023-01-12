export const wall = () => {
const $sectionW = document.createElement("section"),
$divContainerWall = document.createElement("div"),
$divSaludo = document.createElement("div"),
$imgLogoW = document.createElement("img"),
$h2name = document.createElement("h2"),
$divPost = document.createElement("div"),
$h3Post = document.createElement("h3"),
$imgWall = document.createElement("img"),
$divPublication = document.createElement("div"),
$divPublicUser = document.createElement("div"),
$divReactions = document.createElement("div"),
$divSignOffCat = document.createElement("div"),
$btnSingOff = document.createElement("button"),
$imgWallCat = document.createElement("img")

//---- HTML Semantico ----//

$sectionW.appendChild($divContainerWall);
$divContainerWall.appendChild($divSaludo);
$divSaludo.appendChild($imgLogoW);
$divSaludo.appendChild($h2name);

$divContainerWall.appendChild($divPost);
$divPost.appendChild($h3Post);
$divPost.appendChild($imgWall);

$sectionW.appendChild($divPublication);
$divPublication.appendChild($divPublicUser);
$divPublication.appendChild($divReactions);

$sectionW.appendChild($divSignOffCat);
$divSignOffCat.appendChild($btnSingOff);
$divSignOffCat.appendChild($imgWallCat);

}