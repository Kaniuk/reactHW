import React, {useState} from 'react';

import {PostDetails} from "../PostDetails/PostDetails";

const Post = ({post}) => {
    let {id, title} = post;

    let [isShow, setIsShow] = useState(false);
    return (
        <div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            {/*<button onClick={() => setIsShow(!isShow)}>{isShow ? 'Hide' : 'Show'}</button>*/}
            <button onClick={() => setIsShow(prevState => !prevState)}>{isShow ? 'Hide' : 'Show'}</button>

            {
                isShow&&<PostDetails post={post}/>
            }
        </div>
    );
};

export {Post};