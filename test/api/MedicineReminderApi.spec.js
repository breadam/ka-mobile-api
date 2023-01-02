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
    instance = new KolayAsistanMobileApi.MedicineReminderApi();
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

  describe('MedicineReminderApi', function() {
    describe('reminderControllerCreate', function() {
      it('should call reminderControllerCreate successfully', function(done) {
        //uncomment below and update the code to test reminderControllerCreate
        //instance.reminderControllerCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reminderControllerDelete', function() {
      it('should call reminderControllerDelete successfully', function(done) {
        //uncomment below and update the code to test reminderControllerDelete
        //instance.reminderControllerDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reminderControllerFindUserAllItems', function() {
      it('should call reminderControllerFindUserAllItems successfully', function(done) {
        //uncomment below and update the code to test reminderControllerFindUserAllItems
        //instance.reminderControllerFindUserAllItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reminderControllerFindUserItem', function() {
      it('should call reminderControllerFindUserItem successfully', function(done) {
        //uncomment below and update the code to test reminderControllerFindUserItem
        //instance.reminderControllerFindUserItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('reminderControllerUpdate', function() {
      it('should call reminderControllerUpdate successfully', function(done) {
        //uncomment below and update the code to test reminderControllerUpdate
        //instance.reminderControllerUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));