import {
  AUTH_SISWA_WITH_DATA,
  AUTH_GURU_WITH_DATA,
  LOGOUT,
} from "../action/AuthAction";

const initState = {
  siswaToken: null,
  siswaId: null,
  siswaName: null,
  siswaEmail: null,
  guruToken: null,
  guruId: null,
  guruName: null,
  guruEmail: null,
};

const Auth = (state = initState, action) => {
  switch (action.type) {
    case AUTH_SISWA_WITH_DATA: {
      return {
        siswaToken: action.token,
        siswaId: action.id,
        siswaName: action.name,
        siswaEmail: action.email,
      };
    }
    case AUTH_GURU_WITH_DATA: {
      return {
        guruToken: action.token,
        guruId: action.id,
        guruName: action.name,
        guruEmail: action.email,
      };
    }
    case LOGOUT:
      return initState;

    default:
      return state;
  }
};

export default Auth;
