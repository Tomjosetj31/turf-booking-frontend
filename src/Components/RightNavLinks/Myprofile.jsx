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
      <div>
        <div>
          <div>
            <h1 style={{ color: "white" }}>MY Profile</h1>
          </div>
          <h1 onClick={sendRequest}>{profile?.name}</h1>
        </div>
      </div>
    </>
  );
};
export default Myprofile;
