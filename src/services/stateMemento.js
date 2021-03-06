import {generateGrid} from "../reducers/snapshot.helpers";

export const StateMemento = {
    setState: data => {
        localStorage.setItem('state', JSON.stringify(data));
    },

    getState: () => {
        const {seek, snapshots} = JSON.parse(localStorage.getItem('state')) || {};
        return {
            seek: seek || 0,
            snapshots: (snapshots && snapshots.length) ? snapshots : [generateGrid()],
        };
    }
};
