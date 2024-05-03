// const dataMapper = require('../dataMapper.js');
const connection = require('../connection.js');
const Vendor = require('../models/vendor.js')
const Distribution = require('../models/distribution.js')
const VendorsData = require('../data/vendors.json');

const nodemailer = require("nodemailer");
require('dotenv').config();


const mainController = {
  homePage: (req, res) => {
    res.render('home');
  },
  
  aboutPage: (req, res) => {
    res.render('about');
  },

  contactPage: (req, res) => {
    // console.log(req.body);
    res.render('contact');
  },

  wherePage: (req, res) => {
    res.render('where');
  },

  sendMail: (req, res) => {
    const from = req.body.email;
    const message = req.body.message;

    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_SMTP,
      port: parseInt(process.env.MAIL_SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.MAIL_LOGIN,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: from,
      text: message,
      subject: "Demande d'informations CABAS Briéron",
      to: "vincent@dupreclos.ovh",
    }

    transporter.sendMail(mailOptions, function(error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email envoyé : " + info.response);
      }  
      res.redirect("/");
    })

    

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


  vendorPage: async (req, res) => {
    const vendors = await Vendor.findAll();
    
    res.render('vendor', {
      VendorsData,
    });      
    // console.log(VendorsData);
  },
  errorPage: (req, res) => {
    res.status(404).render('404');
  },
        
  distributionPage: async (req, res) => {
    const contracts = connection.query('SELECT * FROM contract INNER JOIN distribution ON contract.id=distribution.contractId WHERE date="2023-10-27 18:30:00";',
    function (error, contracts) {
      const dateFormat = {
        weekday: "long",
        // year: "numeric",
        month: "long",
        day: "numeric",
      };
      if (error) throw error;
      res.render('distribution', {
        contracts,
        dateFormat,
      });      
      //  console.log(Object.values(contracts));
      // console.log(contracts);
      //  console.log(contracts[0].name);
      console.log(contracts[0].date.toLocaleDateString('fr-FR', dateFormat));
    });
  },
  errorPage: (req, res) => {
    res.status(404).render('404');
  },
  
};
module.exports = mainController;
      