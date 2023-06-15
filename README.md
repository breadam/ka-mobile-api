# kolay_asistan_mobile_api

KolayAsistanMobileApi - JavaScript client for kolay_asistan_mobile_api
Kolay Asistan mobile application api layer. Revision Date: 25.04.2023
This SDK is automatically generated by the [OpenAPI Generator](https://openapi-generator.tech) project:

- API version: 0.0.10
- Package version: 0.0.10
- Build package: org.openapitools.codegen.languages.JavascriptClientCodegen
For more information, please visit []()

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/), please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install kolay_asistan_mobile_api --save
```

Finally, you need to build the module:

```shell
npm run build
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

To use the link you just defined in your project, switch to the directory you want to use your kolay_asistan_mobile_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

Finally, you need to build the module:

```shell
npm run build
```

#### git

If the library is hosted at a git repository, e.g.https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var KolayAsistanMobileApi = require('kolay_asistan_mobile_api');


var api = new KolayAsistanMobileApi.AuthorizationApi()
var deviceStatusDTO = new KolayAsistanMobileApi.DeviceStatusDTO(); // {DeviceStatusDTO} 
api.authControllerGetDeviceStatus(deviceStatusDTO).then(function(data) {
  console.log('API called successfully. Returned data: ' + data);
}, function(error) {
  console.error(error);
});


