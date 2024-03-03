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
 * The UploadResult model module.
 * @module model/UploadResult
 * @version 1.0.0
 */
class UploadResult {
    /**
     * Constructs a new <code>UploadResult</code>.
     * @alias module:model/UploadResult
     */
    constructor() { 
        
        UploadResult.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>UploadResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UploadResult} obj Optional instance to populate.
     * @return {module:model/UploadResult} The populated <code>UploadResult</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UploadResult();

            if (data.hasOwnProperty('contentType')) {
                obj['contentType'] = ApiClient.convertToType(data['contentType'], 'String');
            }
            if (data.hasOwnProperty('extension')) {
                obj['extension'] = ApiClient.convertToType(data['extension'], 'String');
            }
            if (data.hasOwnProperty('md5')) {
                obj['md5'] = ApiClient.convertToType(data['md5'], 'String');
            }
            if (data.hasOwnProperty('previewUrl')) {
                obj['previewUrl'] = ApiClient.convertToType(data['previewUrl'], 'String');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UploadResult</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UploadResult</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['contentType'] && !(typeof data['contentType'] === 'string' || data['contentType'] instanceof String)) {
            throw new Error("Expected the field `contentType` to be a primitive type in the JSON string but got " + data['contentType']);
        }
        // ensure the json data is a string
        if (data['extension'] && !(typeof data['extension'] === 'string' || data['extension'] instanceof String)) {
            throw new Error("Expected the field `extension` to be a primitive type in the JSON string but got " + data['extension']);
        }
        // ensure the json data is a string
        if (data['md5'] && !(typeof data['md5'] === 'string' || data['md5'] instanceof String)) {
            throw new Error("Expected the field `md5` to be a primitive type in the JSON string but got " + data['md5']);
        }
        // ensure the json data is a string
        if (data['previewUrl'] && !(typeof data['previewUrl'] === 'string' || data['previewUrl'] instanceof String)) {
            throw new Error("Expected the field `previewUrl` to be a primitive type in the JSON string but got " + data['previewUrl']);
        }

        return true;
    }


}



/**
 * @member {String} contentType
 */
UploadResult.prototype['contentType'] = undefined;

/**
 * @member {String} extension
 */
UploadResult.prototype['extension'] = undefined;

/**
 * @member {String} md5
 */
UploadResult.prototype['md5'] = undefined;

/**
 * @member {String} previewUrl
 */
UploadResult.prototype['previewUrl'] = undefined;






export default UploadResult;

