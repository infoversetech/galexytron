import React,{useEffect,useState} from "react";
import Logo from "./../../../assets/TronGalaxyPower.png";
import '../Dashboard.css'
import { connect } from "react-redux"

export default function Header(props) {
  const [contractBalance,setContractBalance]=useState(0)

  useEffect(() => {
    console.log("contract data in header is---->",props.contractData)
  }, [props.contractData])


  console.log("contract balance is----->",props.contractData)
  return (
    <nav class="navbar navbar-expand-lg navbar-light">
      <a class="navbar-logo" href="/" aria-label="Tron Galaxy Power">
        <img src={Logo} alt="" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item contract-bal ">
            Contract Balance
            <span className="ml-3">
              {props.contractData ? props.contractData.contractBalance : 0}
            </span>
          </li>

        </ul>

      </div>
    </nav>
  );
}
const mapStateToProps = (state) => {
  return {
    personalData: state.personalData,
    contractData: state.contractData,
    account: state.account,
  };
};

connect(mapStateToProps)(Header);