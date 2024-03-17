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
import OrderItemInfoDetails from './OrderItemInfoDetails';

/**
 * The OrderDetailsDetails model module.
 * @module model/OrderDetailsDetails
 * @version 1.0.0
 */
class OrderDetailsDetails {
    /**
     * Constructs a new <code>OrderDetailsDetails</code>.
     * @alias module:model/OrderDetailsDetails
     */
    constructor() { 
        
        OrderDetailsDetails.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>OrderDetailsDetails</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/OrderDetailsDetails} obj Optional instance to populate.
     * @return {module:model/OrderDetailsDetails} The populated <code>OrderDetailsDetails</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderDetailsDetails();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('createdDate')) {
                obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'Date');
            }
            if (data.hasOwnProperty('receiverFullName')) {
                obj['receiverFullName'] = ApiClient.convertToType(data['receiverFullName'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('provinceId')) {
                obj['provinceId'] = ApiClient.convertToType(data['provinceId'], 'Number');
            }
            if (data.hasOwnProperty('provinceName')) {
                obj['provinceName'] = ApiClient.convertToType(data['provinceName'], 'String');
            }
            if (data.hasOwnProperty('districtId')) {
                obj['districtId'] = ApiClient.convertToType(data['districtId'], 'Number');
            }
            if (data.hasOwnProperty('districtName')) {
                obj['districtName'] = ApiClient.convertToType(data['districtName'], 'String');
            }
            if (data.hasOwnProperty('wardId')) {
                obj['wardId'] = ApiClient.convertToType(data['wardId'], 'Number');
            }
            if (data.hasOwnProperty('wardName')) {
                obj['wardName'] = ApiClient.convertToType(data['wardName'], 'String');
            }
            if (data.hasOwnProperty('addressDetails')) {
                obj['addressDetails'] = ApiClient.convertToType(data['addressDetails'], 'String');
            }
            if (data.hasOwnProperty('subTotal')) {
                obj['subTotal'] = ApiClient.convertToType(data['subTotal'], 'Number');
            }
            if (data.hasOwnProperty('shippingCharge')) {
                obj['shippingCharge'] = ApiClient.convertToType(data['shippingCharge'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('paymentMethod')) {
                obj['paymentMethod'] = ApiClient.convertToType(data['paymentMethod'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('numItem')) {
                obj['numItem'] = ApiClient.convertToType(data['numItem'], 'Number');
            }
            if (data.hasOwnProperty('firstItem')) {
                obj['firstItem'] = OrderItemInfoDetails.constructFromObject(data['firstItem']);
            }
            if (data.hasOwnProperty('paymentUrl')) {
                obj['paymentUrl'] = ApiClient.convertToType(data['paymentUrl'], 'String');
            }
            if (data.hasOwnProperty('orderItems')) {
                obj['orderItems'] = ApiClient.convertToType(data['orderItems'], [OrderItemInfoDetails]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>OrderDetailsDetails</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>OrderDetailsDetails</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['receiverFullName'] && !(typeof data['receiverFullName'] === 'string' || data['receiverFullName'] instanceof String)) {
            throw new Error("Expected the field `receiverFullName` to be a primitive type in the JSON string but got " + data['receiverFullName']);
        }
        // ensure the json data is a string
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }
        // ensure the json data is a string
        if (data['provinceName'] && !(typeof data['provinceName'] === 'string' || data['provinceName'] instanceof String)) {
            throw new Error("Expected the field `provinceName` to be a primitive type in the JSON string but got " + data['provinceName']);
        }
        // ensure the json data is a string
        if (data['districtName'] && !(typeof data['districtName'] === 'string' || data['districtName'] instanceof String)) {
            throw new Error("Expected the field `districtName` to be a primitive type in the JSON string but got " + data['districtName']);
        }
        // ensure the json data is a string
        if (data['wardName'] && !(typeof data['wardName'] === 'string' || data['wardName'] instanceof String)) {
            throw new Error("Expected the field `wardName` to be a primitive type in the JSON string but got " + data['wardName']);
        }
        // ensure the json data is a string
        if (data['addressDetails'] && !(typeof data['addressDetails'] === 'string' || data['addressDetails'] instanceof String)) {
            throw new Error("Expected the field `addressDetails` to be a primitive type in the JSON string but got " + data['addressDetails']);
        }
        // ensure the json data is a string
        if (data['description'] && !(typeof data['description'] === 'string' || data['description'] instanceof String)) {
            throw new Error("Expected the field `description` to be a primitive type in the JSON string but got " + data['description']);
        }
        // ensure the json data is a string
        if (data['paymentMethod'] && !(typeof data['paymentMethod'] === 'string' || data['paymentMethod'] instanceof String)) {
            throw new Error("Expected the field `paymentMethod` to be a primitive type in the JSON string but got " + data['paymentMethod']);
        }
        // ensure the json data is a string
        if (data['status'] && !(typeof data['status'] === 'string' || data['status'] instanceof String)) {
            throw new Error("Expected the field `status` to be a primitive type in the JSON string but got " + data['status']);
        }
        // validate the optional field `firstItem`
        if (data['firstItem']) { // data not null
          OrderItemInfoDetails.validateJSON(data['firstItem']);
        }
        // ensure the json data is a string
        if (data['paymentUrl'] && !(typeof data['paymentUrl'] === 'string' || data['paymentUrl'] instanceof String)) {
            throw new Error("Expected the field `paymentUrl` to be a primitive type in the JSON string but got " + data['paymentUrl']);
        }
        if (data['orderItems']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['orderItems'])) {
                throw new Error("Expected the field `orderItems` to be an array in the JSON data but got " + data['orderItems']);
            }
            // validate the optional field `orderItems` (array)
            for (const item of data['orderItems']) {
                OrderItemInfoDetails.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} id
 */
OrderDetailsDetails.prototype['id'] = undefined;

/**
 * @member {Date} createdDate
 */
OrderDetailsDetails.prototype['createdDate'] = undefined;

/**
 * @member {String} receiverFullName
 */
OrderDetailsDetails.prototype['receiverFullName'] = undefined;

/**
 * @member {String} phone
 */
OrderDetailsDetails.prototype['phone'] = undefined;

/**
 * @member {Number} provinceId
 */
OrderDetailsDetails.prototype['provinceId'] = undefined;

/**
 * @member {String} provinceName
 */
OrderDetailsDetails.prototype['provinceName'] = undefined;

/**
 * @member {Number} districtId
 */
OrderDetailsDetails.prototype['districtId'] = undefined;

/**
 * @member {String} districtName
 */
OrderDetailsDetails.prototype['districtName'] = undefined;

/**
 * @member {Number} wardId
 */
OrderDetailsDetails.prototype['wardId'] = undefined;

/**
 * @member {String} wardName
 */
OrderDetailsDetails.prototype['wardName'] = undefined;

/**
 * @member {String} addressDetails
 */
OrderDetailsDetails.prototype['addressDetails'] = undefined;

/**
 * @member {Number} subTotal
 */
OrderDetailsDetails.prototype['subTotal'] = undefined;

/**
 * @member {Number} shippingCharge
 */
OrderDetailsDetails.prototype['shippingCharge'] = undefined;

/**
 * @member {String} description
 */
OrderDetailsDetails.prototype['description'] = undefined;

/**
 * @member {module:model/OrderDetailsDetails.PaymentMethodEnum} paymentMethod
 */
OrderDetailsDetails.prototype['paymentMethod'] = undefined;

/**
 * @member {module:model/OrderDetailsDetails.StatusEnum} status
 */
OrderDetailsDetails.prototype['status'] = undefined;

/**
 * @member {Number} numItem
 */
OrderDetailsDetails.prototype['numItem'] = undefined;

/**
 * @member {module:model/OrderItemInfoDetails} firstItem
 */
OrderDetailsDetails.prototype['firstItem'] = undefined;

/**
 * @member {String} paymentUrl
 */
OrderDetailsDetails.prototype['paymentUrl'] = undefined;

/**
 * @member {Array.<module:model/OrderItemInfoDetails>} orderItems
 */
OrderDetailsDetails.prototype['orderItems'] = undefined;





/**
 * Allowed values for the <code>paymentMethod</code> property.
 * @enum {String}
 * @readonly
 */
OrderDetailsDetails['PaymentMethodEnum'] = {

    /**
     * value: "CARD"
     * @const
     */
    "CARD": "CARD",

    /**
     * value: "COD"
     * @const
     */
    "COD": "COD",

    /**
     * value: "E_WALLET_PAYPAL"
     * @const
     */
    "E_WALLET_PAYPAL": "E_WALLET_PAYPAL",

    /**
     * value: "E_WALLET_VNPAY"
     * @const
     */
    "E_WALLET_VNPAY": "E_WALLET_VNPAY"
};


/**
 * Allowed values for the <code>status</code> property.
 * @enum {String}
 * @readonly
 */
OrderDetailsDetails['StatusEnum'] = {

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



export default OrderDetailsDetails;

