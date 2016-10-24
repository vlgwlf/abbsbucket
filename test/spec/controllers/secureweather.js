'use strict';

describe('Controller: SecureweatherCtrl', function () {

  // load the controller's module
  beforeEach(module('abbsbucketApp'));

  var SecureweatherCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SecureweatherCtrl = $controller('SecureweatherCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(SecureweatherCtrl.awesomeThings.length).toBe(3);
  });
});
