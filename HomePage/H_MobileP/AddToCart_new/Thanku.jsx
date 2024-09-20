import React, { useState, useEffect } from 'react';

export default function Thanku() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 7000);

  }, []);

  return (
    <div className="loader-container" style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '70vh',
      flexDirection: 'column'
    }}>
      {loading ? (
        <div className="loader">
          <img src="https://cdn.dribbble.com/users/447957/screenshots/6899626/payment-animation.gif" alt="Loading..." style={{
            height: '400px',
            width: '400px'
          }} />
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <img src="https://cdn-icons-png.flaticon.com/512/5709/5709755.png" alt="Success" style={{
            height: '100px',
            width: '100px'
          }} />
          <h2>Payment Successful!</h2>
        </div>
      )}
    </div>
  );
}
