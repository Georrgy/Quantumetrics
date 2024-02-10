import React from "react";
import "./Main.css";
import Cryptocurrencies from "./Cryptocurrencies-icon";
import Portfolio from "./Portfolio-icon";
import Watchlist from "./Watchlist-icon";
import LogoSmall from "./LogoSmall";
import { Outlet, Link } from "react-router-dom";


const Main = () => {
    return (
        <div className='landing-page-stage'>
            <div className='overlap-wrapper'>
                <div className='overlap'>
                    <div className='overlap-group'>
                        <div className='frame'>
                            <div className='logo'>
                                <LogoSmall />
                                <div className='div'>QUANTUMETRICS</div>
                            </div>
                            <Link to='/main'>
                                <div className='crypto'>
                                    <Cryptocurrencies />
                                    <div className='text-wrapper-2'>Cryptocurrencies</div>
                                </div>
                            </Link>
                            <Link to='/main/portfolio'>
                                <div className='crypto'>
                                    <Portfolio />
                                    <div className='text-wrapper-3'>Portfolio</div>
                                </div>
                            </Link>
                            <div className='crypto'>
                                <Watchlist />
                                <div className='text-wrapper-3'>Watchlist</div>
                            </div>
                            <Link to='/form'>
                                <div className='crypto'>
                                    <div className='text-wrapper-3'>Form</div>
                                </div>
                            </Link>
                        </div>
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Main;