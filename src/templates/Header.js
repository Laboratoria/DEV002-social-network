const Header = () => {
    const view = `
        <section class="header">
            <div class="headerSuperior">
                <input type='image' src='../assets/tindog_logo_r.png'/>
                <button class="perfil">
                    <img src="" alt="imagen de perfil del usuario"/>
                </button>
            </div>
            <div class="headerInferior">
                <div class="searchContainer">
                    <input type="text" placeholder="Ingresa nombre de usuario"/>
                    <input type='image' src='../assets/search_icon.png'/>
                </div>
                <div class="matchBtnContainer">
                    <button>
                        <img src="'../assets/heart_bco.png'" alt="ícono para ingreso a match"/>
                    </button>
                </div>
            </div>
        </section>
    `;
    return view;
};
export default Header;
