(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-loginA-loginA"],{2226:function(A,n,t){"use strict";var e=t("cf0c"),i=t.n(e);i.a},"30c8":function(A,n,t){var e=t("a843");"string"===typeof e&&(e=[[A.i,e,""]]),e.locals&&(A.exports=e.locals);var i=t("4f06").default;i("07b37e46",e,!0,{sourceMap:!1,shadowMode:!1})},"463e":function(A,n,t){"use strict";var e,i=function(){var A=this,n=A.$createElement,e=A._self._c||n;return e("v-uni-view",{staticClass:"auth"},[A.login?e("v-uni-view",{staticClass:"login-box"},[e("v-uni-view",{staticClass:"t1"},[A._v("授权登陆")]),e("v-uni-view",{staticClass:"t2"},[e("img",{attrs:{src:t("f6f5")}}),e("v-uni-view",[A._v("申请获取以下权限")])],1),e("v-uni-view",{staticClass:"t3"},[A._v("获得你的公开信息(名称、头像)")]),e("v-uni-view",{staticClass:"t4"},[e("v-uni-button",{attrs:{size:"mini","open-type":"getUserInfo"},on:{getuserinfo:function(n){arguments[0]=n=A.$handleEvent(n),A.updateUserInfo.apply(void 0,arguments)}}},[A._v("授权登陆")])],1)],1):A._e()],1)},a=[];t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return e}))},"4c9d":function(A,n,t){"use strict";var e,i=function(){var A=this,n=A.$createElement,e=A._self._c||n;return e("v-uni-view",{staticClass:"loginA"},[e("v-uni-view",{staticClass:"head"},[e("img",{attrs:{src:t("e1d4")}})]),e("v-uni-view",{staticClass:"name"},[A._v("商城")]),e("v-uni-view",{staticClass:"btn-wx",on:{click:function(n){arguments[0]=n=A.$handleEvent(n),A.login("wx")}}},[e("img",{attrs:{src:t("b66e")}}),A._v("微信一键登录")]),e("v-uni-view",{staticClass:"shou",on:{click:function(n){arguments[0]=n=A.$handleEvent(n),A.login("phone")}}},[A._v("使用手机号登陆 >")])],1)},a=[];t.d(n,"b",(function(){return i})),t.d(n,"c",(function(){return a})),t.d(n,"a",(function(){return e}))},"4cce":function(A,n,t){"use strict";t.r(n);var e=t("f285"),i=t.n(e);for(var a in e)"default"!==a&&function(A){t.d(n,A,(function(){return e[A]}))}(a);n["default"]=i.a},"6e38":function(A,n,t){var e=t("24fb");n=e(!1),n.push([A.i,".auth .login-box[data-v-dd819ad0]{position:absolute;left:15%;top:25%;z-index:99999;border-radius:%?20?%;box-shadow:1px 5px 3px #ccc;width:70%;height:%?439?%;background:#faf9fd;text-align:center}.auth .login-box .t1[data-v-dd819ad0]{font-size:%?32?%;border-bottom:1px solid #dedede;padding:7px 0}.auth .login-box .t2[data-v-dd819ad0]{padding:%?10?% 0 %?10?%;font-size:%?30?%}.auth .login-box .t2 uni-image[data-v-dd819ad0]{width:%?120?%;height:%?120?%}.auth .login-box .t3[data-v-dd819ad0]{font-size:%?28?%;color:#a8a7ab;padding-bottom:%?20?%}.auth .login-box .t4[data-v-dd819ad0]{border-top:1px solid #dedede;padding:10px 0 0}.auth .login-box .t4 uni-button[data-v-dd819ad0]{font-size:%?32?%;color:#51c332;font-weight:500}",""]),A.exports=n},"7b79":function(A,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e=t("cab5"),i={data:function(){return{login:!1}},props:["auth"],watch:{"auth.is_name":function(A){this.check_userAuth()},"auth.is_address":function(A){console.log("address:",A)},"auth.is_phone":function(A){console.log("phone:",A)}},methods:{check_userAuth:function(){console.log("授权开始");var A=this;uni.login({provider:"weixin",success:function(n){uni.getUserInfo({provider:"weixin",success:function(n){uni.showLoading({title:"登录中..."}),console.log(n.userInfo),"getUserInfo:ok"==n.errMsg&&A.UpUser(n.userInfo)}})}})},UpUser:function(A){var n=this;uni.request({url:e.Api_url+"auth/app_wx_login",method:"POST",data:A,success:function(A){uni.setStorageSync("token",A.data.token),n.$emit("check_login",!0)}})}}};n.default=i},a061:function(A,n,t){"use strict";t.r(n);var e=t("7b79"),i=t.n(e);for(var a in e)"default"!==a&&function(A){t.d(n,A,(function(){return e[A]}))}(a);n["default"]=i.a},a843:function(A,n,t){var e=t("24fb");n=e(!1),n.push([A.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 页面左右间距 */\r\n/* 文字尺寸 */\r\n/*文字颜色*/\r\n/* 边框颜色 */\r\n/* 图片加载中颜色 */\r\n/* 行为相关颜色 */.loginA .head[data-v-516ca0fa]{padding:80px 0 0;text-align:center}.loginA .head img[data-v-516ca0fa]{width:85px;height:85px;border-radius:10px}.loginA .name[data-v-516ca0fa]{text-align:center;padding:20px 0 150px;font-size:16px;font-weight:600}.loginA .btn-wx[data-v-516ca0fa]{margin:10px;background-color:#1aac19;border-radius:5px;color:#fff;text-align:center;padding:10px;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.loginA .btn-wx img[data-v-516ca0fa]{width:25px;height:25px;padding-right:5px}.loginA .shou[data-v-516ca0fa]{text-align:center;padding:5px 10px 0}.loginA .des[data-v-516ca0fa]{text-align:center;color:#9b9b9b;padding:40px 10px 0;font-size:12px}',""]),A.exports=n},b66e:function(A,n){A.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAFhElEQVR4Xu2aWYgcVRSGv//BXaO4r0RFVFAkihHFBSMogvuSID645E2icTeCARUV0RgNBjdEg5GIGBMDKlERjbigaDRuqHEhL25kUYzr05E/1ISenu6qW9XV3cNMHyhmoM45956/zz3bLTHOSePcfgYADDxgnCMwOALj3AEGQXBwBOo+AhGxNbBTwxPAemCDpA11r9epvo49ICJ2BE4ATgLOAQ4p2NQK4F3gY2C5pH86NaIT+coARMShwKXAZcCeFTfxPfCsH0lfVNTRkVhpACJif2BWZrjdvS6aDzwo6bu6FKboKQVARPjXvhUwCN0gx4j5km7rhvJWOpMBiIgF2a/ei729Kun0XiyUBEBEPAdM7cWGGtb4Q5IDbFepEIA+GT9k9CpJR3YTgVwAIuIW4M6EDThw7QDskcDbyPIZcESBzGJJ00rqTWZvC0BETAbeArbJ0bYYWCBpuXkiwsHLQbKIZgKLXBhFxEHAtwUCsyTdW6S0yvs8AJZlhU07vT9J2qf5ZUS48sujmZKc8jZTAnDrXGxJ+qaKkXkyLQGIiKOAlQWLrZR0dAUAzpL0UkkAzD5X0g29AmAucF3CYtMk+Rhsoog4GXizQG7EmU4MtCskTUnYUymWdh7wS4mA5vO/CNgLmJO4uoOm5d4GTgSuSpDbCEyS9EMCbzLLCACy5ub3ZA31M74PvAK8Dvjsr5e0LiL2AyZKeqfOJVsBcCDgJqWXtBpYCCyR9HXWaJ2SFV+7ArsA/vt3BoqB+QB4QZK7y8rUCoBjMuWVlZYUvAJ4Ctgi6y4vBo4tocPgOQ4tlOT/S1ErACYBn5TSUp3ZWeQr4CbgEuCA6qrwXMFAziuTLlsB4GnObx1sJFV0O+DszPg6y10fjzmphVO7LPAjsHeqJRX4bLCP2mMVZFNFnpZkr8qldgA4PXnM1Q1yXb82oV6oY+37JV2fp6gdAFd6MFHHDpp0uJ6/OzPesaYXdK2kee0WagfA9lkgdKNSF7mOt1e5w7ymQKlTm6vKIvIEyalx3xxG1zRTJK1qxZPXDM0G7ijaQYn3M4A1wMs5Ms7tMyStjIjdgEeB89vwe3TmrtIl+HHAezl6l0k6rywAWwEvAqeWMDKPdXfAR8BzxXZ0e+M8MK+3kDTsx0voKCdL+qh54aKBSF1VoQsV53qPvp3+2tGwhqfAqGawitpwT5yvLgVA5l6+8PBgpBOy8U6tbpqKyG2422V7nqdFjkftyA3Vn4CPQF4csPyHkpx6h1HhTDADwX14aqfXarOXAw6oDoD9ojWSRlSaSQBkIJwGeDpcZVJ7BjAduKBf1gN/SRrhTckAZCB46PkEYIPKkA2/qA+j9cY9rpXkQFz+CDRKRMSnCZPc5nV8lbZt4sC0DLBleFtOlMp6wJbAf2VWzXidz18DllaQrUvkYUmuRap7QES4rr6vSYeNczQ+vuFpXscTnguzNNite8UioKZKer5TAFzJTQT+zbLCI5J+blYaETsDfjzJcanqEfr6iHAhdGPRTrvwvu0NU/IRyIz6HHjcbWwrw4s2HhFugDw19syhl3SzpHtaLVgGAN/6VDK8KYi6EXqgh9bnXq0lA1DnhiNiSU6TU+dSX0o6PE9hvwDwldobwMF1Wtuka6OkCUX6+wKAN5V1em6SPO6um5JvkfoGQAaCvyhzo+QyuS4qdYfYVwCGLI6IM7OxeB1focyWdFcqmqMCgAYg3NZ6aOpW+LBEI5rHZ6slFX2ruFn1qAKgKV26Zji34VrMRZV7/1+zx+d807VYFk/8YcbQHHGCJF+mFtKoBaBw5y0YIsJzP88unpH0UIqOMQVAw1GaLunJcQtAiuFDPGPSAwYAlEBg4AElwBqTrAMPGJM/awmjBh5QAqwxyTruPeB/adCYUG0fRAMAAAAASUVORK5CYII="},b809:function(A,n,t){"use strict";t.r(n);var e=t("4c9d"),i=t("4cce");for(var a in i)"default"!==a&&function(A){t.d(n,A,(function(){return i[A]}))}(a);t("ffe0");var o,r=t("f0c5"),s=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,"516ca0fa",null,!1,e["a"],o);n["default"]=s.exports},cf0c:function(A,n,t){var e=t("6e38");"string"===typeof e&&(e=[[A.i,e,""]]),e.locals&&(A.exports=e.locals);var i=t("4f06").default;i("49e97ac8",e,!0,{sourceMap:!1,shadowMode:!1})},e1d4:function(A,n){A.exports="data:image/jpeg;base64,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"},eeee:function(A,n,t){"use strict";t.r(n);var e=t("463e"),i=t("a061");for(var a in i)"default"!==a&&function(A){t.d(n,A,(function(){return i[A]}))}(a);t("2226");var o,r=t("f0c5"),s=Object(r["a"])(i["default"],e["b"],e["c"],!1,null,"dd819ad0",null,!1,e["a"],o);n["default"]=s.exports},f285:function(A,n,t){"use strict";var e=t("ee27");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=e(t("eeee")),a={data:function(){return{auth:{is_name:!1,is_address:!1,is_phone:!1}}},components:{AppAuth:i.default},methods:{login:function(A){"wx"==A&&(console.log("微信登录"),this.auth.is_name=!this.auth.is_name),"phone"==A&&uni.navigateTo({url:"../loginB/loginB"})},get_userinfo:function(A){this.userinfo=A,uni.reLaunch({url:"/pages/index/index"})},check_login:function(A){A&&(uni.hideLoading(),uni.reLaunch({url:"/pages/index/index"}))}}};n.default=a},f6f5:function(A,n,t){A.exports=t.p+"static/img/wx_logo.9340ae3b.png"},ffe0:function(A,n,t){"use strict";var e=t("30c8"),i=t.n(e);i.a}}]);