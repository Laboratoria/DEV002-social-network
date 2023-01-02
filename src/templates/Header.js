const Header = () => {
    const view = `
        <section class="header">
            <div class="headerSuperior">
                <input class='logoButton' type='image' title='logo' src='../assets/tindog_logo_r.png'/>
                <input class='profileImage' type='image' title='profile picture'/>
                <div class="dropdownMenu">
                    <div class="options">
                        <input type='submit' value='Mi perfil' />
                        <input type='submit' value='Editar perfil' />
                        <input type='submit' value='Salir' />
                    </div>
                </div>
            </div>
            <div class="headerInferior">
                <div class="searchContainer">
                    <input class='searcher' type="text" placeholder="Ingresa nombre de usuario"/>
                    <input class='searcherIcon' type='image' src='../assets/search_icon.png'/>
                </div>
                <div class="matchBtnContainer">
                    <button>
                        <img src='../assets/heart_bco.png' alt="ícono para ingreso a match"/>
                    </button>
                </div>
            </div>
        </section>
    `;
    return view;
};
export default Header;
