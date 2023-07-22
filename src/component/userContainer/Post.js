import React, {useEffect, useState} from 'react';
import {SinglePost} from "./SinglePost";

const Post = ({userId}) => {
    let [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(value => value.json())
            .then(value => setPosts(value));
    }, [userId]);
    return (
        <div>
            {posts.map(post => <SinglePost key={post.id} post={post}/>)}
        </div>
    );
};

export {Post};