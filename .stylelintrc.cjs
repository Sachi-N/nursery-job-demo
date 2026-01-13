module.exports = {
  // SCSS向けの標準ルールをベースにする
  extends: ["stylelint-config-standard-scss"],

  rules: {
    // rgba() / hsl() などの透明度表記を新構文に強制しない
    "alpha-value-notation": null,

    // rgb() / hsl() の新旧構文を強制しない（既存コードとの互換性重視）
    "color-function-notation": null,

    // #fff / #ffffff の表記を統一する
    "color-hex-length": "long",

    // プロパティ間の空行ルールはPrettierに任せる
    "declaration-empty-line-before": null,

    // クラス名の命名規則（BEMなど）を強制しない
    "selector-class-pattern": null,

    // block / BLOCK などの値の大文字小文字を統一する
    "value-keyword-case": "lower",

    // SCSSの@function名の命名規則を強制しない
    "scss/at-function-pattern": null,

    // // コメント内の空白有無を細かく指摘しない
    "scss/double-slash-comment-whitespace-inside": null
  }
};
