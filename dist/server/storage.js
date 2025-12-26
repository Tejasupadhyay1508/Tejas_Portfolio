import { randomUUID } from "crypto";
export class MemStorage {
    constructor() {
        this.users = new Map();
        this.contactMessages = [];
    }
    async getUser(id) {
        return this.users.get(id);
    }
    async getUserByUsername(username) {
        return Array.from(this.users.values()).find((user) => user.username === username);
    }
    async createUser(insertUser) {
        const id = randomUUID();
        const user = { ...insertUser, id };
        this.users.set(id, user);
        return user;
    }
    async saveContactMessage(message) {
        this.contactMessages.push(message);
        console.log("Contact message received:", message);
    }
}
export const storage = new MemStorage();
