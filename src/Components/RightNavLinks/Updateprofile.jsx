import React from 'react';
import backgroundImage from '../../images/graphicfootball.jpg';

const styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
};
const Updateprofile = () => {
  return (
    <div style={styles}>
      This is update profile page
    </div>
  );
};
export default Updateprofile;