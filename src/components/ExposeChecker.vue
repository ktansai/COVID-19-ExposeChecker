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
        <p class="my-8 mx-8 ">
          iOS/Androidの設定アプリから閲覧できる接触通知のログデータを解析し、<br>
          約2週間の間にCOCOA上の陽性者登録者との接触通知のログを表示します。
        </p>
        <p style="color:red;" class="mb-8">
          Androidをご利用の方へ:<br>
          接触通知ログのコピーの仕方が簡単ではないので、現在Android版はBetaとして提供しています。<br>
          後日簡単に利用できる方法を検討して、方法が見つかり次第、アップデートにて対応予定です。
        </p>
        </div>
      </v-row>
      <v-row class="my-8">
        <v-expansion-panels accordion >
              <v-expansion-panel>
                <v-expansion-panel-header>注意事項/詳細説明</v-expansion-panel-header>
                <v-expansion-panel-content class="text-left">
                  <ul>
                    <li>iOS/Androidで収集されている COVID-19 接触のログデータの中で、COCOA上の陽性者登録者の端末の近くにいた記録があるかを確認するツールです。</li>
                    <li>具体的には、接触ログデータの中のMatchCountが0ではない値(接触が疑われるデータ)を抽出するだけのツールです</li>
                    <li>クライアントサイドのJavaScriptで解析を行っているため、ここでペーストしたログデータが外部に送信されるようなことはありません。</li>
                    <li>このログデータで分かることは、COCOA陽性登録者が付近にいたことのみで、必ずしも濃厚接触に該当する訳ではありません。</li>
                    <li>本家COCOAのアプリで通知が来る条件は「1m以内かつ15分以上」ですが、本ツールはその基準よりも広い「OSが検知したの陽性者との接触」のログすべてを表示しています。(<a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/kenkou_iryou/covid19_qa_kanrenkigyou_00009.html#Q4-7" target="_blank">厚生労働省FAQ</a>)</li>
                  </ul>
                    <v-layout justify-center my-4 >
                    <v-img width="80%" max-width="400px" src="@/assets/images/cocoa-difference.png"/>
                    </v-layout>
                  <ul>
                    <li>本ツールは無償で使用可能ですが、この解析ツールを用いて起きた問題などについて、製作者は一切の責任を負いかねます。自己責任でご使用ください。</li>
                    <li>不具合報告や改善要望などは、<a href="https://github.com/ktansai/COVID-19-ExposeChecker" target="_blank">github</a>または、<a href="https://twitter.com/ktansai">@ktansai</a>までおねがいします</li>
                  </ul>
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>使い方(iOS)</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p class="text-left">Step1. iOSの接触通知ログをコピーする</p>
                  <v-img src="@/assets/images/instruction-ios-01.png" />
                  <br>
                  <p class="text-left">Step2. 下記入力枠にペーストする</p>
                  <v-img src="@/assets/images/instruction-ios-02.png"/>
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>使い方(Android)</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p class="text-left">Step1. Androidの接触通知ログを開く</p>
                  <v-img src="@/assets/images/instruction-android.png" />
                  <br>
                  <p class="text-left">Step2. 下記入力枠にペーストする</p>
                  <p class="text-left" style="color:red;">
                    接触通知ログファイルのコピー&amp;ペーストがAndroid版だとiOSのように素直にできず、どうすれば簡単にコピー&amp;ペーストできるか調査中です。<br>
                    GoogleDrive等に一旦保存して、テキストファイルとして開いて、コピー&amp;ペースト等すれば、ログの中身はコピーできるかもしれません。<br>
                    何か簡単にできる良い方法をご存じの方は<a href="https://github.com/ktansai/COVID-19-ExposeChecker" target="_blank">github</a>または、<a href="https://twitter.com/ktansai">@ktansai</a>まで教えていただけると幸いです。
                  </p>
                </v-expansion-panel-content>
            </v-expansion-panel>
            </v-expansion-panels>
      </v-row>

      <v-row
        class="my-4"
      >
        <v-radio-group v-model="os">
          <v-radio key="ios" label="iOS" value="ios"></v-radio>
          <v-radio key="android" label="Android(β版)" value="android"></v-radio>
        </v-radio-group>
      </v-row>
      <v-row >

            <v-textarea 
              v-model=exposeJsonText
              outlined
              label="ここに接触通知のログファイルのjsonをペーストしてください"
            >
            </v-textarea>
      </v-row>
      <v-row justify="justify-center" class="mb-10">
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
      <v-row class="justify-center">
        <div>
            <p class="my-10" > 
              <b>結果:</b> {{resultText}}
            </p>
        </div>
      </v-row>


      <v-row justify="center" class="my-8" v-if="resultText.length > 0" > 
        <div>
          <v-btn
            rounded
            color="#1DA1F2"
            dark
            target="_blank"
            v-bind:href="'https://twitter.com/intent/tweet?text='+'接触通知ログを解析した結果、%0a'+resultText+'%0a%0a'+'https://ktansai.github.io/COVID-19-ExposeChecker'+'&hashtags=COCOAログチェッカー'"
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
      <v-row class="justify-center mt-10" v-if="resultText.length > 0" >
        <div>
        <v-btn
          rounded
          color="gray"
          dark
          v-bind:href="`https://calendar.google.com/calendar/render?action=TEMPLATE&text=[リマインド]:COCOAログチェッカー&details=<a>https://ktansai.github.io/COVID-19-ExposeChecker/</a>&dates=${nextDate}`"
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
          もし陽性者と近くにいたことが疑われる場合は、
        </h2>
        <p>
          上記Hash値をコピーし、
          <a href="https://cacaotest.sakura.ne.jp/" target="_blank" >HASH値より陽性者と近くにいた日を検索するサイト(別サイト)</a>
          を使用して、<br>具体的な近くにいた時間(24時間単位)で特定することができます。(iOSのみ)
        </p>
        
      </v-col>
      <v-col>
        <p>made by <a href="https://twitter.com/ktansai">@ktansai</a></p>
      </v-col>
  </v-container>
</template>

<script>
  export default {
    name: 'ExposeChecker',
    methods:{
      checkJson: function(){
        try {
          if (this.os === "ios") {
            const exposeData = JSON.parse( this.exposeJsonText)
            const exposeDataArray = exposeData.ExposureChecks

            let matchedExposures = []
            exposeDataArray.forEach(checkItem => {
              checkItem.Files.forEach(file => {
                if(file.MatchCount !== 0){
                  delete file.Timestamp
                  matchedExposures.push(file)
                }
              });
            });
            this.resultJsonText = matchedExposures.map(e => JSON.stringify(e,null,2)).join("\n")
            if (matchedExposures.length === 0){
              this.resultText = "陽性者が近くにいた記録はありませんでした。"
            }else{
              this.resultText = `${matchedExposures.length}件の陽性者が近くにいた記録が確認されました。`
            }
          } else if (this.os === "android") {
            const exposeData = JSON.parse(this.exposeJsonText)
            const matchedExposures = exposeData.reduce((acc, exposure) => {
              if (exposure.matchesCount !== 0) {
                acc.push(exposure)
              }
              return acc
            }, [])

            if (matchedExposures.length === 0) {
              this.resultText = "陽性者が近くにいた記録はありませんでした。"
            } else {
              this.resultText = `${matchedExposures.length}件の陽性者が近くにいた記録が確認されました。`
              this.resultJsonText = matchedExposures.map(e => JSON.stringify(e,null,2)).join("\n")
            }
          }
        } catch (error) {
          alert("データフォーマットエラー");
        }
      },
      clearJson: function(){
        this.exposeJsonText = ""
      }
    },
    data: function(){
      return {
        os: 'ios',
        resultJsonText: "",
        resultText: "",
        exposeJsonText: "",
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
