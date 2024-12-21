const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}


module.exports = {
SESSION_ID: 'HANSAMAL-MD=jU9mwYaI#HCBCSkbNIvlUwZ2uMCfxxlXKA6ddYu-hjDdr0BxKk_c',
GITHUB_AUTH_TOKEN: process.env.GITHUB_AUTH_TOKEN === undefined ? 'YOUR GIT TOKEN ()' : process.env.GITHUB_AUTH_TOKEN,
GITHUB_USER_NAME: process.env.GITHUB_USER_NAME === undefined ? 'YOUR GIT USER NAME' : process.env.GITHUB_USER_NAME,
OWNER_NUMBER: process.env.OWNER_NUMBER === undefined ? '94776938009' : process.env.OWNER_NUMBER
};
