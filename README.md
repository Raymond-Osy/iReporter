# iReporter

[![Build Status](https://travis-ci.org/Raymond-Osy/iReporter.svg?branch=ch-travisBuild-%23162341903)](https://travis-ci.org/Raymond-Osy/iReporter)

[![Coverage Status](https://coveralls.io/repos/github/Raymond-Osy/iReporter/badge.svg?branch=develop)](https://coveralls.io/github/Raymond-Osy/iReporter?branch=develop)

iReporter enables any/every citizen to bring any form of corruption to the notice of appropriate authorities and the general public. Users can also report on things that needs government intervention.


# Features
- Users can sign Up or sign In
- Users can get all Red-Flags
- Users can get a Red-Flag by ID
- Users can add new Red-Flag
- Users can update a Red-Flag
- Users can delete a Red-Flag

# To Run :
Clone this repo : git clone https://github.com/Raymond-Osy/iReporter.git

- Navigate to the directory and type the command: npm install && npm run start

- Navigate to the browser and access the following URLs:
- GET http://localhost:8000/api/v1/redFlags- to view all Red-Flags

- GET http://localhost:8000/api/v1/redFlags/1 to view the Red-Flag with ID of 1

- POST http://localhost:8000/api/v1/redFlags - to create a new Red-Flag

- PUT http://localhost:8000/api/v1/redFlags/1 - to modify a Red-Flag with ID of 1

- DELETE http://localhost:8000/api/v1/redFlags/1 - to delete a Red-Flag with ID of 1

<i>Project still in progress...</i>