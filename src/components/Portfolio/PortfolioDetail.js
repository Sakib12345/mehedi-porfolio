import React from 'react';

const PortfolioDetail = (props) => {

    const { name, videoLink } = props.item;
    return (
        <div className='col-md-3 mt-lg-5 mt-3 mb-3 mb-lg-5'>
            <div className='d-flex justify-content-center'>
                <div className='text-center mb-3 p-lg-2 p-0 card shadow-lg bg-body rounded'>
                <iframe width="360" title="chaya" height="160" src={videoLink} ></iframe>
                <h4 className="defaultFontTheme pt-lg-2 pt-2" style={{fontSize: '25px', color:'#d67738'}}>{name}</h4>
                </div>
            </div>
        </div>
    );
};

export default PortfolioDetail;