// const tinderUser = new Object();

// const tinderUser = {}
// tinderUser.id = "1234ab";
// tinderUser.name ="chinatan";
// tinderUser.isloggedIn = false;

// // console.log(tinderUser); // { id: '1234ab', name: 'chinatan', isloggedIn: false }

// const regularUser = {
//     email : "some@gmail.com",
//     fullName : {
//         userName:{
//         firstName : "chinatan",
//         lastName : "kumar"
//         }
//     },
// }
// // console.log(regularUser.email);
// // console.log(regularUser.fullName?.userName.firstName);

// const obj1 ={1: "value1", 2: "value2"};
// const obj2 = {3: "value1", 4: "value2"};
// const obj4 = {5: "value3", 6: "value4"};
// // const obj3 = Object.assign(obj1, obj2); // merges obj1 and obj2 into obj1
// // const obj3 = Object.assign({} , obj1, obj2, obj4); // merges obj1 and obj2 into a new object
// const obj3 = {...obj1, ...obj2, ...obj4}; // merges obj1 and obj2 into a new object using spread operator
// // console.log(obj3); // { '1': 'value1', '2': 'value2', '3': 'value1', '4': 'value2', '5': 'value3', '6': 'value4' }

// const user = [
//     {
//         id  : "1234ab",
//         email: "user@example.com",
//     },
//      {
//         id  : "1234ab",
//         email: "user@example.com",
//     },
//      {
//         id  : "1234ab",
//         email: "user@example.com",
//     }
// ];

// user[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser)); // ['id', 'name', 'isloggedIn']
// console.log(Object.values(tinderUser)); // ['1234ab', 'chinatan', false]
// console.log(Object.entries(tinderUser)); // [ [ 'id', '1234ab' ], [ 'name', 'chinatan' ], [ 'isloggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty("id")); // true

// console.log(user[1].email); //

const course = {
    name: "JavaScript",
    price: 999,
    courseDetails: {
        author  : "Chinatan Kumar",
        duration: "3 months",
        topics: ["HTML", "CSS", "JavaScript", "React"]
    },
    isAvailable: true,
    courseUrl: "https://example.com/javascript-course",
    courseRating: 4.5,
    courseReviews: [
        {
            userId: "user1",
            review: "Great course!",
            rating: 5
        },
        {
            userId: "user2",
            review: "Very informative.",
            rating: 4
        }
    ],
    courseTags: ["web development", "programming", "JavaScript"]
};

// course.courseDetails

const {courseDetails, courseRating, courseReviews} = course; // destructuring
// console.log(courseDetails); // { author: 'Chinatan Kumar', duration: '3 months', topics: [ 'HTML', 'CSS', 'JavaScript', 'React' ] }
// console.log(courseRating); // 4.5
// console.log(courseReviews); // [ { userId: 'user1', review: 'Great course!', rating: 5 }, { userId: 'user2', review: 'Very informative.', rating: 4 } ]


const {courseDetails: courseInfo, courseRating: rating, courseReviews: reviews} = course; // destructuring with name change 
//console.log(courseInfo); //  { author: 'Chinatan Kumar', duration: '3 months', topics: [ 'HTML', 'CSS', 'JavaScript', 'React' ] }
// console.log(rating); // 4.5
// console.log(reviews); // [ { userId: 'user1', review: 'Great course!', rating: 5 }, { userId: 'user2', review: 'Very informative.', rating: 4 } ]

// {
//     "name": "JavaScript",
//     "price": 999,
//     "courseDetails": {
//         "author": "Chinatan Kumar",
//         "duration": "3 months",
//         "topics": [
//             "HTML",
//             "CSS",
//             "JavaScript",
//             "React"
//         ]
//     },
//     "isAvailable": true,    
// }

// {
//   "results": [
//     {
//       "gender": "female",
//       "name": {
//         "title": "Miss",
//         "first": "درسا",
//         "last": "کامروا"
//       },
//       "location": {
//         "street": {
//           "number": 6486,
//           "name": "شهید گلپایگانی"
//         },
//         "city": "اسلام‌شهر",
//         "state": "مازندران",
//         "country": "Iran",
//         "postcode": 62062,
//         "coordinates": {
//           "latitude": "18.6993",
//           "longitude": "39.0096"
//         },
//         "timezone": {
//           "offset": "+4:00",
//           "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
//         }
//       },
//       "email": "drs.khmrw@example.com",
//       "login": {
//         "uuid": "5d0aa81a-9a28-4dc5-8cb1-69da3297ea3f",
//         "username": "beautifulgorilla659",
//         "password": "postman",
//         "salt": "NlF2WtrY",
//         "md5": "fe0be605a9e34ae4486bf914a3254ff1",
//         "sha1": "2fac8fbc1240bc0495f1b9baee946a4fb655f4e2",
//         "sha256": "243ebb7de4d2ad1d4bec811d0c6ecf207b878d295b12b831349932367567be09"
//       },
//       "dob": {
//         "date": "1991-06-14T03:17:10.979Z",
//         "age": 33
//       },
//       "registered": {
//         "date": "2016-01-11T07:21:33.603Z",
//         "age": 9
//       },
//       "phone": "016-49629504",
//       "cell": "0988-577-9883",
//       "id": {
//         "name": "",
//         "value": null
//       },
//       "picture": {
//         "large": "https://randomuser.me/api/portraits/women/18.jpg",
//         "medium": "https://randomuser.me/api/portraits/med/women/18.jpg",
//         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/18.jpg"
//       },
//       "nat": "IR"
//     }
//   ],
//   "info": {
//     "seed": "27ba3394f1766ff8",
//     "results": 1,
//     "page": 1,
//     "version": "1.4"
//   }
// }