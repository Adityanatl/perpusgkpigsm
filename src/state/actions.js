// import mutations from './mutations'
import * as types from './mutations_types.js'
import axios from 'axios'


export const checkTokenExpiredAndRefresh = ({commit, getters}) => {
  let userSession = getters.getUserSession;

  let now = new Date().getTime() / 1000;
  console.log(userSession.token.iat);
  console.log(userSession.token.exp);
  console.log(now);
}
//
// export const actionLogin = ({ commit, getters, dispatch }, payload) => {
//   console.log('actionLogin ',payload);
//   return axios.post('http://localhost:8709/adm/login', payload)
//     .then(function (response) {
//       console.log('response ',response);
//       if (!getters.getUserSession.refreshEnabled) {
//         console.log("creat timer to watch token expired")
//         var it = setInterval(function () {
//           console.log('check expired');
//
//           //clear interval if logout, not really necessery
//           if (!getters.getUserSession.token.token) {
//             console.log('clear interval');
//             clearInterval(it);
//           } else {
//              if (getters.isTokenExpired) {
//                 dispatch("actionLogin", payload);
//               }
//           }
//         }, 1000 * 60 * 60); // 1hr
//       }
//       commit(types.LOGIN, {
//         token : {
//           token:response.data.data.token,
//           exp: (new Date().getTime() / 1000) * 60 * 60
//         }, email:payload.email, password:payload.password});
//
//       //resolve();
//     })
//     .catch(function (error) {
//       console.log('error ',error);
//       console.log('login ajax fail');
//       console.log(xhr.responseText);
//       reject();
//       //currentObj.output = error;
//     });
//  return new Promise((resolve, reject) => {
//    $.ajax("http://localhost:8709/adm/login", {
//      type:'POST',
//      data : JSON.stringify({email:email, password:password}),
//      dataType:'json',
//      contentType: 'application/json',
//    })
//    .done(function(data) {
//      console.log("login success =>{}",data);
//      if (!getters.getUserSession.refreshEnabled) {
//        console.log("creat timer to watch token expired")
//        var it = setInterval(function () {
//          console.log('check expired');
//
//          //clear interval if logout, not really necessery
//          if (!getters.getUserSession.token.token) {
//            console.log('clear interval');
//            clearInterval(it);
//          } else {
//             if (getters.isTokenExpired) {
//                dispatch("actionLogin", {
//                  email:email,
//                  password:password
//                });
//              }
//          }
//        }, 1000 * 60 * 60); // 1hr
//      }
//      commit(types.LOGIN, {
//        token : {
//          token:data.data.token,
//          exp: (new Date().getTime() / 1000) * 60 * 60
//        }, email:email, password:password});
//
//      resolve();
//    })
//    .fail(function(xhr, status, error) {
//      console.log('login ajax fail');
//      console.log(xhr.responseText);
//      reject();
//    });
//  });
// }

export const actionLogout = ({commit}) => {
  console.log('action logout')
  commit(types.LOGOUT);
}

