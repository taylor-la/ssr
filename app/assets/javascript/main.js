// ES6 or Vanilla JavaScript

// v8 current link

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

  // v9 current link

if (window.location.href.indexOf('dashboard') > 0) {
  $('a.nhsuk-account-navigation__link-v9').removeClass("nhsuk-account-navigation__link__current-v9");
  $('a.nhsuk-account-navigation__link-v9[href$="/v9/dashboard"]').addClass("nhsuk-account-navigation__link__current-v9");
}

if (window.location.href.indexOf('all-applications') > 0) {
  $('a.nhsuk-account-navigation__link-v9').removeClass("nhsuk-account-navigation__link__current-v9");
  $('a.nhsuk-account-navigation__link-v9[href$="/v9/all-applications"]').addClass("nhsuk-account-navigation__link__current-v9");
}

if (window.location.href.indexOf('settings') > 0) {
  $('a.nhsuk-account-navigation__link-v9').removeClass("nhsuk-account-navigation__link__current-v9");
  $('a.nhsuk-account-navigation__link-v9[href$="/v9/settings"]').addClass("nhsuk-account-navigation__link__current-v9");
}

if (window.location.href.indexOf('help') > 0) {
  $('a.nhsuk-account-navigation__link-v9').removeClass("nhsuk-account-navigation__link__current-v9");
  $('a.nhsuk-account-navigation__link-v9[href$="/v9/help"]').addClass("nhsuk-account-navigation__link__current-v9");
}
  