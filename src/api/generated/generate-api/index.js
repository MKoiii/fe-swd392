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


import ApiClient from './ApiClient';
import AppChangeStatusMerchantRequest from './model/AppChangeStatusMerchantRequest';
import AppCreateMerchantRequestCreate from './model/AppCreateMerchantRequestCreate';
import AppUpdateMerchantRequestUpdate from './model/AppUpdateMerchantRequestUpdate';
import BasePagingResponseMerchantInfoInfo from './model/BasePagingResponseMerchantInfoInfo';
import BasePagingResponseOrderInfoInfo from './model/BasePagingResponseOrderInfoInfo';
import BasePagingResponseProductInfo from './model/BasePagingResponseProductInfo';
import BasePagingResponseProductInfoInfo from './model/BasePagingResponseProductInfoInfo';
import BasePagingResponseUserInfoInfo from './model/BasePagingResponseUserInfoInfo';
import BaseResponseCreateOrderResponse from './model/BaseResponseCreateOrderResponse';
import BaseResponseListLocationInfoInfo from './model/BaseResponseListLocationInfoInfo';
import BaseResponseListProductCategoryInfo from './model/BaseResponseListProductCategoryInfo';
import BaseResponseListProductCategoryInfoInfo from './model/BaseResponseListProductCategoryInfoInfo';
import BaseResponseListRoleInfoInfo from './model/BaseResponseListRoleInfoInfo';
import BaseResponseListSkuInfoInfo from './model/BaseResponseListSkuInfoInfo';
import BaseResponseListUserAddressInfoInfo from './model/BaseResponseListUserAddressInfoInfo';
import BaseResponseMerchantDetails from './model/BaseResponseMerchantDetails';
import BaseResponseMerchantDetailsDetails from './model/BaseResponseMerchantDetailsDetails';
import BaseResponseMerchantInfoInfo from './model/BaseResponseMerchantInfoInfo';
import BaseResponsePreSignUrl from './model/BaseResponsePreSignUrl';
import BaseResponseProductCategoryInfoDetails from './model/BaseResponseProductCategoryInfoDetails';
import BaseResponseProductDetails from './model/BaseResponseProductDetails';
import BaseResponseProductDetailsDetails from './model/BaseResponseProductDetailsDetails';
import BaseResponseSkuInfoDetails from './model/BaseResponseSkuInfoDetails';
import BaseResponseUploadResult from './model/BaseResponseUploadResult';
import BaseResponseUserAddressInfoDetails from './model/BaseResponseUserAddressInfoDetails';
import BaseResponseUserDetails from './model/BaseResponseUserDetails';
import BaseResponseUserDetailsDetails from './model/BaseResponseUserDetailsDetails';
import ChangeOrderProductCategoryRequest from './model/ChangeOrderProductCategoryRequest';
import CreateOrderItemRequest from './model/CreateOrderItemRequest';
import CreateOrderRequest from './model/CreateOrderRequest';
import CreateOrderResponse from './model/CreateOrderResponse';
import CreateProductRequestCreate from './model/CreateProductRequestCreate';
import CreateSkuRequestCreate from './model/CreateSkuRequestCreate';
import CreateUserAddressRequestCreate from './model/CreateUserAddressRequestCreate';
import ErrorResponse from './model/ErrorResponse';
import LocationInfoInfo from './model/LocationInfoInfo';
import MerchantDetails from './model/MerchantDetails';
import MerchantDetailsDetails from './model/MerchantDetailsDetails';
import MerchantInfoInfo from './model/MerchantInfoInfo';
import OrderExtraVariantInfo from './model/OrderExtraVariantInfo';
import OrderInfoInfo from './model/OrderInfoInfo';
import OrderItemInfoInfo from './model/OrderItemInfoInfo';
import PreSignUrl from './model/PreSignUrl';
import ProductCategoryInfo from './model/ProductCategoryInfo';
import ProductCategoryInfoCreate from './model/ProductCategoryInfoCreate';
import ProductCategoryInfoDetails from './model/ProductCategoryInfoDetails';
import ProductCategoryInfoInfo from './model/ProductCategoryInfoInfo';
import ProductCategoryInfoUpdate from './model/ProductCategoryInfoUpdate';
import ProductConfigInfo from './model/ProductConfigInfo';
import ProductConfigInfoCreate from './model/ProductConfigInfoCreate';
import ProductConfigInfoDetails from './model/ProductConfigInfoDetails';
import ProductConfigInfoUpdate from './model/ProductConfigInfoUpdate';
import ProductDetails from './model/ProductDetails';
import ProductDetailsDetails from './model/ProductDetailsDetails';
import ProductInfo from './model/ProductInfo';
import ProductInfoInfo from './model/ProductInfoInfo';
import ProductVariantInfo from './model/ProductVariantInfo';
import ProductVariantInfoCreate from './model/ProductVariantInfoCreate';
import ProductVariantInfoDetails from './model/ProductVariantInfoDetails';
import ProductVariantInfoInfo from './model/ProductVariantInfoInfo';
import ProductVariantInfoUpdate from './model/ProductVariantInfoUpdate';
import RegisterUserRequest from './model/RegisterUserRequest';
import RoleInfoInfo from './model/RoleInfoInfo';
import SkuInfo from './model/SkuInfo';
import SkuInfoDetails from './model/SkuInfoDetails';
import SkuInfoInfo from './model/SkuInfoInfo';
import SuccessResponse from './model/SuccessResponse';
import SystemApproveOrRejectMerchantRequest from './model/SystemApproveOrRejectMerchantRequest';
import UpdateProductRequestUpdate from './model/UpdateProductRequestUpdate';
import UpdateSkuRequestUpdate from './model/UpdateSkuRequestUpdate';
import UpdateUserAddressRequestUpdate from './model/UpdateUserAddressRequestUpdate';
import UploadResult from './model/UploadResult';
import UserAddressInfoDetails from './model/UserAddressInfoDetails';
import UserAddressInfoInfo from './model/UserAddressInfoInfo';
import UserDetails from './model/UserDetails';
import UserDetailsCreate from './model/UserDetailsCreate';
import UserDetailsDetails from './model/UserDetailsDetails';
import UserDetailsUpdate from './model/UserDetailsUpdate';
import UserInfoInfo from './model/UserInfoInfo';
import AppMerchantControllerApi from './api/AppMerchantControllerApi';
import AppOrderControllerApi from './api/AppOrderControllerApi';
import AppProductCategoryControllerApi from './api/AppProductCategoryControllerApi';
import AppProductControllerApi from './api/AppProductControllerApi';
import AppUserAddressControllerApi from './api/AppUserAddressControllerApi';
import AppUserControllerApi from './api/AppUserControllerApi';
import AuthControllerApi from './api/AuthControllerApi';
import LocationControllerApi from './api/LocationControllerApi';
import MediaControllerApi from './api/MediaControllerApi';
import PaymentControllerApi from './api/PaymentControllerApi';
import SystemMerchantControllerApi from './api/SystemMerchantControllerApi';
import SystemProductCategoryControllerApi from './api/SystemProductCategoryControllerApi';
import SystemRoleControllerApi from './api/SystemRoleControllerApi';
import SystemSkuControllerApi from './api/SystemSkuControllerApi';
import SystemUserControllerApi from './api/SystemUserControllerApi';


