import React from 'react';
import { Link } from 'react-router-dom';
import './VehicleCard.css';

import VehicleRating from './VehicleRating';

function VehicleCard({ car }) {
    return (
        <div className='col-lg-4 col-md-6'>
            <div className="vehicle">
                <div className="vehicle-img">
                    <img src={car.bannerImg} alt="car" className="img-fluid" />
                </div>

                <h3>
                    <Link to={`/vehicles/${car._id}`}>{car.title}</Link>
                </h3>

                <VehicleRating rating={car.rating} />

                <p>{car.description.substring(0, 30)}...</p>
                <span className="price">
                    ${car.price && car.price.toLocaleString('en-US')}
                </span>

                <div className="buttons">
                    <Link className='like'>
                        Like <i className="bi bi-heart-fill"></i>
                    </Link>
                    <Link to={`/vehicles/${car._id}`} className='details'>
                        Details <i className="bi bi-plus-lg"></i>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default VehicleCard;
