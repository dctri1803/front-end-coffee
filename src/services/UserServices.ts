import axios from 'axios';

export const registerUser = async (data: any) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/users/register`, data);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Register failed');
  }
};

export const loginUser = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/users/login`, { email, password });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Login failed');
  }
};

export const sendOtp = async (email: string) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/auth/forgot-password`, { email });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to send OTP');
  }
};

export const resetPassword = async (email: string, token: string, newPassword: string) => {
  try {
    const response = await axios.post(`${process.env.REACT_APP_URL_BACKEND}/auth/reset-password`, {
      email,
      token,
      newPassword
    });
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to reset password');
  }
};

