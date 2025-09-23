export const registerBusiness = async (data: any) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register-business`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

export const registerUser = async(data:any) =>{
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/register-customer`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}

export const login = async(data:any) =>{
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/login`, {
    method: 'POST',
    headers: {
      'Application-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
    }