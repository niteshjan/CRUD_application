import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expnad-md navbar-dark bg-dark">
                        <div><a href="#" className="navbar-brand">Employee Management</a></div>
                    </nav>
                </header>
            </div>
        );
    }
}

export default HeaderComponent;