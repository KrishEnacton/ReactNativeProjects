import axios from 'axios';
export default axios.create({
    baseURL: "https://api.yelp.com/v3/businesses",
    headers: {
        Authorization: 'Bearer ORuUSHzIwGMWDhVqzcNmbKbyRkgv5xLpjeyv_Tn6WU6vGU9gPlqAElipDt_9iQUwRnCxmt2MsWMhxOEPuzvadCeNzIXV9dRdWQjLmKmYOq7xJ3dqrG4Q9RweuCMFYHYx'
    }
});