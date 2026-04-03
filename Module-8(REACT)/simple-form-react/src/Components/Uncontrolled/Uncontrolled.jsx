import React, { useRef } from 'react';

const Uncontrolled = () => {

    const emailRef = useRef('');
    const passwordRef = useRef('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(emailRef.current.value);
        const password = passwordRef.current.value;
        console.log(password)
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email"placeholder='email'/>
                <br />
                <input ref={passwordRef} type="password" name="password" placeholder='password' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Uncontrolled;