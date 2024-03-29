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
import BasePagingResponseMerchantInfoInfo from '../model/BasePagingResponseMerchantInfoInfo';
import BaseResponseMerchantDetailsDetails from '../model/BaseResponseMerchantDetailsDetails';
import ErrorResponse from '../model/ErrorResponse';
import SuccessResponse from '../model/SuccessResponse';
import SystemApproveOrRejectMerchantRequest from '../model/SystemApproveOrRejectMerchantRequest';

/**
* SystemMerchantController service.
* @module api/SystemMerchantControllerApi
* @version 1.0.0
*/
export default class SystemMerchantControllerApi {

    /**
    * Constructs a new SystemMerchantControllerApi. 
    * @alias module:api/SystemMerchantControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the systemMerchantControllerApproveOrRejectMerchant operation.
     * @callback module:api/SystemMerchantControllerApi~systemMerchantControllerApproveOrRejectMerchantCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/SystemApproveOrRejectMerchantRequest} systemApproveOrRejectMerchantRequest 
     * @param {module:api/SystemMerchantControllerApi~systemMerchantControllerApproveOrRejectMerchantCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    systemMerchantControllerApproveOrRejectMerchant(systemApproveOrRejectMerchantRequest, callback) {
      let postBody = systemApproveOrRejectMerchantRequest;
      // verify the required parameter 'systemApproveOrRejectMerchantRequest' is set
      if (systemApproveOrRejectMerchantRequest === undefined || systemApproveOrRejectMerchantRequest === null) {
        throw new Error("Missing the required parameter 'systemApproveOrRejectMerchantRequest' when calling systemMerchantControllerApproveOrRejectMerchant");
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
        '/api/v1/system/merchant/change-status', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the systemMerchantControllerGetDetailsById operation.
     * @callback module:api/SystemMerchantControllerApi~systemMerchantControllerGetDetailsByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResponseMerchantDetailsDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/SystemMerchantControllerApi~systemMerchantControllerGetDetailsByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BaseResponseMerchantDetailsDetails}
     */
    systemMerchantControllerGetDetailsById(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling systemMerchantControllerGetDetailsById");
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
      let returnType = BaseResponseMerchantDetailsDetails;
      return this.apiClient.callApi(
        '/api/v1/system/merchant/{id}/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the systemMerchantControllerGetInfoPageWithFilter operation.
     * @callback module:api/SystemMerchantControllerApi~systemMerchantControllerGetInfoPageWithFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BasePagingResponseMerchantInfoInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {String} [name] 
     * @param {String} [phone] 
     * @param {String} [representativeEmail] 
     * @param {module:model/String} [status] 
     * @param {Number} [page = 0)] Zero-based page index (0..N)
     * @param {Number} [size = 20)] The size of the page to be returned
     * @param {Array.<String>} [sort] Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported.
     * @param {module:api/SystemMerchantControllerApi~systemMerchantControllerGetInfoPageWithFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BasePagingResponseMerchantInfoInfo}
     */
    systemMerchantControllerGetInfoPageWithFilter(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'name': opts['name'],
        'phone': opts['phone'],
        'representativeEmail': opts['representativeEmail'],
        'status': opts['status'],
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
      let returnType = BasePagingResponseMerchantInfoInfo;
      return this.apiClient.callApi(
        '/api/v1/system/merchant/info/page/filter', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
