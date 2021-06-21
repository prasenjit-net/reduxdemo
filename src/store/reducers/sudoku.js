import { merge } from "lodash";

const initState = {
    solved: false, groups: {
        g1: {
            c1: { value: 1, fixed: true },
            c2: { value: 3, fixed: true },
            c8: { value: 6, fixed: true }
        },
        g8: {
            c1: { value: 1, fixed: true },
            c2: { value: 3, fixed: true },
            c8: { value: 6, fixed: true }
        },
        g4: {
            c1: { value: 1, fixed: true },
            c2: { value: 3, fixed: true },
            c8: { value: 6, fixed: true }
        },
    }
};

export const sudokuReducer = (state = initState, action) => {
    switch (action.type) {
        case "SET_CELL":
            console.log("Processing SET_CELL");
            if (action.group > 0 && action.cell > 0) {
                let setValue = {
                    groups: {
                        ["g" + action.group]: {
                            ["c" + action.cell]: {
                                value: action.value,
                                fixed: false
                            }
                        }
                    }
                };
                console.log("Merging", setValue);

                return merge(state, setValue);
            } else {
                return state;
            }
        default:
            return state;
    }
};