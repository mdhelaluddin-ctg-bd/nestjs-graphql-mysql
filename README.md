# NestJS | GraphQL | TypeORM (MySQL)

## Create user using mutations
```
mutation {
  createUser(
    user: {
      username: "helal", 
      password: "123456", 
      email: "helal@gmail.com"
    }
  ) {
    id,
    username,
    password,
    email
  } 
}
```

## Update user by Id using mutations
```
mutation {
  updateUser(
    id: 1,
    user: {
      username: "helal", 
      password: "1234", 
      email: "helal@gmail.com"
    }
  )
}
```

## Delete user by Id using mutations
```
mutation {
  delUser(
    id: 1
  )
}
```

## Query to get all user infortion
```
{
  users {
    id,
    username,
    password,
    email
  } 
}
```

## Query to get a specific user infortion by id
```
{
  user(id:1) {
    id,
    username,
    password,
    email
  } 
}
```
