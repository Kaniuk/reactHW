import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {postService} from "../../services";
import {PostDetails} from "./postDetails/PostDetails";

const Post = () => {
    const {postId} = useParams();

    const [post, setPost] = useState(null);

    useEffect(() => {
        postService.getById(postId)
            .then(({data}) => setPost(data));
    }, [postId]);

    return (
        <div>
            {post && <PostDetails post={post}/>}
        </div>
    );
};

export {Post};