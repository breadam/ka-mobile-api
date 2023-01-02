/**
 * Kolay Asistan Mobile API
 * Kolay Asistan mobile application api layer. Revision Date: 04.12.2022
 *
 * The version of the OpenAPI document: v1
 * Contact: ahmetyagibasan@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.KolayAsistanMobileApi);
  }
}(this, function(expect, KolayAsistanMobileApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new KolayAsistanMobileApi.UserCreateDTODeviceInfo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('UserCreateDTODeviceInfo', function() {
    it('should create an instance of UserCreateDTODeviceInfo', function() {
      // uncomment below and update the code to test UserCreateDTODeviceInfo
      //var instance = new KolayAsistanMobileApi.UserCreateDTODeviceInfo();
      //expect(instance).to.be.a(KolayAsistanMobileApi.UserCreateDTODeviceInfo);
    });

    it('should have the property uuid (base name: "uuid")', function() {
      // uncomment below and update the code to test the property uuid
      //var instance = new KolayAsistanMobileApi.UserCreateDTODeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property uniqueId (base name: "uniqueId")', function() {
      // uncomment below and update the code to test the property uniqueId
      //var instance = new KolayAsistanMobileApi.UserCreateDTODeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property buildId (base name: "buildId")', function() {
      // uncomment below and update the code to test the property buildId
      //var instance = new KolayAsistanMobileApi.UserCreateDTODeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property brand (base name: "brand")', function() {
      // uncomment below and update the code to test the property brand
      //var instance = new KolayAsistanMobileApi.UserCreateDTODeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property buildNumber (base name: "buildNumber")', function() {
      // uncomment below and update the code to test the property buildNumber
      //var instance = new KolayAsistanMobileApi.UserCreateDTODeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property bundleId (base name: "bundleId")', function() {
      // uncomment below and update the code to test the property bundleId
      //var instance = new KolayAsistanMobileApi.UserCreateDTODeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property deviceId (base name: "deviceId")', function() {
      // uncomment below and update the code to test the property deviceId
      //var instance = new KolayAsistanMobileApi.UserCreateDTODeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property deviceName (base name: "deviceName")', function() {
      // uncomment below and update the code to test the property deviceName
      //var instance = new KolayAsistanMobileApi.UserCreateDTODeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property manufacturer (base name: "manufacturer")', function() {
      // uncomment below and update the code to test the property manufacturer
      //var instance = new KolayAsistanMobileApi.UserCreateDTODeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property model (base name: "model")', function() {
      // uncomment below and update the code to test the property model
      //var instance = new KolayAsistanMobileApi.UserCreateDTODeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property systemName (base name: "systemName")', function() {
      // uncomment below and update the code to test the property systemName
      //var instance = new KolayAsistanMobileApi.UserCreateDTODeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property systemVersion (base name: "systemVersion")', function() {
      // uncomment below and update the code to test the property systemVersion
      //var instance = new KolayAsistanMobileApi.UserCreateDTODeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new KolayAsistanMobileApi.UserCreateDTODeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property androidId (base name: "androidId")', function() {
      // uncomment below and update the code to test the property androidId
      //var instance = new KolayAsistanMobileApi.UserCreateDTODeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property apiLevel (base name: "apiLevel")', function() {
      // uncomment below and update the code to test the property apiLevel
      //var instance = new KolayAsistanMobileApi.UserCreateDTODeviceInfo();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instance = new KolayAsistanMobileApi.UserCreateDTODeviceInfo();
      //expect(instance).to.be();
    });

  });

}));
