const themes = [
  {
    num: "1",
    title: "戦争や平和に関すること",
    main: "子どもの頃、戦争について、親・祖父母・親戚・近所の大人から聞いた話はありますか？　その中で、今でも覚えている話は何ですか？",
    subs: [
      "その話を聞いた時、怖いと思いましたか？それとも遠い昔の話だと思いましたか？",
      "大人たちは戦争の話をよくしていましたか？それともあまり話しませんでしたか？",
      "戦争を経験した人たちの生活や考え方に、何か影響を感じましたか？",
      "食べ物、物を大切にすること、家族の考え方などに、戦争の影響を感じたことはありますか？",
      "自分にとって「平和」とはどんなことだと思いますか？",
    ],
  },
  {
    num: "2",
    title: "社会や暮らしの変化で、自分に大きな影響があったこと",
    main: "子どもの頃から大人になるまでの間に、社会や暮らしが大きく変わったと感じたことはありますか？　その変化は、自分の生活や考え方にどんな影響を与えましたか？",
    subs: [
      "子どもの頃と比べて、毎日の暮らしで一番変わったと思うことは何ですか？",
      "家、学校、仕事、買い物、電話、テレビ、交通、食べ物などで、特に印象に残る変化はありますか？",
      "昔は普通だったけれど、今の子どもが聞いたら驚きそうなことはありますか？",
      "便利になってよかったと思うことは何ですか？",
      "便利になった一方で、失われたと思うことはありますか？",
      "進学、就職、結婚、子育て、住む場所など、自分の人生の選択に影響した社会の変化はありますか？",
      "景気、物価、働き方、教育、地域の様子などで、時代の変化を感じたことはありますか？",
      "今の若い人たちと自分の世代で、「ここが一番違う」と思うことはありますか？",
      "当時の学校や職場には、今とは違う「当たり前」はありましたか？",
      "その中で、今考えると大きく変わったなと思うことはありますか？",
    ],
  },
  {
    num: "3",
    title: "印象深く覚えているニュース・出来事・事件・イベント",
    main: "テレビ・新聞・学校・職場・家族の会話などで見聞きして、今でもはっきり覚えている出来事やニュースはありますか？",
    subs: [
      "その出来事は、いつ頃のことでしたか？",
      "その時、自分は何歳くらいで、どこでそのニュースを知りましたか？",
      "その出来事を聞いた時、驚いた、怖かった、うれしかった、不思議だったなど、どんな気持ちになりましたか？",
      "その出来事のあと、世の中の雰囲気が変わったと感じましたか？",
      "今ふり返って、その出来事はどんな意味があったと思いますか？",
    ],
    hint: "大きなニュースや事件、自然災害、オリンピックや万博などのイベント、有名人、映画、音楽、流行など",
    hintItems: [
      "法律や制度の変化",
      "景気や物価に関する出来事",
      "テレビで何度も見た映像",
      "学校や職場でみんなが話題にしていたこと",
    ],
    extraSubs: [
      "若い頃に「これは新しい」「これはかっこいい」と感じた音楽・映画・俳優・流行はありますか？",
      "今見ると時代を感じるけれど、当時は印象に残っていたものはありますか？",
    ],
  },
  {
    num: "4",
    title: "これからを生きる子どもたちへ",
    main: "自分の人生をふり返って、孫に一つだけ伝えるなら、何を伝えたいですか？",
    subs: [
      "今の子どもたちを見て、うらやましいと思うことはありますか？",
      "逆に、大変そうだなと思うことはありますか？",
      "日本のいいところは何だと思いますか？",
      "昔よりよくなったと思うことは何ですか？",
      "自分が若かった頃の自分に言ってあげたいことはありますか？",
      "孫には、どんな大人になってほしいですか？",
    ],
  },
];

const sans =
  "'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif";

