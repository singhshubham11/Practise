// const mongoose = require('mongoose');

// const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
//     birthday: Date
// });

// const person = mongoose.model('mydetails', personSchema);

// mongoose.connect('mongodb+srv://kitesmaurya:shubham123@cluster0.sghep.mongodb.net/User')
//     .then(() => {
//         console.log('Connected to a database');

//         const newPerson = new person({
//             name: 'Shubham',
//             age: 27,
//             birthday: 16/12/1996
//         });

//         newPerson.save()
//             .then(() => console.log('Details saved'))
//             .catch(err => console.error('Error while saving: ' + err));
//     })
//     .catch(err => console.error('Error connecting to the database:', err));


//---------------------------------------------------------------------------------------------------------------------------------


// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema({
//     title: {type: String, required: true},
//     author: {type: String, required: true},
//     pages: {type: Number, default: 300}
// });

// const book = mongoose.model('bookdata', bookSchema);

// mongoose.connect('mongodb+srv://kitesmaurya:shubham123@cluster0.sghep.mongodb.net/library')
//     .then(() => {
//         console.log('Connected to database');

        // const bookdetails = new book({
        //     title: 'Harry Potter',
        //     author: 'James',
        // });

        // bookdetails.save()
        //     .then(() => console.log('Data is saved'))
        //     .catch((err) => console.error('Error While saving data: ', err));
    // })
    // .catch((err) => {
    //     console.error('Error connecting to database', err);
    // })

// book.findOne({author: 'James'})
// .then((data) => {console.log('Data is Fetched: ', data)})
// .catch(() => {console.error('Data is not Fetched: ', err)});

// book.find({})
// .then((data) => {console.log('Data is Fetched: ', data)})
// .catch(() => {console.error('Data is not Fetched: ', err)});

// book.findById('674594ea8410670c6a12e638')
// .then((data) => {console.log('Data is Fetched: ', data)})
// .catch(() => {console.error('Data is not Fetched: ', err)});


//---------------------------------------------------------------------------------------------------------------------------------


// const mongoose = require('mongoose');

// const bookSchema = new mongoose.Schema({
//     title: String,
//     author: String,
//     pages: Number
// });

// const book = mongoose.model('booksdata', bookSchema);

// mongoose.connect('mongodb+srv://kitesmaurya:shubham123@cluster0.sghep.mongodb.net/library2')
// .then(() => {console.log('Connected to database');

//     const books = [ { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', pages: 180 },
//                     { title: 'To Kill a Mockingbird', author: 'Harper Lee', pages: 281 }, 
//                     { title: '1984', author: 'George Orwell', pages: 328 }, 
//                     { title: 'The Catcher in the Rye', author: 'J.D. Salinger', pages: 214 }, 
//                     { title: 'Pride and Prejudice', author: 'Jane Austen', pages: 279 } ];

//                     book.insertMany(books)
//                     .then(() => {console.log('Saved in database successfully')})
//                     .catch((err) => {console.error('Data cannot be saved in database: ', err)})
// })
// .catch((err) => {console.error('Cannot connect to a database: ', err)});

// book.findByIdAndUpdate('6745afed474fac41b627df33', {pages: 330}, {new: true})
// .then((data) => {console.log('updated book: ', data)})
// .catch((err) => {console.log('error while updating: ', err)});

// book.findByIdAndDelete('6745afed474fac41b627df33')
// .then((data) => {console.log('Data delted Successfully: ', data)})
// .catch((err) => {console.error('File not found: ', err)});


//---------------------------------------------------------------------------------------------------------------------------------


// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     name: String,
//     age: Number,
// });

// userSchema.pre('save', function (next) {
//    if (!this.name) {
//     console.log('Name Cannot be empty');
//    } else {
//     next();
//    } 
// });

// userSchema.post('save', function(doc, next) {
//     console.log('user have been saved');
//     next();
// });
// const user = mongoose.model('userdatas', userSchema);

// mongoose.connect('mongodb+srv://kitesmaurya:shubham123@cluster0.sghep.mongodb.net/User')
// .then(() => {console.log('Connected to a database');

//     const insertData = new user({
//         name: 'Arjun',
//         age: 21
//     })

//     insertData.save()
//     .then(() => {console.log('Data saved')})
// })
// .catch((err) => {console.error('Error when connecting to database: ', err)});


