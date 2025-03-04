// src/api.js or similar location
const API_BASE_URL = '/.netlify/functions';

export const subscriberService = {
  async subscribe(email) {
    try {
      const response = await fetch(`${API_BASE_URL}/subscribers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed');
      }
      
      return data;
    } catch (error) {
      console.error('Subscription error:', error);
      throw error;
    }
  }
};