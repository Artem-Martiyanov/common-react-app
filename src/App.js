import React, {useState} from "react";
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import {useMemo} from "react";
import PostFilter from "./components/PostFilter";
import PostEditor from "./components/PostEditor";
import MyModal from "./components/UI/modal/MyModal";
import MyButton from "./components/UI/button/MyButton";


function App() {
    const [posts, setPosts] = useState([
        {id: 1, title: 'Веялка', body: `Животным повезло меньше всего — оказаться в сумасшедшем мире, где их одновременно ненавидят и любят,
             истребляют и спасают, издеваются и защищают разные представители одного и того же вида.`},
        {id: 2, title: 'Законодатель', body: `Если кто-то опаздывает к назначенному часу, ты ведь побежишь ему навстречу?`},
        {id: 3, title: 'Кабалистика', body: `У сердца есть мощь, которой ни одна дисциплина не в силах противостоять.`},
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''})
    const [modalCreator, setModalCreator] = useState(false);
    const [modalEditor, setModalEditor] = useState(false);
    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);
    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query));
    }, [filter.query, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModalCreator(false);
    }
    const removePost = (currentPost) => setPosts(posts.filter((post) => currentPost.id !== post.id));
    // const editPost = (currentPost) =>


  return (
    <div className="App">
        <MyButton onClick={() => setModalCreator(true)}>
            Создать новый пост
        </MyButton>
        <MyModal visible={modalCreator} setVisible={setModalCreator}>
            <PostForm create={createPost}/>
        </MyModal>
        <MyModal>
            <PostEditor/>
        </MyModal>
        <PostFilter filter={filter} setFilter={setFilter}/>
        <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов 1'/>
        {/*<PostEditor />*/}

    </div>
  );
}

export default App;
