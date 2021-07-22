const {baseAPI, constants: method_constants} = require('./baseAPI.js');

class dadJokeAPI extends baseAPI{
    constructor() {
        super({
            base_url: 'https://icanhazdadjoke.com',
            type: 'dad_joke',
            methods: [method_constants.GET],
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json',
                'User-Agent': 'ReashyBot (webmaster@reashetyr.software)'
            }
        })
    }
}

module.exports = dadJokeAPI;
