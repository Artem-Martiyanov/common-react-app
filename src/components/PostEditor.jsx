import React from 'react';
import MyInput from "./UI/input/MyInput";
import MyTextarea from "./UI/textarea/MyTextarea";
import MyButton from "./UI/button/MyButton";
const PostEditor = ({title, body}) => {
    return (
        <>
            <MyInput
                placeholder='Введите название поста'
            />
            <MyTextarea
                placeholder='Введите описание поста'
                rows='7'
            />
            <div>
                <MyButton>
                    Применить
                </MyButton>
                <MyButton>
                    Отмена
                </MyButton>
            </div>
        </>
    );
};

export default PostEditor;