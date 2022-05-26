import React from "react"
import { Link } from "react-router-dom"

const MyPortfolio = () => {
  return (
    <div className="text-center mt-12">
      <h2 className="text-5xl">Nur Uddin</h2>
      <h2 className="text-2xl">Chittagong, Bangladesh</h2>
      <h2 className="text-3xl">B.A(Hon's) in University of Rajshahi</h2>
      <p>List of Tecnologies or Skills</p>
      <ul>
        <li>1. HTML</li>
        <li>2. CSS</li>
        <li>3. CSS FRAMEWORK: BOOTSTRAP</li>
        <li>4. CSS FRAMEWORK: TAILWIND</li>
        <li>5. JAVASCRIPT</li>
        <li>6. JAVASCRIPT LIBRARY: REACT JS</li>
        <li>7. BACK END: NODE JS</li>
        <li>8. DATABASE: MONGO DB</li>
      </ul>
      <p className="text-2xl"> 3 website Link</p>
      <a href="https://internationalconventioncenter.netlify.app/">
        <u>1. Link 1</u>
      </a>
      <a href="https://mellifluous-malabi-59ce1d.netlify.app/">
        <u>2. Link 2</u>
      </a>
      <a href="https://marvelous-puffpuff-ffa790.netlify.app/">
        <u>3. Link 3</u>
      </a>
    </div>
  )
}

export default MyPortfolio
