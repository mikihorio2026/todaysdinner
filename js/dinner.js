// ----------------------------------------------------------------レシピ一覧
const recipes = {
  "beef-daikon": [
    {
      title: "ユッケジャンクッパ",
      videoId: "7562893456268430610"
    },
    {
      title: "牛肉のカリじゅわ厚揚げのねぎだく炒め",
      videoId: "7566219045456874770"
    }
  ],

  "beef-cabbage": [
    {
      title: "牛肉とキャベツのレシピ1",
      videoId: "動画ID"
    },
    {
      title: "牛肉とキャベツのレシピ2",
      videoId: "動画ID"
    }
  ],

  "beef-broccoli": [
    {
      title: "牛肉とブロッコリーのレシピ1",
      videoId: "動画ID"
    }
  ],

  "pork-daikon": [
    {
      title: "豚肉と大根のレシピ1",
      videoId: "動画ID"
    }
  ],

  "chicken-cheese": [
    {
      title: "鶏肉とチーズのレシピ1",
      videoId: "動画ID"
    }
  ]
};

// ----------------------------------------------------------------メインから野菜への画面切り替え
$('input[name="main"]').on("change", function () {
  $("#step-main").removeClass("is-active");
  $("#step-sub").addClass("is-active");
});


// ----------------------------------------------------------------材料選択
$('input[name="sub"]').on("change", function () {
    //①mainの箱の中に、メイン食材で選択されたものを入れる（牛or豚or鶏）
    const main = $('input[name="main"]:checked').val();
    //②subの箱の中に、選択された副菜を入れる（大根orキャベツor...）
    const sub = $('input[name="sub"]:checked').val();
    //③combinationの箱の中に、①（選択された肉）とハイフンと②（選択された野菜）の肉野菜セットのコンビ名を入れる
    const combination = `${main}-${sub}`;
    //④recipeListの箱の中にレシピ一覧の中から肉野菜セットコンビ名と同一のレシピを入れる
    const recipeList = recipes[combination];



    // 候補が1件以上ある場合
  if (recipeList && recipeList.length > 0) {
    //recipeList に入っているレシピの件数の中から、ランダムな番号を1つ作って randomNumber に入れる（2件なら0か1が入る）
    const randomNumber = Math.floor(Math.random() * recipeList.length);
    //recipeの箱の中に、レシピ一覧（1件目もしくは2件目）のレシピを入れる
    const recipe = recipeList[randomNumber];

    $("#result").html(`
      <h2>${recipe.title}</h2>
      <iframe
        width="325"
        height="578"
        src="https://www.tiktok.com/player/v1/${recipe.videoId}?controls=1&autoplay=0"
        allow="fullscreen"
        title="${recipe.title}"
      ></iframe>
    `);
  } else {
    $("#result").text("この組み合わせのレシピは準備中です。");
  }

  //野菜を非表示にして動画を表示する
$("#step-sub").removeClass("is-active");
$("#step-result").addClass("is-active");


});

// ----------------------------------------------------------------選び直す
$("#again").on("click", function () {
  $('input[name="main"]').prop("checked", false);
  $('input[name="sub"]').prop("checked", false);
  $("#result").text("");

  $("#step-result").removeClass("is-active");
  $("#step-sub").removeClass("is-active");
  $("#step-main").addClass("is-active");
});
