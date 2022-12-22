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
    instance = new KolayAsistanMobileApi.MedicineCabinetApi();
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

  describe('MedicineCabinetApi', function() {
    describe('cabinetControllerCreate', function() {
      it('should call cabinetControllerCreate successfully', function(done) {
        //uncomment below and update the code to test cabinetControllerCreate
        //instance.cabinetControllerCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cabinetControllerDelete', function() {
      it('should call cabinetControllerDelete successfully', function(done) {
        //uncomment below and update the code to test cabinetControllerDelete
        //instance.cabinetControllerDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cabinetControllerFindUserAllItems', function() {
      it('should call cabinetControllerFindUserAllItems successfully', function(done) {
        //uncomment below and update the code to test cabinetControllerFindUserAllItems
        //instance.cabinetControllerFindUserAllItems(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cabinetControllerFindUserItem', function() {
      it('should call cabinetControllerFindUserItem successfully', function(done) {
        //uncomment below and update the code to test cabinetControllerFindUserItem
        //instance.cabinetControllerFindUserItem(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('cabinetControllerUpdate', function() {
      it('should call cabinetControllerUpdate successfully', function(done) {
        //uncomment below and update the code to test cabinetControllerUpdate
        //instance.cabinetControllerUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
