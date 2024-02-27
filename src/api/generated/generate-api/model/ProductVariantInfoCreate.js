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
 * The ProductVariantInfoCreate model module.
 * @module model/ProductVariantInfoCreate
 * @version 1.0.0
 */
class ProductVariantInfoCreate {
    /**
     * Constructs a new <code>ProductVariantInfoCreate</code>.
     * @alias module:model/ProductVariantInfoCreate
     * @param name {String} 
     */
    constructor(name) { 
        
        ProductVariantInfoCreate.initialize(this, name);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name) { 
        obj['name'] = name;
    }

    /**
     * Constructs a <code>ProductVariantInfoCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductVariantInfoCreate} obj Optional instance to populate.
     * @return {module:model/ProductVariantInfoCreate} The populated <code>ProductVariantInfoCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductVariantInfoCreate();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('ordering')) {
                obj['ordering'] = ApiClient.convertToType(data['ordering'], 'Number');
            }
            if (data.hasOwnProperty('isSoldOut')) {
                obj['isSoldOut'] = ApiClient.convertToType(data['isSoldOut'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductVariantInfoCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductVariantInfoCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ProductVariantInfoCreate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }

        return true;
    }


}

ProductVariantInfoCreate.RequiredProperties = ["name"];

/**
 * @member {Number} id
 */
ProductVariantInfoCreate.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ProductVariantInfoCreate.prototype['name'] = undefined;

/**
 * @member {Number} ordering
 */
ProductVariantInfoCreate.prototype['ordering'] = undefined;

/**
 * @member {Boolean} isSoldOut
 */
ProductVariantInfoCreate.prototype['isSoldOut'] = undefined;






export default ProductVariantInfoCreate;

