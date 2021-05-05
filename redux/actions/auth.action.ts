import { LOGIN } from "../type";
import { Account } from "../../Models/account";

const setLoginReducer = (payload) => ({
  type: LOGIN,
  payload,
});

const login = ({ username, password }: Account) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(
        setLoginReducer({ token: "1234", user: { username, password } })
      );
    }, 2000);
  };
};

export default {
  login,
};
