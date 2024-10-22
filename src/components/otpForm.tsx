"use client";

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

type FormData = {
  otp: string;
  phone: string;
};

export default function OTPForm() {
  const [otpSent, setOtpSent] = useState(false);
  const [message, setMessage] = useState('');
  const { register, handleSubmit, formState: { errors }, setValue } = useForm<FormData>();

  // Handle phone number submission to send OTP
  const onSendOtp = async (data: { phone: string }) => {
    try {
      const response = await axios.post('/api/send-otp', { phone: data.phone });
      if (response.data.success) {
        setOtpSent(true);
        setMessage('OTP sent to your phone.');
      } else {
        setMessage('Failed to send OTP.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred. Please try again.');
    }
  };

  // Handle OTP verification
  const onVerifyOtp = async (data: FormData) => {
    try {
      const response = await axios.post('/api/verify-otp', data); // Create verify-otp API
      if (response.data.success) {
        setMessage('OTP verified successfully.');
      } else {
        setMessage('Invalid OTP. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      {!otpSent ? (
        <form onSubmit={handleSubmit(onSendOtp)}>
          <div>
            <label>Phone Number</label>
            <input
              {...register('phone', { required: 'Phone number is required' })}
              type="text"
              placeholder="+1234567890"
              className="border rounded p-2"
            />
            {errors.phone && <p className="text-red-600">{errors.phone.message}</p>}
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Send OTP
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onVerifyOtp)}>
          <div>
            <label>OTP</label>
            <input
              {...register('otp', { required: 'OTP is required' })}
              type="text"
              className="border rounded p-2"
            />
            {errors.otp && <p className="text-red-600">{errors.otp.message}</p>}
          </div>
          <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
            Verify OTP
          </button>
        </form>
      )}

      {message && <p>{message}</p>}
    </div>
  );
}