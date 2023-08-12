import React from "react";
import styled from "./Footer.module.css";
import CompanyLogo1 from "./logo/SCS-min.png";
import CompanyLogo2 from "./logo/pic/compLogo/1.png";
import CompanyLogo3 from "./logo/pic/compLogo/2.png";
import CompanyLogo4 from "./logo/pic/compLogo/3.png";
import CompanyLogo5 from "./logo/pic/compLogo/4.png";
import CompanyLogo6 from "./logo/pic/compLogo/2.png";

import permisionSign from '../Components/logo/logo.png'
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function Footer() {
  return (
    <div className={styled.FooterWrapper}>
      <div className={styled.FooterHeader}>
        <img src={CompanyLogo1} alt="NoImage" />
        <img src={CompanyLogo2}  alt="NoImage" />
        <img src={CompanyLogo3} alt="NoImage" />
        <img src={CompanyLogo4} alt="NoImage" />
        <img src={CompanyLogo5} style={{width:"6em"}}alt="NoImage" />
        <img src={CompanyLogo6} alt="NoImage" />
      </div>
      <div className={styled.FooterBody}>
        <div className={styled.col1}>
          <h5> درباره ما</h5>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>
        <div className={styled.col2}>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
          </p>
        </div>

          <ul>
            <li>
              <Link to="/Home">خانه</Link>
            </li>
            <li>
              <Link to="/Products">محصولات</Link>
            </li>
            <li>
              <Link to="/Projects">پروژه</Link>
            </li>
            <li>
              <Link to="/Partners">همکاران</Link>
            </li>
            <li>
              <Link to="/ContactUs">تماس با ما</Link>
            </li>
          </ul>
    
      </div>

      <div className={styled.Footerbottom}>
        <p>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز 
        </p>
        <img src={permisionSign} alt="" />

      </div>
    </div>
  );
}

export default Footer;
