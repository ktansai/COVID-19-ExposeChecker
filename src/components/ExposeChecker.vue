<template>
  <v-container class="text-center px-8">
      <v-row class="mt-8 justify-center" >
        <div>
        <h1 class="display-2 font-weight-bold my-2">
          <span class="d-inline-block">COCOAログ</span><span class="d-inline-block">チェッカー</span>
        </h1>
        <p>接触通知ログ解析ツール</p>
        </div>
      </v-row>
      <v-row class="justify-center">
        <div>
        <p class="my-8 mx-2">
          <span class="d-inline-block">iOS/Androidの設定アプリから閲覧できる</span>
          <span class="d-inline-block">接触通知のログデータを解析し、</span>
          <span class="d-inline-block">約2週間の間にCOCOAの新規陽性登録者が付近にいた可能性がある記録を表示します。(Bluetoothの電波が届く範囲)</span>
        </p>
        <p class="my-8 mx-2" style="color:red;" id="beforeUseNote">
          <span class="d-inline-block">
          使用の際は<a href="#beforeUseNote" @click="showNotes">詳細説明</a>を読み、
          </span>
          <span class="d-inline-block">理解した上でご利用ください。</span>
        </p>
        </div>
      </v-row>
      <v-row class="my-8">
        <v-expansion-panels accordion multiple v-model="panel" >
              <v-expansion-panel id="notes" >
                <v-expansion-panel-header>詳細説明</v-expansion-panel-header>
                <v-expansion-panel-content class="text-left">
                  <ul>
                    <li>iOS/Androidで収集されている COVID-19 接触のログデータの中で、COCOAの新規陽性登録者の端末の近くにいた記録があるかを確認するツールです。</li><br>
                    <li>具体的には、接触ログデータの中のMatchCount(iOS)/matchesCount(Android)の項目が0ではない値(接触が疑われるデータ)を抽出するだけのツールです</li><br>
                    <li>クライアントサイドのJavaScriptで解析を行っているため、ここでペーストしたログデータが外部に送信されるようなことはありません。</li><br>
                    <li>このログデータで分かることは、COCOAの新規陽性登録者が付近(Bluetoothの電波が届く範囲)にいたことのみで、必ずしも濃厚接触に該当する訳ではありません。</li><br>
                    <li>BluetoothがOFFに設定されている間は、OSが接触検知を行うことができないためご注意ください(<a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/covid19_qa_kanrenkigyou_00009.html#Q6-3" target="_blank">厚生労働省FAQ</a>より)</li><br>
                    <li>本家COCOAのアプリで通知が来る条件は「1m以内かつ15分以上」ですが、本ツールはその基準よりも広い「OSが検知した新規陽性登録者との接触」のログすべてを対象としています。(<a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/covid19_qa_kanrenkigyou_00009.html#Q4-7" target="_blank">厚生労働省FAQ</a>より)</li><br>
                  </ul>
                    <v-layout justify-center my-4 >
                    <v-img width="80%" max-width="400px" src="@/assets/images/cocoa-difference.png"/>
                    </v-layout>
                  <ul>
                    <li>本ツールの利用には、新型コロナウイルス接触確認アプリCOCOAのインストールが必要です。COCOAに関しては、<a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/cocoa_00138.html" target="_blank">厚生労働省のHP</a>をご確認ください。</li><br>
                    <li>接触があった日時は、Hash値を用いて、サイト下部の<a href="https://cacaotest.sakura.ne.jp/" target="_blank" >外部ページ</a>にて24時間の範囲で絞り込み可能です。(iOSのみ)</li><br>
                    <li>接触通知のログデータ内部のTimestampは、接触のあった日時ではなく、COCOAが新規陽性登録者のリストをダウンロードし、スマホ内で照合を行った日時のようです。つまりこのTimestampより前に接触の可能性があることのみ分かります。<br><br>
                      例えば、COCOAユーザーAさんとの接触検知が9月1日、Aさんの発症が9月4日(潜伏期間3日間)、Aさんの新規陽性登録が完了したのが9月7日、だったとすると、スマホ内の接触ログデータのTimestampは9月7日以降になりますが、実際の接触はそれより以前(この例だと9月1日)になります。<br>
                      潜伏期間や、登録までの期間は場合によるので、この方法では正確な日時は特定ができません。
                    </li><br>
                    <li>現在、このTimestampが誤解を招くため、結果表示から意図的に削除させて頂いています。表示方法などを検討し将来的に表示する予定です。</li><br>
                    <li>本ツールは接触確認アプリの活用事例として厚生労働省HPに掲載いただいております。(<a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/cocoa_00138.html#:~:text=%E3%80%90COCOA%E3%83%AD%E3%82%B0%E3%83%81%E3%82%A7%E3%83%83%E3%82%AB%E3%83%BC%E3%80%91%E3%81%AE%E3%81%94%E5%88%A9%E7%94%A8%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%E3%81%8B%E3%82%89" target="_blank">厚生労働省のHP</a>)</li><br>
                    <li>本ツールは無償で使用可能ですが、この解析ツールを用いて起きた問題などについて、製作者は一切の責任を負いかねます。自己責任でご使用ください。</li><br>
                    <li>不具合報告、改善要望、間違いの指摘、PR、質問などは、<a href="https://github.com/ktansai/COVID-19-ExposeChecker" target="_blank">github</a>、<a href="https://twitter.com/ktansai" target="_blank">@ktansai</a>または、(<a href='mailto:cocoa.log.checker@gmail.com' target="_blank">cocoa.log.checker@gmail.com</a>)までご連絡ください。また、個人で開発しているため、全てに対応できるとは限りません。ご了承ください。</li><br>
                    <li>COCOAログチェッカーは<a href="https://github.com/ktansai/COVID-19-ExposeChecker" target="_blank">github</a>上にソースコードを公開しており、多くの方に提案/指摘をいただきながら作成しています。ご協力いただいている全ての方に多大な感謝を申し上げます。</li>
                  </ul>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>使い方(iOS)</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p class="text-left">Step1. iOSの設定アプリから接触通知ログをコピーする</p>
                  <v-img src="@/assets/images/instruction-ios-01.png" />
                  <br>
                  <p class="text-left">Step2. 下記入力枠にペーストする</p>
                  <v-img src="@/assets/images/instruction-ios-02.png"/>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>使い方(Android)</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p class="text-left">
                    Step1. Androidの設定アプリから 接触通知ログをGoogleDriveまたはローカルに保存する<br>
                  </p>
                  <p class="text-left text-caption" >接触通知ログは、個人を特定することが難しい秘匿性の高いデータですが、スマホ外部に保存することに抵抗がある方は、ローカルに保存することをおすすめします。</p>

                  <v-img src="@/assets/images/instruction-android-01.png" />
                  <br>
                  <p class="text-left">
                    Step2.
                    GoogleDriveアプリまたは、ローカルのファイルから保存したログデータを開き、
                    [すべて選択]を押し、[コピー]を押す。<br>
                  <v-img src="@/assets/images/instruction-android-02.png" />
                  </p>
                  <p class="text-left">Step3. 下記入力枠を選択し、[貼り付け]を押す。
                    <br>
                    <v-img src="@/assets/images/instruction-android-03.png" />
                  </p>
                </v-expansion-panel-content>
            </v-expansion-panel>
            </v-expansion-panels>
            <v-row class="justify-center" >
              <div class="my-12 mx-2" style="width:90%">
                <span style="color:red;">重要なお知らせ</span><br> 
                <div style="text-align:left">
                COCOAのアップデート(2.0.0)に伴い、iOSの設定画面から取得できるログデータの仕様が変更になり、アプリのアップデート後に蓄積されたログはCOCOAログチェッカーでの解析が不可能になりました。<br>
                iOS端末では、アプリのアップデート後に新規陽性者とすれ違っていたとしても、COCOAログチェッカーの結果には反映されませんのでご注意ください。<br>
                <a target="_blank" href="https://twitter.com/ktansai/status/1512377351950127111" >詳しい説明へ</a>
                </div>
              </div>
            </v-row>
        </v-row>

      <v-row >

            <v-textarea 
              v-model=exposeJsonText
              outlined
              label="ここにログファイルをペーストしてください">
            </v-textarea>
      </v-row>
      <p class="text-caption">
        <span class="d-inline-block">本ツールは、スマホ内で処理しているため、</span>
        <span class="d-inline-block">ここでペーストしたデータが外部に流出することはありません。</span>
      </p>
      <v-row class="mb-5 justify-center">
        <v-col cols="6"> 
          <v-btn
                v-on:click="clearJson">
          クリア
          </v-btn>
        </v-col>
        <v-col cols="6"> 
        <v-btn
              color="primary"
              v-on:click="checkJson">
        チェックする
        </v-btn>
        </v-col>
      </v-row>
      <v-row class="mt-6 mb-6">
        <div v-if="resultText.length > 0">
            <p class="my-5 text-left"> 
              <b>結果:</b> <br> {{resultText}}<br><br>
              <span v-html="explainText" ></span><br><br>
              <span >
                <b>本結果に関して:</b><br>
                <ul>
                    <li>本結果を理由に保健所や医療機関等へのご連絡はお控えください。</li>
                    <li>ご不明点がある場合は、下記の「よくある質問」をご一読の上、解決しない場合は本サイトの製作者にご連絡ください。<span class="text-small">(<a href='mailto:cocoa.log.checker@gmail.com' target="_blank">cocoa.log.checker@gmail.com</a>)</span></li>
                </ul>
                </span>
            </p>
        </div>
        <FAQ id="FAQ"/>
      </v-row>

      <v-row class="justify-center mt-16" v-if="resultText.length > 0" >
        <div>
        <v-btn
          @click="addCalendarLog"
          rounded
          color="gray"
          dark
          target="_blank"
          v-bind:href="`https://calendar.google.com/calendar/render?action=TEMPLATE&text=[リマインド]:COCOAログチェッカー&details=<a href='https://cocoa-log-checker.com'>COCOAログチェッカー</a>%0D%0A%0D%0A保存の際は%0D%0A・予定の繰り返し設定%0D%0A・通知設定%0D%0Aを有効にするのをおすすめします&dates=${nextDate}`"
        >
        <v-icon
              left
              dark
            >
              mdi-calendar
        </v-icon>
          予定に追加
        </v-btn>
        <p class="text-caption my-4">
          <span class="d-inline-block">スマートフォン内のログは14日間しか残りません。</span><br>
          <span class="d-inline-block">上のボタンを押すとGoogleカレンダーに</span>
          <span class="d-inline-block">リマインドの予定を追加できます。</span>
          </p>
        </div>
      </v-row>

      <v-row class="justify-center my-8" v-if="resultText.length > 0" > 
        <div>
          <v-btn
            rounded
            color="#1DA1F2"
            dark
            target="_blank"
            v-bind:href="'https://twitter.com/intent/tweet?text='+'接触通知ログを解析した結果、%0a'+resultText+'%0a%0a'+'https://cocoa-log-checker.com%0a'+'&hashtags=COCOAログチェッカー'"
          >
            <v-icon
              left
              dark
            >
              mdi-twitter
            </v-icon>
            結果を投稿
            
          </v-btn>
          <p class="mt-4 text-caption">※Twitterに遷移します<br>(上記のボタンを押してもすぐには投稿されません)</p>
        </div>
      </v-row>
      
      <v-row>
            <v-textarea 
              outlined
              auto-grow
              readonly
              label="ここに詳細な結果のデータが出ます"
              v-bind:value=resultJsonText 
              class="my-4">
            </v-textarea>
      </v-row>
      <v-col
        cols="12"
        class="my-8"
      >
        <h2 class="headline font-weight-bold mb-3">
          もし新規陽性登録者と近くにいたことが疑われる場合は、
        </h2>
        <p>
          上記Hash値をコピーし、
          <a href="https://datastudio.google.com/u/0/reporting/069598a2-3f01-4b51-b023-cdb478992182" target="_blank">接触日シート別冊(別サイト)</a><br>
          または、
          <a href="https://cacaotest.sakura.ne.jp/" target="_blank" >CACAOtest(別サイト)</a>
          を使用して、<br>具体的な近くにいた時間(24時間単位)で特定することができます。(iOSのみ)
        </p>
        
      </v-col>
      <v-row class="mt-8 justify-center">
        <p>made by <a href="https://twitter.com/ktansai">@ktansai</a> / <a href="https://github.com/ktansai/COVID-19-ExposeChecker" target="_blank">github</a></p>
      </v-row>

     <COCOA2Dialog ref="dialog" />


  </v-container>
</template>

<script>
  import FAQ from './FAQ';
  import COCOA2Dialog from './Cocoa2Dialog';

  export default {
    name: 'ExposeChecker',
    components: {
      FAQ,
      COCOA2Dialog,
    },
    methods:{
      checkJson: function(){
        function checkCOCOA2iOS(matchedExposures){
          let result = false
          matchedExposures.flatMap( checkItem => checkItem.Files.forEach( file => {
              if (!('MatchCount' in file)){ result = true }
          }))
          return result
        }

        this.$gtag.event("checkJson")

        const explainTextZeroContact    = "<b>説明:</b><br>本結果はCOCOA上の新規陽性登録者との接触検知のみが対象です。無症状感染者やCOCOAの陽性登録をしていない感染者の方が近くにいた可能性はありますので、引き続き感染症対策に万全を期すことをおすすめします。"
        const explainTextNonZeroContact = "<b>説明:</b><br>接触通知アプリ(COCOA)を開いて陽性者との接触の検出がない場合は感染リスクは低いものと推測されます。過度に恐れず、引き続き感染症対策に万全を期すことをおすすめします。"

        try {
          const exposeData = JSON.parse(this.exposeJsonText)
          let matchedExposures
          if ("ExposureChecks" in exposeData) {
            // iOS
            const exportVersion = exposeData.ExportVersion || 0;
            switch (exportVersion) {
              case 1:
                matchedExposures = exposeData.ExposureChecks
                  .filter(checkItem => checkItem.MatchCount > 0)
                  .map(exposure => {
                    delete exposure.Timestamp;
                    return exposure;
                  });
                break;
              case 2:
              default:
                if(checkCOCOA2iOS(exposeData.ExposureChecks)){
                  alert("データフォーマットエラー\nCOCOA2.0 (iOS)は非対応になりました。")
                  this.$refs.dialog.show = true
                  return 
                }
                matchedExposures = exposeData.ExposureChecks
                  .flatMap(checkItem => checkItem.Files.filter(file => file.MatchCount > 0))
                  .map(exposure => {
                    delete exposure.Timestamp;
                    return exposure;
                  });
                break;
            }
          } else if (Array.isArray(exposeData)) {
            // Android
            matchedExposures = exposeData
              .filter(expose => expose.matchesCount > 0)
              .map(exposure => {
                delete exposure.timestamp
                return exposure
              })
          }

          if (matchedExposures.length === 0) {
            this.resultText = "新規陽性登録者が近くにいた記録はありませんでした。"
            this.explainText = explainTextZeroContact 
          } else {
            this.resultText = `${matchedExposures.length}件の新規陽性登録者が近くにいた記録が確認されました。`
            this.resultJsonText = matchedExposures.map(e => JSON.stringify(e,null,2)).join("\n")
            this.explainText = explainTextNonZeroContact 
          }
        } catch (error) {
          alert("データフォーマットエラー");
        }
      },
      clearJson: function(){
        this.exposeJsonText = ""
      },
      addCalendarLog: function (){
        this.$gtag.event("addCalendar")
      },
      showNotes: function(){
        this.panel = [0]
      },
    },
    data: function(){
      return {
        resultJsonText: "",
        resultText: "",
        exposeJsonText: "",
        explainText: "",
        panel:[],
      }
    },
    computed : {
      nextDate: function(){
        const today = new Date()
        const nextStartDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().replace(/-|:|T\d{2}:\d{2}:\d{2}\.\d{3}Z/g, "") + "T180000"
        const nextEndDate = new Date(today.getTime() + 7 * 24 * 60 * 60 * 1000).toISOString().replace(/-|:|T\d{2}:\d{2}:\d{2}\.\d{3}Z/g, "") + "T190000"
        const result = `${nextStartDate}/${nextEndDate}`
        return result
      },
    }
  }
</script>
