import axios from 'axios';
const BASE_URL = `${process.env.REACT_APP_URL_BACKEND}/blogs`;

export const getAllBlogs = async (): Promise<{data:any[]}> => {
    try {
      const response = await axios.get(BASE_URL);
      return response.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Failed to fetch blogs');
    }
};

export const getBlog = async (id: number): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch product');
  }
};

