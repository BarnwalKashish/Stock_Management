# Stock_Management
# Simple Stock Management - Server Component

## Security Advisory

Please note, this application has not been audited for security and may contain vulnerabilities that could expose data contained on the host system to unauthorized manipulation or disclosure. Deploy at your own risk.

## About

This a demo/prototype repository for the server component of the Simple Stock Management stock and inventory system. It is built using web technologies, with a client/server architecture. The repository for the frontend app component is at: https://github.com/Aninstance/simple-stock-management-frontend

The system allows "stores" to request transfers of stock ("order") from a central stock repository ("warehouse"). Stock is adjusted for the "Warehouse Account" and the "Store Account" as stock transfers are "ordered". Email notifications are sent to the "warehouse" administrator(s) and the ordering "store manager".

This project offers a web frontend that connects to a RESTful API backend. Data is stored in either a SQLite, mySQL or PostgreSQL (recommended) database.


## Key Technologies for Server Component

Key technologies include: Python 3.7; Django; Django-rest-framework; Django_q (for asynchronous processes); Javascript; HTML5; CSS3;

## Live Demo

There is a live demo, available here:

https://frontend.ssm.webapps.uplandsdynamic.com

There are two test users - one for the warehouse administrator, the other for a 'store manager'. Credentials are:

Adminstrator:
Username: test_admin
Password: jduejHje(89K

Manager:
Username: test_manager
Password: jduejHje(89K

## Screenshots

![Screenshot 1](./meta/img/screenshot_1.png?raw=true)
![Screenshot 2](./meta/img/screenshot_2.png?raw=true)
![Screenshot 4](./meta/img/screenshot_4.png?raw=true)

![Screenshot 6](./meta/img/screenshot_6.png?raw=true)
![Screenshot 7](./meta/img/screenshot_7.png?raw=true)
![Screenshot 8](./meta/img/screenshot_8.png?raw=true)
![Screenshot 5](./meta/img/screenshot_5.png?raw=true)
![Screenshot 9](./meta/img/screenshot_9.png?raw=true)
![Screenshot 10](./meta/img/screenshot_10.png?raw=true)

## Key features

- Administrator may add, edit and delete stock from database.
- Store managers may request transfers ("order") stock from the "warehouse".
- Dynamic search of stock lines (SKU and description).
- Configurable pagination of results table.
- Transfer requests of stock lines are loaded to a "truck" (i.e. like "adding to a basket/cart" in an e-commerce system), before the request is submitted.
  - The "truck" retains the transfer data until the "Request truck dispatch" button is clicked. The truck data is retained across sessions (meaning the data remains in the truck even if the user logs out, then resumes their transfer at a later time).
  - Once the "Request truck dispatch" button is clicked, the transfer request process will complete. The truck empties and a single email containing a summary of the successful transfers - and any failures - is dispatched to both the requesting user and the warehouse administrator. Warehouse quantities are immediately adjusted accordingly, both in the "Warehouse" and "Store" accounts.
- A "Stock take" feature compiles and emails detailed reports, consisting of:

  - For every unique stock line in a "Store Account" (see screenshot #10, below, for an example report):

    - SKU
    - Stock description
    - Units of opening stock
    - Units of closing stock
    - Change in stock units since last stock take
    - Number of units transferred since last stock take
    - Number of units recorded sold since last stock take
    - Number of units recorded as shrinkage since last stock take
    - Differential for units of unrecorded history since last stock take (i.e. unrecorded sales, unrecorded transfers, unrecorded loss)
    - Current transfer value of a unit
    - Current retail price of a unit
    - Total value of units recorded sold since last stock take
    - Total value of units recorded as shrinkage since last stock take
    - Total value of units transferred since last stock take
    - Total value differential of units with unrecorded history since last stock take, at present xfer price
    - Total value differential of units with unrecorded history since last stock take, at present retail price (i.e. unrecorded sales, unrecorded transfers, shrinkage)
    - Current total held stock transfer value at present xfer price
    - Current total held stock retail value at present retail price

  - Overview of the entire "Store Account" (see screenshot #10, below, for an example report):

    - Units of opening stock
    - Units of closing stock
    - Units of stock transferred since last stock take
    - Units of stock recorded sold since last stock take
    - Units of stock recorded as shrinkage since last stock take
    - Change in stock holding owing to unrecorded unit history since last stock take (i.e. unrecorded sales, unrecorded transfers, unrecorded loss)
    - Value of stock recorded sold since last stock take
    - Value of stock recorded as shrinkage since last stock take
    - Total value differential of units with unrecorded history since last stock take at current transfer value
    - Total value differential of units with unrecorded history since last stock take at current retail value (i.e. unrecorded sales, unrecorded transfers, unrecorded loss)
    - Total value of transfers since last stock take (at actual xfer prices)
    - All time total value of transfers (at actual xfer prices)
    - Value of held stock at current transfer price
    - Value of held stock at current retail price

- Automated removal of obsolete stock line records (lines with zero units of held stock) from the Store accounts following a successful stock take process
- Historical retention of previous stock take data (not currently exposed on the UI)

## Brief UI instructions
Please find the my react app directory for the UI
Please see the repository for the frontend client, at https://github.com/Aninstance/simple-stock-management-frontend
