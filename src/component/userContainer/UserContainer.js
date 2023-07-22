import React, {useEffect, useState} from 'react';
import {UserComponent} from "./UserComponent";

const UserContainer = ({setUserId}) => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value));
    }, []);
    return (
        <div>
            {users.map(user => <UserComponent key={user.id} user={user} setUserId={setUserId}/>)}
        </div>
    );
};

export {UserContainer};