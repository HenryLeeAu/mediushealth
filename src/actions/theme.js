export const getTheme = payload => ({
  type: 'GET_THEME',
  payload,
});
export const bbb = payload => ({
  type: 'GET_THEME',
  payload,
});

export const fetchProfile = id => {
  return dispatch => {
    fetch(`api/${id}.json`)
      .then(res => res.json())
      .then(data => {
        dispatch(getTheme({ color: data.color }));
      })
      .catch(error => {
        console.log('This client is not exist');
      });
    // you can use api here
  };
};
