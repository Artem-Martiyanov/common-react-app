import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import {useMemo} from "react";
import PostFilter from "./components/PostFilter";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Discription'},
        {id: 2, title: 'Typescript', body: 'wdgv'},
        {id: 3, title: 'CSS', body: 'Discription3'},
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''})

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));
    }, [filter.query, sortedPosts]);

    const createPost = (newPost) => setPosts([...posts, newPost]);
    const removePost = (currentPost) => setPosts(posts.filter((post) => currentPost.id !== post.id));


  return (
    <div className="App">
        <PostForm create={createPost}/>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов 1'/>
    </div>
  );
}

export default App;
