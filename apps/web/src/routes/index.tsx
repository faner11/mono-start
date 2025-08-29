import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import { createFileRoute } from '@tanstack/react-router'

import { orpcClient } from '#comm'

export const Route = createFileRoute('/')({
  component: Home,
})
function Home() {
  const usersQuery = useSuspenseQuery(orpcClient.user.findUsers.queryOptions())
  const addUserMutation = useMutation(
    orpcClient.user.addUser.mutationOptions({
      onSuccess: async (data) => {
        console.info('onSuccess', data)
        await usersQuery.refetch()
      },
    }),
  )
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          addUserMutation.mutate({
            email: `${Date.now().toString()}@example.com`,
            gender: 'Man',
            name: 'test',
            age: 10,
          })
        }}
      >
        add item
      </button>
      <button
        type="button"
        onClick={() => {
          void usersQuery.refetch()
        }}
      >
        refetch
      </button>
      {usersQuery.data.map((user) => (
        <div key={user.id}>
          <p>
            {user.id} - {user.email}
          </p>
        </div>
      ))}
    </div>
  )
}
