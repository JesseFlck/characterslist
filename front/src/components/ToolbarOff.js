import React from 'react';
import { NavLink } from 'react-router-dom';

const ToolbarOff = () => {
    return (
        <div className="disconnectedToolbar">
            <div className='logo'>
                <img src="https://zupimages.net/up/22/38/40lg.png" alt="Logo Charac" />
            </div>
            <div className='navigation'>
                <NavLink to="/connexion" className={({ isActive }) => "nav-link" + (isActive ? " activated" : "")}>
                    Administrer
                </NavLink>
            </div>
        </div>
    );
};

export default ToolbarOff;