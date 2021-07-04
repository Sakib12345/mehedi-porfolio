import React from 'react';
import data from '../../fakeData/fakeData';
import PortfolioDetails from './PortfolioDetail'

const Portfolio = () => {
    return (
        <div style={{ backgroundColor: "#F8E6E6" }}>
            <div className='row'>
                <h1 className='text-center mt-5 defaultFontTheme' style={{color: '#212529', fontSize:'50px'}}>Portfolio</h1>
                {
                    data.map(item => <PortfolioDetails key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default Portfolio;