
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {

    const {loginUser}= useContext(AuthContext)
  const handelLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
        loginUser(email,password)
        .then(result=>{
            console.log(result.user)
            e.target.reset();
        })
        .catch(error=>{
            console.error(error.message)
        })
    
    
  };
  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold mt-10">Login Now!</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handelLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />
                <button className="btn btn-neutral mt-4">Login</button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
