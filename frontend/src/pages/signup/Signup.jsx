import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import useRegister from '../../hooks/useRegister';
import Gender from './Gender';

const Signup = () => {
    const [inputs, setInputs] = useState({
        fullName:'',
        username:'',
        password:'',
        confirmPass:'',
        gender:''
    })
    const {register, loading} = useRegister();
    
    const handleSubmit = async (e) =>{
        e.preventDefault();
        await register(inputs);

    }
    const handleCheckboxChange = gender =>{
        setInputs({...inputs, gender})

    }

  return (
    <div className=' w-full h-[100vh] flex flex-col justify-center items-center'>
        <form className=' p-10 box flex flex-col gap-3 rounded-lg' onSubmit={handleSubmit}>
        <h1 className="text-3xl font-semibold text-center text-gray-300 ">
          Signup
          <span className="text-blue-900 capitalize"> chat-app</span>
        </h1>
            <div>
                <label className='p-2 label'>
                    <span className='label-text text-base'>Full name</span>
                </label>
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full input input-bordered h-10 capitalize"
              value={inputs.fullName}
              onChange={(e)=> setInputs({...inputs, fullName:e.target.value})}
            />
            </div>
            <div>
                <label className='p-2 label'>
                    <span className='label-text text-base capitalize'>username</span>
                </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e)=> setInputs({...inputs, username:e.target.value})}
            />
            </div>
            <div>
                <label className='p-2 label'>
                    <span className='label-text text-base capitalize'>password</span>
                </label>
            <input
              type="password"
              placeholder="Enter password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e)=> setInputs({...inputs, password:e.target.value})}
            />
            </div>
            <div>
                <label className='p-2 label'>
                    <span className='label-text text-base capitalize'>confirm password</span>
                </label>
            <input
              type="password"
              placeholder="Confirm password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPass}
              onChange={(e)=> setInputs({...inputs, confirmPass:e.target.value})}
            />
            </div>
            <div>
            <Gender onCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />
            </div>
                <div className='hover:text-blue-500 capitalize'>
                    <Link to='/login'>already have an account ?</Link>
                </div>
            <div className='flex justify-center'>
                <button type="submit" className='btn btn-primary mt-3'>Signup</button>
            </div>
        </form>
    </div>
  )
}

export default Signup
