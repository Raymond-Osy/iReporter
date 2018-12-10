# iReporter

[![Build Status](https://travis-ci.org/Raymond-Osy/iReporter.svg?branch=ch-travisBuild-%23162341903)](https://travis-ci.org/Raymond-Osy/iReporter)
[![Coverage Status][![Coverage Status](https://coveralls.io/repos/github/Raymond-Osy/iReporter/badge.svg?branch=develop)](https://coveralls.io/github/Raymond-Osy/iReporter?branch=develop)

iReporter enables any/every citizen to bring any form of corruption to the notice of appropriate authorities and the general public. Users can also report on things that needs government intervention.

## Table of Content

* [Features](#features)
* [Technology](#technology)
* [Installation](#installation)
* [Testing](#testing)

## Features
iReporter consist of the following features:
###  Users
- Users can sign Up or sign In
- Users can get all Red-Flags
- Users can get a Red-Flag by ID
- Users can add new Red-Flag
- Users can update a Red-Flag
- Users can delete a Red-Flag


## Technology

**iReporter** makes use of modern technologies. The core ones are:

* ECMAScript 6: Also known as ES2015, this is a version of Javascript with
    next-generation features like arrow functions, generators, enhanced object literals,
    spread operators and more. The ES2015 is used in many areas of this project. See [this link](https://en.wikipedia.org/wiki/ECMAScript) for details.
* NodeJS: Node.js is an open-source, cross-platform JavaScript run-time environment for executing JavaScript code on the server-side.
    See [this link](https://en.wikipedia.org/wiki/Node.js) for details.
* ExressJS: ExpressJS, is a web application framework for Node.js, It is designed for building web applications and APIs.
    see [this link](https://en.wikipedia.org/wiki/Express.js).
* Major codes are written using the Airbnb javascript style guide, see [this link](https://github.com/airbnb/javascript) for details.

## Installation
1. Clone the repository:
```
https://github.com/Raymond-Osy/iReporter.git
```
2. Navigate into the cloned repository:
```
cd iReporter
```
3. Install dependencies.
```
npm install
```
4. Start the application
```
npm run start:dev
```
5. Install postman to test all endpoints

## Testing
- to test run `npm test`

## API End Points
<table>
<tr><th>Http verb</th><th>Endpoint</th><th>Action</th></tr>
<tr> <td>GET</td> <td> /redFlags </td> <td>Get all Red-Flags</td></tr>
<tr> <td>GET</td><td>/redFlags/(redFlagId)  </td><td>Get a Red-Flag with the given ID</td></tr>
<tr> <td>POST</td> <td>/redFlags </td><td>Create a new Red-Flag</td></tr>
<tr> <td>PUT</td><td>/redFlags/(redFlagId)  </td><td>Update a Red-Flag with the given ID</td></tr>
<tr><td>DELETE</td><td>/redFlags/(redFlagId)</td><td>  Delete Red-Flag with the given ID </td></tr>
</table>

<i>Project still in progress...</i>