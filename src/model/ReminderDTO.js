/**
 * Kolay Asistan Mobile API
 * Kolay Asistan mobile application api layer. Revision Date: 25.04.2023
 *
 * The version of the OpenAPI document: 0.0.10
 * Contact: ahmetyagibasan@gmail.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The ReminderDTO model module.
 * @module model/ReminderDTO
 * @version 0.0.10
 */
class ReminderDTO {
    /**
     * Constructs a new <code>ReminderDTO</code>.
     * @alias module:model/ReminderDTO
     * @param id {Number} id
     * @param userId {Number} userId
     * @param medicineBarcode {String} medicineBarcode
     * @param medicineName {String} medicineName
     * @param usageItemCount {Number} usageItemCount
     * @param usageHours {Array.<String>} usageHours
     * @param usageFrequency {module:model/ReminderDTO.UsageFrequencyEnum} Usage Frequency
     * @param reminderStartDate {Date} reminderStartDate
     * @param reminderEndDate {Date} reminderEndDate
     * @param tag {String} tag
     * @param note {String} note
     */
    constructor(id, userId, medicineBarcode, medicineName, usageItemCount, usageHours, usageFrequency, reminderStartDate, reminderEndDate, tag, note) { 
        
        ReminderDTO.initialize(this, id, userId, medicineBarcode, medicineName, usageItemCount, usageHours, usageFrequency, reminderStartDate, reminderEndDate, tag, note);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, userId, medicineBarcode, medicineName, usageItemCount, usageHours, usageFrequency, reminderStartDate, reminderEndDate, tag, note) { 
        obj['id'] = id;
        obj['userId'] = userId;
        obj['medicineBarcode'] = medicineBarcode;
        obj['medicineName'] = medicineName;
        obj['usageItemCount'] = usageItemCount;
        obj['usageHours'] = usageHours;
        obj['usageFrequency'] = usageFrequency || 'EveryDay';
        obj['reminderStartDate'] = reminderStartDate;
        obj['reminderEndDate'] = reminderEndDate;
        obj['tag'] = tag;
        obj['note'] = note;
    }

