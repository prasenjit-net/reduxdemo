import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Group from "./Group";
import style from "../../styles/sudocu.module.scss";
import Modal from "react-bootstrap/Modal";
import NumberMenu from "./NumberMenu";
import { createSetCellAction } from "../../store/actions/sudoku";

const Board = () => {
  const sudoku = useSelector((state) => state.sudoku);
  const dispatch = useDispatch();
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
    const group = ~~(selectedCell / 9);
    const cell = selectedCell % 9;
    dispatch(createSetCellAction(group + 1, cell + 1, value));
  };
  return (
    <>
      <div className={style.board}>
        {["g1", "g2", "g3", "g4", "g5", "g6", "g7", "g8", "g9"].map((g, n) => (
          <Group
            key={n}
            num={n}
            name={g}
            data={sudoku.groups[g]}
            openModal={openModal}
          />
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
