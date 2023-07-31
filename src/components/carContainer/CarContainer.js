import React, {createContext, useState} from 'react';

import {CarForm} from "../carForm/CarForm";
import {Cars} from "../cars/Cars";

const Context = createContext(null);

const CarContainer = () => {
    const [trigger, setTrigger] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <Context.Provider value={{
            trigger,
            setTrigger: () => setTrigger(prev => !prev),
            carForUpdate,
            setCarForUpdate
        }}>
            <div>
                <CarForm/>
                <hr/>
                <Cars/>
            </div>

        </Context.Provider>
    );
};

export {
    CarContainer,
    Context
};