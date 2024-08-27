"use client";
import { useFormik } from "formik";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

const CreateAccount = () => {
  const router = useRouter();

  // Initialize Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle form submission
      router.push("/account-created-successfully");
    },
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="flex w-full flex-col gap-3 max-w-[450px] mx-auto my-10"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="input-label-style">
          E-mail
        </label>
        <div className="border flex justify-between items-center rounded-[6px] border-gray-600 h-[50px] sm:h-[60px] px-3">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email address"
            className="w-full bg-transparent border-none outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
        </div>
        {formik.touched.email && formik.errors.email ? (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 mt-2 sm:mt-3">
        <label htmlFor="password" className="input-label-style">
          Password
        </label>
        <div className="border flex justify-between items-center rounded-[6px] border-gray-600 h-[50px] sm:h-[60px] px-3">
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter your password"
            className="w-full bg-transparent border-none outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
        </div>
        {formik.touched.password && formik.errors.password ? (
          <div className="text-red-500 text-sm">{formik.errors.password}</div>
        ) : null}
      </div>
      <div className="flex flex-col gap-2 mt-2 sm:mt-3">
        <label htmlFor="confirmPassword" className="input-label-style">
          Confirm Password
        </label>
        <div className="border flex justify-between items-center rounded-[6px] border-gray-600 h-[50px] sm:h-[60px] px-3">
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Enter your confirm password"
            className="w-full bg-transparent border-none outline-none"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.confirmPassword}
          />
        </div>
        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
          <div className="text-red-500 text-sm">
            {formik.errors.confirmPassword}
          </div>
        ) : null}
      </div>
      <button
        type="submit"
        className={
          "mt-5 gap-4 px-6 bg-primary h-[50px] sm:h-[64px] flex items-center justify-center rounded-lg font-switzer hover:text-primary text-white text-base hover:bg-transparent border border-primary duration-150 ease-in-out transition-all"
        }
      >
        Create account
      </button>
      <Link href={"/"} className="back-btn-style">
        Back to login
      </Link>
    </form>
  );
};

export default CreateAccount;
