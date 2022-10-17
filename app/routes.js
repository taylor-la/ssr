// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'juggling-balls-answer'


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


router.post('/applicant/test/profile/upload', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var formatSmartcard = req.session.data['format-smartcard']

  // Check whether the variable matches a condition
  if (formatSmartcard == "camera"){
    // Send user to next page
    res.redirect('/applicant/test/profile/camera')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/test/profile/upload')
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




module.exports = router;
