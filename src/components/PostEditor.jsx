import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyTextarea from "./UI/textarea/MyTextarea";
import MyButton from "./UI/button/MyButton";
const PostEditor = ({post, setPost, editPost, setVisible}) => {
    return (
        <>
            <MyInput
                placeholder='Введите название поста'
                value={post.title}
                onChange={(e) => setPost({...post, title: e.target.value})}
            />
            <MyTextarea
                placeholder='Введите описание поста'
                rows='7'
                value={post.body}
                onChange={(e) => setPost({...post, body: e.target.value})}
            />
            <div>
                <MyButton onClick={editPost}>
                    Применить
                </MyButton>
                <MyButton onClick={() => setVisible(false)}>
                    Отмена
                </MyButton>
            </div>
        </>
    );
};

export default PostEditor;