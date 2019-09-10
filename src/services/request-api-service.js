import TokenService from './token-service';
import config from '../config'



const RequestApiService = {
    getAllRequests() {
        return fetch(`${config.API_ENDPOINT}/api/requests`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(responseJson => {

                return responseJson
            })
            .then(requests => {

                return requests;


            })

    },
    getRequest(requestsId) {
        return fetch(`${config.API_ENDPOINT}/api/requests/${requestsId}`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(responseJson => {

                return responseJson
            })
            .then(request => {

                return request
            })

    }
}
export default RequestApiService