import {useReducer, useState, useSyncExternalStore} from 'react'
import "./CustomButton.css"

const CustomButton = (props) => {

    const [buttonClass, setButtonClass] = useState("inactive");

    function handleClick(){

        if(buttonClass === "inactive"){
            setButtonClass("active");
        }
        else{
            setButtonClass("inactive");
        }
    }

        return (
            <div>
                <button onClick={handleClick}>like</button>
            </div>

const [buttonClass, setButtonClass] = useState("inactive");

function handleClick(){

    if(buttonClass === "inactive"){
        setButtonClass("active");
    }
    else{
        setButtonClass("inactive");
    }
}

    return (
        <div>
            <button onClick={handleClick}>dislike</button>
        </div>  
        )
    }

export default CustomButton


