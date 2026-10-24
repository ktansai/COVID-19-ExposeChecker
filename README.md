# COCOAログチェッカー

> **公開を終了しました。** このリポジトリはアーカイブとして保存されています。
> 公開当時のサイトは、[Release](https://github.com/ktansai/COVID-19-ExposeChecker/releases/tag/archive-2026-10-24) の zip から確認できます。

## 概要
- COVID-19が流行した際に、COCOAのログを解析するツールとして、公開されていたページです。
- COCOAからエクスポートしたログデータを貼り付けると、新規陽性登録者が近くにいたログの件数を日付ごとに表示します。
- 公開は終了しており、GitHub Pages の URL にアクセスすると、このリポジトリへ転送されます。

## アーカイブ版の見かた
公開当時のサイトを、Release に zip で保存しています。

1. [Release (archive-2026-10-24)](https://github.com/ktansai/COVID-19-ExposeChecker/releases/tag/archive-2026-10-24) から `COVID-19-ExposeChecker-archive.zip` をダウンロードして展開する
2. 展開した `COVID-19-ExposeChecker/index.html` をブラウザで開く

- 内容は、公開終了直前の `gh-pages` ブランチ (コミット `c4a8958`) と同じです。
- アイコンフォントと Google Fonts は外部 CDN から読み込むため、アイコンの表示にはネット接続が必要です。
- 旧ドメイン `cocoa-log-checker.com` は現在、本ツールとは無関係のサイトになっています。アクセスしないでください (サイト内に残っている同ドメインへのリンクも同様です)。

## メディア掲載
- [新型コロナウイルス接触確認アプリ（COCOA) COVID-19 Contact-Confirming Application｜厚生労働省](https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/cocoa_00018.html)
- [接触確認アプリ「COCOA」 感染拡大でウェブサイト利用者が増加 | NHKニュース](https://news.web.nhk/newsweb/na/na-k10013769121000)
- [周りにいるコロナ陽性者の人数を確認できる「COCOAログチェッカー」が話題に - ITmedia NEWS](https://www.itmedia.co.jp/news/article/2201/21/1220121184/)
- [コロナ陽性者が近くにいた回数を確認できる「COCOAログチェッカー」を使ってみた - iPhone Mania](https://iphone-mania.jp/news-434073/)
- [COCOAの接触時間が長い理由と、COCOAログチェッカー件数の意味｜Kenji Suzuki (note)](https://note.com/kvaluation/n/n83ac9c1a0697)

以下は、公開当時の説明を基にした内容です。

## これは何
COCOAのログデータを解析して新規陽性登録者が近くにいたログの件数を表示します。  
正確には、ログデータ内の `exposure_windows` の件数を日付ごとに整理してカウントしています。

## 開発経緯
iOS/Androidの設定画面から出力できるログデータから、すれ違いを含む低リスクな接触の件数をみることができたのですが、その生のJsonのログデータを毎回見るのが大変で自分用のツールとして、ログの件数を数えるだけのツールを作っていました。

ニュースで報じられる「xx万人感染」という数字では、自分の生活にどう影響があるのかが分かりづらいと感じ、
自分の2週間の行動の中で、COCOAの新規陽性登録者がどれくらい近くに居たかという自分に直接関係のある数として表示されることで、感染者の多さや身近さを感じていただけると思い開発していました。

このツールの出力結果の件数は極めて感染リスクの低い接触が多く含まれており、この数が多いからと言って、新型コロナウィルスに感染しやすくなる訳ではありません。

## 安全性について
本ツールはクライアントサイド(スマホ内)でのみの処理で解析を行っているため、外部にペーストしたデータが送られるなどはございません。

そもそも接触通知ログには個人を特定できる情報は含まれておりません。

## 名称について
COCOAログチェッカーはオープンソースなので、フォークやコードをみて参考にしていただくことに関しては問題がありません。  
ただ、その場合はCOCOAログチェッカーという名称を使わず必ず名称を変えて公開するなどをしてください。  
理由としては、一般の方がCOCOAログチェッカーと誤認して古いバージョンのものにアクセスしてしまうことや不具合を含む問い合わせが、COCOAログチェッカー側に来てしまうからです。

## お問い合わせ
公開は終了しており、現在は新規の不具合報告やご提案には対応していません。以下は公開当時の連絡先です。

- Twitter <a href="https://twitter.com/ktansai" target="_blank">@ktansai</a>
- メール <a href='mailto:cocoa.log.checker@gmail.com' target="_blank">cocoa.log.checker@gmail.com</a>

## 参考
接触通知ログのサンプルデータは[wiki](https://github.com/ktansai/COVID-19-ExposeChecker/wiki)にあります。