/**
* API documentation of SWD_392 Auction v1.0.0.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Swd392AuctionApi = require('index'); // See note below*.
* var xxxSvc = new Swd392AuctionApi.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Swd392AuctionApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Swd392AuctionApi.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Swd392AuctionApi.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AppChangeStatusMerchantRequest model constructor.
     * @property {module:model/AppChangeStatusMerchantRequest}
     */
    AppChangeStatusMerchantRequest,

    /**
     * The AppCreateMerchantRequestCreate model constructor.
     * @property {module:model/AppCreateMerchantRequestCreate}
     */
    AppCreateMerchantRequestCreate,

    /**
     * The AppUpdateMerchantRequestUpdate model constructor.
     * @property {module:model/AppUpdateMerchantRequestUpdate}
     */
    AppUpdateMerchantRequestUpdate,

    /**
     * The BasePagingResponseMerchantInfoInfo model constructor.
     * @property {module:model/BasePagingResponseMerchantInfoInfo}
     */
    BasePagingResponseMerchantInfoInfo,

    /**
     * The BasePagingResponseOrderInfoInfo model constructor.
     * @property {module:model/BasePagingResponseOrderInfoInfo}
     */
    BasePagingResponseOrderInfoInfo,

    /**
     * The BasePagingResponseProductInfo model constructor.
     * @property {module:model/BasePagingResponseProductInfo}
     */
    BasePagingResponseProductInfo,

    /**
     * The BasePagingResponseProductInfoInfo model constructor.
     * @property {module:model/BasePagingResponseProductInfoInfo}
     */
    BasePagingResponseProductInfoInfo,

    /**
     * The BasePagingResponseUserInfoInfo model constructor.
     * @property {module:model/BasePagingResponseUserInfoInfo}
     */
    BasePagingResponseUserInfoInfo,

    /**
     * The BaseResponseCreateOrderResponse model constructor.
     * @property {module:model/BaseResponseCreateOrderResponse}
     */
    BaseResponseCreateOrderResponse,

    /**
     * The BaseResponseListLocationInfoInfo model constructor.
     * @property {module:model/BaseResponseListLocationInfoInfo}
     */
    BaseResponseListLocationInfoInfo,

    /**
     * The BaseResponseListProductCategoryInfo model constructor.
     * @property {module:model/BaseResponseListProductCategoryInfo}
     */
    BaseResponseListProductCategoryInfo,

    /**
     * The BaseResponseListProductCategoryInfoInfo model constructor.
     * @property {module:model/BaseResponseListProductCategoryInfoInfo}
     */
    BaseResponseListProductCategoryInfoInfo,

    /**
     * The BaseResponseListRoleInfoInfo model constructor.
     * @property {module:model/BaseResponseListRoleInfoInfo}
     */
    BaseResponseListRoleInfoInfo,

    /**
     * The BaseResponseListSkuInfoInfo model constructor.
     * @property {module:model/BaseResponseListSkuInfoInfo}
     */
    BaseResponseListSkuInfoInfo,

    /**
     * The BaseResponseListUserAddressInfoInfo model constructor.
     * @property {module:model/BaseResponseListUserAddressInfoInfo}
     */
    BaseResponseListUserAddressInfoInfo,

    /**
     * The BaseResponseMerchantDetails model constructor.
     * @property {module:model/BaseResponseMerchantDetails}
     */
    BaseResponseMerchantDetails,

    /**
     * The BaseResponseMerchantDetailsDetails model constructor.
     * @property {module:model/BaseResponseMerchantDetailsDetails}
     */
    BaseResponseMerchantDetailsDetails,

    /**
     * The BaseResponseMerchantInfoInfo model constructor.
     * @property {module:model/BaseResponseMerchantInfoInfo}
     */
    BaseResponseMerchantInfoInfo,

    /**
     * The BaseResponsePreSignUrl model constructor.
     * @property {module:model/BaseResponsePreSignUrl}
     */
    BaseResponsePreSignUrl,

    /**
     * The BaseResponseProductCategoryInfoDetails model constructor.
     * @property {module:model/BaseResponseProductCategoryInfoDetails}
     */
    BaseResponseProductCategoryInfoDetails,

    /**
     * The BaseResponseProductDetails model constructor.
     * @property {module:model/BaseResponseProductDetails}
     */
    BaseResponseProductDetails,

    /**
     * The BaseResponseProductDetailsDetails model constructor.
     * @property {module:model/BaseResponseProductDetailsDetails}
     */
    BaseResponseProductDetailsDetails,

    /**
     * The BaseResponseSkuInfoDetails model constructor.
     * @property {module:model/BaseResponseSkuInfoDetails}
     */
    BaseResponseSkuInfoDetails,

    /**
     * The BaseResponseUploadResult model constructor.
     * @property {module:model/BaseResponseUploadResult}
     */
    BaseResponseUploadResult,

    /**
     * The BaseResponseUserAddressInfoDetails model constructor.
     * @property {module:model/BaseResponseUserAddressInfoDetails}
     */
    BaseResponseUserAddressInfoDetails,

    /**
     * The BaseResponseUserDetails model constructor.
     * @property {module:model/BaseResponseUserDetails}
     */
    BaseResponseUserDetails,

    /**
     * The BaseResponseUserDetailsDetails model constructor.
     * @property {module:model/BaseResponseUserDetailsDetails}
     */
    BaseResponseUserDetailsDetails,

    /**
     * The ChangeOrderProductCategoryRequest model constructor.
     * @property {module:model/ChangeOrderProductCategoryRequest}
     */
    ChangeOrderProductCategoryRequest,

    /**
     * The CreateOrderItemRequest model constructor.
     * @property {module:model/CreateOrderItemRequest}
     */
    CreateOrderItemRequest,

    /**
     * The CreateOrderRequest model constructor.
     * @property {module:model/CreateOrderRequest}
     */
    CreateOrderRequest,

    /**
     * The CreateOrderResponse model constructor.
     * @property {module:model/CreateOrderResponse}
     */
    CreateOrderResponse,

    /**
     * The CreateProductRequestCreate model constructor.
     * @property {module:model/CreateProductRequestCreate}
     */
    CreateProductRequestCreate,

    /**
     * The CreateSkuRequestCreate model constructor.
     * @property {module:model/CreateSkuRequestCreate}
     */
    CreateSkuRequestCreate,

    /**
     * The CreateUserAddressRequestCreate model constructor.
     * @property {module:model/CreateUserAddressRequestCreate}
     */
    CreateUserAddressRequestCreate,

    /**
     * The ErrorResponse model constructor.
     * @property {module:model/ErrorResponse}
     */
    ErrorResponse,

    /**
     * The LocationInfoInfo model constructor.
     * @property {module:model/LocationInfoInfo}
     */
    LocationInfoInfo,

    /**
     * The MerchantDetails model constructor.
     * @property {module:model/MerchantDetails}
     */
    MerchantDetails,

    /**
     * The MerchantDetailsDetails model constructor.
     * @property {module:model/MerchantDetailsDetails}
     */
    MerchantDetailsDetails,

    /**
     * The MerchantInfoInfo model constructor.
     * @property {module:model/MerchantInfoInfo}
     */
    MerchantInfoInfo,

    /**
     * The OrderExtraVariantInfo model constructor.
     * @property {module:model/OrderExtraVariantInfo}
     */
    OrderExtraVariantInfo,

    /**
     * The OrderInfoInfo model constructor.
     * @property {module:model/OrderInfoInfo}
     */
    OrderInfoInfo,

    /**
     * The OrderItemInfoInfo model constructor.
     * @property {module:model/OrderItemInfoInfo}
     */
    OrderItemInfoInfo,

    /**
     * The PreSignUrl model constructor.
     * @property {module:model/PreSignUrl}
     */
    PreSignUrl,

    /**
     * The ProductCategoryInfo model constructor.
     * @property {module:model/ProductCategoryInfo}
     */
    ProductCategoryInfo,

    /**
     * The ProductCategoryInfoCreate model constructor.
     * @property {module:model/ProductCategoryInfoCreate}
     */
    ProductCategoryInfoCreate,

    /**
     * The ProductCategoryInfoDetails model constructor.
     * @property {module:model/ProductCategoryInfoDetails}
     */
    ProductCategoryInfoDetails,

    /**
     * The ProductCategoryInfoInfo model constructor.
     * @property {module:model/ProductCategoryInfoInfo}
     */
    ProductCategoryInfoInfo,

    /**
     * The ProductCategoryInfoUpdate model constructor.
     * @property {module:model/ProductCategoryInfoUpdate}
     */
    ProductCategoryInfoUpdate,

    /**
     * The ProductConfigInfo model constructor.
     * @property {module:model/ProductConfigInfo}
     */
    ProductConfigInfo,

    /**
     * The ProductConfigInfoCreate model constructor.
     * @property {module:model/ProductConfigInfoCreate}
     */
    ProductConfigInfoCreate,

    /**
     * The ProductConfigInfoDetails model constructor.
     * @property {module:model/ProductConfigInfoDetails}
     */
    ProductConfigInfoDetails,

    /**
     * The ProductConfigInfoUpdate model constructor.
     * @property {module:model/ProductConfigInfoUpdate}
     */
    ProductConfigInfoUpdate,

    /**
     * The ProductDetails model constructor.
     * @property {module:model/ProductDetails}
     */
    ProductDetails,

    /**
     * The ProductDetailsDetails model constructor.
     * @property {module:model/ProductDetailsDetails}
     */
    ProductDetailsDetails,

    /**
     * The ProductInfo model constructor.
     * @property {module:model/ProductInfo}
     */
    ProductInfo,

    /**
     * The ProductInfoInfo model constructor.
     * @property {module:model/ProductInfoInfo}
     */
    ProductInfoInfo,

    /**
     * The ProductVariantInfo model constructor.
     * @property {module:model/ProductVariantInfo}
     */
    ProductVariantInfo,

    /**
     * The ProductVariantInfoCreate model constructor.
     * @property {module:model/ProductVariantInfoCreate}
     */
    ProductVariantInfoCreate,

    /**
     * The ProductVariantInfoDetails model constructor.
     * @property {module:model/ProductVariantInfoDetails}
     */
    ProductVariantInfoDetails,

    /**
     * The ProductVariantInfoInfo model constructor.
     * @property {module:model/ProductVariantInfoInfo}
     */
    ProductVariantInfoInfo,

    /**
     * The ProductVariantInfoUpdate model constructor.
     * @property {module:model/ProductVariantInfoUpdate}
     */
    ProductVariantInfoUpdate,

    /**
     * The RegisterUserRequest model constructor.
     * @property {module:model/RegisterUserRequest}
     */
    RegisterUserRequest,

    /**
     * The RoleInfoInfo model constructor.
     * @property {module:model/RoleInfoInfo}
     */
    RoleInfoInfo,

    /**
     * The SkuInfo model constructor.
     * @property {module:model/SkuInfo}
     */
    SkuInfo,

    /**
     * The SkuInfoDetails model constructor.
     * @property {module:model/SkuInfoDetails}
     */
    SkuInfoDetails,

    /**
     * The SkuInfoInfo model constructor.
     * @property {module:model/SkuInfoInfo}
     */
    SkuInfoInfo,

    /**
     * The SuccessResponse model constructor.
     * @property {module:model/SuccessResponse}
     */
    SuccessResponse,

    /**
     * The SystemApproveOrRejectMerchantRequest model constructor.
     * @property {module:model/SystemApproveOrRejectMerchantRequest}
     */
    SystemApproveOrRejectMerchantRequest,

    /**
     * The UpdateProductRequestUpdate model constructor.
     * @property {module:model/UpdateProductRequestUpdate}
     */
    UpdateProductRequestUpdate,

    /**
     * The UpdateSkuRequestUpdate model constructor.
     * @property {module:model/UpdateSkuRequestUpdate}
     */
    UpdateSkuRequestUpdate,

    /**
     * The UpdateUserAddressRequestUpdate model constructor.
     * @property {module:model/UpdateUserAddressRequestUpdate}
     */
    UpdateUserAddressRequestUpdate,

    /**
     * The UploadResult model constructor.
     * @property {module:model/UploadResult}
     */
    UploadResult,

    /**
     * The UserAddressInfoDetails model constructor.
     * @property {module:model/UserAddressInfoDetails}
     */
    UserAddressInfoDetails,

    /**
     * The UserAddressInfoInfo model constructor.
     * @property {module:model/UserAddressInfoInfo}
     */
    UserAddressInfoInfo,

    /**
     * The UserDetails model constructor.
     * @property {module:model/UserDetails}
     */
    UserDetails,

    /**
     * The UserDetailsCreate model constructor.
     * @property {module:model/UserDetailsCreate}
     */
    UserDetailsCreate,

    /**
     * The UserDetailsDetails model constructor.
     * @property {module:model/UserDetailsDetails}
     */
    UserDetailsDetails,

    /**
     * The UserDetailsUpdate model constructor.
     * @property {module:model/UserDetailsUpdate}
     */
    UserDetailsUpdate,

    /**
     * The UserInfoInfo model constructor.
     * @property {module:model/UserInfoInfo}
     */
    UserInfoInfo,

    /**
    * The AppMerchantControllerApi service constructor.
    * @property {module:api/AppMerchantControllerApi}
    */
    AppMerchantControllerApi,

    /**
    * The AppOrderControllerApi service constructor.
    * @property {module:api/AppOrderControllerApi}
    */
    AppOrderControllerApi,

    /**
    * The AppProductCategoryControllerApi service constructor.
    * @property {module:api/AppProductCategoryControllerApi}
    */
    AppProductCategoryControllerApi,

    /**
    * The AppProductControllerApi service constructor.
    * @property {module:api/AppProductControllerApi}
    */
    AppProductControllerApi,

    /**
    * The AppUserAddressControllerApi service constructor.
    * @property {module:api/AppUserAddressControllerApi}
    */
    AppUserAddressControllerApi,

    /**
    * The AppUserControllerApi service constructor.
    * @property {module:api/AppUserControllerApi}
    */
    AppUserControllerApi,

    /**
    * The AuthControllerApi service constructor.
    * @property {module:api/AuthControllerApi}
    */
    AuthControllerApi,

    /**
    * The LocationControllerApi service constructor.
    * @property {module:api/LocationControllerApi}
    */
    LocationControllerApi,

    /**
    * The MediaControllerApi service constructor.
    * @property {module:api/MediaControllerApi}
    */
    MediaControllerApi,

    /**
    * The PaymentControllerApi service constructor.
    * @property {module:api/PaymentControllerApi}
    */
    PaymentControllerApi,

    /**
    * The SystemMerchantControllerApi service constructor.
    * @property {module:api/SystemMerchantControllerApi}
    */
    SystemMerchantControllerApi,

    /**
    * The SystemProductCategoryControllerApi service constructor.
    * @property {module:api/SystemProductCategoryControllerApi}
    */
    SystemProductCategoryControllerApi,

    /**
    * The SystemRoleControllerApi service constructor.
    * @property {module:api/SystemRoleControllerApi}
    */
    SystemRoleControllerApi,

    /**
    * The SystemSkuControllerApi service constructor.
    * @property {module:api/SystemSkuControllerApi}
    */
    SystemSkuControllerApi,

    /**
    * The SystemUserControllerApi service constructor.
    * @property {module:api/SystemUserControllerApi}
    */
    SystemUserControllerApi
};
