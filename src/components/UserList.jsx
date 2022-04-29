import * as React from 'react'
import { useListUsersQuery } from '../services/users'
import { SimpleGrid, Box, Button } from '@chakra-ui/react'
export default function UserList() {
  // Using a query hook automatically fetches data and returns query values
  const [page, setPage] = React.useState(1);
  const { data, error, isLoading, isFetching } = useListUsersQuery(page)
  // Individual hooks are also accessible under the generated endpoints:

  const invalidUser = {
    avatar: "https://reqres.in/img/faces/1-image.jpg",
    email: "kelsey.wynns@emboldhealth.com",
    first_name: "George",
    id: "invalid-id",
    last_name: "Bluth"
  }
  return (
    <div className="userList">
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? <SimpleGrid columns={2} spacing={10}>{[invalidUser, ...data.data].map(user => (
        <Box>
          <h3>{user.first_name}</h3>
          <h5>ID: {user.id}</h5>
          <img src={user.avatar} alt={user.name} />
          <Button colorScheme='red'>Delete</Button>
        </Box>

      ))}
      </SimpleGrid> : null}
      <button onClick={() => setPage(page - 1)} isLoading={isFetching}>
        Previous
      </button>
      <button
        onClick={() => setPage(page + 1)}
        isLoading={isFetching}
      >
        Next
      </button>
    </div>
  )
}