//---------------------------------------------------------------------------------------------------------------------------------


// const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

// const userSchema = new mongoose.Schema({
//     userName: String,
//     password: String
// });

// userSchema.pre('save', async function(next){
//     if (!this.isModified('password')) {
//         return next();
//     }

//     try {
//         const hashpass = await bcrypt.hash(this.password, 10);
//         this.password = hashpass;
//         next();
//     } catch (error) {
//         next(error);
//     }

// });

// const user = mongoose.model('userdatas1', userSchema);

// mongoose.connect('mongodb+srv://kitesmaurya:shubham123@cluster0.sghep.mongodb.net/User1')
// .then(() => {console.log('Connected to a database');

//     const insertData = new user({
//         userName: 'Arjun',
//         password: 'Shubham123'
//     })

//     insertData.save()
//     .then(() => {console.log('Data saved')})
// })
// .catch((err) => {console.error('Error when connecting to database: ', err)});


//---------------------------------------------------------------------------------------------------------------------------------


// const mongoose = require('mongoose');

// const schoolSchema = new mongoose.Schema({
//     schoolName: String,
//     location: String
// });

// const studentSchema = new mongoose.Schema({
//     studentName: String,
//     age: Number,
//     school: {
//         type: mongoose.Schema.ObjectId,
//         ref: 'schools'
//     }
// });

// const School = mongoose.model('schools', schoolSchema);
// const Student = mongoose.model('students', studentSchema);

// mongoose.connect('mongodb+srv://kitesmaurya:shubham123@cluster0.sghep.mongodb.net/university')
// .then(async () => {
//     console.log('Connected to database');
//     const school = new School({
//         schoolName: 'hari',
//         location: 'mehdiptnam'
//     });

//     const savedSchool = await school.save();

//     const student = new Student({
//         studentName: 'prasad',
//         age: 14,
//         school: savedSchool._id
//     });

//     await student.save();

//     console.log('data saved sucessfully');
// })
// .catch((err) => {console.error('Error while conneting to database: ', err)});

// Student.find().populate('school')
// .then((data) => {console.log(data)});


//---------------------------------------------------------------------------------------------------------------------------------


// const mongoose = require('mongoose');
// const express = require('express');
// const schoolModel = require('./models/School');
// const studentModel = require('./models/Student');

// const app = express();

// app.use(express.json());

// mongoose.connect('mongodb+srv://kitesmaurya:shubham123@cluster0.sghep.mongodb.net/university1')
// .then(() => {console.log('Connected to database');})
// .catch((err) => {console.error('Error connecting to database: ', err);});

// app.post('/school',  async (req, res) => {
//     const {schoolName, location, principal} = req.body;

//     try {
//         const school = new schoolModel({schoolName, location, principal});
//         await school.save();
//         res.status(201).json(school);
//     } catch (error) {
//         res.status(400).json({error: error.message});
//     }
// });

// app.post('/student', async (req, res) => {
//     const {studentName, age, schoolid} = req.body;

//     try {
//         const student = new studentModel({studentName, age, school: schoolid});
//         await student.save();
//         res.status(201).json(student);
//     } catch (error) {
//         res.status(400).json({error: error.message});
//     }
// });

// app.get('/student', async (req, res) => {
//     try {
//         const students = await studentModel.find().populate('school')
//         res.status(200).json(students);
//     } catch (error) {
//         res.status(500).json({error: error.message});
//     }
// });

// app.listen(3000, () => {
//     console.log('server running on port 3000');
// });


//---------------------------------------------------------------------------------------------------------------------------------


// const mongoose = require('mongoose');

// const userSchema = new mongoose.Schema({
//     userName: String,
//     emailId: {type: String,
//         unique: true
//     }
// });

// const users = mongoose.model('userdatas1', userSchema);

// // Connect to the database
// mongoose.connect('mongodb+srv://kitesmaurya:shubham123@cluster0.sghep.mongodb.net/Users', { useNewUrlParser: true, useUnifiedTopology: true })
//     .then(async () => {
//         console.log('Connected to database');

        
//         const user1 = new users({
//             userName: 'bits',
//             emailId: 'kites@gmail.com'
//         });

//         const user2 = new users({
//             userName: 'tittu',
//             emailId: 'kites@gmail.com'
//         });

