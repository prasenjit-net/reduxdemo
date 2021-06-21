import React from "react";
import Cell from "./Cell";
import style from "../../styles/sudocu.module.scss";
import { merge } from "lodash";

const Group = ({ openModal, setCellNumber, num, data }) => {
  const cellData = merge({}, data);
  return (
    <div className={style.group}>
      {["c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9"].map((c, n) => (
        <Cell
          key={n}
          groupNum={num}
          data={cellData[c]}
          num={n}
          openModal={openModal}
          setCellNumber={setCellNumber}
        />
      ))}
    </div>
  );
};

export default Group;
