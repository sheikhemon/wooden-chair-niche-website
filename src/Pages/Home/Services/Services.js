import React, { useEffect, useState } from 'react';
import Loading from '../../Loading/Loading.js';
import Service from '../Service/Service.js';
import './Services.css'

const Services = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://damp-mesa-00086.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                setServices(data.slice(0, 6))
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="p-5 text-center arrival fw-bold">NEW <span>ARRIVAL</span> </h2>
            <div className="row container-fluid m-auto mb-2">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;