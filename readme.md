# fixer

### overview(概要)

This is chrome extension.

fixer purpose change "DOM" and make useful TUT site :)

クロームの拡張機能です。
DOMの書き換えによって東京工科大学の学内サイトを使いやすくするものです。

### How to use(使い方、導入)

1. git clone or download this repository
2. go to chrome://extensions
3. load this repository(directory or folder)
4. goto your portal page.
5. this extension diplay content in single page.

***

1. git clone またはダウンロードでレポジトリをローカルに置きます
2. chrome://extensions にアクセスします
3. 「パッケージ化されていない拡張機能を読み込む」から、
ディレクトリを読み込んでください
4. 学内サイトにアクセスします。
5. 一ページで講義情報その他を表示されるようにします。

### what extension do?(拡張機能の機能)

1. timetable add class time and url change.
2. font style and background color change. and some design change.
3. two page summarize.
4. add loading animation(this animation is wait for time table infomation)

***

1. 時間割に授業時間の追加、そしてサイトアクセスのurlを直接ジャンプできるようにしました。
2. フォントと背景色、デザイン面を変えました。
3. indexとlectureを統合しました。
4. ローディングアニメーションを追加しました(これは時間割の情報を取得する際に「もともと」時間がかかるのに起因します)

***

この拡張機能は内部で以下の動きをします。開発に必要な主要的な物を記します。

1. jsでhtmlにlinkタグを直接追加することによりgooglefontsでのフォントの追加をしています。
2. indexとlectureページを移動します。通常URLの遷移によりDOMが読み込みリセットされますが、TUTportalはhide+pjaxを利用しているので、ページが追加され元のページがdisplay:noneされることによりページ遷移を実現しています。なので読み込みのため必要なページを巡回し、非表示cssを解除することにより見た目を反映するように変更を行います。
3. もともとの時間割(tr,tdの方)のクラスにhpjaxがあるのでそれを消去しています。おそらくクラスの分類で独自の処理を行っていると思われます。消去しないとtarget="\_blank"が有効になりません。
4. cssアニメーションですが、loading関数とremoveloadanimation関数を排除すれば無効になると思います。これはページ遷移とDOM操作、cssの非表示にまつわる画面のちらつきをユーザーに知覚されないようにしているものです。


### feature(展望)

popup some class infomation from URL. just hover mouse.

add dark mode. and user setting for what display.

extension release "chrome web store"

マウスホバーしたタイミングで簡単な授業情報を出したい。

ダークモードと表示しない項目の設定を追加したい。

後、chromeウェブストアで公開できたらいいですね

