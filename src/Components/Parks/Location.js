import React from 'react';

const Location = ({ addresses, location}) => {    
    const physicalAddress = addresses.filter(f => f.type.toLowerCase().includes("physical"))[0];

    const formatAddress = (address) => {
      return `${address.line1} ${address.city}, ${address.stateCode}`;
    }

    return (
        <>
          <div className={"location__address"}>
            <h2 className={"location__address_phsyical"}>
              {formatAddress(physicalAddress)}
            </h2>
          </div>
          <div className={"location__coord"}>
            
          </div>
        </>        
    )
}

export default Location;