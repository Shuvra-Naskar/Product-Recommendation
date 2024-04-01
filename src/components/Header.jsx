import React from "react";

const Header = () => {
    return (
        <nav className="navbar bg-primary" data-bs-theme="dark">
            <div class="container-fluid menu-head">
                <a class="navbar-brand" href="#">Pro_Recom</a>
                <div class="navbar-nav menu">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                        <a class="nav-link" href="#">Features</a>
                        <a class="nav-link" href="#">Pricing</a>
                        <input type="text" placeholder="Search.."></input>
                    </div>
            </div>
        </nav>
    );
}

export default Header;
