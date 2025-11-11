export const registerBusiness = async (data: any) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
};

export const registerUser = async (data: any) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/customers/register`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export const fetchBusinesses = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/businesses`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.json();
}
