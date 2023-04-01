// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import backgroundImage from '../../images/cr7.png';
// //import TextField from '@mui/material/TextField';
// import { Box } from '@mui/system';

// const styles = {
//   backgroundImage: `url(${backgroundImage})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   height: '100vh',
// };

// const Myprofile = () => {
//   let token = localStorage.getItem("token");
//   const [profile,setProfile] = useState();
//   const sendRequest = async () => {
//     const res = await axios
//       .get(`http://localhost:5000/user`, {
//         headers: { authorization: `Bearer ${token}` },
//       })
//       .catch((err) => console.log(err));
//     const data = await res.data;
//     return data;
//   };
//   useEffect(() => {
//     sendRequest().then((data) => setProfile(data.user));
//   }, []);
//   return (
//     <div>
//       <div style={styles}>
//         <div>
//           <h1 style={{ color: 'white' }}>MY Profile</h1>
//         </div>
//           <h1>{profile.name}</h1>
//       </div>
//     </div>
//   );
// };
// export default Myprofile;

import React, { useEffect, useState } from "react";
import axios from "axios";
import backgroundImage from '../../images/cr7.png';

const Styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
}

const Myprofile = () => {
  let token = localStorage.getItem("token");
  const [profile, setProfile] = useState(); //usestate contains data which is received from request which will be stored in todaybooks with the help of settodaybooks

  const sendRequest = async () => {
    console.log("sendRequest");
    const res = await axios
      .get(`http://localhost:5000/user`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .catch((err) => console.log(err));
    const data = await res.data;
    return data;
  };
  useEffect(() => {
    console.log("useEffect");
    sendRequest().then((data) => setProfile(data.user));
  }, []);
  return (
    <>
      <div style={Styles}>
        <div>
          <h1 style={{ color: "white", textAlign: "center", paddingTop:"20px" }}>MY Profile</h1>
        </div>
        <div>
          <h1>Name</h1>
          <input type="text" value={profile?.name} />
        </div>
        <div>
          <input type="text" value={profile?.age} />
        </div>
        <div>
          <h1>Email</h1>
          <input type="text" value={profile?.phone} />
        </div>
        <div>
        <input type="text" value={profile?.email} />
        </div>
      </div>
    </>
  );
};
export default Myprofile;
