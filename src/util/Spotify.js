let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessToken) {
            return accessToken
        }

        // check for access token match
        const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
        const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/)

        if(accessTokenMatch && expiresInMatch){
            accessToken = accessTokenMatch[1];
            const expiresIn = Number(expiresInMatch[1]);
            //Will clear parameter, allowing to grab a new access token when expires.
            window.setTimeout(()=> accessToken='', expiresIn*1000);
            window.history.pushState('Access Token', null, '/'); return accessToken
        }
    }
}

export default Spotify