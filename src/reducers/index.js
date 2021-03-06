import {combineReducers} from "redux";
import {snapshotsReducer} from "./snapshots.reducer";
import {generateGrid, updateGrid} from "./snapshot.helpers";
import {seekReducer} from "./seek.reducer";

export const reducers = combineReducers({
    snapshots: snapshotsReducer(updateGrid, generateGrid),
    seek: seekReducer,
});
