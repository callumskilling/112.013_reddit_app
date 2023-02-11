import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadAllComments,
    selectAllComments,
    isLoading,
    selectCurrentPost,
} from './commentsListSlice';
import Comment from '../../components/Comment/Comment';

const Comments = () => {
    const dispatch = useDispatch();
    const allComments = useSelector(selectAllComments);
    const isLoadingComments = useSelector(isLoading);
    const currentPost = useSelector(selectCurrentPost);

    useEffect(() => {
        dispatch(loadAllComments(currentPost));
    }, [dispatch, currentPost]);

    if (isLoadingComments) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <section className='comments-container'>
                {allComments.map((comment) => (
                        <Comment key={comment.id} comment={comment} />
                ))}
            </section>
        </>
    );
};

export default Comments;
