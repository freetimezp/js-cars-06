import React, { useContext } from 'react';
import { AppContext } from '../App';
import './Vehicles.css';

import bgImg from '../images/mclaren-1.jpg';
import PageTitle from '../components/PageTitle';
import VehicleCard from '../components/VehicleCard';

function Vehicles() {
    const { data: cars, setData: setCars } = useContext(AppContext);

    return (
        <div className='page vehicles' id="vehicles">
            <img src={bgImg} alt="car" className="img-fluid page-img" />

            <div className="container">
                <PageTitle title="Vehicle Catalogue" subtitle="Here are our new arrivals" />

                <div className="row">
                    {cars && cars.length > 0 && cars.map(car => (
                        <VehicleCard key={car._id} car={car} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Vehicles;
