import React from "react";
import style from "../../styles/sudocu.module.scss";

const Cell = ({ num, openModal, setCellNumber }) => {
  const onCellClick = () => {
    if (openModal) {
      openModal(num);
    } else if (setCellNumber) {
      setCellNumber(1);
    }
  };
  return (
    <div className={style.cell} onClick={onCellClick}>
      <span>{num}</span>
    </div>
  );
};

export default Cell;
