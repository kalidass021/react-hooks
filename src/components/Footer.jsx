import { useContext } from "react"
import { AppContext } from "../context/AppContext"

const Footer = () => {
    const {phone, name} = useContext(AppContext);
  return (
    <div>
        <h1>Footer</h1>
        <h3>Name: {name}</h3>
        <h3>Phone: {phone}</h3>
    </div>
  )
}

export default Footer