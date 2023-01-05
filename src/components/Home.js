 export const Home = () =>{
    const HomeDiv= document.createElement("div");
    const botonRegistro=document.createElement("button");
    const botonIniciar=document.createElement("button");
    botonRegistro.textContent = 'Registrate';
    botonIniciar.textContent = 'Inicia sesión';

    HomeDiv.appendChild(botonIniciar);
    HomeDiv.appendChild(botonRegistro);

    return HomeDiv;
};