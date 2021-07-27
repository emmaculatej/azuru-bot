const axios = require('axios');
const constants = {
    GET: 'GET',
    PUT: 'PUT',
    POST: 'POST',
    PATCH: 'PATCH',
    DELETE: 'DELETE'
};

class baseAPI {
    constructor({base_url, type, methods, headers} = {}) {
        this.base_url = base_url;
        this.type = type;
        this.methods = methods;
        this.headers = headers;
    }

    async GET(params={}) {
        if (!this.methods.includes(constants.GET))
            throw `Method not supported: expected (${this.methods.join(',')}, got: ${constants.GET}`;

        let params_string = '';
        if (params) {
            params_string = '?';
            for (const [pkey, pval] of Object.entries(params)) {
                params_string += `${pkey}=${pval}&`;
            }
            params_string = params_string.replace(/&$/, ''); // remove last &
        }
        return axios({
            url: this.base_url + params_string,
            method: constants.GET,
            headers: this.headers
        });
    }

    async POST({params = {}, body = {}} = {}) {
        if (!this.methods.includes(constants.POST))
            throw `Method not supported: expected (${this.methods.join(',')}, got: ${constants.POST}`;

        let params_string = '';
        if (params) {
            params_string = '?';
            for (const [pkey, pval] of Object.entries(params)) {
                params_string += `${pkey}=${pval}&`;
            }
            params_string = params_string.replace(/&$/, ''); // remove last &
        }
        return axios({
            url: this.base_url + params_string,
            method: constants.POST,
            headers: this.headers,
            data: body
        });
    }

    async PUT({params = {}, body = {}} = {}) {
        if (!this.methods.includes(constants.PUT))
            throw `Method not supported: expected (${this.methods.join(',')}, got: ${constants.PUT}`;
        let params_string = '';
        if (params) {
            params_string = '?';
            for (const [pkey, pval] of Object.entries(params)) {
                params_string += `${pkey}=${pval}&`;
            }
            params_string = params_string.replace(/&$/, ''); // remove last &
        }
        return axios({
            url: this.base_url + params_string,
            method: constants.PUT,
            headers: this.headers,
            data: body
        });
    }

    async PATCH({params = {}, body = {}} = {}) {
        if (!this.methods.includes(constants.PATCH))
            throw `Method not supported: expected (${this.methods.join(',')}, got: ${constants.PATCH}`;

        let params_string = '';
        if (params) {
            params_string = '?';
            for (const [pkey, pval] of Object.entries(params)) {
                params_string += `${pkey}=${pval}&`;
            }
            params_string = params_string.replace(/&$/, ''); // remove last &
        }
        return axios({
            url: this.base_url + params_string,
            method: constants.PATCH,
            headers: this.headers,
            data: body
        });
    }

    async DELETE(params = {}) {
        if (!this.methods.includes(constants.DELETE))
            throw `Method not supported: expected (${this.methods.join(',')}, got: ${constants.DELETE}`;

        let params_string = '';
        if (params) {
            params_string = '?';
            for (const [pkey, pval] of Object.entries(params)) {
                params_string += `${pkey}=${pval}&`;
            }
            params_string = params_string.replace(/&$/, ''); // remove last &
        }
        return axios({
            url: this.base_url + params_string,
            method: constants.DELETE,
            headers: this.headers
        });
    }
}

module.exports = {
    constants,
    baseAPI
}
