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
import RoleInfoInfo from './RoleInfoInfo';

/**
 * The BaseResponseListRoleInfoInfo model module.
 * @module model/BaseResponseListRoleInfoInfo
 * @version 1.0.0
 */
class BaseResponseListRoleInfoInfo {
    /**
     * Constructs a new <code>BaseResponseListRoleInfoInfo</code>.
     * @alias module:model/BaseResponseListRoleInfoInfo
     */
    constructor() { 
        
        BaseResponseListRoleInfoInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseResponseListRoleInfoInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseResponseListRoleInfoInfo} obj Optional instance to populate.
     * @return {module:model/BaseResponseListRoleInfoInfo} The populated <code>BaseResponseListRoleInfoInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseResponseListRoleInfoInfo();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = ApiClient.convertToType(data['data'], [RoleInfoInfo]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BaseResponseListRoleInfoInfo</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BaseResponseListRoleInfoInfo</code>.
     */
    static validateJSON(data) {
        if (data['data']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['data'])) {
                throw new Error("Expected the field `data` to be an array in the JSON data but got " + data['data']);
            }
            // validate the optional field `data` (array)
            for (const item of data['data']) {
                RoleInfoInfo.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {Boolean} success
 */
BaseResponseListRoleInfoInfo.prototype['success'] = undefined;

/**
 * @member {Array.<module:model/RoleInfoInfo>} data
 */
BaseResponseListRoleInfoInfo.prototype['data'] = undefined;






export default BaseResponseListRoleInfoInfo;

