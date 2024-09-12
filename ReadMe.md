This project is a simple contact list management application built using TypeScript. It allows you to add, remove, edit, and view contacts. The application interacts with the DOM for optional visual feedback, but all primary functionalities are accessible through the browser console.

Open the index.html file in your web browser.

Open the Developer Tools:

Press F12 or Ctrl+Shift+I to open the Developer Tools.
Go to the "Console" tab.

You can now use the functions mentioned above directly in the console. For example:
javascript
Copy code
add({ name: "Jane Doe", email: "jane@example.com" });
listAll();
get("jane@example.com");
edit("jane@example.com", { phoneNumber: "123-456-7890" });
remove("jane@example.com");
clear();