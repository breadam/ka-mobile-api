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


import ApiClient from "../ApiClient";
import ReminderDTO from '../model/ReminderDTO';

/**
* MedicineReminder service.
* @module api/MedicineReminderApi
* @version v1
*/
export default class MedicineReminderApi {

    /**
    * Constructs a new MedicineReminderApi. 
    * @alias module:api/MedicineReminderApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add
     * @param {module:model/ReminderDTO} reminderDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ReminderDTO} and HTTP response
     */
    reminderControllerCreateWithHttpInfo(reminderDTO) {
      let postBody = reminderDTO;
      // verify the required parameter 'reminderDTO' is set
      if (reminderDTO === undefined || reminderDTO === null) {
        throw new Error("Missing the required parameter 'reminderDTO' when calling reminderControllerCreate");
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
      let returnType = ReminderDTO;
      return this.apiClient.callApi(
        '/reminder', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Add
     * @param {module:model/ReminderDTO} reminderDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ReminderDTO}
     */
    reminderControllerCreate(reminderDTO) {
      return this.reminderControllerCreateWithHttpInfo(reminderDTO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Delete
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    reminderControllerDeleteWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling reminderControllerDelete");
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
        '/reminder/{id}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Delete
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    reminderControllerDelete(id) {
      return this.reminderControllerDeleteWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find User All Items
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    reminderControllerFindUserAllItemsWithHttpInfo() {
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
        '/reminder/findUserAllItems', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find User All Items
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    reminderControllerFindUserAllItems() {
      return this.reminderControllerFindUserAllItemsWithHttpInfo()
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find User Item
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    reminderControllerFindUserItemWithHttpInfo(id) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling reminderControllerFindUserItem");
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
        '/reminder/findUserItem/{id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Find User Item
     * @param {Number} id 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    reminderControllerFindUserItem(id) {
      return this.reminderControllerFindUserItemWithHttpInfo(id)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update
     * @param {Number} id 
     * @param {module:model/ReminderDTO} reminderDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ReminderDTO} and HTTP response
     */
    reminderControllerUpdateWithHttpInfo(id, reminderDTO) {
      let postBody = reminderDTO;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling reminderControllerUpdate");
      }
      // verify the required parameter 'reminderDTO' is set
      if (reminderDTO === undefined || reminderDTO === null) {
        throw new Error("Missing the required parameter 'reminderDTO' when calling reminderControllerUpdate");
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
      let returnType = ReminderDTO;
      return this.apiClient.callApi(
        '/reminder/{id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null
      );
    }

    /**
     * Update
     * @param {Number} id 
     * @param {module:model/ReminderDTO} reminderDTO 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ReminderDTO}
     */
    reminderControllerUpdate(id, reminderDTO) {
      return this.reminderControllerUpdateWithHttpInfo(id, reminderDTO)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}