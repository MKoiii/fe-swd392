import { ENV, TOKEN } from "../constant";
import { ApiClient } from "./generated/generate-api";
import superagent from "superagent";
import querystring from "querystring";
import { refreshToken } from "../utils/firebase";

const ApiClientSingleton = (function () {
  var instance;
  const apiNoAuth = ["/api/v1/course/by-status-active"];
  const serverUrl = ENV.API_URL;

  function createInstance() {
    var object = new ApiClient(serverUrl);
    object.applyAuthToRequest = (request, authNames) => {
      if (!apiNoAuth.includes(subString(request.url))) {
        request.set({ Authorization: "Bearer " + TOKEN.getAccessToken() });
      }
    };
    object.callApi = (
      path,
      httpMethod,
      pathParams,
      queryParams,
      headerParams,
      formParams,
      bodyParam,
      authNames,
      contentTypes,
      accepts,
      returnType,
      apiBasePath,
      callback
    ) => {
      var url = object.buildUrl(path, pathParams, apiBasePath);
      var request = superagent(httpMethod, url);

      if (object.plugins !== null) {
        for (var index in object.plugins) {
          if (object.plugins.hasOwnProperty(index)) {
            request.use(object.plugins[index]);
          }
        }
      }

      // apply authentications
      object.applyAuthToRequest(request, authNames);

      // set query parameters
      if (httpMethod.toUpperCase() === "GET" && object.cache === false) {
        queryParams["_"] = new Date().getTime();
      }

      request.query(object.normalizeParams(queryParams));

      // set header parameters
      request
        .set(object.defaultHeaders)
        .set(object.normalizeParams(headerParams));

      // set requestAgent if it is set by user
      if (object.requestAgent) {
        request.agent(object.requestAgent);
      }

      // set request timeout
      request.timeout(object.timeout);

      var contentType = object.jsonPreferredMime(contentTypes);
      if (contentType) {
        // Issue with superagent and multipart/form-data (https://github.com/visionmedia/superagent/issues/746)
        if (contentType != "multipart/form-data") {
          request.type(contentType);
        }
      }

      if (contentType === "application/x-www-form-urlencoded") {
        request.send(querystring.stringify(object.normalizeParams(formParams)));
      } else if (contentType == "multipart/form-data") {
        var _formParams = object.normalizeParams(formParams);
        for (var key in _formParams) {
          if (_formParams.hasOwnProperty(key)) {
            let _formParamsValue = _formParams[key];
            if (object.isFileParam(_formParamsValue)) {
              // file field
              request.attach(key, _formParamsValue);
            } else if (
              Array.isArray(_formParamsValue) &&
              _formParamsValue.length &&
              object.isFileParam(_formParamsValue[0])
            ) {
              // multiple files
              _formParamsValue.forEach((file) => request.attach(key, file));
            } else {
              request.field(key, _formParamsValue);
            }
          }
        }
      } else if (bodyParam !== null && bodyParam !== undefined) {
        if (!request.header["Content-Type"]) {
          request.type("application/json");
        }
        request.send(bodyParam);
      }

      var accept = object.jsonPreferredMime(accepts);
      if (accept) {
        request.accept(accept);
      }

      if (returnType === "Blob") {
        request.responseType("blob");
      } else if (returnType === "String") {
        request.responseType("text");
      }

      // Attach previously saved cookies, if enabled
      if (object.enableCookies) {
        if (typeof window === "undefined") {
          object.agent._attachCookies(request);
        } else {
          request.withCredentials();
        }
      }

      request.end(async (error, response) => {
        while (response?.status === 401) {
          const newToken = await refreshToken();
          TOKEN.setAccessToken(newToken);
          request
            .set({ Authorization: "Bearer " + newToken })
            .retry(1, (error, response) => {
              try {
                data = object.deserialize(response, returnType);
                if (object.enableCookies && typeof window === "undefined") {
                  object.agent._saveCookies(response);
                }
              } catch (err) {
                error = err;
              }
              callback(error, data, response);
            });
        }
        if (callback) {
          var data = null;
          if (!error) {
            try {
              data = object.deserialize(response, returnType);
              if (object.enableCookies && typeof window === "undefined") {
                object.agent._saveCookies(response);
              }
            } catch (err) {
              error = err;
            }
          }

          callback(error, data, response);
        }
      });

      return request;
    };
    return object;
  }

  function subString(url) {
    return url.substring(serverUrl?.length, url?.length);
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    },
  };
})();

export default ApiClientSingleton;
