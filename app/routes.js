// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'juggling-balls-answer'
router.post('/applicant/v1/spinner-bank', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var checkPhotoBank = req.session.data['check-photo-bank']

  // Check whether the variable matches a condition
  if (checkPhotoBank == "yes"){
    // Send user to next page
    res.redirect('/applicant/v1/spinner-bank')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v1/take-photo-bank')
  }

})


router.post('/applicant/v1/spinner-eu-driving-back', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var checkPhotoEuDrivingBack = req.session.data['check-photo-eu-driving-back']

  // Check whether the variable matches a condition
  if (checkPhotoEuDrivingBack == "yes"){
    // Send user to next page
    res.redirect('/applicant/v1/spinner-eu-driving-back')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v1/take-photo-eu-driving-back')
  }

})


router.post('/applicant/v1/spinner-eu-driving-front', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var checkPhotoEuDrivingFront = req.session.data['check-photo-eu-driving-front']

  // Check whether the variable matches a condition
  if (checkPhotoEuDrivingFront == "yes"){
    // Send user to next page
    res.redirect('/applicant/v1/spinner-eu-driving-front')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v1/take-photo-eu-driving-front')
  }

})


router.post('/applicant/v1/spinner-passport', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var checkPhotoPassport = req.session.data['check-photo-passport']

  // Check whether the variable matches a condition
  if (checkPhotoPassport == "yes"){
    // Send user to next page
    res.redirect('/applicant/v1/spinner-passport')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v1/take-photo-passport')
  }

})


router.post('/applicant/v1/spinner-smartcard', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var checkPhotoSmartcard = req.session.data['check-photo-smartcard']

  // Check whether the variable matches a condition
  if (checkPhotoSmartcard == "yes"){
    // Send user to next page
    res.redirect('/applicant/v1/spinner-smartcard')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v1/take-photo-smartcard')
  }

})



router.post('/applicant/v1/spinner-passport-upload', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var checkUploadPassport = req.session.data['check-upload-passport']

  // Check whether the variable matches a condition
  if (checkUploadPassport == "yes"){
    // Send user to next page
    res.redirect('/applicant/v1/spinner-passport-upload')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v1/upload-photo-passport')
  }

})


router.post('/applicant/v1/take-photo-passport', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var formatPassport = req.session.data['format-passport']

  // Check whether the variable matches a condition
  if (formatPassport == "take-photo"){
    // Send user to next page
    res.redirect('/applicant/v1/take-photo-passport')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v1/upload-photo-passport')
  }

})


module.exports = router;
