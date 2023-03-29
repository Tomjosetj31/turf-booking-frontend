import React from 'react'
import backgroundImage from '../../images/Support.jpg';

const styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
};

const Support = () => {
  return (
    <div style={styles}>
      This is support page
    </div>
  )
}
export default Support