    /**
     * Constructs a <code>ReminderDTO</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ReminderDTO} obj Optional instance to populate.
     * @return {module:model/ReminderDTO} The populated <code>ReminderDTO</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ReminderDTO();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('userId')) {
                obj['userId'] = ApiClient.convertToType(data['userId'], 'Number');
            }
            if (data.hasOwnProperty('medicineBarcode')) {
                obj['medicineBarcode'] = ApiClient.convertToType(data['medicineBarcode'], 'String');
            }
            if (data.hasOwnProperty('medicineName')) {
                obj['medicineName'] = ApiClient.convertToType(data['medicineName'], 'String');
            }
            if (data.hasOwnProperty('usageItemCount')) {
                obj['usageItemCount'] = ApiClient.convertToType(data['usageItemCount'], 'Number');
            }
            if (data.hasOwnProperty('usageHours')) {
                obj['usageHours'] = ApiClient.convertToType(data['usageHours'], ['String']);
            }
            if (data.hasOwnProperty('usageFrequency')) {
                obj['usageFrequency'] = ApiClient.convertToType(data['usageFrequency'], 'String');
            }
            if (data.hasOwnProperty('reminderStartDate')) {
                obj['reminderStartDate'] = ApiClient.convertToType(data['reminderStartDate'], 'Date');
            }
            if (data.hasOwnProperty('reminderEndDate')) {
                obj['reminderEndDate'] = ApiClient.convertToType(data['reminderEndDate'], 'Date');
            }
            if (data.hasOwnProperty('tag')) {
                obj['tag'] = ApiClient.convertToType(data['tag'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ReminderDTO</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ReminderDTO</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ReminderDTO.RequiredProperties) {
            if (!data[property]) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['medicineBarcode'] && !(typeof data['medicineBarcode'] === 'string' || data['medicineBarcode'] instanceof String)) {
            throw new Error("Expected the field `medicineBarcode` to be a primitive type in the JSON string but got " + data['medicineBarcode']);
        }
        // ensure the json data is a string
        if (data['medicineName'] && !(typeof data['medicineName'] === 'string' || data['medicineName'] instanceof String)) {
            throw new Error("Expected the field `medicineName` to be a primitive type in the JSON string but got " + data['medicineName']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['usageHours'])) {
            throw new Error("Expected the field `usageHours` to be an array in the JSON data but got " + data['usageHours']);
        }
        // ensure the json data is a string
        if (data['usageFrequency'] && !(typeof data['usageFrequency'] === 'string' || data['usageFrequency'] instanceof String)) {
            throw new Error("Expected the field `usageFrequency` to be a primitive type in the JSON string but got " + data['usageFrequency']);
        }
        // ensure the json data is a string
        if (data['tag'] && !(typeof data['tag'] === 'string' || data['tag'] instanceof String)) {
            throw new Error("Expected the field `tag` to be a primitive type in the JSON string but got " + data['tag']);
        }
        // ensure the json data is a string
        if (data['note'] && !(typeof data['note'] === 'string' || data['note'] instanceof String)) {
            throw new Error("Expected the field `note` to be a primitive type in the JSON string but got " + data['note']);
        }

        return true;
    }


}

ReminderDTO.RequiredProperties = ["id", "userId", "medicineBarcode", "medicineName", "usageItemCount", "usageHours", "usageFrequency", "reminderStartDate", "reminderEndDate", "tag", "note"];

/**
 * id
 * @member {Number} id
 */
ReminderDTO.prototype['id'] = undefined;

/**
 * userId
 * @member {Number} userId
 */
ReminderDTO.prototype['userId'] = undefined;

/**
 * medicineBarcode
 * @member {String} medicineBarcode
 */
ReminderDTO.prototype['medicineBarcode'] = undefined;

/**
 * medicineName
 * @member {String} medicineName
 */
ReminderDTO.prototype['medicineName'] = undefined;

/**
 * usageItemCount
 * @member {Number} usageItemCount
 */
ReminderDTO.prototype['usageItemCount'] = undefined;

/**
 * usageHours
 * @member {Array.<String>} usageHours
 */
ReminderDTO.prototype['usageHours'] = undefined;

/**
 * Usage Frequency
 * @member {module:model/ReminderDTO.UsageFrequencyEnum} usageFrequency
 * @default 'EveryDay'
 */
ReminderDTO.prototype['usageFrequency'] = 'EveryDay';

/**
 * reminderStartDate
 * @member {Date} reminderStartDate
 */
ReminderDTO.prototype['reminderStartDate'] = undefined;

/**
 * reminderEndDate
 * @member {Date} reminderEndDate
 */
ReminderDTO.prototype['reminderEndDate'] = undefined;

/**
 * tag
 * @member {String} tag
 */
ReminderDTO.prototype['tag'] = undefined;

/**
 * note
 * @member {String} note
 */
ReminderDTO.prototype['note'] = undefined;





/**
 * Allowed values for the <code>usageFrequency</code> property.
 * @enum {String}
 * @readonly
 */
ReminderDTO['UsageFrequencyEnum'] = {

    /**
     * value: "None"
     * @const
     */
    "None": "None",

    /**
     * value: "EveryDay"
     * @const
     */
    "EveryDay": "EveryDay",

    /**
     * value: "EveryWeek"
     * @const
     */
    "EveryWeek": "EveryWeek",

    /**
     * value: "EveryMonth"
     * @const
     */
    "EveryMonth": "EveryMonth",

    /**
     * value: "Every2Days"
     * @const
     */
    "Every2Days": "Every2Days",

    /**
     * value: "Every3Days"
     * @const
     */
    "Every3Days": "Every3Days",

    /**
     * value: "Every4Days"
     * @const
     */
    "Every4Days": "Every4Days",

    /**
     * value: "Every5Days"
     * @const
     */
    "Every5Days": "Every5Days",

    /**
     * value: "Every6Days"
     * @const
     */
    "Every6Days": "Every6Days"
};



export default ReminderDTO;

