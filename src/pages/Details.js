import React from 'react';
import { useLocation, useParams } from 'react-router';

const Details = () => {

    const {id} = useParams();
    const {state} = useLocation();

    return (
        <>
            <div className="viewContent">
                Details Display {id} {state?.name}
            </div>
        </>
    )
}

export default Details;