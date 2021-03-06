import NavBar from "./NavBar"
import './App.css'
import PostList from "./PostList";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import { useState, useEffect } from 'react'
import PostUpload from "./PostUpload"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Search from "./Search"
import SearchContainer from "./SearchContainer";
import NewsFeed from "./NewsFeed";
import Profile from "./Profile"
import ChatRoom from "./ChatRoom"


function App() {
  const [currentUser, setCurrentUser] = useState("");
  const [users, setUsers]=useState([]);
  const [search, setSearch] = useState("");
  const [posts, setPosts] = useState([])
  const [pictures, setPictures] = useState([]);
  const [comments, setComments] = useState([]);
  const [likes, setLikes]= useState([0])

  const filteredUsers = users.filter((user) => user.username.toLowerCase().includes(search.toLowerCase()))
  // let caption;
  // let image;
  const mappedPosts = posts.map((post) => {
    let caption=post.caption
    console.log(post.caption)
  })

  useEffect(() => {
    fetch('/users')
    .then(res => res.json())
    .then(data => setUsers(data))
},[])

  useEffect(() => {
    fetch('/me')
    .then(res => res.json())
    .then(data=> data.username && setCurrentUser(data) );
    },[])
  console.log(currentUser)

  useEffect(() => {
    fetch('/posts')
    .then(res => res.json())
    .then(data=>
      // console.log(data) 
      setPosts(data) && setPictures(data.picture)
      );
    
    },[])

    // useEffect(() => {
    //   fetch('/likes')
    //   .then(res => res.json())
    //   .then(data=> setLikes(data)
    //     );
      
    //   },[])

    // useEffect(() => {
    //   fetch('/comments')
    //   .then(res => res.json())
    //   .then(data=> setComments(data) );
    //   },[])
      
      function handleDeletePost(id){
        const updatedPostsArray = posts.filter((post)=> post.id !== id)
        setPosts(updatedPostsArray)
      }

      function handleUpdatePost(id){
        const updatedPostsArray = posts.filter((post)=> post.id !== id)
        setPosts(updatedPostsArray)
      }

      

  if (!currentUser) {
    return (
      <Routes>
        <Route path="/" element={<SignIn setCurrentUser={setCurrentUser} />} />
        <Route path="/SignIn" element={<SignIn currentUser={currentUser} setCurrentUser={setCurrentUser} />} />
        <Route path='/SignUp' element={<SignUp  />} />
      </Routes>


    )
  } else{
  return (

      <div className="App">
        <header className="App-header">
      {/* {window.location.href="/home"} */}
         
          <NavBar setCurrentUser={setCurrentUser} users={filteredUsers} setUsers={setUsers} setSearch={setSearch} search={search} />
            <SearchContainer users={filteredUsers} search={search}/>
          <Routes>
            <Route path="/home" element={<NewsFeed handleUpdatePost={handleUpdatePost} currentUser={currentUser} handleDeletePost={handleDeletePost} likes ={likes} setLikes={setLikes} pictures={pictures} posts={posts} mappedPosts={mappedPosts}/>}/>
            <Route path='/upload' element={<PostUpload />}/>
            <Route path='search' element={<Search/>}/>
            <Route path='/profile' element={<Profile currentUser={currentUser}posts={posts} />}/>
            <Route path='/chatroom' element={<ChatRoom currentUser={currentUser} />}/>
            {/* <Route path='/messages' element={<MessagesLayout />}/> */}
          {/* <SignUp />
          <SignIn  /> */}
          </Routes>
          <SearchContainer users={filteredUsers} search={search}/>
        </header>
      </div>

  );
}
}

export default App;