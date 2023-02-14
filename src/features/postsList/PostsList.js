import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadAllPosts,
    selectAllPosts,
    isLoading,
    selectCurrentSubreddit,
} from './postsListSlice';
import Post from '../../components/Post/Post';
import './PostsList.css'
import PostSkeleton from '../../components/Skeletons/PostSkeleton';

const Posts = () => {
    const dispatch = useDispatch();
    const allPosts = useSelector(selectAllPosts);
    const isLoadingPosts = useSelector(isLoading);
    const currentSubreddit = useSelector(selectCurrentSubreddit)

    useEffect(() => {
        dispatch(loadAllPosts(currentSubreddit));
    }, [dispatch, currentSubreddit]);

    if (isLoadingPosts) {
        return (
            <section className='posts-container'>
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
                <PostSkeleton />
            </section>
        )
    }

    return (
        <>
            <section className='posts-container'>
                {allPosts.map((post) => (
                    <Post key={post.id} post={post} />
                ))}
            </section>
        </>
    );
};

export default Posts;
