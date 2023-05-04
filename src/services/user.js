const axios = require('axios')
require('dotenv').config();
const { API_BITKUBNEXT_URL } = process.env;
const verifyBitkubUser = async (accessToken) => {
    console.log(API_BITKUBNEXT_URL);
    try {
        const userInfo = await axios.get(
            `${API_BITKUBNEXT_URL}/accounts/auth/info`,
            {
                headers: { 'Authorization': `Bearer ${accessToken}` }
            }
        );

        return userInfo.data;
    } catch (e) {
        // console.log(e)
    }
}
module.exports = verifyBitkubUser