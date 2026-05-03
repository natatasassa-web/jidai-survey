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
            fontFamily:
              "'Hiragino Sans', 'Hiragino Kaku Gothic ProN', sans-serif",
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

      <div
        style={{
          maxWidth: "640px",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* ── Intro ──────────────────────────────── */}
        <section style={{ padding: "36px 0 28px" }}>
          <p
            style={{
              fontSize: "clamp(17px, 4.5vw, 20px)",
              lineHeight: 2,
              color: "var(--text)",
            }}
          >
            このページは、お孫さんの小学校の調べ学習のためのものです。
          </p>
          <p
            style={{
              fontSize: "clamp(16px, 4vw, 18px)",
              lineHeight: 2,
              color: "var(--text-muted)",
              marginTop: "12px",
              fontFamily:
                "'Hiragino Sans', 'Hiragino Kaku Gothic ProN', sans-serif",
              fontWeight: 300,
            }}
          >
            下の「回答シートをダウンロード」ボタンを押して、シートを印刷し、思い出したことを自由にお書きください。全部答えなくても大丈夫です。
          </p>
        </section>

        {/* ── Divider ────────────────────────────── */}
        <div
          style={{
            height: "1px",
            background: "var(--border)",
            margin: "0 0 32px",
          }}
        />

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
                fontFamily:
                  "'Hiragino Sans', 'Hiragino Kaku Gothic ProN', sans-serif",
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

        {/* ── Main Download Button ────────────────── */}
        <section style={{ marginBottom: "40px" }}>
          <a
            href="/kaito-sheet.pdf"
            download="回答シート.pdf"
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
            <span style={{ fontSize: "1.2em" }}>↓</span>
            <span>回答シートをダウンロード</span>
          </a>
          <p
            style={{
              textAlign: "center",
              marginTop: "10px",
              fontSize: "13px",
              color: "var(--text-muted)",
              fontFamily:
                "'Hiragino Sans', 'Hiragino Kaku Gothic ProN', sans-serif",
              fontWeight: 300,
            }}
          >
            PDFファイルが開きます。印刷してお使いください。
          </p>
        </section>

        {/* ── How to use ─────────────────────────── */}
        <section
          style={{
            background: "var(--bg-notice)",
            borderRadius: "8px",
            padding: "28px 24px",
            marginBottom: "40px",
          }}
        >
          <h2
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "var(--brown-mid)",
              letterSpacing: "0.15em",
              fontFamily:
                "'Hiragino Sans', 'Hiragino Kaku Gothic ProN', sans-serif",
              marginBottom: "20px",
            }}
          >
            使い方
          </h2>

          {[
            {
              num: "1",
              title: "質問リストを受け取る",
              desc: "お孫さんが質問リストを持ってきます。見ながら記入してください。",
            },
            {
              num: "2",
              title: "回答シートに書く",
              desc: "思い出したことを自由に書いてください。全部答えなくて大丈夫です。",
            },
            {
              num: "3",
              title: "お孫さんに渡す",
              desc: `締め切りの6月8日（月）までに、お孫さんにお渡しください。`,
            },
          ].map((step) => (
            <div
              key={step.num}
              style={{
                display: "flex",
                gap: "16px",
                marginBottom: "20px",
                alignItems: "flex-start",
              }}
            >
              <div
                style={{
                  flexShrink: 0,
                  width: "32px",
                  height: "32px",
                  borderRadius: "50%",
                  background: "var(--brown-deep)",
                  color: "oklch(97% 0.006 78)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: 700,
                  fontFamily:
                    "'Hiragino Sans', 'Hiragino Kaku Gothic ProN', sans-serif",
                }}
              >
                {step.num}
              </div>
              <div>
                <p
                  style={{
                    fontSize: "clamp(16px, 4vw, 18px)",
                    fontWeight: 500,
                    color: "var(--text)",
                    marginBottom: "2px",
                  }}
                >
                  {step.title}
                </p>
                <p
                  style={{
                    fontSize: "clamp(14px, 3.5vw, 16px)",
                    color: "var(--text-muted)",
                    fontFamily:
                      "'Hiragino Sans', 'Hiragino Kaku Gothic ProN', sans-serif",
                    fontWeight: 300,
                    lineHeight: 1.8,
                  }}
                >
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </section>

        {/* ── Secondary: Question List ────────────── */}
        <section style={{ marginBottom: "16px" }}>
          <p
            style={{
              fontSize: "clamp(14px, 3.5vw, 16px)",
              color: "var(--text-muted)",
              fontFamily:
                "'Hiragino Sans', 'Hiragino Kaku Gothic ProN', sans-serif",
              fontWeight: 300,
              marginBottom: "12px",
            }}
          >
            質問リストも印刷してお使いいただけます。
          </p>
          <a
            href="/shitsumon-list.pdf"
            download="質問リスト.pdf"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
              width: "100%",
              padding: "18px 24px",
              border: "1.5px solid var(--border)",
              borderRadius: "8px",
              color: "var(--brown-mid)",
              fontSize: "clamp(16px, 4vw, 18px)",
              fontWeight: 500,
              textDecoration: "none",
              letterSpacing: "0.04em",
              background: "transparent",
            }}
          >
            <span>↓</span>
            <span>質問リストをダウンロード</span>
          </a>
        </section>

        {/* ── Footer note ────────────────────────── */}
        <p
          style={{
            marginTop: "56px",
            textAlign: "center",
            fontSize: "12px",
            color: "var(--text-muted)",
            fontFamily:
              "'Hiragino Sans', 'Hiragino Kaku Gothic ProN', sans-serif",
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
