// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'juggling-balls-answer'

router.post('/applicant/test/suitability/id-1', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var suitMobile = req.session.data['suit-mobile']

  // Check whether the variable matches a condition
  if (suitMobile == "no"){
    // Send user to next page
    res.redirect('/applicant/test/suitability/not-suitable')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/test/suitability/id-1')
  }

})

router.post('/applicant/test/suitability/id-2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var id1 = req.session.data['photo-id-1']

  // Check whether the variable matches a condition
  if (id1 == "none"){
    // Send user to next page
    res.redirect('/applicant/test/suitability/not-suitable')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/test/suitability/id-2')
  }

})

router.post('/applicant/test/suitability/poa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var id2 = req.session.data['photo-id-2']

  // Check whether the variable matches a condition
  if (id2 == "none"){
    // Send user to next page
    res.redirect('/applicant/test/suitability/not-suitable')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/test/suitability/poa')
  }

})

router.post('/applicant/test/suitability/poa-format', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/test/suitability/not-suitable')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/test/suitability/poa-format')
  }

})

router.post('/applicant/test/suitability/suitable', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poaFormat = req.session.data['suit-format']

  // Check whether the variable matches a condition
  if (poaFormat == "yes"){
    // Send user to next page
    res.redirect('/applicant/test/suitability/not-suitable')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/test/suitability/suitable')
  }

})


router.post('/applicant/test/one-time-passcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var mobileCorrect = req.session.data['mobile-3']

  // Check whether the variable matches a condition
  if (mobileCorrect == "yes"){
    // Send user to next page
    res.redirect('/applicant/test/one-time-passcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/test/update-mobile')
  }

})

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


router.post('/applicant/v5/profile/upload', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var formatSmartcard = req.session.data['format-smartcard']

  // Check whether the variable matches a condition
  if (formatSmartcard == "camera"){
    // Send user to next page
    res.redirect('/applicant/v5/profile/camera')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v5/profile/upload')
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


module.exports = router;
