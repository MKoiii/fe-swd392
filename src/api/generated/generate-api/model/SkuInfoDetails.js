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
 * The SkuInfoDetails model module.
 * @module model/SkuInfoDetails
 * @version 1.0.0
 */
class SkuInfoDetails {
    /**
     * Constructs a new <code>SkuInfoDetails</code>.
     * @alias module:model/SkuInfoDetails
     */
    constructor() { 
        
        SkuInfoDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SkuInfoDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SkuInfoDetails} obj Optional instance to populate.
     * @return {module:model/SkuInfoDetails} The populated <code>SkuInfoDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SkuInfoDetails();

            if (data.hasOwnProperty('createdBy')) {
                obj['createdBy'] = ApiClient.convertToType(data['createdBy'], 'String');
            }
            if (data.hasOwnProperty('createdDate')) {
                obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
            }
            if (data.hasOwnProperty('lastModifiedBy')) {
                obj['lastModifiedBy'] = ApiClient.convertToType(data['lastModifiedBy'], 'String');
            }
            if (data.hasOwnProperty('lastModifiedDate')) {
                obj['lastModifiedDate'] = ApiClient.convertToType(data['lastModifiedDate'], 'Date');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('quantity')) {
                obj['quantity'] = ApiClient.convertToType(data['quantity'], 'Number');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('variantIds')) {
                obj['variantIds'] = ApiClient.convertToType(data['variantIds'], ['Number']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>SkuInfoDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>SkuInfoDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['createdBy'] && !(typeof data['createdBy'] === 'string' || data['createdBy'] instanceof String)) {
            throw new Error("Expected the field `createdBy` to be a primitive type in the JSON string but got " + data['createdBy']);
        }
        // ensure the json data is a string
        if (data['lastModifiedBy'] && !(typeof data['lastModifiedBy'] === 'string' || data['lastModifiedBy'] instanceof String)) {
            throw new Error("Expected the field `lastModifiedBy` to be a primitive type in the JSON string but got " + data['lastModifiedBy']);
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is an array
        if (!Array.isArray(data['variantIds'])) {
            throw new Error("Expected the field `variantIds` to be an array in the JSON data but got " + data['variantIds']);
        }

        return true;
    }


}



/**
 * @member {String} createdBy
 */
SkuInfoDetails.prototype['createdBy'] = undefined;

/**
 * @member {Date} createdDate
 */
SkuInfoDetails.prototype['createdDate'] = undefined;

/**
 * @member {String} lastModifiedBy
 */
SkuInfoDetails.prototype['lastModifiedBy'] = undefined;

/**
 * @member {Date} lastModifiedDate
 */
SkuInfoDetails.prototype['lastModifiedDate'] = undefined;

/**
 * @member {String} id
 */
SkuInfoDetails.prototype['id'] = undefined;

/**
 * @member {Number} price
 */
SkuInfoDetails.prototype['price'] = undefined;

/**
 * @member {Number} quantity
 */
SkuInfoDetails.prototype['quantity'] = undefined;

/**
 * @member {String} image
 */
SkuInfoDetails.prototype['image'] = undefined;

/**
 * @member {Array.<Number>} variantIds
 */
SkuInfoDetails.prototype['variantIds'] = undefined;






export default SkuInfoDetails;

