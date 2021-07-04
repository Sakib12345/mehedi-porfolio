import React from 'react';

const PortfolioDetail = (props) => {

    const { name, videoLink } = props.item;
    return (
        <div className='col-md-4 mt-5'>
            <div className='d-flex justify-content-center'>
                <div className='text-center mb-3'>
                <iframe width="420" title="chaya" height="220" src={videoLink} ></iframe>
                <h4 className="defaultFontTheme mt-2" style={{fontSize: '30px', color:'#d67738'}}>{name}</h4>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetail;