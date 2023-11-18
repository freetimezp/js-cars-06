/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './VehicleDetails.css';
import IconBox from '../components/IconBox';

function VehicleDetails() {
    const [car, setCar] = useState({});
    const { id } = useParams();
    const index = parseInt(id) - 1;

    const fetchData = () => {
        fetch('http://localhost:3000/api/vehiclesData.json')
            .then(res => res.json())
            .then(data => setCar(data[index]))
            .catch(err => console.log(err.message));
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div id="vehicle-details" className='page vehicle-details'>
            <img src={car.pageBgImg} alt="car" className="img-fluid page-img" />
            <div className="container-fluid vehicle-details-info">
                <div className="row">
                    <div className="col-lg-4 p-0 details-left">
                        <img src={car.bannerImg} alt="car" className="img-fluid details-img-left" />
                        <div className="price">
                            ${car.price && car.price.toLocaleString('en-US')}
                            <span>Drive Away</span>
                        </div>
                        <a href="#" className="contact-seller">
                            <i className="bi bi-telephone-fill"></i> Contact Dealer
                        </a>
                    </div>
                    <div className="col-lg-4 p-0 details-middle">
                        <div className="content">
                            <h2>Vehicle Details</h2>
                            <div className="details-box">
                                <i className="bi bi-emoji-smile"></i>
                                <span>Lorem ipsum dolor sit.</span>
                                <p>
                                    <strong>
                                        Lorem ipsum
                                    </strong> Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                            <div className="details-box">
                                <i className="bi bi-journal-richtext"></i>
                                <span>Lorem ipsum dolor sit.</span>
                                <p>
                                    <strong>
                                        Lorem ipsum
                                    </strong> Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                            <div className="details-box">
                                <i className="bi bi-clock"></i>
                                <span>Lorem ipsum dolor sit.</span>
                                <p>
                                    <strong>
                                        Lorem ipsum
                                    </strong> Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                            <div className="details-box">
                                <i className="bi bi-award"></i>
                                <span>Lorem ipsum dolor sit.</span>
                                <p>
                                    <strong>
                                        Lorem ipsum
                                    </strong> Lorem ipsum dolor sit amet consectetur.
                                </p>
                            </div>
                        </div>
                        <img src={car.leftImg} alt="car" className="img-fluid details-img-middle" />
                    </div>
                    <div className="col-lg-4 p-0 details-right">
                        <img src={car.rightImg} alt="car" className="img-fluid details-img-right" />
                        <div className="d-flex gap-2">
                            <IconBox
                                icon="bx bx-tachometer"
                                title="Lorem ipsum"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Soluta, laboriosam libero."
                            />
                            <IconBox
                                icon="bx bx-world"
                                title="Lorem ipsum"
                                description="Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                Soluta, laboriosam libero."
                            />
                        </div>
                        <div className="details-description">
                            <h4>Description</h4>
                            <p>
                                {car.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VehicleDetails;
