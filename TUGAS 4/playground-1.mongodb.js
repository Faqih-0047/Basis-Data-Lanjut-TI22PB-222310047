/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('rentalfilm');

// db.createCollection("Country")

// db.country.insertMany([{
//     id : 1,
//     country : "Indonesia",
//     LastUpdate : new Date()
// }])

// db.createCollection("city")

// db.city.insertMany([{
//     id : 1,
//     countryId : 1,
//     city : "Bogor",
//     LastUpdate : new Date()
// }])

// db.createCollection("language")

// db.language.insertMany([{
//     id : 1,
//     name : "Bahasa Indonesia",
//     LastUpdate : new Date()
// }])

// db.createCollection("address")

// db.address.insertMany([{
//     id : 1,
//     cityId : "1",
//     address : "Cicurug,Sukabumi",
//     address2 : "Cigombong,Kab.Bogor",
//     district : "Bogor",
//     postal_code : "16740",
//     phone :  "0812345678",
//     LastUpdate : new Date()
// }])

// db.createCollection("store")

// db.store.insertMany([{
//     id : 1,
//     addressId : 1,
//     LastUpdate : new Date()
// }])

// db.createCollection("actor")

// db.actor.insertMany([{
//     id : 1,
//     FirstName : "Siti",
//     LastName : "Rohmah",
//     LastUpdate : new Date()
// }])

// db.createCollection("film")

// db.film.insertMany([{
//     id : 1,
//         title : "The Avengers",
//         description : "Film tentang pahlawan super",
//         realease_year : 2012,
//         LaanguageId : 1,
//         rental_duration : 3,
//         rental_date : 0.99,
//         length : 143,
//         replacement_cost : 19.99,
//         rating : "PG-13",
//         last_update : new Date()
// }])

// db.film.insertMany([
//     {
//       id: 2,
//       title: "Racing",
//       description: "Film tentang balapan mobil",
//       realease_year: 2018,
//       LaanguageId: 1,
//       rental_duration: 4,
//       rental_date: 1.99,
//       length: 120,
//       replacement_cost: 17.99,
//       rating: "PG",
//       last_update: new Date()
//     },
//     {
//       id: 3,
//       title: "Hunting",
//       description: "Film tentang petualangan berburu",
//       realease_year: 2020,
//       LaanguageId: 1,
//       rental_duration: 5,
//       rental_date: 2.99,
//       length: 135,
//       replacement_cost: 20.00,
//       rating: "R",
//       last_update: new Date()
//     }
//   ])

// db.createCollection("category")
// db.category.insertMany([{
//     id : 1,
//     name : "Action",
//     last_update : new Date()
// }])

// db.createCollection("film_category")
// db.film_category.insertMany([{
//     id : 1,
//     filmId : 1,
//     categoryId : 1,
//     last_update : new Date()
// }])

// db.createCollection("inventory")
// db.inventory.insertMany([{
//     id : 1,
//     filmId : 1,
//     storeId : 1,
//     last_update : new Date()
// }])

// db.createCollection("customer")
// db.customer.insertMany([{
//     id : 1,
//     addressId : 1,
//     first_name : "Jane",
//     last_name : "Doe",
//     email : "janedoe@gmail.com",
//     address_id : 1,
//     active : true,
//     create_date : new Date(),
//     last_update : new Date()
// }])

// db.createCollection("staff")
// db.staff.insertMany([{
//     id : 1,
//     addressId : 1,
//     storeId : 1,
//     first_name : "John",
//     last_name : "Doe",
//     last_update : new Date()
// }])

// db.createCollection("rental")
// db.rental.insertMany([{
//     id : 1,
//     rental_date : new Date(),
//     inventory_id : 1,
//     customer_id : 1,
//     return_date : new Date(),
//     staff_id : 1,
//     last_update : new Date()
// }])

// db.createCollection("payment")
// db.payment.insertMany([{
//     id : 1,
//     rentalId : 1,
//     customerId : 1,
//     inventoryId : 1,
//     rentalDate : new Date(),
//     returnDate : new Date(),
//     LastUpdate : new Date()
// }])

// db.customer.insertMany([
//     {
//       id: 4,
//       addressId: 1,
//       first_name: "Faiz",
//       last_name: "Faqih Haidar",
//       email: "faizfaqihh@gmail.com",
//       active: true,
//       create_date: new Date(),
//       last_update: new Date()
//     },
//     {
//       id: 5,
//       addressId: 1,
//       first_name: "Asep",
//       last_name: "Ubed",
//       email: "asepubed@gmail.com",
//       active: false,
//       create_date: new Date(),
//       last_update: new Date()
//     }
//   ]);

