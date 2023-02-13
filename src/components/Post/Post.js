import React from 'react';
import { timeFromNow } from '../../utils/TimeFromNow';
import CommentsList from '../../features/commentsList/CommentsList'
import './Post.css'
import { useDispatch, useSelector } from 'react-redux';
import { selectCurrentPost } from '../../features/commentsList/commentsListSlice';



export default function Post(props) {
    const { post } = props
    const unixTimestamp = post.created;
    const dispatch = useDispatch();
    const currentPost = useSelector(selectCurrentPost);

    const renderComments = () => {
        if (post.permalink === currentPost) {
            return <CommentsList />
        }
    }

    return (
        <div key={post.id} className='post-container' onClick={() => dispatch({type: "commentsList/updateCurrentPost", payload: `${post.permalink}`})}>
            <h3 className='post-title'>{post.title}</h3>
            <img src={post.thumbnail} alt='' className='post-thumbnail' />
            <div className='post-info'>
                <p className='author'>👤 {post.author}</p>
                <p className='date_posted'>🗓️ {timeFromNow(unixTimestamp)}</p>
                <p className='num_comments'>💬 {post.num_comments}</p>              
            </div>
            {renderComments()}
        </div>
    );
}
