import React from 'react';

const Album = ({album}) => {
    let {id, userId, title} = album;
    return (
        <div>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
        </div>
    );
};

export {Album};