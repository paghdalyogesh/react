const API_BASE_ADDRESS = 'http://localhost:3000';
export default class Api {
   static getCall(api) {
       const uri = API_BASE_ADDRESS + api;
       return fetch(uri, {
           method: 'GET'
       });
   }
}