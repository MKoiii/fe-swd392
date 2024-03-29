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


import ApiClient from "../ApiClient";
import BaseResponseListRoleInfoInfo from '../model/BaseResponseListRoleInfoInfo';
import ErrorResponse from '../model/ErrorResponse';

/**
* SystemRoleController service.
* @module api/SystemRoleControllerApi
* @version 1.0.0
*/
export default class SystemRoleControllerApi {

    /**
    * Constructs a new SystemRoleControllerApi. 
    * @alias module:api/SystemRoleControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the systemRoleControllerGetInfoList operation.
     * @callback module:api/SystemRoleControllerApi~systemRoleControllerGetInfoListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResponseListRoleInfoInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/SystemRoleControllerApi~systemRoleControllerGetInfoListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BaseResponseListRoleInfoInfo}
     */
    systemRoleControllerGetInfoList(callback) {
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = BaseResponseListRoleInfoInfo;
      return this.apiClient.callApi(
        '/api/v1/system/role/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
