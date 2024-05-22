import CartWidget from "../CartWidget/CartWidget"

const NavBar = () => {
    return (
        <nav>
            <h3>SawFish Gamming</h3>
            <div>
                <button>Consolas</button>
                <button>Juegos</button>
                <button>Accesorios</button>
                <button>Componentes</button>
            </div>
            <CartWidget />
        </nav>
    )
}

export default NavBar