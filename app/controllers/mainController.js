// const dataMapper = require('../dataMapper.js');
const connection = require('../connection.js');
const Vendor = require('../models/vendor')


const mainController = {
  homePage: (req, res) => {
    res.render('home');
  },
  errorPage: (req, res) => {
    res.status(404).render('404');
  },

  // https://stackoverflow.com/questions/44004418/node-js-async-await-using-with-mysql
  placePage: async (req, res) => {
     const places = connection.query('SELECT * FROM place', function (error, places,) {
      if (error) throw error;
      res.render('place', {
        places,
      });      
      // console.log(places);
    });
  },
  // vendorPage: async (req, res) => {
  //   const places = connection.query('SELECT * FROM vendor ORDER BY name' , function (error, vendors,) {
  //    if (error) throw error;
  //    res.render('vendor', {
  //      vendors,
  //    });      
  //   //  console.log(vendors);
  //   });
  // }
  vendorPage: async (req, res) => {
    const vendors = await Vendor.findAll();
     
     res.render('vendor', {
       vendors,
     });      
     console.log(vendors);
},
};
module.exports = mainController;
