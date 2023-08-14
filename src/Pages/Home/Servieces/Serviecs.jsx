import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Serviecs = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className="w-1/2 mx-auto text-center space-y-5 my-20">
                <h4 className="text-orange-800 font-bold text-xl">Service</h4>
                <h2 className="font-bold text-4xl">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised words which don&apos;t look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {
                  services.map(service => <ServiceCard
                  key={service._id}
                  service={service}
                  ></ServiceCard>)
              }
            </div>
            
        </div>
    );
};

export default Serviecs;