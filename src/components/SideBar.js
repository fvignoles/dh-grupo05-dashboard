import React from 'react';
import image from '../assets/images/logo.jpg';
import {Link,Route,Routes} from 'react-router-dom';

import ContentWrapper from './ContentWrapper';
import SizesInDb from './SizesInDb';
import DoughsInDb from './DoughsInDb';
import LastUserInDb from './LastUserInDb';
import LastProductInDb from './LastProductInDb';
import ChartProducts from './ChartProducts';
import ChartUsers from './ChartUsers';
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
                        <img className="w-50 h-50" src={image} alt="El Paraiso de la Pizza"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Usuario & Productos</span>
                    </Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">El Paraiso de las Pizzas</div>

                {/*<!-- Nav Item - SearchUsers -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/SearchUsers">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Usuarios</span></Link>
                </li>

                 {/*<!-- Nav Item - SearchPizzas -->*/}
                 <li className="nav-item">
                    <Link className="nav-link" to="/SearchPizzas">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Pizzas</span></Link>
                </li>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="SizesInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Tamaños</span>
                    </Link>
                </li>

             {/*<!-- Nav Item - Pages -->*/}
             <li className="nav-item">
                    <Link className="nav-link collapsed" to="DoughsInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Masas</span>
                    </Link>
                </li>



                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="LastUserInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último Usuario</span></Link>
                </li>

                                {/*<!-- Nav Item - Charts -->*/}
                                <li className="nav-item">
                    <Link className="nav-link" to="LastProductInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Última Pizza</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="/ChartProducts">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tabla Pizzas</span></Link>
                </li>

                                <li className="nav-item">
                    <Link className="nav-link" to="/ChartUsers">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tabla Usuarios</span></Link>
                </li>


                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
            <Routes>
                <Route  exact path='/' element = {<ContentWrapper/>} />
                <Route  path='/SizesInDb' element = {<SizesInDb/>} />
                <Route  path='/DoughsInDb' element = {<DoughsInDb/>} />               
                <Route  path='/LastUserInDb' element = {<LastUserInDb/>} />
                <Route  path='/LastProductInDb' element = {<LastProductInDb/>} />
                <Route  path='/ChartProducts' element = {<ChartProducts/>} />
                <Route  path='/ChartUsers' element = {<ChartUsers/>} />
                <Route  path='/SearchPizzas' element = {<SearchPizzas/>} />
                <Route  path='/SearchUsers' element = {<SearchUsers/>} />
                <Route  path="*" element={<NotFound />} />
            </Routes>
        </>
    )
}
export default SideBar;