# goit-node-hw-1-contacts

Print screens
1. Action list     https://monosnap.com/file/Cm99REuGF3oCM751i4j4eJjiECFk9G
2. Action get      https://monosnap.com/file/cTIwB6NvLEzrgyIW4vzjyntH4RzNK3
3. Action add      https://monosnap.com/file/N0ABsKJS6KoSz9H4Iv6DdT7jDSj9ou
4. Action remove   https://monosnap.com/file/k1gQmeanUCU31HYbx6sX9APKAHycJr

Contact Management CLI

This project is a simple Command Line Interface (CLI) application for managing contacts. It allows users to list, add, get, and remove contacts from a JSON file-based database.
Features

    List Contacts: Display all contacts in the database.
    Get Contact by ID: Retrieve and display a contact by its unique ID.
    Add Contact: Add a new contact with name, email, and phone number.
    Remove Contact: Remove a contact from the database using its ID.

Usage

To use this CLI, run the following commands with the appropriate options:

sh

# List all contacts
node index.js --action list

# Get a contact by ID
node index.js --action get --id CONTACT_ID

# Add a new contact
node index.js --action add --name "NAME" --email "EMAIL" --phone "PHONE_NUMBER"

# Remove a contact by ID
node index.js --action remove --id CONTACT_ID

Dependencies

    commander: For parsing command-line options.
    uuid: For generating unique IDs for contacts.
    nodemon: For automatic restarting during development.

Setup

    Clone the repository:

    sh

git clone https://github.com/yourusername/contact-management-cli.git
cd contact-management-cli

Install the dependencies:

sh

npm install

Run the CLI:

sh

npm start
