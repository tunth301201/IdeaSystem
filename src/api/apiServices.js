import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `${localStorage.getItem("Authentication")}`
  },
}

localStorage.setItem('Authentication', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY0MzQ4Mzc5ZTg5OTg4N2UwNjNiNGQ1NSIsImVtYWlsIjoibmd1eWVudm9AZ21haWwuY29tIiwiZnVsbG5hbWUiOiJuZ3V5ZW52byIsImdlbmRlciI6Ik1hbGUiLCJpbWFnZSI6ImRlZmF1bHQuanBnIiwicGFzc3dvcmQiOiIkMmIkMTAkeHN3S1RjUi5ORXB1WVhwVk1JNTF1LjdGOGtUcGlBaWphYzdjbDFCejMyRmZPWE1wWlAvaVciLCJkZXBhcnRtZW50IjoiQSIsInBlcm1pc3Npb24iOiJRQU1hbmFnZXIiLCJjcmVhdGVkQXQiOiIyMDIzLTA0LTEwVDIxOjQ1OjI5LjMxNFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA0LTEwVDIxOjQ1OjI5LjMxNFoiLCJfX3YiOjB9LCJpYXQiOjE2ODE0NzU2OTYsImV4cCI6MTY4MTUxODg5Nn0.hUEORlh9ftNEr8I04QpyPjsGGS1DwhPPo2vssM-xkJE");
axios.defaults.headers.common['Authorization'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY0MzQ4Mzc5ZTg5OTg4N2UwNjNiNGQ1NSIsImVtYWlsIjoibmd1eWVudm9AZ21haWwuY29tIiwiZnVsbG5hbWUiOiJuZ3V5ZW52byIsImdlbmRlciI6Ik1hbGUiLCJpbWFnZSI6ImRlZmF1bHQuanBnIiwicGFzc3dvcmQiOiIkMmIkMTAkeHN3S1RjUi5ORXB1WVhwVk1JNTF1LjdGOGtUcGlBaWphYzdjbDFCejMyRmZPWE1wWlAvaVciLCJkZXBhcnRtZW50IjoiQSIsInBlcm1pc3Npb24iOiJRQU1hbmFnZXIiLCJjcmVhdGVkQXQiOiIyMDIzLTA0LTEwVDIxOjQ1OjI5LjMxNFoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA0LTEwVDIxOjQ1OjI5LjMxNFoiLCJfX3YiOjB9LCJpYXQiOjE2ODE0NzU2OTYsImV4cCI6MTY4MTUxODg5Nn0.hUEORlh9ftNEr8I04QpyPjsGGS1DwhPPo2vssM-xkJE";

const addTag = async (data) => {
  return await axios.post("http://localhost:8080/tags", data, config)
    .then(res => {
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}

const getAllTags = async () => {
  return await axios.get("http://localhost:8080/tags", config)
    .then(res => {
        return res?.data
    })
    .catch(err => {
        console.log(err)
    })
}

const updateTag = async (tagID, data) => {
  return await axios.put(`http://localhost:8080/tags/${tagID}`, data, config)
    .then(res => {
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}

const deleteTag = async (tagID) => {
  return await axios.delete(`http://localhost:8080/tags/${tagID}`, config)
    .then(res => {
        return res
    })
    .catch(err => {
        console.log(err)
    })
}

const getUsers = async () => {
  return await axios.get("http://localhost:8080/users", config)
    .then(res => {
        return res?.data
    })
    .catch(err => {
        console.log(err)
    })
}

const addUser = async (data) => {
  return await axios.post("http://localhost:8080/users", data, config)
    .then(res => {
      return res.data;
    })
    .catch(err  => {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.data.message);
      }
    });
}

const updateUser = async (id, data) => {
  return await axios.put(`http://localhost:8080/users/${id}`, data, config)
  .then(res => {
    return res.data;
  })
  .catch(error => {
    console.log(error);
  });
}

const deleteUser = async (id) => {
  return await axios.delete(`http://localhost:8080/users/${id}`, config)
    .then(res => {
      return res
    })
    .catch(err => {
      console.log(err)
    })
}

const getAllIdeas = async () => {
  return await axios.get("http://localhost:8080/ideas", config)
    .then(res => {
        return res.data
    })
    .catch(err => {
        console.log(err)
    })
}

const deleteIdea = async (id) => {
  return await axios.delete(`http://localhost:8080/ideas/${id}`, config)
    .then(res => {
        return res
    })
    .catch(err => {
        console.log(err)
    })
}



export {
    getAllTags,
    addTag,
    deleteTag,
    updateTag,
    addUser,
    getUsers,
    deleteUser,
    updateUser,
    getAllIdeas,
    deleteIdea
}