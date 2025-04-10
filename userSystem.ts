// Role should have the following properties with values that are strings and equal to the property name. (case sensitivity counts)
// Admin, Moderator, Member, Guest
// Status should have the following properties with values that are strings and equal to the property name. (case sensitivity counts)
// Active, Inactive, Suspend, Pending

enum Role {
    ADMIN = "Admin",
    MODERATOR = "Moderator",
    MEMBER = "Member",
    GUEST = "Guest",
}

enum Status {
    ACTIVE = "Active",
    INACTIVE = "Inactive",
    SUSPEND = "Suspend",
    PENDING = "Pending",
}

interface User { 
    id: number; 
    username: string; 
    email: string; 
    role: Role; 
    status: Status; 
}
function canAccessAdminPanel(user: User): boolean {
    // Return true only if the user’s role is Admin or Moderator and their status is Active
    if ((user.role === Role.ADMIN || user.role === Role.MODERATOR) && user.status === Status.ACTIVE) {
        return true;
    }
    return false;
}

function suspendInactiveUsers(users: User[]): User[] {
    return users.map(user => {
        // If the user's status is INACTIVE, set their status to SUSPEND
        if (user.status === Status.INACTIVE) {
            return { ...user, status: Status.SUSPEND };
        }
        // Otherwise, return the user unchanged
        return user;
    });
}

const users: User[] = [
    { id: 1, username: 'johnDoe', email: 'john@example.com', role: Role.ADMIN, status: Status.ACTIVE },
    { id: 2, username: 'janeDoe', email: 'jane@example.com', role: Role.MODERATOR, status: Status.INACTIVE },
    { id: 3, username: 'guestUser', email: 'guest@example.com', role: Role.GUEST, status: Status.INACTIVE },
    { id: 4, username: 'maryAnn', email: 'mary@example.com', role: Role.MEMBER, status: Status.PENDING },
    { id: 5, username: 'adminUser', email: 'admin@example.com', role: Role.ADMIN, status: Status.SUSPEND },
];

const access = canAccessAdminPanel(users[2]);
console.log(access)

const updatedUsers = suspendInactiveUsers(users);
console.log(updatedUsers);

// Why are enums more effective here than strings or numbers?
//enums are more effective because of the consistency instead of some misspell errors or misaligned numbers we are just re using the same strings.

// How does using readonly or immutability principles protect your data?
// Using readonly and immutability principles protects data by preventing unintended modifications, ensuring that once data is set, it remains unchanged throughout the program. This helps maintain consistency, reduces bugs caused by accidental state changes, and makes debugging and testing easier by guaranteeing predictable behavior.

// How would you scale this system to allow dynamic roles loaded from a database?
// I would just call the data base in the creation is the users array 

// johnDoe can access admin panel: true
// janeDoe can access admin panel: false
// guestUser can access admin panel: false
// maryAnn can access admin panel: false
// adminUser can access admin panel: false

// Updated users with suspended inactive users: [
//   { id: 1, username: 'johnDoe', email: 'john@example.com', role: 'Admin', status: 'Active' },
//   { id: 2, username: 'janeDoe', email: 'jane@example.com', role: 'Moderator', status: 'Suspend' },
//   { id: 3, username: 'guestUser', email: 'guest@example.com', role: 'Guest', status: 'Suspend' },
//   { id: 4, username: 'maryAnn', email: 'mary@example.com', role: 'Member', status: 'Pending' },
//   { id: 5, username: 'adminUser', email: 'admin@example.com', role: 'Admin', status: 'Suspend' }
// ]