import { Link } from 'react-router-dom';
import { Tab } from '@mui/material';
const Sidestyles = {
  backgroundColor: '#0606d6',
  fontWeight: "bold",
  color:"black", 
  height: '60px',
  marginTop:'10px',
  width:'45mm'
};
const  Profile= ()=>{
  return (
    <div>
      <div>
        {/*<Link to="/myprofile">
          <button>Profile</button>
        </Link>*/}
        <Tab style={Sidestyles} LinkComponent={Link} to="/myprofile" label=" My Profile " />
      </div>
      <div>
        <Tab style={Sidestyles} LinkComponent={Link} to="/updateprofile" label=" Update Profile " />
      </div>
      <div>
        <Tab style={Sidestyles} LinkComponent={Link} to="/support" label=" Support " />
      </div>
      <div>
        <Tab style={Sidestyles} LinkComponent={Link} to="/aboutus" label=" About Us Profile " />
      </div>
    </div>
  );
}
export default Profile;