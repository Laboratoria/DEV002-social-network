  export const login = () => {
    const $section = document.createElement("section"),
  $divLogo = document.createElement("div"),
  $imgLogo = document.createElement("img"),
  $divContainerForm = document.createElement("div"),
  $divForm = document.createElement("form"),
  $divInput = document.createElement("div"),
  $inputEmail = document.createElement("input"),
  $inputPassword = document.createElement("input"),
  $divContainerCat = document.createElement("div"),
  $imgCat = document.createElement("img"),
  $inputSingUp = document.createElement("input"),
  $divContainerSpan = document.createElement("div"),
  $spanOption = document.createElement("span"),
  $divContainerRegister = document.createElement("div"),
  $inputBtnGoogle = document.createElement("input"),
  $pSingUp = document.createElement("p"),
  $aSingUp = document.createElement("a");

  $section.appendChild($divLogo).appendChild($imgLogo)
  $section.appendChild($divContainerForm).appendChild($divForm)
  $divForm.appendChild($divInput).appendChild($inputEmail)
  $divForm.appendChild($divInput).appendChild($inputPassword)
  $divForm.appendChild($divContainerCat).appendChild($imgCat)
  $divForm.appendChild($divContainerCat).appendChild($inputSingUp)
  $divForm.appendChild($divContainerSpan).appendChild($spanOption)
  $divForm.appendChild($divContainerRegister).appendChild($inputBtnGoogle)
  $divForm.appendChild($divContainerRegister).appendChild($pSingUp).appendChild($aSingUp)


  console.log($section);
  };

  
