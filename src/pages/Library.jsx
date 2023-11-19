import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Library.css';

import bgImg from '../images/mclaren-1.jpg';
import PageTitle from '../components/PageTitle';
import { AppContext } from '../App';
import VehicleCard from '../components/VehicleCard';

function Library() {
    const { library: cars } = useContext(AppContext);

    return (
        <div id="library" className='page library'>
            <img src={bgImg} alt="car" className='img-fluid page-img' />
            <div className="container">
                <PageTitle title='Vehicles Library' subtitle='Here are your collection' />

                <div className="row">
                    {cars && cars.length === 0 ? (
                        <div className='text-center'>
                            <h3 className="empty">
                                You have empty collection
                            </h3>
                            <Link className='browse' to='/vehicles'>Browse Vehicles</Link>
                        </div>
                    ) : (
                        cars.map(car => (
                            <VehicleCard key={car._id} car={car} />
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Library;
