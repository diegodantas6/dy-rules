Meteor.publish("lists", function () {
  return Lists.find({
    $or: [
      {
        $and: [
          {owner: this.userId},
          {owner: {$exists: true}}
        ]
      }
    ]
  });
});
