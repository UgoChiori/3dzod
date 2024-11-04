import React from "react";
import {useForm} from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormInput } from "../validation/registervalidation";
import "./register.css";

const Register: React.FC = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<RegisterFormInput>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: RegisterFormInput) => {
    console.log("form data submitted:",data);

  };



  return (
    <main>
      <div className="form-container">
        <h2 className="reg-header">Register</h2>
        <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-body">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
            
              {...register("name")}
              placeholder="Enter your name"
            />
            {errors.name && <p className="error">{errors.name.message}</p>}
          </div>
          <div className="form-body">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              {...register("username")}
              placeholder="Enter your username"
            />
            {errors.username && <p className="error">{errors.username.message}</p>}
          </div>
            <div className="form-body">
                <label htmlFor="email">Email</label>
                <input
                type="email"
                id="email"
                {...register("email")}
                placeholder="Enter your email"
                />
            </div>
            <div className="form-body">
                <label htmlFor="password">Password</label>
                <input
                type="password"
                id="password"
               
                {...register("password")}
                placeholder="Enter your password"
                />
                {errors.password && <p className="error">{errors.password.message}</p>}
            </div>
            <div className="form-body">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                type="password"
                id="confirm-password"
                {...register("confirmPassword")}
                placeholder="Confirm your password"
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword.message}</p>}
            </div>
            <button type="submit" className="register-btn">
                Register
            </button>
        </form>
      </div>
    </main>
  );
};

export default Register;
