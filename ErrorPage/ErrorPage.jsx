import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function ErrorPage() {
  const navigate = useNavigate()
  const goToHome = () => {
    navigate('/home')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
      <img
        src="https://cdn.dribbble.com/users/718859/screenshots/3267029/jisunpark_404-error.gif"
        alt="404 Error"
        style={{ maxWidth: '100%', height: 'auto', marginBottom: '20px' }}
      />
      <button onClick={goToHome} style={{background:"#ff5a00",borderRadius:"4px",border:"none",color:"white",padding:"15px"}}>Go to home</button>
    </div>
  )
}
