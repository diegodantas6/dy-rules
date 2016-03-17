Meteor.publish("todos", function () {
  return Todos.find({
    $or: [
      {
        $and: [
          {owner: this.listId.userId},
          {owner: {$exists: true}}
        ]
      }
    ]
  });
});
