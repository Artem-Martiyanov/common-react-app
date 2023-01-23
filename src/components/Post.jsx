import React from 'react';

const Post = ({data}) => {
    return (
        <li className="post__item">
            <h3 className="post__title">{data.title}</h3>
            <img className="post__img" src={data.url} alt="Фото поста."/>
            <p className="post__description">{data.body}</p>
            <div className="post__buttons">
                <button className="btn" type="button">Кнопка</button>
            </div>
        </li>
    );
};
export default Post;




