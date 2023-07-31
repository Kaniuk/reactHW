import React, {useContext} from 'react';

import {Context} from "../carContainer/CarContainer";
import {carService} from "../../services/carService";

const Car = ({car}) => {
    const {id, year, brand, price} = car;
    const {setCarForUpdate, setTrigger} = useContext(Context);

    const deleteCar = async () => {
        try {
            await carService.deleteById(id);
        } catch (e) {
            console.log(e.response.data);
        } finally {
            setTrigger();
        }
    };
    return (
        <div>
            <div>id:{id}</div>
            <div>year:{year}</div>
            <div>brand:{brand}</div>
            <div>price:{price}</div>
            <button onClick={() => setCarForUpdate(car)}>update</button>
            <button onClick={deleteCar}>delete</button>
        </div>
    );
};

export {Car};