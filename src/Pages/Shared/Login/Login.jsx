import React from 'react';
import img from '../../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';


const Login = () => {
    const handleSignIn = (event) => {
        event.preventDefault()
        const form = event.target;
        const email= form.email.value;
        const password = form.password.value;
        console.log(email, password)
    }
    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <div className="  w-1/2">
            
          <img src={img} alt="" />
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
            <h1 className="text-5xl font-bold">Login now!</h1>
            <form onSubmit={handleSignIn}>
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text" name='email' placeholder="Your email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input type="text" name='password' placeholder="Your password" className="input input-bordered" />
              </div>
              <div className="form-control mt-6">
                <input className='btn btn-primary' type="submit" value="Sign in" />
               
              </div>
            </form>
            <p className='py-4 text-center font-semibold'>New to Car Doctors <Link className=' text-orange-500' to="/signup"> Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Login;