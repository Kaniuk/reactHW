import React from 'react';

const SinglePost = ({post}) => {
    let {id, body, title} = post;
    return (
        <div>
            <div>id:{id}</div>
            <div>body:{body}</div>
            <div>title:{title}</div>
        </div>
    );
};

export {SinglePost};