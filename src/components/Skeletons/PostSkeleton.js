import React from 'react';
import './PostSkeleton.css'



export default function PostSkeleton() {
    return (
        <div className='post-skeleton-container'>
            <div className='post-skeleton-title'></div>
            <div className='post-skeleton-thumbnail'></div>
            <div className='post-skeleton-info'>
                <div className='post-skeleton-small-text'></div>
                <div className='post-skeleton-small-text'></div>
                <div className='post-skeleton-small-text'></div>              
            </div>
        </div>
    );
}