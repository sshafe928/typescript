interface Contact {
    id : number,
    name : string,
    email: string,
    phoneNumber: string,
    isFavorite : boolean
}

let contacts : Contact[] = [
    {id: 1, name: "John Doe", email: "johndoe@example.com", phoneNumber: "123-456-7890", isFavorite: true},
    {id: 2, name: "Jane Smith", email: "janesmith@example.com", phoneNumber: "987-654-3210", isFavorite: false},
]

function createContact(name: string, email: string, phoneNumber: string, isFavorite: boolean){
    let newContact : Contact = {
        id: contacts.length + 1,
        name: name,
        email: email,
        phoneNumber: phoneNumber,
        isFavorite: isFavorite
    }
    contacts.push(newContact)
    return newContact
}

createContact("Emily Han", "emialyHan@gmail.com", "623-436-5890", false);
createContact("Liam Brown", "liam.brown@example.com", "555-123-4567", true);
createContact("Olivia Wilson", "olivia.w@example.com", "555-987-6543", false);
createContact("Ethan Carter", "ethan.c@example.com", "555-789-1234", true);
createContact("Ava Johnson", "ava.j@example.com", "555-321-9876", false);

function deleteContact(id: number){
    contacts = contacts.filter(contact => contact.id!== id)
    return contacts
}

function logContacts(): string[] {
    return contacts.map(contact => {
        const favoriteMark = contact.isFavorite ? "⭐" : "";
        return `
            -------------------------
            ${favoriteMark} Name : ${contact.name}
                ID   : ${contact.id}
                Email: ${contact.email}
                Phone: ${contact.phoneNumber}
                Favorite: ${contact.isFavorite ? "Yes" : "No"}
            -------------------------`;
    });
}

logContacts().forEach(log => console.log(log));