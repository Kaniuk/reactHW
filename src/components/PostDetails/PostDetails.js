import React from 'react';

const PostDetails = ({post}) => {
    let {title, body} = post;
    return (
        <div>
            <hr/>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <hr/>
        </div>
    );
};

export {PostDetails};