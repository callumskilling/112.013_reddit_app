import React from "react";
import { timeFromNow } from "../../utils/TimeFromNow";
import CommentsList from "../../features/commentsList/CommentsList"
import "./Post.css"
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPost } from "../../features/commentsList/commentsListSlice";



export default function Post(props) {
    const { post } = props
    const unixTimestamp = post.created;
    const dispatch = useDispatch();
    const currentPost = useSelector(selectCurrentPost);

    const handleClick = () => {
        if (post.permalink !== currentPost) {
            dispatch({
                type: "commentsList/updateCurrentPost", 
                payload: `${post.permalink}`
            })
        } else {
            dispatch({
                type: "commentsList/updateCurrentPost", 
                payload: ""
            })
        }

    }

    const renderComments = () => {
        if (post.permalink === currentPost) {
            return <CommentsList />
        }
    }

    return (
        <article key={post.id} className="post-container">
            <h2 className="post-title">{post.title}</h2>
            <img src={post.url} alt="" className="post-image" />
            <div className="post-info">
                <p className="author">👤 {post.author}</p>
                <p className="date-posted">🗓️ {timeFromNow(unixTimestamp)}</p>
                <button className="num-comments" onClick={handleClick}>💬 {post.num_comments}</button>              
            </div>
            {renderComments()}
        </article>
    );
}
