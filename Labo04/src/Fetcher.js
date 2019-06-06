import consts from './constants.js'

export default {
  
  getAllTasks() {
    let url = consts.API_URL + consts.USER_ID + '/tasks'
    return request(url)
  },

  addTask(data) {
    let url = consts.API_URL + consts.USER_ID + '/tasks'
    return request(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
  },

  replaceTask(id, data) {
    let url = consts.API_URL + consts.USER_ID + '/tasks/' + id
    return request(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    })
  },

  deleteTask(id) {
    let url = consts.API_URL + consts.USER_ID + '/tasks/' + id
    return request(url, {
      method: "DELETE"
    })
  },

  createUser() {
    let url = consts.API_URL + 'users'
    return request(url, {
      method: "POST"
    })
  }
}

async function request(url, options) {
  try {
    const res = await fetch(url, options || {});
    return res.ok
      ? res.status === 200
        ? res.json()
        : {}
      : res.text().then(text => { console.error(text) });
  }
  catch (err) {
    console.error(err);
  }
}