import axios from 'axios';

const getUser = async() => {
  try {
    const response = await axios.get(`http://localhost:3000/users/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export default getUser;