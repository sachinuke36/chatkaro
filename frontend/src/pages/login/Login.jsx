import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useLogin from '../../hooks/useLogin';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const {login, loading} = useLogin();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        await login(username, password);
    }


  return (
    <div className=' w-full h-[100vh] flex flex-col justify-center items-center'>
        <form className=' p-10 box flex flex-col gap-3 rounded-lg' onSubmit={handleSubmit}>
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">
          Login
          <span className="text-blue-900 capitalize"> chat-app</span>
        </h1>
            <div>
                <label className='p-2 label'>
                    <span className='label-text text-base'>username</span>
                </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
            />
            </div>
            <div>
                <label className='p-2 label'>
                    <span className='label-text text-base'>password</span>
                </label>
            <input
              type="password"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
            />
            </div>
                <div className='hover:text-blue-500'>
                    <Link to='/signup'>Don't have an account ?</Link>
                </div>
            <div className='flex justify-center'>
                <button type="submit" className='btn btn-primary mt-3'>Login</button>
            </div>
        </form>
    </div>
  )
}

export default Login
