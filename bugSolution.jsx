The solution involves restructuring the routes to ensure the parent route handles parameters first. Instead of directly accessing the nested route, you should use a parent route that handles the `:userId` parameter before rendering the `UserProfile` component. For example:

```jsx
<Route path="/users/:userId" element={
<UserLayout/>
}>
<Route path="profile" element={<UserProfile/>}/>
</Route>
```

In `UserLayout`, you can access `params.userId` using `useParams` and pass it as props to `UserProfile`. This makes the `userId` available in the `UserProfile` component even when it's accessed directly.

```jsx
function UserLayout() {
const { userId } = useParams();

return (
<div>
<UserProfile userId={userId}/>
</div>
);
}

function UserProfile({ userId }) {
return (
<div>User Profile for ID: {userId}</div>
);
}
```
This ensures that the `userId` parameter is correctly passed down and handled, solving the undefined issue.