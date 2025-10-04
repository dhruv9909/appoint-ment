export const registerBusiness = async (data: any) => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/registration/register-business`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    return response.json();
  };

export const registerUser = async(data:any) =>{
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/registration/register-customer`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
