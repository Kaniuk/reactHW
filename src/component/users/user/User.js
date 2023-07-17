import React from 'react';

import {UserDetail} from "../userDetails/UserDetail";
import {UserAddress} from "../userAddres/UserAddress";
import {Company} from "../company/Company";

const User = ({user}) => {
    let {id, name, username, email, address, company} = user;
    return (<div>
        <UserDetail data={{id, name, username, email}}/>
        <UserAddress address={address}/>
        <Company company={{company}}/>
    </div>);
};

export {User};