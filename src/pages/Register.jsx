import { useContext, useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser,googleSignIn ,githubSignIn,userUpdateProfile} = useContext(AuthContext);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(true);


  const handelGoogleSignIn = ()=>{
    googleSignIn()
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.error(error.message)
    })
  }

  const handelGithubSignIn = ()=>{
    githubSignIn()
    .then(result=>{
      console.log(result.user)
    })
    .catch(error=>{
      console.error(error.message)
    })
  }
  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    console.log(name, email, password, photo);

    // reset error
    setError("");
    setSuccess("");

    if (password.length < 6) {
      setError("Password must be 6 character or longer");
      return;
    }
    // if (!/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{6}$/.test(password)) {
    //   setError(
    //     "Password should have at least character uppercase and lowercase"
    //   );
    //  return
    // }

    createUser(email, password)
      .then((result) => {
        userUpdateProfile(name,image)
        .then()
        console.log(result.user);
        setSuccess("User register Successfull")
        e.target.reset();
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message);
      });
  };
  return (
    <div className="hero bg-base-200 ">
      <div className="hero-content flex-col ">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold mt-10">Register Your Account</h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handelRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  name="name"
                  type="text"
                  className="input"
                  placeholder="Name"
                />
                <label className="label">Email</label>
                <input
                  name="email"
                  type="email"
                  className="input"
                  placeholder="Email"
                  required
                />
                <label className="label">Photo</label>
                <input
                  name="photo"
                  type="photo"
                  className="input"
                  placeholder="Photo URL"
                />
                <label className="label">Password</label>

                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                    required
                  />
                  <span
                    className="absolute top-3 right-5 text-lg"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <IoEyeOff></IoEyeOff> : <IoEye></IoEye>}
                  </span>
                </div>
                <button className="btn btn-neutral mt-4">Register</button>
                {error && <p className="text-red-600">{error}</p>}
                {success && <p className="text-green-600">{success}</p>}
              </fieldset>
            </form>
            <button onClick={handelGoogleSignIn} className="btn btn-primary">Google SignIn</button>
            <button onClick={handelGithubSignIn} className="btn btn-primary">Github SignIn</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
