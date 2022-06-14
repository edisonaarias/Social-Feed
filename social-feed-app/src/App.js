import React, { useState } from 'react';
import CreatePost from './Components/CreatePost';
import NavBar from './Components/NavBar';
import PostMapper from './Components/PostMapper';


function App() {
   //stateful variables
   const [posts, setPosts] = useState([])
      {
        name: "Jake",
        message: "I like pizza for dinner",
        isLiked: false,
        isDislked: false
      },
      {
        name: "Jake",
        message: "I like pizza for dinner",
        isLiked: false,
        isDislked: false,
      },
      
      {
        name: "Jake",
        message: "I like pizza for dinner",
        isLiked: false,
        isDislked: false,
      },



   //Return JSX
  return (
    
    <div className="pretty-boy-blue">
      <NavBar/>
      <CreatePost />
      <PostMapper array={posts}/>
    </div>
  );
}

export default App;







    <a hr














    </div>




