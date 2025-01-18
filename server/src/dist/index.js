"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// Initializing the Express app
const app = (0, express_1.default)();
// Middleware to parse JSON requests
app.use(express_1.default.json());
// Defining a basic route to test the server
app.get('/', (req, res) => {
    res.send("Hello, World! This is Ron!");
});
// Starting the server on a part
const PORT = 3002;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
