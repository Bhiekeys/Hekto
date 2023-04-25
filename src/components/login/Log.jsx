/** @format */

import React from 'react';
import com from '../../assets/com.png';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


const Log = () => {
  const LoginSchema = Yup.object().shape({
    password: Yup.string()
      .min(8, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });
  const navigate = useNavigate();

  return (
    <>
      <div className="pt-[95px]">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={(values) => {
            window.localStorage.setItem("Login" ,true)
            navigate('/');
          }}>
          {({ errors, touched }) => (
            <Form className="grid justify-center">
              <div className="bg-white sm:shadow-[0_5px_30px_-17px_rgba(0,0,0,0.3)] py-3 px-4 sm:py-6 sm:px-10">
                <div className="text-center pb-8 leading-10">
                  <h2 className="text-[#000] text-[35px] font-bold">Login</h2>
                  <p className="text-[#9096B2] text-[17px]">
                    Please login using account detail bellow.
                  </p>
                </div>
                <div className="sm:w-[400px] w-auto">
                  <div className="flex w-full">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className="py-3 text-[16px] outline-0 border border-[#C2C5E1] pl-4 rounded-sm w-full"
                    />
                  </div>
                  {errors.email && touched.email ? (
                    <div className="text-[#dd4a4a]">{errors.email}</div>
                  ) : null}
                </div>
                <div className="sm:w-[400px] w-auto pt-5">
                  <div className="flex w-full">
                    <Field
                      placeholder="Password"
                      name="password"
                      type="password"
                      className="border outline-0 text-[16px] border-[#C2C5E1] py-3 pl-4 rounded-sm w-full"
                    />
                  </div>
                  {errors.password && touched.password ? (
                    <div className="text-[#dd4a4a]">{errors.password}</div>
                  ) : null}
                </div>
                <p className=" pb-6 cursor-pointer pt-3 text-[#9096B2] text-[17px]">
                  Forgot your password?
                </p>
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#FB2E86] font-medium text-[17px] text-[#fff] py-3 rounded-sm w-full">
                    Sign In
                  </button>
                </div>
                <div>
                  <p className="text-[#9096B2] cursor-pointer text-center pt-6 text-[17px]">
                    Don’t have an Account?Create account
                  </p>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="flex justify-center my-28">
        <img src={com} alt="" />
      </div>
    </>
  );
};

export default Log;
