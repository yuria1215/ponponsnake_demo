(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[795],{8715:function(e,r,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/market_new",function(){return i(5741)}])},5741:function(e,r,i){"use strict";i.r(r),i.d(r,{default:function(){return b}});var a=i(6042),n=i(9396),t=i(828),c=i(5893),s=i(7294),l=i(9008),d=i.n(l),m=i(3277),o=function(e){return"".concat("/ponponsnake_demo","/").concat(e)},p=function(e){var r=e.name,i=e.isChecked,a=e.isShowIcon,n=e.onClick;return(0,c.jsx)("div",{className:"dropdown-link",onClick:n,children:(0,c.jsxs)("span",{children:[(0,c.jsx)("div",{className:"checkbox ".concat(i?"checkboxCheck":""),children:(0,c.jsx)("svg",{className:"checkMark ".concat(i?"checkMarkShow":""),xmlns:"http://www.w3.org/2000/svg",width:"12.04",height:"11.312",viewBox:"0 0 12.04 11.312",children:(0,c.jsx)("path",{id:"checkmark-round",d:"M10.477.206A.975.975,0,0,0,9.06.445L4.348,7.339l-2.6-2.81A.97.97,0,0,0,.32,4.481,1.122,1.122,0,0,0,.276,6s3.153,3.5,3.606,3.85A.975.975,0,0,0,5.3,9.614l5.4-7.9A1.121,1.121,0,0,0,10.477.206Z",transform:"translate(1.226) rotate(7)",fill:"#343456"})})}),a&&(0,c.jsx)("img",{className:"checkbox-icon",src:o("images/marketplace/marketFilter/ElementsIcon-".concat(r,".png")),alt:""}),r]})})};function u(e){var r=e.onChange,i=(0,t.Z)((0,s.useState)(!1),2),a=i[0],n=i[1],l=(0,t.Z)((0,s.useState)([{type:"rarities",name:"Rarity",list:[{name:"Excellent",isChecked:!1},{name:"Rare",isChecked:!1},{name:"Legend",isChecked:!1},{name:"Ordinary",isChecked:!1},{name:"Cooperation",isChecked:!1}]},{type:"talents",name:"Talents",list:[{name:"Water",isChecked:!1},{name:"Fire",isChecked:!1},{name:"Earth",isChecked:!1},{name:"Wind",isChecked:!1}]}]),2),d=l[0],m=l[1],o=function(e){return e.reduce(function(e,r){return r.isChecked&&e.push(r.name),e},[])},u=function(e){e.isChecked=!e.isChecked;var i=(0,t.Z)(d,2),a=i[0],n=i[1];r({rarities:a=o(a.list),talents:n=o(n.list)}),m(d.slice())};return(0,c.jsx)(c.Fragment,{children:(0,c.jsxs)("div",{className:"button",id:"button-filter",onClick:function(e){return n(!a)},tabIndex:0,onBlur:function(){return n(!1)},children:[(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12.668",height:"10.025",viewBox:"0 0 12.668 10.025",children:(0,c.jsx)("path",{id:"filter-list",d:"M4.916,16.025V14.341H7.753v1.684ZM0,6H12.668V7.684H0Zm2.111,5.835V10.19h8.446v1.645Z",transform:"translate(0 -6)",fill:"#c5cbfe"})}),"Filters",(0,c.jsx)("div",{className:"filterDropdown ".concat(a?"filterDropdownShow":""),onClick:function(e){return e.stopPropagation()},children:d.map(function(e){var r=e.type,i=e.name,a=e.list;return(0,c.jsxs)("div",{children:[(0,c.jsx)("div",{className:"filter-type",children:(0,c.jsx)("span",{children:i})}),a.map(function(e){return(0,c.jsx)(p,{name:e.name,isChecked:e.isChecked,isShowIcon:"talents"===r,onClick:function(){return u(e)}},e.name)})]},i)})})]})})}function h(e){var r=e.onChange,i=(0,t.Z)((0,s.useState)("all"),2),a=i[0],n=i[1],l=(0,t.Z)((0,s.useState)(!1),2),d=l[0],m=l[1],p=[{type:"all",name:"All"},{type:"rider",name:"Rider"},{type:"item",name:"Item"},{type:"land",name:"Land"}],h=function(e){n(e),r({type:e})};return(0,c.jsx)("section",{className:"market-navigation",children:(0,c.jsxs)("div",{className:"market-navigation-block",children:[(0,c.jsx)("div",{className:"left-block",children:p&&p.map(function(e){var r=e.type,i=e.name;return(0,c.jsxs)("div",{className:"type ".concat(a===r?"current":""),onClick:function(){return h(r)},children:[(0,c.jsx)("img",{className:"type-icon",src:o("images/marketplace/marketFilter/".concat(r,".png")),alt:""}),(0,c.jsx)("div",{className:"type-name",children:i})]},r)})}),(0,c.jsxs)("div",{className:"right-block",children:[(0,c.jsx)("div",{className:"dropdown-block",children:(0,c.jsx)(u,{onChange:function(e){return r(e)}})}),(0,c.jsx)("div",{className:"dropdown-block",children:(0,c.jsxs)("div",{className:"button",id:"button-sort",onClick:function(){var e=!d;m(e),r({isSort:e})},children:[(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14.161",height:"13.126",viewBox:"0 0 14.161 13.126",children:(0,c.jsxs)("g",{id:"arrows-vertical",transform:"translate(-3.021 -4.146)",children:[(0,c.jsx)("path",{id:"Path_4468","data-name":"Path 4468",d:"M24.61,13.09l-1.863,1.863V4.5H21.712V14.953L19.849,13.09l-.724.724,3.1,3.1,3.1-3.1Z",transform:"translate(-8.505 0)",fill:"#c5cbfe",stroke:"#c5cbfe",strokeWidth:"0.5"}),(0,c.jsx)("path",{id:"Path_4469","data-name":"Path 4469",d:"M6.48,4.5l-3.1,3.1.724.724L5.962,6.466V16.919H7V6.466L8.86,8.329,9.585,7.6Z",transform:"translate(0 0)",fill:"#c5cbfe",stroke:"#c5cbfe",strokeWidth:"0.5"})]})}),"Price low to high"]})})]})]})})}function g(e){var r=e.cardData,i=r.data,a=r.type,n=r.rarities,t=r.talents,s=r.isSort,l=i.filter(function(e){var r=e.type,i=e.rarity,c=e.labelIcon,s=0===n.length||n.includes(i),l=0===t.length||t.includes(c);return("all"===a||r===a)&&s&&l});return s&&(l=l.sort(function(e,r){return e.priceUSD-r.priceUSD})),(0,c.jsxs)("section",{className:"card-list",children:[l.map(function(e,r){return(0,c.jsxs)("div",{className:"card ".concat(e.type),children:[(0,c.jsxs)("div",{className:"card-label",children:[e.labelIcon&&(0,c.jsx)("img",{className:"card-label-icon",src:o("images/marketplace/card/ElementsIcon-".concat(e.labelIcon,".png")),alt:""}),(0,c.jsx)("div",{className:"card-label-rarity",children:e.rarity})]}),(0,c.jsx)("div",{className:"card-favorite",children:(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"13.5",height:"12.179",viewBox:"0 0 13.5 12.179",children:(0,c.jsx)("path",{id:"heart-solid",d:"M15.082,5.285a3.437,3.437,0,0,0-4.089-1.557,4.165,4.165,0,0,0-2.24,1.591,4.165,4.165,0,0,0-2.24-1.591A3.445,3.445,0,0,0,2.423,5.285c-.793,1.624-.464,3.451.979,5.43A25.646,25.646,0,0,0,8.5,15.657a.422.422,0,0,0,.519,0,25.188,25.188,0,0,0,5.093-4.941c1.439-1.979,1.768-3.806.975-5.43Z",transform:"translate(-2.003 -3.567)",fill:"#eceeff"})})}),(0,c.jsx)("div",{className:"card-image",children:(0,c.jsx)("img",{src:o("images/marketplace/card/".concat(e.image,".png")),alt:""})}),(0,c.jsx)("div",{className:"card-time",children:e.time}),(0,c.jsxs)("div",{className:"card-content ".concat(e.rarity),children:[(0,c.jsx)("div",{className:"card-name",children:e.name}),(0,c.jsxs)("div",{className:"card-info",children:[(0,c.jsxs)("div",{className:"card-number",children:["#",e.number]}),(0,c.jsxs)("div",{className:"card-price",children:[(0,c.jsx)("img",{className:"card-price-icon",src:o("images/marketplace/card/SRC.png"),alt:""}),(0,c.jsx)("span",{children:e.priceSRC})]})]}),(0,c.jsxs)("div",{className:"card-USD",children:["$",e.priceUSD," USD"]})]})]},r)}),(0,c.jsx)("i",{}),(0,c.jsx)("i",{}),(0,c.jsx)("i",{})]})}var y=[{type:"item",rarity:"Excellent",image:"item/item_001",time:"a few seconds ago",name:"Holy Hall",number:"1",priceSRC:"10,000",priceUSD:"4.83"},{type:"item",rarity:"Epic",image:"item/item_002",time:"a few seconds ago",name:"Sekibune",number:"2",priceSRC:"8,000",priceUSD:"3.83"},{type:"item",rarity:"Epic",image:"item/item_003",time:"a minute ago",name:"Five Masted Barque Giant Boat",number:"3",priceSRC:"9,500",priceUSD:"4.00"},{type:"item",rarity:"Legend",image:"item/item_004",time:"a minute ago",name:"Princess Felice Boat",number:"4",priceSRC:"9,800",priceUSD:"4.30"},{type:"item",rarity:"Legend",image:"item/item_005",time:"10 minutes ago",name:"Lucifer's Uni-Shark Battleship",number:"5",priceSRC:"7,800",priceUSD:"3.30"},{type:"land",rarity:"Excellent",image:"land/land_001",time:"a few seconds ago",name:" Dragon Land 1%",number:"1",priceSRC:"12,000",priceUSD:"80.00"},{type:"land",rarity:"Epic",image:"land/land_002",time:"a few seconds ago",name:"Dragon Land 5%",number:"2",priceSRC:"150,000",priceUSD:"100.00"},{type:"land",rarity:"Legend",image:"land/land_003",time:"a minute ago",name:" Dragon Land 10%",number:"3",priceSRC:"200,000",priceUSD:"120.00"},{type:"land",rarity:"The Abyss",image:"land/land_004",time:"a minute ago",name:"Dragon Land 15%",number:"4",priceSRC:"500,000",priceUSD:"150.00"},{type:"rider",labelIcon:"Water",rarity:"Epic",image:"rider/rider_001",time:"a few seconds ago",name:"Celica",number:"75",priceSRC:"10,000",priceUSD:"4.83"},{type:"rider",labelIcon:"Fire",rarity:"Excellent",image:"rider/rider_002",time:"a few seconds ago",name:"Bone Dragon",number:"61",priceSRC:"8,000",priceUSD:"3.83"},{type:"rider",labelIcon:"Earth",rarity:"Epic",image:"rider/rider_003",time:"a minute ago",name:"Pirate Felice",number:"74",priceSRC:"9,500",priceUSD:"4.00"},{type:"rider",labelIcon:"Water",rarity:"Epic",image:"rider/rider_004",time:"a minute ago",name:"Erlang Yang Jian",number:"67",priceSRC:"9,800",priceUSD:"4.30"},{type:"rider",labelIcon:"Water",rarity:"Excellent",image:"rider/rider_005",time:"10 minutes ago",name:"Chicken Family",number:"64",priceSRC:"7,800",priceUSD:"3.30"},{type:"rider",labelIcon:"Fire",rarity:"Epic",image:"rider/rider_006",time:"10 minutes ago",name:"Fireboy Nezha",number:"68",priceSRC:"10,500",priceUSD:"5.12"},{type:"rider",labelIcon:"Earth",rarity:"Rare",image:"rider/rider_007",time:"8 hours ago",name:"Venus",number:"23",priceSRC:"6,500",priceUSD:"2.12"},{type:"rider",labelIcon:"Water",rarity:"Rare",image:"rider/rider_008",time:"10 hours ago",name:"Wendini",number:"35",priceSRC:"6,600",priceUSD:"2.15"},{type:"rider",labelIcon:"Fire",rarity:"Legend",image:"rider/rider_009",time:"12 hours ago",name:"Holy Goddess Celica",number:"90",priceSRC:"12,600",priceUSD:"6.15"},{type:"rider",labelIcon:"Wind",rarity:"Excellent",image:"rider/rider_010",time:"14 hours ago",name:"Doggy Sled",number:"22",priceSRC:"7,500",priceUSD:"2.93"},{type:"rider",labelIcon:"Fire",rarity:"Legend",image:"rider/rider_011",time:"18 hours ago",name:"Dark Chain Correa",number:"59",priceSRC:"11,500",priceUSD:"5.92"},{type:"rider",labelIcon:"Wind",rarity:"Excellent",image:"rider/rider_012",time:"18 hours ago",name:"Naughty Elf",number:"94",priceSRC:"8,200",priceUSD:"3.15"},{type:"rider",labelIcon:"Water",rarity:"Rare",image:"rider/rider_013",time:"18 hours ago",name:"Lucifer",number:"96",priceSRC:"6,200",priceUSD:"2.05"},{type:"rider",labelIcon:"Water",rarity:"Legend",image:"rider/rider_014",time:"20 hours ago",name:"Elec-Tron Lucifer",number:"88",priceSRC:"10,500",priceUSD:"5.05"},{type:"rider",labelIcon:"Earth",rarity:"Excellent",image:"rider/rider_015",time:"a day ago",name:"Momotaro",number:"93",priceSRC:"8,500",priceUSD:"3.95"},{type:"rider",labelIcon:"Fire",rarity:"Excellent",image:"rider/rider_016",time:"a day ago",name:"Classic snake",number:"72",priceSRC:"8,200",priceUSD:"3.75"}];function b(){var e=(0,t.Z)((0,s.useState)({data:y,type:"all",rarities:[],talents:[],isSort:!1}),2),r=e[0],i=e[1];return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(d(),{children:(0,c.jsx)("title",{children:"PonPonSnake | Market"})}),(0,c.jsx)(m.Z,{children:(0,c.jsxs)("div",{className:"market_background",children:[(0,c.jsx)("div",{className:"market-title",children:"NFTs Market"}),(0,c.jsx)(h,{cardData:r,onChange:function(e){var r=e.type,t=e.rarities,c=e.talents,s=e.isSort;i(function(e){return(0,n.Z)((0,a.Z)({},e),{type:r||e.type,rarities:t||e.rarities,talents:c||e.talents,isSort:void 0===s?e.isSort:s})})}}),(0,c.jsx)(g,{cardData:r})]})})]})}},9396:function(e,r,i){"use strict";function a(e,r){return r=null!=r?r:{},Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):(function(e,r){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);i.push.apply(i,a)}return i})(Object(r)).forEach(function(i){Object.defineProperty(e,i,Object.getOwnPropertyDescriptor(r,i))}),e}i.d(r,{Z:function(){return a}})}},function(e){e.O(0,[347,277,774,888,179],function(){return e(e.s=8715)}),_N_E=e.O()}]);