webpackJsonp([0],{"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Archive/Archive.vue":function(e,t,o){"use strict";var s=o("./src/Partials/Loop/Loop.vue"),a=o("./src/Partials/Loop/PostVuewLoop.vue");t.a={components:{Loop:s.a,PostVuewLoop:a.a},props:["queryData","archiveType"],data:function(){return{elemType:Vuew.config.layout.archives[this.queryData.component].hasOwnProperty("type")?Vuew.config.layout.archives[this.queryData.component].type+"-loop":"loop"}}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Partials/Loop/Content.vue":function(e,t,o){"use strict";t.a={props:["theContent"]}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Partials/Loop/Loop.vue":function(e,t,o){"use strict";var s=o("./src/Partials/Loop/Post.vue"),a=o("./src/Partials/Pagination/Pagination.vue");t.a={data:function(){return{columns:Vuew.config.layout.archives[this.archiveType].columns}},props:["queryData","archiveType"],components:{Pagination:a.a,Post:s.a},computed:{getPosts:function(){for(var e=this.$store.getters["cache/getPostsCache"],t=this.queryData.post_paths,o={},s=0,a=t.length;s<a;s++)o[s]=e[t[s]];return o},isPending:function(){return this.$store.getters["query/paginationPending"]},isLoaded:function(){return this.$store.getters["query/isLoaded"]},offset:function(){return Math.ceil(Vuew.config.query.ppp/this.columns)*this.columns-1}},methods:{loadPosts:function(){this.$store.dispatch("query/addPostsToList")}}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Partials/Loop/Post.vue":function(e,t,o){"use strict";var s=o("./src/Partials/Loop/Title.vue"),a=o("./src/Partials/Loop/Content.vue"),l=o("./src/Partials/Attachment.vue");t.a={props:["post","columns"],components:{Title:s.a,Content:a.a,Attachment:l.a},computed:{setMenuItemParams:function(){for(var e=this.post.route,t=e.type,o=e.type_value,s=e.breadcrumbs,a=s.length>0?s[0]:"",l={name:t,params:{base:a,type:t,id:this.post.id,type_value:o,rest_base:e.rest_base}},n=1,r=s.length;n<r;n++)l.params["slug"+n]=s[n];return l}},methods:{truncate:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:5,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"start";if(!e)return"";var s=e.split(" ");return t>s.length?e:"start"===o?(s=s.slice(0,t),s.join(" ")+"..."):"end"===o?(s=s.slice(t,t+t),s.join(" ")):"Cannot truncate text"},appendToText:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return e?""===t?e:o+t+s+e:(console.error("at least one argument is required by appendToText() method for ",this),"")}}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Partials/Loop/PostVuew.vue":function(e,t,o){"use strict";var s=o("./src/Partials/Loop/Post.vue");t.a={extends:s.a,data:function(){return{displayExcerpt:!1}},methods:{toggleExcerpt:function(){var e=this;return e.displayExcerpt=!e.displayExcerpt,e.displayExcerpt}}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Partials/Loop/PostVuewLoop.vue":function(e,t,o){"use strict";var s=o("./src/Partials/Loop/Loop.vue"),a=o("./src/Partials/Pagination/Pagination.vue"),l=o("./src/Partials/Loop/PostVuew.vue");t.a={extends:s.a,components:{Pagination:a.a,PostVuew:l.a}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Partials/Loop/Title.vue":function(e,t,o){"use strict";t.a={props:["theTitle"]}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Partials/Pagination/Pagination.vue":function(e,t,o){"use strict";var s=o("./src/Partials/Pagination/PaginationLoadMore.vue");t.a={props:["type","posts","foundPosts","postCount","columns","offset","elemType"],components:{LoadMore:s.a},computed:{isPending:function(){return this.$store.getters["query/paginationPending"]}}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Partials/Pagination/PaginationLoadMore.vue":function(e,t,o){"use strict";var s=o("./src/Partials/Loop/Post.vue"),a=o("./src/Partials/Loop/PostVuew.vue");t.a={components:{Post:s.a,PostVuew:a.a},props:["posts","foundPosts","postCount","isPending","columns","offset","elemType"],data:function(){return{ppp:Vuew.config.query.ppp}},methods:{loadPosts:function(){this.$store.dispatch("query/addPostsToList")},getRandomDelay:function(){return(Math.random()<.5?"-":"+")+(6*Math.random()+0).toFixed(2)}},computed:{}}},"./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Templates/Index.vue":function(e,t,o){"use strict";var s=o("./src/Archive/Archive.vue");t.a={extends:s.a}},'./node_modules/css-loader/index.js?minimize!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-5e993128","scoped":false,"hasInlineConfig":false}!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/Partials/Loop/PostVuew.vue':function(e,t,o){t=e.exports=o("./node_modules/css-loader/lib/css-base.js")(!1),t.push([e.i,".post-vuew div:first-child{padding-bottom:100%}.post-vuew p{margin:0;font-size:1rem;padding:30px 30px 0;color:#ddd}.post-vuew p:last-child{padding:30px}.post-vuew h3{color:#fff;line-height:1;font-size:2rem;margin-top:0;margin-bottom:25px}.post-vuew-date{color:#fff;padding:4px 8px}.post-vuew-title{padding:30px 30px 55px;background-color:hsla(0,0%,7%,.3)}.post-vuew-excerpt{overflow:hidden;width:100%;background-color:#444}.post-vuew-excerpt a{color:#111;text-transform:uppercase}.post-vuew-content-closed .post-vuew-excerpt{max-height:0;transition:max-height .5s ease-out}.post-vuew-content-open .post-vuew-excerpt{max-height:1500px;transition:max-height .5s ease-in}.post-vuew-excerpt-toggle{min-height:25px;width:100%;text-align:center;background-color:rgba(0,0,0,.5);padding:10px 0}.post-vuew-excerpt-toggle svg{height:25px;transition:transform .5s}.post-vuew-content-open .post-vuew-excerpt-toggle svg{transform:rotateX(180deg)}",""])},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-128c8af5","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Partials/Loop/PostVuewLoop.vue':function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"uk-grid uk-grid-collapse"},[e._l(e.getPosts,function(t,s){return s<=e.offset?o("PostVuew",{key:t.path,attrs:{post:t,columns:e.columns}}):e._e()}),e._v(" "),o("Pagination",{staticClass:"uk-grid uk-grid-collapse uk-width-1-1 uk-padding-remove uk-margin-remove",attrs:{posts:e.getPosts,type:"LoadMore","post-count":e.queryData.post_count,"found-posts":e.queryData.found_posts,columns:e.columns,offset:e.offset,"elem-type":"PostVuew"}})],2)},a=[],l={render:s,staticRenderFns:a};t.a=l},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-2a7463d5","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Partials/Pagination/PaginationLoadMore.vue':function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",[e._l(e.posts,function(t,s){return s>e.offset?o(e.elemType,{key:t.path,tag:"component",attrs:{post:t,columns:e.columns}},[o("p",{domProps:{innerHTML:e._s("Thing I want to say")}}),e._v(" "),s%e.columns==0?o("div",{staticClass:"uk-alert"},[e._v("THIS IS my alert")]):e._e()]):e._e()}),e._v(" "),e._l(e.ppp,function(t){return e.isPending?o("div",{staticClass:"uk-margin-bottom",class:"uk-width-large-1"+e.columns},[o("div",{staticClass:"vw-flicker-loading-post",style:{animationDelay:e.getRandomDelay()+"s"}})]):e._e()}),e._v(" "),e.postCount<e.foundPosts?o("button",{staticClass:"uk-button uk-button-primary uk-width-1-1",on:{click:e.loadPosts}},[e._v("\n        "+e._s(e.isPending?"Pending...":"Load More")+" / ( "+e._s(e.postCount)+" / "+e._s(e.foundPosts)+" )\n    ")]):e._e()],2)},a=[],l={render:s,staticRenderFns:a};t.a=l},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-3d6dec02","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Archive/Archive.vue':function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"uk-container"},[o("div",{staticClass:"uk-grid uk-grid-collapse uk-margin-bottom uk-margin-top"},[o("div",{staticClass:"uk-width-1-2"},[o("h1",{staticClass:"uk-h1",domProps:{innerHTML:e._s(e.queryData.payload.name)}})]),e._v(" "),o("div",{staticClass:"uk-text-right uk-width-1-2"},[o("span",{domProps:{innerHTML:e._s(e.queryData.payload.post_count+" / "+e.queryData.payload.found_posts)}})])]),e._v(" "),o("div",{staticClass:"uk-width-1-1 uk-margin-bottom"},[o("p",{domProps:{innerHTML:e._s(e.queryData.payload.description)}})]),e._v(" "),o(e.elemType,{tag:"component",attrs:{"query-data":e.queryData.payload,"archive-type":e.queryData.component}})],1)},a=[],l={render:s,staticRenderFns:a};t.a=l},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-4fa32a15","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Partials/Loop/Loop.vue':function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"uk-grid uk-grid-small uk-grid-match"},[e._l(e.getPosts,function(t,s){return s<=e.offset?o("Post",{key:t.path,attrs:{post:t,columns:e.columns}}):e._e()}),e._v(" "),o("Pagination",{staticClass:"uk-grid uk-grid-small uk-grid-match",attrs:{posts:e.getPosts,type:"LoadMore","post-count":e.queryData.post_count,"found-posts":e.queryData.found_posts,columns:e.columns,offset:e.offset,"elem-type":"Post"}})],2)},a=[],l={render:s,staticRenderFns:a};t.a=l},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-5afc6310","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Partials/Loop/Content.vue':function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{domProps:{innerHTML:e._s(e.theContent)}})},a=[],l={render:s,staticRenderFns:a};t.a=l},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-5ca07019","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Partials/Pagination/Pagination.vue':function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement;return(e._self._c||t)(e.type,{tag:"component",attrs:{posts:e.posts,"is-pending":e.isPending,"post-count":e.postCount,"found-posts":e.foundPosts,columns:e.columns,offset:e.offset,"elem-type":e.elemType}})},a=[],l={render:s,staticRenderFns:a};t.a=l},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-5e993128","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Partials/Loop/PostVuew.vue':function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("article",{staticClass:"uk-width-1-1@s uk-margin-bottom post-vuew",class:["uk-width-1-"+e.columns+"@m",e.displayExcerpt?"post-vuew-content-open":"post-vuew-content-closed"]},[s("div",{staticClass:"uk-position-relative uk-float-left uk-width-1-1"},[s("attachment",{staticClass:"post-vuew-image uk-position-cover",attrs:{src:e.post.featured_media.thumbnail,type:"background"}}),e._v(" "),s("div",{staticClass:"post-vuew-title uk-position-bottom"},[s("router-link",{staticClass:"uk-position-relative uk-float-left uk-width-1-1",attrs:{to:e.setMenuItemParams}},[s("h3",{staticClass:"uk-h3",domProps:{innerHTML:e._s(e.truncate(e.post.title,4))}})]),e._v(" "),s("a",{staticClass:"post-vuew-excerpt-toggle uk-margin-top uk-position-bottom-center",domProps:{innerHTML:e._s(o("./src/svg/arrow-down.svg"))},on:{click:e.toggleExcerpt}})],1),e._v(" "),s("span",{staticClass:"post-vuew-date uk-position-top-left uk-background-primary uk-text-small",domProps:{textContent:e._s(e.post.date)}})],1),e._v(" "),s("div",{staticClass:"post-vuew-excerpt"},[s("p",{domProps:{innerHTML:e._s(e.appendToText(e.post.excerpt,e.truncate(e.post.title,4,"end"),"<span class='uk-text-primary'>...","</span><br>"))}}),e._v(" "),s("p",[s("router-link",{staticClass:"uk-button uk-width-1-1 uk-button-primary uk-button-small",attrs:{to:e.setMenuItemParams}},[e._v("\n                Read More\n            ")])],1)])])},a=[],l={render:s,staticRenderFns:a};t.a=l},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-8f435792","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Partials/Loop/Title.vue':function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement;return(e._self._c||t)("h3",{domProps:{innerHTML:e._s(e.theTitle)}})},a=[],l={render:s,staticRenderFns:a};t.a=l},'./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-bd1bac3e","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Partials/Loop/Post.vue':function(e,t,o){"use strict";var s=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("article",{staticClass:"uk-margin-bottom vw-article",class:"uk-width-1-"+e.columns+"@m"},[o("router-link",{staticClass:"uk-float-left uk-width-1-1 uk-box-shadow-large uk-box-shadow-hover-small",attrs:{to:e.setMenuItemParams}},[o("Attachment",{staticClass:"uk-height-small",attrs:{src:e.post.featured_media.thumbnail,type:"background"}}),e._v(" "),o("div",{staticClass:"uk-padding"},[o("Title",{staticClass:"uk-article-title",attrs:{theTitle:e.post.title}}),e._v(" "),o("p",{domProps:{textContent:e._s(e.post.date)}}),e._v(" "),o("Content",{staticClass:"uk-article-meta",attrs:{theContent:e.post.excerpt}})],1)],1)],1)},a=[],l={render:s,staticRenderFns:a};t.a=l},'./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?minimize!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-5e993128","scoped":false,"hasInlineConfig":false}!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/Partials/Loop/PostVuew.vue':function(e,t,o){var s=o('./node_modules/css-loader/index.js?minimize!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-5e993128","scoped":false,"hasInlineConfig":false}!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/Partials/Loop/PostVuew.vue');"string"==typeof s&&(s=[[e.i,s,""]]),s.locals&&(e.exports=s.locals);o("./node_modules/vue-style-loader/lib/addStylesClient.js")("36fea53f",s,!0,{})},"./src/Archive/Archive.vue":function(e,t,o){"use strict";var s=o("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Archive/Archive.vue"),a=o('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-3d6dec02","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Archive/Archive.vue'),l=o("./node_modules/vue-loader/lib/component-normalizer.js"),n=l(s.a,a.a,!1,null,null,null);t.a=n.exports},"./src/Partials/Loop/Content.vue":function(e,t,o){"use strict";var s=o("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Partials/Loop/Content.vue"),a=o('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-5afc6310","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Partials/Loop/Content.vue'),l=o("./node_modules/vue-loader/lib/component-normalizer.js"),n=l(s.a,a.a,!1,null,null,null);t.a=n.exports},"./src/Partials/Loop/Loop.vue":function(e,t,o){"use strict";var s=o("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Partials/Loop/Loop.vue"),a=o('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-4fa32a15","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Partials/Loop/Loop.vue'),l=o("./node_modules/vue-loader/lib/component-normalizer.js"),n=l(s.a,a.a,!1,null,null,null);t.a=n.exports},"./src/Partials/Loop/Post.vue":function(e,t,o){"use strict";var s=o("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Partials/Loop/Post.vue"),a=o('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-bd1bac3e","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Partials/Loop/Post.vue'),l=o("./node_modules/vue-loader/lib/component-normalizer.js"),n=l(s.a,a.a,!1,null,null,null);t.a=n.exports},"./src/Partials/Loop/PostVuew.vue":function(e,t,o){"use strict";function s(e){o('./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js?minimize!./node_modules/vue-loader/lib/style-compiler/index.js?{"vue":true,"id":"data-v-5e993128","scoped":false,"hasInlineConfig":false}!./node_modules/less-loader/dist/cjs.js!./node_modules/vue-loader/lib/selector.js?type=styles&index=0!./src/Partials/Loop/PostVuew.vue')}var a=o("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Partials/Loop/PostVuew.vue"),l=o('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-5e993128","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Partials/Loop/PostVuew.vue'),n=o("./node_modules/vue-loader/lib/component-normalizer.js"),r=s,i=n(a.a,l.a,!1,r,null,null);t.a=i.exports},"./src/Partials/Loop/PostVuewLoop.vue":function(e,t,o){"use strict";var s=o("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Partials/Loop/PostVuewLoop.vue"),a=o('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-128c8af5","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Partials/Loop/PostVuewLoop.vue'),l=o("./node_modules/vue-loader/lib/component-normalizer.js"),n=l(s.a,a.a,!1,null,null,null);t.a=n.exports},"./src/Partials/Loop/Title.vue":function(e,t,o){"use strict";var s=o("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Partials/Loop/Title.vue"),a=o('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-8f435792","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Partials/Loop/Title.vue'),l=o("./node_modules/vue-loader/lib/component-normalizer.js"),n=l(s.a,a.a,!1,null,null,null);t.a=n.exports},"./src/Partials/Pagination/Pagination.vue":function(e,t,o){"use strict";var s=o("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Partials/Pagination/Pagination.vue"),a=o('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-5ca07019","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Partials/Pagination/Pagination.vue'),l=o("./node_modules/vue-loader/lib/component-normalizer.js"),n=l(s.a,a.a,!1,null,null,null);t.a=n.exports},"./src/Partials/Pagination/PaginationLoadMore.vue":function(e,t,o){"use strict";var s=o("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Partials/Pagination/PaginationLoadMore.vue"),a=o('./node_modules/vue-loader/lib/template-compiler/index.js?{"id":"data-v-2a7463d5","hasScoped":false,"buble":{"transforms":{}}}!./node_modules/vue-loader/lib/selector.js?type=template&index=0!./src/Partials/Pagination/PaginationLoadMore.vue'),l=o("./node_modules/vue-loader/lib/component-normalizer.js"),n=l(s.a,a.a,!1,null,null,null);t.a=n.exports},"./src/Templates/Index.vue":function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=o("./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/selector.js?type=script&index=0!./src/Templates/Index.vue"),a=o("./node_modules/vue-loader/lib/component-normalizer.js"),l=a(s.a,null,!1,null,null,null);t.default=l.exports},"./src/svg/arrow-down.svg":function(e,t){e.exports='<?xml version="1.0" encoding="utf-8"?> <svg version=1.1 id=Layer_1 xmlns=http://www.w3.org/2000/svg xmlns:xlink=http://www.w3.org/1999/xlink x=0px y=0px viewBox="0 0 13.8 7" style="enable-background:new 0 0 13.8 7" xml:space=preserve> <style type=text/css>.st0{fill-rule:evenodd;clip-rule:evenodd;fill:#fff}</style> <polygon class=st0 points="7.3,6.5 13,0.7 12.7,0.4 6.9,6.1 1.2,0.4 0.8,0.7 6.6,6.5 6.9,6.8 "/> </svg> '}});