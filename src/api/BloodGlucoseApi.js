/**
 * Kolay Asistan Mobile API
 * Kolay Asistan mobile application api layer. Revision Date: 04.12.2022
 *
 * The version of the OpenAPI document: 0.0.3
 * Contact: ahmetyagibasan@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */


import ApiClient from "../ApiClient";
import BloodGlucoseDTO from '../model/BloodGlucoseDTO';

/**
* BloodGlucose service.
* @module api/BloodGlucoseApi
* @version 0.0.3
*/
export default class BloodGlucoseApi {

    /**
    * Constructs a new BloodGlucoseApi. 
    * @alias module:api/BloodGlucoseApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add
     * @param {module:model/BloodGlucoseDTO} bloodGlucoseDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BloodGlucoseDTO} and HTTP response
     */
    bloodGlucoseControllerCreateWithHttpInfo(bloodGlucoseDTO) {
      let postBody = bloodGlucoseDTO;
      // verify the required parameter 'bloodGlucoseDTO' is set
      if (bloodGlucoseDTO === undefined || bloodGlucoseDTO === null) {
        throw new Error("Missing the required parameter 'bloodGlucoseDTO' when calling bloodGlucoseControllerCreate");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BloodGlucoseDTO;
      return this.apiClient.callApi(
        '/blood-glucose', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add
     * @param {module:model/BloodGlucoseDTO} bloodGlucoseDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BloodGlucoseDTO}
     */
    bloodGlucoseControllerCreate(bloodGlucoseDTO) {
      return this.bloodGlucoseControllerCreateWithHttpInfo(bloodGlucoseDTO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * De
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    bloodGlucoseControllerDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling bloodGlucoseControllerDelete");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/blood-glucose/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * De
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    bloodGlucoseControllerDelete(id) {
      return this.bloodGlucoseControllerDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find User All Items
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    bloodGlucoseControllerFindUserAllItemsWithHttpInfo() {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/blood-glucose/findUserAllItems', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find User All Items
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    bloodGlucoseControllerFindUserAllItems() {
      return this.bloodGlucoseControllerFindUserAllItemsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find User Item
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    bloodGlucoseControllerFindUserItemWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling bloodGlucoseControllerFindUserItem");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;
      return this.apiClient.callApi(
        '/blood-glucose/findUserItem/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find User Item
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    bloodGlucoseControllerFindUserItem(id) {
      return this.bloodGlucoseControllerFindUserItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update
     * @param {Number} id 
     * @param {module:model/BloodGlucoseDTO} bloodGlucoseDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/BloodGlucoseDTO} and HTTP response
     */
    bloodGlucoseControllerUpdateWithHttpInfo(id, bloodGlucoseDTO) {
      let postBody = bloodGlucoseDTO;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling bloodGlucoseControllerUpdate");
      }
      // verify the required parameter 'bloodGlucoseDTO' is set
      if (bloodGlucoseDTO === undefined || bloodGlucoseDTO === null) {
        throw new Error("Missing the required parameter 'bloodGlucoseDTO' when calling bloodGlucoseControllerUpdate");
      }

      let pathParams = {
        'id': id
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['bearer'];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = BloodGlucoseDTO;
      return this.apiClient.callApi(
        '/blood-glucose/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update
     * @param {Number} id 
     * @param {module:model/BloodGlucoseDTO} bloodGlucoseDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/BloodGlucoseDTO}
     */
    bloodGlucoseControllerUpdate(id, bloodGlucoseDTO) {
      return this.bloodGlucoseControllerUpdateWithHttpInfo(id, bloodGlucoseDTO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}
