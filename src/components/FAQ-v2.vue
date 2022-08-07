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
          <v-img width="100%" max-width="280px" src="@/assets/images/cocoa-difference.png"/>
          </div>
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-header">
          <span>
            <span >
              <v-chip
                x-small
                color="blue lighten-2"
                text-color="white"
              >
                更新
              </v-chip>
            </span>
          COCOAログチェッカー2.0は前と何が違いますか？
           </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          バージョン1.0は、Android/iOSの設定アプリからエクスポートできるログデータを解析していましたが、<br>
          バージョン2.0では、COCOAアプリからエクスポートできるログデータを解析するものとなっています。<br>
          <br>
          (2022/08/08 更新)<br>
          また、ログの形式が変わった影響により、1件のカウントの条件が異なっています。詳細は下のカウント条件をご覧ください。<br>
        </v-expansion-panel-content>
      </v-expansion-panel>
      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-header">
          <span>
            <span >
              <v-chip
                x-small
                color="red lighten-2"
                text-color="white"
              >
                New
              </v-chip>
            </span>
            1件としてカウントされる条件は何ですか？</span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          1名の陽性登録者と自分の端末が約1~30分間通信した際に、1件としてカウントされます。<br>
          例えば、陽性登録者と3時間電波が届く距離に居た記録がある場合は、計6件として表示されます。
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-header">
            <span>
            <span >
              <v-chip
                x-small
                color="red lighten-2"
                text-color="white"
              >
                New
              </v-chip>
            </span>
            外出していない日にも、記録が多いです。なぜですか？
            </span>
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          Bluetoothの電波は機種や環境的な条件によっては50m以上の距離でも届く場合があるため、家の外の端末と通信する可能性もあります。
          あくまで、身近にどれくらい感染者がいて、どれくらい感染リスクがあるのかの把握にお役立てください。<br>
          また、COCOAアプリからの通知がなければ、リスクが低いものと考えられます。<br>
          COCOAでの通知があった場合は、その指示に従ってください。
        </v-expansion-panel-content>
      </v-expansion-panel>

      <v-expansion-panel>
        <v-expansion-panel-header class="accordion-header">
          昨日人混みを通りましたが、今日ログをチェックしてみたところ、結果は増えませんでした。これは安全だったということですか？
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          昨日すれ違った方が未発症だった場合、又はCOCOAでの陽性登録がまだだった場合、結果にはすぐに反映されません。<br />
          数日後になって結果が急激に増えることもあります。
        </v-expansion-panel-content>
      </v-expansion-panel>

       <v-expansion-panel>
        <v-expansion-panel-header class="accordion-header">
          今後の開発の予定は？
        </v-expansion-panel-header>
        <v-expansion-panel-content>
          以下の機能の追加やリリースを考えています。
          <ul>
            <li>COCOAログチェッカー2.0の正式リリース</li>
            <li>低リスクな接触の距離・時間の表示</li>
            <li>2週間より前に遡るデータの表示</li>
            <li>グラフ等での見やすい表示</li>
          </ul>
          <br>
          機能のアップデートの際は、下記Twitterアカウントからお知らせを行います。<br><br>

          <v-btn
            rounded
            dark
            color="#1DA1F2"
            target="_blank"
            href="https://twitter.com/CocoaLogChecker"
          >
            <v-icon
              left
              dark
              small
            >
              mdi-twitter
            </v-icon>
            COCOAログチェッカー公式
          </v-btn>
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
          主に個人で開発しています。<br>
          ご提案やご感想、間違いのご指摘等、歓迎ですが、個人で開発しているため全てのご要望を叶えることは難しい場合があります。<br>
          何かありましたら、製作者のTwitter : <a
            href="https://twitter.com/ktansai"
            target="_blank"
            >@ktansai</a
          ><br>
            メール(<a
            href="mailto:cocoa.log.checker@gmail.com"
            target="_blank"
            >cocoa.log.checker@gmail.com</a
          >)までご連絡ください。<br><br>
          感染拡大の中で、「感染者が自分の行動圏内の身近にいること」を多くの方に感じていただき、正しく恐れ、気を引き締めて感染症対策に取り組んでいただくことで、結果的に「一人でも感染者や重症者の方を減らせれば」と思ってサイトを公開しています。<br><br>
          データは外部には送信しません。
          <a href="https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/cocoa_00138.html#:~:text=%E3%80%90COCOA%E3%83%AD%E3%82%B0%E3%83%81%E3%82%A7%E3%83%83%E3%82%AB%E3%83%BC%E3%80%91%E3%81%AE%E3%81%94%E5%88%A9%E7%94%A8%E3%81%AF%E3%81%93%E3%81%A1%E3%82%89%E3%81%8B%E3%82%89" target="_blank">厚生労働省のHP</a>でもご紹介いただいています。
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
  name: "FAQv2",
};
</script>