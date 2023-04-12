import axios from 'axios';

const getUser = async() => {
  try {
    const response = await axios.get(`http://localhost:3000/users/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export function deleteUser(userId) {
  return axios.delete(`http://localhost:3000/users/${userId}`); // Gọi API để xóa người dùng
}
export function addUser(user) {
  return axios.post("http://localhost:3000/users", user)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};
export function updateUser(userId,userData) {
  return axios.put(`http://localhost:3000/users/${userId}`, userData)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export default getUser;
