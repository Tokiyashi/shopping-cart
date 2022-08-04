import React, {useState} from 'react';
import {Link, NavLink} from "react-router-dom";
import cartIcon from './cart.svg'
import {useDispatch} from "react-redux";
import {CartActionTypes} from "../../types/store";
import {useTypeSelector} from "../../hooks/useTypeSelector/useTypeSelector";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    const dispatch = useDispatch();

    const {items} = useTypeSelector(state => state.cart)


    return (
        <nav className="fixed flex w-full flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between items-center lg:w-auto lg:static lg:block lg:justify-start">
                    <a
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                    >
                        Best Shop
                    </a>
                    <button
                        className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <i className="fas fa-bars">Menu</i>
                    </button>
                    <button
                        onClick={()=> dispatch({type: CartActionTypes.SHOW_CART})}
                        className="flex lg:hidden flex-col items-center justify-center ">
                        <img className="px-3 ml-2 py-2 hover:opacity-50"
                             src={cartIcon}
                             alt="cart"
                        />
                        <div className="rounded-full  -translate-y-3 translate-x-3 flex items-center w-6 h-6 justify-center bg-amber-50">
                            {items.length}
                        </div>
                    </button>
                </div>
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

                        <li className="nav-item">
                            <NavLink
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                to="/home"
                            >
                                <i></i><span className="ml-2">Home</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                to="/store"
                            >
                                <i></i><span className="ml-2">Store</span>
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                to="/about"
                            >
                                <i></i><span className="ml-2">About</span>
                            </NavLink>
                        </li>

                    </ul>
                    <button onClick={()=> dispatch({type: CartActionTypes.SHOW_CART})} className="lg:flex hidden  flex-col items-center justify-center ">
                        <img className="px-3 ml-2 py-2 hover:opacity-50"
                             src={cartIcon}
                             alt="cart"
                        />
                        <div className="rounded-full  -translate-y-3 translate-x-3 flex items-center w-6 h-6 justify-center bg-amber-50">
                            {items.length}
                        </div>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;