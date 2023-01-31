import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Discription'},
        {id: 2, title: 'Typescript', body: 'wdgv'},
        {id: 3, title: 'CSS', body: 'Discription3'},
    ]);
    const [selectedSort, setSelectedSort] = useState('');
    const createPost = (newPost) => setPosts([...posts, newPost]);
    const removePost = (currentPost) => setPosts(posts.filter((post) => currentPost.id !== post.id));
    const sortPost = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    };

  return (
    <div className="App">
        <PostForm create={createPost}/>
        <div className="post__filter">
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
        {posts.length
            ? <PostList remove={removePost} posts={posts} title='Список постов 1'/>
            : <p className='post__info'>Посты не найдены :(</p>
        }
    </div>
  );
}

export default App;
