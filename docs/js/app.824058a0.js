(function(e){function t(t){for(var n,s,i=t[0],l=t[1],A=t[2],u=0,E=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&E.push(a[s][0]),a[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(E.length)E.shift()();return o.push.apply(o,A||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,i=1;i<r.length;i++){var l=r[i];0!==a[l]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=r[0]))}return e}var n={},a={app:0},o=[];function s(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=e,s.c=n,s.d=function(e,t,r){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(r,n,function(t){return e[t]}.bind(null,n));return r},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-app-2/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var A=0;A<i.length;A++)t(i[A]);var c=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"034f":function(e,t,r){"use strict";r("85ec")},"3af4":function(e,t,r){e.exports=r.p+"img/hangman-4.90f5f705.png"},"541c":function(e,t,r){e.exports=r.p+"img/hangman-1.ec554824.png"},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("link",{attrs:{rel:"stylesheet",href:"https://cdn.jsdelivr.net/npm/bootstrap-icons@1.3.0/font/bootstrap-icons.css"}}),r("div",{attrs:{id:"nav"}},[r("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),r("router-link",{attrs:{to:"/list"}},[e._v("List")]),e._v(" | "),r("router-link",{attrs:{to:"/quiz"}},[e._v("Quiz")]),e._v(" | "),r("router-link",{attrs:{to:"/hangman"}},[e._v("Hangman")])],1),r("router-view")],1)},o=[],s=(r("034f"),r("2877")),i={},l=Object(s["a"])(i,a,o,!1,null,null,null),A=l.exports,c=r("9483");Object(c["a"])("".concat("/vue-app-2/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var u=r("8c4f"),E=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("div",{staticClass:"flex flex-row items-center justify-around"},[r("SearchBar",{attrs:{placeholder:"Search country"},on:{changeString:function(t){e.searchString=t}}}),r("SelectInput",{attrs:{label:"Pick a region :",name:"regionSelection",options:e.regions},on:{changeSelect:function(t){e.regionSelected=t}}})],1),r("CountryList",{attrs:{countries:e.filteredCountries}})],1)},g=[],C=(r("4de4"),r("caad"),r("b0c0"),r("2532"),r("96cf"),r("1da1")),f=r("bc3a"),p=r.n(f),h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.countries.length>0?r("table",{staticClass:"mx-auto w-3/4"},[e._m(0),e._l(e.countries,(function(t){return r("tr",{key:t.name,staticClass:"border border-gray-light text-left"},[r("td",{staticClass:"border border-gray-light pl-2 w-1/5"},[e._v(e._s(t.name))]),r("td",{staticClass:"border border-gray-light pl-2 w-2/5"},[e._v(" "+e._s(t.region)+", "+e._s(t.subregion)+" ")]),r("td",{staticClass:"border border-gray-light pl-2 w-1/5"},[e._v(" "+e._s(t.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "))+" ")]),r("td",{staticClass:"border border-gray-light pl-2 w-1/5"},[e._v(" "+e._s(t.languages[0].name)+" ")]),r("td",{staticClass:"border border-gray-light text-center"},[r("router-link",{staticClass:"text-center hover:text-blue-500 transition-200",attrs:{to:"/detail/"+t.name}},[r("i",{staticClass:"bi-eye",staticStyle:{"font-size":"1.5rem"}})])],1)])}))],2):e._e(),0===e.countries.length?r("p",{staticClass:"text-lg font-semibold m-8"},[e._v(" No country found ")]):e._e()])},d=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("tr",[r("th",{staticClass:"border border-gray-light"},[e._v("Country")]),r("th",{staticClass:"border border-gray-light"},[e._v("Region")]),r("th",{staticClass:"border border-gray-light"},[e._v("Population")]),r("th",{staticClass:"border border-gray-light"},[e._v("Language")]),r("th",{staticClass:"border border-gray-light"},[e._v("Detail")])])}],m={name:"CountryList",props:{countries:Array}},B=m,v=Object(s["a"])(B,h,d,!1,null,"b9afbb86",null),Q=v.exports,b=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.country?r("div",{staticClass:"flex flex-row justify-around m-8"},[r("div",{staticClass:"flex flex-col justify-between items-center"},[r("img",{staticClass:"w-48 object-contain",attrs:{src:e.country.flag,alt:"flag"}}),r("p",{staticClass:"text-2xl font-bold mt-2"},[e._v(e._s(e.country.name))])]),r("div",{staticClass:"flex flex-col justify-between text-left"},[r("p",[e._v("Capital : "+e._s(e.country.capital))]),r("p",[e._v("Region : "+e._s(e.country.region))]),r("p",[e._v("SubRegion : "+e._s(e.country.subregion))]),r("p",[e._v(" Population : "+e._s(e.country.population.toString().replace(/\B(?=(\d{3})+(?!\d))/g," "))+" inhabitants ")]),r("p",[e._v(" Currency : "+e._s(e.country.currencies[0].name)+" ("+e._s(e.country.currencies[0].symbol)+") ")])])]):e._e(),e.country?e._e():r("div",[r("p",{staticClass:"font-semibold text-red-500"},[e._v(" Error : no country found for '"+e._s(e.$route.params.country)+"' ")])])])},I=[],y={name:"CountryInfo",props:{country:void 0|Object}},x=y,_=Object(s["a"])(x,b,I,!1,null,"69da634f",null),w=_.exports,S=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col items-center mx-auto w-1/2 lg:w-1/4"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.inputLetter,expression:"inputLetter"},{name:"model",rawName:"v-model.lazy",value:e.inputLetter,expression:"inputLetter",modifiers:{lazy:!0}}],staticClass:"w-full border border-gray-light m-4 px-2 py-1 rounded-lg",attrs:{id:"site-search",name:"q",placeholder:"_",autocomplete:"off"},domProps:{value:e.inputLetter,value:e.inputLetter},on:{input:function(t){t.target.composing||(e.inputLetter=t.target.value)},change:function(t){e.inputLetter=t.target.value}}}),r("div",{staticClass:"flex flex-col items-start text-left w-full"},[r("p",{staticClass:"text-green-500"},[e._v("Right Letters : "+e._s(e.lettersRight.join(" ")))]),r("p",{staticClass:"text-red-500"},[e._v("Wrong Letters : "+e._s(e.lettersWrong.join(" ")))]),e.warningMsg?r("p",{staticClass:"text-blue-500"},[e._v(" This letter has already been proposed ... ")]):e._e()])])},O=[],j={name:"LetterInput",props:{lettersRight:Array,lettersWrong:Array},data:function(){return{inputLetter:"",warningMsg:!1}},watch:{inputLetter:function(){var e=this.inputLetter.toLowerCase();this.inputLetter=""," "!==e&&0!==e.length&&(this.lettersRight.includes(e)||this.lettersWrong.includes(e)?this.warningMsg=!0:(this.warningMsg=!1,this.$emit("inputLetter",e)))}}},L=j,G=Object(s["a"])(L,S,O,!1,null,"9124d92a",null),R=G.exports,q=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("input",{directives:[{name:"model",rawName:"v-model",value:e.searchString,expression:"searchString"},{name:"model",rawName:"v-model.lazy",value:e.searchString,expression:"searchString",modifiers:{lazy:!0}}],staticClass:"border border-gray-light m-4 px-2 py-1 rounded-lg",attrs:{id:"site-search",name:"q",placeholder:e.placeholder},domProps:{value:e.searchString,value:e.searchString},on:{input:function(t){t.target.composing||(e.searchString=t.target.value)},change:function(t){e.searchString=t.target.value}}})},k=[],N={name:"SearchBar",props:{placeholder:String},data:function(){return{searchString:""}},watch:{searchString:function(){this.$emit("changeString",this.searchString)}}},z=N,M=Object(s["a"])(z,q,k,!1,null,"50191d9a",null),D=M.exports,H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("label",{staticClass:"mr-2",attrs:{for:e.name}},[e._v(e._s(e.label))]),r("select",{directives:[{name:"model",rawName:"v-model",value:e.optionSelected,expression:"optionSelected"}],staticClass:"border border-gray-300 rounded-lg p-1",attrs:{name:e.name,id:e.name},on:{change:[function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.optionSelected=t.target.multiple?r:r[0]},function(t){return e.$emit("changeSelect",e.optionSelected)}]}},e._l(e.options,(function(t){return r("option",{key:t.label,domProps:{value:t.value}},[e._v(e._s(t.label))])})),0)])},X=[],P={name:"SelectInput",data:function(){return{optionSelected:""}},props:{label:String,name:String,options:Array}},Y=P,$=Object(s["a"])(Y,H,X,!1,null,"0dd0bd70",null),Z=$.exports,F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col items-center"},[r("Scoreboard",{attrs:{score:e.score,"best-score":parseInt(e.bestScore)}}),e.gameOver?e._e():r("Game",{attrs:{flag:e.answer.flag,"handled-countries":e.handledCountries},on:{handleCountry:function(t){return e.handleClick(t)}}}),e.gameOver?r("GameOver",{attrs:{win:!1},on:{restart:function(t){e.gameOver=!1}}}):e._e()],1)},W=[],V=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"w-full flex flex-row justify-around"},[r("p",{staticClass:"m-1 font-semibold"},[e._v("Score : "+e._s(e.score))]),r("p",{staticClass:"m-1 font-semibold"},[e._v("Best : "+e._s(e.bestScore))])])},T=[],U=(r("a9e3"),{name:"Scoreboard",props:{score:Number,bestScore:Number}}),J=U,K=Object(s["a"])(J,V,T,!1,null,"af40d2c8",null),ee=K.exports,te=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col items-center"},[r("img",{staticClass:"w-48 h-32 object-contain border border-black",attrs:{src:e.flag,alt:"flag"}}),r("div",{staticClass:"flex flex-row flex-wrap justify-between items-center"},e._l(e.handledCountries,(function(t){return r("button",{key:t.name,staticClass:"flex flex-wrap m-4 p-1 border bg-gray-200 hover:bg-green-200 rounded-lg",on:{click:function(r){return e.$emit("handleCountry",t)}}},[e._v(" "+e._s(t.name)+" ")])})),0)])},re=[],ne={name:"Game",props:{flag:String,handledCountries:Array}},ae=ne,oe=Object(s["a"])(ae,te,re,!1,null,"65619986",null),se=oe.exports,ie=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"flex flex-col items-center my-8"},[r("p",{class:e.win?"text-2xl font-bold text-green-500":"text-2xl font-bold text-red-500"},[e._v(e._s(e.win?"You won !":"Game Over !"))]),r("button",{staticClass:"m-4 p-1 border bg-gray-200 hover:bg-green-200 rounded-lg",on:{click:function(t){return e.$emit("restart")}}},[e._v(" Restart ")])])},le=[],Ae={name:"GameOver",props:{win:Boolean}},ce=Ae,ue=Object(s["a"])(ce,ie,le,!1,null,"3fed58be",null),Ee=ue.exports,ge={name:"FlagQuiz",components:{GameOver:Ee,Game:se,Scoreboard:ee},data:function(){return{countries:[],score:0,bestScore:0,handledCountries:[],answer:"",gameOver:!1}},methods:{pickCountries:function(){this.handledCountries=[];for(var e=Math.floor(4*Math.random()),t=0;t<4;t++){var r=Math.floor(Math.random()*this.countries.length);while(this.handledCountries.includes(this.countries[r]))r=Math.floor(Math.random()*this.countries.length);t===e&&(this.answer=this.countries[r]),this.handledCountries.push(this.countries[r])}console.log(this.answer.name)},handleClick:function(e){var t;e.name===this.answer.name?this.score+=1:(this.score>(null!==(t=localStorage.pbFlag)&&void 0!==t?t:this.bestScore)&&(this.bestScore=this.score,localStorage.pbFlag=this.score),this.score=0,this.gameOver=!0);this.pickCountries()}},beforeCreate:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://restcountries.eu/rest/v2/all?fields=name;flag").then((function(t){e.countries=t.data}));case 2:localStorage.pbFlag&&(e.bestScore=localStorage.pbFlag),e.pickCountries();case 4:case"end":return t.stop()}}),t)})))()}},Ce=ge,fe=Object(s["a"])(Ce,F,W,!1,null,"4115e882",null),pe=fe.exports,he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("img",{staticClass:"w-48 h-48 my-2 flex mx-auto",attrs:{alt:"logo",src:r("f4e2")("./hangman-"+e.lettersWrong.length+".png")}})])},de=[],me={name:"HangmanDisplay",props:{lettersWrong:Array}},Be=me,ve=Object(s["a"])(Be,he,de,!1,null,"2609de24",null),Qe=ve.exports,be={name:"List",components:{SelectInput:Z,SearchBar:D,CountryList:Q},data:function(){return{countries:[],searchString:"",regionSelected:"",regions:[{label:"All",value:""},{label:"Africa",value:"Africa"},{label:"Americas",value:"Americas"},{label:"Asia",value:"Asia"},{label:"Europe",value:"Europe"},{label:"Oceania",value:"Oceania"}]}},computed:{filteredCountries:function(){var e,t=this;return e=""===this.regionSelected?this.countries:this.countries.filter((function(e){return e.region===t.regionSelected})),0===this.searchString.length?e:e.filter((function(e){return e.name.toLowerCase().includes(t.searchString.toLowerCase())}))}},beforeCreate:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://restcountries.eu/rest/v2/all?fields=name;region;subregion;population;languages").then((function(t){e.countries=t.data}));case 2:case"end":return t.stop()}}),t)})))()}},Ie=be,ye=Object(s["a"])(Ie,E,g,!1,null,"cd4d5922",null),xe=ye.exports,_e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("CountryInfo",{attrs:{country:e.country}})},we=[],Se={name:"Detail",components:{CountryInfo:w},data:function(){return{country:void 0}},beforeCreate:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$route.params.country,t.next=3,p.a.get("https://restcountries.eu/rest/v2/name/"+r).then((function(t){e.country=t.data[0]}));case 3:case"end":return t.stop()}}),t)})))()}},Oe=Se,je=Object(s["a"])(Oe,_e,we,!1,null,"02a3246b",null),Le=je.exports,Ge=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Re=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home flex flex-col items-center"},[n("img",{staticClass:"w-24 h-24 my-2",attrs:{alt:"logo",src:r("cf05")}}),n("p",{staticClass:"my-2 text-lg font-semibold"},[e._v(" Welcome to my Vue.js application using REST Countries API ")]),n("p",{staticClass:"my-2"},[e._v(" Here you can see for countries, detailed information about them and even some quiz ! ")]),n("p",{staticClass:"my-2"},[e._v(" See my other projects on my "),n("a",{staticClass:"text-blue-600 hover:underline",attrs:{href:"https://github.com/SamuelPlaton"}},[e._v(" Github ")])])])}],qe={name:"Home"},ke=qe,Ne=Object(s["a"])(ke,Ge,Re,!1,null,null,null),ze=Ne.exports,Me=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("FlagQuiz")],1)},De=[],He={name:"Quiz",components:{FlagQuiz:pe}},Xe=He,Pe=Object(s["a"])(Xe,Me,De,!1,null,"79473c54",null),Ye=Pe.exports,$e=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("HangmanDisplay",{attrs:{"letters-wrong":e.lettersWrong,"user-answer":e.userAnswer}}),r("p",[e._v(e._s(e.userAnswer.toString().replaceAll(",","")))]),e.lettersWrong.length<5&&!e.win?r("LetterInput",{attrs:{"letters-right":e.lettersRight,"letters-wrong":e.lettersWrong},on:{inputLetter:function(t){return e.handleLetter(t)}}}):e._e(),5===e.lettersWrong.length||e.win?r("GameOver",{attrs:{win:e.win},on:{restart:e.play}}):e._e()],1)},Ze=[],Fe=(r("a15b"),r("d81d"),r("ac1f"),r("1276"),{name:"Hangman",components:{HangmanDisplay:Qe,GameOver:Ee,LetterInput:R},data:function(){return{countries:[],selectedCountry:[],lettersRight:[],lettersWrong:[],userAnswer:[],win:!1}},methods:{play:function(){this.lettersWrong=[],this.lettersRight=[],this.win=!1,this.selectedCountry=this.countries[Math.floor(Math.random()*this.countries.length)].name.toLowerCase().split(""),console.log(this.selectedCountry.join("")),this.userAnswer=this.selectedCountry.map((function(e){return" "===e?" ":"_"}))},handleLetter:function(e){var t=this;this.selectedCountry.includes(e)?(this.lettersRight.push(e),this.selectedCountry.map((function(r,n){r===e&&(t.userAnswer[n]=r,t.win=!t.userAnswer.includes("_"))}))):this.lettersWrong.push(e)}},beforeCreate:function(){var e=this;return Object(C["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://restcountries.eu/rest/v2/all?fields=name").then((function(t){e.countries=t.data}));case 2:e.play();case 3:case"end":return t.stop()}}),t)})))()}}),We=Fe,Ve=Object(s["a"])(We,$e,Ze,!1,null,"45594aa7",null),Te=Ve.exports;n["a"].use(u["a"]);var Ue=[{path:"/",name:"Home",component:ze},{path:"/list",name:"List",component:xe},{path:"/detail/:country",name:"Detail",component:Le},{path:"/quiz",name:"Quiz",component:Ye},{path:"/hangman",name:"Hangman",component:Te}],Je=new u["a"]({routes:Ue}),Ke=Je;r("def6");n["a"].config.productionTip=!1,new n["a"]({router:Ke,render:function(e){return e(A)}}).$mount("#app")},"6a6a":function(e,t,r){e.exports=r.p+"img/hangman-2.7506fbb6.png"},"85ec":function(e,t,r){},"864f":function(e,t,r){e.exports=r.p+"img/hangman-3.186a30d1.png"},cf05:function(e,t,r){e.exports=r.p+"img/logo.92298c0e.png"},cf5e:function(e,t){e.exports="data:image/png;base64,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ABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCABBCAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQAIQQACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEACEEQAgBQAgB4HA6YgS7M03Tofp5xxjmcQ7zAA7A33G/yLsOoQHSGGMyBTiYbI0CIIQAcFjZGgXAihAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAAhBAA9oX/DAALGRZzQsCAlAAAAABJRU5ErkJggg=="},def6:function(e,t,r){},e995:function(e,t,r){e.exports=r.p+"img/hangman-5.d082f0b2.png"},f4e2:function(e,t,r){var n={"./hangman-0.png":"cf5e","./hangman-1.png":"541c","./hangman-2.png":"6a6a","./hangman-3.png":"864f","./hangman-4.png":"3af4","./hangman-5.png":"e995"};function a(e){var t=o(e);return r(t)}function o(e){if(!r.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=o,e.exports=a,a.id="f4e2"}});
//# sourceMappingURL=app.824058a0.js.map