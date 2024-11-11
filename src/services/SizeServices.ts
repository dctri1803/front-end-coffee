import axios from 'axios';
const BASE_URL = `${process.env.REACT_APP_URL_BACKEND}/sizes`;

export const getAllSizes = async (): Promise<any[]> => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch blogs');
    }
  };