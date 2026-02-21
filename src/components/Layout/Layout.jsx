function Layout({ children }) {
    return (
        <>
            <header className="header">
                <nav className="nav container">
                    <a href="#" className="logo">UPA </a>
                    <button className="nav-toggle" aria-label="Abrir men&uacute;">
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                    <ul className="nav-menu">
                        <li><a href="index.html">Inicio</a></li>
                        <li><a href="index.html#servicios">Servicios</a></li>
                        <li><a href="index.html#nosotros">Nosotros</a></li>
                        <li><a href="elementos.html">Elementos</a></li>
                        <li><a href="tabla.html">Tabla</a></li>
                        <li><a href="index.html#contacto">Contacto</a></li>
                        <li><a href="presentacion.html">Presentaci&oacute;n</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                {children}
            </main>
            <footer className="footer">
                <div className="container footer-content">
                    <p>
                        &copy; 2026 Universidad Polit&eacute;cnica de Atlacom&uacute;lco | Izhcel Arzate Miranda ISC-802 
                        Todos los derechos reservados.
                    </p>
                </div>
            </footer>
            <button className="scroll-top" aria-label="Volver arriba">
                &uarr;
            </button>
        </>
    )
}

export default Layout
