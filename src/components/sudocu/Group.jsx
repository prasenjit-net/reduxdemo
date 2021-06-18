import React from "react";
import Cell from "./Cell";
import style from "../../styles/sudocu.module.scss";

const Group = ({ openModal, setCellNumber }) => {
  return (
    <div className={style.group}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => (
        <Cell
          key={n}
          num={n}
          openModal={openModal}
          setCellNumber={setCellNumber}
        />
      ))}
    </div>
  );
};

export default Group;
