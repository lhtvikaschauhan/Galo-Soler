import React from "react";
import gLogo from "./img/galo-logo.png";

export default function Menu() {
  return (
    <div>
      <div class="head">
        <h1>Solar News</h1>
      </div>

      <header>
        <div className="logo">
          <img src={gLogo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="https://galosolar.com/">Latest Posts</a>
            </li>
            <li>
              <a href="https://galosolar.com/product-category/solar-inverters-charge-controllers/">
                Featured/Famous Posts
              </a>
            </li>
            <li>
              <a href="https://galosolar.com/product-category/solar-panels/">
                Trending Posts
              </a>
            </li>
            <li>
              <a href="https://galosolar.com/wp-content/uploads/2022/08/Galo-Energy-Company-Profile_.pdf">
                Tags
              </a>
            </li>
            <li>
              <a href="https://galosolar.com/about-us/">About Us</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}
