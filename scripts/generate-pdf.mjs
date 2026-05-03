import puppeteer from "puppeteer";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const html = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    font-family: 'Hiragino Mincho ProN', 'Hiragino Mincho Pro', 'Yu Mincho', 'YuMincho', 'MS Mincho', serif;
    background: #ffffff;
    color: #2c1a0e;
    font-size: 13pt;
    line-height: 1.9;
  }

  .page {
    width: 210mm;
    height: 297mm;
    padding: 18mm 20mm 16mm 20mm;
    background: #ffffff;
    page-break-after: always;
    page-break-inside: avoid;
    position: relative;
    overflow: hidden;
  }

  .page.last {
    page-break-after: avoid;
  }

  /* ── Cover page ─────────────────────────────── */
  .cover-header {
    text-align: center;
    padding: 10mm 0 8mm;
    border-bottom: 2px solid #c8a87a;
  }

  .cover-kana {
    font-size: 11pt;
    color: #8b6340;
    font-family: 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif;
    font-weight: 300;
    letter-spacing: 0.1em;
    margin-bottom: 3mm;
  }

  .cover-title {
    font-size: 24pt;
    font-weight: 700;
    color: #3b1f0a;
    letter-spacing: 0.05em;
    line-height: 1.4;
  }

  .cover-subtitle {
    font-size: 16pt;
    font-weight: 500;
    color: #8b6340;
    margin-top: 3mm;
    letter-spacing: 0.15em;
  }

  .cover-notice {
    margin: 8mm 0 7mm;
    padding: 6mm 8mm;
    background: #f0e5d0;
    border-radius: 4px;
    border-left: 4px solid #c8a87a;
    font-size: 12pt;
    line-height: 2;
    color: #4a2f14;
    font-family: 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif;
    font-weight: 300;
  }

  .deadline-box {
    margin: 6mm 0;
    text-align: center;
    padding: 5mm 0;
    background: #3b1f0a;
    border-radius: 4px;
  }

  .deadline-label {
    font-size: 10pt;
    color: #c8a87a;
    font-family: 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif;
    font-weight: 300;
    letter-spacing: 0.2em;
  }

  .deadline-date {
    font-size: 22pt;
    font-weight: 700;
    color: #ffffff;
    letter-spacing: 0.05em;
    margin-top: 1mm;
  }

  .info-section {
    margin: 7mm 0 0;
  }

  .info-title {
    font-size: 10pt;
    font-family: 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif;
    font-weight: 500;
    color: #8b6340;
    letter-spacing: 0.2em;
    margin-bottom: 4mm;
  }

  .info-grid {
    display: grid;
    gap: 5mm;
  }

  .info-row {
    display: flex;
    align-items: baseline;
    gap: 4mm;
    padding-bottom: 2mm;
    border-bottom: 1.5px solid #d4bc96;
  }

  .info-label {
    font-size: 11pt;
    color: #5c3a1e;
    font-family: 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif;
    font-weight: 400;
    white-space: nowrap;
    min-width: 22mm;
  }

  .info-value {
    flex: 1;
    min-height: 7mm;
  }

  .responder-options {
    display: flex;
    gap: 6mm;
    align-items: center;
    font-size: 12pt;
    font-family: 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif;
  }

  .option-circle {
    display: inline-block;
    width: 14pt;
    height: 14pt;
    border: 1.5px solid #8b6340;
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 2mm;
  }

  .responder-other {
    flex: 1;
    border-bottom: 1.5px solid #d4bc96;
    min-height: 6mm;
  }

  /* ── Section pages ─────────────────────────── */
  .page-header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 6mm;
    font-size: 9pt;
    color: #b09070;
    font-family: 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif;
    font-weight: 300;
    border-bottom: 1px solid #d4bc96;
    padding-bottom: 2mm;
  }

  .section-header {
    background: #5c3a1e;
    color: #ffffff;
    padding: 4mm 6mm;
    border-radius: 3px;
    margin-bottom: 6mm;
  }

  .section-number {
    font-size: 9pt;
    font-family: 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif;
    font-weight: 300;
    color: #c8a87a;
    letter-spacing: 0.2em;
    margin-bottom: 1mm;
  }

  .section-title {
    font-size: 15pt;
    font-weight: 700;
    letter-spacing: 0.05em;
    line-height: 1.5;
  }

  .section-question {
    font-size: 13pt;
    line-height: 2;
    color: #3b1f0a;
    margin-bottom: 6mm;
    padding: 4mm 2mm;
    font-weight: 500;
  }

  .answer-hint {
    font-size: 9pt;
    color: #8b6340;
    font-family: 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif;
    font-weight: 300;
    margin-bottom: 4mm;
    padding-left: 1mm;
    letter-spacing: 0.05em;
  }

  .answer-lines {
    display: flex;
    flex-direction: column;
    gap: 0;
  }

  .answer-line {
    height: 14mm;
    border-bottom: 1.5px solid #c8b49a;
    width: 100%;
  }

  .subsection {
    margin-top: 8mm;
    padding-top: 5mm;
    border-top: 1px solid #d4bc96;
  }

  .subsection-label {
    font-size: 10pt;
    font-family: 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif;
    font-weight: 500;
    color: #5c3a1e;
    letter-spacing: 0.1em;
    margin-bottom: 4mm;
    background: #f0e5d0;
    display: inline-block;
    padding: 1.5mm 4mm;
    border-radius: 2px;
  }

  .corner-ornament {
    position: absolute;
    bottom: 12mm;
    right: 18mm;
    font-size: 9pt;
    color: #c8a87a;
    font-family: 'Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'Yu Gothic', sans-serif;
    font-weight: 300;
    letter-spacing: 0.1em;
  }
