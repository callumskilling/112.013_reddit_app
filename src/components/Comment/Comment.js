import React from 'react';
import { timeFromNow } from '../../utils/TimeFromNow';
import './Comment.css'

export default function Comment({ comment }) {
    const unixTimestamp = comment.created_utc;
    return (
        <div key={comment.id} className='comment-container'>
            <p className='comment-body'>{comment.body}</p>
            <div className='comment-info'>
                <p className='author'>{comment.author} 👤</p>
                <p className='date_posted'>{timeFromNow(unixTimestamp)} 🗓️</p>
                <p className='score'>{comment.score} ⬆️</p>              
            </div>
        </div>
    );
}
