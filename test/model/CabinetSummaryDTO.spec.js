/**
 * Kolay Asistan Mobile API
 * Kolay Asistan mobile application api layer. Revision Date: 25.04.2023
 *
 * The version of the OpenAPI document: v4.0.0.3
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
    instance = new KolayAsistanMobileApi.CabinetSummaryDTO();
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

  describe('CabinetSummaryDTO', function() {
    it('should create an instance of CabinetSummaryDTO', function() {
      // uncomment below and update the code to test CabinetSummaryDTO
      //var instance = new KolayAsistanMobileApi.CabinetSummaryDTO();
      //expect(instance).to.be.a(KolayAsistanMobileApi.CabinetSummaryDTO);
    });

    it('should have the property activeMedicineCount (base name: "activeMedicineCount")', function() {
      // uncomment below and update the code to test the property activeMedicineCount
      //var instance = new KolayAsistanMobileApi.CabinetSummaryDTO();
      //expect(instance).to.be();
    });

    it('should have the property passiveMedicineCount (base name: "passiveMedicineCount")', function() {
      // uncomment below and update the code to test the property passiveMedicineCount
      //var instance = new KolayAsistanMobileApi.CabinetSummaryDTO();
      //expect(instance).to.be();
    });

    it('should have the property expiredMedicineCount (base name: "expiredMedicineCount")', function() {
      // uncomment below and update the code to test the property expiredMedicineCount
      //var instance = new KolayAsistanMobileApi.CabinetSummaryDTO();
      //expect(instance).to.be();
    });

  });

}));
