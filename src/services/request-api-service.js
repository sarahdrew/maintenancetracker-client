import TokenService from './token-service';
import config from '../config'
import { request } from 'https';


const RequestApiService = {
    getAllRequests() {
        return fetch(`${config.API_ENDPOINT}/api/requests`)
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(responseJson => {
                console.log(`responseJson to put on the page: `, responseJson)
                return responseJson
            })
            .then(requests => {

                return request;


            })

    },
    getRequest(requestId) {
        // console.log(`request-api-srevice requestId: `, requestId)
        return fetch(`${config.API_ENDPOINT}/api/requests/${requestId}`, {
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
                // console.log(`getRequest(requestId) responseJson`, responseJson)
                return responseJson
            })
            .then(request => {
                console.log(`single request as responseJson: `, request)
                return request
            })

    }
}
export default RequestApiService