</style>
</head>
<body>

<!-- ══ PAGE 1: Cover ══════════════════════════════════════ -->
<div class="page">

  <div class="cover-header">
    <div class="cover-kana">みじかな人の生きてきた時代調べ</div>
    <div class="cover-title">回　答　シ　ー　ト</div>
    <div class="cover-subtitle">おじいさん・おばあさんへ</div>
  </div>

  <div class="cover-notice">
    このシートは、お孫さんの学校の調べ学習のためのものです。<br>
    全部の質問に答えなくても大丈夫です。<br>
    質問リストを見ながら、思い出したことを自由にお書きください。<br>
    書ける欄だけで十分です。
  </div>

  <div class="deadline-box">
    <div class="deadline-label">提出締め切り</div>
    <div class="deadline-date">6月8日（月）</div>
  </div>

  <div class="info-section">
    <div class="info-title">回　答　者　情　報</div>
    <div class="info-grid">

      <div class="info-row">
        <div class="info-label">お孫さんのお名前</div>
        <div class="info-value"></div>
      </div>

      <div class="info-row" style="align-items: center;">
        <div class="info-label">回答者</div>
        <div class="responder-options">
          <span><span class="option-circle"></span>祖父</span>
          <span><span class="option-circle"></span>祖母</span>
          <span style="white-space:nowrap;">その他（</span>
          <span class="responder-other"></span>
          <span>）</span>
        </div>
      </div>

      <div class="info-row">
        <div class="info-label">お名前</div>
        <div class="info-value"></div>
      </div>

      <div class="info-row" style="align-items:flex-start; padding-top:2mm;">
        <div class="info-label" style="padding-top:2mm;">お生まれの年</div>
        <div class="info-value" style="display:flex; flex-direction:column; gap:3mm;">
          <div style="display:flex; align-items:baseline; gap:2mm;">
            <span style="font-size:12pt; color:#5c3a1e; font-family:'Hiragino Sans','Hiragino Kaku Gothic ProN',sans-serif; white-space:nowrap;">昭和</span>
            <span style="width:28mm; border-bottom:1.5px solid #d4bc96; min-height:6mm; display:inline-block;"></span>
            <span style="font-size:12pt; color:#5c3a1e; font-family:'Hiragino Sans','Hiragino Kaku Gothic ProN',sans-serif; white-space:nowrap;">年</span>
          </div>
          <div style="display:flex; align-items:baseline; gap:2mm;">
            <span style="font-size:12pt; color:#5c3a1e; font-family:'Hiragino Sans','Hiragino Kaku Gothic ProN',sans-serif; white-space:nowrap;">西暦</span>
            <span style="width:28mm; border-bottom:1.5px solid #d4bc96; min-height:6mm; display:inline-block;"></span>
            <span style="font-size:12pt; color:#5c3a1e; font-family:'Hiragino Sans','Hiragino Kaku Gothic ProN',sans-serif; white-space:nowrap;">年生まれ</span>
          </div>
        </div>
      </div>

    </div>
  </div>

  <div class="corner-ornament">回答シート　みじかな人の生きてきた時代調べ</div>
