<template>
  <v-container class="text-center px-8">
      <v-row class="mt-8 justify-center" >
        <div>
        <h1 class="display-2 font-weight-bold my-2">
          <span class="d-inline-block">COCOAログ</span><span class="d-inline-block">チェッカー2.0(β)</span>
        </h1>
        <p>接触通知ログ解析ツール</p>

        <router-link to="/">ver1.0はこちら</router-link>
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
                <v-expansion-panel-content >
                  現在準備中です。
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header>使い方(iOS)</v-expansion-panel-header>
                <v-expansion-panel-content>
                  現在準備中です。
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>使い方(Android)</v-expansion-panel-header>
                <v-expansion-panel-content>
                  現在準備中です。
                </v-expansion-panel-content>
            </v-expansion-panel>
            </v-expansion-panels>
        </v-row>

      <v-row class=" justify-center">
            現在準備中です。
            <!-- <v-textarea 
              v-model=exposeJsonText
              outlined
              label="ここにログファイルをペーストしてください">
            </v-textarea> -->
      </v-row>
      <br>

      <v-row class="mt-6 mb-6">
        <div v-if="resultText.length > 0">
            <p class="my-5 text-left"> 
              <b>結果:</b> <br> {{resultText}}<br>
              <ul>
                <li v-for="date in exposureDateList" :key="date.id">
                  {{ exposureDict[date]["local_date"] }}
                </li>
              </ul>
              <br>
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
      
      <v-row class="mt-8 justify-center">
        <p>made by <a href="https://twitter.com/ktansai">@ktansai</a> / <a href="https://github.com/ktansai/COVID-19-ExposeChecker" target="_blank">github</a></p>
      </v-row>


  </v-container>
</template>

<script>

  function createExposureStatistics(exposureWindows){
    let exposureWindowDict = {}

    exposureWindows.forEach(ew => {
      let key = ew["DateMillisSinceEpoch"]
      let exposureWindowList
      if (key in exposureWindowDict) {
        exposureWindowList = exposureWindowDict[key]
      } else {
        exposureWindowList = []
      }

      exposureWindowList.push(ew)
      exposureWindowDict[key] = exposureWindowList
    })

    return exposureWindowDict
  }

  function dateToString(dateTimeUtc){
    return `${dateTimeUtc.getFullYear()}年${dateTimeUtc.getMonth() + 1}月${dateTimeUtc.getDate()}日`
  }

  export default {
    name: 'ExposureCheckerV2',
    components: {
    },
    methods:{
      checkJson: function(){
        function checkCOCOALog(exposureData){
          let exposureDict = createExposureStatistics(exposureData["exposure_windows"])

          const explainTextZeroContact    = "<b>説明:</b><br>本結果はCOCOA上の新規陽性登録者との接触検知のみが対象です。無症状感染者やCOCOAの陽性登録をしていない感染者の方が近くにいた可能性はありますので、引き続き感染症対策に万全を期すことをおすすめします。"
          const explainTextNonZeroContact = "<b>説明:</b><br>接触通知アプリ(COCOA)を開いて陽性者との接触の検出がない場合は感染リスクは低いものと推測されます。過度に恐れず、引き続き感染症対策に万全を期すことをおすすめします。"

          let result = {
            "text": null,
            "explain": null,
            "detail": null,
            "detailText": null,
          }

          if (Object.keys(exposureDict).length === 0) {
            result["text"] = "新規陽性登録者が近くにいた記録はありませんでした。"
            result["explain"] = explainTextZeroContact
          } else {
            result["text"] = "新規陽性登録者が近くにいた記録が確認されました。"
            result["explain"] = explainTextNonZeroContact

            let detail = {}
            Object.keys(exposureDict).map(dateMillsSinceEpoch => {
              const exposrueWindows = exposureDict[dateMillsSinceEpoch]

              let dateTimeUtc = new Date(0)
              dateTimeUtc.setUTCMilliseconds(dateMillsSinceEpoch)
              let localDate = dateToString(dateTimeUtc)
              detail[dateMillsSinceEpoch] = {
                "local_date": localDate,
                "exposrue_windows": exposrueWindows,
              }
            })

            result["detail"] = detail
            result["detailText"] = JSON.stringify(
                Object.keys(detail)
                  .map(dateMillsSinceEpoch => detail[dateMillsSinceEpoch]),
                null,
                2
            )
          }

          return result
        }
        function checkLegacyLog(exposeData){
          function checkCOCOA2iOS(matchedExposures){
            let result = false
            matchedExposures.flatMap( checkItem => checkItem.Files.forEach( file => {
                if (!('MatchCount' in file)){ result = true }
            }))
            return result
          }

          const explainTextZeroContact    = "<b>説明:</b><br>本結果はCOCOA上の新規陽性登録者との接触検知のみが対象です。無症状感染者やCOCOAの陽性登録をしていない感染者の方が近くにいた可能性はありますので、引き続き感染症対策に万全を期すことをおすすめします。"
          const explainTextNonZeroContact = "<b>説明:</b><br>接触通知アプリ(COCOA)を開いて陽性者との接触の検出がない場合は感染リスクは低いものと推測されます。過度に恐れず、引き続き感染症対策に万全を期すことをおすすめします。"

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

          let result = {
            "text": null,
            "explain": null,
            "detail": null,
            "detailText": null,
          }

          if (matchedExposures.length === 0) {
            result["text"] = "新規陽性登録者が近くにいた記録はありませんでした。"
            result["explain"] = explainTextZeroContact
            result["detailText"] = ""
          } else {
            result["text"] = `${matchedExposures.length}件の新規陽性登録者が近くにいた記録が確認されました。`
            result["explain"] = explainTextNonZeroContact
            result["detailText"] = matchedExposures.map(e => JSON.stringify(e,null,2)).join("\n")
          }

          return result
        }

        this.$gtag.event("checkJson")

        try {
          const exposeData = JSON.parse(this.exposeJsonText)

          const fromDate = new Date()
          fromDate.setDate(fromDate.getDate() - 14)
          const fromEpochMillis = fromDate.getTime()

          let checkLogResult

          if ("exposure_windows" in exposeData) {
            checkLogResult = checkCOCOALog(exposeData)
          } else if ("ExposureChecks" in exposeData || Array.isArray(exposeData)) {
            checkLogResult = checkLegacyLog(exposeData)
          } else {
            alert("ログのフォーマットが異なります")
            return
          }

          this.resultText = checkLogResult["text"]
          this.explainText = checkLogResult["explain"]
          this.resultJsonText = checkLogResult["detailText"]

          if (checkLogResult["detail"]) {
            this.exposureDateList = Object.keys(checkLogResult["detail"])
              .filter(epochMillis => epochMillis >= fromEpochMillis)
              .sort((a, b) => b - a) // Descending order
            this.exposureDict = checkLogResult["detail"]
          } else {
            this.exposureDateList = []
            this.exposureDict = {}
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
        exposureDateList: {},
        exposureDict: {},
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
