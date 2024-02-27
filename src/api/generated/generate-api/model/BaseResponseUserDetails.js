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
import UserDetails from './UserDetails';

/**
 * The BaseResponseUserDetails model module.
 * @module model/BaseResponseUserDetails
 * @version 1.0.0
 */
class BaseResponseUserDetails {
    /**
     * Constructs a new <code>BaseResponseUserDetails</code>.
     * @alias module:model/BaseResponseUserDetails
     */
    constructor() { 
        
        BaseResponseUserDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>BaseResponseUserDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BaseResponseUserDetails} obj Optional instance to populate.
     * @return {module:model/BaseResponseUserDetails} The populated <code>BaseResponseUserDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new BaseResponseUserDetails();

            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('data')) {
                obj['data'] = UserDetails.constructFromObject(data['data']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>BaseResponseUserDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>BaseResponseUserDetails</code>.
     */
    static validateJSON(data) {
        // validate the optional field `data`
        if (data['data']) { // data not null
          UserDetails.validateJSON(data['data']);
        }

        return true;
    }


}



/**
 * @member {Boolean} success
 */
BaseResponseUserDetails.prototype['success'] = undefined;

/**
 * @member {module:model/UserDetails} data
 */
BaseResponseUserDetails.prototype['data'] = undefined;






export default BaseResponseUserDetails;

