import React, {useContext} from 'react';
import {Context} from "../carContainer/CarContainer";

const Car = ({car}) => {
    const {id, year, brand, price} = car;
    const {setCarForUpdate} = useContext(Context);
    return (
        <div>
            <div>id:{id}</div>
            <div>year:{year}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <button>delete</button>
        </div>
    );
};

export {Car};