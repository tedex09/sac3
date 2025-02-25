"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/requests/route";
exports.ids = ["app/api/requests/route"];
exports.modules = {

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frequests%2Froute&page=%2Fapi%2Frequests%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frequests%2Froute.ts&appDir=%2FUsers%2Fjosemarlima%2FDownloads%2Fproject%206%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjosemarlima%2FDownloads%2Fproject%206&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frequests%2Froute&page=%2Fapi%2Frequests%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frequests%2Froute.ts&appDir=%2FUsers%2Fjosemarlima%2FDownloads%2Fproject%206%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjosemarlima%2FDownloads%2Fproject%206&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   headerHooks: () => (/* binding */ headerHooks),\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),\n/* harmony export */   staticGenerationBailout: () => (/* binding */ staticGenerationBailout)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_josemarlima_Downloads_project_6_src_app_api_requests_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/requests/route.ts */ \"(rsc)/./src/app/api/requests/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/requests/route\",\n        pathname: \"/api/requests\",\n        filename: \"route\",\n        bundlePath: \"app/api/requests/route\"\n    },\n    resolvedPagePath: \"/Users/josemarlima/Downloads/project 6/src/app/api/requests/route.ts\",\n    nextConfigOutput,\n    userland: _Users_josemarlima_Downloads_project_6_src_app_api_requests_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks, headerHooks, staticGenerationBailout } = routeModule;\nconst originalPathname = \"/api/requests/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZyZXF1ZXN0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcmVxdWVzdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZyZXF1ZXN0cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmpvc2VtYXJsaW1hJTJGRG93bmxvYWRzJTJGcHJvamVjdCUyMDYlMkZzcmMlMkZhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPSUyRlVzZXJzJTJGam9zZW1hcmxpbWElMkZEb3dubG9hZHMlMkZwcm9qZWN0JTIwNiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0c7QUFDdkM7QUFDYztBQUNvQjtBQUNqRztBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0hBQW1CO0FBQzNDO0FBQ0EsY0FBYyx5RUFBUztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsWUFBWTtBQUNaLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVHQUF1RztBQUMvRztBQUNBO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzZKOztBQUU3SiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRlbnQtcmVxdWVzdC1odWIvP2M3NDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiL1VzZXJzL2pvc2VtYXJsaW1hL0Rvd25sb2Fkcy9wcm9qZWN0IDYvc3JjL2FwcC9hcGkvcmVxdWVzdHMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3JlcXVlc3RzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcmVxdWVzdHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3JlcXVlc3RzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL2pvc2VtYXJsaW1hL0Rvd25sb2Fkcy9wcm9qZWN0IDYvc3JjL2FwcC9hcGkvcmVxdWVzdHMvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0IH0gPSByb3V0ZU1vZHVsZTtcbmNvbnN0IG9yaWdpbmFsUGF0aG5hbWUgPSBcIi9hcGkvcmVxdWVzdHMvcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgaGVhZGVySG9va3MsIHN0YXRpY0dlbmVyYXRpb25CYWlsb3V0LCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frequests%2Froute&page=%2Fapi%2Frequests%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frequests%2Froute.ts&appDir=%2FUsers%2Fjosemarlima%2FDownloads%2Fproject%206%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjosemarlima%2FDownloads%2Fproject%206&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/requests/route.ts":
/*!***************************************!*\
  !*** ./src/app/api/requests/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/web/exports/next-response */ \"(rsc)/./node_modules/next/dist/server/web/exports/next-response.js\");\n/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/lib/auth */ \"(rsc)/./src/lib/auth.ts\");\n/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var _models_Request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/Request */ \"(rsc)/./src/models/Request.ts\");\n\n\n\n\nasync function GET() {\n    try {\n        const session = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.auth)();\n        if (!session) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        const requests = await _models_Request__WEBPACK_IMPORTED_MODULE_3__[\"default\"].find({\n            userId: session.user.id\n        }).sort({\n            createdAt: -1\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(requests);\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\nasync function POST(req) {\n    try {\n        const session = await (0,_lib_auth__WEBPACK_IMPORTED_MODULE_1__.auth)();\n        if (!session) {\n            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n                error: \"Unauthorized\"\n            }, {\n                status: 401\n            });\n        }\n        const body = await req.json();\n        await (0,_lib_db__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n        const request = await _models_Request__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n            ...body,\n            userId: session.user.id\n        });\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json(request, {\n            status: 201\n        });\n    } catch (error) {\n        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_0__[\"default\"].json({\n            error: \"Internal Server Error\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9yZXF1ZXN0cy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBd0Q7QUFDdEI7QUFDRDtBQUNNO0FBRWhDLGVBQWVJO0lBQ3BCLElBQUk7UUFDRixNQUFNQyxVQUFVLE1BQU1KLCtDQUFJQTtRQUMxQixJQUFJLENBQUNJLFNBQVM7WUFDWixPQUFPTCxrRkFBWUEsQ0FBQ00sSUFBSSxDQUFDO2dCQUFFQyxPQUFPO1lBQWUsR0FBRztnQkFBRUMsUUFBUTtZQUFJO1FBQ3BFO1FBRUEsTUFBTU4sbURBQVNBO1FBQ2YsTUFBTU8sV0FBVyxNQUFNTix1REFBT0EsQ0FBQ08sSUFBSSxDQUFDO1lBQUVDLFFBQVFOLFFBQVFPLElBQUksQ0FBQ0MsRUFBRTtRQUFDLEdBQzNEQyxJQUFJLENBQUM7WUFBRUMsV0FBVyxDQUFDO1FBQUU7UUFFeEIsT0FBT2Ysa0ZBQVlBLENBQUNNLElBQUksQ0FBQ0c7SUFDM0IsRUFBRSxPQUFPRixPQUFPO1FBQ2QsT0FBT1Asa0ZBQVlBLENBQUNNLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUF3QixHQUNqQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRjtBQUVPLGVBQWVRLEtBQUtDLEdBQVk7SUFDckMsSUFBSTtRQUNGLE1BQU1aLFVBQVUsTUFBTUosK0NBQUlBO1FBQzFCLElBQUksQ0FBQ0ksU0FBUztZQUNaLE9BQU9MLGtGQUFZQSxDQUFDTSxJQUFJLENBQUM7Z0JBQUVDLE9BQU87WUFBZSxHQUFHO2dCQUFFQyxRQUFRO1lBQUk7UUFDcEU7UUFFQSxNQUFNVSxPQUFPLE1BQU1ELElBQUlYLElBQUk7UUFDM0IsTUFBTUosbURBQVNBO1FBRWYsTUFBTWlCLFVBQVUsTUFBTWhCLHVEQUFPQSxDQUFDaUIsTUFBTSxDQUFDO1lBQ25DLEdBQUdGLElBQUk7WUFDUFAsUUFBUU4sUUFBUU8sSUFBSSxDQUFDQyxFQUFFO1FBQ3pCO1FBRUEsT0FBT2Isa0ZBQVlBLENBQUNNLElBQUksQ0FBQ2EsU0FBUztZQUFFWCxRQUFRO1FBQUk7SUFDbEQsRUFBRSxPQUFPRCxPQUFPO1FBQ2QsT0FBT1Asa0ZBQVlBLENBQUNNLElBQUksQ0FDdEI7WUFBRUMsT0FBTztRQUF3QixHQUNqQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRlbnQtcmVxdWVzdC1odWIvLi9zcmMvYXBwL2FwaS9yZXF1ZXN0cy9yb3V0ZS50cz9iNmNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXF1ZXN0LCBOZXh0UmVzcG9uc2UgfSBmcm9tIFwibmV4dC9zZXJ2ZXJcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9saWIvYXV0aFwiO1xuaW1wb3J0IGRiQ29ubmVjdCBmcm9tIFwiQC9saWIvZGJcIjtcbmltcG9ydCBSZXF1ZXN0IGZyb20gXCJAL21vZGVscy9SZXF1ZXN0XCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQoKSB7XG4gIHRyeSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbih7IGVycm9yOiBcIlVuYXV0aG9yaXplZFwiIH0sIHsgc3RhdHVzOiA0MDEgfSk7XG4gICAgfVxuXG4gICAgYXdhaXQgZGJDb25uZWN0KCk7XG4gICAgY29uc3QgcmVxdWVzdHMgPSBhd2FpdCBSZXF1ZXN0LmZpbmQoeyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCB9KVxuICAgICAgLnNvcnQoeyBjcmVhdGVkQXQ6IC0xIH0pO1xuXG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHJlcXVlc3RzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBcIkludGVybmFsIFNlcnZlciBFcnJvclwiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcTogUmVxdWVzdCkge1xuICB0cnkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uKSB7XG4gICAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBlcnJvcjogXCJVbmF1dGhvcml6ZWRcIiB9LCB7IHN0YXR1czogNDAxIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xuICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuICAgIFxuICAgIGNvbnN0IHJlcXVlc3QgPSBhd2FpdCBSZXF1ZXN0LmNyZWF0ZSh7XG4gICAgICAuLi5ib2R5LFxuICAgICAgdXNlcklkOiBzZXNzaW9uLnVzZXIuaWRcbiAgICB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihyZXF1ZXN0LCB7IHN0YXR1czogMjAxIH0pO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiSW50ZXJuYWwgU2VydmVyIEVycm9yXCIgfSxcbiAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn0iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwiYXV0aCIsImRiQ29ubmVjdCIsIlJlcXVlc3QiLCJHRVQiLCJzZXNzaW9uIiwianNvbiIsImVycm9yIiwic3RhdHVzIiwicmVxdWVzdHMiLCJmaW5kIiwidXNlcklkIiwidXNlciIsImlkIiwic29ydCIsImNyZWF0ZWRBdCIsIlBPU1QiLCJyZXEiLCJib2R5IiwicmVxdWVzdCIsImNyZWF0ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/requests/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   authConfig: () => (/* binding */ authConfig),\n/* harmony export */   isAdmin: () => (/* binding */ isAdmin),\n/* harmony export */   requireAuth: () => (/* binding */ requireAuth)\n/* harmony export */ });\n/* harmony import */ var _auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @auth/mongodb-adapter */ \"(rsc)/./node_modules/@auth/mongodb-adapter/index.js\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mongodb */ \"(rsc)/./src/lib/mongodb.ts\");\n/* harmony import */ var _db__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./db */ \"(rsc)/./src/lib/db.ts\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.ts\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst authConfig = {\n    adapter: (0,_auth_mongodb_adapter__WEBPACK_IMPORTED_MODULE_0__.MongoDBAdapter)(_mongodb__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            name: \"credentials\",\n            credentials: {\n                email: {\n                    label: \"Email\",\n                    type: \"email\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials) {\n                if (!credentials?.email || !credentials?.password) {\n                    throw new Error(\"Email e senha s\\xe3o obrigat\\xf3rios\");\n                }\n                await (0,_db__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n                const user = await _models_User__WEBPACK_IMPORTED_MODULE_5__[\"default\"].findOne({\n                    email: credentials.email\n                });\n                if (!user) {\n                    throw new Error(\"Usu\\xe1rio n\\xe3o encontrado\");\n                }\n                const isValid = await bcrypt__WEBPACK_IMPORTED_MODULE_2___default().compare(credentials.password, user.password);\n                if (!isValid) {\n                    throw new Error(\"Senha incorreta\");\n                }\n                return {\n                    id: user._id.toString(),\n                    email: user.email,\n                    name: user.name,\n                    role: user.role\n                };\n            }\n        })\n    ],\n    callbacks: {\n        async jwt ({ token, user, account }) {\n            if (user) {\n                token.role = user.role;\n                token.id = user.id;\n            }\n            return token;\n        },\n        async session ({ session, token }) {\n            if (token) {\n                session.user.role = token.role;\n                session.user.id = token.id;\n            }\n            return session;\n        }\n    },\n    pages: {\n        signIn: \"/login\",\n        error: \"/login\"\n    },\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    secret: process.env.NEXTAUTH_SECRET\n};\nconst auth = ()=>(0,next_auth__WEBPACK_IMPORTED_MODULE_6__.getServerSession)(authConfig);\nconst isAdmin = async ()=>{\n    const session = await auth();\n    return session?.user?.role === \"admin\";\n};\nconst requireAuth = async (isAdminRequired = false)=>{\n    const session = await auth();\n    if (!session) {\n        throw new Error(\"N\\xe3o autorizado\");\n    }\n    if (isAdminRequired && session.user.role !== \"admin\") {\n        throw new Error(\"Acesso restrito a administradores\");\n    }\n    return session;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2F1dGgudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUF1RDtBQUNXO0FBQ3RDO0FBQ1U7QUFDVDtBQUNJO0FBQ1k7QUFFdEMsTUFBTU8sYUFBYTtJQUN4QkMsU0FBU1IscUVBQWNBLENBQUNHLGdEQUFhQTtJQUNyQ00sV0FBVztRQUNUUiwyRUFBbUJBLENBQUM7WUFDbEJTLE1BQU07WUFDTkMsYUFBYTtnQkFDWEMsT0FBTztvQkFBRUMsT0FBTztvQkFBU0MsTUFBTTtnQkFBUTtnQkFDdkNDLFVBQVU7b0JBQUVGLE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFFQSxNQUFNRSxXQUFVTCxXQUFXO2dCQUN6QixJQUFJLENBQUNBLGFBQWFDLFNBQVMsQ0FBQ0QsYUFBYUksVUFBVTtvQkFDakQsTUFBTSxJQUFJRSxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNYiwrQ0FBU0E7Z0JBRWYsTUFBTWMsT0FBTyxNQUFNYixvREFBSUEsQ0FBQ2MsT0FBTyxDQUFDO29CQUFFUCxPQUFPRCxZQUFZQyxLQUFLO2dCQUFDO2dCQUMzRCxJQUFJLENBQUNNLE1BQU07b0JBQ1QsTUFBTSxJQUFJRCxNQUFNO2dCQUNsQjtnQkFFQSxNQUFNRyxVQUFVLE1BQU1sQixxREFBYyxDQUFDUyxZQUFZSSxRQUFRLEVBQUVHLEtBQUtILFFBQVE7Z0JBQ3hFLElBQUksQ0FBQ0ssU0FBUztvQkFDWixNQUFNLElBQUlILE1BQU07Z0JBQ2xCO2dCQUdBLE9BQU87b0JBQ0xLLElBQUlKLEtBQUtLLEdBQUcsQ0FBQ0MsUUFBUTtvQkFDckJaLE9BQU9NLEtBQUtOLEtBQUs7b0JBQ2pCRixNQUFNUSxLQUFLUixJQUFJO29CQUNmZSxNQUFNUCxLQUFLTyxJQUFJO2dCQUNqQjtZQUNGO1FBRUY7S0FDRDtJQUNEQyxXQUFXO1FBQ1QsTUFBTUMsS0FBSSxFQUFFQyxLQUFLLEVBQUVWLElBQUksRUFBRVcsT0FBTyxFQUFFO1lBQ2hDLElBQUlYLE1BQU07Z0JBQ1JVLE1BQU1ILElBQUksR0FBR1AsS0FBS08sSUFBSTtnQkFDdEJHLE1BQU1OLEVBQUUsR0FBR0osS0FBS0ksRUFBRTtZQUNwQjtZQUNBLE9BQU9NO1FBQ1Q7UUFDQSxNQUFNRSxTQUFRLEVBQUVBLE9BQU8sRUFBRUYsS0FBSyxFQUFFO1lBQzlCLElBQUlBLE9BQU87Z0JBQ1RFLFFBQVFaLElBQUksQ0FBQ08sSUFBSSxHQUFHRyxNQUFNSCxJQUFJO2dCQUM5QkssUUFBUVosSUFBSSxDQUFDSSxFQUFFLEdBQUdNLE1BQU1OLEVBQUU7WUFDNUI7WUFDQSxPQUFPUTtRQUNUO0lBQ0Y7SUFDQUMsT0FBTztRQUNMQyxRQUFRO1FBQ1JDLE9BQU87SUFDVDtJQUNBSCxTQUFTO1FBQ1BJLFVBQVU7UUFDVkMsUUFBUSxLQUFLLEtBQUssS0FBSztJQUN6QjtJQUNBQyxRQUFRQyxRQUFRQyxHQUFHLENBQUNDLGVBQWU7QUFDckMsRUFBRTtBQUVLLE1BQU1DLE9BQU8sSUFBTWxDLDJEQUFnQkEsQ0FBQ0MsWUFBWTtBQUVoRCxNQUFNa0MsVUFBVTtJQUNyQixNQUFNWCxVQUFVLE1BQU1VO0lBQ3RCLE9BQU9WLFNBQVNaLE1BQU1PLFNBQVM7QUFDakMsRUFBRTtBQUVLLE1BQU1pQixjQUFjLE9BQU9DLGtCQUFrQixLQUFLO0lBQ3ZELE1BQU1iLFVBQVUsTUFBTVU7SUFFdEIsSUFBSSxDQUFDVixTQUFTO1FBQ1osTUFBTSxJQUFJYixNQUFNO0lBQ2xCO0lBRUEsSUFBSTBCLG1CQUFtQmIsUUFBUVosSUFBSSxDQUFDTyxJQUFJLEtBQUssU0FBUztRQUNwRCxNQUFNLElBQUlSLE1BQU07SUFDbEI7SUFFQSxPQUFPYTtBQUNULEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250ZW50LXJlcXVlc3QtaHViLy4vc3JjL2xpYi9hdXRoLnRzPzY2OTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29EQkFkYXB0ZXIgfSBmcm9tIFwiQGF1dGgvbW9uZ29kYi1hZGFwdGVyXCI7XG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0XCI7XG5pbXBvcnQgY2xpZW50UHJvbWlzZSBmcm9tIFwiLi9tb25nb2RiXCI7XG5pbXBvcnQgZGJDb25uZWN0IGZyb20gXCIuL2RiXCI7XG5pbXBvcnQgVXNlciBmcm9tIFwiQC9tb2RlbHMvVXNlclwiO1xuaW1wb3J0IHsgZ2V0U2VydmVyU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGhcIjtcblxuZXhwb3J0IGNvbnN0IGF1dGhDb25maWcgPSB7XG4gIGFkYXB0ZXI6IE1vbmdvREJBZGFwdGVyKGNsaWVudFByb21pc2UpLFxuICBwcm92aWRlcnM6IFtcbiAgICBDcmVkZW50aWFsc1Byb3ZpZGVyKHtcbiAgICAgIG5hbWU6IFwiY3JlZGVudGlhbHNcIixcbiAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgIGVtYWlsOiB7IGxhYmVsOiBcIkVtYWlsXCIsIHR5cGU6IFwiZW1haWxcIiB9LFxuICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfVxuICAgICAgfSxcbiAgICAgIFxuICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzKSB7XG4gICAgICAgIGlmICghY3JlZGVudGlhbHM/LmVtYWlsIHx8ICFjcmVkZW50aWFscz8ucGFzc3dvcmQpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbWFpbCBlIHNlbmhhIHPDo28gb2JyaWdhdMOzcmlvc1wiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGF3YWl0IGRiQ29ubmVjdCgpO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiBjcmVkZW50aWFscy5lbWFpbCB9KTtcbiAgICAgICAgaWYgKCF1c2VyKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVXN1w6FyaW8gbsOjbyBlbmNvbnRyYWRvXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGNyZWRlbnRpYWxzLnBhc3N3b3JkLCB1c2VyLnBhc3N3b3JkKTtcbiAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiU2VuaGEgaW5jb3JyZXRhXCIpO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaWQ6IHVzZXIuX2lkLnRvU3RyaW5nKCksXG4gICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgbmFtZTogdXNlci5uYW1lLFxuICAgICAgICAgIHJvbGU6IHVzZXIucm9sZSxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIFxuICAgIH0pXG4gIF0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCB1c2VyLCBhY2NvdW50IH0pIHtcbiAgICAgIGlmICh1c2VyKSB7XG4gICAgICAgIHRva2VuLnJvbGUgPSB1c2VyLnJvbGU7XG4gICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLnJvbGUgPSB0b2tlbi5yb2xlO1xuICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSB0b2tlbi5pZDtcbiAgICAgIH1cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH1cbiAgfSxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46IFwiL2xvZ2luXCIsXG4gICAgZXJyb3I6IFwiL2xvZ2luXCIsXG4gIH0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgICBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwLCAvLyAzMCBkaWFzXG4gIH0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxufTtcblxuZXhwb3J0IGNvbnN0IGF1dGggPSAoKSA9PiBnZXRTZXJ2ZXJTZXNzaW9uKGF1dGhDb25maWcpO1xuXG5leHBvcnQgY29uc3QgaXNBZG1pbiA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgcmV0dXJuIHNlc3Npb24/LnVzZXI/LnJvbGUgPT09IFwiYWRtaW5cIjtcbn07XG5cbmV4cG9ydCBjb25zdCByZXF1aXJlQXV0aCA9IGFzeW5jIChpc0FkbWluUmVxdWlyZWQgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICBcbiAgaWYgKCFzZXNzaW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiTsOjbyBhdXRvcml6YWRvXCIpO1xuICB9XG5cbiAgaWYgKGlzQWRtaW5SZXF1aXJlZCAmJiBzZXNzaW9uLnVzZXIucm9sZSAhPT0gXCJhZG1pblwiKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQWNlc3NvIHJlc3RyaXRvIGEgYWRtaW5pc3RyYWRvcmVzXCIpO1xuICB9XG5cbiAgcmV0dXJuIHNlc3Npb247XG59OyJdLCJuYW1lcyI6WyJNb25nb0RCQWRhcHRlciIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJiY3J5cHQiLCJjbGllbnRQcm9taXNlIiwiZGJDb25uZWN0IiwiVXNlciIsImdldFNlcnZlclNlc3Npb24iLCJhdXRoQ29uZmlnIiwiYWRhcHRlciIsInByb3ZpZGVycyIsIm5hbWUiLCJjcmVkZW50aWFscyIsImVtYWlsIiwibGFiZWwiLCJ0eXBlIiwicGFzc3dvcmQiLCJhdXRob3JpemUiLCJFcnJvciIsInVzZXIiLCJmaW5kT25lIiwiaXNWYWxpZCIsImNvbXBhcmUiLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwicm9sZSIsImNhbGxiYWNrcyIsImp3dCIsInRva2VuIiwiYWNjb3VudCIsInNlc3Npb24iLCJwYWdlcyIsInNpZ25JbiIsImVycm9yIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJzZWNyZXQiLCJwcm9jZXNzIiwiZW52IiwiTkVYVEFVVEhfU0VDUkVUIiwiYXV0aCIsImlzQWRtaW4iLCJyZXF1aXJlQXV0aCIsImlzQWRtaW5SZXF1aXJlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/auth.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/db.ts":
