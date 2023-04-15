import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `${localStorage.getItem("Authentication")}`
  },
}

localStorage.setItem('Authentication', "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY0M2FlZjA3Yzk2ZTBiY2NlZDhiZTYyNCIsImVtYWlsIjoibmd1eWVudm83MDlAZ21haWwuY29tIiwiZnVsbG5hbWUiOiJWbyBDaGkgTmd1eWVuIiwiZ2VuZGVyIjoiTWFsZSIsImltYWdlIjoiZGVmYXVsdC5wbmciLCJwYXNzd29yZCI6IiQyYiQxMCRib3gzM2FkcERYS2lnVk1Md2Uwc0ZleHY3UDE4M2pNakJkU0cuQ0RuRE9kRk9PM21WVnlzSyIsImRlcGFydG1lbnQiOiJDIiwicGVybWlzc2lvbiI6IlFBTWFuYWdlciIsImNyZWF0ZWRBdCI6IjIwMjMtMDQtMTVUMTg6Mzc6NTkuNzcwWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDQtMTVUMTg6Mzc6NTkuNzcwWiIsIl9fdiI6MH0sImlhdCI6MTY4MTU4MzkyNywiZXhwIjoxNjgxNjI3MTI3fQ.eLRbXz71JYst9zUqhTiIQH-nEz9W9v2OerRIMe-FMNg");
axios.defaults.headers.common['Authorization'] = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjY0M2FlZjA3Yzk2ZTBiY2NlZDhiZTYyNCIsImVtYWlsIjoibmd1eWVudm83MDlAZ21haWwuY29tIiwiZnVsbG5hbWUiOiJWbyBDaGkgTmd1eWVuIiwiZ2VuZGVyIjoiTWFsZSIsImltYWdlIjoiZGVmYXVsdC5wbmciLCJwYXNzd29yZCI6IiQyYiQxMCRib3gzM2FkcERYS2lnVk1Md2Uwc0ZleHY3UDE4M2pNakJkU0cuQ0RuRE9kRk9PM21WVnlzSyIsImRlcGFydG1lbnQiOiJDIiwicGVybWlzc2lvbiI6IlFBTWFuYWdlciIsImNyZWF0ZWRBdCI6IjIwMjMtMDQtMTVUMTg6Mzc6NTkuNzcwWiIsInVwZGF0ZWRBdCI6IjIwMjMtMDQtMTVUMTg6Mzc6NTkuNzcwWiIsIl9fdiI6MH0sImlhdCI6MTY4MTU4MzkyNywiZXhwIjoxNjgxNjI3MTI3fQ.eLRbXz71JYst9zUqhTiIQH-nEz9W9v2OerRIMe-FMNg";

const addTag = async (data) => {
  return await axios.post("http://localhost:8080/tags", data, config)
    .then(res => {
        return res.data
    })
    .catch(err => {
      if (err.response) {
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.data.message);
      }
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

const getIdea = async (id) => {
  return await axios.get(`http://localhost:8080/ideas/${id}`, config)
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
    deleteIdea,
    getIdea
}