import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove, getPost}) => {
    if (!posts.length) {
    return <p className='post__info'>Посты не найдены :(</p>
    }
    return (
        <>
            <h1 style={{textAlign: "center"}}>
                {title}
            </h1>
            <ul className="post__list">
                {posts.map((post, index) => <PostItem
                    getPost={getPost}
                    remove={remove}
                    number={index + 1}
                    post={post}
                    key={post.id}
                />)}
            </ul>
        </>
    );
};

export default PostList;