import axios from "axios";

import { GET_LEADS, DELETE_LEAD } from "./types";

//GET LEADS
export const getLeads = () => (dispatch) => {
    axios
        .get("/api/leads/")
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: GET_LEADS,
                payload: res.data,
            });
        })
        .catch((err) => console.log(err));
};

// DELETE LEAD
export const deleteLead = (id) => (dispatch) => {
    axios
        .delete(`/api/leads/${id}/`)
        .then((res) => {
            console.log(res.data);
            dispatch({
                type: DELETE_LEAD,
                payload: id,
            });
        })
        .catch((err) => console.log(err));
};