//         user1.save()
//             .then(() => console.log('user1 saved'))
//             .catch((err) => console.error('error: ', err));

//         user2.save()
//             .then(() => console.log('user2 saved'))
//             .catch((err) => console.error('error: ', err));
//     })
//     .catch((err) => console.error('Error connecting to database: ', err));


//---------------------------------------------------------------------------------------------------------------------------------


// const mongoose = require('mongoose');

// const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// personSchema.methods.sayHello = function () {
//     console.log(`hello my name is ${this.name}`);
// }

// const Person = mongoose.model('persons', personSchema);

// const person1 = new Person({
//     name: 'john',
//     age: 23
// });

// person1.sayHello();


//---------------------------------------------------------------------------------------------------------------------------------


// const mongoose = require('mongoose');

// const personSchema = new mongoose.Schema({
//     name: String,
//     age: Number
// });

// personSchema.statics.sayHello = function () {
//     console.log({age: {$gte: 18}});
// }

// const Person = mongoose.model('persons', personSchema);


// Person.sayHello();



//---------------------------------------------------------------------------------------------------------------------------------


// const mongoose = require('mongoose');

// const itemSchema = new mongoose.Schema({
//     name: String,
//     color: String
// });

// itemSchema.query.byColor = function (color) {
//     return this.where({color: color});
// }

// const Item = mongoose.model('Item', itemSchema);



// mongoose.connect('mongodb+srv://kitesmaurya:shubham123@cluster0.sghep.mongodb.net/yourDatabaseName')
//     .then(() => {
//         console.log('Connected to database');
        
        // Use insertMany to add multiple documents at once
        // const items = [
        //     { name: 'item1', color: 'red' },
        //     { name: 'item2', color: 'blue' },
        //     { name: 'item3', color: 'green' },
        //     { name: 'item4', color: 'yellow' },
        //     { name: 'item5', color: 'purple' }
        // ];

        // Item.insertMany(items)
        //     .then(() => console.log('Items inserted successfully'))
        //     .catch((err) => console.error('Error inserting items:', err));
    // })
    // .catch((err) => console.error('Error connecting to database:', err));

    // Item.find().byColor('red')
    // .then((data) => {console.log(data)})



//---------------------------------------------------------------------------------------------------------------------------------


// const mongoose = require('mongoose');
// const Book = require('./models/Book');
// const Author = require('./models/Author');

// mongoose.connect('mongodb+srv://kitesmaurya:shubham123@cluster0.sghep.mongodb.net/library')
// .then(async () => {console.log('Connected to database')
//   const authors = [
//     { title: "J.K. Rowling" },
//     { title: "George R.R. Martin" },
//     { title: "J.R.R. Tolkien" }
//   ];

//   try {
//     // Insert authors and check the result
//     const authorsResult = await Author.insertMany(authors);
//     console.log('Authors inserted:', authorsResult);

//     // Ensure authors are inserted and we can access insertedIds
//     if (!authorsResult || !authorsResult.insertedIds || authorsResult.insertedIds.length < 3) {
//       throw new Error('Failed to insert authors or insertedIds are empty');
//     }

//     // Insert books with authorId references
//     const books = [
//       { title: "Harry Potter and the Sorcerer's Stone", authorId: authorsResult.insertedIds[0] },
//       { title: "A Game of Thrones", authorId: authorsResult.insertedIds[1] },
//       { title: "The Hobbit", authorId: authorsResult.insertedIds[2] }
//     ];

//     await Book.insertMany(books);
//     console.log('Books inserted successfully');
//   } catch (err) {
//     console.log('Error:', err);
//   }
// })
// .catch((err) => {console.log('Error: ', err)});

// //AGGREGATE

// // async function getBookWithAuthors() {
// //     try {
// //         const bookWithAuthors = await Book.aggregate([
// //             {
// //                 $lookup: {
// //                     from: 'authors',
// //                     localField: 'authorId',
// //                     foreignField: '_id',
// //                     as: 'authorDetails'
// //                 }
// //             },
// //             {
// //                 $unwind: '$authorDetails'
// //             }            
// //         ]);
// //     } catch (error) {
// //         console.error('Error during aggregation: ', error);
// //     }
// // }

// // getBookWithAuthors();


//---------------------------------------------------------------------------------------------------------------------------------


