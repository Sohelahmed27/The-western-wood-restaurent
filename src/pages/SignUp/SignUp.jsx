import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../providers/AuthProvider";
import swal from "sweetalert";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Shared/SocialLogin/SocialLogin";

const SignUp = () => {
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        updateUserProfile(data.name, data.Photo_URL).then(() => {
          const savedUser = { name: data.name, email: data.email };

          fetch("https://western-wood-restaurant-server.vercel.app/users", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(savedUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.insertedId) {
                reset();
                swal({
                  title: "Good job!",
                  text: "You successfully created account!",
                  icon: "success",
                });

                navigate("/");
              }
            });
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Helmet>
        <title>Western-Wood | Signup</title>
      </Helmet>
      <div>
        <div className="hero  bg-base-200">
          <div className="hero-content">
            <div className="card w-full shadow-2xl bg-base-100">
              <h1 className="text-3xl font-bold text-center mt-10">
                Please Sign up!
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    placeholder="name"
                    className="input input-bordered"
                  />
                  {errors.Name && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Photo_URL</span>
                  </label>
                  <input
                    {...register("Photo_URL", { required: true })}
                    type="text"
                    placeholder="Photo_URL"
                    className="input input-bordered"
                  />
                  {errors.Photo_URL && (
                    <span className="text-red-600">Photo is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                  {errors.Email && (
                    <span className="text-red-600">This field is required</span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    {...register("password", {
                      minLength: 6,
                      maxLength: 20,
                      required: true,
                      pattern:
                        "/(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[0-9]/",
                    })}
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {errors.password && (
                    <span className="text-red-600">
                      Password must be six character
                    </span>
                  )}
                  {errors.password?.type === "pattern" && (
                    <span className="text-red-600">
                      Password must have a lowercase, a uppercase, a number and
                      spacial character.
                    </span>
                  )}
                  <label className="label"></label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Sign up</button>
                </div>
                <p className="text-center">
                  <small>
                    Already have an account?<Link to="/login">Login here</Link>
                  </small>
                </p>
              </form>
              <SocialLogin></SocialLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
