import React from 'react';

const RentData = (props) => {
    const { name, number } = props.rent;
    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{number}</td>
                <td><button style={{padding:'5px 10px',background: '#275A53',color: '#fff',border:'none',borderRadius:'3px'}}>View Details</button></td>
            </tr>  
        </>
    );
};

export default RentData;