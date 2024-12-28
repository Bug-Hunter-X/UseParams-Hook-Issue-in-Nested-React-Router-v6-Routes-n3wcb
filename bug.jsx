In React Router Dom v6, a common issue arises when working with nested routes and the `useParams` hook.  If you have a route structure like this:

```jsx
<Route path="/users/:userId/profile" element={<UserProfile/>}/>
```

And try to access `params.userId` within the `UserProfile` component, you might find that it's undefined if the user navigates directly to `/users/:userId/profile` without first going through a parent route that handles the `:userId` parameter. This happens because the `useParams` hook only works correctly if the route it's in is actively matched by the router.  If the route is nested and the parent route doesn't first handle the `userId` parameter, it won't be passed down correctly.