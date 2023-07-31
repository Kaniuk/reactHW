import React, {useContext, useState} from 'react';
import {useForm} from "react-hook-form";

import {carService} from "../../services/carService";
import {Context} from "../carContainer/CarContainer";

const CarForm = () => {
    const [error, setError] = useState(null);
    const {setTrigger, carForUpdate, setCarForUpdate} = useContext(Context);
    const {reset, register, handleSubmit, setValue} = useForm();

    if (carForUpdate) {
        setValue('brand', carForUpdate.brand);
        setValue('year', carForUpdate.year);
        setValue('price', carForUpdate.price);
    }

    const save = async (car) => {
        try {
            await carService.create(car);
            setError(null);
            reset();
            setTrigger();
            setCarForUpdate(null);

        } catch (e) {
            setError(e.response.data);
        }
    };
    const update = async (car) => {
        try {
            await carService.updateById(carForUpdate.id, car);
            reset();
            setError(null);
            setTrigger();
            setCarForUpdate(null)

        } catch (e) {
            setError(e.response.data);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit(!carForUpdate ? save : update)}>
                <label>brand:<input type="text" placeholder={'brand'} {...register('brand')}/></label>
                <label>price:<input type="text" placeholder={'price'} {...register('price')}/></label>
                <label>year:<input type="text" placeholder={'year'} {...register('year')}/></label>
                <button>{!carForUpdate?'save':'update'}</button>
            </form>
            {error && <div>{JSON.stringify(error)}</div>}
        </div>
    );
};

export {CarForm};