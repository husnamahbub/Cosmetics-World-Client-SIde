import { updateProfile } from "firebase/auth";
import { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import { AuthContext } from "../../Context/AuthProvider";
import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";

const Register = () => {
    const {createUser, signInWithGoogle} = useContext(AuthContext)
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const photoLink = form.get('image');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photoLink, email, password);


      const passwordError = /[!@#\$%\^\&*\)\(+=._-]/g;


      if (password.length < 6) {
          toast.error('Password must be more than 6 digits',{
            position: "top-center"
          });
          return;
      }
 
      else if (!/[A-Z]/.test(password)) {
          toast.error('The password must have a upper case',{
            position: "top-center"
          })
          return;
      }
      else if (!passwordError.test(password)) {
        toast.error("Password must have a special characters",{
          position: "top-center"
        });
        return;
      }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            toast.success('Your register is successfully', {
                position: "top-center",})

                updateProfile(result.user, {
                    displayName: name, 
                    photoURL: photoLink
                })
                .then( () => console.log('profile updated'))
                .catch()
        })
        .catch(error => console.error(error.message))

    }

    const handleWithGoogle = () => {
      signInWithGoogle()
      .then(result => {
        const user = result.user;
        console.log(user);
      })
      .catch(error => console.error(error))
    }
    return (
        <div>
            <Navbar></Navbar>
           <div className="hero min-h-screen ">
  <div className="hero-content flex-col">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Register now!</h1>
      
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleRegister} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Image</span>
          </label>
          <input type="text" name="image" placeholder="Your photo url " className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn text-white font-bold bg-orange-300">Register</button>
          <button onClick={handleWithGoogle} className="btn  font-bold bg-white border-2 border-[#d7535a] mb-3 mt-3"><img className="w-9" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png" alt="" /></button>
           <p>you have already an account go to sign In page <Link className="text-red-500" to="/login"> Login</Link></p>
        </div>
      </form>
    </div>
  </div>
</div>
<ToastContainer />
        </div>
    );
};

export default Register;