export const Wall = () => {
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
  const $inputPublication = document.createElement('textarea');
  const $inputBtnWall = document.createElement('input');
  const $containerPublication = document.createElement('div'); // hijo de section y padre de dos 2
  const $divPublicUser = document.createElement('div'); // padre gris y blanca   hijo 1
  const $divPublicU = document.createElement('div'); // parte gris
  const $divReactions = document.createElement('div'); // parte blanca padre de tres
  const $divReactionLikes = document.createElement('div'); // padrecorazon
  const $imgHeart = document.createElement('img');
  const $inputReactionLikes = document.createElement('input');
  const $divReactionEdit = document.createElement('div'); // padreeditar
  const $inputReactionEdit = document.createElement('input');
  const $divReactionDelete = document.createElement('div'); // padre eliminar
  const $inputReactionDelete = document.createElement('input');
  const $divSignOffCat = document.createElement('div'); // hijo 2
  const $btnSingOff = document.createElement('input');
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

  $sectionW.appendChild($divSignOffCat);
  $divSignOffCat.appendChild($btnSingOff);
  $divSignOffCat.appendChild($imgWallCat);

  // ----------ATRIBUTOS-------------//

  $sectionW.setAttribute('class', 'sectionWall');
  $divContainerWall.setAttribute('class', 'wallContainer');
  $divSaludo.setAttribute('class', 'Saludo');
  $imgLogoW.setAttribute('src', 'img/logoNewMe.png');
  $imgLogoW.setAttribute('alt', 'Logo NewMe');
  $h2name.textContent = 'Hello';

  $containerOrange.setAttribute('class', 'ContainerOrange');

  $divRightOrange.setAttribute('class', 'rightOrange');
  $divImgWall.setAttribute('class', 'imagenWall');
  $imgWall.setAttribute('src', 'img/imgMuro.png');
  $imgWall.setAttribute('alt', 'Img Niña Muro');

  $divLeftOrange.setAttribute('class', 'leftOrange');
  $divH3Post.setAttribute('class', 'hPost');
  $h3Post.textContent = 'What was your change today?';
  $containerFormWall.setAttribute('class', 'ContFormWall');
  $formWall.setAttribute('class', 'formWall');
  $formWall.setAttribute('id', 'formWall');

  // $inputPublication.setAttribute('type', 'text');
  $inputPublication.setAttribute('name', 'inp_publication');
  $inputPublication.setAttribute('class', 'inp_publication');
  $inputPublication.setAttribute('id', 'inp_idPublication');

  $inputBtnWall.setAttribute('type', 'submit');
  $inputBtnWall.setAttribute('name', 'btn_send');
  $inputBtnWall.setAttribute('class', 'btn_send');
  $inputBtnWall.setAttribute('id', 'btn_idSend');
  $inputBtnWall.setAttribute('value', 'SEND');

  $containerPublication.setAttribute('class', 'contPublic');
  $divPublicUser.setAttribute('class', 'publicUser');

  // $divPublicU.setAttribute('type', 'submit');
  // $divPublicU.setAttribute('name', 'inp_publiU');
  $divPublicU.setAttribute('class', 'div_publiU');
  $divPublicU.setAttribute('id', 'div_idPubliU');

  $divReactions.setAttribute('class', 'reactions');
  $divReactionLikes.setAttribute('class', 'reactionsLikes');

  $imgHeart.setAttribute('src', 'img/heart.png');
  $imgHeart.setAttribute('alt', 'heart');

  $inputReactionLikes.setAttribute('type', 'submit');
  $inputReactionLikes.setAttribute('name', 'inp_reaction');
  $inputReactionLikes.setAttribute('class', 'inp_reaction');
  $inputReactionLikes.setAttribute('id', 'inp_idReaction');
  $inputReactionLikes.setAttribute('value', 'Likes');

  $divReactionEdit.setAttribute('class', 'reactionEdit');

  $inputReactionEdit.setAttribute('type', 'submit');
  $inputReactionEdit.setAttribute('name', 'inp_reactionEdit');
  $inputReactionEdit.setAttribute('class', 'inp_reactionEdit');
  $inputReactionEdit.setAttribute('id', 'inp_idReactionEdit');
  $inputReactionEdit.setAttribute('value', 'Edit');

  $divReactionDelete.setAttribute('class', 'reactionDelete');

  $inputReactionDelete.setAttribute('type', 'submit');
  $inputReactionDelete.setAttribute('name', 'inp_reactionDelete');
  $inputReactionDelete.setAttribute('class', 'inp_reactionDelete');
  $inputReactionDelete.setAttribute('id', 'inp_idReactionDelete');
  $inputReactionDelete.setAttribute('value', 'Delete');

  $divSignOffCat.setAttribute('class', 'signOff');

  $btnSingOff.setAttribute('type', 'button');
  $btnSingOff.setAttribute('class', 'btnSignOff');
  $btnSingOff.setAttribute('value', 'SIGN OFF');

  $imgWallCat.setAttribute('src', 'img/gato.png');
  $imgWallCat.setAttribute('alt', 'wallCat');

  return $sectionW;
};
