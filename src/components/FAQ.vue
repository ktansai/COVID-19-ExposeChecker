<template>
  <div class="text-left">
    <p><b>よくある質問:</b></p>
    <v-expansion-panels popout multiple style="font-size: small">
      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-header">
          結果の数字が多いと感染リスクが高いのですか？
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Bluetoothが検知する広い範囲の接触者を検出しているため、過度に恐れる必要はありません。<br />
          結果が多かった場合は、感染者が自分の行動圏に確実にいることを実感し、気を引き締めて感染症対策(手洗い/うがい/マスク着用など)を徹底していただけると幸いです。
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-header">
          COCOAの結果と何が違いますか？
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          本家COCOAのアプリで通知が来る条件は「1m以内かつ15分以上」ですが、本ツールはその基準よりも広い「OSが検知した新規陽性登録者との接触」のログすべてを対象としています。
          <div>
            <v-img
              width="100%"
              max-width="280px"
              src="@/assets/images/cocoa-difference.png"
            />
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-header">
          接触日は特定できますか？
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          iOSをお使いの場合は、HASH値というものを使って別サイトで、接触のあった日付を絞り込むことができます。詳細はサイト下部を御覧ください。
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-header">
          設定画面で見れるタイムスタンプの時刻が深夜から早朝なのはなぜですか？<br />これは接触した日時ですか？
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          この時刻はスマートフォンが厚生労働省のサーバーから新規陽性登録者のリストをダウンロードした時刻のようです。接触のあった日時ではありません。
          <v-layout justify-center align-center>
            <v-flex shrink>
              <v-img
                width="80%"
                max-width="280px"
                src="@/assets/images/ev_setting_time.png"
              />
            </v-flex>
          </v-layout>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-header">
          数日間外出を自粛していて接触の心当たりがありませんが、結果の数字が増えています。どうしてですか？
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          2週間の間に接触した方が、その後に発症し陽性登録された場合、遅れて結果の数字に反映されるようです。<br />
          行動パターンを変えて、実際に数字に反映されるまで、1〜2週間のタイムラグが存在します。
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-header">
          昨日人混みを通りましたが、今日ログをチェックしてみたところ、結果は増えませんでした。これは安全だったということですか？
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          昨日すれ違った方が
          COCOAでの陽性登録がまだだった場合、結果にはすぐに反映されません。<br />
          1週間後になって結果が急激に増えることもあります。
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-header">
          「よくある質問」を読んでも分からないことがあります。どうすればいいですか？
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          <a
            href="#beforeUseNote"
            @click="$parent.showNotes"
            style="text-decoration: none"
          >
            > 詳細説明
          </a>
          を御一読の上、解決しなかった場合は、製作者のTwitter(<a
            href="https://twitter.com/ktansai"
            target="_blank"
            >@ktansai</a
          >)または、メール(<a
            href="mailto:cocoa.log.checker@gmail.com"
            target="_blank"
            >cocoa.log.checker@gmail.com</a
          >)までご連絡ください。
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-header">
          誰が作ってるの？ 目的は？ 安全なの？
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          主に個人で開発しています。<br />
          ご提案やご感想、間違いのご指摘等、歓迎ですが、個人で開発しているため全てのご要望を叶えることは難しい場合があります。<br />
          何かありましたら、製作者のTwitter :
          <a href="https://twitter.com/ktansai" target="_blank">@ktansai</a
          ><br />
          メール(<a href="mailto:cocoa.log.checker@gmail.com" target="_blank"
            >cocoa.log.checker@gmail.com</a
          >)までご連絡ください。<br /><br />
          感染拡大の中で、「感染者が自分の行動圏内の身近にいること」を多くの方に感じていただき、正しく恐れ、気を引き締めて感染症対策に取り組んでいただくことで、結果的に「一人でも感染者や重症者の方を減らせれば」と思ってサイトを公開しています。<br /><br />
          データは外部には送信しません。
          <a
            href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/cocoa_00138.html#:~:text=%E3%80%90COCOA%E3%83%AD%E3%82%B0%E3%83%81%E3%82%A7%E3%83%83%E3%82%AB%E3%83%BC%E3%80%91%E3%81%AE%E3%81%94%E5%88%A9%E7%94%A8%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%E3%81%8B%E3%82%89"
            target="_blank"
            >厚生労働省のHP</a
          >でもご紹介いただいています。
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<style scoped>
.accordion-header {
  padding: 20px 20px;
  font-size: small;
  font-weight: bold;
  line-height: 120%;
}
</style>

<script>
export default {
  name: "FAQ",
};
</script>