import React from 'react';
import image from '../assets/images/logo.jpg';
import {Link,Route,Routes} from 'react-router-dom';

import ContentWrapper from './ContentWrapper';
import GenresInDb from './GenresInDb';
import LastMovieInDb from './LastMovieInDb';
import Chart from './Chart';
import SearchPizzas from './SearchPizzas';
import SearchUsers from './SearchUsers';	
import NotFound from './NotFound';

function SideBar(){
    return(
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-50 h-50" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Tablero de Comando</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="GenresInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Generos</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="LastMovieInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Última Película</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/Chart">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></Link>
                </li>

                 {/*<!-- Nav Item - SearchPizzas -->*/}
                 <li className="nav-item">
                    <Link className="nav-link" to="/SearchPizzas">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Buscar Pizzas</span></Link>
                </li>

                {/*<!-- Nav Item - SearchUsers -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/SearchUsers">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Buscar Usuarios</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
            <Routes>
                <Route  exact path='/' element = {<ContentWrapper/>} />
                <Route  path='/GenresInDb' element = {<GenresInDb/>} />
                <Route  path='/LastMovieInDb' element = {<LastMovieInDb/>} />
                <Route  path='/Chart' element = {<Chart/>} />
                <Route  path='/SearchPizzas' element = {<SearchPizzas/>} />
                <Route  path='/SearchUsers' element = {<SearchUsers/>} />
                <Route  path="*" element={<NotFound />} />

            </Routes>

        </>
    )
}
export default SideBar;