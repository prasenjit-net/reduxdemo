import { merge } from "lodash-es";
import React from "react";
import style from "../../styles/sudocu.module.scss";

const Cell = ({ num, openModal, setCellNumber, groupNum, data }) => {
  data = merge({}, data);
  const onCellClick = () => {
    if (openModal && !data.fixed) {
      openModal(9 * groupNum + num);
    } else if (setCellNumber) {
      setCellNumber(data.value);
    }
  };
  return (
    <div className={style.cell} onClick={onCellClick}>
      <span>{data.value}</span>
    </div>
  );
};

export default Cell;
