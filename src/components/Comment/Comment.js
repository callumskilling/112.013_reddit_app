import React from 'react';
import { timeFromNow } from '../../utils/TimeFromNow';
import './Comment.css'
import { User } from "../../assets/icons/User";
import { Calendar } from "../../assets/icons/Calendar";
import { Up } from "../../assets/icons/Up";

export default function Comment({ comment }) {
    const unixTimestamp = comment.created_utc;
    return (
        <div key={comment.id} className='comment-container'>
            <p className='comment-body'>{comment.body}</p>
            <div className='comment-info'>
                <div className="comment-info-wrapper"><p className="post-info-text author">{comment.author}</p><User className="post-info-icon" /></div>
                <div className="comment-info-wrapper"><p className="post-info-text date-posted">{timeFromNow(unixTimestamp)}</p><Calendar className="post-info-icon" /></div>
                <div className="comment-info-wrapper"><p className="post-info-text score">{Number(comment.score).toLocaleString('en', { useGrouping: true })}</p><Up className="post-info-icon" /></div>



            </div>
        </div>
    );
}
