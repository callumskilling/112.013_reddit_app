import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    loadAllPosts,
    selectAllPosts,
    isLoading,
} from './postsListSlice';
import Post from '../../components/post/Post';

const Posts = () => {
    const dispatch = useDispatch();
    const allPosts = useSelector(selectAllPosts);
    const isLoadingPosts = useSelector(isLoading);

    useEffect(() => {
        dispatch(loadAllPosts());
    }, [dispatch]);

    if (isLoadingPosts) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <section className='posts-container'>
                <h2 className='section-title'>All Posts</h2>
                {allPosts.map((post) => (
                    <div key={post.id}>
                        <Post post={post} />
                    </div>
                ))}
            </section>
        </>
    );
};

export default Posts;
