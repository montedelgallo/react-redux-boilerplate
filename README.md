# MDG Boilerplate 
#### this is a boilerplate for react, react-router v4, redux and redux thunk.

This boilerplate has a sort of authetnication required to see a protected route (locahost:3000/protected). You need to change the signIn action in order to work with a real authentication server which can return a jwt that you set in the localStorage with the localStorage API.

To make a route protected just wrap the component with the RequireAuth High Order Component (`./src/hoc/require_auth.js`). 

If the user is not authenticated this HighOrderComponent will redirect it to a page you can set. 
