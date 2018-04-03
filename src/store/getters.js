export const detail = state => {
  // console.log(state.sample.list, state.route.params)

  // When route params have no id
  if (!state.route.params.hasOwnProperty('id')) {
    return {}
  }

  return state.sample.list.find(l => l.id.toString() === state.route.params.id.toString())
}
