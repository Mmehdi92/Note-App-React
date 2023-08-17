import React from "react";

const date = new Date();
const fullYear = date.getUTCFullYear();
console.log(date);
function Footer() {
  return <footer> Copyright {fullYear}</footer>;
}

export default Footer;
