(function(t){function e(e){for(var n,i,o=e[0],c=e[1],l=e[2],v=0,d=[];v<o.length;v++)i=o[v],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&d.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);p&&p(e);while(d.length)d.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var p=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},4345:function(t,e,a){},"46bf":function(t,e,a){t.exports=a.p+"img/instruction-android-02.557c4147.png"},"531d":function(t,e,a){t.exports=a.p+"img/instruction-android-03.646bc7e1.png"},"545b":function(t,e,a){t.exports=a.p+"img/cocoa-difference.07961364.png"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:"",color:"deep-orange lighten-2",dark:""}},[t.$vuetify.breakpoint.xs?t._e():n("div",[t._v(" COCOAログチェッカー ")]),n("v-spacer"),n("div",{staticClass:"d-flex align-center"},[n("v-btn",{attrs:{text:"",small:""},on:{click:function(e){t.dialog=!0}}},[n("v-icon",[t._v(" mdi-plus-box-outline ")]),n("span",[t._v(" ホーム画面に追加 ")])],1)],1)],1),n("v-dialog",{attrs:{width:"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-card-title",{staticClass:"text-h5 lighten-2"},[t._v(" ホーム画面に追加 ")]),n("v-card-text",[t._v(" ブラウザの下記ボタンを押して"),n("b",[t._v("ホーム画面に追加")]),t._v("を押すと、ホーム画面上にショートカットを作成できます。"),n("br"),t._v(" ショートカットを作成し、定期的にログを解析することをおすすめします。"),n("br"),n("br"),n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("v-img",{attrs:{src:a("8847")}})],1),n("v-col",{attrs:{cols:"6"}},[n("v-img",{attrs:{src:a("5bc9")}})],1)],1),n("p",{staticClass:"text-center"},[t._v(" (左:iOS / 右:Android)"),n("br"),n("br")]),n("v-img",{staticClass:"mx-8",attrs:{src:a("cae6")}})],1),n("v-divider"),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" 閉じる ")])],1)],1)],1),n("v-main",[n("ExposeChecker")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"text-center px-8"},[n("v-row",{staticClass:"mt-8 justify-center"},[n("div",[n("h1",{staticClass:"display-2 font-weight-bold my-2"},[n("span",{staticClass:"d-inline-block"},[t._v("COCOAログ")]),n("span",{staticClass:"d-inline-block"},[t._v("チェッカー")])]),n("p",[t._v("接触通知ログ解析ツール")])])]),n("v-row",{staticClass:"justify-center"},[n("div",[n("p",{staticClass:"my-8 mx-2"},[n("span",{staticClass:"d-inline-block"},[t._v("iOS/Androidの設定アプリから閲覧できる")]),n("span",{staticClass:"d-inline-block"},[t._v("接触通知のログデータを解析し、")]),n("span",{staticClass:"d-inline-block"},[t._v("約2週間の間にCOCOAの新規陽性登録者が付近にいた可能性がある記録を表示します。(Bluetoothの電波が届く範囲)")])]),n("p",{staticClass:"my-8 mx-2",staticStyle:{color:"red"},attrs:{id:"beforeUseNote"}},[n("span",{staticClass:"d-inline-block"},[t._v(" 使用の際は"),n("a",{attrs:{href:"#beforeUseNote"},on:{click:t.showNotes}},[t._v("詳細説明")]),t._v("を読み、 ")]),n("span",{staticClass:"d-inline-block"},[t._v("理解した上でご利用ください。")])])])]),n("v-row",{staticClass:"my-8"},[n("v-expansion-panels",{attrs:{accordion:"",multiple:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[n("v-expansion-panel",{attrs:{id:"notes"}},[n("v-expansion-panel-header",[t._v("詳細説明")]),n("v-expansion-panel-content",{staticClass:"text-left"},[n("ul",[n("li",[t._v("iOS/Androidで収集されている COVID-19 接触のログデータの中で、COCOAの新規陽性登録者の端末の近くにいた記録があるかを確認するツールです。")]),n("br"),n("li",[t._v("具体的には、接触ログデータの中のMatchCount(iOS)/matchesCount(Android)の項目が0ではない値(接触が疑われるデータ)を抽出するだけのツールです")]),n("br"),n("li",[t._v("クライアントサイドのJavaScriptで解析を行っているため、ここでペーストしたログデータが外部に送信されるようなことはありません。")]),n("br"),n("li",[t._v("このログデータで分かることは、COCOAの新規陽性登録者が付近(Bluetoothの電波が届く範囲)にいたことのみで、必ずしも濃厚接触に該当する訳ではありません。")]),n("br"),n("li",[t._v("BluetoothがOFFに設定されている間は、OSが接触検知を行うことができないためご注意ください("),n("a",{attrs:{href:"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/covid19_qa_kanrenkigyou_00009.html#Q6-3",target:"_blank"}},[t._v("厚生労働省FAQ")]),t._v("より)")]),n("br"),n("li",[t._v("本家COCOAのアプリで通知が来る条件は「1m以内かつ15分以上」ですが、本ツールはその基準よりも広い「OSが検知した新規陽性登録者との接触」のログすべてを対象としています。("),n("a",{attrs:{href:"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/covid19_qa_kanrenkigyou_00009.html#Q4-7",target:"_blank"}},[t._v("厚生労働省FAQ")]),t._v("より)")]),n("br")]),n("v-layout",{attrs:{"justify-center":"","my-4":""}},[n("v-img",{attrs:{width:"80%","max-width":"400px",src:a("545b")}})],1),n("ul",[n("li",[t._v("本ツールの利用には、新型コロナウイルス接触確認アプリCOCOAのインストールが必要です。COCOAに関しては、"),n("a",{attrs:{href:"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/cocoa_00138.html",target:"_blank"}},[t._v("厚生労働省のHP")]),t._v("をご確認ください。")]),n("br"),n("li",[t._v("接触があった日時は、Hash値を用いて、サイト下部の"),n("a",{attrs:{href:"https://cacaotest.sakura.ne.jp/",target:"_blank"}},[t._v("外部ページ")]),t._v("にて24時間の範囲で絞り込み可能です。(iOSのみ)")]),n("br"),n("li",[t._v("接触通知のログデータ内部のTimestampは、接触のあった日時ではなく、COCOAが新規陽性登録者のリストをダウンロードし、スマホ内で照合を行った日時のようです。つまりこのTimestampより前に接触の可能性があることのみ分かります。"),n("br"),n("br"),t._v(" 例えば、COCOAユーザーAさんとの接触検知が9月1日、Aさんの発症が9月4日(潜伏期間3日間)、Aさんの新規陽性登録が完了したのが9月7日、だったとすると、スマホ内の接触ログデータのTimestampは9月7日以降になりますが、実際の接触はそれより以前(この例だと9月1日)になります。"),n("br"),t._v(" 潜伏期間や、登録までの期間は場合によるので、この方法では正確な日時は特定ができません。 ")]),n("br"),n("li",[t._v("現在、このTimestampが誤解を招くため、結果表示から意図的に削除させて頂いています。表示方法などを検討し将来的に表示する予定です。")]),n("br"),n("li",[t._v("本ツールは接触確認アプリの活用事例として厚生労働省HPに掲載いただいております。("),n("a",{attrs:{href:"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/cocoa_00138.html#:~:text=%E3%80%90COCOA%E3%83%AD%E3%82%B0%E3%83%81%E3%82%A7%E3%83%83%E3%82%AB%E3%83%BC%E3%80%91%E3%81%AE%E3%81%94%E5%88%A9%E7%94%A8%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%E3%81%8B%E3%82%89",target:"_blank"}},[t._v("厚生労働省のHP")]),t._v(")")]),n("br"),n("li",[t._v("本ツールは無償で使用可能ですが、この解析ツールを用いて起きた問題などについて、製作者は一切の責任を負いかねます。自己責任でご使用ください。")]),n("br"),n("li",[t._v("不具合報告、改善要望、間違いの指摘、PR、質問などは、"),n("a",{attrs:{href:"https://github.com/ktansai/COVID-19-ExposeChecker",target:"_blank"}},[t._v("github")]),t._v("、"),n("a",{attrs:{href:"https://twitter.com/ktansai",target:"_blank"}},[t._v("@ktansai")]),t._v("または、("),n("a",{attrs:{href:"mailto:cocoa.log.checker@gmail.com",target:"_blank"}},[t._v("cocoa.log.checker@gmail.com")]),t._v(")までご連絡ください。また、個人で開発しているため、全てに対応できるとは限りません。ご了承ください。")]),n("br"),n("li",[t._v("COCOAログチェッカーは"),n("a",{attrs:{href:"https://github.com/ktansai/COVID-19-ExposeChecker",target:"_blank"}},[t._v("github")]),t._v("上にソースコードを公開しており、多くの方に提案/指摘をいただきながら作成しています。ご協力いただいている全ての方に多大な感謝を申し上げます。")])])],1)],1),n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("使い方(iOS)")]),n("v-expansion-panel-content",[n("p",{staticClass:"text-left"},[t._v("Step1. iOSの設定アプリから接触通知ログをコピーする")]),n("v-img",{attrs:{src:a("cf98")}}),n("br"),n("p",{staticClass:"text-left"},[t._v("Step2. 下記入力枠にペーストする")]),n("v-img",{attrs:{src:a("745d")}})],1)],1),n("v-expansion-panel",[n("v-expansion-panel-header",[t._v("使い方(Android)")]),n("v-expansion-panel-content",[n("p",{staticClass:"text-left"},[t._v(" Step1. Androidの設定アプリから 接触通知ログをGoogleDriveまたはローカルに保存する"),n("br")]),n("p",{staticClass:"text-left text-caption"},[t._v("接触通知ログは、個人を特定することが難しい秘匿性の高いデータですが、スマホ外部に保存することに抵抗がある方は、ローカルに保存することをおすすめします。")]),n("v-img",{attrs:{src:a("8153")}}),n("br"),n("p",{staticClass:"text-left"},[t._v(" Step2. GoogleDriveアプリまたは、ローカルのファイルから保存したログデータを開き、 [すべて選択]を押し、[コピー]を押す。"),n("br"),n("v-img",{attrs:{src:a("46bf")}})],1),n("p",{staticClass:"text-left"},[t._v("Step3. 下記入力枠を選択し、[貼り付け]を押す。 "),n("br"),n("v-img",{attrs:{src:a("531d")}})],1)],1)],1)],1)],1),n("v-row",[n("v-textarea",{attrs:{outlined:"",label:"ここにログファイルをペーストしてください"},model:{value:t.exposeJsonText,callback:function(e){t.exposeJsonText=e},expression:"exposeJsonText"}})],1),n("p",{staticClass:"text-caption"},[n("span",{staticClass:"d-inline-block"},[t._v("本ツールは、スマホ内で処理しているため、")]),n("span",{staticClass:"d-inline-block"},[t._v("ここでペーストしたデータが外部に流出することはありません。")])]),n("v-row",{staticClass:"mb-5 justify-center"},[n("v-col",{attrs:{cols:"6"}},[n("v-btn",{on:{click:t.clearJson}},[t._v(" クリア ")])],1),n("v-col",{attrs:{cols:"6"}},[n("v-btn",{attrs:{color:"primary"},on:{click:t.checkJson}},[t._v(" チェックする ")])],1)],1),n("v-row",{staticClass:"mt-6 mb-6"},[t.resultText.length>0?n("div",[n("p",{staticClass:"my-5 text-left"},[n("b",[t._v("結果:")]),t._v(" "),n("br"),t._v(" "+t._s(t.resultText)),n("br"),n("br"),n("span",{domProps:{innerHTML:t._s(t.explainText)}}),n("br"),n("br"),n("span",[n("b",[t._v("本結果に関して:")]),n("br"),n("ul",[n("li",[t._v("本結果を理由に保健所や医療機関等へのご連絡はお控えください。")]),n("li",[t._v("ご不明点がある場合は、下記の「よくある質問」をご一読の上、解決しない場合は本サイトの製作者にご連絡ください。"),n("span",{staticClass:"text-small"},[t._v("("),n("a",{attrs:{href:"mailto:cocoa.log.checker@gmail.com",target:"_blank"}},[t._v("cocoa.log.checker@gmail.com")]),t._v(")")])])])])])]):t._e(),n("FAQ",{attrs:{id:"FAQ"}})],1),t.resultText.length>0?n("v-row",{staticClass:"justify-center mt-16"},[n("div",[n("v-btn",{attrs:{rounded:"",color:"gray",dark:"",target:"_blank",href:"https://calendar.google.com/calendar/render?action=TEMPLATE&text=[リマインド]:COCOAログチェッカー&details=<a href='https://cocoa-log-checker.com'>COCOAログチェッカー</a>%0D%0A%0D%0A保存の際は%0D%0A・予定の繰り返し設定%0D%0A・通知設定%0D%0Aを有効にするのをおすすめします&dates="+t.nextDate},on:{click:t.addCalendarLog}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-calendar ")]),t._v(" 予定に追加 ")],1),n("p",{staticClass:"text-caption my-4"},[n("span",{staticClass:"d-inline-block"},[t._v("スマートフォン内のログは14日間しか残りません。")]),n("br"),n("span",{staticClass:"d-inline-block"},[t._v("上のボタンを押すとGoogleカレンダーに")]),n("span",{staticClass:"d-inline-block"},[t._v("リマインドの予定を追加できます。")])])],1)]):t._e(),t.resultText.length>0?n("v-row",{staticClass:"justify-center my-8"},[n("div",[n("v-btn",{attrs:{rounded:"",color:"#1DA1F2",dark:"",target:"_blank",href:"https://twitter.com/intent/tweet?text=接触通知ログを解析した結果、%0a"+t.resultText+"%0a%0ahttps://cocoa-log-checker.com%0a&hashtags=COCOAログチェッカー"}},[n("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-twitter ")]),t._v(" 結果を投稿 ")],1),n("p",{staticClass:"mt-4 text-caption"},[t._v("※Twitterに遷移します"),n("br"),t._v("(上記のボタンを押してもすぐには投稿されません)")])],1)]):t._e(),n("v-row",[n("v-textarea",{staticClass:"my-4",attrs:{outlined:"","auto-grow":"",readonly:"",label:"ここに詳細な結果のデータが出ます",value:t.resultJsonText}})],1),n("v-col",{staticClass:"my-8",attrs:{cols:"12"}},[n("h2",{staticClass:"headline font-weight-bold mb-3"},[t._v(" もし新規陽性登録者と近くにいたことが疑われる場合は、 ")]),n("p",[t._v(" 上記Hash値をコピーし、 "),n("a",{attrs:{href:"https://datastudio.google.com/u/0/reporting/069598a2-3f01-4b51-b023-cdb478992182",target:"_blank"}},[t._v("接触日シート別冊(別サイト)")]),n("br"),t._v(" または、 "),n("a",{attrs:{href:"https://cacaotest.sakura.ne.jp/",target:"_blank"}},[t._v("CACAOtest(別サイト)")]),t._v(" を使用して、"),n("br"),t._v("具体的な近くにいた時間(24時間単位)で特定することができます。(iOSのみ) ")])]),n("v-row",{staticClass:"mt-8 justify-center"},[n("p",[t._v("made by "),n("a",{attrs:{href:"https://twitter.com/ktansai"}},[t._v("@ktansai")]),t._v(" / "),n("a",{attrs:{href:"https://github.com/ktansai/COVID-19-ExposeChecker",target:"_blank"}},[t._v("github")])])]),n("COCOA2Dialog",{ref:"dialog"})],1)},o=[],c=(a("5db7"),a("73d9"),a("159b"),a("d81d"),a("4de4"),a("a15b"),a("ac1f"),a("5319"),a("99af"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-left"},[t._m(0),n("v-expansion-panels",{staticStyle:{"font-size":"small"},attrs:{popout:"",multiple:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 結果の数字が多いと感染リスクが高いのですか？ ")]),n("v-expansion-panel-content",[t._v(" Bluetoothが検知する広い範囲の接触者を検出しているため、過度に恐れる必要はありません。"),n("br"),t._v(" 結果が多かった場合は、感染者が自分の行動圏に確実にいることを実感し、気を引き締めて感染症対策(手洗い/うがい/マスク着用など)を徹底していただけると幸いです。 ")])],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" COCOAの結果と何が違いますか？ ")]),n("v-expansion-panel-content",[t._v(" 本家COCOAのアプリで通知が来る条件は「1m以内かつ15分以上」ですが、本ツールはその基準よりも広い「OSが検知した新規陽性登録者との接触」のログすべてを対象としています。 "),n("div",[n("v-img",{attrs:{width:"100%","max-width":"280px",src:a("545b")}})],1)])],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 接触日は特定できますか？ ")]),n("v-expansion-panel-content",[t._v(" iOSをお使いの場合は、HASH値というものを使って別サイトで、接触のあった日付を絞り込むことができます。詳細はサイト下部を御覧ください。 ")])],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 設定画面で見れるタイムスタンプの時刻が深夜から早朝なのはなぜですか？"),n("br"),t._v("これは接触した日時ですか？ ")]),n("v-expansion-panel-content",[t._v(" この時刻はスマートフォンが厚生労働省のサーバーから新規陽性登録者のリストをダウンロードした時刻のようです。接触のあった日時ではありません。 "),n("v-layout",{attrs:{"justify-center":"","align-center":""}},[n("v-flex",{attrs:{shrink:""}},[n("v-img",{attrs:{width:"80%","max-width":"280px",src:a("d338")}})],1)],1)],1)],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 数日間外出を自粛していて接触の心当たりがありませんが、結果の数字が増えています。どうしてですか？ ")]),n("v-expansion-panel-content",[t._v(" 2週間の間に接触した方が、その後に発症し陽性登録された場合、遅れて結果の数字に反映されるようです。"),n("br"),t._v(" 行動パターンを変えて、実際に数字に反映されるまで、1〜2週間のタイムラグが存在します。 ")])],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 昨日人混みを通りましたが、今日ログをチェックしてみたところ、結果は増えませんでした。これは安全だったということですか？ ")]),n("v-expansion-panel-content",[t._v(" 昨日すれ違った方が COCOAでの陽性登録がまだだった場合、結果にはすぐに反映されません。"),n("br"),t._v(" 1週間後になって結果が急激に増えることもあります。 ")])],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 「よくある質問」を読んでも分からないことがあります。どうすればいいですか？ ")]),n("v-expansion-panel-content",[n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"#beforeUseNote"},on:{click:t.$parent.showNotes}},[t._v(" > 詳細説明 ")]),t._v(" を御一読の上、解決しなかった場合は、製作者のTwitter("),n("a",{attrs:{href:"https://twitter.com/ktansai",target:"_blank"}},[t._v("@ktansai")]),t._v(")または、メール("),n("a",{attrs:{href:"mailto:cocoa.log.checker@gmail.com",target:"_blank"}},[t._v("cocoa.log.checker@gmail.com")]),t._v(")までご連絡ください。 ")])],1),n("v-expansion-panel",[n("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 誰が作ってるの？ 目的は？ 安全なの？ ")]),n("v-expansion-panel-content",[t._v(" 主に個人で開発しています。"),n("br"),t._v(" ご提案やご感想、間違いのご指摘等、歓迎ですが、個人で開発しているため全てのご要望を叶えることは難しい場合があります。"),n("br"),t._v(" 何かありましたら、製作者のTwitter : "),n("a",{attrs:{href:"https://twitter.com/ktansai",target:"_blank"}},[t._v("@ktansai")]),n("br"),t._v(" メール("),n("a",{attrs:{href:"mailto:cocoa.log.checker@gmail.com",target:"_blank"}},[t._v("cocoa.log.checker@gmail.com")]),t._v(")までご連絡ください。"),n("br"),n("br"),t._v(" 感染拡大の中で、「感染者が自分の行動圏内の身近にいること」を多くの方に感じていただき、正しく恐れ、気を引き締めて感染症対策に取り組んでいただくことで、結果的に「一人でも感染者や重症者の方を減らせれば」と思ってサイトを公開しています。"),n("br"),n("br"),t._v(" データは外部には送信しません。 "),n("a",{attrs:{href:"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/cocoa_00138.html#:~:text=%E3%80%90COCOA%E3%83%AD%E3%82%B0%E3%83%81%E3%82%A7%E3%83%83%E3%82%AB%E3%83%BC%E3%80%91%E3%81%AE%E3%81%94%E5%88%A9%E7%94%A8%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%E3%81%8B%E3%82%89",target:"_blank"}},[t._v("厚生労働省のHP")]),t._v("でもご紹介いただいています。 ")])],1)],1)],1)}),l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("b",[t._v("よくある質問:")])])}],p={name:"FAQ"},v=p,d=(a("674e"),a("2877")),u=a("6544"),_=a.n(u),h=a("cd55"),f=a("49e2"),b=a("c865"),x=a("0393"),m=a("0e8f"),C=a("adda"),g=a("a722"),k=Object(d["a"])(v,c,l,!1,null,"7731f742",null),O=k.exports;_()(k,{VExpansionPanel:h["a"],VExpansionPanelContent:f["a"],VExpansionPanelHeader:b["a"],VExpansionPanels:x["a"],VFlex:m["a"],VImg:C["a"],VLayout:g["a"]});var w=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"500",persistent:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5 deep-orange darken-1 white--text"},[t._v(" COCOA2.0に関するお知らせ ")]),a("v-card-text",{staticClass:"my-8"},[a("div",{staticClass:"text--primary"},[t._v(" 厚生労働省 接触確認アプリ(COCOA)のアップデート(2.0.0)に伴い、iOSの設定画面から取得できるログデータの形式が変更になり、 COCOA2.0へのアップデート後は当サイトでのログデータの解析が不可能になりました。"),a("br"),a("br"),t._v(" 以下の方々は引き続きご利用いただけます。"),a("br"),a("ul",[a("li",[t._v("Android端末をご利用の方")]),a("li",[t._v("iOS端末で、古いバージョンのCOCOAをご利用の方")])]),a("br"),t._v(" iOSユーザーの方に向けては、今後、別の提供方法などを模索しています。"),a("br"),t._v(" 再度利用可能になるなど、アップデートありましたら、 "),a("a",{attrs:{target:"_blank",href:"https://twitter.com/CocoaLogChecker"}},[t._v("お知らせアカウント(Twitter)")]),t._v(" でお知らせします。 "),a("br"),a("br")])]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.show=!1}}},[t._v(" 理解した ")])],1)],1)],1)},A=[],E={name:"COCOA2Dialog",data:function(){return{show:!0}},methods:{showDialog:function(){this.show=!0}}},y=E,T=a("8336"),V=a("b0af"),S=a("99d9"),j=a("169a"),D=a("ce7e"),P=a("2fa4"),J=Object(d["a"])(y,w,A,!1,null,null,null),B=J.exports;_()(J,{VBtn:T["a"],VCard:V["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VDialog:j["a"],VDivider:D["a"],VSpacer:P["a"]});var F={name:"ExposeChecker",components:{FAQ:O,COCOA2Dialog:B},methods:{checkJson:function(){function t(t){var e=!1;return t.flatMap((function(t){return t.Files.forEach((function(t){"MatchCount"in t||(e=!0)}))})),e}this.$gtag.event("checkJson");var e="<b>説明:</b><br>本結果はCOCOA上の新規陽性登録者との接触検知のみが対象です。無症状感染者やCOCOAの陽性登録をしていない感染者の方が近くにいた可能性はありますので、引き続き感染症対策に万全を期すことをおすすめします。",a="<b>説明:</b><br>接触通知アプリ(COCOA)を開いて陽性者との接触の検出がない場合は感染リスクは低いものと推測されます。過度に恐れず、引き続き感染症対策に万全を期すことをおすすめします。";try{var n,s=JSON.parse(this.exposeJsonText);if("ExposureChecks"in s){var r=s.ExportVersion||0;switch(r){case 1:n=s.ExposureChecks.filter((function(t){return t.MatchCount>0})).map((function(t){return delete t.Timestamp,t}));break;case 2:default:if(t(s.ExposureChecks))return alert("データフォーマットエラー\nCOCOA2.0 (iOS)は非対応になりました。"),void(this.$refs.dialog.show=!0);n=s.ExposureChecks.flatMap((function(t){return t.Files.filter((function(t){return t.MatchCount>0}))})).map((function(t){return delete t.Timestamp,t}));break}}else Array.isArray(s)&&(n=s.filter((function(t){return t.matchesCount>0})).map((function(t){return delete t.timestamp,t})));0===n.length?(this.resultText="新規陽性登録者が近くにいた記録はありませんでした。",this.explainText=e):(this.resultText="".concat(n.length,"件の新規陽性登録者が近くにいた記録が確認されました。"),this.resultJsonText=n.map((function(t){return JSON.stringify(t,null,2)})).join("\n"),this.explainText=a)}catch(i){alert("データフォーマットエラー")}},clearJson:function(){this.exposeJsonText=""},addCalendarLog:function(){this.$gtag.event("addCalendar")},showNotes:function(){this.panel=[0]}},data:function(){return{resultJsonText:"",resultText:"",exposeJsonText:"",explainText:"",panel:[]}},computed:{nextDate:function(){var t=new Date,e=new Date(t.getTime()+6048e5).toISOString().replace(/-|:|T\d{2}:\d{2}:\d{2}\.\d{3}Z/g,"")+"T180000",a=new Date(t.getTime()+6048e5).toISOString().replace(/-|:|T\d{2}:\d{2}:\d{2}\.\d{3}Z/g,"")+"T190000",n="".concat(e,"/").concat(a);return n}}},M=F,H=a("62ad"),I=a("a523"),$=a("132d"),N=a("0fd9"),Q=a("a844"),L=Object(d["a"])(M,i,o,!1,null,null,null),G=L.exports;_()(L,{VBtn:T["a"],VCol:H["a"],VContainer:I["a"],VExpansionPanel:h["a"],VExpansionPanelContent:f["a"],VExpansionPanelHeader:b["a"],VExpansionPanels:x["a"],VIcon:$["a"],VImg:C["a"],VLayout:g["a"],VRow:N["a"],VTextarea:Q["a"]});var R={name:"App",components:{ExposeChecker:G},data:function(){return{dialog:!1}}},U=R,q=a("7496"),Z=a("40dc"),z=a("f6c4"),K=Object(d["a"])(U,s,r,!1,null,null,null),W=K.exports;_()(K,{VApp:q["a"],VAppBar:Z["a"],VBtn:T["a"],VCard:V["a"],VCardActions:S["a"],VCardText:S["b"],VCardTitle:S["c"],VCol:H["a"],VDialog:j["a"],VDivider:D["a"],VIcon:$["a"],VImg:C["a"],VMain:z["a"],VRow:N["a"],VSpacer:P["a"]});var X=a("f309");n["a"].use(X["a"]);var Y=new X["a"]({breakpoint:{thresholds:{xs:355}}}),tt=a("a584");n["a"].config.productionTip=!1,n["a"].use(tt["a"],{config:{id:"G-S63S935HFP"}}),new n["a"]({vuetify:Y,render:function(t){return t(W)}}).$mount("#app")},"5bc9":function(t,e,a){t.exports=a.p+"img/add-home-android.daecad53.png"},"674e":function(t,e,a){"use strict";a("4345")},"745d":function(t,e,a){t.exports=a.p+"img/instruction-ios-02.00203555.png"},8153:function(t,e,a){t.exports=a.p+"img/instruction-android-01.1c3b6f06.png"},8847:function(t,e,a){t.exports=a.p+"img/add-home-ios.d42cef19.png"},cae6:function(t,e,a){t.exports=a.p+"img/home-icon.8d8fef55.png"},cf98:function(t,e,a){t.exports=a.p+"img/instruction-ios-01.e28c8dc6.png"},d338:function(t,e,a){t.exports=a.p+"img/ev_setting_time.51d9be75.png"}});
//# sourceMappingURL=app.4403c52c.js.map