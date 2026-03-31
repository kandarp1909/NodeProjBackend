## profile
-GET /profile/view
-PATCH /profile/edit
-PATCH /profile/password

## connection request router

-POST /request/send/:status/:userId
-POST /request/review/accepted/:requestId
-POST /request/review/rejected/:requestId


Status : ignored , interested, accepted, rejected

