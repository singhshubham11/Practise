//---------------------------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');

// const app = express();

// app.use(express.json());

// app.get('/users', (req,res) =>{
//     res.status(200).json({message: 'list of users'})
// })

// app.post('/users', (req, res) => {
//     const newUser = req.body;
//     res.status(201).json({message: 'user added', data: newUser})
// })

// app.use((req,res) => {
//     res.status(404).json({message: 'route not found'})
// })

// app.listen(3000, () => {
//     console.log('server running on port 3000');
// })

//---------------------------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     res.send('Hello World');
// })

// app.listen(3000, () => {
//     console.log('server running on port 3000');
// });

//---------------------------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const app = express();

// function logger(req, res, next){
//     console.log(`${req.method} ${req.url}`);
//     next();
// }

// app.use(logger);

// app.get('/', (req, res) => {
//     res.send('hello world')
// })

// app.listen(3000, () => {
//     console.log('serever running on port 3000');
// })

//---------------------------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const app = express();

// app.use(express.json());

// app.get('/', (req,res) => {
//     res.status(200).send('hello this is get route');
// });

// app.post('/', (req, res) => {
//     const data = req.body;
//     res.status(201).json({message: 'data recived on post route', data});
// });

// app.put('/update', (req, res) =>{
//     const updatedData = req.body;
//     res.status(200).json({message: 'data updated on put route', updatedData});
// });

// app.delete('/delete', (req, res) => {
//     res.status(200).json({message: 'data deleted on delete route'});
// });

// app.listen(3000, () => {
//     console.log('server running on port 3000');
// })


//---------------------------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const app = express();

// app.get('/', (req, res) => {
//     const user = {
//         id: 1,
//         userName: 'shubham',
//         email: 'gojo@gmail.com'
//     }
//     res.status(200).json(user);
// })

// app.listen(3000, () => {
//     console.log('server running on port 3000');
// })


//---------------------------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const app = express();

// // URL parameters
// app.get('/user/:id', (req,res) => {
//     const userId = req.params.id;
//     res.json({userId});
// })


// // QUERY parameters
// app.get('/user', (req,res) => {
//     const {pages, limit} = req.query;
//     res.json({pages, limit});
// })
// //http://localhost:3000/user?pages=20&limit=30

// //combine URL and QUERY parameters
// app.get('/user/:id', (req, res) => {
//     const userId = req.params.id;
//     const fields = req.query;

//     res.json({userId, fields});
// })
// //http://localhost:3000/user/:1?no

// app.listen(3000, () => {
//     console.log('server running on port 3000');
// })


//---------------------------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const app = express();

// const users = [
//     { id: 1, name: 'John Doe', email: 'john.doe@example.com', age: 30 },
//     { id: 2, name: 'Jane Smith', email: 'jane.smith@example.com', age: 25 },
// ];

// app.get('/user/:id', (req, res) => {
//     const userId = parseInt(req.params.id); //when give params in url we recived it as a string to server.
//     const fields = req.query.fields ? req.query.fields.split(','):[];   //(req.query) would be: { fields: 'name,age,location', other: 'value' }
//                                                                         //(req.query.fields) would be: 'name,age,location'

//     const user = users.find(u => u.id === userId);

//     if (!user) {
//         res.status(404).json({message: 'User not find'});
//     }

//     if (fields.length > 0) {
//         const filteredUser = {};
//         fields.forEach(element => {
//             if (user[element]) {
//                 filteredUser[element] = user[element];
//             } 
//         });
//         res.status(200).json(filteredUser)
//     }

//     res.status(200).json(user);
// })

// app.listen(3000, () => {
//     console.log('server runnig on port 3000');
// })



//---------------------------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.static(path.join(__dirname,'public')));

// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname,'public','index.html'));
// });

// app.listen(3000 , () => {
//     console.log('server running on port 3000');
// })


//---------------------------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const cors = require('cors');
// const app = express();

// const corsOption = {
//     origin: 'http://example-client.com',
//     methods: 'GET,POST',
// }

// app.use(cors(corsOption));

// app.get('/', (req, res) => {
//     res.send('cors enable-server')
// })

// app.listen(3000, () =>{
//     console.log('server running on port 3000')
// })


//---------------------------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const app = express();

// app.use(express.json());
// app.use(express.urlencoded({extended: true}));

// app.post('/json', (req, res) => {
//     const data = req.body;
//     res.json({
//         message: 'Json request',
//         recivedData: data
//     })
// });

// app.post('/urlencoded', (req, res) => {
//     const data = req.body;
//     res.json({
//         message: 'urlencoded request',
//         recivedData: data
//     })
// });

// app.listen(3000, () => {
//     console.log('serevr listening on port 3000');
// })


//---------------------------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const app = express();

// const usersRoute = require('./routes/users');
// const productsRoute = require('./routes/products');

// app.use('/users',usersRoute);
// app.use('/saman',productsRoute);

// app.get('/', (req, res) => {
//     res.send('welcome to main page')
// })

// app.listen(3000, () => {
//     console.log('server running on port 3000')
// })

