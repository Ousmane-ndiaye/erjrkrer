// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
	production: false,
	apiUrl: 'https://dev-ne-apiapp-nopale-reader.azurewebsites.net/api',
	authConfig: {
		instance: 'https://login.microsoftonline.com/',
		tenant: 'nopale.onmicrosoft.com',
		tenentId: 'b4845326-2128-4e0d-991b-2714d78c0ff2',
		clientId: '3fb6e8e8-bc7f-41cc-825a-1f5b8b52aef5'
	}
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
