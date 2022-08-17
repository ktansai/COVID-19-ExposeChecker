(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{1171:function(t,e,a){"use strict";a("1d52")},"1d52":function(t,e,a){},"34c7":function(t,e,a){t.exports=a.p+"img/instruction-open-file.dfe3c485.png"},"8adc":function(t,e,a){},"8b37":function(t,e,a){},"8b58":function(t,e,a){t.exports=a.p+"img/instruction-cocoa2-android-01.71b7a747.png"},"9f10":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-container",{staticClass:"text-center px-8"},[s("v-row",{staticClass:"mt-8 justify-center"},[s("div",[s("h1",{staticClass:"display-1 font-weight-bold my-2"},[s("span",{staticClass:"d-inline-block"},[t._v("COCOAログ")]),s("span",{staticClass:"d-inline-block"},[t._v("チェッカー2.0 (β)")])]),s("p",[t._v("接触通知ログ解析ツール")]),s("router-link",{attrs:{to:"/v1"}},[t._v("旧バージョン(ver1.0)はこちら")])],1)]),s("v-row",{staticClass:"justify-center"},[s("div",[s("p",{staticClass:"my-8 mx-2"},[s("span",{staticClass:"d-inline-block"},[t._v("COCOAからエクスポートできるログデータを解析し、")]),s("span",{staticClass:"d-inline-block"},[t._v("約2週間の間にCOCOAの新規陽性登録者が付近にいた可能性がある記録を表示します。(Bluetoothの電波が届く範囲)")])]),s("p",{staticClass:"my-8 mx-2",staticStyle:{color:"red"},attrs:{id:"beforeUseNote"}},[s("span",{staticClass:"d-inline-block"},[t._v(" 使用の際は"),s("a",{attrs:{href:"#beforeUseNote"},on:{click:t.showNotes}},[t._v("詳細説明")]),t._v("を読み、 ")]),s("span",{staticClass:"d-inline-block"},[t._v("理解した上でご利用ください。")])])])]),s("v-row",{staticClass:"my-8"},[s("v-expansion-panels",{attrs:{accordion:"",multiple:""},model:{value:t.panel,callback:function(e){t.panel=e},expression:"panel"}},[s("v-expansion-panel",{attrs:{id:"notes"}},[s("v-expansion-panel-header",[t._v("詳細説明")]),s("v-expansion-panel-content",{staticClass:"text-left"},[s("ul",[s("li",[t._v(" 新型コロナウイルス接触確認アプリ(COCOA)からエクスポートできるログデータの中で、COCOAの新規陽性登録者の端末の近くにいた記録があるかを確認するツールです。 ")]),s("br"),s("li",[t._v(" クライアントサイドのJavaScriptで解析を行っているため、ここでペーストしたログデータが外部に送信されるようなことはありません。 ")]),s("br"),s("li",[t._v(" このログデータで分かることは、COCOAの新規陽性登録者が付近(Bluetoothの電波が届く範囲)にいたことのみで、必ずしも濃厚接触に該当する訳ではありません。 ")]),s("br"),s("li",[t._v(" BluetoothがOFFに設定されている間は、COCOAが接触検知を行うことができないためご注意ください("),s("a",{attrs:{href:"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/covid19_qa_kanrenkigyou_00009.html#Q6-3",target:"_blank"}},[t._v("厚生労働省FAQ")]),t._v("より) ")]),s("br"),s("li",[t._v(" 本家COCOAのアプリで通知が来る条件は「1m以内かつ15分以上」ですが、本ツールはその基準よりも広い「OSが検知した新規陽性登録者との接触」のログすべてを対象としています。("),s("a",{attrs:{href:"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/covid19_qa_kanrenkigyou_00009.html#Q4-7",target:"_blank"}},[t._v("厚生労働省FAQ")]),t._v("より) ")]),s("br")]),s("v-layout",{attrs:{"justify-center":"","my-4":""}},[s("v-img",{attrs:{width:"80%","max-width":"400px",src:a("d0a3")}})],1),s("ul",[s("li",[t._v(" Bluetoothの電波は機種や環境の条件によって、到達距離が50m以上になる場合もあります。"),s("br"),t._v(" 逆に10m程度までしか届かない場合もあります。(個人的な実験ではCOCOAの電波を60~70m等の距離でも受信出来る場合があることを確認しています) ")]),s("br"),s("li",[t._v(" ログ解析の結果はあくまで、意外と周囲に陽性者がいるという把握の参考までに留めてください。 ")]),s("br"),s("li",[t._v(" 本ツールの利用には、新型コロナウイルス接触確認アプリCOCOA(2.0.1以上)のインストールが必要です。COCOAに関しては、"),s("a",{attrs:{href:"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/cocoa_00138.html",target:"_blank"}},[t._v("厚生労働省のHP")]),t._v("をご確認ください。 ")]),s("br"),s("li",[t._v(" 本ツールは接触確認アプリの活用事例として厚生労働省HPに掲載いただいております。("),s("a",{attrs:{href:"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/cocoa_00138.html#:~:text=%E3%80%90COCOA%E3%83%AD%E3%82%B0%E3%83%81%E3%82%A7%E3%83%83%E3%82%AB%E3%83%BC%E3%80%91%E3%81%AE%E3%81%94%E5%88%A9%E7%94%A8%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%E3%81%8B%E3%82%89",target:"_blank"}},[t._v("厚生労働省のHP")]),t._v(") ")]),s("br"),s("li",[t._v(" 本ツールは無償で使用可能ですが、この解析ツールを用いて起きた問題などについて、製作者は一切の責任を負いかねます。自己責任でご使用ください。 ")]),s("br"),s("li",[t._v(" 不具合報告、改善要望、間違いの指摘、PR、質問などは、"),s("a",{attrs:{href:"https://github.com/ktansai/COVID-19-ExposeChecker",target:"_blank"}},[t._v("github")]),t._v("、"),s("a",{attrs:{href:"https://twitter.com/ktansai",target:"_blank"}},[t._v("@ktansai")]),t._v("または、("),s("a",{attrs:{href:"mailto:cocoa.log.checker@gmail.com",target:"_blank"}},[t._v("cocoa.log.checker@gmail.com")]),t._v(")までご連絡ください。また、個人で開発しているため、全てに対応できるとは限りません。ご了承ください。 ")]),s("br"),s("li",[t._v(" COCOAログチェッカー2.0は現在beta版として提供しているため、説明が十分でなかったり、ログ解析に不具合がある場合があります。もし何か疑問点や不具合にお気づきの方はご連絡ください。 ")]),s("br"),s("li",[t._v(" COCOAログチェッカーは"),s("a",{attrs:{href:"https://github.com/ktansai/COVID-19-ExposeChecker",target:"_blank"}},[t._v("github")]),t._v("上にソースコードを公開しており、多くの方に提案/指摘をいただきながら作成しています。ご協力いただいている全ての方に多大な感謝を申し上げます。 ")])])],1)],1),s("v-expansion-panel",[s("v-expansion-panel-header",[t._v("使い方(iOS)")]),s("v-expansion-panel-content",[s("p",{staticClass:"text-left"},[t._v(" Step1. COCOAアプリからログデータをコピーする ")]),s("v-img",{attrs:{src:a("f77e")}}),s("br"),s("p",{staticClass:"text-left"},[t._v("Step2. 下記入力枠にペーストする")]),s("v-img",{attrs:{src:a("745d")}})],1)],1),s("v-expansion-panel",[s("v-expansion-panel-header",[t._v("使い方(Android)")]),s("v-expansion-panel-content",[s("p",{staticClass:"text-left"},[t._v(" Step1. COCOAアプリを開き、ログデータをGoogleDriveまたはローカルに保存する"),s("br")]),s("p",{staticClass:"text-left text-caption"},[t._v(" 接触通知ログは、個人を特定することが難しい秘匿性の高いデータですが、スマホ外部に保存することに抵抗がある方は、ローカルに保存することをおすすめします。 ")]),s("v-img",{attrs:{src:a("8b58")}}),s("v-divider",{staticClass:"mt-6 mb-6"}),s("p",{staticClass:"text-left"},[t._v(" Step2. GoogleDriveアプリまたは、ローカルのファイルから保存したログデータを開き、 [すべて選択]を押し、[コピー]を押す。"),s("br"),s("v-img",{attrs:{src:a("c0a7")}})],1),s("v-divider",{staticClass:"mt-6 mb-6"}),s("p",{staticClass:"text-left"},[t._v(" Step3. 下記入力枠を選択し、[貼り付け]を押す。 "),s("br"),s("v-img",{attrs:{src:a("531d")}})],1),s("v-divider",{staticClass:"mt-6 mb-6"}),s("p",{staticClass:"text-left text-caption"},[t._v(" ※コピーができない場合:"),s("br"),t._v(" [ファイルを開く]ボタンを押して、保存した[exposure-data.json]を開いてください。 ")]),s("v-card",{staticClass:"rounded-lg"},[s("v-img",{attrs:{src:a("34c7")}})],1)],1)],1)],1)],1),s("v-row",[s("v-textarea",{attrs:{outlined:"",label:"ここにログファイルをペーストしてください"},model:{value:t.sourceJsonText,callback:function(e){t.sourceJsonText=e},expression:"sourceJsonText"}})],1),s("v-row",[s("v-btn",{staticClass:"mx-auto mb-6",staticStyle:{"text-transform":"none"},attrs:{small:""},on:{click:t.handleFileInput}},[s("v-icon",{attrs:{dark:""}},[t._v(" mdi-file ")]),t._v(" ファイルを開く(Android用) ")],1),s("input",{ref:"fileInput",staticClass:"d-none",attrs:{type:"file"},on:{change:t.onFileChanged}})],1),s("v-row",{staticClass:"mb-5 justify-center"},[s("v-col",{attrs:{cols:"6"}},[s("v-btn",{on:{click:t.clearJson}},[t._v(" クリア ")])],1),s("v-col",{attrs:{cols:"6"}},[s("v-btn",{attrs:{color:"primary"},on:{click:t.checkJson}},[t._v(" チェックする ")])],1)],1),s("p",{staticClass:"text-caption"},[s("span",{staticClass:"d-inline-block"},[t._v("本ツールは、スマホ内で処理しているため、")]),s("span",{staticClass:"d-inline-block"},[t._v("ここでペーストしたデータが外部に流出することはありません。")])]),s("v-row",{staticClass:"mt-6 mb-6",attrs:{justify:"center"}},[t.resultText.length>0?s("div",[s("p",{staticClass:"mt-5 text-left"},[s("b",[t._v("結果: ")]),t._v(" "),s("br"),t._v(" "+t._s(t.resultText)+" ")]),t.exposureDateList.length>0?s("v-simple-table",{staticClass:"my-4",attrs:{dense:""},scopedSlots:t._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[t._v("日付(朝9:00~翌朝8:59)")]),s("th",{staticClass:"text-left"},[t._v("件数")])])]),s("tbody",t._l(t.exposureDateList,(function(e){return s("tr",{key:e.id},[s("td",[t._v(" "+t._s(t.exposureDict[e]["local_date"])+"("),s("span",{style:{color:t.exposureDict[e]["day_color"]}},[t._v(t._s(t.exposureDict[e]["local_day"]))]),t._v(") ")]),s("td",[t._v(t._s(t.exposureDict[e]["daily_count"]))])])})),0)]},proxy:!0}],null,!1,67747559)}):t._e(),s("p",{staticClass:"text-left text-caption"},[t._v(" 期間:"+t._s(t.inspectionPeriod)+" (2週間)"),s("br"),t._v(" ※1件のカウント条件については"),s("a",{attrs:{href:"#FAQ"}},[t._v("よくある質問")]),t._v("をご覧ください。"),s("br"),t._v(" ※陽性登録者とのすれ違いの記録のなかった日は表示されません。 ")]),s("br"),s("div",{attrs:{align:"left"}},[s("span",{domProps:{innerHTML:t._s(t.explainText)}}),s("br"),s("br"),s("span",[s("b",[t._v("本結果に関して:")]),s("br"),s("ul",[s("li",[t._v(" 本結果を理由に保健所や医療機関等へのご連絡はお控えください。 ")]),s("li",[t._v(" ご不明点がある場合は、下記の「よくある質問」をご一読の上、解決しない場合は本サイトの製作者にご連絡ください。"),s("span",{staticClass:"text-small"},[t._v("("),s("a",{attrs:{href:"mailto:cocoa.log.checker@gmail.com",target:"_blank"}},[t._v("cocoa.log.checker@gmail.com")]),t._v(")")])])])])])],1):t._e()]),s("FAQ",{attrs:{id:"FAQ"}}),this.resultText.length>0?s("v-row",{staticClass:"justify-center my-8"},[s("div",[s("v-btn",{attrs:{rounded:"",dark:"",color:"#1DA1F2",target:"_blank",href:"https://twitter.com/intent/tweet?text=COCOAのログデータを解析した結果、%0a"+t.resultText+"%0a%0ahttps%3A%2F%2Fcocoa-log-checker.com%0a%23COCOAログチェッカー"}},[s("v-icon",{attrs:{left:"",dark:""}},[t._v(" mdi-twitter ")]),t._v(" 結果を投稿 ")],1),s("p",{staticClass:"mt-4 text-caption"},[t._v(" ※Twitterに遷移します"),s("br"),t._v("(上記のボタンを押してもすぐには投稿されません) ")])],1)]):t._e(),s("v-col",{staticClass:"my-8",attrs:{cols:"12"}}),s("v-row",{staticClass:"mt-8 justify-center"},[s("p",[t._v(" made by "),s("a",{attrs:{href:"https://twitter.com/ktansai"}},[t._v("@ktansai")]),t._v(" / "),s("a",{attrs:{href:"https://github.com/ktansai/COVID-19-ExposeChecker",target:"_blank"}},[t._v("github")])])]),s("CocoaLogCheckerV2Dialog")],1)},n=[],i=(a("159b"),a("99af"),a("d81d"),a("b64b"),a("4e827"),a("4de4"),a("ac1f"),a("5319"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"text-left"},[t._m(0),s("v-expansion-panels",{staticStyle:{"font-size":"small"},attrs:{popout:"",multiple:""}},[s("v-expansion-panel",[s("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 結果の数字が多いと感染リスクが高いのですか？ ")]),s("v-expansion-panel-content",[t._v(" Bluetoothが検知する広い範囲の接触者を検出しているため、過度に恐れる必要はありません。"),s("br"),t._v(" 結果が多かった場合は、感染者が自分の行動圏に確実にいることを実感し、気を引き締めて感染症対策(手洗い/うがい/マスク着用など)を徹底していただけると幸いです。 ")])],1),s("v-expansion-panel",[s("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" COCOAの結果と何が違いますか？ ")]),s("v-expansion-panel-content",[t._v(" 本家COCOAのアプリで通知が来る条件は「1m以内かつ15分以上」ですが、本ツールはその基準よりも広い「OSが検知した新規陽性登録者との接触」のログすべてを対象としています。 "),s("div",[s("v-img",{attrs:{width:"100%","max-width":"280px",src:a("545b")}})],1)])],1),s("v-expansion-panel",[s("v-expansion-panel-header",{staticClass:"accordion-header"},[s("span",[s("span",[s("v-chip",{attrs:{"x-small":"",color:"blue lighten-2","text-color":"white"}},[t._v(" 更新 ")])],1),t._v(" COCOAログチェッカー2.0は前と何が違いますか？ ")])]),s("v-expansion-panel-content",[t._v(" バージョン1.0は、Android/iOSの設定アプリからエクスポートできるログデータを解析していましたが、"),s("br"),t._v(" バージョン2.0では、COCOAアプリからエクスポートできるログデータを解析するものとなっています。"),s("br"),s("br"),t._v(" (2022/08/08 更新)"),s("br"),t._v(" また、ログの形式が変わった影響により、1件のカウントの条件が異なっています。詳細は下のカウント条件をご覧ください。"),s("br")])],1),s("v-expansion-panel",[s("v-expansion-panel-header",{staticClass:"accordion-header"},[s("span",[s("span",[s("v-chip",{attrs:{"x-small":"",color:"red lighten-2","text-color":"white"}},[t._v(" New ")])],1),t._v(" 1件としてカウントされる条件は何ですか？")])]),s("v-expansion-panel-content",[t._v(" 1名の陽性登録者と自分の端末が約1~30分間通信した際に、1件としてカウントされます。"),s("br"),t._v(" 例えば、陽性登録者と3時間電波が届く距離に居た記録がある場合は、計6件として表示されます。 ")])],1),s("v-expansion-panel",[s("v-expansion-panel-header",{staticClass:"accordion-header"},[s("span",[s("span",[s("v-chip",{attrs:{"x-small":"",color:"red lighten-2","text-color":"white"}},[t._v(" New ")])],1),t._v(" 外出していない日にも、記録が多いです。なぜですか？ ")])]),s("v-expansion-panel-content",[t._v(" Bluetoothの電波は機種や環境的な条件によっては50m以上の距離でも届く場合があるため、家の外の端末と通信する可能性もあります。 あくまで、身近にどれくらい感染者がいて、どれくらい感染リスクがあるのかの把握にお役立てください。"),s("br"),t._v(" また、COCOAアプリからの通知がなければ、リスクが低いものと考えられます。"),s("br"),t._v(" COCOAでの通知があった場合は、その指示に従ってください。 ")])],1),s("v-expansion-panel",[s("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 昨日人混みを通りましたが、今日ログをチェックしてみたところ、結果は増えませんでした。これは安全だったということですか？ ")]),s("v-expansion-panel-content",[t._v(" 昨日すれ違った方が未発症だった場合、又はCOCOAでの陽性登録がまだだった場合、結果にはすぐに反映されません。"),s("br"),t._v(" 数日後になって結果が急激に増えることもあります。 ")])],1),s("v-expansion-panel",[s("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 今後の開発の予定は？ ")]),s("v-expansion-panel-content",[t._v(" 以下の機能の追加やリリースを考えています。 "),s("ul",[s("li",[t._v("低リスクな接触の距離・時間の表示")]),s("li",[t._v("2週間より前に遡るデータの表示")]),s("li",[t._v("グラフ等での見やすい表示")])]),s("br"),t._v(" 機能のアップデートの際は、下記Twitterアカウントからお知らせを行います。"),s("br"),s("br"),s("v-btn",{attrs:{rounded:"",dark:"",color:"#1DA1F2",target:"_blank",href:"https://twitter.com/CocoaLogChecker"}},[s("v-icon",{attrs:{left:"",dark:"",small:""}},[t._v(" mdi-twitter ")]),t._v(" COCOAログチェッカー公式 ")],1)],1)],1),s("v-expansion-panel",[s("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 「よくある質問」を読んでも分からないことがあります。どうすればいいですか？ ")]),s("v-expansion-panel-content",[s("a",{staticStyle:{"text-decoration":"none"},attrs:{href:"#beforeUseNote"},on:{click:t.$parent.showNotes}},[t._v(" > 詳細説明 ")]),t._v(" を御一読の上、解決しなかった場合は、製作者のTwitter("),s("a",{attrs:{href:"https://twitter.com/ktansai",target:"_blank"}},[t._v("@ktansai")]),t._v(")または、メール("),s("a",{attrs:{href:"mailto:cocoa.log.checker@gmail.com",target:"_blank"}},[t._v("cocoa.log.checker@gmail.com")]),t._v(")までご連絡ください。 ")])],1),s("v-expansion-panel",[s("v-expansion-panel-header",{staticClass:"accordion-header"},[t._v(" 誰が作ってるの？ 目的は？ 安全なの？ ")]),s("v-expansion-panel-content",[t._v(" 主に個人で開発しています。"),s("br"),t._v(" ご提案やご感想、間違いのご指摘等、歓迎ですが、個人で開発しているため全てのご要望を叶えることは難しい場合があります。"),s("br"),t._v(" 何かありましたら、製作者のTwitter : "),s("a",{attrs:{href:"https://twitter.com/ktansai",target:"_blank"}},[t._v("@ktansai")]),s("br"),t._v(" メール("),s("a",{attrs:{href:"mailto:cocoa.log.checker@gmail.com",target:"_blank"}},[t._v("cocoa.log.checker@gmail.com")]),t._v(")までご連絡ください。"),s("br"),s("br"),t._v(" 感染拡大の中で、「感染者が自分の行動圏内の身近にいること」を多くの方に感じていただき、正しく恐れ、気を引き締めて感染症対策に取り組んでいただくことで、結果的に「一人でも感染者や重症者の方を減らせれば」と思ってサイトを公開しています。"),s("br"),s("br"),t._v(" データは外部には送信しません。 "),s("a",{attrs:{href:"https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/cocoa_00138.html#:~:text=%E3%80%90COCOA%E3%83%AD%E3%82%B0%E3%83%81%E3%82%A7%E3%83%83%E3%82%AB%E3%83%BC%E3%80%91%E3%81%AE%E3%81%94%E5%88%A9%E7%94%A8%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%E3%81%8B%E3%82%89",target:"_blank"}},[t._v("厚生労働省のHP")]),t._v("でもご紹介いただいています。 ")])],1)],1)],1)}),o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[a("b",[t._v("よくある質問:")])])}],r={name:"FAQv2"},l=r,c=(a("1171"),a("2877")),v=a("6544"),p=a.n(v),h=a("8336"),d=a("3835"),u=a("5530"),_=(a("8adc"),a("58df")),b=a("0789"),C=a("9d26"),f=a("a9ad"),x=a("4e82"),m=a("7560"),g=a("f2e7"),k=a("1c87"),O=a("af2b"),w=a("d9bd"),A=Object(_["a"])(f["a"],O["a"],k["a"],m["a"],Object(x["a"])("chipGroup"),Object(g["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(u["a"])(Object(u["a"])(Object(u["a"])(Object(u["a"])({"v-chip":!0},k["a"].options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(k["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var a=Object(d["a"])(e,2),s=a[0],n=a[1];t.$attrs.hasOwnProperty(s)&&Object(w["a"])(s,n,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(C["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(b["b"],t)},genClose:function(){var t=this;return this.$createElement(C["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],a=this.generateRouteLink(),s=a.tag,n=a.data;n.attrs=Object(u["a"])(Object(u["a"])({},n.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:n.attrs.tabindex}),n.directives.push({name:"show",value:this.active}),n=this.setBackgroundColor(this.color,n);var i=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(i,n),e)}}),y=a("cd55"),E=a("49e2"),D=a("c865"),V=a("0393"),T=a("132d"),j=a("adda"),B=Object(c["a"])(l,i,o,!1,null,"7c8d3958",null),S=B.exports;p()(B,{VBtn:h["a"],VChip:A,VExpansionPanel:y["a"],VExpansionPanelContent:E["a"],VExpansionPanelHeader:D["a"],VExpansionPanels:V["a"],VIcon:T["a"],VImg:j["a"]});var $=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-dialog",{attrs:{width:"500",persistent:""},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[a("v-card",[a("v-card-title",{staticClass:"text-h6 blue lighten-2 white--text"},[t._v(" COCOAログチェッカー2.0(β)について ")]),a("v-card-text",{staticClass:"my-4"},[a("div",{staticClass:"text--primary"},[a("ul",[a("li",[t._v(" COCOAログチェッカーは、実験的にCOCOAアプリ(2.0.1以上)のログデータへの対応開始しました。 ")]),a("li",[t._v(" 使い方が大きく変わりましたので、以前からお使いの方も使い方を再度ご覧ください。 ")]),a("li",[t._v(" バージョン2.0は、OSの設定アプリからエクスポートできるログデータ(旧ログデータ)には対応していません。 ")]),a("li",[t._v(" 一部開発中でもあり、動作が不安定だったり、正しくない結果が出る場合があります。 ")]),a("li",[t._v(" もし、何かお気づきのことがありましたら、"),a("br"),t._v(" 製作者のTwitter("),a("a",{attrs:{href:"https://twitter.com/ktansai",target:"_blank"}},[t._v("@ktansai")]),t._v(")または、メール("),a("a",{attrs:{href:"mailto:cocoa.log.checker@gmail.com",target:"_blank"}},[t._v("cocoa.log.checker@gmail.com")]),t._v(")までご連絡ください。 ")])]),a("br")])]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{color:"primary",text:""},on:{click:function(e){t.show=!1}}},[t._v(" 理解した ")])],1)],1)],1)},F=[],P={name:"COCOALogCheckerV2Dialog",data:function(){return{show:!0}},methods:{showDialog:function(){this.show=!0}}},I=P,J=a("b0af"),L=a("99d9"),H=a("169a"),N=a("ce7e"),Q=a("2fa4"),G=Object(c["a"])(I,$,F,!1,null,null,null),M=G.exports;function R(t){var e={};return t.forEach((function(t){var a,s=t["DateMillisSinceEpoch"];a=s in e?e[s]:[],a.push(t),e[s]=a})),e}function U(t){return"".concat(t.getFullYear(),"年").concat(t.getMonth()+1,"月").concat(t.getDate(),"日")}function z(t){var e=["日","月","火","水","木","金","土"];return e[t.getDay()]}function q(t){return 0==t?"#F44336":6==t?"#3F51B5":"#000000"}p()(G,{VBtn:h["a"],VCard:J["a"],VCardActions:L["a"],VCardText:L["b"],VCardTitle:L["c"],VDialog:H["a"],VDivider:N["a"],VSpacer:Q["a"]});var W={name:"ExposureCheckerV2",components:{FAQ:S,CocoaLogCheckerV2Dialog:M},methods:{checkJson:function(){var t=this;function e(t){var e=R(t["exposure_windows"]),a={detail:null},s={};return Object.keys(e).map((function(t){var a=e[t],n=new Date(0);n.setUTCMilliseconds(t);var i=U(n),o=z(n),r=a.length;s[t]={local_date:i,local_day:o,day_color:q(n.getDay()),exposrue_windows:a,daily_count:r}})),a["detail"]=s,a}this.$gtag.event("checkJsonV2");try{var a="<b>説明:</b><br>本結果はCOCOA上の新規陽性登録者との接触検知のみが対象です。無症状感染者やCOCOAの陽性登録をしていない感染者の方が近くにいた可能性はありますので、引き続き感染症対策に万全を期すことをおすすめします。",s="<b>説明:</b><br>接触通知アプリ(COCOA)を開いて陽性者との接触の検出がない場合は感染リスクは低いものと推測されます。過度に恐れず、引き続き感染症対策に万全を期すことをおすすめします。",n=JSON.parse(this.sourceJsonText),i=new Date;i.setDate(i.getDate()-13),i.setHours(8);var o,r=i.getTime();if(!("exposure_windows"in n))return"ExposureChecks"in n||Array.isArray(n)?void alert("データフォーマットエラー\nCOCOAログチェッカー2.0では旧バージョンから使い方が大きく変わっています。使い方をもう一度ご確認ください。"):void alert("データフォーマットエラー");o=e(n),o["detail"],this.exposureDateList=Object.keys(o["detail"]).filter((function(t){return t>=r})).sort((function(t,e){return e-t})),this.exposureDict=o["detail"];var l=0;this.exposureDateList.forEach((function(e){l+=t.exposureDict[e]["daily_count"]})),l>0?(this.resultText="新規陽性登録者が近くにいた記録が".concat(l,"件確認されました。"),this.explainText=s):(this.resultText="新規陽性登録者が近くにいた記録はありませんでした。",this.explainText=a)}catch(c){alert("データフォーマットエラー")}},clearJson:function(){this.sourceJsonText=""},showNotes:function(){this.panel=[0]},handleFileInput:function(){this.$refs.fileInput.click()},onFileChanged:function(t){var e=new FileReader;e.readAsText(t.target.files[0]),e.onload=function(){this.sourceJsonText=e.result}.bind(this),e.onerror=function(){console.log(e.error)}}},data:function(){return{resultJsonText:"",resultText:"",sourceJsonText:"",explainText:"",exposureDateList:{},exposureDict:{},panel:[]}},computed:{nextDate:function(){var t=new Date,e=new Date(t.getTime()+6048e5).toISOString().replace(/-|:|T\d{2}:\d{2}:\d{2}\.\d{3}Z/g,"")+"T180000",a=new Date(t.getTime()+6048e5).toISOString().replace(/-|:|T\d{2}:\d{2}:\d{2}\.\d{3}Z/g,"")+"T190000",s="".concat(e,"/").concat(a);return s},inspectionPeriod:function(){var t=new Date,e=new Date;return e.setDate(t.getDate()-13),"".concat(U(t)," ~ ").concat(U(e))}}},Z=W,Y=a("62ad"),K=a("a523"),X=a("a722"),tt=a("0fd9"),et=(a("a9e3"),a("8b37"),a("80d2")),at=Object(_["a"])(m["a"]).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return Object(u["a"])({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader,"v-data-table--has-top":!!this.$slots.top,"v-data-table--has-bottom":!!this.$slots.bottom},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(et["f"])(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}}),st=a("a844"),nt=Object(c["a"])(Z,s,n,!1,null,null,null);e["default"]=nt.exports;p()(nt,{VBtn:h["a"],VCard:J["a"],VCol:Y["a"],VContainer:K["a"],VDivider:N["a"],VExpansionPanel:y["a"],VExpansionPanelContent:E["a"],VExpansionPanelHeader:D["a"],VExpansionPanels:V["a"],VIcon:T["a"],VImg:j["a"],VLayout:X["a"],VRow:tt["a"],VSimpleTable:at,VTextarea:st["a"]})},c0a7:function(t,e,a){t.exports=a.p+"img/instruction-cocoa2-android-02.d53034c1.png"},d0a3:function(t,e,a){t.exports=a.p+"img/cocoa-difference2.6ce8fd40.png"},f77e:function(t,e,a){t.exports=a.p+"img/instruction-cocoa2-ios-01.0f740817.png"}}]);
//# sourceMappingURL=about.9370bf02.js.map