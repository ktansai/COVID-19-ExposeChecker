<template>
  <v-dialog v-model="show" width="500" persistent>
    

    <v-card>
      <v-card-title class="text-h5 blue lighten-2 white--text">
        COCOAログチェッカー2.0(β)について
      </v-card-title>

      <v-card-text class="my-8">
        <div class="text--primary">
          <ul>
          <li>COCOAログチェッカーは、実験的にCOCOAアプリのログデータへの対応開始しました。</li>
          <li>使い方が大きく変わりましたので、使い方を再度ご覧ください。</li>
          <li>バージョン2.0は、OSの設定アプリからエクスポートできるログデータ(旧ログデータ)には対応していません。</li>
          <li>一部開発中でもあり、動作が不安定だったり、正しくない結果が出る場合があります。</li>
          <li>もし、何かお気づきのことがありましたら、<br>
          製作者のTwitter(<a
            href="https://twitter.com/ktansai"
            target="_blank"
            >@ktansai</a
          >)または、メール(<a
            href="mailto:cocoa.log.checker@gmail.com"
            target="_blank"
            >cocoa.log.checker@gmail.com</a
          >)までご連絡ください。
          </li>
          </ul>

          <br />
        </div>
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" text @click="show = false"> 理解した </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "COCOALogCheckerV2Dialog",
  data: function () {
    return {
      show: true,
    };
  },
  methods: {
    showDialog : function(){
        this.show = true
    }
  }
  
};
</script>