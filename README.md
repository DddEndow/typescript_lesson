# チュートリアルの参照元
https://www.udemy.com/course/typescript-complete/

## 対応表
https://kangax.github.io/compat-table/es6/

## tscのコマンド一覧

```
// コンパイル
// デフォルトはES3
npx tsc hoge.ts --target es6

// ファイルが保存されたら自動でコンパイルする
npx tsc index.ts --watch

// コンフィグファイルを作成
npx tsc --init
// ↓で一度に全てのファイルをコンパイルできるようになる
// tsconfig.jsonの設定が適応される
npx tsc
```
