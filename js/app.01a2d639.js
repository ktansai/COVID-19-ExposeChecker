(function(t){function e(e){for(var n,r,i=e[0],c=e[1],l=e[2],p=0,v=[];p<i.length;p++)r=i[p],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&v.push(s[r][0]),s[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(e);while(v.length)v.shift()();return o.push.apply(o,l||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],n=!0,r=1;r<a.length;r++){var i=a[r];0!==s[i]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=a[0]))}return t}var n={},r={app:0},s={app:0},o=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"50754558"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(t){var e=[],a={about:1};r[t]?e.push(r[t]):0!==r[t]&&a[t]&&e.push(r[t]=new Promise((function(e,a){for(var n="css/"+({about:"about"}[t]||t)+"."+{about:"bf7373aa"}[t]+".css",s=c.p+n,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var l=o[i],p=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(p===n||p===s))return e()}var v=document.getElementsByTagName("style");for(i=0;i<v.length;i++){l=v[i],p=l.getAttribute("data-href");if(p===n||p===s)return e()}var u=document.createElement("link");u.rel="stylesheet",u.type="text/css",u.onload=e,u.onerror=function(e){var n=e&&e.target&&e.target.src||s,o=new Error("Loading CSS chunk "+t+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete r[t],u.parentNode.removeChild(u),a(o)},u.href=s;var d=document.getElementsByTagName("head")[0];d.appendChild(u)})).then((function(){r[t]=0})));var n=s[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise((function(e,a){n=s[t]=[e,a]}));e.push(n[2]=o);var l,p=document.createElement("script");p.charset="utf-8",p.timeout=120,c.nc&&p.setAttribute("nonce",c.nc),p.src=i(t);var v=new Error;l=function(e){p.onerror=p.onload=null,clearTimeout(u);var a=s[t];if(0!==a){if(a){var n=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;v.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",v.name="ChunkLoadError",v.type=n,v.request=r,a[1](v)}s[t]=void 0}};var u=setTimeout((function(){l({type:"timeout",target:p})}),12e4);p.onerror=p.onload=l,document.head.appendChild(p)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,a){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(a,n,function(e){return t[e]}.bind(null,n));return a},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],p=l.push.bind(l);l.push=e,l=l.slice();for(var v=0;v<l.length;v++)e(l[v]);var u=p;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"08f3":function(t,e,a){},"46bf":function(t,e,a){t.exports=a.p+"img/instruction-android-02.557c4147.png"},"531d":function(t,e,a){t.exports=a.p+"img/instruction-android-03.646bc7e1.png"},"545b":function(t,e,a){t.exports=a.p+"img/cocoa-difference.07961364.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:this.themeColor,dark:""}},[t.$vuetify.breakpoint.xs?t._e():n("div",[t._v("COCOAログチェッカー")]),n("v-spacer"),n("div",{staticClass:"d-flex align-center"},[n("v-btn",{attrs:{text:"",small:""},on:{click:function(e){t.dialog=!0}}},[n("v-icon",[t._v(" mdi-plus-box-outline ")]),n("span",[t._v(" ホーム画面に追加 ")])],1)],1)],1),n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 lighten-2"},[t._v(" ホーム画面に追加 ")]),n("v-card-text",[t._v(" ブラウザの下記ボタンを押して"),n("b",[t._v("ホーム画面に追加")]),t._v("を押すと、ホーム画面上にショートカットを作成できます。"),n("br"),t._v(" ショートカットを作成し、定期的にログを解析することをおすすめします。"),n("br"),n("br"),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("v-img",{attrs:{src:a("8847")}})],1),n("v-col",{attrs:{cols:"6"}},[n("v-img",{attrs:{src:a("5bc9")}})],1)],1),n("p",{staticClass:"text-center"},[t._v("(左:iOS / 右:Android)"),n("br"),n("br")]),n("v-img",{staticClass:"mx-8",attrs:{src:a("cae6")}})],1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" 閉じる ")])],1)],1)],1),n("v-main",[n("router-view")],1)],1)},s=[],o=(a("b0c0"),{name:"App",components:{},data:function(){return{dialog:!1}},computed:{themeColor:function(){var t;switch(this.$route.name){case"CocoaLogChecker1":t="deep-orange lighten-2";break;case"CocoaLogChecker2":t="blue lighten-2";break}return t}}}),i=o,c=a("2877"),l=a("6544"),p=a.n(l),v=a("7496"),u=a("40dc"),d=a("8336"),h=a("b0af"),f=a("99d9"),b=a("62ad"),_=a("169a"),m=a("ce7e"),g=a("132d"),C=a("adda"),x=a("f6c4"),k=a("0fd9"),O=a("2fa4"),w=Object(c["a"])(i,r,s,!1,null,null,null),A=w.exports;p()(w,{VApp:v["a"],VAppBar:u["a"],VBtn:d["a"],VCard:h["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VCol:b["a"],VDialog:_["a"],VDivider:m["a"],VIcon:g["a"],VImg:C["a"],VMain:x["a"],VRow:k["a"],VSpacer:O["a"]});var y=a("f309");n["a"].use(y["a"]);var E=new y["a"]({breakpoint:{thresholds:{xs:355}}}),T=a("a584"),V=(a("d3b7"),a("3ca3"),a("ddb0"),a("8c4f")),S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"text-center px-8"},[n("v-row",{staticClass:"mt-8 justify-center"},[n("div",[n("h1",{staticClass:"display-2 font-weight-bold my-2"},[n("span",{staticClass:"d-inline-block"},[t._v("COCOAログ")]),n("span",{staticClass:"d-inline-block"},[t._v("チェッカー")])]),n("p",[t._v("接触通知ログ解析ツール")]),n("router-link",{attrs:{to:"/beta"}},[t._v("COCOAログチェッカー2.0 (β版)に切り替える")])],1)]),n("v-row",{staticClass:"justify-center"},[n("div",[n("p",{staticClass:"my-8 mx-2"},[n("span",{staticClass:"d-inline-block"},[t._v("iOS/Androidの設定アプリから閲覧できる")]),n("span",{staticClass:"d-inline-block"},[t._v("接触通知のログデータを解析し、")]),n("span",{staticClass:"d-inline-block"},[t._v("約2週間の間にCOCOAの新規陽性登録者が付近にいた可能性がある記録を表示します。(Bluetoothの電波が届く範囲)")])]),n("p",{staticClass:"my-8 mx-2",staticStyle:{color:"red"},attrs:{id:"beforeUseNote"}},[n("span",{staticClass:"d-inline-block"},[t._v(" 使用の際は"),n("a",{attrs:{href:"#beforeUseNote"},on:{click:t.showNotes}},[t._v("詳細説明")]),t._v("を読み、 ")]),n("span",{staticClass:"d-inline-block"},[t._v("理解した上でご利用ください。")])])])]),n("v-row",{staticClass:"my-8"},[n("v-expansion-panels",{attrs:{accordion:"",multiple:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[n("v-expansion-panel",{attrs:{id:"notes"}},[n("v-expansion-panel-header",[t._v("詳細説明")]),n("v-expansion-panel-content",{staticClass:"text-left"},[n("ul",[n("li",[t._v(" iOS/Androidで収集されている COVID-19 接触のログデータの中で、COCOAの新規陽性登録者の端末の近くにいた記録があるかを確認するツールです。 ")]),n("br"),n("li",[t._v(" 具体的には、接触ログデータの中のMatchCount(iOS)/matchesCount(Android)の項目が0ではない値(接触が疑われるデータ)を抽出するだけのツールです ")]),n("br"),n("li",[t._v(" クライアントサイドのJavaScriptで解析を行っているため、ここでペーストしたログデータが外部に送信されるようなことはありません。 ")]),n("br"),n("li",[t._v(" このログデータで分かることは、COCOAの新規陽性登録者が付近(Bluetoothの電波が届く範囲)にいたことのみで、必ずしも濃厚接触に該当する訳ではありません。 ")]),n("br"),n("li",[t._v(" BluetoothがOFFに設定されている間は、OSが接触検知を行うことができないためご注意ください("),n("a",{attrs:{href:"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/covid19_qa_kanrenkigyou_00009.html#Q6-3",target:"_blank"}},[t._v("厚生労働省FAQ")]),t._v("より) ")]),n("br"),n("li",[t._v(" 本家COCOAのアプリで通知が来る条件は「1m以内かつ15分以上」ですが、本ツールはその基準よりも広い「OSが検知した新規陽性登録者との接触」のログすべてを対象としています。("),n("a",{attrs:{href:"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/covid19_qa_kanrenkigyou_00009.html#Q4-7",target:"_blank"}},[t._v("厚生労働省FAQ")]),t._v("より) ")]),n("br")]),n("v-layout",{attrs:{"justify-center":"","my-4":""}},[n("v-img",{attrs:{width:"80%","max-width":"400px",src:a("545b")}})],1),n("ul",[n("li",[t._v(" 本ツールの利用には、新型コロナウイルス接触確認アプリCOCOAのインストールが必要です。COCOAに関しては、"),n("a",{attrs:{href:"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/cocoa_00138.html",target:"_blank"}},[t._v("厚生労働省のHP")]),t._v("をご確認ください。 ")]),n("br"),n("li",[t._v(" 接触があった日時は、Hash値を用いて、サイト下部の"),n("a",{attrs:{href:"https://cacaotest.sakura.ne.jp/",target:"_blank"}},[t._v("外部ページ")]),t._v("にて24時間の範囲で絞り込み可能です。(iOSのみ) ")]),n("br"),n("li",[t._v(" 接触通知のログデータ内部のTimestampは、接触のあった日時ではなく、COCOAが新規陽性登録者のリストをダウンロードし、スマホ内で照合を行った日時のようです。つまりこのTimestampより前に接触の可能性があることのみ分かります。"),n("br"),n("br"),t._v(" 例えば、COCOAユーザーAさんとの接触検知が9月1日、Aさんの発症が9月4日(潜伏期間3日間)、Aさんの新規陽性登録が完了したのが9月7日、だったとすると、スマホ内の接触ログデータのTimestampは9月7日以降になりますが、実際の接触はそれより以前(この例だと9月1日)になります。"),n("br"),t._v(" 潜伏期間や、登録までの期間は場合によるので、この方法では正確な日時は特定ができません。 ")]),n("br"),n("li",[t._v(" 現在、このTimestampが誤解を招くため、結果表示から意図的に削除させて頂いています。表示方法などを検討し将来的に表示する予定です。 ")]),n("br"),n("li",[t._v(" 本ツールは接触確認アプリの活用事例として厚生労働省HPに掲載いただいております。("),n("a",{attrs:{href:"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/cocoa_00138.html#:~:text=%E3%80%90COCOA%E3%83%AD%E3%82%B0%E3%83%81%E3%82%A7%E3%83%83%E3%82%AB%E3%83%BC%E3%80%91%E3%81%AE%E3%81%94%E5%88%A9%E7%94%A8%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%E3%81%8B%E3%82%89",target:"_blank"}},[t._v("厚生労働省のHP")]),t._v(") ")]),n("br"),n("li",[t._v(" 本ツールは無償で使用可能ですが、この解析ツールを用いて起きた問題などについて、製作者は一切の責任を負いかねます。自己責任でご使用ください。 ")]),n("br"),n("li",[t._v(" 不具合報告、改善要望、間違いの指摘、PR、質問などは、"),n("a",{attrs:{href:"https://github.com/ktansai/COVID-19-ExposeChecker",target:"_blank"}},[t._v("github")]),t._v("、"),n("a",{attrs:{href:"https://twitter.com/ktansai",target:"_blank"}},[t._v("@ktansai")]),t._v("または、("),n("a",{attrs:{href:"mailto:cocoa.log.checker@gmail.com",target:"_blank"}},[t._v("cocoa.log.checker@gmail.com")]),t._v(")までご連絡ください。また、個人で開発しているため、全てに対応できるとは限りません。ご了承ください。 ")]),n("br"),n("li",[t._v(" COCOAログチェッカーは"),n("a",{attrs:{href:"https://github.com/ktansai/COVID-19-ExposeChecker",target:"_blank"}},[t._v("github")]),t._v("上にソースコードを公開しており、多くの方に提案/指摘をいただきながら作成しています。ご協力いただいている全ての方に多大な感謝を申し上げます。 ")])])],1)],1),n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("使い方(iOS)")]),n("v-expansion-panel-content",[n("p",{staticClass:"text-left"},[t._v(" Step1. iOSの設定アプリから接触通知ログをコピーする ")]),n("v-img",{attrs:{src:a("cf98")}}),n("br"),n("p",{staticClass:"text-left"},[t._v("Step2. 下記入力枠にペーストする")]),n("v-img",{attrs:{src:a("745d")}})],1)],1),n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("使い方(Android)")]),n("v-expansion-panel-content",[n("p",{staticClass:"text-left"},[t._v(" Step1. Androidの設定アプリから 接触通知ログをGoogleDriveまたはローカルに保存する"),n("br")]),n("p",{staticClass:"text-left text-caption"},[t._v(" 接触通知ログは、個人を特定することが難しい秘匿性の高いデータですが、スマホ外部に保存することに抵抗がある方は、ローカルに保存することをおすすめします。 ")]),n("v-img",{attrs:{src:a("8153")}}),n("br"),n("p",{staticClass:"text-left"},[t._v(" Step2. GoogleDriveアプリまたは、ローカルのファイルから保存したログデータを開き、 [すべて選択]を押し、[コピー]を押す。"),n("br"),n("v-img",{attrs:{src:a("46bf")}})],1),n("p",{staticClass:"text-left"},[t._v(" Step3. 下記入力枠を選択し、[貼り付け]を押す。 "),n("br"),n("v-img",{attrs:{src:a("531d")}})],1)],1)],1)],1)],1),n("v-row",[n("v-textarea",{attrs:{outlined:"",label:"ここにログファイルをペーストしてください"},model:{value:t.exposeJsonText,callback:function(e){t.exposeJsonText=e},expression:"exposeJsonText"}})],1),n("p",{staticClass:"text-caption"},[n("span",{staticClass:"d-inline-block"},[t._v("本ツールは、スマホ内で処理しているため、")]),n("span",{staticClass:"d-inline-block"},[t._v("ここでペーストしたデータが外部に流出することはありません。")])]),n("v-row",{staticClass:"mb-5 justify-center"},[n("v-col",{attrs:{cols:"6"}},[n("v-btn",{on:{click:t.clearJson}},[t._v(" クリア ")])],1),n("v-col",{attrs:{cols:"6"}},[n("v-btn",{attrs:{color:"primary"},on:{click:t.checkJson}},[t._v(" チェックする ")])],1)],1),n("v-row",{staticClass:"mt-6 mb-6"},[t.resultText.length>0?n("div",[n("p",{staticClass:"my-5 text-left"},[n("b",[t._v("結果:")]),t._v(" "),n("br"),t._v(" "+t._s(t.resultText)),n("br"),n("br"),n("span",{domProps:{innerHTML:t._s(t.explainText)}}),n("br"),n("br"),n("span",[n("b",[t._v("本結果に関して:")]),n("br"),n("ul",[n("li",[t._v(" 本結果を理由に保健所や医療機関等へのご連絡はお控えください。 ")]),n("li",[t._v(" ご不明点がある場合は、下記の「よくある質問」をご一読の上、解決しない場合は本サイトの製作者にご連絡ください。"),n("span",{staticClass:"text-small"},[t._v("("),n("a",{attrs:{href:"mailto:cocoa.log.checker@gmail.com",target:"_blank"}},[t._v("cocoa.log.checker@gmail.com")]),t._v(")")])])])])])]):t._e(),n("FAQ",{attrs:{id:"FAQ"}})],1),t.resultText.length>0?n("v-row",{staticClass:"justify-center mt-16"},[n("div",[n("v-btn",{attrs:{rounded:"",color:"gray",dark:"",target:"_blank",href:"https://calendar.google.com/calendar/render?action=TEMPLATE&text=[リマインド]:COCOAログチェッカー&details=<a href='https://cocoa-log-checker.com'>COCOAログチェッカー</a>%0D%0A%0D%0A保存の際は%0D%0A・予定の繰り返し設定%0D%0A・通知設定%0D%0Aを有効にするのをおすすめします&dates="+t.nextDate},on:{click:t.addCalendarLog}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-calendar ")]),t._v(" 予定に追加 ")],1),n("p",{staticClass:"text-caption my-4"},[n("span",{staticClass:"d-inline-block"},[t._v("スマートフォン内のログは14日間しか残りません。")]),n("br"),n("span",{staticClass:"d-inline-block"},[t._v("上のボタンを押すとGoogleカレンダーに")]),n("span",{staticClass:"d-inline-block"},[t._v("リマインドの予定を追加できます。")])])],1)]):t._e(),t.resultText.length>0?n("v-row",{staticClass:"justify-center my-8"},[n("div",[n("v-btn",{attrs:{rounded:"",color:"#1DA1F2",dark:"",target:"_blank",href:"https://twitter.com/intent/tweet?text=接触通知ログを解析した結果、%0a"+t.resultText+"%0a%0ahttps://cocoa-log-checker.com%0a&hashtags=COCOAログチェッカー"}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-twitter ")]),t._v(" 結果を投稿 ")],1),n("p",{staticClass:"mt-4 text-caption"},[t._v(" ※Twitterに遷移します"),n("br"),t._v("(上記のボタンを押してもすぐには投稿されません) ")])],1)]):t._e(),n("v-row",[n("v-textarea",{staticClass:"my-4",attrs:{outlined:"","auto-grow":"",readonly:"",label:"ここに詳細な結果のデータが出ます",value:t.resultJsonText}})],1),n("v-col",{staticClass:"my-8",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" もし新規陽性登録者と近くにいたことが疑われる場合は、 ")]),n("p",[t._v(" 上記Hash値をコピーし、 "),n("a",{attrs:{href:"https://datastudio.google.com/u/0/reporting/069598a2-3f01-4b51-b023-cdb478992182",target:"_blank"}},[t._v("接触日シート別冊(別サイト)")]),n("br"),t._v(" または、 "),n("a",{attrs:{href:"https://cacaotest.sakura.ne.jp/",target:"_blank"}},[t._v("CACAOtest(別サイト)")]),t._v(" を使用して、"),n("br"),t._v("具体的な近くにいた時間(24時間単位)で特定することができます。(iOSのみ) ")])]),n("v-row",{staticClass:"mt-8 justify-center"},[n("p",[t._v(" made by "),n("a",{attrs:{href:"https://twitter.com/ktansai"}},[t._v("@ktansai")]),t._v(" / "),n("a",{attrs:{href:"https://github.com/ktansai/COVID-19-ExposeChecker",target:"_blank"}},[t._v("github")])])]),n("COCOA2Dialog",{ref:"dialog"})],1)},j=[],D=(a("5db7"),a("73d9"),a("159b"),a("d81d"),a("4de4"),a("a15b"),a("ac1f"),a("5319"),a("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-left"},[t._m(0),n("v-expansion-panels",{staticStyle:{"font-size":"small"},attrs:{popout:"",multiple:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 結果の数字が多いと感染リスクが高いのですか？ ")]),n("v-expansion-panel-content",[t._v(" Bluetoothが検知する広い範囲の接触者を検出しているため、過度に恐れる必要はありません。"),n("br"),t._v(" 結果が多かった場合は、感染者が自分の行動圏に確実にいることを実感し、気を引き締めて感染症対策(手洗い/うがい/マスク着用など)を徹底していただけると幸いです。 ")])],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" COCOAの結果と何が違いますか？ ")]),n("v-expansion-panel-content",[t._v(" 本家COCOAのアプリで通知が来る条件は「1m以内かつ15分以上」ですが、本ツールはその基準よりも広い「OSが検知した新規陽性登録者との接触」のログすべてを対象としています。 "),n("div",[n("v-img",{attrs:{width:"100%","max-width":"280px",src:a("545b")}})],1)])],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 接触日は特定できますか？ ")]),n("v-expansion-panel-content",[t._v(" iOSをお使いの場合は、HASH値というものを使って別サイトで、接触のあった日付を絞り込むことができます。詳細はサイト下部を御覧ください。 ")])],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 設定画面で見れるタイムスタンプの時刻が深夜から早朝なのはなぜですか？"),n("br"),t._v("これは接触した日時ですか？ ")]),n("v-expansion-panel-content",[t._v(" この時刻はスマートフォンが厚生労働省のサーバーから新規陽性登録者のリストをダウンロードした時刻のようです。接触のあった日時ではありません。 "),n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",{attrs:{shrink:""}},[n("v-img",{attrs:{width:"80%","max-width":"280px",src:a("d338")}})],1)],1)],1)],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 数日間外出を自粛していて接触の心当たりがありませんが、結果の数字が増えています。どうしてですか？ ")]),n("v-expansion-panel-content",[t._v(" 2週間の間に接触した方が、その後に発症し陽性登録された場合、遅れて結果の数字に反映されるようです。"),n("br"),t._v(" 行動パターンを変えて、実際に数字に反映されるまで、1〜2週間のタイムラグが存在します。 ")])],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 昨日人混みを通りましたが、今日ログをチェックしてみたところ、結果は増えませんでした。これは安全だったということですか？ ")]),n("v-expansion-panel-content",[t._v(" 昨日すれ違った方が COCOAでの陽性登録がまだだった場合、結果にはすぐに反映されません。"),n("br"),t._v(" 1週間後になって結果が急激に増えることもあります。 ")])],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 「よくある質問」を読んでも分からないことがあります。どうすればいいですか？ ")]),n("v-expansion-panel-content",[n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"#beforeUseNote"},on:{click:t.$parent.showNotes}},[t._v(" > 詳細説明 ")]),t._v(" を御一読の上、解決しなかった場合は、製作者のTwitter("),n("a",{attrs:{href:"https://twitter.com/ktansai",target:"_blank"}},[t._v("@ktansai")]),t._v(")または、メール("),n("a",{attrs:{href:"mailto:cocoa.log.checker@gmail.com",target:"_blank"}},[t._v("cocoa.log.checker@gmail.com")]),t._v(")までご連絡ください。 ")])],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 誰が作ってるの？ 目的は？ 安全なの？ ")]),n("v-expansion-panel-content",[t._v(" 主に個人で開発しています。"),n("br"),t._v(" ご提案やご感想、間違いのご指摘等、歓迎ですが、個人で開発しているため全てのご要望を叶えることは難しい場合があります。"),n("br"),t._v(" 何かありましたら、製作者のTwitter : "),n("a",{attrs:{href:"https://twitter.com/ktansai",target:"_blank"}},[t._v("@ktansai")]),n("br"),t._v(" メール("),n("a",{attrs:{href:"mailto:cocoa.log.checker@gmail.com",target:"_blank"}},[t._v("cocoa.log.checker@gmail.com")]),t._v(")までご連絡ください。"),n("br"),n("br"),t._v(" 感染拡大の中で、「感染者が自分の行動圏内の身近にいること」を多くの方に感じていただき、正しく恐れ、気を引き締めて感染症対策に取り組んでいただくことで、結果的に「一人でも感染者や重症者の方を減らせれば」と思ってサイトを公開しています。"),n("br"),n("br"),t._v(" データは外部には送信しません。 "),n("a",{attrs:{href:"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/cocoa_00138.html#:~:text=%E3%80%90COCOA%E3%83%AD%E3%82%B0%E3%83%81%E3%82%A7%E3%83%83%E3%82%AB%E3%83%BC%E3%80%91%E3%81%AE%E3%81%94%E5%88%A9%E7%94%A8%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%E3%81%8B%E3%82%89",target:"_blank"}},[t._v("厚生労働省のHP")]),t._v("でもご紹介いただいています。 ")])],1)],1)],1)}),P=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("b",[t._v("よくある質問:")])])}],B={name:"FAQ"},J=B,F=(a("95db"),a("cd55")),L=a("49e2"),H=a("c865"),M=a("0393"),N=a("0e8f"),I=a("a722"),$=Object(c["a"])(J,D,P,!1,null,"8f54e7f8",null),Q=$.exports;p()($,{VExpansionPanel:F["a"],VExpansionPanelContent:L["a"],VExpansionPanelHeader:H["a"],VExpansionPanels:M["a"],VFlex:N["a"],VImg:C["a"],VLayout:I["a"]});var q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"500",persistent:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",[a("v-card-title",{staticClass:"text-h6 deep-orange darken-1 white--text"},[t._v(" COCOAログチェッカー2.0(β)"),a("br"),t._v("に関するご案内 ")]),a("v-card-text",{staticClass:"my-8"},[a("div",{staticClass:"text--primary"},[t._v(" (2022/07/12更新)"),a("br"),t._v(" 厚生労働省 接触確認アプリ COCOA のアップデート(2.0.1)により、 COCOAアプリからログデータを出力する機能が追加されました。(iOS/Android)"),a("br"),t._v(" 本サイトでは、このログデータの解析に対応を開始しています。"),a("br"),a("br"),t._v(" 下記からベータ版が利用可能です。"),a("br"),a("router-link",{attrs:{to:"/beta"}},[t._v("COCOAログチェッカー2.0 (β版)に切り替える")]),a("br"),a("br"),t._v(" アップデート等のお知らせは引き続き、下記Twitterアカウントから行います。"),a("br"),a("a",{attrs:{target:"_blank",href:"https://twitter.com/CocoaLogChecker"}},[t._v("お知らせアカウント(Twitter)")])],1)]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.show=!1}}},[t._v(" 理解した ")])],1)],1)],1)},G=[],U={name:"COCOA2Dialog",data:function(){return{show:!0}},methods:{showDialog:function(){this.show=!0}}},R=U,Z=Object(c["a"])(R,q,G,!1,null,null,null),z=Z.exports;p()(Z,{VBtn:d["a"],VCard:h["a"],VCardActions:f["a"],VCardText:f["b"],VCardTitle:f["c"],VDialog:_["a"],VDivider:m["a"],VSpacer:O["a"]});var K={name:"ExposeChecker",components:{FAQ:Q,COCOA2Dialog:z},methods:{checkJson:function(){function t(t){var e=!1;return t.flatMap((function(t){return t.Files.forEach((function(t){"MatchCount"in t||(e=!0)}))})),e}this.$gtag.event("checkJson");var e="<b>説明:</b><br>本結果はCOCOA上の新規陽性登録者との接触検知のみが対象です。無症状感染者やCOCOAの陽性登録をしていない感染者の方が近くにいた可能性はありますので、引き続き感染症対策に万全を期すことをおすすめします。",a="<b>説明:</b><br>接触通知アプリ(COCOA)を開いて陽性者との接触の検出がない場合は感染リスクは低いものと推測されます。過度に恐れず、引き続き感染症対策に万全を期すことをおすすめします。";try{var n,r=JSON.parse(this.exposeJsonText);if("ExposureChecks"in r){var s=r.ExportVersion||0;switch(s){case 1:n=r.ExposureChecks.filter((function(t){return t.MatchCount>0})).map((function(t){return delete t.Timestamp,t}));break;case 2:default:if(t(r.ExposureChecks))return alert("データフォーマットエラー\nCOCOA2.0 (iOS)は非対応になりました。"),void(this.$refs.dialog.show=!0);n=r.ExposureChecks.flatMap((function(t){return t.Files.filter((function(t){return t.MatchCount>0}))})).map((function(t){return delete t.Timestamp,t}));break}}else Array.isArray(r)&&(n=r.filter((function(t){return t.matchesCount>0})).map((function(t){return delete t.timestamp,t})));0===n.length?(this.resultText="新規陽性登録者が近くにいた記録はありませんでした。",this.explainText=e):(this.resultText="".concat(n.length,"件の新規陽性登録者が近くにいた記録が確認されました。"),this.resultJsonText=n.map((function(t){return JSON.stringify(t,null,2)})).join("\n"),this.explainText=a)}catch(o){alert("データフォーマットエラー")}},clearJson:function(){this.exposeJsonText=""},addCalendarLog:function(){this.$gtag.event("addCalendar")},showNotes:function(){this.panel=[0]}},data:function(){return{resultJsonText:"",resultText:"",exposeJsonText:"",explainText:"",panel:[]}},computed:{nextDate:function(){var t=new Date,e=new Date(t.getTime()+6048e5).toISOString().replace(/-|:|T\d{2}:\d{2}:\d{2}\.\d{3}Z/g,"")+"T180000",a=new Date(t.getTime()+6048e5).toISOString().replace(/-|:|T\d{2}:\d{2}:\d{2}\.\d{3}Z/g,"")+"T190000",n="".concat(e,"/").concat(a);return n}}},W=K,X=a("a523"),Y=a("a844"),tt=Object(c["a"])(W,S,j,!1,null,null,null),et=tt.exports;p()(tt,{VBtn:d["a"],VCol:b["a"],VContainer:X["a"],VExpansionPanel:F["a"],VExpansionPanelContent:L["a"],VExpansionPanelHeader:H["a"],VExpansionPanels:M["a"],VIcon:g["a"],VImg:C["a"],VLayout:I["a"],VRow:k["a"],VTextarea:Y["a"]}),n["a"].use(V["a"]);var at=[{path:"/",name:"CocoaLogChecker1",component:et},{path:"/beta",name:"CocoaLogChecker2",component:function(){return a.e("about").then(a.bind(null,"9f10"))}},{path:"/*",redirect:"/"}],nt=new V["a"]({mode:"hash",base:"",routes:at}),rt=nt;n["a"].config.productionTip=!1,n["a"].use(T["a"],{config:{id:"G-S63S935HFP"}}),new n["a"]({vuetify:E,router:rt,render:function(t){return t(A)}}).$mount("#app")},"5bc9":function(t,e,a){t.exports=a.p+"img/add-home-android.daecad53.png"},"745d":function(t,e,a){t.exports=a.p+"img/instruction-ios-02.00203555.png"},8153:function(t,e,a){t.exports=a.p+"img/instruction-android-01.1c3b6f06.png"},8847:function(t,e,a){t.exports=a.p+"img/add-home-ios.d42cef19.png"},"95db":function(t,e,a){"use strict";a("08f3")},cae6:function(t,e,a){t.exports=a.p+"img/home-icon.8d8fef55.png"},cf98:function(t,e,a){t.exports=a.p+"img/instruction-ios-01.e28c8dc6.png"},d338:function(t,e,a){t.exports=a.p+"img/ev_setting_time.51d9be75.png"}});
//# sourceMappingURL=app.01a2d639.js.map