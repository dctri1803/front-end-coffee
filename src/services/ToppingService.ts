import axios from 'axios';
const BASE_URL = `${process.env.REACT_APP_URL_BACKEND}/toppings`;

export const getAllToppings = async (): Promise<any[]> => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch blogs');
    }
  };