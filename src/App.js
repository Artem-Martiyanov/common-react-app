import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import MyInput from "./components/UI/input/MyInput";
import {useMemo} from "react";
import PostFilter from "./components/PostFilter";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Discription'},
        {id: 2, title: 'Typescript', body: 'wdgv'},
        {id: 3, title: 'CSS', body: 'Discription3'},
    ]);
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');

    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]));
        }
        return posts;
    }, [selectedSort, posts]);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(searchQuery));
    }, [searchQuery, sortedPosts]);

    const createPost = (newPost) => setPosts([...posts, newPost]);
    const removePost = (currentPost) => setPosts(posts.filter((post) => currentPost.id !== post.id));
    const sortPost = (sort) => {
        setSelectedSort(sort);
    };




  return (
    <div className="App">
        <PostForm create={createPost}/>
        <PostFilter/>
        {sortedAndSearchedPosts.length
            ? <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов 1'/>
            : <p className='post__info'>Посты не найдены :(</p>
        }
    </div>
  );
}

export default App;
