import details from './data.json'


export default function createInitialStore() {
  const users = details.reduce(
    ({ allIds, byId }, user) => ({
      allIds: [ ...allIds, user.id ],
      byId:   { ...byId, [user.id]: user }
    }),
    { allIds: [], byId: {} }
  )

  return { users }
}
