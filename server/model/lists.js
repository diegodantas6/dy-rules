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

Meteor.methods({

  getList: function() {

    return Lists.find({});

  },

  addList: function(list) {

    if (list.name === "aaa") {

      throw new Meteor.Error( 500, 'There was an error processing your request' );

    } else {
      list.owner = Meteor.user()._id;

      return Lists.insert(list);
    }

  },

  removeList: function(listId) {

    Todos.remove({
      listId: listId
    });

    Lists.remove({
      _id: listId
    });

  }

});
