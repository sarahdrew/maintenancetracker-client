# MaintenanceTracker

![Logo](https://github.com/sarahdrew/maintenancetracker-client/blob/master/images/logo.png)

### Link to [Live App](https://sarahs-maintenancetracker-client.now.sh/)

## Technology used 
React, CSS, Node, Express, PostgreSQL



## Summary
MaintenanceTracker is a fullstack application for tenants and landlords to communicate efficiently about maintenance requests. After registering for an account, tenants can make requests about maintenance issues in their building and landlords update the progress of the request.


## API

``` /api
.
├── /auth
│   └── POST
│       ├── /login
│       └── /refresh
├── /listings
│   └── GET /
│   |   └── /:request_id
│   └── POST
│       └── /:id
|   |__ PUT
│       └──/:id
├── /users
│   └── GET
│       └── /
│   └── POST
│       └── /
```

[Repo for API](https://github.com/sarahdrew/maintenancetracker-server)

## Pages of MaintenanceTracker

Landing Page
![LandingPage](https://github.com/sarahdrew/maintenancetracker-client/blob/master/images/LandingPage.png)


Register for an account
![Register](https://github.com/sarahdrew/maintenancetracker-client/blob/master/images/Register.png)

Sign In
![SignIn](https://github.com/sarahdrew/maintenancetracker-client/blob/master/images/SignIn.png)

Single Request /Update Tracker
![RequestPage](https://github.com/sarahdrew/maintenancetracker-client/blob/master/images/RequestPage.png)


Create Request
![CreateRequest](https://github.com/sarahdrew/maintenancetracker-client/blob/master/images/CreateRequest.png)

All Requests
![AllRequests](https://github.com/sarahdrew/maintenancetracker-client/blob/master/images/AllRequests.png)
