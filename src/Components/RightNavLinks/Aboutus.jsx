import React from 'react';
import backgroundImage from '../../images/aboutus.jpg';

const Styles = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  height: '100vh',
}
const Aboutus = () => {
  return (
    <div style={Styles}>
      <div style={{marginLeft:"20px",fontSize:"20px"}}>Introduction: A brief introduction to the Turf Booking Management System, highlighting its features and benefits.</div>
      <div style={{marginLeft:"20px"}}>Our Mission: A statement about the company's mission and values, explaining how the system contributes to these goals.</div>
      <div style={{marginLeft:"20px"}}>Our Team: Information about the team behind the system, including their backgrounds and expertise.</div>
      <div style={{marginLeft:"20px"}}>Testimonials: Quotes or reviews from satisfied customers, highlighting the benefits they have experienced using the system.</div>
      <div style={{marginLeft:"20px"}}>Partnerships: Details of any partnerships or collaborations that the company has with other businesses or organizations.</div>
      <div style={{marginLeft:"20px"}}>Awards and Recognition: Any awards or recognition that the company or the system has received, highlighting its quality and reliability.</div>
      <div style={{marginLeft:"20px"}}>Contact Us: Contact information for the company, including a phone number and email address, as well as a contact form for inquiries.</div>
      <div style={{marginLeft:"20px"}}>FAQs: A list of frequently asked questions about the system, including information about pricing, features, and support.</div>
      <div style={{marginLeft:"20px"}}>Privacy Policy: A statement outlining the company's privacy policy, explaining how personal data is collected, used, and protected.</div>
      <div style={{marginLeft:"20px"}}>Terms and Conditions: A clear and concise explanation of the terms and conditions that users must agree to when using the system.</div>
    </div>
  )
}

export default Aboutus