/*!***********************!*\
  !*** ./src/lib/db.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGO_URI = process.env.MONGODB_URI;\nif (!MONGO_URI) {\n    throw new Error(\"MONGO_URI n\\xe3o est\\xe1 definida no ambiente.\");\n}\nconst dbConnect = async ()=>{\n    try {\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState >= 1) {\n            return;\n        }\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO_URI);\n        console.log(\"Conectado ao MongoDB com sucesso!\");\n    } catch (error) {\n        console.error(\"Erro ao conectar ao MongoDB:\", error);\n        throw new Error(\"Falha na conex\\xe3o com o banco de dados.\");\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dbConnect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL2RiLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxZQUFZQyxRQUFRQyxHQUFHLENBQUNDLFdBQVc7QUFFekMsSUFBSSxDQUFDSCxXQUFXO0lBQ2QsTUFBTSxJQUFJSSxNQUFNO0FBQ2xCO0FBRUEsTUFBTUMsWUFBWTtJQUNoQixJQUFJO1FBQ0YsSUFBSU4sNERBQW1CLENBQUNRLFVBQVUsSUFBSSxHQUFHO1lBQ3ZDO1FBQ0Y7UUFDQSxNQUFNUix1REFBZ0IsQ0FBQ0M7UUFDdkJTLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUUsT0FBT0MsT0FBTztRQUNkRixRQUFRRSxLQUFLLENBQUMsZ0NBQWdDQTtRQUM5QyxNQUFNLElBQUlQLE1BQU07SUFDbEI7QUFDRjtBQUVBLGlFQUFlQyxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29udGVudC1yZXF1ZXN0LWh1Yi8uL3NyYy9saWIvZGIudHM/OWU0ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5cbmNvbnN0IE1PTkdPX1VSSSA9IHByb2Nlc3MuZW52Lk1PTkdPREJfVVJJO1xuXG5pZiAoIU1PTkdPX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJNT05HT19VUkkgbsOjbyBlc3TDoSBkZWZpbmlkYSBubyBhbWJpZW50ZS5cIik7XG59XG5cbmNvbnN0IGRiQ29ubmVjdCA9IGFzeW5jICgpID0+IHtcbiAgdHJ5IHtcbiAgICBpZiAobW9uZ29vc2UuY29ubmVjdGlvbi5yZWFkeVN0YXRlID49IDEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChNT05HT19VUkkpO1xuICAgIGNvbnNvbGUubG9nKFwiQ29uZWN0YWRvIGFvIE1vbmdvREIgY29tIHN1Y2Vzc28hXCIpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvIGFvIGNvbmVjdGFyIGFvIE1vbmdvREI6XCIsIGVycm9yKTtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJGYWxoYSBuYSBjb25leMOjbyBjb20gbyBiYW5jbyBkZSBkYWRvcy5cIik7XG4gIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRiQ29ubmVjdDsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT19VUkkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJFcnJvciIsImRiQ29ubmVjdCIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiY29ubmVjdCIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/db.ts\n");

/***/ }),

