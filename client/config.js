TelescopeConfig.siteUrl = 'mum'

Meteor.startup(function () {
  TelescopeConfig.title = 'My Site'
  TelescopeConfig.enableNotifications = true
  TelescopeConfig.enableUserLinks = true
  TelescopeConfig.enableCategories = true
  TelescopeConfig.backgroudColor = '#666'
  TelescopeConfig.telescope_routes(TelescopeConfig.siteUrl);
});


