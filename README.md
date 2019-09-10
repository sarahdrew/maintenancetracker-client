# MaintenanceTracker

![Logo](https://github.com/sarahdrew/maintenancetracker-client/blob/master/smaller-logo.png)

### Link to 

## Technology used 
React, CSS, Node, Express, PostgreSQL



## Summary
MaintenanceTracker is an application for tenants and landlords to communicate efficiently about maintenance requests. After registering for an account, tenants can make requests about maintenance issues in their building and landlords update the progress of the request.


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

Landing Page
![LandingPage](https://github.com/sarahdrew/maintenancetracker-client/blob/master/LandingPage.png)


Register for an account
![Register](https://github.com/sarahdrew/maintenancetracker-client/blob/master/Register.png)

Sign In
![SignIn](https://github.com/sarahdrew/maintenancetracker-client/blob/master/SignIn.png)

Single Request /Update Tracker
![RequestPage] (https://github.com/sarahdrew/maintenancetracker-client/blob/master/RequestPage.png)


Create Request
![CreateRequest](https://github.com/sarahdrew/maintenancetracker-client/blob/master/CreateRequest.png)

All Requests
![AllRequests](https://github.com/sarahdrew/maintenancetracker-client/blob/master/AllRequests.png)
