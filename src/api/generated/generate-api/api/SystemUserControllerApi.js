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
import BasePagingResponseUserInfoInfo from '../model/BasePagingResponseUserInfoInfo';
import BaseResponseUserDetails from '../model/BaseResponseUserDetails';
import BaseResponseUserDetailsDetails from '../model/BaseResponseUserDetailsDetails';
import ChangeUserStatusRequest from '../model/ChangeUserStatusRequest';
import ErrorResponse from '../model/ErrorResponse';
import SuccessResponse from '../model/SuccessResponse';
import UserDetails from '../model/UserDetails';
import UserDetailsCreate from '../model/UserDetailsCreate';
import UserDetailsUpdate from '../model/UserDetailsUpdate';

/**
* SystemUserController service.
* @module api/SystemUserControllerApi
* @version 1.0.0
*/
export default class SystemUserControllerApi {

    /**
    * Constructs a new SystemUserControllerApi. 
    * @alias module:api/SystemUserControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the systemUserControllerChangeStatus operation.
     * @callback module:api/SystemUserControllerApi~systemUserControllerChangeStatusCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/ChangeUserStatusRequest} changeUserStatusRequest 
     * @param {module:api/SystemUserControllerApi~systemUserControllerChangeStatusCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    systemUserControllerChangeStatus(changeUserStatusRequest, callback) {
      let postBody = changeUserStatusRequest;
      // verify the required parameter 'changeUserStatusRequest' is set
      if (changeUserStatusRequest === undefined || changeUserStatusRequest === null) {
        throw new Error("Missing the required parameter 'changeUserStatusRequest' when calling systemUserControllerChangeStatus");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = SuccessResponse;
      return this.apiClient.callApi(
        '/api/v1/system/user/change-status', 'PATCH',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the systemUserControllerCreateAdmin operation.
     * @callback module:api/SystemUserControllerApi~systemUserControllerCreateAdminCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResponseUserDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/UserDetails} userDetails 
     * @param {module:api/SystemUserControllerApi~systemUserControllerCreateAdminCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BaseResponseUserDetails}
     */
    systemUserControllerCreateAdmin(userDetails, callback) {
      let postBody = userDetails;
      // verify the required parameter 'userDetails' is set
      if (userDetails === undefined || userDetails === null) {
        throw new Error("Missing the required parameter 'userDetails' when calling systemUserControllerCreateAdmin");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['x-api-key'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = BaseResponseUserDetails;
      return this.apiClient.callApi(
        '/api/v1/system/user/admin/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the systemUserControllerCreateModel operation.
     * @callback module:api/SystemUserControllerApi~systemUserControllerCreateModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResponseUserDetailsDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/UserDetailsCreate} userDetailsCreate 
     * @param {module:api/SystemUserControllerApi~systemUserControllerCreateModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BaseResponseUserDetailsDetails}
     */
    systemUserControllerCreateModel(userDetailsCreate, callback) {
      let postBody = userDetailsCreate;
      // verify the required parameter 'userDetailsCreate' is set
      if (userDetailsCreate === undefined || userDetailsCreate === null) {
        throw new Error("Missing the required parameter 'userDetailsCreate' when calling systemUserControllerCreateModel");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = BaseResponseUserDetailsDetails;
      return this.apiClient.callApi(
        '/api/v1/system/user/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the systemUserControllerGetDetailsByContext operation.
     * @callback module:api/SystemUserControllerApi~systemUserControllerGetDetailsByContextCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResponseUserDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:api/SystemUserControllerApi~systemUserControllerGetDetailsByContextCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BaseResponseUserDetails}
     */
    systemUserControllerGetDetailsByContext(callback) {
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
      let returnType = BaseResponseUserDetails;
      return this.apiClient.callApi(
        '/api/v1/system/user/details/context', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the systemUserControllerGetDetailsById operation.
     * @callback module:api/SystemUserControllerApi~systemUserControllerGetDetailsByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResponseUserDetailsDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {String} id 
     * @param {module:api/SystemUserControllerApi~systemUserControllerGetDetailsByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BaseResponseUserDetailsDetails}
     */
    systemUserControllerGetDetailsById(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling systemUserControllerGetDetailsById");
      }

      let pathParams = {
        'id': id
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
      let returnType = BaseResponseUserDetailsDetails;
      return this.apiClient.callApi(
        '/api/v1/system/user/{id}/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the systemUserControllerGetInfoPageWithFilter operation.
     * @callback module:api/SystemUserControllerApi~systemUserControllerGetInfoPageWithFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BasePagingResponseUserInfoInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} [email] 
     * @param {String} [phone] 
     * @param {Number} [page = 0)] Zero-based page index (0..N)
     * @param {Number} [size = 20)] The size of the page to be returned
     * @param {Array.<String>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {module:api/SystemUserControllerApi~systemUserControllerGetInfoPageWithFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BasePagingResponseUserInfoInfo}
     */
    systemUserControllerGetInfoPageWithFilter(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'email': opts['email'],
        'phone': opts['phone'],
        'page': opts['page'],
        'size': opts['size'],
        'sort': this.apiClient.buildCollectionParam(opts['sort'], 'multi')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = BasePagingResponseUserInfoInfo;
      return this.apiClient.callApi(
        '/api/v1/system/user/info/page/filter', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the systemUserControllerUpdateModel operation.
     * @callback module:api/SystemUserControllerApi~systemUserControllerUpdateModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResponseUserDetailsDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/UserDetailsUpdate} userDetailsUpdate 
     * @param {module:api/SystemUserControllerApi~systemUserControllerUpdateModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BaseResponseUserDetailsDetails}
     */
    systemUserControllerUpdateModel(userDetailsUpdate, callback) {
      let postBody = userDetailsUpdate;
      // verify the required parameter 'userDetailsUpdate' is set
      if (userDetailsUpdate === undefined || userDetailsUpdate === null) {
        throw new Error("Missing the required parameter 'userDetailsUpdate' when calling systemUserControllerUpdateModel");
      }

      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = ['application/json'];
      let accepts = ['*/*'];
      let returnType = BaseResponseUserDetailsDetails;
      return this.apiClient.callApi(
        '/api/v1/system/user/update', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
