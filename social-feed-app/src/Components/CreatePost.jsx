import React from "react";

const CreatePost = (props) => {
    return ( 
        <form>
            <label>
                Name:
                <input type="text" name= "name" />
            </label>
            <label>
                Post:
                <input type="text" post="post"/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
          
          );
}
    

export default CreatePost;