import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch } from "react-redux";
import InputGroup from "react-bootstrap/InputGroup";
import {
  createClearAction,
  createDepositAction,
  createWithdrawAction,
} from "../store/actions";

const DepositWithdrawForm = () => {
  const [amount, setAmount] = useState(0);
  const dispatcher = useDispatch();
  const doDeposit = () => {
    dispatcher(createDepositAction(amount));
  };
  const doWithdraw = () => {
    dispatcher(createWithdrawAction(amount));
  };
  const doClear = () => {
    dispatcher(createClearAction());
  };
  return (
    <Form>
      <Form.Group controlId="amount">
        <Form.Label>Amount</Form.Label>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
            type="number"
            placeholder="Deposit/Withdraw Amount"
          />
          <InputGroup.Append>
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>
        <Form.Text className="text-muted">
          Enter the amount you want to deposit or withdraw
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="button" onClick={doDeposit}>
        Deposit
      </Button>
      <Button variant="warning" type="button" onClick={doWithdraw}>
        Withdraw
      </Button>
      <Button variant="danger" type="button" onClick={doClear}>
        Clear
      </Button>
    </Form>
  );
};

export default DepositWithdrawForm;
