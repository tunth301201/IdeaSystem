import axios from 'axios';
//localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7InN1YiI6IjY0MzZhOGYwYTlkY2JmOTFjMmU2NzI3ZiIsImVtYWlsIjoiem9jYWJ1bGFwb0BnbWFpbC5jb20iLCJwZXJtaXNzaW9uIjoiUUFNYW5hZ2VyIn0sImlhdCI6MTY4MTM3MjA5NiwiZXhwIjoxNjgxNDE1Mjk2fQ.fb_h6Dyltn_k5dtLgnR_Ywkqzrt29v8lsLyIt-Dgs84');
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    console.log(token);
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
const getUser = async() => {
  try {
    const response = await axios.get(`http://localhost:8080/users/`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export function deleteUser(userId) {
  return axios.delete(`http://localhost:8080/users/${userId}`);
}
export function addUser(user) {
  return axios.post("http://localhost:8080/users", user)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};
export function updateUser(userId,userData) {
  return axios.put(`http://localhost:8080/users/${userId}`, userData)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
    });
};

export default getUser;
