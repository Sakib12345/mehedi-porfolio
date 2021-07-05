import React from 'react';
import services from '../../fakeData/services';
import ServiceDetails from './ServiceDetails';

const Services = () => {
    return (
        <div>
            <div className='row' style={{ backgroundColor: "#212529" }}>
                <h1 className='text-center mt-5 defaultFontTheme' style={{color: '#F8E6E6', fontSize:'50px'}}>Services</h1>
                {
                    services.map(item => <ServiceDetails key={item.id} item={item} />)
                }
            </div>
        </div>
    );
};

export default Services;