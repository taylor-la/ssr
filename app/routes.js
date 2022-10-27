// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'juggling-balls-answer'



// Smartcard v5 routes


router.post('/applicant/v5/smartcard/upload', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var formatSmartcard = req.session.data['format-smartcard']

  // Check whether the variable matches a condition
  if (formatSmartcard == "camera"){
    // Send user to next page
    res.redirect('/applicant/v5/smartcard/camera-mobile')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v5/smartcard/upload')
  }

})

router.post('/applicant/v5/smartcard/confirmation', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewPhoto = req.session.data['passport-1']

  // Check whether the variable matches a condition
  if (reviewPhoto == "yes"){
    // Send user to next page
    res.redirect('/applicant/v5/smartcard/confirmation')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v5/smartcard/format')
  }

})

router.post('/applicant/v5/smartcard/desktop/confirmation', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewImage = req.session.data['passport-2']

  // Check whether the variable matches a condition
  if (reviewImage == "yes"){
    // Send user to next page
    res.redirect('/applicant/v5/smartcard/desktop/confirmation')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v5/smartcard/desktop/upload')
  }

})



// Doc selector v6

router.post('/applicant/v6/dpoa/', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var accessibility = req.session.data['accessibility']

  // Check whether the variable matches a condition
  if (accessibility == "no"){
    // Send user to next page
    res.redirect('/applicant/v6/offline')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v6/dpoa')
  }

})

router.post('/applicant/v6/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v6/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v6/address-postcode')
  }

})

router.post('/applicant/v6/save-selection', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v6/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v6/save-selection')
  }

})

router.post('/applicant/v6/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v6/no-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v6/2-photo-id')
  }

})

router.post('/applicant/v6/save-selection-2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v6/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v6/save-selection-2')
  }

})

router.post('/applicant/v6/no-poa-face', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var noPOA = req.session.data['no-poa']

  // Check whether the variable matches a condition
  if (noPOA == "online"){
    // Send user to next page
    res.redirect('/applicant/v6/dpoa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v6/no-poa-face')
  }

})




// Smartcard and doc selector v7


router.post('/applicant/v7/1-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var dpoa = req.session.data['dpoa']

  // Check whether the variable matches a condition
  if (dpoa == "no"){
    // Send user to next page
    res.redirect('/applicant/v7/poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v7/1-photo-id')
  }

})

router.post('/applicant/v7/address-postcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo1 = req.session.data['1-photo-id']

  // Check whether the variable matches a condition
  if (photo1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v7/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v7/address-postcode')
  }

})

router.post('/applicant/v7/2-photo-id', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v7/no-poa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v7/2-photo-id')
  }

})

router.post('/applicant/v7/step-2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var photo2 = req.session.data['2-photo-id']

  // Check whether the variable matches a condition
  if (photo2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v7/no-photo-id')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v7/step-2')
  }

})

router.post('/applicant/v7/no-poa-face', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var noPOA = req.session.data['no-poa']

  // Check whether the variable matches a condition
  if (noPOA == "online"){
    // Send user to next page
    res.redirect('/applicant/v7/dpoa')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v7/no-poa-face')
  }

})

router.post('/applicant/v7/smartcard-upload', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var formatSmartcard = req.session.data['format-smartcard']

  // Check whether the variable matches a condition
  if (formatSmartcard == "camera"){
    // Send user to next page
    res.redirect('/applicant/v7/smartcard-camera')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v7/smartcard-upload')
  }

})

router.post('/applicant/v7/preferred-name', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var reviewPhoto = req.session.data['passport-1']

  // Check whether the variable matches a condition
  if (reviewPhoto == "yes"){
    // Send user to next page
    res.redirect('/applicant/v7/preferred-name')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v7/smartcard-format')
  }

})


module.exports = router;
