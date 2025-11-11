import React from 'react';

function Signui(){
    return(
        <div>
            <form action="post">
                <label htmlFor="email">email:</label>
                <input type="email" placeholder='Email**' className='form-control'/>
                <label htmlFor="name">First name:</label>
                <input type="text" placeholder='F*Name' className='form-control' />
                <label htmlFor="name">Last name:</label>
                <input type="text" placeholder='L*Name' />
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder='passw***' />

                <button onClick={() => setPage('home')}>Register</button>
            </form>
        </div>
    )
}
export default Signui;