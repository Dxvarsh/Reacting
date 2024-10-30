import React from 'react'


const Button = (props) => {
    const {isFriend, friendHandle, index} = props;
    return (
        <button 
            onClick={() => friendHandle(index)}
            className={`${isFriend ? "bg-red-500" : "bg-blue-500"} ${
            isFriend ? "hover:bg-red-600" : "hover:bg-blue-600"
            } text-white py-2 px-4 rounded-lg font-semibold  transition duration-200`}
        >
            {isFriend ? "remove friend" : "Add Friend"}
        </button>
    )
}

export default Button