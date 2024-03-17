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
 * The ChangeOrderStatusRequest model module.
 * @module model/ChangeOrderStatusRequest
 * @version 1.0.0
 */
class ChangeOrderStatusRequest {
    /**
     * Constructs a new <code>ChangeOrderStatusRequest</code>.
     * @alias module:model/ChangeOrderStatusRequest
     */
    constructor() { 
        
        ChangeOrderStatusRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ChangeOrderStatusRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ChangeOrderStatusRequest} obj Optional instance to populate.
     * @return {module:model/ChangeOrderStatusRequest} The populated <code>ChangeOrderStatusRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ChangeOrderStatusRequest();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>ChangeOrderStatusRequest</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>ChangeOrderStatusRequest</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
ChangeOrderStatusRequest.prototype['id'] = undefined;

/**
 * @member {module:model/ChangeOrderStatusRequest.StatusEnum} status
 */
ChangeOrderStatusRequest.prototype['status'] = undefined;





/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
ChangeOrderStatusRequest['StatusEnum'] = {

    /**
     * value: "NEW"
     * @const
     */
    "NEW": "NEW",

    /**
     * value: "PAID"
     * @const
     */
    "PAID": "PAID",

    /**
     * value: "FAILED"
     * @const
     */
    "FAILED": "FAILED",

    /**
     * value: "DELIVERED"
     * @const
     */
    "DELIVERED": "DELIVERED",

    /**
     * value: "RETURNED"
     * @const
     */
    "RETURNED": "RETURNED",

    /**
     * value: "COMPLETED"
     * @const
     */
    "COMPLETED": "COMPLETED"
};



export default ChangeOrderStatusRequest;

