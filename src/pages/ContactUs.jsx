import React from "react";
import NavBar from "../Components/NavBar";
import Footer from "../Components/Footer";
import styled from "./ContactUs.module.css";
import map from '../Components/logo/map.jpg'

export default function ContactUs() {
  return (
    <div>
      <NavBar />
      <div className={styled.ContactUsAll}>

      <div className={styled.ContactUs}>
        <h4>اطلاعات تماس</h4>
        <p>تلفن : 02122212204</p>
        <p>تلفن : 09128982040</p>
        <p>آدرس دفتر مرکزی : شریعتی - تقاطع صدر - خیابان حسنی </p>
        <br/>
        <h5>شعبات دیگر</h5>
        <p>شعبه مرکز شهر :خیابان انقلاب - کوچه فهمیده</p>
        <p>تلفن : 02122212204</p>
        <p>تلفن : 09128982040</p>
        <p>شعبه مرکز شهر :خیابان فرهانی - کوچه فهمیده</p>
        <p>تلفن : 02122212204</p>
        <p>تلفن : 09128982040</p>
      </div>
      <div className={styled.map}>

      <img src={map} alt="" />
      </div>
      </div>
      <Footer />
    </div>
  );
}