/***/ "(rsc)/./src/lib/mongodb.ts":
/*!****************************!*\
  !*** ./src/lib/mongodb.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nif (!process.env.MONGODB_URI) {\n    throw new Error('Invalid/Missing environment variable: \"MONGODB_URI\"');\n}\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (true) {\n    let globalWithMongo = global;\n    if (!globalWithMongo._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        globalWithMongo._mongoClientPromise = client.connect();\n    }\n    clientPromise = globalWithMongo._mongoClientPromise;\n} else {}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbGliL21vbmdvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXNDO0FBRXRDLElBQUksQ0FBQ0MsUUFBUUMsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJQyxNQUFNO0FBQ2xCO0FBRUEsTUFBTUMsTUFBTUosUUFBUUMsR0FBRyxDQUFDQyxXQUFXO0FBQ25DLE1BQU1HLFVBQVUsQ0FBQztBQUVqQixJQUFJQztBQUNKLElBQUlDO0FBRUosSUFBSVAsSUFBc0MsRUFBRTtJQUMxQyxJQUFJUSxrQkFBa0JDO0lBSXRCLElBQUksQ0FBQ0QsZ0JBQWdCRSxtQkFBbUIsRUFBRTtRQUN4Q0osU0FBUyxJQUFJUCxnREFBV0EsQ0FBQ0ssS0FBS0M7UUFDOUJHLGdCQUFnQkUsbUJBQW1CLEdBQUdKLE9BQU9LLE9BQU87SUFDdEQ7SUFDQUosZ0JBQWdCQyxnQkFBZ0JFLG1CQUFtQjtBQUNyRCxPQUFPLEVBR047QUFFRCxpRUFBZUgsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRlbnQtcmVxdWVzdC1odWIvLi9zcmMvbGliL21vbmdvZGIudHM/NTNjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XG5cbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdJbnZhbGlkL01pc3NpbmcgZW52aXJvbm1lbnQgdmFyaWFibGU6IFwiTU9OR09EQl9VUklcIicpO1xufVxuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcbmNvbnN0IG9wdGlvbnMgPSB7fTtcblxubGV0IGNsaWVudDtcbmxldCBjbGllbnRQcm9taXNlOiBQcm9taXNlPE1vbmdvQ2xpZW50PjtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIpIHtcbiAgbGV0IGdsb2JhbFdpdGhNb25nbyA9IGdsb2JhbCBhcyB0eXBlb2YgZ2xvYmFsVGhpcyAmIHtcbiAgICBfbW9uZ29DbGllbnRQcm9taXNlPzogUHJvbWlzZTxNb25nb0NsaWVudD47XG4gIH07XG5cbiAgaWYgKCFnbG9iYWxXaXRoTW9uZ28uX21vbmdvQ2xpZW50UHJvbWlzZSkge1xuICAgIGNsaWVudCA9IG5ldyBNb25nb0NsaWVudCh1cmksIG9wdGlvbnMpO1xuICAgIGdsb2JhbFdpdGhNb25nby5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKTtcbiAgfVxuICBjbGllbnRQcm9taXNlID0gZ2xvYmFsV2l0aE1vbmdvLl9tb25nb0NsaWVudFByb21pc2U7XG59IGVsc2Uge1xuICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKTtcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNsaWVudFByb21pc2U7Il0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicHJvY2VzcyIsImVudiIsIk1PTkdPREJfVVJJIiwiRXJyb3IiLCJ1cmkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsImdsb2JhbFdpdGhNb25nbyIsImdsb2JhbCIsIl9tb25nb0NsaWVudFByb21pc2UiLCJjb25uZWN0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/lib/mongodb.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/Request.ts":
/*!*******************************!*\
  !*** ./src/models/Request.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst requestSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    userId: {\n        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n        ref: \"User\",\n        required: true\n    },\n    type: {\n        type: String,\n        enum: [\n            \"add\",\n            \"update\",\n            \"fix\"\n        ],\n        required: true\n    },\n    mediaTitle: {\n        type: String,\n        required: true\n    },\n    mediaPoster: String,\n    mediaId: {\n        type: Number,\n        required: true\n    },\n    mediaType: {\n        type: String,\n        enum: [\n            \"movie\",\n            \"tv\"\n        ],\n        required: true\n    },\n    status: {\n        type: String,\n        enum: [\n            \"pending\",\n            \"in_progress\",\n            \"completed\",\n            \"rejected\"\n        ],\n        default: \"pending\"\n    },\n    description: String,\n    notifyWhatsapp: {\n        type: Boolean,\n        default: false\n    }\n}, {\n    timestamps: true\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Request || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Request\", requestSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1JlcXVlc3QudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBRWhDLE1BQU1DLGdCQUFnQixJQUFJRCx3REFBZSxDQUFDO0lBQ3hDRyxRQUFRO1FBQUVDLE1BQU1KLHdEQUFlLENBQUNLLEtBQUssQ0FBQ0MsUUFBUTtRQUFFQyxLQUFLO1FBQVFDLFVBQVU7SUFBSztJQUM1RUosTUFBTTtRQUFFQSxNQUFNSztRQUFRQyxNQUFNO1lBQUM7WUFBTztZQUFVO1NBQU07UUFBRUYsVUFBVTtJQUFLO0lBQ3JFRyxZQUFZO1FBQUVQLE1BQU1LO1FBQVFELFVBQVU7SUFBSTtJQUMxQ0ksYUFBYUg7SUFDYkksU0FBUztRQUFFVCxNQUFNVTtRQUFRTixVQUFVO0lBQUs7SUFDeENPLFdBQVc7UUFBRVgsTUFBTUs7UUFBUUMsTUFBTTtZQUFDO1lBQVM7U0FBSztRQUFFRixVQUFVO0lBQUs7SUFDakVRLFFBQVE7UUFDTlosTUFBTUs7UUFDTkMsTUFBTTtZQUFDO1lBQVc7WUFBZTtZQUFhO1NBQVc7UUFDekRPLFNBQVM7SUFDWDtJQUNBQyxhQUFhVDtJQUNiVSxnQkFBZ0I7UUFBRWYsTUFBTWdCO1FBQVNILFNBQVM7SUFBTTtBQUNsRCxHQUFHO0lBQUVJLFlBQVk7QUFBSztBQUV0QixpRUFBZXJCLHdEQUFlLENBQUN1QixPQUFPLElBQUl2QixxREFBYyxDQUFDLFdBQVdDLGNBQWNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb250ZW50LXJlcXVlc3QtaHViLy4vc3JjL21vZGVscy9SZXF1ZXN0LnRzPzEwMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgcmVxdWVzdFNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xuICB1c2VySWQ6IHsgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6ICdVc2VyJywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgdHlwZTogeyB0eXBlOiBTdHJpbmcsIGVudW06IFsnYWRkJywgJ3VwZGF0ZScsICdmaXgnXSwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgbWVkaWFUaXRsZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlfSxcbiAgbWVkaWFQb3N0ZXI6IFN0cmluZyxcbiAgbWVkaWFJZDogeyB0eXBlOiBOdW1iZXIsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIG1lZGlhVHlwZTogeyB0eXBlOiBTdHJpbmcsIGVudW06IFsnbW92aWUnLCAndHYnXSwgcmVxdWlyZWQ6IHRydWUgfSxcbiAgc3RhdHVzOiB7IFxuICAgIHR5cGU6IFN0cmluZywgXG4gICAgZW51bTogWydwZW5kaW5nJywgJ2luX3Byb2dyZXNzJywgJ2NvbXBsZXRlZCcsICdyZWplY3RlZCddLFxuICAgIGRlZmF1bHQ6ICdwZW5kaW5nJ1xuICB9LFxuICBkZXNjcmlwdGlvbjogU3RyaW5nLFxuICBub3RpZnlXaGF0c2FwcDogeyB0eXBlOiBCb29sZWFuLCBkZWZhdWx0OiBmYWxzZSB9LFxufSwgeyB0aW1lc3RhbXBzOiB0cnVlIH0pO1xuXG5leHBvcnQgZGVmYXVsdCBtb25nb29zZS5tb2RlbHMuUmVxdWVzdCB8fCBtb25nb29zZS5tb2RlbCgnUmVxdWVzdCcsIHJlcXVlc3RTY2hlbWEpOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVlc3RTY2hlbWEiLCJTY2hlbWEiLCJ1c2VySWQiLCJ0eXBlIiwiVHlwZXMiLCJPYmplY3RJZCIsInJlZiIsInJlcXVpcmVkIiwiU3RyaW5nIiwiZW51bSIsIm1lZGlhVGl0bGUiLCJtZWRpYVBvc3RlciIsIm1lZGlhSWQiLCJOdW1iZXIiLCJtZWRpYVR5cGUiLCJzdGF0dXMiLCJkZWZhdWx0IiwiZGVzY3JpcHRpb24iLCJub3RpZnlXaGF0c2FwcCIsIkJvb2xlYW4iLCJ0aW1lc3RhbXBzIiwibW9kZWxzIiwiUmVxdWVzdCIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/Request.ts\n");

/***/ }),

