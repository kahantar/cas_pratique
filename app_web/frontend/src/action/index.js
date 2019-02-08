import axios from 'axios';
const api = "http://localhost:8080/api/";

export const loadInfo = (state) => {
	return (dispatch) => {
        const data = JSON.stringify({...state});
        axios.post(`${api}getAlert`, data,{
            headers: { 'content-type': 'application/json'}
        }).then((res) => {
          dispatch({type: "ALERT", payload: res.data[0]});
          dispatch({type: "CUSTOMER", payload: res.data[1]});
        })
    }
}

