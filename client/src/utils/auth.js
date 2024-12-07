import decode from 'jwt-decode';

class AuthService {
  // Get and store user data in local storage
  login(token) {
    localStorage.setItem('token', token);
    window.location.assign('/');
    }

    // logout user by removing token from local storage
    logout() {
      localStorage.removeItem('token');
      window.location.assign('/');
    }

    // get token from local storage
    getToken() {
      return localStorage.getItem('token');
    }

    // check if user is logged in
    loggedIn() {
      const token = this.getToken();
      return !!token && !this.isTokenExpired(token);
    }

    // check if token is expired
    isTokenExpired(token) {
      try {
        const decoded = decode(token);
        if (decoded.exp < Date.now() / 1000) {
          return true;
        } else return false;
      } catch (err) {
        return false;
      }
    }

    // get user data from token
    getProfile() {
      return decode(this.getToken());
    }
}

export default new AuthService();
