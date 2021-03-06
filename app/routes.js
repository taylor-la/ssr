// External dependencies
const express = require('express');

const router = express.Router();

// Add your routes here - above the module.exports line

// Run this code when a form is submitted to 'juggling-balls-answer'

router.post('/applicant/v4/suitability/id-1', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var suitMobile = req.session.data['suit-mobile']

  // Check whether the variable matches a condition
  if (suitMobile == "no"){
    // Send user to next page
    res.redirect('/applicant/v4/suitability/not-suitable')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v4/suitability/id-1')
  }

})

router.post('/applicant/v4/suitability/id-2', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var id1 = req.session.data['photo-id-1']

  // Check whether the variable matches a condition
  if (id1 == "none"){
    // Send user to next page
    res.redirect('/applicant/v4/suitability/not-suitable')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v4/suitability/id-2')
  }

})

router.post('/applicant/v4/suitability/poa', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var id2 = req.session.data['photo-id-2']

  // Check whether the variable matches a condition
  if (id2 == "none"){
    // Send user to next page
    res.redirect('/applicant/v4/suitability/not-suitable')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v4/suitability/poa')
  }

})

router.post('/applicant/v4/suitability/poa-format', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poa = req.session.data['poa']

  // Check whether the variable matches a condition
  if (poa == "none"){
    // Send user to next page
    res.redirect('/applicant/v4/suitability/not-suitable')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v4/suitability/poa-format')
  }

})

router.post('/applicant/v4/suitability/suitable', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var poaFormat = req.session.data['suit-format']

  // Check whether the variable matches a condition
  if (poaFormat == "yes"){
    // Send user to next page
    res.redirect('/applicant/v4/suitability/not-suitable')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v4/suitability/suitable')
  }

})


router.post('/applicant/v4/one-time-passcode', function (req, res) {

  // Make a variable and give it the value from 'how-many-balls'
  var mobileCorrect = req.session.data['mobile-3']

  // Check whether the variable matches a condition
  if (mobileCorrect == "yes"){
    // Send user to next page
    res.redirect('/applicant/v4/one-time-passcode')
  } else {
    // Send user to ineligible page
    res.redirect('/applicant/v4/update-mobile')
  }

})


module.exports = router;
