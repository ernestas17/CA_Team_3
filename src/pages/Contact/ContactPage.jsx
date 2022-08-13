import React from 'react';
import Button from '../../components/Button/Button';
import FooterNav from '../../components/Footer/FooterNav';
import { StyledContactPage, StyledFooterImage } from './ContactPage.style';

const ContactPage = () => {
  return (
    <>
      <StyledContactPage>
        <h1>Get in touch with our experts</h1>
        <div className="form-address">
          <form action="">
            <label htmlFor="name"></label>
            <input type="text" placeholder="Your full Name" />

            <label htmlFor="email"></label>
            <input type="email" placeholder="Your Email" />

            <select name="service" id="service">
              <option value="" disabled selected hidder>
                Select service type
              </option>
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>

            <label htmlFor="text"></label>
            <input type="text" placeholder="Message" />

            <Button theme="primary" text={'Send message'} type="button" />
          </form>

          <div className="address">
            <div className="addressTextBox">
              <p className="body2">Address</p>
              <p className="title2">NH 234 Public Square San Francisco 65368</p>
            </div>
            <div className="addressTextBox">
              <p className="body2">Contact Details</p>
              <p className="title2">1800 265 24 52 </p>
              <p className="title2">Finsweet@gmail.com</p>
            </div>
            <div className="addressTextBox">
              <p className="body2">Opening Hours</p>
              <p className="title2">Monday to Friday 9:00 AM to 10:00 AM</p>
            </div>
          </div>
        </div>
        <img src={require('./images/map.png')} alt="" />
      </StyledContactPage>
      <StyledFooterImage src={require('./images/footerImage.png')} alt="" />
      <FooterNav />
    </>
  );
};

export default ContactPage;
