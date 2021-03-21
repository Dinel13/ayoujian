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
    console.log(email, password, name);
    try {
      const response = await fetch("http://localhost:8080/api/siswa/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password, name}),
      });

      const resData = await response.json();
      if (resData.errorMessage) {
        throw new Error(resData.errorMessage)
      }
      dispatch(
        AuthSiswaWithData(
          resData._id,
          resData.token,
          resData.name,
          resData.email
        )
      );
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      console.log(err);
    }
  };
};

export const siswaLogin = (email, password, setError, setIsLoading) => {
  console.log(email, password);
  return async (dispatch) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/siswa/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
      });
      const resData = await response.json();
      if (resData.errorMessage) {
        throw new Error(resData.errorMessage)
      }
      console.log(resData);
      dispatch(
        AuthSiswaWithData(
          resData._id,
          resData.token,
          resData.name,
          resData.email
        )
      );
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      setError(err.message);
      console.log(err);
    }
  };
};

//for admin
export const guruSignup = (email, password, name, setError, setIsLoading) => {
  return async (dispatch) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8080/api/guru/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password, name}),
      });
      const resData = await response.json();
      if (resData.errorMessage) {
        throw new Error(resData.errorMessage)
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
  console.log(email, password);
  return async (dispatch) => {
    setIsLoading(true);
    try {
      const response = await fetch("http://localhost:8081/api/guru/login", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email, password}),
      });
      const resData = await response.json();
      if (resData.errorMessage) {
        throw new Error(resData.errorMessage)
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
