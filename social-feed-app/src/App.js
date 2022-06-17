import React, { useState } from 'react';
import CreatePost from './Components/CreatePost';
import NavBar from './Components/NavBar';
import PostMapper from './Components/PostMapper';
import CustomButton from './Components/CustomButton';
import CustomDislikeButton from './Components/CustomButton';

function App() {
  //stateful variables
  const [posts, setPosts] = useState([
    {
      name: "Jake",
      message: "I like pizza for dinner",
      isLiked: false,
      isDislked: false,
      id: 1
    },
    {
      name: "Mike",
      message: "I like hot pockets for dinner",
      isLiked: false,
      isDislked: false,
      id: 2
    },

    {
      name: "Jake",
      message: "Pizza is better",
      isLiked: false,
      isDislked: false,
      id: 3
    },


  ])

  return (

    <div className='App'>
      <NavBar />
      <CreatePost />
      <PostMapper array={posts} />
      <h1>Changing Styles on Button Click</h1>
      <CustomButton />
      <h1>Changing Styles on Button Click</h1>
      <CustomButton />
    </div>
  );

};
  //Return JSX
 



export default App;






