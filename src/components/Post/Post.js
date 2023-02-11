import React from 'react';
import { Dispatch } from '@reduxjs/toolkit';
import { timeFromNow } from '../../utils/TimeFromNow';
import CommentsList from '../../features/commentsList/CommentsList'
import './Post.css'
import { useDispatch } from 'react-redux';



export default function Post({ post }) {
    const unixTimestamp = post.created;
    const postUrl = post.url
    const dispatch = useDispatch();
    return (
        <div key={post.id} className='post-container' onClick={() => dispatch({type: "commentsList/updateCurrentPost", payload: `${postUrl}`})}>
            <h3 className='post-title'>{post.title}</h3>
            <img src={post.thumbnail} alt='' className='post-thumbnail' />
            <div className='post-info'>
                <p className='author'>👤 {post.author}</p>
                <p className='date_posted'>🗓️ {timeFromNow(unixTimestamp)}</p>
                <p className='num_comments'>💬 {post.num_comments}</p>              
            </div>
            <CommentsList />
        </div>
    );
}
