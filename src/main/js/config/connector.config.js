/**
 * @class ConnectorConfig
 */
class ConnectorConfig {

    constructor( { method, oidc_url, oauth_url, token_url, userinfo_url, grant_type } ) {
        this.method = method || 'redirect';
        this.oidc_url = oidc_url || '';
        this.oauth_url = oauth_url || '';
        this.token_url = token_url || '';
        this.userinfo_url = userinfo_url || '';
        this.grant_type = grant_type || 'authorization_code';
    }

    update( { grant_type, method, token_url, userinfo_url } ) {
        this.grant_type = grant_type || this.grant_type;
        this.method = method || this.method;
        this.token_url = token_url || this.token_url;
        this.userinfo_url = userinfo_url || this.userinfo_url;
    }

}

export default new ConnectorConfig( {
    // eslint-disable-next-line no-undef
    // oidc_url: OIDC_URL,
    // oidc_url: 'https://prototype.bankidnorge.no/auth/realms/Systemtest/.well-known/openid-configuration'
    oidc_url: 'https://oidc-preprod.bankidapis.no/auth/realms/preprod/.well-known/openid-configuration'
} );