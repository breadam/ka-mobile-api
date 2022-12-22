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
    instance = new KolayAsistanMobileApi.DeviceApi();
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

  describe('DeviceApi', function() {
    describe('deviceControllerAddNewDevice', function() {
      it('should call deviceControllerAddNewDevice successfully', function(done) {
        //uncomment below and update the code to test deviceControllerAddNewDevice
        //instance.deviceControllerAddNewDevice(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deviceControllerDelete', function() {
      it('should call deviceControllerDelete successfully', function(done) {
        //uncomment below and update the code to test deviceControllerDelete
        //instance.deviceControllerDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deviceControllerFindUserAllItems', function() {
      it('should call deviceControllerFindUserAllItems successfully', function(done) {
        //uncomment below and update the code to test deviceControllerFindUserAllItems
        //instance.deviceControllerFindUserAllItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deviceControllerFindUserItem', function() {
      it('should call deviceControllerFindUserItem successfully', function(done) {
        //uncomment below and update the code to test deviceControllerFindUserItem
        //instance.deviceControllerFindUserItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deviceControllerUpdate', function() {
      it('should call deviceControllerUpdate successfully', function(done) {
        //uncomment below and update the code to test deviceControllerUpdate
        //instance.deviceControllerUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
