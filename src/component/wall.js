export const wall = () => {
  const $sectionW = document.createElement("section"), //padre de tres
    $divContainerWall = document.createElement("div"), //hijo 1
    $divSaludo = document.createElement("div"),
    $imgLogoW = document.createElement("img"),
    $h2name = document.createElement("h2"),
    $containerOrange = document.createElement("div"), //hijo 2
    $divRightOrange = document.createElement("div"),
    $divImgWall = document.createElement("div"),
    $imgWall = document.createElement("img"),
    $divLeftOrange = document.createElement("div"),
    $divH3Post = document.createElement("div"),
    $h3Post = document.createElement("h3"),
    $containerFormWall = document.createElement("div"),
    $formWall = document.createElement("form"),
    $inputPublication = document.createElement("input"),
    $inputBtnWall = document.createElement("input"),
    $containerPublication = document.createElement("div"), // hijo de section y padre de dos 2
    $divPublicUser = document.createElement("div"), //padre gris y blanca   hijo 1
    $divPublicU = document.createElement("div"), //parte gris
    $divReactions = document.createElement("div"), //parte blanca padre de tres
    $divReactionLikes = document.createElement("div"), //padrecorazon
    $imgHeart = document.createElement("img"),
    $inputReactionLikes = document.createElement("input"),
    $divReactionEdit = document.createElement("div"), //padreeditar
    $inputReactionEdit = document.createElement("input"),
    $divReactionDelete = document.createElement("div"), //padre eliminar
    $inputReactionDelete = document.createElement("input"),
    $divSignOffCat = document.createElement("div"), //hijo 2
    $btnSingOff = document.createElement("button"),
    $imgWallCat = document.createElement("img");

  //---- HTML Semantico ----//

  $sectionW.appendChild($divContainerWall); //HIJO PRINCIPAL 1
  $divContainerWall.appendChild($divSaludo);
  $divSaludo.appendChild($imgLogoW);
  $divSaludo.appendChild($h2name);

  $sectionW.appendChild($containerOrange); //HIJO PRINCIPAL 2
  $containerOrange.appendChild($divRightOrange);
  $divRightOrange.appendChild($divImgWall);
  $divImgWall.appendChild($imgWall);

  $containerOrange.appendChild($divLeftOrange);
  $divLeftOrange.appendChild($divH3Post);
  $divH3Post.appendChild($h3Post);
  $divLeftOrange.appendChild($containerFormWall);
  $containerFormWall.appendChild($formWall);
  $formWall.appendChild($inputPublication);
  $formWall.appendChild($inputBtnWall);

  $sectionW.appendChild($containerPublication); //HIJO PRINCIPAL 3
  $containerPublication.appendChild($divPublicUser);
  $divPublicUser.appendChild($divPublicU);
  $divPublicUser.appendChild($divReactions);

  $divReactions.appendChild($divReactionLikes);
  $divReactionLikes.appendChild($imgHeart);
  $divReactionLikes.appendChild($inputReactionLikes);

  $divReactions.appendChild($divReactionEdit);
  $divReactionEdit.appendChild($inputReactionEdit);

  $divReactions.appendChild($divReactionDelete);
  $divReactionDelete.appendChild($inputReactionDelete);

  $containerPublication.appendChild($divSignOffCat);
  $divSignOffCat.appendChild($btnSingOff);
  $divSignOffCat.appendChild($imgWallCat);

  //---------- ATRIBUTOS -------------//
};
