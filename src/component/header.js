import React from 'react';
// import GoogleFontLoader from 'react-google-font-loader';

const Header = () => {
    return (
        <div className="container">
            <div style={{ margin: "1.2em 0 1.5em", backgroundImage: "url(./images/header.jpg)" }} className="row no-gutters">

                <div className="col-sm-12 col-md-12 col-lg-12">
                    <header style={{ textAlign: "center" }}>
                    {/* < GoogleFontLoader
                    fonts = {
                        [{
                        font: 'Literata',
                        // weights: [400]
                        }]
                    }
                    /> */}
                    <h1 style={{ fontSize: "3.5rem", fontFamily: "Literata", color: "white" }}>What's that ?</h1>
                    </header>
                </div>

            </div>
        </div>
    )
}

export default Header;

