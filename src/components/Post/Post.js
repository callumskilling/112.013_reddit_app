import React from 'react';
import { timeFromNow } from '../../utils/TimeFromNow';

export default function Post({ post }) {
    const unixTimestamp = post.created
    return (
        <div key={post.id} className='post-container'>
            <h3 className='post-title'>{post.title}</h3>
            <img src={post.thumbnail} alt='' className='post-thumbnail' />
            <div className='post_info'>
                <p className='author'>👤 {post.author}</p>
                <p className='date_posted'>🗓️ {timeFromNow(unixTimestamp)}</p>
                <p className='num_comments'>💬 {post.num_comments}</p>                
            </div>
        </div>
    );
}
