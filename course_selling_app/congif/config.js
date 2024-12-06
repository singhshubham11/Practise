require('dotenv').config();
const JWT_ADMIN_PASSWORD = process.env.JWT_ADMIN_PASSWORD;
const JWT_USER_PASSWORD = process.env.JWT_USER_PASSWORD;

module.exports = {JWT_ADMIN_PASSWORD, JWT_USER_PASSWORD};

//Let’s say you want to make cookies (your app) that need sugar (the secret password). The .env file is the jar of sugar in the pantry.
// Instead of letting everyone go into the pantry to grab sugar (which could make a mess), you have one messenger (config.js)
// who fetches the sugar for everyone and keeps things neat.