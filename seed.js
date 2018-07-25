const { db } = require('./server/db')
const User = require('./server/models/')
const Restroom = require('./server/models/')
const users = [
  {
      firstName: "Adnan",
      lastName: "Adrian",
      email: "adnan@adrian.com",
  },
  {
      firstName: "Ali",
      lastName: "Aftab",
      email: "ali@aftab.com",
  },
  {
    
      firstName: "Aaron",
      lastName: "Whitsit",
      email: "aaron@whitsit.com",
  },
  {
 
      firstName: "Prince",
      lastName: "Donkor",
      email: "prince@donkor.com",
  },
  {
  
      firstName: "Gini",
      lastName: "Salami",
      email: "gini@salami.com",
  },
  {
  
    firstName: "Maureen",
    lastName: "Llamas",
    email: "mau@llamas.com",
  },
  {
  
    firstName: "Teppie",
    lastName: "Aquino",
    email: "teppie@aquino.com",
  },
  {
    id: 8,
    firstName: "Michael",
    lastName: "Lin",
    email: "michael@lin.com",
  },
  {
    firstName: "Stephen",
    lastName: "Chow",
    email: "stephen@chow.com",
  },
  {
    id: 10,
    firstName: "Synuhe",
    lastName: "Uribe",
    email: "synuhe@uribe.com",
  },
  {
    id: 11,
    firstName: "Graham",
    lastName: "Johnson",
    email: "graham@johnson.com",
  },
  {
    firstName: "Francisco",
    lastName: "Huergo",
    email: "francisco@huergo.com",
  }
]
const restrooms = [{
 
  mainImgUrl: "http://mostfinedup.club/wp-content/uploads/2017/10/mcdonalds-bathroom-bathroom-mcdonalds-bathroom-policy.jpg",
  name: "McDonald's",
  address: "1560 Broadway, New York, NY 10036",
  hours: ["Open 24 hours"],
  waitTime: "5 minutes",
  phone: 2129218900,
  menu: "https://www.mcdonalds.com/us/en-us/full-menu.html",
  free: true
},
{
  mainImgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/11/da/36/c7/photo2jpg.jpg",
  name: "TGI Fridays",
  address: "147 W 46th St. New York, NY 10036",
  hours: ["Mon 11:00 am - 12:00 am",
          "Tue 11:00 am - 12:00 am",
          "Wed 11:00 am - 12:00 am",
          "Thu 11:00 am - 12:00 am",
          "Fri 11:00 am - 2:00 am",
          "Sat 11:00 am - 2:00 am",
          "Sun 11:00 am - 12:00 am"],
  waitTime: ["No wait time"],
  phone: 2129447352,
  menu: "https://www.tgifridays.com/menu",
  free: false
},
{
  mainImgUrl: "https://wasfaa.org/b/wp-content/uploads/2012/12/Starbucks-Bathroom.jpg",
  name: "Starbucks",
  address: "1535 Broadway, New York, NY 10036",
  hours: ["Mon 6:00 am - 8:00 pm",
          "Tue 6:00 am - 8:00 pm",
          "Wed 6:00 am - 10:00 pm",
          "Thu 6:00 am - 9:00 pm",
          "Fri 6:00 am - 9:00 pm",
          "Sat 6:00 am - 10:00 pm",
          "Sun 6:00 am - 8:00 pm"],
  waitTime: "20 minutes",
  phone: 2123981900,
  menu: "https://www.starbucks.com/menu",
  free: true
},
{
  mainImgUrl: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,w_321/v1/amc-cdn/general/img/4.2_tu_restroom_promo-217.jpg",
  name: "AMC Empire 25",
  address: "234 W 42nd St. New York, NY 10036",
  hours: ["10:00 am - 12:00 am"],
  waitTime: "No wait time",
  phone: 2123982597,
  menu: "https://www.amctheatres.com/food-and-drink",
  free: false
},
{
  mainImgUrl: "https://s3-media2.fl.yelpcdn.com/bphoto/2UGPyoR2dosOTaYnDb9TOQ/o.jpg",
  name: "Olive Garden Italian Restaurant",
  address: "2 Times Sq. New York, NY 10036",
  hours: ["Mon 11:00 am - 11:00 pm",
          "Tue 11:00 am - 11:00 pm",
          "Wed 11:00 am - 11:00 pm",
          "Thu 11:00 am - 11:00 pm",
          "Fri 11:00 am - 12:00 am",
          "Sat 11:00 am - 12:00 am",
          "Sun 11:00 am - 11:00 pm"],
  waitTime: "No wait time",
  phone: 2123333254,
  menu: "https://www.yelp.com/menu/olive-garden-italian-restaurant-new-york-5/lunch",
  free: false
},
{
  mainImgUrl: "http://blog.etundra.com/wp-content/Media/2015/07/restroom-bathroom-nice-interior.png",
  name: "Junior's Cheesecake",
  address: "1515 Broadway, New York, NY 10036",
  hours: ["Mon 6:30 am - 12:00 am",
          "Tue 6:30 am - 12:00 am",
          "Wed 6:30 am - 12:00 am",
          "Thu 6:30 am - 12:00 am",
          "Fri 6:30 am - 1:00 am",
          "Sat 6:30 am - 1:00 am",
          "Sun 6:30 am - 11:00 pm"],
  waitTime: "5 minutes",
  phone: 2123022000,
  menu: "https://www.yelp.com/menu/juniors-cheesecake-new-york-3",
  free: false
},
{
  mainImgUrl: "https://i.pinimg.com/236x/83/f2/f1/83f2f11e5117a1fe472b97a90893928d--barn-bathroom-gold-bathroom.jpg",
  name: "Carmine’s Italian Restaurant",
  address: "200 W 44th St. New York, NY 10036",
  hours: ["Mon 11:30 am - 11:30 pm",
          "Tue 11:30 am - 12:00 am",
          "Wed 11:30 am - 12:00 am",
          "Thu 11:30 am - 12:00 am",
          "Fri 11:30 am - 12:00 am",
          "Sat 11:30 am - 12:00 am",
          "Sun 11:30 am - 11:30 pm"],
  waitTime: "5 minutes",
  phone: 2122213800,
  menu: "https://www.yelp.com/menu/carmines-italian-restaurant-new-york",
  free: false
},
{
  mainImgUrl: "https://s3-media1.fl.yelpcdn.com/bphoto/1zmYv4Pfet2aeJo38uCyKw/ls.jpg",
  name: "Patzeria Perfect Pizza",
  address: "231 W 46th St. New York, NY 10036",
  hours: ["Mon 7:00 am - 12:00 am",
          "Tue 7:00 am - 12:00 am",
          "Wed 7:00 am - 12:00 am",
          "Thu 7:00 am - 12:00 am",
          "Fri 7:00 am - 1:00 am",
          "Sat 7:00 am - 1:00 am",
          "Sun 7:00 am - 12:00 am"],
  waitTime: "10 minutes",
  phone: 2125757646,
  menu: "https://www.yelp.com/menu/patzeria-perfect-pizza-new-york",
  free: false
},
{
  mainImgUrl: "http://themeparkuniversity.com/wp-content/uploads/2013/04/hrp060508-186.jpg",
  name: "Hard Rock Cafe",
  address: "1501 Broadway, New York, NY 10036",
  hours: ["Mon 11:00 am - 12:30 am",
          "Tue 11:00 am - 12:30 am",
          "Wed 11:00 am - 12:30 am",
          "Thu 11:00 am - 12:30 am",
          "Fri 11:00 am - 1:30 am",
          "Sat 8:00 am - 10:00 am | 11:00 am - 1:30 pm",
          "Sun 8:00 am - 10:00 am | 11:00 am - 12:30 am"],
  waitTime: "5 minutes",
  phone: 2123433355,
  menu: "http://www.hardrock.com/cafe-menu",
  free: false
},
{
  mainImgUrl: "https://media-cdn.tripadvisor.com/media/photo-s/0f/82/d6/3a/me-n-my-pals-in-jimmys.jpg",
  name: "Jimmy's Corner",
  address: "140 W 44th St. New York, NY 10036",
  hours: ["Mon 11:30 am - 4:00 am",
          "Tue 11:30 am - 4:00 am",
          "Wed 11:30 am - 4:00 am",
          "Thu 11:30 am - 4:00 am",
          "Fri 11:30 am - 4:00 am",
          "Sat 12:30 pm - 4:00 am",
          "Sun 3:30 pm - 4:00 am"],
  waitTime: "5 minutes",
  phone: 2122219510,
  menu: "Unavailable",
  free: false
}
]
const seed = () =>
  Promise.all(restrooms.map(restroom =>
    Restroom.create(restroom))
  )
  .then(() =>
  Promise.all(users.map(user =>
    User.create(user))
  ));
const main = () => {
  console.log('Syncing db...');
  db.sync({ force: true })
    .then(() => {
      console.log('Seeding databse...');
      return seed();
    })
    .catch(err => {
      console.log('Error while seeding');
      console.log(err.stack);
    })
    .then(() => {
      db.close();
      return null;
    });
};
main();