//---------------------------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const app = express();

// app.get('/error', (req, res, next) => {
//     const error = new Error('something went wrong');
//     next(error);
// })

// app.get('/', (req, res) => {
//     res.send('welcome tomain page');
// })

// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({
//         error: true,
//         message: err.message
//     })
// })

// app.listen(3000, () => {
//     console.log('server running on port 3000')
// })


//---------------------------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const app = express();

// app.use(express.json());

// const VALID_USERNAME = 'admin';
// const VALID_PASSWORD = 'nimda';

// let isAuthenticated = false;

// app.post('/login', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     if (username === VALID_USERNAME && password === VALID_PASSWORD) {
//         isAuthenticated = true;
//         res.json({
//             message: 'login sucessfully'
//         })
//     } else {
//         res.status(401).json({
//             message: 'invalid credentials'
//         })
//     }
// });

// app.post('/logout', (req, res) => {
//     isAuthenticated = false;
//     res.json({
//         message: 'logged out sucessfully'
//     })
// });

// function authenticate(req, res, next) {
//     if (isAuthenticated) {
//         next();
//     } else {
//         res.status(403).json({
//             message: 'access denied.please log in'
//         })
//     }
// }

// app.get('/protected', authenticate, (req, res) => {
//     res.json({
//         message: 'welcome to protected route'
//     })
// })

// app.get('/', (req, res) => {
//     res.send('Welcome to the main page!');
// })


// app.listen(3000, () => {
//     console.log('server running on port 3000');
// });



//---------------------------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const session = require('express-session');
// const app = express();


// app.use(express.json());
// app.use(express.urlencoded({ extended: true })); 

// app.use(session({
//     secret: 'youaresecret',
//     resave: false,
//     saveUninitialized: true,
//     cookie: {
//         secure: false,
//         httpOnly: true,
//         sameSite: 'strict'
//     }
// }));


// const VALID_USERNAME = 'admin';
// const VALID_PASSWORD = 'nimda';

// app.post('/login', (req, res) => {
//     const username = req.body.username;
//     const password = req.body.password;

//     if (username === VALID_USERNAME && password === VALID_PASSWORD) {
//         req.session.isAuthenticated = true;
//         res.json({
//             message: 'you are logged in successfully',
//         })
//     } else {
//         res.status(401).json({
//             message: 'invalid credentials'
//         })
//     }
// })

// app.post('/logout', (req, res) => {
//     req.session.destroy((err) => {
//         if (err) {
//             return res.status(500).json({
//                 message: 'logout failed'
//             })
//         } else {
//             res.json({
//                 message: 'logout successfully'
//             });
//         }
//     })
// })

// function authorize(req, res, next) {
//     if (req.session.isAuthenticated) {
//         next();
//     } else {
//         res.status(403).json({
//             message: 'access denied please login'
//         })
//     }
// }

// app.get('/protected', authorize, (req, res) => {
//     res.json('welcome to protected route');
// })

// app.listen(3000, () => {
//     console.log('server running on port 3000');
// })


//---------------------------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const mongoose = require('mongoose');
// const bodyParser = require('body-parser');
// const userRoute = require('./routes/userRoute');
// const app = express();

// app.use(bodyParser.json());

// mongoose.connect()
// .then(() => console.log('Connected to mongoDB'))
// .catch((err) => console.error('Error connecting to mongoDB: ' + err))

// app.use('/api/users', userRoute);

// app.listen(3000, () => {
//     console.log('Server running on port 3000');
// })

//---------------------------------------------------------------------------------------------------------------------------------------------------

const express = require('express');
const app = express();

app.use(express.json());

function validate(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    if (!username || !password) {
        return res.status(400).json({
            error: 'Username and Password are required'
        })
    }
    next();
}

function authenticate(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    if (username === 'admin' && password === 'nimda') {
        req.user = { id: 1, username }; // Attach user info to the request object
        next();
    }else{
      return res.status(401).json({
        error: 'Invalid credentials'
    })}
}

function processRequest(req, res) {
    res.json({
        message: 'request process successfully',
        user: req.user
    })
}

app.post('/login', validate, authenticate, processRequest);

app.use((err, req, res, next) => {
    console.error(err.stack);
    if (!res.headersSent) { // Check to prevent duplicate responses
        res.status(500).json({ error: 'Something went wrong!' });
    }
});

app.listen(3000, () => {
    console.log('server running on port 3000');
})

//---------------------------------------------------------------------------------------------------------------------------------------------------




//---------------------------------------------------------------------------------------------------------------------------------------------------





//---------------------------------------------------------------------------------------------------------------------------------------------------






//---------------------------------------------------------------------------------------------------------------------------------------------------







//---------------------------------------------------------------------------------------------------------------------------------------------------






//---------------------------------------------------------------------------------------------------------------------------------------------------





//---------------------------------------------------------------------------------------------------------------------------------------------------






//---------------------------------------------------------------------------------------------------------------------------------------------------




//---------------------------------------------------------------------------------------------------------------------------------------------------