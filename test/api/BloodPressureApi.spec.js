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
    instance = new KolayAsistanMobileApi.BloodPressureApi();
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

  describe('BloodPressureApi', function() {
    describe('bloodPressureControllerCreate', function() {
      it('should call bloodPressureControllerCreate successfully', function(done) {
        //uncomment below and update the code to test bloodPressureControllerCreate
        //instance.bloodPressureControllerCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bloodPressureControllerDelete', function() {
      it('should call bloodPressureControllerDelete successfully', function(done) {
        //uncomment below and update the code to test bloodPressureControllerDelete
        //instance.bloodPressureControllerDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bloodPressureControllerFindUserAllItems', function() {
      it('should call bloodPressureControllerFindUserAllItems successfully', function(done) {
        //uncomment below and update the code to test bloodPressureControllerFindUserAllItems
        //instance.bloodPressureControllerFindUserAllItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bloodPressureControllerFindUserItem', function() {
      it('should call bloodPressureControllerFindUserItem successfully', function(done) {
        //uncomment below and update the code to test bloodPressureControllerFindUserItem
        //instance.bloodPressureControllerFindUserItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('bloodPressureControllerUpdate', function() {
      it('should call bloodPressureControllerUpdate successfully', function(done) {
        //uncomment below and update the code to test bloodPressureControllerUpdate
        //instance.bloodPressureControllerUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
