import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const registerUser = async (data: any) => {
  const response = await axios.post(`${API_URL}/api/auth/register`, data, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};

export const fetchBusinesses = async () => {
  const response = await axios.get(`${API_URL}/api/businesses`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
};
export const fetchProfile = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/auth/profile`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return response.data();
  } catch (error) {
    throw error;
  }
}