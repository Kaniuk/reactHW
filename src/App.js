import React, {useState} from 'react';

import {Users} from "./components/Users/User/Users";
import {UserPosts} from "./components/Users/Post/userPosts";

const App = () => {
    let [userId, serUserId] = useState(null);
    return (
        <div>
            {/*<Posts/>*/}
            {/*<Launches/>*/}
            {<Users setUserId={serUserId}/>}
            {userId && <UserPosts userId={userId}/>}
        </div>
    );
};

export {App};