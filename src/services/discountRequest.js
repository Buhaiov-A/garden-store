export const fetchGetDiscount = async phone => {
  try {
    const response = await fetch(
      'https://garden-store-backend.onrender.com/sale/send',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(phone),
      }
    );
    if (!response.ok) {
      throw new Error(`An error has occured! Try again`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    return error.message;
  }
};
