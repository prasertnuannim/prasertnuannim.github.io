"use client";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { RootState, useAppDispatch } from "@/store/store";
import {
  lineNotify,
  lineNotifySucceeded,
} from "@/store/slices/lineNotifySlice";
import { useSelector } from "react-redux";
import { FiLoader } from "react-icons/fi";

interface ModalProps {
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;
}

interface FormData {
  name: string;
  telephone: string;
  message: string;
}
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  telephone: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
  message: yup.string().required("Message is required"),
});

const ModalContact: React.FC<ModalProps> = ({ showModal, setShowModal }) => {
  const { status } = useSelector((state: RootState) => state.lineNotify);
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    dispatch(lineNotify(data));
    setTimeout(() => {
      setShowModal(false);
      dispatch(lineNotifySucceeded());
    }, 3000);
  };

  useEffect(() => {
    if (!showModal) {
      reset();
    }
  }, [showModal, reset]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
      <div className="bg-white rounded-lg shadow-lg max-w-sm w-full p-5">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold  bg-clip-text text-transparent bg-gradient-to-r from-violet-700 to-red-500">
            Contact Me
          </h2>
          <button
            onClick={() => setShowModal(false)}
            className="text-gray-500 text-xl hover:text-red-500 "
          >
            &times;
          </button>
        </div>
        <div className="flex flex-row justify-between items-between mt-1">
          <p className="pl-3 text-md font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500  to-green-700">
            <span className="mr-1 bg-red-600 text-white font-bold rounded-sm pr-1 pl-1">
              Tel{" "}
            </span>{" "}
            083-009-9743 {" "}
            <span className="mr-1 ml-10 bg-green-600 text-white font-bold rounded-sm pr-1 pl-1">
            Line
            </span>{" "}
            s_er_t{" "}
          </p>
        </div>
        
        {/* <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <label className="block mb-2 text-sm">Name</label>
            <input
              type="text"
              className="border-gray-300 border rounded-md w-full px-3 py-2"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm">Telephone</label>
            <input
              type="text"
              className="border-gray-300 border rounded-md w-full px-3 py-2"
              {...register("telephone", { required: true })}
            />
            {errors.telephone && (
              <p className="text-red-600">{errors.telephone.message}</p>
            )}
          </div>

          <div className="mt-4">
            <label className="block mb-2 text-sm">Message</label>
            <textarea
              className="border-gray-300 border rounded-md w-full px-3 py-2"
              rows={4}
              {...register("message", { required: true })}
            />
            {errors.message && (
              <p className="text-red-600">{errors.message.message}</p>
            )}
          </div>

          <div className="mt-6 text-right">
            <button
              type="submit"
              className={
                status !== "idle"
                  ? "hidden"
                  : "bg-gradient-to-r from-red-700 to-violet-400 text-white hover:bg-gradient-to-r hover:from-red-400 hover:to-violet-700 px-4 py-2 rounded-md"
              }
            >
              Submit
            </button>
          </div>
          {status === "loading" && (
            <div className="flex justify-center items-center">
              <FiLoader className="animate-spin inline-block w-8 h-8" />
            </div>
          )}

          {status === "failed" && (
            <div className="flex justify-center items-center">
              <p className="text-red-600 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500  to-green-700">
                Can't send message.
              </p>
            </div>
          )}


{status === "succeeded" && (
            <div className="flex justify-center items-center">
              <p className="text-red-600 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-red-500  to-green-700">
                Send message succeeded.
              </p>
            </div>
          )}
        </form> */}

      </div>
    </div>
  );
};

export default ModalContact;
