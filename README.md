# Portfolio

In this I created a react application that showcases previous projects along with information about myself. This uses the react framework 
to depoly the application. It shows how to use react to build a website that will only reload parts that have been changed. 
## Authors

- [@marshallrizzuto](https://github.com/Zoot83)


Website: https://zoot83.github.io/portfolio/
## Features

- React
- Bootstrap
- Javascript




## Usage/Examples

This example shows how breaking down the page into components and only calling this section when the proper path is called. 
  

    import React from 'react';
    import '../styles/Header.css';
    import background from '../img/landscape.jpg';

    function Header() {
    return (
        <header>
        <div
            id="intro-example"
            className="p-5 text-center bg-image img-fluid"
            style={{ backgroundImage: `url(${background})` }}
        >
            <div className="mask" style={{ backgroundColor: (0, 0, 0, 0.7) }}>
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
                <h1 className="mb-3">Welcome!</h1>
                <h5 className="mb-4">
                    Click on the links to learn more about me and to see my previous
                    projects!
                </h5>
                </div>
            </div>
            </div>
        </div>
        </header>
    );
    }

    export default Header;
