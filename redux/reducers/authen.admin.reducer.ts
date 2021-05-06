import { LOGINADMIN } from "../type";
const initialState = {
  token: null,
  username: null,
  name: null,
};

const AuthenAdmin = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGINADMIN:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default AuthenAdmin;
