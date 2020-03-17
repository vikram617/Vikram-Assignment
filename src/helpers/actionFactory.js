const actionFactory = (...args) => type => (...values) => args.reduce(
  (acc, arg, i) => ({ ...acc, [arg]: values[i] }),
  { type }
)

export default actionFactory
export const action = actionFactory('value')
export const idValueAction = actionFactory('id', 'value')