/***/ "(rsc)/./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    name: {\n        type: String,\n        required: true\n    },\n    role: {\n        type: String,\n        enum: [\n            \"user\",\n            \"admin\"\n        ],\n        default: \"user\"\n    },\n    whatsapp: String\n}, {\n    timestamps: true\n});\nuserSchema.pre(\"save\", async function(next) {\n    if (!this.isModified(\"password\")) return next(); // ⬅ Evita re-hash desnecessário\n    const salt = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().genSalt(10);\n    this.password = await bcryptjs__WEBPACK_IMPORTED_MODULE_1___default().hash(this.password, salt);\n    next();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDRjtBQUU5QixNQUFNRSxhQUFhLElBQUlGLHdEQUFlLENBQUM7SUFDckNJLE9BQU87UUFBRUMsTUFBTUM7UUFBUUMsVUFBVTtRQUFNQyxRQUFRO0lBQUs7SUFDcERDLFVBQVU7UUFBRUosTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQ3pDRyxNQUFNO1FBQUVMLE1BQU1DO1FBQVFDLFVBQVU7SUFBSztJQUNyQ0ksTUFBTTtRQUFFTixNQUFNQztRQUFRTSxNQUFNO1lBQUM7WUFBUTtTQUFRO1FBQUVDLFNBQVM7SUFBTztJQUMvREMsVUFBVVI7QUFDWixHQUFHO0lBQUVTLFlBQVk7QUFBSztBQUV0QmIsV0FBV2MsR0FBRyxDQUFDLFFBQVEsZUFBZ0JDLElBQUk7SUFDekMsSUFBSSxDQUFDLElBQUksQ0FBQ0MsVUFBVSxDQUFDLGFBQWEsT0FBT0QsUUFBUSxnQ0FBZ0M7SUFFakYsTUFBTUUsT0FBTyxNQUFNbEIsdURBQWMsQ0FBQztJQUNsQyxJQUFJLENBQUNRLFFBQVEsR0FBRyxNQUFNUixvREFBVyxDQUFDLElBQUksQ0FBQ1EsUUFBUSxFQUFFVTtJQUVqREY7QUFDRjtBQUVBLGlFQUFlakIsd0RBQWUsQ0FBQ3VCLElBQUksSUFBSXZCLHFEQUFjLENBQUMsUUFBUUUsV0FBV0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbnRlbnQtcmVxdWVzdC1odWIvLi9zcmMvbW9kZWxzL1VzZXIudHM/MDk2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSAnbW9uZ29vc2UnO1xuaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHRqcyc7XG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcbiAgZW1haWw6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXG4gIHBhc3N3b3JkOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcbiAgbmFtZTogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlIH0sXG4gIHJvbGU6IHsgdHlwZTogU3RyaW5nLCBlbnVtOiBbJ3VzZXInLCAnYWRtaW4nXSwgZGVmYXVsdDogJ3VzZXInIH0sXG4gIHdoYXRzYXBwOiBTdHJpbmcsXG59LCB7IHRpbWVzdGFtcHM6IHRydWUgfSk7XG5cbnVzZXJTY2hlbWEucHJlKCdzYXZlJywgYXN5bmMgZnVuY3Rpb24gKG5leHQpIHtcbiAgaWYgKCF0aGlzLmlzTW9kaWZpZWQoJ3Bhc3N3b3JkJykpIHJldHVybiBuZXh0KCk7IC8vIOKshSBFdml0YSByZS1oYXNoIGRlc25lY2Vzc8OhcmlvXG5cbiAgY29uc3Qgc2FsdCA9IGF3YWl0IGJjcnlwdC5nZW5TYWx0KDEwKTtcbiAgdGhpcy5wYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHRoaXMucGFzc3dvcmQsIHNhbHQpO1xuICBcbiAgbmV4dCgpO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKCdVc2VyJywgdXNlclNjaGVtYSk7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiYmNyeXB0IiwidXNlclNjaGVtYSIsIlNjaGVtYSIsImVtYWlsIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwidW5pcXVlIiwicGFzc3dvcmQiLCJuYW1lIiwicm9sZSIsImVudW0iLCJkZWZhdWx0Iiwid2hhdHNhcHAiLCJ0aW1lc3RhbXBzIiwicHJlIiwibmV4dCIsImlzTW9kaWZpZWQiLCJzYWx0IiwiZ2VuU2FsdCIsImhhc2giLCJtb2RlbHMiLCJVc2VyIiwibW9kZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/bcryptjs","vendor-chunks/@babel","vendor-chunks/oauth","vendor-chunks/preact","vendor-chunks/preact-render-to-string","vendor-chunks/uuid","vendor-chunks/yallist","vendor-chunks/cookie","vendor-chunks/@auth","vendor-chunks/oidc-token-hash","vendor-chunks/@panva"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Frequests%2Froute&page=%2Fapi%2Frequests%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Frequests%2Froute.ts&appDir=%2FUsers%2Fjosemarlima%2FDownloads%2Fproject%206%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjosemarlima%2FDownloads%2Fproject%206&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();