```

## Documentation for API Endpoints

All URIs are relative to *https://ka-mobile-api.herokuapp.com/api*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*KolayAsistanMobileApi.AuthorizationApi* | [**authControllerGetDeviceStatus**](docs/AuthorizationApi.md#authControllerGetDeviceStatus) | **POST** /auth/get-device-status | Find Device
*KolayAsistanMobileApi.AuthorizationApi* | [**authControllerLoggedDetail**](docs/AuthorizationApi.md#authControllerLoggedDetail) | **GET** /auth/me | Logged User Detail
*KolayAsistanMobileApi.AuthorizationApi* | [**authControllerLogin**](docs/AuthorizationApi.md#authControllerLogin) | **POST** /auth/login | Login
*KolayAsistanMobileApi.AuthorizationApi* | [**authControllerRegisterUser**](docs/AuthorizationApi.md#authControllerRegisterUser) | **POST** /auth/register | Register user
*KolayAsistanMobileApi.BatchJobsApi* | [**batchJobControllerCabinetUpdate**](docs/BatchJobsApi.md#batchJobControllerCabinetUpdate) | **POST** /jobs/cabinetUpdate | Update medicines of cabinet 
*KolayAsistanMobileApi.BatchJobsApi* | [**batchJobControllerCreate**](docs/BatchJobsApi.md#batchJobControllerCreate) | **POST** /jobs | Create
*KolayAsistanMobileApi.BatchJobsApi* | [**batchJobControllerDelete**](docs/BatchJobsApi.md#batchJobControllerDelete) | **DELETE** /jobs/{id} | Delete By Id
*KolayAsistanMobileApi.BatchJobsApi* | [**batchJobControllerFindAll**](docs/BatchJobsApi.md#batchJobControllerFindAll) | **GET** /jobs | Find All
*KolayAsistanMobileApi.BatchJobsApi* | [**batchJobControllerFindAllByUserId**](docs/BatchJobsApi.md#batchJobControllerFindAllByUserId) | **GET** /jobs/findAllByUserId/{userId} | Find all items of user
*KolayAsistanMobileApi.BatchJobsApi* | [**batchJobControllerFindById**](docs/BatchJobsApi.md#batchJobControllerFindById) | **GET** /jobs/{id} | Find By Id
*KolayAsistanMobileApi.BatchJobsApi* | [**batchJobControllerUpdate**](docs/BatchJobsApi.md#batchJobControllerUpdate) | **PUT** /jobs | Update Item
*KolayAsistanMobileApi.BloodGlucoseApi* | [**bloodGlucoseControllerCreate**](docs/BloodGlucoseApi.md#bloodGlucoseControllerCreate) | **POST** /blood-glucose | Add item
*KolayAsistanMobileApi.BloodGlucoseApi* | [**bloodGlucoseControllerDelete**](docs/BloodGlucoseApi.md#bloodGlucoseControllerDelete) | **DELETE** /blood-glucose/{id} | Delete Item
*KolayAsistanMobileApi.BloodGlucoseApi* | [**bloodGlucoseControllerFindUserAllItems**](docs/BloodGlucoseApi.md#bloodGlucoseControllerFindUserAllItems) | **GET** /blood-glucose/findUserAllItems | Find User All Items
*KolayAsistanMobileApi.BloodGlucoseApi* | [**bloodGlucoseControllerFindUserItem**](docs/BloodGlucoseApi.md#bloodGlucoseControllerFindUserItem) | **GET** /blood-glucose/findUserItem/{id} | Find User Item
*KolayAsistanMobileApi.BloodGlucoseApi* | [**bloodGlucoseControllerUpdate**](docs/BloodGlucoseApi.md#bloodGlucoseControllerUpdate) | **PUT** /blood-glucose/{id} | Update item
*KolayAsistanMobileApi.BloodPressureApi* | [**bloodPressureControllerCreate**](docs/BloodPressureApi.md#bloodPressureControllerCreate) | **POST** /blood-pressure | Add new item
*KolayAsistanMobileApi.BloodPressureApi* | [**bloodPressureControllerDelete**](docs/BloodPressureApi.md#bloodPressureControllerDelete) | **DELETE** /blood-pressure/{id} | Delete item
*KolayAsistanMobileApi.BloodPressureApi* | [**bloodPressureControllerFindUserAllItems**](docs/BloodPressureApi.md#bloodPressureControllerFindUserAllItems) | **GET** /blood-pressure/findUserAllItems | Find User All Items
*KolayAsistanMobileApi.BloodPressureApi* | [**bloodPressureControllerFindUserItem**](docs/BloodPressureApi.md#bloodPressureControllerFindUserItem) | **GET** /blood-pressure/findUserItem/{id} | Find User Item
*KolayAsistanMobileApi.BloodPressureApi* | [**bloodPressureControllerUpdate**](docs/BloodPressureApi.md#bloodPressureControllerUpdate) | **PUT** /blood-pressure/{id} | Update item
*KolayAsistanMobileApi.DeviceApi* | [**deviceControllerAddNewDevice**](docs/DeviceApi.md#deviceControllerAddNewDevice) | **POST** /device | Add new device
*KolayAsistanMobileApi.DeviceApi* | [**deviceControllerDelete**](docs/DeviceApi.md#deviceControllerDelete) | **DELETE** /device/{id} | Delete
*KolayAsistanMobileApi.DeviceApi* | [**deviceControllerFindUserAllItems**](docs/DeviceApi.md#deviceControllerFindUserAllItems) | **GET** /device/findUserAllItems | Find User All Items
*KolayAsistanMobileApi.DeviceApi* | [**deviceControllerFindUserItem**](docs/DeviceApi.md#deviceControllerFindUserItem) | **GET** /device/findUserItem/{id} | Find User Item
*KolayAsistanMobileApi.DeviceApi* | [**deviceControllerUpdate**](docs/DeviceApi.md#deviceControllerUpdate) | **PUT** /device/{id} | Update device info
*KolayAsistanMobileApi.MedicineCabinetApi* | [**cabinetControllerCreate**](docs/MedicineCabinetApi.md#cabinetControllerCreate) | **POST** /cabinet | Add
*KolayAsistanMobileApi.MedicineCabinetApi* | [**cabinetControllerDelete**](docs/MedicineCabinetApi.md#cabinetControllerDelete) | **DELETE** /cabinet/{id} | Delete
*KolayAsistanMobileApi.MedicineCabinetApi* | [**cabinetControllerFindUserAllItems**](docs/MedicineCabinetApi.md#cabinetControllerFindUserAllItems) | **GET** /cabinet/findUserAllItems | Find User All Items
*KolayAsistanMobileApi.MedicineCabinetApi* | [**cabinetControllerFindUserItem**](docs/MedicineCabinetApi.md#cabinetControllerFindUserItem) | **GET** /cabinet/findUserItem/{id} | Find User Item
*KolayAsistanMobileApi.MedicineCabinetApi* | [**cabinetControllerUpdate**](docs/MedicineCabinetApi.md#cabinetControllerUpdate) | **PUT** /cabinet/{id} | Update
*KolayAsistanMobileApi.MedicineCabinetApi* | [**cabinetControllerUserCabinetSummary**](docs/MedicineCabinetApi.md#cabinetControllerUserCabinetSummary) | **GET** /cabinet/userCabinetSummary | User Cabinet Summary
*KolayAsistanMobileApi.MedicineReminderApi* | [**reminderControllerCreate**](docs/MedicineReminderApi.md#reminderControllerCreate) | **POST** /reminder | Add
*KolayAsistanMobileApi.MedicineReminderApi* | [**reminderControllerDelete**](docs/MedicineReminderApi.md#reminderControllerDelete) | **DELETE** /reminder/{id} | Delete
*KolayAsistanMobileApi.MedicineReminderApi* | [**reminderControllerFindUserAllItems**](docs/MedicineReminderApi.md#reminderControllerFindUserAllItems) | **GET** /reminder/findUserAllItems | Find User All Items
*KolayAsistanMobileApi.MedicineReminderApi* | [**reminderControllerFindUserItem**](docs/MedicineReminderApi.md#reminderControllerFindUserItem) | **GET** /reminder/findUserItem/{id} | Find User Item
*KolayAsistanMobileApi.MedicineReminderApi* | [**reminderControllerUpdate**](docs/MedicineReminderApi.md#reminderControllerUpdate) | **PUT** /reminder/{id} | Update
*KolayAsistanMobileApi.UserApi* | [**userControllerUserDetail**](docs/UserApi.md#userControllerUserDetail) | **GET** /user | Logged User Detail
*KolayAsistanMobileApi.UserApi* | [**userControllerUserUpdate**](docs/UserApi.md#userControllerUserUpdate) | **PUT** /user | Logged user update
*KolayAsistanMobileApi.UserApi* | [**userControllerUserUpdateStatus**](docs/UserApi.md#userControllerUserUpdateStatus) | **PUT** /user/user-status | Logged User Update Status
*KolayAsistanMobileApi.UserApi* | [**userControllerValidateIdentityNo**](docs/UserApi.md#userControllerValidateIdentityNo) | **POST** /user/validate-identity-no | Validate identitiy no
*KolayAsistanMobileApi.UserApprovalsApi* | [**approvalControllerCreate**](docs/UserApprovalsApi.md#approvalControllerCreate) | **POST** /approval | Add
*KolayAsistanMobileApi.UserApprovalsApi* | [**approvalControllerDelete**](docs/UserApprovalsApi.md#approvalControllerDelete) | **DELETE** /approval/{id} | De
*KolayAsistanMobileApi.UserApprovalsApi* | [**approvalControllerFindUserAllItems**](docs/UserApprovalsApi.md#approvalControllerFindUserAllItems) | **GET** /approval/findUserAllItems | Find User All Items
*KolayAsistanMobileApi.UserApprovalsApi* | [**approvalControllerFindUserItem**](docs/UserApprovalsApi.md#approvalControllerFindUserItem) | **GET** /approval/findUserItem/{id} | Find User Item
*KolayAsistanMobileApi.UserApprovalsApi* | [**approvalControllerUpdate**](docs/UserApprovalsApi.md#approvalControllerUpdate) | **PUT** /approval/{id} | Update


## Documentation for Models

 - [KolayAsistanMobileApi.ApprovalDTO](docs/ApprovalDTO.md)
 - [KolayAsistanMobileApi.BloodGlucoseDTO](docs/BloodGlucoseDTO.md)
 - [KolayAsistanMobileApi.BloodPressureDTO](docs/BloodPressureDTO.md)
 - [KolayAsistanMobileApi.CabinetDTO](docs/CabinetDTO.md)
 - [KolayAsistanMobileApi.CabinetSummaryDTO](docs/CabinetSummaryDTO.md)
 - [KolayAsistanMobileApi.DeviceDTO](docs/DeviceDTO.md)
 - [KolayAsistanMobileApi.DeviceStatusDTO](docs/DeviceStatusDTO.md)
 - [KolayAsistanMobileApi.ReminderDTO](docs/ReminderDTO.md)
 - [KolayAsistanMobileApi.UserCreateDTO](docs/UserCreateDTO.md)
 - [KolayAsistanMobileApi.UserCreateDTODeviceInfo](docs/UserCreateDTODeviceInfo.md)
 - [KolayAsistanMobileApi.UserDetailDTO](docs/UserDetailDTO.md)
 - [KolayAsistanMobileApi.UserLoginDTO](docs/UserLoginDTO.md)
 - [KolayAsistanMobileApi.UserStatusDTO](docs/UserStatusDTO.md)
 - [KolayAsistanMobileApi.UserTokenDTO](docs/UserTokenDTO.md)
 - [KolayAsistanMobileApi.UserUpdateDTO](docs/UserUpdateDTO.md)
 - [KolayAsistanMobileApi.ValidateIdentityNoDTO](docs/ValidateIdentityNoDTO.md)


## Documentation for Authorization



### bearer

- **Type**: Bearer authentication (JWT)

