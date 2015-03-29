// Provide defaults for Meteor.settings
//
// To configure your own Twitter keys, see:
//   https://github.com/meteor/meteor/wiki/Configuring-Twitter-in-Local-Market
if (typeof Meteor.settings === 'undefined')
  Meteor.settings = {};

_.defaults(Meteor.settings, {
  facebook: {
    appId: "1574575329491239", 
    secret: "edfe46c00859052cea66fe11d52554be"
  }
});

ServiceConfiguration.configurations.upsert(
  { service: "facebook" },
  {
    $set: {
      appId: Meteor.settings.facebook.appId,
      secret: Meteor.settings.facebook.secret
    }
  }
);
