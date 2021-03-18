class easyHTTP3 {
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async post(url, data) {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'content-type': 'application',
        body: JSON.stringify(data),
      },
    });
    const responseData = await response.json();

    return responseData;
  }
  async put(url, data) {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application',
        body: JSON.stringify(data),
      },
    });
    const responseData = await response.json();

    return responseData;
  }

  async delete(url) {
    const response = await fetch(url, {
      method: 'DELETE',
    });
    const data = await response.json();
    return data;
  }
}
