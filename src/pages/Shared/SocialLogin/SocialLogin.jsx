import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const {signInWithGoogle} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.path || '/'
  const handleGoogleSignIn = () => {
    signInWithGoogle()
    .then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      const savedUser ={name: loggedInUser.displayName, email: loggedInUser.email}
      fetch('http://localhost:5000/users' ,{
        method: 'POST',
        headers: {'content-type':'application/json'},
        body: JSON.stringify(savedUser)
       })
       .then(res=>res.json())
       .then(() => {                    
          navigate(from, {replace:true})           
       })
       

      
    })

  }
  return (
    <div>
      <div className="divider divider-horizontal"></div>
      <div className=" my-4 text-center">
      <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline ">
        <FaGoogle></FaGoogle>
      </button>
      </div>
    </div>
  );
};

export default SocialLogin;
