<template>
  <v-dialog v-model="show" width="500" persistent>
    <!-- 
      debug 用
      <template v-slot:activator="{ on, attrs }">
      <v-btn color="red lighten-2" dark v-bind="attrs" v-on="on">
        Click Me
      </v-btn>
    </template> -->

    <v-card>
      <v-card-title class="text-h6 deep-orange darken-1 white--text">
        COCOAログチェッカー2.0(β)<br />に関するご案内
      </v-card-title>

      <v-card-text class="my-8">
        <div class="text--primary">
          (2022/07/12更新)<br />
          厚生労働省 接触確認アプリ COCOA のアップデート(2.0.1)により、
          COCOAアプリからログデータを出力する機能が追加されました。(iOS/Android)<br />
          本サイトでは、このログデータの解析に対応を開始しています。<br />
          <br />

          下記からベータ版が利用可能です。<br />

          <router-link to="/beta"
            >COCOAログチェッカー2.0 (β版)に切り替える</router-link
          >
          <br />
          <br />
          アップデート等のお知らせは引き続き、下記Twitterアカウントから行います。<br />
          <a target="_blank" href="https://twitter.com/CocoaLogChecker"
            >お知らせアカウント(Twitter)</a
          >
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
  name: "COCOA2Dialog",
  data: function () {
    return {
      show: true,
    };
  },
  methods: {
    showDialog: function () {
      this.show = true;
    },
  },
};
</script>