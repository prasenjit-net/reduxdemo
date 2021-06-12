import React from "react";
import Card from "react-bootstrap/Card";
import DepositWithdrawForm from "./DepositWithdrawForm";
import { useSelector } from "react-redux";

const Home = () => {
  const banking = useSelector((state) => {
    return state.banking;
  });

  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>Deposit or Withdraw</Card.Title>
          <h2>
            Account Balance: <span>${banking.balance}</span>
          </h2>
          <DepositWithdrawForm />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
