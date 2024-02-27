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
import ProductVariantInfoCreate from './ProductVariantInfoCreate';

/**
 * The ProductConfigInfoCreate model module.
 * @module model/ProductConfigInfoCreate
 * @version 1.0.0
 */
class ProductConfigInfoCreate {
    /**
     * Constructs a new <code>ProductConfigInfoCreate</code>.
     * @alias module:model/ProductConfigInfoCreate
     * @param name {String} 
     * @param choiceKind {module:model/ProductConfigInfoCreate.ChoiceKindEnum} 
     * @param variants {Array.<module:model/ProductVariantInfoCreate>} 
     */
    constructor(name, choiceKind, variants) { 
        
        ProductConfigInfoCreate.initialize(this, name, choiceKind, variants);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, choiceKind, variants) { 
        obj['name'] = name;
        obj['choiceKind'] = choiceKind;
        obj['variants'] = variants;
    }

    /**
     * Constructs a <code>ProductConfigInfoCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProductConfigInfoCreate} obj Optional instance to populate.
     * @return {module:model/ProductConfigInfoCreate} The populated <code>ProductConfigInfoCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProductConfigInfoCreate();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('choiceKind')) {
                obj['choiceKind'] = ApiClient.convertToType(data['choiceKind'], 'String');
            }
            if (data.hasOwnProperty('variants')) {
                obj['variants'] = ApiClient.convertToType(data['variants'], [ProductVariantInfoCreate]);
            }
            if (data.hasOwnProperty('required')) {
                obj['required'] = ApiClient.convertToType(data['required'], 'Boolean');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ProductConfigInfoCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ProductConfigInfoCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of ProductConfigInfoCreate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['choiceKind'] && !(typeof data['choiceKind'] === 'string' || data['choiceKind'] instanceof String)) {
            throw new Error("Expected the field `choiceKind` to be a primitive type in the JSON string but got " + data['choiceKind']);
        }
        if (data['variants']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['variants'])) {
                throw new Error("Expected the field `variants` to be an array in the JSON data but got " + data['variants']);
            }
            // validate the optional field `variants` (array)
            for (const item of data['variants']) {
                ProductVariantInfoCreate.validateJSON(item);
            };
        }

        return true;
    }


}

ProductConfigInfoCreate.RequiredProperties = ["name", "choiceKind", "variants"];

/**
 * @member {Number} id
 */
ProductConfigInfoCreate.prototype['id'] = undefined;

/**
 * @member {String} name
 */
ProductConfigInfoCreate.prototype['name'] = undefined;

/**
 * @member {module:model/ProductConfigInfoCreate.ChoiceKindEnum} choiceKind
 */
ProductConfigInfoCreate.prototype['choiceKind'] = undefined;

/**
 * @member {Array.<module:model/ProductVariantInfoCreate>} variants
 */
ProductConfigInfoCreate.prototype['variants'] = undefined;

/**
 * @member {Boolean} required
 */
ProductConfigInfoCreate.prototype['required'] = undefined;





/**
 * Allowed values for the <code>choiceKind</code> property.
 * @enum {String}
 * @readonly
 */
ProductConfigInfoCreate['ChoiceKindEnum'] = {

    /**
     * value: "SINGLE_CHOICE"
     * @const
     */
    "SINGLE_CHOICE": "SINGLE_CHOICE",

    /**
     * value: "MULTIPLE_CHOICE"
     * @const
     */
    "MULTIPLE_CHOICE": "MULTIPLE_CHOICE"
};



export default ProductConfigInfoCreate;

