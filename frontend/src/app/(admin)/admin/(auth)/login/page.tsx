"use client";
import Brand from "@/components/Brand";
import { useFormik } from "formik";
import { useSession } from "next-auth/react";
import * as Yup from "yup";
import { signIn } from "next-auth/react";

const LoginPage = () => {
  const { data } = useSession();
  console.log(data?.user);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Must be an email").required("Required"),
      password: Yup.string()
        .required("Required")
        .min(8, "Password must have 8 charectors"),
    }),
    onSubmit: async (values) => {
      console.log("ran");
      signIn("admin-account", {
        callbackUrl: "/admin",
        email: values.email,
        password: values.password,
      });
    },
  });

  return (
    <div className="flex flex-col md:flex-row h-screen p-10  text-slate bg-secondary bg-opacity-10">
      <div className="w-full flex justify-center items-center p-16">
        <form
          className="text-start space-y-2 max-w-lg border-2 bg-white rounded-lg p-8 shadow-2xl"
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <Brand />
          <h1 className="text-xl font-bold text-center">Welcome back!</h1>
          <p className="text-slate-600">
            Please sign in to your account and start the adventure
          </p>
          <div className="form-control w-full">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              placeholder="Type here"
              className="input input-bordered w-full"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
            <span className="text-red-500">
              {formik.errors.email && formik.errors.email}
            </span>
          </div>
          <div className="form-control w-full">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Type here"
              className="input input-bordered w-full"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <span className="text-red-500">
              {formik.errors.password && formik.errors.password}
            </span>
          </div>
          <div className="form-control">
            <label className="label cursor-pointer flex justify-start gap-3">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                name="remember_me"
              />
              <span className="label-text">Remember me</span>
            </label>
          </div>
          <button type="submit" className="btn btn-primary w-full">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
