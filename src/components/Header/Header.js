import React from 'react';
import Typical from 'react-typical'
import './Header.css';
import headerImg from '../../images/headerImg.png'

const Header = () => {
    return (
        <div className="row header" style={{ backgroundColor: "#212529" }}>
            <div className="col-lg-7 text-white headerName">
                <h2>Hello, I am</h2>
                <h1 className="defaultFontTheme">HASAN MEHEDI</h1>
                <h3 style={{ color: '#ffb380' }}>
                    <Typical

                        steps={['A Film Maker', 2000,
                            'A Creative Video Editor', 2000,
                            'A Script Writer', 2000,
                        ]}
                        loop={Infinity}
                        wrapper="p"
                    />
                </h3>
            </div>
            <div className="col-lg-5">
                <img src={headerImg} className="ownerImg" alt="" />
            </div>
        </div>
    );
};

export default Header;