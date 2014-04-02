Meteor.startup(function () {
  TelescopeConfig.siteUrl = 'forum'
  TelescopeConfig.enableNotifications = true
  telescopeRoutesServer(TelescopeConfig.siteUrl);
});


Accounts.onCreateUser(function (options, user) {
  usr = extend_accounts_create_user(options, user);
  return usr;
});