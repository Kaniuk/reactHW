import React, {useState} from 'react';

import {CarForm} from "./CarForm";
import {Cars} from "./Cars";

const CarContainer = () => {
    let [onSave, setOnSave] = useState(null);
    const [carForUpdate, setCarForUpdate] = useState(null);

    return (
        <div>
            <CarForm setOnSave={setOnSave} carForUpdate={carForUpdate} setCarForUpdate={setCarForUpdate}/>
            <hr/>
            <Cars onSave={onSave} setOnSave={setOnSave} setCarForUpdate={setCarForUpdate}/>
        </div>
    );
};

export {CarContainer};