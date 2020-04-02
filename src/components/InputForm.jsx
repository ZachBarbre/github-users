import React, { useState, useEffect } from 'react';
import getData from '../utils/getData';


const InputForm = (props) => {
    const [username, setUsername] = useState('');
    
    const handleSubmit = async event => {
        event.preventDefault();
        const userData = await getData(`https://api.github.com/users/${username}`)
        props.onSubmit(userData);
        setUsername('')
    }

    // useEffect( () => {
    //     const getUser = async (props) => {
    //         const userData = await getData(`https://api.github.com/users/zachbarbre`)
    //         console.log(userData)
    //         props.onSubmit(userData);
    //     }
    //     getUser();
    // }, [props.onSubmit])

    return (
       <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                placeholder='GitHub Username'
                value={username}
                onChange={event => setUsername(event.target.value)}
                required    
            />
                <button type='submit'>Get User</button>
            </form>
       </div>
    )
}  

export default InputForm;