import React from "react";
import Cell from "./Cell";
import style from "../../styles/sudocu.module.scss";

const NumberMenu = ({ setCellNumber }) => {
  const cellData = {
    c1: { value: 1, fixed: true },
    c2: { value: 2, fixed: true },
    c3: { value: 3, fixed: true },
    c4: { value: 4, fixed: true },
    c5: { value: 5, fixed: true },
    c6: { value: 6, fixed: true },
    c7: { value: 7, fixed: true },
    c8: { value: 8, fixed: true },
    c9: { value: 9, fixed: true },
  };
  return (
    <div className={style.group}>
      {["c1", "c9", "c3", "c4", "c5", "c6", "c7", "c8", "c9"].map((c, n) => (
        <Cell
          key={n}
          num={n}
          name={c}
          data={cellData[c]}
          setCellNumber={setCellNumber}
        />
      ))}
    </div>
  );
};

export default NumberMenu;