// db.createCollection("movie_reviews", {
//     validator: {
//       $jsonSchema: {
//         bsonType: "object",
//         required: ["filmId", "review"],
//         properties: {
//           filmId: {
//             bsonType: "int",
//             description: "ID Film harus integer"
//           },
//           review: {
//             bsonType: "string",
//             minLength: 10,
//             description: "Review harus string dan minimal 10 karakter panjangnya"
//           },
//           rating: {
//             bsonType: "double",
//             description: "Rating harus berupa angka desimal (double)"
//           }
//         }
//       }
//     }
//   });


// db.movie_reviews.insertOne({
//     filmId: 1,
//     review: "Ini adalah film yang luar biasa dengan adegan aksi yang menakjubkan wow wow pokoknya kelazzzz.",
//     rating: 8.8
//   });
  
// db.movie_reviews.insertOne({
//     filmId: 1,
//     review: "Jelek",
//     rating: 1.5
//   });
  
// db.film.aggregate([
//     {
//       $lookup: {
//         from: "film_category",
//         localField: "id",
//         foreignField: "filmId",
//         as: "categories"
//       }
//     }
//   ]);
  
// db.rental.aggregate([
//     {
//       $lookup: {
//         from: "customer",
//         localField: "customer_id",
//         foreignField: "id",
//         as: "customer_details"
//       }
//     }
//   ]);
  

// db.customer.updateOne(
//     { id: 1 },
//     { $set: { purchaseScores: [78, 82, 90] } }
//   )
  

// db.customer.find()

// db.customer.find({last_name:"Ubed"})

// db.customer.find({first_name : {$in:["Jane", "Bob"]}})

// db.customer.find({first_name : {$nin:["Jane", "Bob"]}})

// db.customer.find({$and : [{first_name:"Jane"}, {email: "janedoe@gmail.com"}]})

// db.customer.find({$or : [{first_name:"Jane"}, {address_id: 1}]})

// db.customer.find({first_name: {$not: {$eq: "Faiz"}}})

// db.customer.find({email: {$exists:true}})

// db.customer.find({email: {$type: "string"}})

// db.customer.find({email: {$regex : /^b/,$options: 'm'}})

// db.customer.find().sort({id: 1})
// db.customer.find().sort({id: -1})

// db.customer.find().limit(1)

// db.customer.updateMany({first_name: "Faiz"}, {$unset: {email: "faizfaqihh@gmail.com"}})

// db.customer.updateMany({first_name : "Faiz"}, {$rename : {last_name : "Faqih Haidar"}})

// db.customer.updateMany({first_name : "Asep"}, {$set : {last_name : "Ubed"}})

// db.customer.find({ purchaseScores: { $elemMatch: { $gt: 80, $lt: 85 } } }).pretty()

// db.customer.updateOne( { id: 1 },{ $set: { purchaseScores: [70, 80, 90] } } )

// db.customer.updateOne( { id: 1 }, { $push: { purchaseScores: 100 } } )

// db.customer.updateOne( { id: 1 }, { $push: { purchaseScores: { $each: [160, 1600] } } } )

// db.customer.find({ id: 1 }, { purchaseScores: 1 }).pretty()

// db.Elem.updateOne({_id: 1}, { $pull: { results: 160 } })

// db.customer.updateOne( { id: 1 }, { $pull: { purchaseScores: 160 } } )

// db.Elem.updateOne( { _id: 1 }, { $addToSet: { results: 160 } } )

// #Tugas
// db.customer.find({first_name : {$in:["Faiz", "Asep"]}})

// db.customer.find({first_name : {$nin:["Jane", "Bob"]}})

// db.film.find({ title: { $regex: /G$/i } })

// db.customer.find().limit(2)

// db.film.find().sort({ title: 1 })

// db.createCollection("ArrTest")
// db.ArrTest.insertOne({
//     _id: 1,
//     values: [10, 20, 30]
//   })

// db.ArrTest.updateOne(
//     { _id: 1 },
//     { $push: { values: 40 } }
//   )

// db.ArrTest.updateOne(
//     { _id: 1 },
//     { $pull: { values: 20 } }
//   )

// db.ArrTest.updateOne(
//     { _id: 1 },
//     { $addToSet: { values: 50 } }
//   )
  

// db.film.createIndex({ title: 1, realease_year: 2012 })

// db.customer.createIndex({ email: "hashed" })

// db.customer.createIndex(
//     { last_name: 1 },
//     { partialFilterExpression: { active: true } }
//   )

db.film.aggregate([
    { $group: { _id: "$rating", total: { $sum: 1 }, total_length: { $sum: "$length" } } }
  ])
  

