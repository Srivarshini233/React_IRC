import React from "react";
import '../Assets/CSS/Panel.css';
import { Link } from "react-router-dom";
function Panel() {
  return (
    <>
      <div>
        <div className="paneldb">
          <h2 className="panalheading">Welcome to TrendTrove🛍️ </h2>
          <p className="panalpara">Discover a wide range of products for all your needs.</p>
          <Link to = '/Product' className="btn">Explore Products</Link>
          </div>
        </div>
      </>
      )
}
      export default Panel;