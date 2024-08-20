const contactList = [];

function add(contact) {
    const output = document.getElementById('output');

    if (!output) {
        console.error("Output element not found");
        return;
    }

    if (!contact.name || !contact.email) {
        output.textContent = "Missing fields";
        console.log("Missing fields");
        return;
    }

    const duplicate = contactList.find(c => c.email === contact.email);
    if (duplicate) {
        output.textContent = "Duplicate was found";
        console.log("Duplicate was found");
        return;
    }

    contactList.push(contact);
    output.textContent = `${contact.name} was added`;
    console.log(`${contact.name} was added`);

    listAll(); // Update DOM (optional)
}

function remove(email) {
    const index = contactList.findIndex(c => c.email === email);

    if (index === -1) {
        console.log("Contact not found");
        return;
    }

    const [removedContact] = contactList.splice(index, 1);
    console.log(`${removedContact.name} was removed`);

    listAll(); // Update DOM (optional)
}

function edit(email, newData) {
    const contact = contactList.find(c => c.email === email);

    if (!contact) {
        console.log("Contact not found");
        return;
    }

    Object.assign(contact, newData);
    console.log(`${contact.name} was updated`);

    listAll(); // Update DOM (optional)
}

function get(email) {
    const contact = contactList.find(c => c.email === email);

    if (!contact) {
        console.log("Contact not found");
        return;
    }

    console.log(`Name: ${contact.name}`);
    console.log(`Email: ${contact.email}`);
    console.log(`Phone number: ${contact.phoneNumber || "N/A"}`);
    console.log(`Company: ${contact.company || "N/A"}`);
}

function listAll() {
    const contactListElement = document.getElementById('contactList');
    contactListElement.innerHTML = ''; // Clear the list

    if (contactList.length === 0) {
        console.log("No contacts available");
        contactListElement.innerHTML = '<li>No contacts available</li>';
        return;
    }

    const contactDetails = contactList.map(c => `${c.name} ${c.email}`).join(", ");
    console.log(contactDetails);

    // Update the DOM (optional)
    contactList.forEach(contact => {
        const li = document.createElement('li');
        li.textContent = `${contact.name} - ${contact.email}`;
        
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = () => {
            remove(contact.email);
        };

        li.appendChild(removeButton);
        contactListElement.appendChild(li);
    });
}

function clear() {
    contactList.length = 0;
    console.log("The contact list was cleared");

    listAll(); // Update DOM (optional)
}

// Exposing the functions to the global window object to be used in the console
window.add = add;
window.remove = remove;
window.edit = edit;
window.get = get;
window.listAll = listAll;
window.clear = clear;

add({ name: "John Doe", email: "john@example.com" })

// Initial call to listAll to ensure the list is shown in the DOM if required
listAll();