</div>


<!-- ══ PAGE 2: 戦争や平和 ══════════════════════════════════ -->
<div class="page">
  <div class="page-header">
    <span>回答シート　みじかな人の生きてきた時代調べ</span>
  </div>

  <div class="section-header">
    <div class="section-number">テーマ 1</div>
    <div class="section-title">戦争や平和に関すること</div>
  </div>

  <div class="section-question">
    子どもの頃、戦争について、親・祖父母・親戚・近所の大人から聞いた話はありますか？<br>
    その中で、今でも覚えている話は何ですか？
  </div>

  <div class="answer-hint">思い出したことを自由にお書きください。書けるところだけで大丈夫です。</div>

  <div class="answer-lines">
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
  </div>
</div>


<!-- ══ PAGE 3: 社会や暮らしの変化 ═══════════════════════════ -->
<div class="page">
  <div class="page-header">
    <span>回答シート　みじかな人の生きてきた時代調べ</span>
  </div>

  <div class="section-header">
    <div class="section-number">テーマ 2</div>
    <div class="section-title">社会や暮らしの変化で、自分に大きな影響があったこと</div>
  </div>

  <div class="section-question">
    子どもの頃から大人になるまでの間に、社会や暮らしが大きく変わったと感じたことはありますか？<br>
    その変化は、自分の生活や考え方にどんな影響を与えましたか？
  </div>

  <div class="answer-hint">思い出したことを自由にお書きください。いくつでも、少しでも大丈夫です。</div>

  <div class="answer-lines">
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
  </div>
</div>


<!-- ══ PAGE 4: 印象深いニュース ═══════════════════════════════ -->
<div class="page">
  <div class="page-header">
    <span>回答シート　みじかな人の生きてきた時代調べ</span>
  </div>

  <div class="section-header">
    <div class="section-number">テーマ 3</div>
    <div class="section-title">印象深く覚えているニュース・出来事・事件・イベント</div>
  </div>

  <div class="section-question">
    テレビ・新聞・学校・職場・家族の会話などで見聞きして、<br>
    今でもはっきり覚えている出来事やニュースはありますか？
  </div>

  <div class="answer-hint">大きな事件、オリンピック、自然災害、流行など、何でも構いません。</div>

  <div class="answer-lines">
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
  </div>
</div>


<!-- ══ PAGE 5: メッセージ ════════════════════════════════════ -->
<div class="page last">
  <div class="page-header">
    <span>回答シート　みじかな人の生きてきた時代調べ</span>
  </div>

  <div class="section-header">
    <div class="section-number">テーマ 4</div>
    <div class="section-title">これからを生きる子どもたちへ</div>
  </div>

  <div class="section-question">
    自分の人生をふり返って、孫に一つだけ伝えるなら、何を伝えたいですか？
  </div>

  <div class="answer-hint">お気持ちのままに、自由にお書きください。</div>

  <div class="answer-lines">
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
    <div class="answer-line"></div>
  </div>

  <div class="subsection">
    <div class="subsection-label">孫へのメッセージ（自由にどうぞ）</div>
    <div class="answer-lines" style="margin-top: 3mm;">
      <div class="answer-line"></div>
      <div class="answer-line"></div>
      <div class="answer-line"></div>
      <div class="answer-line"></div>
      <div class="answer-line"></div>
      <div class="answer-line"></div>
    </div>
  </div>
</div>

</body>
</html>`;

const browser = await puppeteer.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-setuid-sandbox"],
});

const page = await browser.newPage();

// Load Google Fonts first
await page.setContent(html, { waitUntil: "domcontentloaded" });

const pdfBuffer = await page.pdf({
  format: "A4",
  printBackground: true,
  margin: { top: "0", right: "0", bottom: "0", left: "0" },
});

await browser.close();

const outPath = join(__dirname, "..", "public", "kaito-sheet.pdf");
writeFileSync(outPath, pdfBuffer);
console.log(`✓ PDF written to ${outPath}`);
