import React from 'react';

const Todo = ({todo}) => {
    let {id, title} = todo;
    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
        </div>
    );
};

export {Todo};