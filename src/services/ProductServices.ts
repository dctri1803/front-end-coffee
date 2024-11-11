import axios from 'axios';
const BASE_URL = `${process.env.REACT_APP_URL_BACKEND}/products`;

// export const createProduct = async (data: CreateProductsDto, files: File[]): Promise<any> => {
//   const formData = new FormData();
//   formData.append('product', JSON.stringify(data));
//   files.forEach((file) => formData.append('files', file));

//   try {
//     const response = await axios.post(BASE_URL, formData, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });
//     return response.data;
//   } catch (error: any) {
//     throw new Error(error.response?.data?.message || 'Failed to create product');
//   }
// };

// export const updateProduct = async (productId: number, data: CreateProductsDto, files?: File[]): Promise<any> => {
//   const formData = new FormData();
//   formData.append('product', JSON.stringify(data));
//   if (files) {
//     files.forEach((file) => formData.append('files', file));
//   }

//   try {
//     const response = await axios.put(`${BASE_URL}/${productId}`, formData, {
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });
//     return response.data;
//   } catch (error: any) {
//     throw new Error(error.response?.data?.message || 'Failed to update product');
//   }
// };

export const getProduct = async (id: number): Promise<any> => {
  try {
    const response = await axios.get(`${BASE_URL}/${id}`);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch product');
  }
};

export const getAllProducts = async (): Promise<{data: any[]}> => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to fetch products');
  }
};

export const deleteProduct = async (id: number): Promise<string> => {
  try {
    await axios.delete(`${BASE_URL}/${id}`);
    return `Delete product with ${id} successfully`;
  } catch (error: any) {
    throw new Error(error.response?.data?.message || 'Failed to delete product');
  }
};
