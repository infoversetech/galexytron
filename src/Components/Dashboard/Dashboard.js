import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import Right from './Sections/Right';
import Left from './Sections/Left';
import Table from './Sections/Table';
import Header from './Sections/Header';

import { connect } from 'react-redux';
import { Container, Row, Col } from 'reactstrap';

const Dashboard = (props) => {
    const [contract, setContract] = useState();
    const [poolsPrice, setPoolsPrice] = useState([]);
    const [personalData, setPersonalData] = useState();

    console.log("props", props)
    useEffect(() => {
        setContract(contract);
        dollars();

    }, [props.contract])


    const dollars = async () => {
        if (!props.contract || !props.account) {
            alert("contract not loaded");
            return;
        }
        let dollars = (await props.contract.methods.dollars().call()).toNumber() / 10 ** 6;
        console.log("dollar", dollars);
        let poolPrice = [];
        for (let i = 0; i < 20; i++) {
            let res = (await props.contract.poolsPrice(i).call()).toNumber();
            poolPrice[i] = (res);
        }
        setPoolsPrice(poolPrice);
        console.log("pool price", poolPrice)
    }

    const upgradePool = async () => {

        if (!props.personalData) {
            alert("contract not loaded");
            return;
        }

        let currPool = props.personalData.currPool;

        await props.contract.methods.buyPool().send({ from: props.account, callValue: poolsPrice[currPool - 1] })

    }

    const enter = async () => {
        if (!props.contract) {
            alert("contract not loaded");
            return;
        }

        if (props.personalData.isExist) {
            alert("user already exists");
            return;
        }
        await props.contract.methods.enterSystem("TYPGbv47eFGBCDvjrPZNgXs3JfrqPMTWS9").send({ from: props.account, callValue: poolsPrice[0] })

    }

    return (
        <div className="dashboard">
            {/* <TopNav /> */}
            <Header />

const Dashboard = () => {
    return (
        <div className="dashboard">
            {/* <TopNav /> */}
            <Header/>

            <div className="row flex-wrap-reverse">
                <div className="col-lg-8">
                    <Left />
                </div>
                <div className="col-lg-4">

                    <Right />
                </div>
            </div>
            <Row>
                <Col xs="12" sm="12" md={{ size: 6, offset: 3 }} lg="12">
                    <button className="btn more-btn" onClick={() => {
                        upgradePool();
                    }}>Upgrade Pool</button>
                </Col>
            </Row>
            <Row>
                <Col xs="12" sm="12" md={{ size: 6, offset: 3 }} lg="12">
                    <button className="btn more-btn" onClick={() => {
                        enter();
                    }}> Enter</button>
                </Col>
            </Row>
            <div className="row ">
                <div className="col-lg-12">
                    <Table />
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        personalData: state.personalData,
        contract: state.contract,
        account: state.account
    };
};

export default connect(mapStateToProps)(Dashboard);