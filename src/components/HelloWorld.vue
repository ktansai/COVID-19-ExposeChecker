<template>
  <v-container>
    <v-row class="text-center">

      <v-col class="mb-4 mt-4">
        <h1 class="display-2 font-weight-bold mb-3">
          接触通知ログチェッカー
        </h1>

        <p class="subheading font-weight-regular">
          <a
            href="https://community.vuetifyjs.com"
            target="_blank"
          >使い方</a>
        </p>
      </v-col>

      <v-col
        class="mb-5"
        cols="12"
      >
            <v-textarea 
              v-model=exposeJsonText
              outlined
              label="ここにログファイルのjsonをペーストしてください"
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
          もし陽性者と接触が疑われる場合は、
        </h2>
        <p>
          上記Hash値をコピーし、
          <a href="https://cacaotest.sakura.ne.jp/" target="_blank" >HASH値より陽性者と近くにいた日を検索するサイト(別サイト)</a>
          を使用して、具体的な接触した可能性のある時間(24時間単位)で特定することができます。
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'HelloWorld',
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
            this.resultText = "新型コロナ感染者のCOCOA登録者とのマッチした記録はありませんでした。"
          }else{
            this.resultText = resultCount + "件の陽性者とのマッチした記録が確認されました。"
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
