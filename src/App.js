import React, {useEffect, useState} from 'react';
import {Users} from "./component/users/Users";

const App = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => setUsers(value));
    }, [[]]);
    return (
        <div>
            <Users users={users}/>
        </div>
    );
};

export default App;