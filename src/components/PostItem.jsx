import React from 'react';
import MyButton from "./UI/button/MyButton";

const PostItem = ({post, number, remove, getPost}) => {

    return (
        <li className="post">
            <div className="post__content">
                <h2 className='post__title'>{number}. {post.title}</h2>
                <p className="post__description">
                    {post.body}
                </p>
            </div>
            <div className="post__buttons">
                <MyButton onClick={() => remove(post)}>
                    Удалить
                </MyButton>
                <MyButton onClick={() => getPost(post)}>
                    Редактировать
                </MyButton>
            </div>
        </li>
    );
};

export default PostItem;