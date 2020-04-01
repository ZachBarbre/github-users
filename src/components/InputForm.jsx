import React, { useState } from 'react';


const InputForm = (props) => {
    const [username, setUsername] = useState('');
    
    const handleSubmit = async event => {
        event.preventDefault();
        const response = await fetch(`https://api.github.com/users/${username}`)
        const data = await response.json();
        props.onSubmit(data);
        setUsername('')
    }

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

// 

export default InputForm;