/**
 * Kolay Asistan Mobile API
 * Kolay Asistan mobile application api layer. Revision Date: 04.12.2022
 *
 * The version of the OpenAPI document: v2
 * Contact: ahmetyagibasan@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import UserCreateDTODeviceInfo from './UserCreateDTODeviceInfo';

/**
 * The UserCreateDTO model module.
 * @module model/UserCreateDTO
 * @version v2
 */
class UserCreateDTO {
    /**
     * Constructs a new <code>UserCreateDTO</code>.
     * @alias module:model/UserCreateDTO
     * @param authType {module:model/UserCreateDTO.AuthTypeEnum} Loging type
     * @param email {String} Email address
     * @param password {String} Password
     * @param registerProvider {module:model/UserCreateDTO.RegisterProviderEnum} Register provider
     * @param aggrementId {Number} Accepted aggrement Id
     * @param deviceInfo {module:model/UserCreateDTODeviceInfo} 
     * @param socialAccessToken {Number} Social provider access token
     */
    constructor(authType, email, password, registerProvider, aggrementId, deviceInfo, socialAccessToken) { 
        
        UserCreateDTO.initialize(this, authType, email, password, registerProvider, aggrementId, deviceInfo, socialAccessToken);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, authType, email, password, registerProvider, aggrementId, deviceInfo, socialAccessToken) { 
        obj['authType'] = authType;
        obj['email'] = email;
        obj['password'] = password;
        obj['registerProvider'] = registerProvider || 'Manuel';
        obj['aggrementId'] = aggrementId;
        obj['deviceInfo'] = deviceInfo;
        obj['socialAccessToken'] = socialAccessToken;
    }

    /**
     * Constructs a <code>UserCreateDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserCreateDTO} obj Optional instance to populate.
     * @return {module:model/UserCreateDTO} The populated <code>UserCreateDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserCreateDTO();

            if (data.hasOwnProperty('authType')) {
                obj['authType'] = ApiClient.convertToType(data['authType'], 'Number');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('registerProvider')) {
                obj['registerProvider'] = ApiClient.convertToType(data['registerProvider'], 'String');
            }
            if (data.hasOwnProperty('aggrementId')) {
                obj['aggrementId'] = ApiClient.convertToType(data['aggrementId'], 'Number');
            }
            if (data.hasOwnProperty('deviceInfo')) {
                obj['deviceInfo'] = UserCreateDTODeviceInfo.constructFromObject(data['deviceInfo']);
            }
            if (data.hasOwnProperty('socialAccessToken')) {
                obj['socialAccessToken'] = ApiClient.convertToType(data['socialAccessToken'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserCreateDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserCreateDTO</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserCreateDTO.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['password'] && !(typeof data['password'] === 'string' || data['password'] instanceof String)) {
            throw new Error("Expected the field `password` to be a primitive type in the JSON string but got " + data['password']);
        }
        // ensure the json data is a string
        if (data['registerProvider'] && !(typeof data['registerProvider'] === 'string' || data['registerProvider'] instanceof String)) {
            throw new Error("Expected the field `registerProvider` to be a primitive type in the JSON string but got " + data['registerProvider']);
        }
        // validate the optional field `deviceInfo`
        if (data['deviceInfo']) { // data not null
          UserCreateDTODeviceInfo.validateJSON(data['deviceInfo']);
        }

        return true;
    }


}

UserCreateDTO.RequiredProperties = ["authType", "email", "password", "registerProvider", "aggrementId", "deviceInfo", "socialAccessToken"];

/**
 * Loging type
 * @member {module:model/UserCreateDTO.AuthTypeEnum} authType
 */
UserCreateDTO.prototype['authType'] = undefined;

/**
 * Email address
 * @member {String} email
 */
UserCreateDTO.prototype['email'] = undefined;

/**
 * Password
 * @member {String} password
 */
UserCreateDTO.prototype['password'] = undefined;

/**
 * Register provider
 * @member {module:model/UserCreateDTO.RegisterProviderEnum} registerProvider
 * @default 'Manuel'
 */
UserCreateDTO.prototype['registerProvider'] = 'Manuel';

/**
 * Accepted aggrement Id
 * @member {Number} aggrementId
 */
UserCreateDTO.prototype['aggrementId'] = undefined;

/**
 * @member {module:model/UserCreateDTODeviceInfo} deviceInfo
 */
UserCreateDTO.prototype['deviceInfo'] = undefined;

/**
 * Social provider access token
 * @member {Number} socialAccessToken
 */
UserCreateDTO.prototype['socialAccessToken'] = undefined;





/**
 * Allowed values for the <code>authType</code> property.
 * @enum {Number}
 * @readonly
 */
UserCreateDTO['AuthTypeEnum'] = {

    /**
     * value: null
     * @const
     */
    "null": null
};


/**
 * Allowed values for the <code>registerProvider</code> property.
 * @enum {String}
 * @readonly
 */
UserCreateDTO['RegisterProviderEnum'] = {

    /**
     * value: "Manuel"
     * @const
     */
    "Manuel": "Manuel",

    /**
     * value: "Facebook"
     * @const
     */
    "Facebook": "Facebook",

    /**
     * value: "Google"
     * @const
     */
    "Google": "Google",

    /**
     * value: "Device"
     * @const
     */
    "Device": "Device"
};



export default UserCreateDTO;

