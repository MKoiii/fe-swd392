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
import BaseResponseListProductCategoryInfoInfo from '../model/BaseResponseListProductCategoryInfoInfo';
import BaseResponseProductCategoryInfoDetails from '../model/BaseResponseProductCategoryInfoDetails';
import ChangeOrderProductCategoryRequest from '../model/ChangeOrderProductCategoryRequest';
import ErrorResponse from '../model/ErrorResponse';
import ProductCategoryInfoCreate from '../model/ProductCategoryInfoCreate';
import ProductCategoryInfoUpdate from '../model/ProductCategoryInfoUpdate';
import SuccessResponse from '../model/SuccessResponse';

/**
* SystemProductCategoryController service.
* @module api/SystemProductCategoryControllerApi
* @version 1.0.0
*/
export default class SystemProductCategoryControllerApi {

    /**
    * Constructs a new SystemProductCategoryControllerApi. 
    * @alias module:api/SystemProductCategoryControllerApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }


    /**
     * Callback function to receive the result of the systemProductCategoryControllerChangeOrder operation.
     * @callback module:api/SystemProductCategoryControllerApi~systemProductCategoryControllerChangeOrderCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/ChangeOrderProductCategoryRequest} changeOrderProductCategoryRequest 
     * @param {module:api/SystemProductCategoryControllerApi~systemProductCategoryControllerChangeOrderCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    systemProductCategoryControllerChangeOrder(changeOrderProductCategoryRequest, callback) {
      let postBody = changeOrderProductCategoryRequest;
      // verify the required parameter 'changeOrderProductCategoryRequest' is set
      if (changeOrderProductCategoryRequest === undefined || changeOrderProductCategoryRequest === null) {
        throw new Error("Missing the required parameter 'changeOrderProductCategoryRequest' when calling systemProductCategoryControllerChangeOrder");
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
        '/api/v1/system/product-category/changeOrder', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the systemProductCategoryControllerCreateModel operation.
     * @callback module:api/SystemProductCategoryControllerApi~systemProductCategoryControllerCreateModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResponseProductCategoryInfoDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/ProductCategoryInfoCreate} productCategoryInfoCreate 
     * @param {module:api/SystemProductCategoryControllerApi~systemProductCategoryControllerCreateModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BaseResponseProductCategoryInfoDetails}
     */
    systemProductCategoryControllerCreateModel(productCategoryInfoCreate, callback) {
      let postBody = productCategoryInfoCreate;
      // verify the required parameter 'productCategoryInfoCreate' is set
      if (productCategoryInfoCreate === undefined || productCategoryInfoCreate === null) {
        throw new Error("Missing the required parameter 'productCategoryInfoCreate' when calling systemProductCategoryControllerCreateModel");
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
      let returnType = BaseResponseProductCategoryInfoDetails;
      return this.apiClient.callApi(
        '/api/v1/system/product-category/create', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the systemProductCategoryControllerDeleteModelById operation.
     * @callback module:api/SystemProductCategoryControllerApi~systemProductCategoryControllerDeleteModelByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SuccessResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/SystemProductCategoryControllerApi~systemProductCategoryControllerDeleteModelByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SuccessResponse}
     */
    systemProductCategoryControllerDeleteModelById(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling systemProductCategoryControllerDeleteModelById");
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
      let returnType = SuccessResponse;
      return this.apiClient.callApi(
        '/api/v1/system/product-category/{id}/delete', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the systemProductCategoryControllerGetDetailsById operation.
     * @callback module:api/SystemProductCategoryControllerApi~systemProductCategoryControllerGetDetailsByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResponseProductCategoryInfoDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Number} id 
     * @param {module:api/SystemProductCategoryControllerApi~systemProductCategoryControllerGetDetailsByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BaseResponseProductCategoryInfoDetails}
     */
    systemProductCategoryControllerGetDetailsById(id, callback) {
      let postBody = null;
      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling systemProductCategoryControllerGetDetailsById");
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
      let returnType = BaseResponseProductCategoryInfoDetails;
      return this.apiClient.callApi(
        '/api/v1/system/product-category/{id}/details', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the systemProductCategoryControllerGetInfoListWithFilter operation.
     * @callback module:api/SystemProductCategoryControllerApi~systemProductCategoryControllerGetInfoListWithFilterCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResponseListProductCategoryInfoInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {Object} opts Optional parameters
     * @param {Number} [parentId] 
     * @param {module:model/String} [status] 
     * @param {module:api/SystemProductCategoryControllerApi~systemProductCategoryControllerGetInfoListWithFilterCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BaseResponseListProductCategoryInfoInfo}
     */
    systemProductCategoryControllerGetInfoListWithFilter(opts, callback) {
      opts = opts || {};
      let postBody = null;

      let pathParams = {
      };
      let queryParams = {
        'parentId': opts['parentId'],
        'status': opts['status']
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['Authorization'];
      let contentTypes = [];
      let accepts = ['*/*'];
      let returnType = BaseResponseListProductCategoryInfoInfo;
      return this.apiClient.callApi(
        '/api/v1/system/product-category/list', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }

    /**
     * Callback function to receive the result of the systemProductCategoryControllerUpdateModel operation.
     * @callback module:api/SystemProductCategoryControllerApi~systemProductCategoryControllerUpdateModelCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BaseResponseProductCategoryInfoDetails} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * @param {module:model/ProductCategoryInfoUpdate} productCategoryInfoUpdate 
     * @param {module:api/SystemProductCategoryControllerApi~systemProductCategoryControllerUpdateModelCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BaseResponseProductCategoryInfoDetails}
     */
    systemProductCategoryControllerUpdateModel(productCategoryInfoUpdate, callback) {
      let postBody = productCategoryInfoUpdate;
      // verify the required parameter 'productCategoryInfoUpdate' is set
      if (productCategoryInfoUpdate === undefined || productCategoryInfoUpdate === null) {
        throw new Error("Missing the required parameter 'productCategoryInfoUpdate' when calling systemProductCategoryControllerUpdateModel");
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
      let returnType = BaseResponseProductCategoryInfoDetails;
      return this.apiClient.callApi(
        '/api/v1/system/product-category/update', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, null, callback
      );
    }


}
