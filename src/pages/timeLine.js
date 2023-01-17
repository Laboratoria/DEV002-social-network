export const timeLine = () => {
    const divTimeLine = document.createElement('div');
    divTimeLine.setAttribute('class', 'container-div-timeLine');
    const viewTimeLine =  `<div class="containerRegister" id="containerRegister"> 
    <figure class="logo-inicio-sesion"> 
      <img class="logo" src="./images/logo.png" alt="Imagen de un avión dando la vuelta al mundo">
    </figure>`

    
divTimeLine.innerHTML = viewTimeLine;
return divTimeLine;

};

export default timeLine
