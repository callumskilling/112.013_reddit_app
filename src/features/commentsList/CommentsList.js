import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadAllComments,
    selectAllComments,
    isLoadingCommentsList,
    selectCurrentPost,
} from './commentsListSlice';
import Comment from '../../components/Comment/Comment';
import CommentSkeleton from '../../components/Skeletons/CommentSkeleton';

const Comments = () => {
    const dispatch = useDispatch();
    const allComments = useSelector(selectAllComments);
    const isLoadingComments = useSelector(isLoadingCommentsList);
    const currentPost = useSelector(selectCurrentPost);

    useEffect(() => {
        dispatch(loadAllComments(currentPost));
    }, [dispatch, currentPost]);

    if (isLoadingComments) {
        return (
            <section className='comments-container'>
                <CommentSkeleton />
                <CommentSkeleton />
                <CommentSkeleton />
                <CommentSkeleton />
            </section>
        );
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
