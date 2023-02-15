import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadAllPosts,
    selectAllPosts,
    isLoading,
    selectCurrentSubreddit,
    selectCurrentSearchTerm,
} from './postsListSlice';
import Post from '../../components/Post/Post';
import './PostsList.css'
import PostSkeleton from '../../components/Skeletons/PostSkeleton';

const Posts = () => {
    const dispatch = useDispatch();
    const allPosts = useSelector(selectAllPosts);
    const isLoadingPosts = useSelector(isLoading);
    const currentSubreddit = useSelector(selectCurrentSubreddit);
    const currentSearchTerm = useSelector(selectCurrentSearchTerm);

    useEffect(() => {
        dispatch(loadAllPosts(currentSubreddit));
    }, [dispatch, currentSubreddit]);

    const renderFilteredPosts = (post) => {
        if (post.title.includes(currentSearchTerm)) {
            console.log('currentSearchTerm includes post.title')
            return (<Post key={post.id} post={post} />)
        }
    }

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

    if (currentSearchTerm === '') {
        return (
            <>
                <section className='posts-container'>
                    {allPosts.map((post) => (
                        <Post key={post.id} post={post} />
                    ))}
                </section>
            </>
        )

    }

    if (currentSearchTerm !== '') {
        return (
            <>
                <section className='posts-container'>
                    {allPosts.map(post => renderFilteredPosts(post))}
                </section>
            </>
        )
    }
};

export default Posts;
