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
 * The ProductInfo model module.
 * @module model/ProductInfo
 * @version 1.0.0
 */
class ProductInfo {
    /**
     * Constructs a new <code>ProductInfo</code>.
     * @alias module:model/ProductInfo
     */
    constructor() { 
        
        ProductInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ProductInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductInfo} obj Optional instance to populate.
     * @return {module:model/ProductInfo} The populated <code>ProductInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductInfo();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('image')) {
                obj['image'] = ApiClient.convertToType(data['image'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('categoryId')) {
                obj['categoryId'] = ApiClient.convertToType(data['categoryId'], 'Number');
            }
            if (data.hasOwnProperty('categoryName')) {
                obj['categoryName'] = ApiClient.convertToType(data['categoryName'], 'String');
            }
            if (data.hasOwnProperty('fromPrice')) {
                obj['fromPrice'] = ApiClient.convertToType(data['fromPrice'], 'Number');
            }
            if (data.hasOwnProperty('toPrice')) {
                obj['toPrice'] = ApiClient.convertToType(data['toPrice'], 'Number');
            }
            if (data.hasOwnProperty('merchantId')) {
                obj['merchantId'] = ApiClient.convertToType(data['merchantId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductInfo</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['image'] && !(typeof data['image'] === 'string' || data['image'] instanceof String)) {
            throw new Error("Expected the field `image` to be a primitive type in the JSON string but got " + data['image']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // ensure the json data is a string
        if (data['categoryName'] && !(typeof data['categoryName'] === 'string' || data['categoryName'] instanceof String)) {
            throw new Error("Expected the field `categoryName` to be a primitive type in the JSON string but got " + data['categoryName']);
        }

        return true;
    }


}



/**
 * @member {Number} id
 */
ProductInfo.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ProductInfo.prototype['name'] = undefined;

/**
 * @member {String} image
 */
ProductInfo.prototype['image'] = undefined;

/**
 * @member {module:model/ProductInfo.StatusEnum} status
 */
ProductInfo.prototype['status'] = undefined;

/**
 * @member {Number} categoryId
 */
ProductInfo.prototype['categoryId'] = undefined;

/**
 * @member {String} categoryName
 */
ProductInfo.prototype['categoryName'] = undefined;

/**
 * @member {Number} fromPrice
 */
ProductInfo.prototype['fromPrice'] = undefined;

/**
 * @member {Number} toPrice
 */
ProductInfo.prototype['toPrice'] = undefined;

/**
 * @member {Number} merchantId
 */
ProductInfo.prototype['merchantId'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ProductInfo['StatusEnum'] = {

    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",

    /**
     * value: "INACTIVE"
     * @const
     */
    "INACTIVE": "INACTIVE",

    /**
     * value: "SOLD_OUT"
     * @const
     */
    "SOLD_OUT": "SOLD_OUT"
};



export default ProductInfo;

