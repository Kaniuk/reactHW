import React from 'react';

const Company = ({company}) => {
    let {name, catchPhrase} = company;
    return (<div>
        <div>name:{name}</div>
        <div>catchPhrase:{catchPhrase}</div>
    </div>);
};

export {Company};