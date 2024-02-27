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
 * The ProductCategoryInfoCreate model module.
 * @module model/ProductCategoryInfoCreate
 * @version 1.0.0
 */
class ProductCategoryInfoCreate {
    /**
     * Constructs a new <code>ProductCategoryInfoCreate</code>.
     * @alias module:model/ProductCategoryInfoCreate
     * @param name {String} 
     * @param status {module:model/ProductCategoryInfoCreate.StatusEnum} 
     */
    constructor(name, status) { 
        
        ProductCategoryInfoCreate.initialize(this, name, status);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, status) { 
        obj['name'] = name;
        obj['status'] = status;
    }

    /**
     * Constructs a <code>ProductCategoryInfoCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductCategoryInfoCreate} obj Optional instance to populate.
     * @return {module:model/ProductCategoryInfoCreate} The populated <code>ProductCategoryInfoCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductCategoryInfoCreate();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('parentId')) {
                obj['parentId'] = ApiClient.convertToType(data['parentId'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductCategoryInfoCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductCategoryInfoCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ProductCategoryInfoCreate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['icon'] && !(typeof data['icon'] === 'string' || data['icon'] instanceof String)) {
            throw new Error("Expected the field `icon` to be a primitive type in the JSON string but got " + data['icon']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}

ProductCategoryInfoCreate.RequiredProperties = ["name", "status"];

/**
 * @member {String} name
 */
ProductCategoryInfoCreate.prototype['name'] = undefined;

/**
 * @member {String} icon
 */
ProductCategoryInfoCreate.prototype['icon'] = undefined;

/**
 * @member {String} description
 */
ProductCategoryInfoCreate.prototype['description'] = undefined;

/**
 * @member {module:model/ProductCategoryInfoCreate.StatusEnum} status
 */
ProductCategoryInfoCreate.prototype['status'] = undefined;

/**
 * @member {Number} parentId
 */
ProductCategoryInfoCreate.prototype['parentId'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ProductCategoryInfoCreate['StatusEnum'] = {

    /**
     * value: "ACTIVE"
     * @const
     */
    "ACTIVE": "ACTIVE",

    /**
     * value: "INACTIVE"
     * @const
     */
    "INACTIVE": "INACTIVE"
};



export default ProductCategoryInfoCreate;

