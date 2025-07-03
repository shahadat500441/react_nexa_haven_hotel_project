import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [error, setError] = useState("");
  const handelRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const photo = e.target.photo.value;
    console.log(name, email, password, photo);

    // error reset
    setError("");


    if (password.length > 6) {
      setError("Password must be 6 character or longer");
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])[A-Za-z]{6}$/.test(password)) {
      setError(
        "Password should have at least character uppercase and lowercase"
      );
    }

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.error(error.message);
        setError(error.message)
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

                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                  required
                />

                <button className="btn btn-neutral mt-4">Register</button>
                {error && <p className="text-red-600">{error}</p>}
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
