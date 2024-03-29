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
 * The UserDetailsCreate model module.
 * @module model/UserDetailsCreate
 * @version 1.0.0
 */
class UserDetailsCreate {
    /**
     * Constructs a new <code>UserDetailsCreate</code>.
     * @alias module:model/UserDetailsCreate
     * @param name {String} 
     * @param phone {String} 
     */
    constructor(name, phone) { 
        
        UserDetailsCreate.initialize(this, name, phone);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, name, phone) { 
        obj['name'] = name;
        obj['phone'] = phone;
    }

    /**
     * Constructs a <code>UserDetailsCreate</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UserDetailsCreate} obj Optional instance to populate.
     * @return {module:model/UserDetailsCreate} The populated <code>UserDetailsCreate</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UserDetailsCreate();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('photo')) {
                obj['photo'] = ApiClient.convertToType(data['photo'], 'String');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'Boolean');
            }
            if (data.hasOwnProperty('roleId')) {
                obj['roleId'] = ApiClient.convertToType(data['roleId'], 'String');
            }
            if (data.hasOwnProperty('roleKind')) {
                obj['roleKind'] = ApiClient.convertToType(data['roleKind'], 'String');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'String');
            }
            if (data.hasOwnProperty('birthday')) {
                obj['birthday'] = ApiClient.convertToType(data['birthday'], 'Date');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>UserDetailsCreate</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>UserDetailsCreate</code>.
     */
    static validateJSON(data) {
        // check to make sure all required properties are present in the JSON string
        for (const property of UserDetailsCreate.RequiredProperties) {
            if (!data.hasOwnProperty(property)) {
                throw new Error("The required field `" + property + "` is not found in the JSON data: " + JSON.stringify(data));
            }
        }
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['name'] && !(typeof data['name'] === 'string' || data['name'] instanceof String)) {
            throw new Error("Expected the field `name` to be a primitive type in the JSON string but got " + data['name']);
        }
        // ensure the json data is a string
        if (data['email'] && !(typeof data['email'] === 'string' || data['email'] instanceof String)) {
            throw new Error("Expected the field `email` to be a primitive type in the JSON string but got " + data['email']);
        }
        // ensure the json data is a string
        if (data['phone'] && !(typeof data['phone'] === 'string' || data['phone'] instanceof String)) {
            throw new Error("Expected the field `phone` to be a primitive type in the JSON string but got " + data['phone']);
        }
        // ensure the json data is a string
        if (data['photo'] && !(typeof data['photo'] === 'string' || data['photo'] instanceof String)) {
            throw new Error("Expected the field `photo` to be a primitive type in the JSON string but got " + data['photo']);
        }
        // ensure the json data is a string
        if (data['roleId'] && !(typeof data['roleId'] === 'string' || data['roleId'] instanceof String)) {
            throw new Error("Expected the field `roleId` to be a primitive type in the JSON string but got " + data['roleId']);
        }
        // ensure the json data is a string
        if (data['roleKind'] && !(typeof data['roleKind'] === 'string' || data['roleKind'] instanceof String)) {
            throw new Error("Expected the field `roleKind` to be a primitive type in the JSON string but got " + data['roleKind']);
        }
        // ensure the json data is a string
        if (data['gender'] && !(typeof data['gender'] === 'string' || data['gender'] instanceof String)) {
            throw new Error("Expected the field `gender` to be a primitive type in the JSON string but got " + data['gender']);
        }

        return true;
    }


}

UserDetailsCreate.RequiredProperties = ["name", "phone"];

/**
 * @member {String} id
 */
UserDetailsCreate.prototype['id'] = undefined;

/**
 * @member {String} name
 */
UserDetailsCreate.prototype['name'] = undefined;

/**
 * @member {String} email
 */
UserDetailsCreate.prototype['email'] = undefined;

/**
 * @member {String} phone
 */
UserDetailsCreate.prototype['phone'] = undefined;

/**
 * @member {String} photo
 */
UserDetailsCreate.prototype['photo'] = undefined;

/**
 * @member {Boolean} active
 */
UserDetailsCreate.prototype['active'] = undefined;

/**
 * @member {String} roleId
 */
UserDetailsCreate.prototype['roleId'] = undefined;

/**
 * @member {module:model/UserDetailsCreate.RoleKindEnum} roleKind
 */
UserDetailsCreate.prototype['roleKind'] = undefined;

/**
 * @member {module:model/UserDetailsCreate.GenderEnum} gender
 */
UserDetailsCreate.prototype['gender'] = undefined;

/**
 * @member {Date} birthday
 */
UserDetailsCreate.prototype['birthday'] = undefined;





/**
 * Allowed values for the <code>roleKind</code> property.
 * @enum {String}
 * @readonly
 */
UserDetailsCreate['RoleKindEnum'] = {

    /**
     * value: "CMS"
     * @const
     */
    "CMS": "CMS",

    /**
     * value: "SUPER_ADMIN"
     * @const
     */
    "SUPER_ADMIN": "SUPER_ADMIN",

    /**
     * value: "USER"
     * @const
     */
    "USER": "USER",

    /**
     * value: "MERCHANT"
     * @const
     */
    "MERCHANT": "MERCHANT"
};


/**
 * Allowed values for the <code>gender</code> property.
 * @enum {String}
 * @readonly
 */
UserDetailsCreate['GenderEnum'] = {

    /**
     * value: "MALE"
     * @const
     */
    "MALE": "MALE",

    /**
     * value: "FEMALE"
     * @const
     */
    "FEMALE": "FEMALE"
};



export default UserDetailsCreate;

