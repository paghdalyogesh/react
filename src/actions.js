
import Api from "./api"

export const increment = () => {
    return {
        type: "INCREMENT"
    }
}

export const fetchData = () => {

    return (dispatch) => {
        return Api.getCall("/test.json")
            .then(response => response.json())
            .then(json => dispatch({ type: "FetchData", data: json }))
            .catch(err => dispatch({ type: "ERROR", msg: "Unable to fetch data" }))
    }

}