// ----------------------------------------------------------------レシピ一覧
const recipes = {
  // 牛肉
  "beef-daikon": [
    {
      title: "ユッケジャンクッパ",
      videoId: "7562893456268430610"
    },
    {
      title: "牛肉のカリじゅわ厚揚げのねぎだく炒め",
      videoId: "7566219045456874770"
    },
    {
      title: "牛肉と大根のうま煮",
      videoId: "7612221530105203988"
    }
  ],

  "beef-potato": [
    {
      title: "牛肉とじゃがいもの甘辛炒め",
      videoId: "7629104583507234068"
    },
    {
      title: "牛肉とじゃがいものごちそうポテト",
      videoId: "7616891070453943570"
    },
    {
      title: "じゃがミートチーズ焼き",
      videoId: "7643789736221494546"
    }
  ],

  "beef-broccoli": [
    {
      title: "牛肉小間切れ炒め",
      videoId: "7397352172674993429"
    }
  ],

  "beef-cabbage": [
    {
      title: "春キャベツと牛バラの中華炒め",
      videoId: "7626771188617891092"
    },
    {
      title: "牛肉のオイスターソース炒め",
      videoId: "7657912167252888852"
    }
  ],

  "beef-mushroom": [
    {
      title: "きのこのジューシーハンバーグ",
      videoId: "7604081998113688839"
    }
  ],

  "beef-cheese": [
    {
      title: "牛肉とじゃがいものごちそうポテト",
      videoId: "7616891070453943570"
    },
    {
      title: "じゃがミートチーズ焼き",
      videoId: "7643789736221494546"
    }
  ],

  // 豚肉
  "pork-daikon": [
    {
      title: "豚バラ大根",
      videoId: "7475636562697424135"
    },
    {
      title: "豚大根のうま塩鍋",
      videoId: "7468966528357043463"
    }
  ],

  "pork-potato": [
    {
      title: "豚肉じゃがのり塩炒め",
      videoId: "7500188160593300754"
    },
    {
      title: "豚とさつまいものハニーマスタード",
      videoId: "7557700585072512263"
    },
    {
      title: "豚肉と長芋のカレーソース炒め",
      videoId: "7480888799996759314"
    },
    {
      title: "塩昆布バター炒め",
      videoId: "7453053604857957640"
    },
    {
      title: "豚肉と長芋のゆずごしょう炒め",
      videoId: "7405185404116225298"
    }

  ],

  "pork-broccoli": [
    {
      title: "豚肉とブロッコリーのツナマヨソース",
      videoId: "7496470210292026631"
    },
    {
      title: "カリフラワーの肉巻き",
      videoId: "7596667295141743880"
    }
  ],

  "pork-cabbage": [
    {
      title: "豚こまとキャベツのガッツリ飯",
      videoId: "7313203506658249986"
    },
    {
      title: "豚バラキャベツ炒め",
      videoId: "7639704347462421781"
    },
    {
      title: "とろ卵豚キャベツ",
      videoId: "7361714796770659591"
    },
    {
      title: "豚こまキャベツのチーズ炒め",
      videoId: "7691292684421532936"
    },
    {
      title: "ご飯泥棒炒め",
      videoId: "7368380019745262881"
    }
  ],

  "pork-mushroom": [
    {
      title: "豚とエリンギの柚子胡椒炒め",
      videoId: "7405185404116225298"
    },
    {
      title: "きのこの和風スープパスタ",
      videoId: "7595877683750243605"
    }
  ],

  "pork-cheese": [
    {
      title: "豚チーズヤンニョム",
      videoId: "7536896142760611080"
    },
    {
      title: "豚こまチーズヤンニョム",
      videoId: "7548751342911753479"
    },
    {
      title: "5分で作れる激ウマ豚ヤンニョム",
      videoId: "7622971883117366546"
    }
  ],

  // 鶏肉
  "chicken-daikon": [
    {
      title: "鶏肉と大根のうま煮",
      videoId: "7351696935302008072"
    }
  ],

  "chicken-potato": [
    {
      title: "ジャーマンチキン",
      videoId: "7277503845780049159"
    },
    {
      title: "長芋と鶏の唐揚げ",
      videoId: "7523930100618808584"
    },
    {
      title: "長芋と鶏の唐揚げ",
      videoId: "7523930100618808584"
    }
  ],

  "chicken-broccoli": [
    {
      title: "鶏肉のハニーマスタード炒め",
      videoId: "7379949260869160199"
    },
    {
      title: "鶏マヨブロッコリー炒め",
      videoId: "7601836829486157076"
    }
  ],

  "chicken-cabbage": [
    {
      title: "鶏肉とキャベツのカレー鍋",
      videoId: "7703133967515405569"
    },
    {
      title: "鶏塩キャベスープ",
      videoId: "7657881127218203925"
    }
  ],

  "chicken-mushroom": [
    {
      title: "鶏肉ときのこのマリネ風",
      videoId: "7549912388326231303"
    }
  ],

  "chicken-cheese": [
    {
      title: "ヤンニョムチーズチキン",
      videoId: "7365434947936537864"
    },
    {
      title: "10分で出来る超簡単ヤンニョムチキン",
      videoId: "7479365429513768210"
    }
  ]
};

let currentRecipeList = [];
let currentRecipeIndex = -1;

function showRecipe(recipe) {
  $("#result").html(`
    <h2>${recipe.title}</h2>
    <iframe
      src="https://www.tiktok.com/player/v1/${recipe.videoId}?controls=1&autoplay=0"
      allow="fullscreen"
      title="${recipe.title}"
    ></iframe>
  `);
}

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
    currentRecipeList = recipeList;
    currentRecipeIndex = Math.floor(Math.random() * currentRecipeList.length);
    $("#another-recipe").prop("disabled", currentRecipeList.length < 2);
    //recipeの箱の中に、レシピ一覧（1件目もしくは2件目）のレシピを入れる
    showRecipe(currentRecipeList[currentRecipeIndex]);
  } else {
    $("#result").text("この組み合わせのレシピは準備中です。");
  }

  //野菜を非表示にして動画を表示する
$("#step-sub").removeClass("is-active");
$("#step-result").addClass("is-active");


});

// ----------------------------------------------------------------他のレシピを見る
$("#another-recipe").on("click", function () {
  if (currentRecipeList.length < 2) return;

  let nextRecipeIndex;
  do {
    nextRecipeIndex = Math.floor(Math.random() * currentRecipeList.length);
  } while (nextRecipeIndex === currentRecipeIndex);

  currentRecipeIndex = nextRecipeIndex;
  showRecipe(currentRecipeList[currentRecipeIndex]);
});

// ----------------------------------------------------------------選び直す
$("#choose-again").on("click", function () {
  $('input[name="main"]').prop("checked", false);
  $('input[name="sub"]').prop("checked", false);
  currentRecipeList = [];
  currentRecipeIndex = -1;
  $("#another-recipe").prop("disabled", false);
  $("#result").text("");

  $("#step-result").removeClass("is-active");
  $("#step-sub").removeClass("is-active");
  $("#step-main").addClass("is-active");
});
