import config from '../config'
import TokenService from './token-service'

const AuthApiService = {
    postUser(user) {
        console.log(`fetch of postUser`)
        return fetch(`${config.API_ENDPOINT}/api/users`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(res =>

                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
    },

    postLogin({ email, password }) {
        return fetch(`${config.API_ENDPOINT}/api/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(res => {

                //console.log(res.authToken)
                TokenService.saveAuthToken(res.authToken)

                // TokenService.queueCallbackBeforeExpiry(() => {
                //     AuthApiService.postRefreshToken()
                // })
                //  console.log(`this is response in postLogin after `, res)
                return res
            })
            .catch(err => {
                // console.log(err)
            })
    },
    postRefreshToken() {
        return fetch(`${config.API_ENDPOINT}/api/auth/refresh`, {
            method: 'POST',
            headers: {
                'authorization': `Bearer ${TokenService.getAuthToken()}`,
            },
        })
            .then(res =>
                (!res.ok)
                    ? res.json().then(e => Promise.reject(e))
                    : res.json()
            )
            .then(res => {

                TokenService.saveAuthToken(res.authToken)
                TokenService.queueCallbackBeforeExpiry(() => {
                    AuthApiService.postRefreshToken()
                })
                return res
            })
            .catch(err => {
                //  console.log('refresh token request error')
                console.error(err)
            })
    },
}

export default AuthApiService