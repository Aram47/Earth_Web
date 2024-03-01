// const user =
// {
//     nme : nme.value,
//     surname : surname.value,
//     nickName : nickName.value,
//     phone : phone.value,
//     age : age.value,
//     mail : mail.value,
//     pass : pass.value,
//     repeatPassword : repeatPassword.value,
//     male : male.checked,
//     female : female.checked
// }

import express from 'express';

import { readFile, writeFile } from 'fs';

const app = express();
const PORT = process.env.PORT || 5173;

// Middleware to parse JSON bodies
app.use(express.json());

let users = [];

// Function to check if a user with the same nickname, phone, or email already exists
function userExists(newUser) {
    return users.some(user => 
        user.nickName === newUser.nickName ||
        user.phone === newUser.phone ||
        user.mail === newUser.mail
    );
}

// Endpoint to add a new user to the JSON file
app.post('/addUser', (req, res) => {
    const newUser = req.body;

    // Check if user already exists
    if (userExists(newUser)) {
        return res.status(400).send('User already exists');
    }

    // Read the existing JSON file
    readFile('users.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return res.status(500).send('Error reading file');
        }

        try {
            // Parse the existing JSON data
            users = JSON.parse(data); 
        } catch (error) {
            console.error('Error parsing JSON:', error);
            return res.status(500).send('Error parsing JSON');
        }

        // Add the new user to the array
        users.push(newUser);

        // Write the updated array back to the file
        writeFile('users.json', JSON.stringify(users, null, 2), err => {
            if (err) {
                console.error('Error writing to file:', err);
                return res.status(500).send('Error writing to file');
            }
            console.log('User added and data written to file successfully');
            res.status(200).send({status: 'ok'});
        });
    });
});

app.post('/getUserByNicknameAndPassword', (req, res) => {
    const { nickName, password } = req.body;

    const user = users.find(user => user.nickName === nickName && user.password === password);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).send('User not found');
    }
});

// // Endpoint to retrieve all users from the JSON file
// app.get('/getUsers', (req, res) => {
//     // Read the JSON file containing user data
//     readFile('users.json', 'utf8', (err, data) => {
//         if (err) {
//             console.error('Error reading file:', err);
//             return res.status(500).send('Error reading file');
//         }

//         try {
//             // Parse the JSON data into an array of users
//             users = JSON.parse(data);
//         } catch (error) {
//             console.error('Error parsing JSON:', error);
//             return res.status(500).send('Error parsing JSON');
//         }

//         // Send the array of users as the HTTP response
//         res.status(200).json(users);
//     });
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