export default function Home() {
  return (
    <main
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        padding: "0 0 80px",
      }}
    >
      {/* ── Header ─────────────────────────────── */}
      <header
        style={{
          background: "var(--brown-deep)",
          padding: "28px 24px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: "var(--gold)",
            fontSize: "13px",
            letterSpacing: "0.2em",
            fontFamily: sans,
            fontWeight: 300,
            marginBottom: "6px",
          }}
        >
          みじかな人の生きてきた時代調べ
        </p>
        <h1
          style={{
            color: "oklch(97% 0.006 78)",
            fontSize: "clamp(22px, 6vw, 32px)",
            fontWeight: 700,
            letterSpacing: "0.08em",
            lineHeight: 1.4,
          }}
        >
          おじいさん・おばあさんへ
        </h1>
      </header>

      <div style={{ maxWidth: "640px", margin: "0 auto", padding: "0 20px" }}>

        {/* ── Intro ──────────────────────────────── */}
        <section style={{ padding: "36px 0 28px" }}>
          <p style={{ fontSize: "clamp(17px, 4.5vw, 20px)", lineHeight: 2, color: "var(--text)" }}>
            このページは、お孫さんの小学校の調べ学習のためのものです。
          </p>
          <p
            style={{
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 2,
              color: "var(--text-muted)",
              marginTop: "12px",
              fontFamily: sans,
              fontWeight: 300,
            }}
          >
            下のフォームに思い出したことを自由にお書きください。全部答えなくても大丈夫です。印刷して手書きで回答したい方は、PDFもご用意しています。
          </p>
        </section>

        <div style={{ height: "1px", background: "var(--border)", margin: "0 0 32px" }} />

        {/* ── Deadline ───────────────────────────── */}
        <section
          style={{
            background: "var(--bg-warm)",
            border: "1.5px solid var(--gold-light)",
            borderRadius: "8px",
            padding: "24px 28px",
            marginBottom: "32px",
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <div
            style={{
              flexShrink: 0,
              width: "4px",
              alignSelf: "stretch",
              borderRadius: "2px",
              background: "var(--gold)",
            }}
          />
          <div>
            <p
              style={{
                fontSize: "12px",
                letterSpacing: "0.2em",
                color: "var(--brown-light)",
                fontFamily: sans,
                fontWeight: 400,
                marginBottom: "4px",
              }}
            >
              提 出 締 め 切 り
            </p>
            <p
              style={{
                fontSize: "clamp(28px, 8vw, 40px)",
                fontWeight: 700,
                color: "var(--brown-deep)",
                lineHeight: 1.2,
                letterSpacing: "0.04em",
              }}
            >
              6月8日（月）
            </p>
          </div>
        </section>

        {/* ── Google Form Button (primary) ───────── */}
        <section style={{ marginBottom: "16px" }}>
          <a
            href="https://forms.gle/W9zbN33PiAkxPZ6K8"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
              width: "100%",
              padding: "22px 24px",
              background: "var(--brown-deep)",
              color: "oklch(97% 0.006 78)",
              borderRadius: "8px",
              fontSize: "clamp(18px, 5vw, 22px)",
              fontWeight: 700,
              letterSpacing: "0.06em",
              textDecoration: "none",
              lineHeight: 1.4,
              textAlign: "center",
            }}
          >
            <span>回答フォームを開く</span>
          </a>
          <p
            style={{
              textAlign: "center",
              marginTop: "10px",
              fontSize: "clamp(14px, 3.5vw, 16px)",
              color: "var(--text-muted)",
              fontFamily: sans,
              fontWeight: 300,
              lineHeight: 1.8,
            }}
          >
            ↑ こちらのフォームにご記入いただくと、そのままオンラインで提出できます。
          </p>
        </section>

        {/* ── PDF Download (secondary) ────────────── */}
        <section style={{ marginBottom: "48px", marginTop: "32px" }}>
          <a
            href="/kaito-sheet.pdf"
            download="回答シート.pdf"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              width: "100%",
              padding: "14px 20px",
              border: "1.5px solid var(--border)",
              borderRadius: "8px",
              color: "var(--brown-mid)",
              fontSize: "clamp(14px, 3.8vw, 16px)",
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.04em",
              background: "transparent",
              textAlign: "center",
            }}
          >
            <span>↓</span>
            <span>印刷用PDFをダウンロード</span>
          </a>
          <p
            style={{
              textAlign: "center",
              marginTop: "8px",
              fontSize: "12px",
              color: "var(--text-muted)",
              fontFamily: sans,
              fontWeight: 300,
            }}
          >
            手書きで回答したい方はこちら
          </p>
        </section>

        <div style={{ height: "1px", background: "var(--border)", margin: "0 0 40px" }} />

        {/* ── Question List ───────────────────────── */}
        <section style={{ marginBottom: "56px" }}>
          <h2
            style={{
              fontSize: "clamp(18px, 5vw, 22px)",
              fontWeight: 700,
              color: "var(--brown-deep)",
              letterSpacing: "0.06em",
              marginBottom: "6px",
            }}
          >
            質問リスト
          </h2>
          <p
            style={{
              fontSize: "clamp(14px, 3.5vw, 16px)",
              color: "var(--text-muted)",
              fontFamily: sans,
              fontWeight: 300,
              lineHeight: 1.8,
              marginBottom: "32px",
            }}
          >
            このリストの質問から、答えやすいものを選んで回答シートに書いてください。全部答えなくても大丈夫です。
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {themes.map((theme) => (
              <div
                key={theme.num}
                style={{
                  borderRadius: "8px",
                  overflow: "hidden",
                  border: "1px solid var(--border)",
                }}
              >
                {/* Theme header */}
                <div
                  style={{
                    background: "var(--brown-deep)",
                    padding: "14px 20px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      color: "var(--gold)",
                      fontFamily: sans,
                      fontWeight: 300,
                      letterSpacing: "0.2em",
                      marginBottom: "3px",
                    }}
                  >
                    テーマ {theme.num}
                  </p>
                  <p
                    style={{
                      fontSize: "clamp(16px, 4vw, 18px)",
                      fontWeight: 700,
                      color: "oklch(97% 0.006 78)",
                      lineHeight: 1.5,
                    }}
                  >
                    {theme.title}
                  </p>
                </div>

                {/* Main question */}
                <div
                  style={{
                    background: "var(--bg-warm)",
                    padding: "20px 20px 16px",
                    borderBottom: "1px solid var(--border)",
                  }}
                >
                  <p
                    style={{
                      fontSize: "11px",
                      fontFamily: sans,
                      fontWeight: 500,
                      color: "var(--brown-light)",
                      letterSpacing: "0.15em",
                      marginBottom: "10px",
                    }}
                  >
                    メイン質問
                  </p>
                  <p
                    style={{
                      fontSize: "clamp(16px, 4vw, 18px)",
                      lineHeight: 2,
                      color: "var(--text)",
                      fontWeight: 500,
                    }}
                  >
                    {theme.main}
                  </p>
                </div>

                {/* Sub questions */}
                <div style={{ background: "var(--bg)", padding: "16px 20px 20px" }}>
                  <p
                    style={{
                      fontSize: "11px",
                      fontFamily: sans,
                      fontWeight: 500,
                      color: "var(--brown-light)",
                      letterSpacing: "0.15em",
                      marginBottom: "12px",
                    }}
                  >
                    掘り下げ質問　（全部答えなくて大丈夫です）
                  </p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                    {theme.subs.map((q, i) => (
                      <li
                        key={i}
                        style={{
                          display: "flex",
                          gap: "10px",
                          alignItems: "flex-start",
                          fontSize: "clamp(15px, 3.8vw, 17px)",
                          lineHeight: 1.85,
                          color: "var(--text)",
                          fontFamily: sans,
                          fontWeight: 300,
                        }}
                      >
                        <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }}>・</span>
                        <span>{q}</span>
                      </li>
                    ))}
                  </ul>
                  {"hint" in theme && (
                    <div
                      style={{
                        marginTop: "16px",
                        padding: "12px 16px",
                        background: "var(--bg-notice)",
                        borderRadius: "6px",
                        fontSize: "clamp(13px, 3.2vw, 15px)",
                        color: "var(--text-muted)",
                        fontFamily: sans,
                        fontWeight: 300,
                        lineHeight: 1.8,
                      }}
                    >
                      <p style={{ marginBottom: "6px" }}>
                        <span style={{ fontWeight: 500, color: "var(--brown-light)" }}>ヒント：</span>
                        {(theme as typeof theme & { hint: string }).hint}
                      </p>
                      {"hintItems" in theme && (
                        <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                          {(theme as typeof theme & { hintItems: string[] }).hintItems.map((item, i) => (
                            <li key={i} style={{ display: "flex", gap: "8px" }}>
                              <span style={{ color: "var(--gold)", flexShrink: 0 }}>・</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                  {"extraSubs" in theme && (
                    <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                      {(theme as typeof theme & { extraSubs: string[] }).extraSubs.map((q, i) => (
                        <li
                          key={i}
                          style={{
                            display: "flex",
                            gap: "10px",
                            alignItems: "flex-start",
                            fontSize: "clamp(15px, 3.8vw, 17px)",
                            lineHeight: 1.85,
                            color: "var(--text)",
                            fontFamily: sans,
                            fontWeight: 300,
                          }}
                        >
                          <span style={{ color: "var(--gold)", flexShrink: 0, marginTop: "2px" }}>・</span>
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Footer note ────────────────────────── */}
        <p
          style={{
            textAlign: "center",
            fontSize: "12px",
            color: "var(--text-muted)",
            fontFamily: sans,
            fontWeight: 300,
            letterSpacing: "0.05em",
            lineHeight: 2,
          }}
        >
          ご不明な点はお孫さん、または保護者の方にお問い合わせください。
        </p>
      </div>
    </main>
  );
}
