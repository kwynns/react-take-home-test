## How to run the app

use nvm to install and use v16.10.0

`yarn install` (`npm i yarn -g` if you don't have yarn installed globally)

`npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## The test overview

You are allowed to look up any documentation you can to help you solve. But do not ask or get help from any other devs.
 Run this in the console of your browser: `atob('WW91IGFyZSB3ZWxjb21lIGFuZCBlbmNvdXJhZ2VkIHRvIGFzayBxdWVzdGlvbnMgdmlhIHBob25lIDYxNS01NDMtNjM2OSwgZW1haWwga2Vsc2V5Lnd5bm5zQGVtYm9sZGhlYWx0aC5jb20sIG9yIGV2ZW4gYSBzY3JlZW4gc2hhcmUu')`

<img width="559" alt="image" src="https://user-images.githubusercontent.com/427355/165921759-20b2d538-6650-4638-a953-055fc1500719.png">


Click Use This Template, and add me as a collaborator `kelseywynns@gmail.com`. Feel free to create a merge request for each step for me to review/give feedback, or you can make one large one.

`npm start` should start the app with no errors, but make sure to fix any warnings

This react app state is setup with Redux Toolkit https://redux-toolkit.js.org/usage/usage-guide

And specifically leverages RTK Query https://redux-toolkit.js.org/rtk-query/overview to fetch, create, and manage the reducer state

UI elements are chakra ui https://chakra-ui.com/docs/components/overview

The api is `https://reqres.in/` which simulates a real api (notice the delay=1 to slow down the response)

### Step 1:

In `users/services.js` there is a deleteUser endpoint that needs to be modified to be a mutation `build.mutation()`

Then in `UserList.jsx` use this new useMutation to delete a user when hitting the delete button

### Step 2:

In `UserList.jsx` there is an invalid user injected, and should throw a 404 when deleted.

Use the chakra ui toast element to show the error, https://chakra-ui.com/docs/components/feedback/toast

### Step 3: 

Clean up the ui/styling a little bit and make sure it's responsive.

#### Bonus: (only if you have the time, and this isn't taking too long)

Add a view more button on each person that opens a drawer https://chakra-ui.com/docs/components/overlay/drawer and displays all of the fields.

#### Bonus2:

Have the page number show in the url, and when you reload it fetches and displays that page on load. Same thing with the drawer/user with the user id in the url (use routes)
