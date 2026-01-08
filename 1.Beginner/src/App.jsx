import { useEffect, useState } from 'react'
import './App.css'

// Components 
import Container from './Container'
import Product from './Product'


function App() {

  // useState : Hooks
  const [firstName, setFirstname] = useState('Cesur Alphan')
  const [names, setNames] = useState(["Cesur", "Alphan", "Melanocetus", "Test"])
  const [userInfo, setUserInfo] = useState({ username: "Melanocetus", password: "1234" })
  const [show, setShow] = useState(false);

  // !Önemli Not : Bir state'in değerini set metodunu kullanarak degistirdiginde component tekrardan render olur
  const [count, setCount] = useState(0);

  // Fonksiyon yazma 
  const handleChange = () => {
    setFirstname("Melanocetus")
  }

  const handleShow = () => {
    // React veya js böyle debug
    //debugger;
    setShow(!show)
  }

  const countClick = () => {
    setCount(count + 1)
  }

  // useEffect
  const [firstNames, setFirstNames] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    console.log("Her zaman çalışır")
  })

  useEffect(() => {
    console.log("Ilk render edildiginde calisir")
  }, [])


  useEffect(() => {
    console.log("Ilk render edildiginde ve firstNames state degiri degtiginde calisir")
  }, [firstNames])


  useEffect(() => {
    console.log("Ilk render edildiginde ve lastName state degiri degtiginde calisir")
  }, [lastName])

  return (
    <>
      <hr />
      <h1>useState : Hooks</h1>
      <p>Hoşgeldin {firstName}</p>
      <div><button onClick={handleChange}>Change</button></div>
      <br />
      {names.map((name, index) => (
        <div key={index}>{name}</div>
      ))}<br />

      {show ? <div>username:{userInfo.username} password:{userInfo.password}</div> : <div>********</div>}
      <div><button onClick={handleShow}>Show</button></div><br />

      <h1>{count}</h1>
      <button onClick={countClick}>Count</button>
      <hr />
      <br /><br />

      <hr />
      <h1>Components ve Property kulanim ornegi</h1>
      <Container>
        <Product brand="HP" productName="Elite Book 5412" price={20000} />
        <Product brand="Asus" productName="ROG sitrix" price={40000} />
      </Container>
      <hr />

      <h1>Use Effect</h1>
      <div><button onClick={() => setFirstNames("Cesuralphan")}>firstName Degistir</button></div>
      <div><button onClick={() => setLastName("Melanocetus")}>lastName Degistir</button></div>
    </>
  )

}

export default App
