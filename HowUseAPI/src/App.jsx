import axios from 'axios';
import { useEffect } from 'react';
import './App.css';

const BASE_URL = "http://localhost:3005";

function App() {

  // GET
  const getAllUsers = async () => {
    const response = await axios.get(`${BASE_URL}/users`)
    console.log(response.data)
  }

  // GET(id)
  const getUsersById = async (userId) => {
    const response = await axios.get(`${BASE_URL}/users/${userId}`)
    console.log(response.data)
  }

  // POST
  const createUser = async (newUser) => {
    const response = await axios.post(`${BASE_URL}/users`, newUser)
    console.log(response.status)
  }

  // PUT
  const updateUser = async (userId, updateUser) => {
    const response = await axios.put(`${BASE_URL}/users/${userId}`, updateUser)
    console.log(response.status)
  }

  // DELETE
  const deleteUser = async (userId) => {
    const response = await axios.delete(`${BASE_URL}/users/${userId}`)
    console.log(response.status)
  }

  useEffect(() => {
    // GET
    getAllUsers()

    // GET(1)
    getUsersById(1)

    // POST
    const newUser = {
      "userName": "hasan",
      "password": "1234"
    }
    createUser(newUser)

    // PUT
    const changeUser = {
      "userName": "updateUser",
      "password": "1234"
    }
    updateUser(3, changeUser)
    getAllUsers() // Degisikligi gormek icin

    // DELETE
    deleteUser(4)
    getAllUsers() // Degisikligi gormek icin
  }, [])

  return (
    <>
    </>
  )
}

export default App
