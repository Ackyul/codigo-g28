function Header() {
    // En react no usamos class usamos className
    return (
        <nav className="bg-gray-950 text-white p-6">
            <ul className="flex gap-10">
                <li>
                    <a href="">Inicio</a>
                </li>
                <li>
                    <a href="">Proyectos</a>
                </li>
                <li>
                    <a href="">Galeria</a>
                </li>
                <li>
                    <a href="">Contacto</a>
                </li>
            </ul>
        </nav>
    );
}

export default Header;
 