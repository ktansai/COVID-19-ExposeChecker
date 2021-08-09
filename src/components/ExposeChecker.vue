<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4 mt-8">
        <h1 class="display-2 font-weight-bold mb-8">
          iOS接触通知ログ解析ツール
        </h1>
        <p mr-8 ml-8>
          iOSの設定アプリから閲覧できる接触通知のログデータを解析し、<br>
          約2週間の間にCOCOA上の陽性者登録者との接触通知のログを表示します。
        </p>
        <v-expansion-panels accordion >
              <v-expansion-panel>
                <v-expansion-panel-header>注意事項/詳細説明</v-expansion-panel-header>
                <v-expansion-panel-content class="text-left">
                  <ul>
                  <li>iOSで収集されている COVID-19 接触のログデータの中で、COCOA上の陽性者登録者の端末の近くにいた記録があるかを確認するツールです。</li>
                  <li>具体的には、接触ログデータの中のMatchCountが0ではない値(接触が疑われるデータ)を抽出するだけのツールです</li>
                  <li>クライアントサイドのJavaScriptで解析を行っているため、ここでペーストしたログデータが外部に送信されるようなことはありません。</li>
                  <li>このログデータで分かることは、COCOA陽性登録者が付近にいたことのみで、必ずしも濃厚接触に該当する訳ではありません。</li>
                  <li>本ツールは無償で使用可能ですが、この解析ツールを用いて起きた問題などについて、製作者は一切の責任を負いかねます。自己責任でご使用ください。</li>
                  <li>不具合報告や改善要望などは、<a href="https://github.com/ktansai/COVID-19-ExposeChecker" target="_blank">github</a>または、<a href="https://twitter.com/ktansai">@ktansai</a>までおねがいします</li>
                  </ul>
                </v-expansion-panel-content>
              </v-expansion-panel>
                <v-expansion-panel>
                <v-expansion-panel-header>使い方</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <p class="text-left">Step1. iOSの接触通知ログをコピーする</p>
                  <v-img src="@/assets/images/instruction-copy.png" />
                  <br>
                  <p class="text-left">Step2. 下記入力枠にペーストする</p>
                  <v-img src="@/assets/images/instruction-paste.png"/>
                </v-expansion-panel-content>
                
              </v-expansion-panel>
            </v-expansion-panels>
      </v-col>

      <v-col
        class="mb-5 mt-10"
        cols="12"
      >
            <v-textarea 
              v-model=exposeJsonText
              outlined
              label="ここに接触通知のログファイルのjsonをペーストしてください"
            >
            </v-textarea>

            <v-row justify="center">
            <v-col cols="3"> 
              <v-btn
                    class="mb-10"
                    v-on:click="clearJson">
              クリア
              </v-btn>
            </v-col>
            <v-col cols="3"> 
            <v-btn
                  color="primary"
                  class="mb-10"
                  v-on:click="checkJson"
            >
            チェックする
            </v-btn>
            </v-col>
            </v-row>

            <p > 
              <b>結果:</b> {{resultText}}
            </p>
            <v-textarea 
              outlined
              auto-grow
              readonly
              label="ここに詳細な結果のデータが出ます"
              v-bind:value=resultJsonText 
              class="mt-12 mb-4">
            </v-textarea>
      </v-col>
      <v-col
        cols="12"
        class="mb-16"
      >
        <h2 class="headline font-weight-bold mb-3">
          もし陽性者と近くにいたことが疑われる場合は、
        </h2>
        <p>
          上記Hash値をコピーし、
          <a href="https://cacaotest.sakura.ne.jp/" target="_blank" >HASH値より陽性者と近くにいた日を検索するサイト(別サイト)</a>
          を使用して、<br>具体的な近くにいた時間(24時間単位)で特定することができます。
        </p>
        
      </v-col>
      <v-col>
        <p>made by <a href="https://twitter.com/ktansai">@ktansai</a></p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'ExposeChecker',
    methods:{
      checkJson: function(){
        try {
          const exposeData = JSON.parse( this.exposeJsonText)
          const exposeDataArray = exposeData.ExposureChecks

          this.resultJsonText = exposeDataArray
          let resultJsonText = ""
          let resultCount = 0
          exposeDataArray.forEach(checkItem => {
            checkItem.Files.forEach(file => {
              if(file.MatchCount != 0){
                resultJsonText += JSON.stringify(file,null,2) +",\n"
                resultCount += 1
              }
            });
          });
          this.resultJsonText = resultJsonText
          if(resultCount ==0){
            this.resultText = "陽性者が近くにいた記録はありませんでした。"
          }else{
            this.resultText = resultCount + "件の陽性者が近くにいた記録が確認されました。"
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
        resultJsonText: "",
        resultText: "",
        exposeJsonText: "",
      }
    }
  }
</script>
