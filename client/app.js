var app = angular.module('rules', ['angular-meteor']);

app.controller('ListCtrl', function() {
    
    //this.list = [{'name': 'Diego 1'},{'name': 'Diego 2'}];
    
    this.list = Lists.find();
    
});
