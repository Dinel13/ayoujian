export const AUTH_SISWA_WITH_DATA = "AUTH_SISWA_WITH_DATA";
export const AUTH_GURU_WITH_DATA = "AUTH_GURU_WITH_DATA";
export const LOGOUT = "LOGOUT";

export const AuthSiswaWithData = (id, token, name, email) => {
  return (dispatch) => {
    localStorage.setItem(
      "siswaData",
      JSON.stringify({
        siswaId: id,
        siswaToken: token,
        siswaName: name,
        siswaEmail: email,
      })
    );
    dispatch({
      type: AUTH_SISWA_WITH_DATA,
      token: token,
      id: id,
      name: name,
      email: email,
    });
  };
};

export const AuthGuruWithData = (id, token, name, email) => {
  return (dispatch) => {
    localStorage.setItem(
      "guruData",
      JSON.stringify({
        guruId: id,
        guruToken: token,
        guruName: name,
        guruEmail: email,
      })
    );
    dispatch({
      type: AUTH_GURU_WITH_DATA,
      token: token,
      id: id,
      name: name,
      email: email,
    });
  };
};

export const siswaSignup = (email, password, name, setError, setIsLoading) => {
  return async (dispatch) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/siswa/daftar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password, name}),
      });
      const resData = await response.json();
      if (resData.errors && resData.errors[0].status === 422) {
        throw new Error(
          "Validation failed. Make sure the email address isn't used yet!"
        );
      }
      dispatch(
        AuthSiswaWithData(
          resData.data.createUser._id,
          resData.data.createUser.token,
          resData.data.createUser.name,
          resData.data.createUser.email
        )
      );
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };
};

export const siswaLogin = (email, password, setError, setIsLoading) => {
  return async (dispatch) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8081/api/siswa/masuk", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
      });
      const resData = await response.json();
      if (resData.errors) {
        throw new Error(resData.errors[0].message);
      }
      dispatch(
        AuthSiswaWithData(
          resData.data.login._id,
          resData.data.login.token,
          resData.data.login.name,
          resData.data.login.email
        )
      );
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };
};

//for admin
export const guruSignup = (email, password, name, setError, setIsLoading) => {
  return async (dispatch) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/guru/daftar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password, name}),
      });
      const resData = await response.json();
      if (resData.errors && resData.errors[0].status === 422) {
        throw new Error(
          "Validation failed. Make sure the email address isn't used yet!"
        );
      }
      dispatch(
        AuthGuruWithData(
          resData.data.createUser._id,
          resData.data.createUser.token,
          resData.data.createUser.name,
          resData.data.createUser.email
        )
      );
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };
};

export const guruLogin = (email, password, setError, setIsLoading) => {
  return async (dispatch) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8081/api/guru/masuk", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
      });
      const resData = await response.json();
      if (resData.errors) {
        throw new Error(resData.errors[0].message);
      }
      dispatch(
        AuthGuruWithData(
          resData.data.login._id,
          resData.data.login.token,
          resData.data.login.name,
          resData.data.login.email
        )
      );
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
    }
  };
};


export const Logout = () => {
  localStorage.removeItem("siswaData");
  localStorage.removeItem("guruData");
  return { type: LOGOUT };
};
