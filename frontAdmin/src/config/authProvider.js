// in src/authProvider.js
import environment from './env'

if (environment.ENV === 'local'){
    var LOGIN_ENDPOINT = `http://${environment.HOST_ENV_LOCAL}:${environment.PORT_ENV_LOCAL}/authentication/login`
}else  if (environment.ENV  ===  'prod'){
    var LOGIN_ENDPOINT = `http://${environment.HOST_ENV_PROD}/authentication/login`
}


//http://localhost:3001/authentication/login


export default {
    // called when the user attempts to log in
    login: ({ username,password }) => {
        const adm_user = username;
        const adm_password = password;

        const request = new Request(LOGIN_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify({ adm_user, adm_password}),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) {
                    throw new Error(response.statusText);
                }
                return response.json();
            })
            .then(auth => {
                localStorage.setItem('username', JSON.stringify(auth));
                localStorage.setItem('auth', JSON.stringify(auth));
            });
    
    },
    // called when the user clicks on the logout button
    logout: () => {
        localStorage.removeItem('username');
        return Promise.resolve();
    },
    // called when the API returns an error
    checkError: ({ status }) => {
        if (status === 401 || status === 403) {
            localStorage.removeItem('username');
            return Promise.reject();
        }
        return Promise.resolve();
    },
    // called when the user navigates to a new location, to check for authentication
    checkAuth: () => {
        return localStorage.getItem('username')
            ? Promise.resolve()
            : Promise.reject();
    },
    // called when the user navigates to a new location, to check for permissions / roles
    getPermissions: () => Promise.resolve(),
};