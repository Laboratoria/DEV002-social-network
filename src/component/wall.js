export const wall = () => {
  const $sectionW = document.createElement('section'); // padre de tres
  const $divContainerWall = document.createElement('div'); // hijo 1
  const $divSaludo = document.createElement('div');
  const $imgLogoW = document.createElement('img');
  const $h2name = document.createElement('h2');
  const $containerOrange = document.createElement('div'); // hijo 2
  const $divRightOrange = document.createElement('div');
  const $divImgWall = document.createElement('div');
  const $imgWall = document.createElement('img');
  const $divLeftOrange = document.createElement('div');
  const $divH3Post = document.createElement('div');
  const $h3Post = document.createElement('h3');
  const $containerFormWall = document.createElement('div');
  const $formWall = document.createElement('form');
  const $inputPublication = document.createElement('input');
  const $inputBtnWall = document.createElement('input');
  const $containerPublication = document.createElement('div'); // hijo de section y padre de dos 2
  const $divPublicUser = document.createElement('div'); // padre gris y blanca   hijo 1
  const $divPublicU = document.createElement('input'); // parte gris
  const $divReactions = document.createElement('div'); // parte blanca padre de tres
  const $divReactionLikes = document.createElement('div'); // padrecorazon
  const $imgHeart = document.createElement('img');
  const $inputReactionLikes = document.createElement('input');
  const $divReactionEdit = document.createElement('div'); // padreeditar
  const $inputReactionEdit = document.createElement('input');
  const $divReactionDelete = document.createElement('div'); // padre eliminar
  const $inputReactionDelete = document.createElement('input');
  const $divSignOffCat = document.createElement('div'); // hijo 2
  const $btnSingOff = document.createElement('button');
  const $imgWallCat = document.createElement('img');

  // ---- HTML Semantico ----//

  $sectionW.appendChild($divContainerWall); // HIJO PRINCIPAL 1
  $divContainerWall.appendChild($divSaludo);
  $divSaludo.appendChild($imgLogoW);
  $divSaludo.appendChild($h2name);

  $sectionW.appendChild($containerOrange); // HIJO PRINCIPAL 2
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

  $sectionW.appendChild($containerPublication); // HIJO PRINCIPAL 3
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
};
// ----------ATRIBUTOS-------------//
