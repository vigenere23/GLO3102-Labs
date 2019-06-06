let IO = null

export const Socket = {

  init(io) {
    if (!IO) IO = io
  },

  io() {
    return IO
  }

}
