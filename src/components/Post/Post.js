import React from 'react';

export default function Post({ post }) {
    return (
        <div key={post.id} className='post-container'>
            <h3 className='post-title'>{post.title}</h3>
            <img src={post.image} alt='' className='post-image' />
        </div>
    );
}
