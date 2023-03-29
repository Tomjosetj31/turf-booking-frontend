import { Link } from 'react-router-dom';

const  Profile= ()=>{
  return (
    <div>
      <Link to="/myprofile">
        <button>Profile</button>
      </Link>
    </div>
  );
}

export default Profile;

