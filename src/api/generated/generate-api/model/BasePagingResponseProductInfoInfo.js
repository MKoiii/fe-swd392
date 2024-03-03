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
import ProductInfoInfo from './ProductInfoInfo';

/**
 * The BasePagingResponseProductInfoInfo model module.
 * @module model/BasePagingResponseProductInfoInfo
 * @version 1.0.0
 */
class BasePagingResponseProductInfoInfo {
    /**
     * Constructs a new <code>BasePagingResponseProductInfoInfo</code>.
     * @alias module:model/BasePagingResponseProductInfoInfo
     */
    constructor() { 
        
        BasePagingResponseProductInfoInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasePagingResponseProductInfoInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasePagingResponseProductInfoInfo} obj Optional instance to populate.
     * @return {module:model/BasePagingResponseProductInfoInfo} The populated <code>BasePagingResponseProductInfoInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasePagingResponseProductInfoInfo();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('pageNumber')) {
                obj['pageNumber'] = ApiClient.convertToType(data['pageNumber'], 'Number');
            }
            if (data.hasOwnProperty('pageSize')) {
                obj['pageSize'] = ApiClient.convertToType(data['pageSize'], 'Number');
            }
            if (data.hasOwnProperty('totalElements')) {
                obj['totalElements'] = ApiClient.convertToType(data['totalElements'], 'Number');
            }
            if (data.hasOwnProperty('totalPages')) {
                obj['totalPages'] = ApiClient.convertToType(data['totalPages'], 'Number');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [ProductInfoInfo]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BasePagingResponseProductInfoInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BasePagingResponseProductInfoInfo</code>.
     */
    static validateJSON(data) {
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                ProductInfoInfo.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Boolean} success
 */
BasePagingResponseProductInfoInfo.prototype['success'] = undefined;

/**
 * @member {Number} pageNumber
 */
BasePagingResponseProductInfoInfo.prototype['pageNumber'] = undefined;

/**
 * @member {Number} pageSize
 */
BasePagingResponseProductInfoInfo.prototype['pageSize'] = undefined;

/**
 * @member {Number} totalElements
 */
BasePagingResponseProductInfoInfo.prototype['totalElements'] = undefined;

/**
 * @member {Number} totalPages
 */
BasePagingResponseProductInfoInfo.prototype['totalPages'] = undefined;

/**
 * @member {Array.<module:model/ProductInfoInfo>} data
 */
BasePagingResponseProductInfoInfo.prototype['data'] = undefined;






export default BasePagingResponseProductInfoInfo;

