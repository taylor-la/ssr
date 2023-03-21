// ES6 or Vanilla JavaScript

if (window.location.href.indexOf('dashboard') > 0) {
    $('a.nhsuk-account-navigation__link').removeClass("nhsuk-account-navigation__link__current");
    $('a.nhsuk-account-navigation__link[href$="/v8/dashboard"]').addClass("nhsuk-account-navigation__link__current");
  }

  if (window.location.href.indexOf('all-applications') > 0) {
    $('a.nhsuk-account-navigation__link').removeClass("nhsuk-account-navigation__link__current");
    $('a.nhsuk-account-navigation__link[href$="/v8/all-applications"]').addClass("nhsuk-account-navigation__link__current");
  }

  if (window.location.href.indexOf('settings') > 0) {
    $('a.nhsuk-account-navigation__link').removeClass("nhsuk-account-navigation__link__current");
    $('a.nhsuk-account-navigation__link[href$="/v8/settings"]').addClass("nhsuk-account-navigation__link__current");
  }

  if (window.location.href.indexOf('help') > 0) {
    $('a.nhsuk-account-navigation__link').removeClass("nhsuk-account-navigation__link__current");
    $('a.nhsuk-account-navigation__link[href$="/v8/help"]').addClass("nhsuk-account-navigation__link__current");
  }
  