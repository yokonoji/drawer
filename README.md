## get-startedページ
https://socket.io/get-started/chat/

このページのサンプルコード

## 動かし方

次のコマンドを実行して
```
$ node index.js
```
↓ アクセス
```
http://localhost:3000
```
## socket.io公式デモ
### チャット
https://socket.io/demos/chat/  
https://github.com/socketio/socket.io/tree/master/examples/chat

### ホワイトボード
https://socket.io/demos/whiteboard/  
https://github.com/socketio/socket.io/tree/master/examples/whiteboard

## herokuでのデプロイ方法
https://devcenter.heroku.com/articles/getting-started-with-nodejs
```
Heroku CLI をインストール
$ brew install heroku/brew/heroku

Herokuにログイン
$ heroku login

対象のフォルダに移動
$ cd 対象のフォルダ

Herokuにappを作成
$ heroku create

app名を変更したい場合
$ heroku apps:rename NEW_NAME --app OLD_NAME

Herokuのアプリ一覧を確認
$ heroku apps

Procfileを作成しておく
web: node index.js
の１行を書いておく

Herokuにデプロイ
$ git push heroku master

このアプリの場合次のURLでアクセス
https://enigmatic-ridge-45320.herokuapp.com/

変更を反映させるときはgitコミットしてから
$ git push heroku master
```

## メモ
Peer.jsでボイスチャットつける？
```
https://peerjs.com/
https://github.com/peers/peerjs-server
https://qiita.com/59naga/items/e9bfab16ed66ecfb590d
https://www.webprofessional.jp/webrtc-video-chat-application-peerjs/
https://qiita.com/Futo_Horio/items/3f7a750e3b06cd2dfe6b
http://front-core.github.io/ja/blog/2015/02/07/nodejs-express-socketio-webaudio/
```
skywayという方法もある？
```
https://qiita.com/ibuibu69/items/13b0edfd5d8347eac77d
https://webrtc.ecl.ntt.com/documents/javascript-sdk.html#_1-%E6%BA%96%E5%82%99
```
