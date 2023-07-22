// import React, {useEffect, useState} from 'react';
// import {Users} from "./component/users/Users";
//
// const App = () => {
//     let [users, setUsers] = useState([]);
//
//     useEffect(() => {
//         fetch('https://jsonplaceholder.typicode.com/users')
//             .then(value => value.json())
//             .then(value => setUsers(value));
//     }, [[]]);
//     return (
//         <div>
//             <Users users={users}/>
//         </div>
//     );
// };
//
// export default App;
import React, {useState} from 'react';

import {UserContainer} from "./component/userContainer/UserContainer";
import {Post} from "./component/userContainer/Post";

const App = () => {
    let [userId, setUserId] = useState(null);
    return (
        <div>
            <UserContainer setUserId={setUserId}/>
            <hr/>
            {userId && <Post userId={userId}/>}
        </div>
    );
};

export default App;