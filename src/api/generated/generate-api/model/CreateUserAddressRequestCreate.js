/**
 * SWD_392 Auction API
 * API documentation of SWD_392 Auction v1.0.0
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';

/**
 * The CreateUserAddressRequestCreate model module.
 * @module model/CreateUserAddressRequestCreate
 * @version 1.0.0
 */
class CreateUserAddressRequestCreate {
    /**
     * Constructs a new <code>CreateUserAddressRequestCreate</code>.
     * @alias module:model/CreateUserAddressRequestCreate
     * @param provinceId {Number} 
     * @param districtId {Number} 
     * @param wardId {Number} 
     */
    constructor(provinceId, districtId, wardId) { 
        
        CreateUserAddressRequestCreate.initialize(this, provinceId, districtId, wardId);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, provinceId, districtId, wardId) { 
        obj['provinceId'] = provinceId;
        obj['districtId'] = districtId;
        obj['wardId'] = wardId;
    }

    /**
     * Constructs a <code>CreateUserAddressRequestCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateUserAddressRequestCreate} obj Optional instance to populate.
     * @return {module:model/CreateUserAddressRequestCreate} The populated <code>CreateUserAddressRequestCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CreateUserAddressRequestCreate();

            if (data.hasOwnProperty('addressDetails')) {
                obj['addressDetails'] = ApiClient.convertToType(data['addressDetails'], 'String');
            }
            if (data.hasOwnProperty('receiverFullName')) {
                obj['receiverFullName'] = ApiClient.convertToType(data['receiverFullName'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('note')) {
                obj['note'] = ApiClient.convertToType(data['note'], 'String');
            }
            if (data.hasOwnProperty('provinceId')) {
                obj['provinceId'] = ApiClient.convertToType(data['provinceId'], 'Number');
            }
            if (data.hasOwnProperty('districtId')) {
                obj['districtId'] = ApiClient.convertToType(data['districtId'], 'Number');
            }
            if (data.hasOwnProperty('wardId')) {
                obj['wardId'] = ApiClient.convertToType(data['wardId'], 'Number');
            }
            if (data.hasOwnProperty('default')) {
                obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CreateUserAddressRequestCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CreateUserAddressRequestCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of CreateUserAddressRequestCreate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['addressDetails'] && !(typeof data['addressDetails'] === 'string' || data['addressDetails'] instanceof String)) {
            throw new Error("Expected the field `addressDetails` to be a primitive type in the JSON string but got " + data['addressDetails']);
        }
        // ensure the json data is a string
        if (data['receiverFullName'] && !(typeof data['receiverFullName'] === 'string' || data['receiverFullName'] instanceof String)) {
            throw new Error("Expected the field `receiverFullName` to be a primitive type in the JSON string but got " + data['receiverFullName']);
        }
        // ensure the json data is a string
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }
        // ensure the json data is a string
        if (data['note'] && !(typeof data['note'] === 'string' || data['note'] instanceof String)) {
            throw new Error("Expected the field `note` to be a primitive type in the JSON string but got " + data['note']);
        }

        return true;
    }


}

CreateUserAddressRequestCreate.RequiredProperties = ["provinceId", "districtId", "wardId"];

/**
 * @member {String} addressDetails
 */
CreateUserAddressRequestCreate.prototype['addressDetails'] = undefined;

/**
 * @member {String} receiverFullName
 */
CreateUserAddressRequestCreate.prototype['receiverFullName'] = undefined;

/**
 * @member {String} phone
 */
CreateUserAddressRequestCreate.prototype['phone'] = undefined;

/**
 * @member {String} note
 */
CreateUserAddressRequestCreate.prototype['note'] = undefined;

/**
 * @member {Number} provinceId
 */
CreateUserAddressRequestCreate.prototype['provinceId'] = undefined;

/**
 * @member {Number} districtId
 */
CreateUserAddressRequestCreate.prototype['districtId'] = undefined;

/**
 * @member {Number} wardId
 */
CreateUserAddressRequestCreate.prototype['wardId'] = undefined;

/**
 * @member {Boolean} default
 */
CreateUserAddressRequestCreate.prototype['default'] = undefined;






export default CreateUserAddressRequestCreate;

