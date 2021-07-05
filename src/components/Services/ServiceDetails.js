import React from 'react';
const ServiceDetails = (props) => {

    const { name, price, icon } = props.item;

    return (
        <div className='col-md-4 mt-5'>
            <div className='d-flex justify-content-center'>
                <div className='text-center mb-5'>
                    <i class={icon} style={{ fontSize: '60px', color: '#F8E6E6' }}></i>
                    <h3 className="defaultFontTheme mt-2" style={{ fontSize: '30px', color: '#F8E6E6' }}>{name}</h3>
                    <h4 style={{ fontSize: '20px', color: '#F8E6E6' }}>Price: {price} BDT</h4>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;