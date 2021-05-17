export const API_URL = process.env.NODE_ENV ===  "development"
? "http://localhost:1234" 
: "https://national-parks-api.herokuapp.com";