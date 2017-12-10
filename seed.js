'use strict';

var Promise = require("bluebird");
var {
  Students,
  Campus,
  db
} = require('./server/db/models');


var data = {
  students:
    [{
    "id": 2,
    "firstName": "Peter",
    "lastName": "Parker",
    "email": "pete@gmail.com",
    "gpa": 4,
    "createdAt": "2017-12-09T02:08:57.541Z",
    "updatedAt": "2017-12-09T02:08:57.541Z",
    // "camp": 5

},
{

    "id": 1,
    "firstName": "Bruce",
    "lastName": "Wayne",
    "email": "batman@gmail.com",
    "gpa": 4,
    "createdAt": "2017-11-07T08:00:00.000Z",
    "updatedAt": "2017-11-07T08:00:00.000Z",
  //  "camp": 1

},
{

    "id": 3,
    "firstName": "Mary Jane",
    "lastName": "Watson",
    "email": "mj@gmail.com",
    "gpa": 4,
    "createdAt": "2017-12-09T17:11:33.712Z",
    "updatedAt": "2017-12-09T17:11:33.712Z",
  //  "camp": 5

},
{

    "id": 7,
    "firstName": "Mr",
    "lastName": "fantastic",
    "email": "mrFan@gmail.com",
    "gpa": 4,
    "createdAt": "2017-12-09T22:50:12.224Z",
    "updatedAt": "2017-12-09T22:50:12.224Z",
  //  "camp": 3

},
{

    "id": 6,
    "firstName": "Dr",
    "lastName": "Doom",
    "email": "drdoom@gmail.com",
    "gpa": 4,
    "createdAt": "2017-12-09T22:48:10.051Z",
    "updatedAt": "2017-12-09T22:48:10.051Z",
  //  "camp": 3

    }
  ],
  campus:[
    {
    "id": 5,
    "name": "Midtown Science",
    "imageUrl": "https://res.cloudinary.com/teepublic/image/private/s--n87LqdWf--/t_Preview/b_rgb:36538b,c_limit,f_jpg,h_630,q_90,w_630/v1466562988/production/designs/556794_1.jpg",
    "description": "Manhattan",
    "createdAt": "2017-12-09T02:18:50.630Z",
    "updatedAt": "2017-12-09T02:18:50.630Z"

},
{
    "id": 1,
    "name": "Gotham",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/e/e0/Gotham_Logo.jpg",
    "description": "Gotham",
    "createdAt": "2017-11-07T08:00:00.000Z",
    "updatedAt": "2017-11-07T08:00:00.000Z"

},
{
    "id": 3,
    "name": "New York",
    "imageUrl": "https://vignette.wikia.nocookie.net/spiderman/images/1/1c/New_York_City_%28Earth-616%29_001.jpg/revision/latest?cb=20130413142937",
    "description": "New York",
    "createdAt": "2017-11-07T08:00:00.000Z",
    "updatedAt": "2017-11-07T08:00:00.000Z"



  },
  {
    "id": 2,
    "name": "Metropolis",
    "imageUrl": "https://vignette.wikia.nocookie.net/marvel_dc/images/3/36/Metropolis.JPG/revision/latest?cb=20060807151432",
    "description": "Metropolist",
    "createdAt": "2017-11-07T08:00:00.000Z",
    "updatedAt": "2017-11-07T08:00:00.000Z"
  },
{
    "id": 4,
    "name": "Bronx Science",
    "imageUrl": "https://upload.wikimedia.org/wikipedia/en/7/70/BxSci_Logo_New.jpg",
    "description": "Bronx",
    "createdAt": "2017-12-09T02:15:30.906Z",
    "updatedAt": "2017-12-09T02:15:30.906Z"
}]
}

  db
  .sync({ force: true })
  .then(function() {
    console.log("Dropped old data, now inserting data");
    return Promise.map(Object.keys(data), function(name) {
      return Promise.map(data[name], function(item) {
        return db.model(name).create(item);
      });
    });
  })
  .then(function() {
    console.log("Finished inserting data");
  })
  .catch(function(err) {
    console.error("There was totally a problem", err, err.stack);
  })
  .finally(function() {
    db.close(); // uses promises but does not return a promise. https://github.com/sequelize/sequelize/pull/5776
    console.log("connection closed"); // the connection eventually closes, we just manually do so to end the process quickly
    return null; // silences bluebird warning about using non-returned promises inside of handlers.
  });
