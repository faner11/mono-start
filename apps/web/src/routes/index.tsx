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
        onClick={() => {
          addUserMutation.mutate({
            age: 10,
            email: `${Date.now().toString()}@example.com`,
            gender: 'Man',
            name: 'test',
          })
        }}
        type="button"
      >
        add item
      </button>
      <button
        onClick={() => {
          void usersQuery.refetch()
        }}
        type="button"
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
