const Header = () => {
    const view = `
        <section class="header">
            <div class="header-superior">
                <button class="home">
                    <img src="" alt="logo de Tindog"/>
                </button>
                <button class="perfil">
                    <img src="" alt="imagen de perfil del usuario"/>
                </button>
            </div>
            <div class="header-inferior">
                <div class="buscador-container">
                    <input type="text" placeholder="Ingresa nombre de usuario"/>
                    <button>
                        <img src="" alt="ícono de busqueda">
                    </button>
                </div>
                <div class="matchBtn-container">
                    <button>
                        <img src="" alt="ícono para ingreso a match">
                    </button>
                </div>
            </div>
        </section>
    `;
    return view;
};
export default Header;
