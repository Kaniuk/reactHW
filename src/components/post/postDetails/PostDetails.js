import React from 'react';

const PostDetails = ({post}) => {
    let {id, title} = post;
    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
        </div>
    );
};

export {PostDetails};