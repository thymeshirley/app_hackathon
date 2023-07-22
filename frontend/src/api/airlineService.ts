import axios from 'axios';

const airlineService = {
  createUser: async (user: any) => {
    try {
      const response = await axios.post('http://localhost:5000/api/createUser', user);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  updateAirlineStatus: async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/updateAirlineStatus');
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export default airlineService;