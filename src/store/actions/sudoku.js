const SET_CELL = { type: "SET_CELL" }

export const createSetCellAction = (group, cell, value) => {
    return { ...SET_CELL, group, cell, value };
};