import React, { useState } from "react";
import Group from "./Group";
import style from "../../styles/sudocu.module.scss";
import Modal from "react-bootstrap/Modal";
import NumberMenu from "./NumberMenu";

const Board = () => {
  const [modal, setModal] = useState(false);
  const [selectedCell, setSelectedCell] = useState(0);
  const closeModal = () => {
    setModal(false);
  };
  const openModal = (n) => {
    setSelectedCell(n);
    setModal(true);
  };
  const setCellNumber = (value) => {
    setModal(false);
    console.log("Cell number for " + selectedCell + " is " + value);
  };
  return (
    <>
      <div className={style.board}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
          <Group key={n} number={n} openModal={openModal} />
        ))}
      </div>
      <Modal show={modal} onHide={closeModal}>
        <Modal.Body>
          <NumberMenu setCellNumber={setCellNumber} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Board;
