import React from "react";
import { timeFromNow } from "../../utils/TimeFromNow";
import CommentsList from "../../features/commentsList/CommentsList"
import "./Post.css"
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentPost } from "../../features/commentsList/commentsListSlice";
import { User } from "../../assets/icons/User";
import { Calendar } from "../../assets/icons/Calendar";
import { Speech } from "../../assets/icons/Speech";


export default function Post(props) {
    const { post } = props
    const unixTimestamp = post.created;
    const dispatch = useDispatch();
    const currentPost = useSelector(selectCurrentPost);

    const mediaRender = (post) => {
        if (!post.media) {
            return;
        } else if (post.is_video) {
            return (<video className="post-image" controls playsInline width="250"><source src={post.secure_media.reddit_video.fallback_url} /></video>);
        } else {
            return (<img src={post.url} alt="" className="post-image" />);
        }
    }

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
        <article key={post.id} className="post-container" onClick={handleClick}>
            <h2 className="post-title">{post.title}</h2>
            <div className="post-info-wrapper">
                <div className="author-wrapper">
                    <User className="post-info-icon" />
                    <p className="author post-info-detail">{post.author}</p>
                </div>
                <div className="date-posted-wrapper">
                    <Calendar className="post-info-icon" />
                    <p className="date-posted post-info-detail">{timeFromNow(unixTimestamp)}</p>
                </div>
                <div className="num-comments-wrapper">
                    <Speech className="post-info-icon" />
                    <button className="num-comments post-info-detail" onClick={handleClick}>{post.num_comments.toLocaleString('en', { useGrouping: true })}
                    </button>
                </div>
            </div>
            {mediaRender(post)}
        </article>
    );
}

