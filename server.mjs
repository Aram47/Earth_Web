// import express from 'express';

// import cors from 'cors';

// import { readFile, writeFile } from 'fs';

// import { MongoClient } from 'mongodb';

// // const client = new MongoClient('mongodb://localhost:27017');

// // (async function() {
// //     await client.connect();

// //     const cleanup = (event) => {
// //         client.close();
// //         client.exit();
// //     }

// //     process.on('SIGINT', cleanup);
// //     process.on('SIGTERM', cleanup);

// //     const db = client.db("example");
// //     const collection = db.collection("posts");
    
// //     await collection.insertOne({ a: 3 });
// //     await collection.updateOne({ a: 3 }, { $set: { b: 4 } });

// //     const findResult = await collection.find({}).toArray();
// //     console.log('Found documents =>', findResult);
    
// //     const app = express();

// //     const corsOptions = {
// //         origin: 'http://localhost:5173',
// //         optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// //     };
    
//     app.use(cors(corsOptions));
//     const PORT = process.env.PORT || 3000;

//     // Middleware to parse JSON bodies
//     app.use(express.json());

//     let users = [];

//     // Function to check if a user with the same nickname, phone, or email already exists
//     function userExists(newUser) {
//         return users.some(user => 
//             user.nickName === newUser.nickName ||
//             user.phone === newUser.phone ||
//             user.mail === newUser.mail
//         );
//     }

//     // Endpoint to add a new user to the JSON file
//     app.post('/addUser', (req, res) => {
//         console.log(req.body);
//         const requestData = req.body;
//             if (!requestData) {
//                 throw new Error('Request data is empty');
//             }
//         const newUser = req.body;
//         console.log("Back 1");
//         // Check if user already exists
//         if (userExists(newUser)) {
//             console.log("Back 2");
//             return res.status(400).send('User already exists');
//         }

//         // Read the existing JSON file
//         readFile('users.json', 'utf8', (err, data) => {
//         console.log("Back 3");
//             if (err) {
//                 console.error('Error reading file:', err);
//                 return res.status(500).send('Error reading file');
//             }

//             try {
//                 // Parse the existing JSON data
//                 users = JSON.parse(data); 
//             } catch (error) {
//                 console.error('Error parsing JSON:', error);
//                 return res.status(500).send('Error parsing JSON');
//             }

//             // Add the new user to the array
//             users.push(newUser);

//             // Write the updated array back to the file
//             writeFile('users.json', JSON.stringify(users, null, 2), err => {
//                 if (err) {
//                     console.error('Error writing to file:', err);
//                     return res.status(500).send('Error writing to file');
//                 }
//                 console.log('User added and data written to file successfully');
//                 res.status(200).send({status: 'ok'});
//             });
//         });
//     });

//     app.post('/getUserByNicknameAndPassword', (req, res) => {
//         const { nickName, password } = req.body;

//         const user = users.find(user => user.nickName === nickName && user.password === password);

//         if (user) {
//             res.status(200).send({status: 'ok'});
//         } else {
//             res.status(404).send('User not found');
//         }
//     });

//     // Start the server
//     app.listen(PORT, () => {
//         console.log(`Server is running on port ${PORT}`);
//     });
    
// })();



// // // Endpoint to retrieve all users from the JSON file
// // app.get('/getUsers', (req, res) => {
// //     // Read the JSON file containing user data
// //     readFile('users.json', 'utf8', (err, data) => {
// //         if (err) {
// //             console.error('Error reading file:', err);
// //             return res.status(500).send('Error reading file');
// //         }

// //         try {
// //             // Parse the JSON data into an array of users
// //             users = JSON.parse(data);
// //         } catch (error) {
// //             console.error('Error parsing JSON:', error);
// //             return res.status(500).send('Error parsing JSON');
// //         }

// //         // Send the array of users as the HTTP response
// //         res.status(200).json(users);
// //     });
// // });
import express from 'express';
import cors from 'cors';
import { MongoClient } from 'mongodb';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const client = new MongoClient('mongodb://localhost:27017');

(async function () {
    await client.connect();

    const db = client.db("example");
    const collection = db.collection("users");

    // Функция для проверки существования пользователя в MongoDB
    async function userExistsInMongo(newUser) {
        const existingUser = await collection.findOne({
            $or: [
                { nickName: newUser.nickName },
                { phone: newUser.phone },
                { mail: newUser.mail }
            ]
        });
        return !!existingUser;
    }

    // Конечная точка для добавления нового пользователя в MongoDB
    app.post('/addUser', async (req, res) => {
        const newUser = req.body;

        // Проверить, существует ли пользователь уже
        if (await userExistsInMongo(newUser)) {
            return res.status(400).send('Пользователь уже существует');
        }

        // Вставить нового пользователя в MongoDB
        try {
            const result = await collection.insertOne(newUser);
            console.log('Пользователь добавлен в MongoDB:', result);

            // const a = await collection.find();
            // console.log(a);
            res.status(200).send({ status: 'ok' });
        } catch (error) {
            console.error('Ошибка добавления пользователя в MongoDB:', error);
            res.status(500).send('Ошибка добавления пользователя в MongoDB');
        }
    });

    // Маршрут для получения пользователя по никнейму
    app.post('/getUserByNickname', async (req, res) => {
        const nickname = req.body.nickName;
        try {
            // Ищем пользователя в MongoDB по никнейму
            const user = await collection.findOne({ nickName: nickname});

            if (user) {
                res.status(200).send({ status: 'ok' }); // Отправляем найденного пользователя клиенту
            } else {
                res.status(404).send('Пользователь не найден');
            }
        } catch (error) {
            console.error('Ошибка при поиске пользователя:', error);
            res.status(500).send('Ошибка при поиске пользователя');
        }
    });

    // Слушаем указанный порт
    app.listen(PORT, () => {
        console.log(`Сервер запущен на порте ${PORT}`);
    });

})();