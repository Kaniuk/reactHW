import React from 'react';
import {useNavigate} from "react-router-dom";

const Comment = ({comment}) => {
    let {name, email, body, postId} = comment;

    const navigate = useNavigate();
    return (
        <div>
            <div>name:{name}</div>
            <div>email:{email}</div>
            <button onClick={() => navigate(`posts/${postId}`)}>Get post</button>
        </div>
    );
};

export {Comment};