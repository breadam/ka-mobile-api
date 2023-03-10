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
    instance = new KolayAsistanMobileApi.BloodPressureDTO();
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

  describe('BloodPressureDTO', function() {
    it('should create an instance of BloodPressureDTO', function() {
      // uncomment below and update the code to test BloodPressureDTO
      //var instance = new KolayAsistanMobileApi.BloodPressureDTO();
      //expect(instance).to.be.a(KolayAsistanMobileApi.BloodPressureDTO);
    });

    it('should have the property measurementDate (base name: "measurementDate")', function() {
      // uncomment below and update the code to test the property measurementDate
      //var instance = new KolayAsistanMobileApi.BloodPressureDTO();
      //expect(instance).to.be();
    });

    it('should have the property small (base name: "small")', function() {
      // uncomment below and update the code to test the property small
      //var instance = new KolayAsistanMobileApi.BloodPressureDTO();
      //expect(instance).to.be();
    });

    it('should have the property big (base name: "big")', function() {
      // uncomment below and update the code to test the property big
      //var instance = new KolayAsistanMobileApi.BloodPressureDTO();
      //expect(instance).to.be();
    });

    it('should have the property pulse (base name: "pulse")', function() {
      // uncomment below and update the code to test the property pulse
      //var instance = new KolayAsistanMobileApi.BloodPressureDTO();
      //expect(instance).to.be();
    });

    it('should have the property position (base name: "position")', function() {
      // uncomment below and update the code to test the property position
      //var instance = new KolayAsistanMobileApi.BloodPressureDTO();
      //expect(instance).to.be();
    });

    it('should have the property period (base name: "period")', function() {
      // uncomment below and update the code to test the property period
      //var instance = new KolayAsistanMobileApi.BloodPressureDTO();
      //expect(instance).to.be();
    });

    it('should have the property hungry (base name: "hungry")', function() {
      // uncomment below and update the code to test the property hungry
      //var instance = new KolayAsistanMobileApi.BloodPressureDTO();
      //expect(instance).to.be();
    });

    it('should have the property tag (base name: "tag")', function() {
      // uncomment below and update the code to test the property tag
      //var instance = new KolayAsistanMobileApi.BloodPressureDTO();
      //expect(instance).to.be();
    });

  });

}));
