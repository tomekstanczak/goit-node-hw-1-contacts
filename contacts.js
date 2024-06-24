import { v4 as uuidv4 } from "uuid";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contactsPath = path.join(__dirname, "/db/contacts.json");

export async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    return JSON.parse(data);
  } catch (err) {
    console.log(err);
  }
}

export async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const wantedContact = contacts.find((contact) => contact.id === contactId);
    return wantedContact;
  } catch (error) {
    console.log(error);
  }
}

export async function addContact(name, email, phone) {
  const newContact = {
    id: uuidv4(),
    name: name,
    email: email,
    phone: phone,
  };

  try {
    const contacts = await listContacts();

    contacts.push(newContact);

    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 1));
    console.log("success");
    return await getContactById(newContact.id);
  } catch (e) {
    console.log(e);
  }
}

export async function removeContact(contactId) {
  try {
    const contacts = await listContacts();

    const newContactList = contacts.filter(
      (contact) => contact.id !== contactId
    );

    await fs.writeFile(contactsPath, JSON.stringify(newContactList, null, 1));
    console.log("success");
    return await listContacts();
  } catch (e) {
    console.log(e);
  }
}
