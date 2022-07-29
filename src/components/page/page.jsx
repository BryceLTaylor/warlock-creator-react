import React from "react";
import Header from "../header/Header.jsx";
import Creator from '../creator/Creator.js';
import './page.css';

const Page = (props) => (
  <div
    className = 'page'
  >
    <Header />
    <Creator />
  </div>
)

export default Page;
