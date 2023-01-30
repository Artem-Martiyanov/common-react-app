import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript', body: 'Discription'},
        {id: 2, title: 'Typescript', body: 'Discription2'},
        {id: 3, title: 'CSS', body: 'Discription3'},
    ]);
    const createPost = (newPost) => setPosts([...posts, newPost]);
    const removePost = (currentPost) => setPosts(posts.filter((post) => currentPost.id !== post.id));


  return (
    <div className="App">
        <PostForm create={createPost}/>
        {posts.length > 0
            ? <PostList remove={removePost} posts={posts} title='Список постов 1'/>
            : <p className='post__info'>Посты не найдены :(</p>
        }
    </div>
  );
}

export default App;
