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
import MerchantInfoInfo from './MerchantInfoInfo';

/**
 * The BasePagingResponseMerchantInfoInfo model module.
 * @module model/BasePagingResponseMerchantInfoInfo
 * @version 1.0.0
 */
class BasePagingResponseMerchantInfoInfo {
    /**
     * Constructs a new <code>BasePagingResponseMerchantInfoInfo</code>.
     * @alias module:model/BasePagingResponseMerchantInfoInfo
     */
    constructor() { 
        
        BasePagingResponseMerchantInfoInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BasePagingResponseMerchantInfoInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BasePagingResponseMerchantInfoInfo} obj Optional instance to populate.
     * @return {module:model/BasePagingResponseMerchantInfoInfo} The populated <code>BasePagingResponseMerchantInfoInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BasePagingResponseMerchantInfoInfo();

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
                obj['data'] = ApiClient.convertToType(data['data'], [MerchantInfoInfo]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BasePagingResponseMerchantInfoInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BasePagingResponseMerchantInfoInfo</code>.
     */
    static validateJSON(data) {
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                MerchantInfoInfo.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Boolean} success
 */
BasePagingResponseMerchantInfoInfo.prototype['success'] = undefined;

/**
 * @member {Number} pageNumber
 */
BasePagingResponseMerchantInfoInfo.prototype['pageNumber'] = undefined;

/**
 * @member {Number} pageSize
 */
BasePagingResponseMerchantInfoInfo.prototype['pageSize'] = undefined;

/**
 * @member {Number} totalElements
 */
BasePagingResponseMerchantInfoInfo.prototype['totalElements'] = undefined;

/**
 * @member {Number} totalPages
 */
BasePagingResponseMerchantInfoInfo.prototype['totalPages'] = undefined;

/**
 * @member {Array.<module:model/MerchantInfoInfo>} data
 */
BasePagingResponseMerchantInfoInfo.prototype['data'] = undefined;






export default BasePagingResponseMerchantInfoInfo;

