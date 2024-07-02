import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  // You can add other default headers here if needed
});

// export const setupInterceptors = (store) => {
//   createAuthRefreshInterceptor(axiosInstance, (failedRequest) =>
//     // Implement your token refresh logic here
//     // You will need to fetch the refresh token from local storage or another source
//     // and send a request to refresh the access token
//     // Example:
//     // axiosInstance.post('/api/auth/refresh', { refreshToken })
//     //   .then((response) => {
//     //     const newAccessToken = response.data.accessToken;
//     //     failedRequest.response.config.headers['Authorization'] = `Bearer ${newAccessToken}`;
//     //     return Promise.resolve();
//     //   })
//     //   .catch((error) => {
//     //     // Handle token refresh failure
//     //     // You can log the error or dispatch an action to handle it
//     //     return Promise.reject(error);
//     //   })
//   );
// };

export default axiosInstance;
