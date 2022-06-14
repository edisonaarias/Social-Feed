import React from 'react';
import Post from './Post';

const PostMapper = ({array}) => {
    return (
        <ul>
            {array.map((item)=> <li><Post post={item}/> </li>)}
        </ul>
    );
}

export default PostMapper;