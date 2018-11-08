import themeReducer from 'reducers/theme'

// test unknow type to return default state
it("handle action with unknow type", () => {
  const action = {
    type: 'UNKNOW_TYPE'
  }
  const newState = themeReducer({theme: 'default'}, action);
  expect(newState).toEqual({theme:'default'})
})

// test GET_THEME type to change colour to red
it('handle action of type GET_THEME',()=>{
  const action = {
    type: 'GET_THEME',
    payload: {
      theme:'red'
    }
  }
  const newState = themeReducer({theme: 'default'}, action);
  expect(newState).toEqual({theme:'red'})

})

;
