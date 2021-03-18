class eassyHTTP {
  constructor() {
    this.xhr = new XMLHttpRequest();
  }

  get(url, reqhead) {
    return new Promise((resolve, reject) => {
      this.xhr.open('GET', url, true);
      if (reqhead !== undefined) {
        this.xhr.setRequestHeader(reqhead);
      }
      this.xhr.responseType = 'json';
      this.xhr.send();
      this.xhr.onload = () => {
        if (this.xhr.status <= 400) {
          resolve(this.xhr.response);
        } else {
          reject(this.response);
        }
      };
      this.xhr.onerror = () => {
        reject('Network error.');
      };
    });
  }
  post(url, data, reqhead) {
    return new Promise((resolve, reject) => {
      this.xhr.open('POST', url, true);
      this.xhr.setRequestHeader('Content-Type', 'application/json');
      if (reqhead !== undefined) {
        this.xhr.setRequestHeader(reqhead);
      }
      this.xhr.send(JSON.stringify(data));
      this.xhr.onload = () => {
        if (this.xhr.status <= 400) {
          resolve(this.xhr.response);
        } else {
          reject(this.response);
        }
      };
      this.xhr.onerror = () => {
        reject('Network error.');
      };
    });
  }
  put(url, data, reqhead) {
    return new Promise((resolve, reject) => {
      this.xhr.open('PUT', url, true);
      this.xhr.setRequestHeader('Content-Type', 'application/json');
      if (reqhead !== undefined) {
        this.xhr.setRequestHeader(reqhead);
      }
      this.xhr.send(JSON.stringify(data));
      this.xhr.onload = () => {
        if (this.xhr.status <= 400) {
          resolve(this.xhr.response);
        } else {
          reject(this.response);
        }
      };
      this.xhr.onerror = () => {
        reject('Network error.');
      };
    });
  }
  delete(url, reqhead) {
    return new Promise((resolve, reject) => {
      this.xhr.open('DELETE', url, true);
      if (reqhead !== undefined) {
        this.xhr.setRequestHeader(reqhead);
      }
      this.xhr.send();
      this.xhr.onload = () => {
        if (this.xhr.status <= 400) {
          resolve('Successfully deleted');
        } else {
          reject(this.response);
        }
      };
      this.xhr.onerror = () => {
        reject('Network error.');
      };
    });
  }
}
