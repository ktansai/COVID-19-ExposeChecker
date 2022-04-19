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
      <v-card-title class="text-h5 deep-orange darken-1 white--text">
        COCOA2.0に関するお知らせ
      </v-card-title>

      <v-card-text class="my-8">
        <div class="text--primary">
          厚生労働省
          接触確認アプリ(COCOA)のアップデート(2.0.0)に伴い、iOSの設定画面から取得できるログデータの形式が変更になり、
          COCOA2.0へのアップデート後は当サイトでのログデータの解析が不可能になりました。<br /><br />

          以下の方々は引き続きご利用いただけます。<br />
          <ul>
            <li>Android端末をご利用の方</li>
            <li>iOS端末で、古いバージョンのCOCOAをご利用の方</li>
          </ul>
          <br />
          iOSユーザーの方に向けては、今後、別の提供方法などを模索しています。<br />
          再度利用可能になるなど、アップデートありましたら、
          <a target="_blank" href="https://twitter.com/CocoaLogChecker"
            >お知らせアカウント(Twitter)</a
          >
          でお知らせします。
          <br /><br />
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
    showDialog : function(){
        this.show = true
    }
  }
  
};
</script>