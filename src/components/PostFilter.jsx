import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";

const PostFilter = ({filter, setFilter}) => {


    return (
        <div className="post__filter">
            <MyInput
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Введите название поста..."
            />
            <MySelect
                value={selectedSort}
                onChange={sortPost}
                defaultOption="Сортировка по: "
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
    );
};

export default PostFilter;