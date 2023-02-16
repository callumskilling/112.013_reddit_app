import React from 'react';
import './PostSkeleton.css'



export default function PostSkeleton() {
    return (
        <div className='post-skeleton-container'>
            <div className='post-skeleton-title'></div>
            <div className='post-skeleton-image'></div>
            <div className='post-skeleton-info'>
                <div className='post-skeleton-long-text'></div>
                <div className='post-skeleton-medium-text'></div>
                <div className='post-skeleton-short-text'></div>              
            </div>
        </div>
    );
}