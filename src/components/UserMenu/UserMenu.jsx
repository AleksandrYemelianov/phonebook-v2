import React from 'react'
// import { useDispatch } from 'react-redux';
// import { setToken } from 'redux/authUser/tokenSlice';
import { useLogOutUserMutation } from 'redux/authUser/userSlice';

function UserMenu({ data: { name } }) {
    // const dispatch = useDispatch()
    
    const [logOutUser] = useLogOutUserMutation();
    const handleLogOut = async () => {
        try {
            await logOutUser();
            // dispatch(setToken(''))
        } catch (error) {
            console.log(error)
        }
    };
    return (
        <div>
            <p>Hello, {name}</p>
            <button type='button' onClick={handleLogOut}>Logout</button>
        </div>
    );  
};

export default UserMenu