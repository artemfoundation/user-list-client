export default {
	apiURL: process.env.NODE_ENV == 'development' ? 'http://localhost:3001' : window.location.origin
}