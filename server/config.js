Meteor.startup(function () {
  TelescopeConfig.siteUrl = 'mum'
  TelescopeConfig.enableNotifications = true
  TelescopeConfig.telescope_routes_server(TelescopeConfig.siteUrl);
});


Accounts.onCreateUser(function (options, user) {
  usr = TelescopeConfig.extend_accounts_create_user(options, user);
  return usr;
});