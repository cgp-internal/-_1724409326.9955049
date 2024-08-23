Flight Request Server Application
=============================

Overview
--------

This is a node.js application that handles flight request data and provides an interactive mapping interface using Leaflet.js.

How to Run
-----------

1. Install Node.js and ensure it's in your system's PATH.
2. Clone this repository and navigate to the project directory.
3. Run `run.sh` to install dependencies and start the server.
4. Open a web browser and navigate to `http://localhost:3000` to access the interactive map.

Database
---------

The application uses a SQLite database to store flight request data. The database connection is established in `db/index.js`.

API Endpoints
-------------

The API is defined in `routes/api.js` and exposes the following endpoints:

* TBD: Add API endpoint documentation

Development
-----------

* The application is built using Express.js and uses a modular architecture.
* The `public` directory contains the client-side code for the interactive map.
* The `controllers`, `models`, and `services` directories contain the server-side logic for handling flight requests.

Contributing
------------

Contributions are welcome! Please submit pull requests or report issues through GitHub.

License
-------

This application is licensed under the MIT License.