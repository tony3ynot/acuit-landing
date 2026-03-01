# AcuIT Inc. Landing Page — Design Specification v2
## acuitlab.com | Dark Premium × Gold Accent

---

## 1. Design Philosophy

**Concept:** "Precision in the Dark" — 의료 데이터의 정밀함 + AI 기술의 미래지향성 + 프리미엄 골드 아이덴티티
**Tone:** Confident, Luxurious, Technical, Global
**Keywords:** Dark luxury tech, warm premium, gold on black
**Reference Sites:** Scale AI, Linear, Vercel, Stripe — 이들의 다크 테마 구조에 골드 톤을 입힌 형태

### 로고 분석
- "acu" = 다크 브라운/블랙 (소문자), "IT" = 골드 그라데이션 (대문자)
- Geometric Sans-Serif 워드마크, 심볼 없음
- 다크 배경에서는 "acu"를 웜 화이트로 반전, "IT"는 골드 그라데이션 유지

---

## 2. Color System

### Primary Palette (CSS Variables)

```css
:root {
  /* ══════════════════════════════════════
     BACKGROUNDS — 3단계 깊이 레이어
     골드가 돋보이려면 배경이 깊어야 함
     ══════════════════════════════════════ */
  --bg-primary:       #08090E;     /* 가장 깊은 배경 (hero, footer) */
  --bg-secondary:     #0E1017;     /* 섹션 교차 배경 */
  --bg-tertiary:      #15171F;     /* 카드/컨테이너 배경 */
  --bg-elevated:      #1C1E28;     /* hover 카드, elevated surface */

  /* ══════════════════════════════════════
     ACCENT: GOLD — 로고 기반 메인 컬러
     ══════════════════════════════════════ */
  --accent-primary:   #C9A84C;     /* 메인 골드 (로고 중간 톤) — CTA, 링크, 강조 */
  --accent-light:     #E8D48B;     /* 밝은 골드 — hover, 하이라이트, 링크 텍스트 */
  --accent-dark:      #A07C2A;     /* 진한 골드 — 그림자, 서브 요소 */
  --accent-glow:      rgba(201, 168, 76, 0.15);   /* glow effect */
  --accent-subtle:    rgba(201, 168, 76, 0.08);    /* 배경 틴트 */

  /* 골드 그라데이션 (로고와 동일한 방향감) */
  --gradient-gold:    linear-gradient(180deg, #E8D48B, #A07C2A);
  --gradient-gold-h:  linear-gradient(90deg, #E8D48B, #C9A84C, #A07C2A);
  --gradient-gold-r:  radial-gradient(circle, #E8D48B, #C9A84C, #A07C2A);

  /* ══════════════════════════════════════
     ACCENT: SECONDARY — 웜 뉴트럴
     골드와 자연스럽게 어울리는 보조 톤
     ══════════════════════════════════════ */
  --accent-secondary: #8B7355;     /* 웜 브라운 */

  /* ══════════════════════════════════════
     TEXT — 웜 톤 화이트/그레이 계열
     골드와 조화를 위해 쿨 그레이 대신 웜 그레이
     ══════════════════════════════════════ */
  --text-primary:     #F0EDE6;     /* 웜 화이트 (메인 텍스트) */
  --text-secondary:   #9B9484;     /* 웜 그레이 (서브텍스트, 캡션) */
  --text-tertiary:    #6B6459;     /* 웜 다크 그레이 (비활성, 힌트) */
  --text-accent:      #C9A84C;     /* 골드 (링크, 강조 텍스트) */

  /* ══════════════════════════════════════
     BORDER & DIVIDER
     ══════════════════════════════════════ */
  --border-subtle:    rgba(201, 168, 76, 0.06);
  --border-default:   rgba(255, 255, 255, 0.08);
  --border-hover:     rgba(201, 168, 76, 0.30);

  /* ══════════════════════════════════════
     GRADIENT PRESETS
     ══════════════════════════════════════ */
  --gradient-hero:    radial-gradient(ellipse 70% 50% at 50% 0%, rgba(201, 168, 76, 0.06), transparent),
                      radial-gradient(ellipse 50% 40% at 80% 20%, rgba(160, 124, 42, 0.04), transparent);
  --gradient-card:    linear-gradient(180deg, rgba(201, 168, 76, 0.02) 0%, transparent 100%);
}
```

### 사용 규칙
- **배경은 #000000 사용 금지** — `#08090E` ~ `#1C1E28` 범위 (약간 블루-블랙 언더톤)
- **텍스트는 #FFFFFF 사용 자제** — `#F0EDE6` (웜 화이트)가 골드와 더 자연스러움
- **골드 액센트는 아껴서** — 전체 화면의 10% 미만, CTA/링크/아이콘/라벨 포인트에만
- **섹션 구분:** `--bg-primary`와 `--bg-secondary`를 교차 사용하여 깊이감
- **골드 텍스트:** 작은 라벨/캡션에 사용 OK, 본문 텍스트에는 사용 금지 (가독성)

---

## 3. Typography

### Font Stack

```css
/* ── English: DM Sans (로고의 기하학적 산세리프와 조화) ── */
--font-display:  'DM Sans', sans-serif;       /* 헤드라인: 깔끔하고 절제된 기하학적 서체 */
--font-heading:  'DM Sans', sans-serif;       /* 섹션 제목 */
--font-body:     'DM Sans', sans-serif;       /* 본문 — 통일감 */
--font-mono:     'JetBrains Mono', monospace;  /* 숫자, 기술 데이터, 날짜 */

/* ── Korean: Pretendard ── */
--font-ko:       'Pretendard', sans-serif;     /* 한글 전체 */
```

### 왜 DM Sans인가
- 로고 서체가 Geometric Sans-Serif → DM Sans도 기하학적 산세리프 계열
- Inter/Roboto처럼 과도하게 범용적이지 않으면서, Syne처럼 너무 튀지 않음
- 로고가 주인공이 되고, 본문 서체는 조용히 받쳐주는 구조

### Google Fonts / CDN 로드

```html
<!-- Google Fonts -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">

<!-- Pretendard (한글) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css">
```

### Type Scale (Desktop)

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| Hero H1 (EN) | DM Sans | 64px (4rem) | 700 | 1.08 | -0.03em |
| Hero H1 (KO) | Pretendard | 52px (3.25rem) | 700 | 1.2 | -0.02em |
| Section H2 (EN) | DM Sans | 40px (2.5rem) | 700 | 1.15 | -0.02em |
| Section H2 (KO) | Pretendard | 36px (2.25rem) | 700 | 1.25 | -0.01em |
| Section H3 | DM Sans / Pretendard | 24px (1.5rem) | 600 | 1.3 | -0.01em |
| Body Large | DM Sans / Pretendard | 18px (1.125rem) | 400 | 1.7 | 0 |
| Body | DM Sans / Pretendard | 16px (1rem) | 400 | 1.7 | 0 |
| Caption | DM Sans / Pretendard | 14px (0.875rem) | 500 | 1.5 | 0.01em |
| Section Label | JetBrains Mono | 13px (0.8125rem) | 500 | 1 | 0.15em |
| Mono/Data | JetBrains Mono | 14–48px | 500 | 1.4 | 0.05em |
| Nav Link | DM Sans | 15px | 500 | 1 | 0.02em |
| Button | DM Sans | 15px | 600 | 1 | 0.03em |

### Mobile Type Scale
- Hero H1: 34~38px
- Section H2: 28~30px
- Body: 16px 유지

---

## 4. Spacing & Grid

### Grid System
```css
--max-width:     1200px;
--content-width: 1080px;
--gutter:        24px;

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--gutter);
}

/* Mobile: 4-col | Tablet: 8-col | Desktop: 12-col */
```

### Spacing Scale (8px base)
```css
--space-1:   4px;
--space-2:   8px;
--space-3:   12px;
--space-4:   16px;
--space-5:   20px;
--space-6:   24px;
--space-8:   32px;
--space-10:  40px;
--space-12:  48px;
--space-16:  64px;
--space-20:  80px;
--space-24:  96px;
--space-32:  128px;
```

### Section Padding
- Desktop: `120px 0` (다크 테마는 여백이 프리미엄 느낌의 80%를 결정)
- Tablet: `80px 0`
- Mobile: `64px 0`

---

## 5. Components

### 5-1. Navigation Bar

```
┌──────────────────────────────────────────────────────────────┐
│  [acuIT Logo]    About  Technology  Product  Team  [EN|KO]  [Contact →]  │
└──────────────────────────────────────────────────────────────┘
```

**스타일:**
```css
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  height: 72px;                               /* mobile: 60px */
  background: rgba(8, 9, 14, 0.8);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid transparent;
  z-index: 100;
  transition: border-color 0.3s ease;
}
.navbar.scrolled {
  border-bottom-color: var(--border-default);
}
```

**로고 (다크 배경용):**
```css
.logo-acu {
  color: var(--text-primary);                  /* #F0EDE6 웜 화이트 */
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 24px;
}
.logo-it {
  background: var(--gradient-gold);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 24px;
  text-transform: uppercase;
}
```

**Nav Links:**
```css
.nav-link {
  color: var(--text-secondary);
  font-size: 15px;
  font-weight: 500;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}
.nav-link:hover {
  color: var(--text-primary);
}
/* 밑줄 슬라이드 애니메이션 */
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--accent-primary);
  transition: width 0.3s ease;
}
.nav-link:hover::after {
  width: 100%;
}
```

**CTA 버튼 (Ghost):**
```css
.nav-cta {
  border: 1px solid var(--border-default);
  color: var(--text-primary);
  padding: 8px 20px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
}
.nav-cta:hover {
  border-color: var(--accent-primary);
  box-shadow: 0 0 16px var(--accent-glow);
}
```

**언어 토글:** [EN|KO] pill 형태, 작은 사이즈, `--text-tertiary` 기본

---

### 5-2. Hero Section

```
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│              [은은한 골드 radial glow 배경]                     │
│                                                              │
│        ╭─────────────────────────────╮                        │
│        │ ✦  Backed by SNU RISE      │  ← pill 배지            │
│        ╰─────────────────────────────╯                        │
│                                                              │
│        Redefining Global                                     │
│        Healthcare Access.               ← DM Sans 700, 64px  │
│                                                              │
│        AI 기술로 전 세계 환자와                                 │
│        한국 의료를 연결합니다.             ← Pretendard, 서브    │
│                                                              │
│        [Our Product →]    [Get in Touch]                     │
│         ↑ gold filled       ↑ ghost                          │
│                                                              │
│        ── Powered by ──                                      │
│        [Flutter]  [FastAPI]  [AWS]  [LLM]  ← tech 아이콘      │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Hero 배경:**
```css
.hero {
  min-height: 100vh;
  background: var(--bg-primary);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
}
/* 골드 glow — 상단 중앙에서 은은하게 퍼짐 */
.hero::before {
  content: '';
  position: absolute;
  top: -20%;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 60%;
  background: radial-gradient(ellipse, rgba(201, 168, 76, 0.07), transparent 70%);
  pointer-events: none;
}
/* 우측 상단 보조 glow */
.hero::after {
  content: '';
  position: absolute;
  top: 10%;
  right: 10%;
  width: 40%;
  height: 40%;
  background: radial-gradient(ellipse, rgba(160, 124, 42, 0.04), transparent 70%);
  pointer-events: none;
}
```

**Pill 배지 (SNU RISE):**
```css
.badge-pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: var(--accent-subtle);           /* rgba(201, 168, 76, 0.08) */
  border: 1px solid rgba(201, 168, 76, 0.15);
  border-radius: 100px;
  font-size: 13px;
  font-weight: 500;
  color: var(--accent-light);                 /* #E8D48B */
  letter-spacing: 0.03em;
  margin-bottom: 32px;
}
.badge-pill .icon {
  font-size: 10px;
  color: var(--accent-primary);
}
```

**CTA 버튼들:**
```css
/* Primary: 골드 그라데이션 filled */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--gradient-gold-h);
  color: #08090E;
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 14px 28px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}
.btn-primary:hover {
  box-shadow: 0 0 24px rgba(201, 168, 76, 0.25),
              0 4px 12px rgba(0, 0, 0, 0.3);
  transform: translateY(-1px);
}

/* Secondary: Ghost */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: transparent;
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 15px;
  font-weight: 600;
  letter-spacing: 0.03em;
  padding: 14px 28px;
  border: 1px solid var(--border-default);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
}
.btn-secondary:hover {
  border-color: var(--accent-primary);
  color: var(--accent-light);
}
```

**Tech 아이콘 strip:**
```css
.tech-strip {
  display: flex;
  align-items: center;
  gap: 32px;
  justify-content: center;
  margin-top: 64px;
}
.tech-strip img {
  height: 24px;
  opacity: 0.35;
  filter: grayscale(100%) brightness(2);       /* monochrome white */
  transition: opacity 0.3s ease;
}
.tech-strip img:hover {
  opacity: 0.7;
}
.tech-strip .divider-text {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-tertiary);
  letter-spacing: 0.15em;
  text-transform: uppercase;
}
```

---

### 5-3. About Section

```
┌──────────────────────────────────────────────────────────────┐
│  bg: --bg-secondary                                          │
│                                                              │
│  ABOUT US  ← 섹션 라벨 (골드, 모노 폰트)                      │
│                                                              │
│  We build AI infrastructure                                  │
│  for global medical tourism.                    ← H2         │
│                                                              │
│  ┌──── 왼쪽 55% ────┐    ┌──── 오른쪽 45% ────┐              │
│  │                   │    │                     │              │
│  │  어큐아이티는      │    │   ┌───────────────┐ │              │
│  │  2026년 서울대     │    │   │ 추상 기하학     │ │              │
│  │  출신 2인이 설립한  │    │   │ 연결 비주얼     │ │              │
│  │  AI 의료관광       │    │   │ (골드 라인 아트) │ │              │
│  │  스타트업입니다.    │    │   └───────────────┘ │              │
│  │                   │    │                     │              │
│  │  미션/비전 텍스트   │    │                     │              │
│  │  ...              │    │                     │              │
│  └───────────────────┘    └─────────────────────┘              │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**섹션 라벨 (전체 섹션 공통):**
```css
.section-label {
  font-family: var(--font-mono);              /* JetBrains Mono */
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--accent-primary);               /* #C9A84C 골드 */
  margin-bottom: 16px;
}
```

**오른쪽 비주얼:** CSS로 구현 가능한 추상 패턴 추천
- 방법 1: SVG 노드 그래프 (점 + 선 연결) — 골드 컬러 stroke, 낮은 opacity
- 방법 2: CSS conic-gradient + border로 만든 기하학적 원형/육각형
- 방법 3: 심플하게 큰 따옴표(") 안에 미션 문구를 넣은 typographic 비주얼

---

### 5-4. What We Build (Product)

```
┌──────────────────────────────────────────────────────────────┐
│  bg: --bg-primary                                            │
│                                                              │
│  PRODUCT                                                     │
│  Our flagship platform.                                      │
│                                                              │
│  ┌─── glassmorphism + gold border 카드 ─────────────────┐    │
│  │                                                       │    │
│  │  [앱 아이콘]  MIIN (미인)                              │    │
│  │  AI-Powered Global Medical Tourism Platform           │    │
│  │                                                       │    │
│  │  외국인 환자를 위한 AI 기반 의료관광 플랫폼.             │    │
│  │  시맨틱 검색, 가격 비교, 검증 리뷰, 다국어 지원.        │    │
│  │                                                       │    │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐ │    │
│  │  │ 🔍 AI    │ │ 💰 Price │ │ ✓ Review │ │ 🌐 5     │ │    │
│  │  │ Semantic │ │ Cross-   │ │ Verified │ │ Languages│ │    │
│  │  │ Search   │ │ Check    │ │ System   │ │ Native   │ │    │
│  │  └──────────┘ └──────────┘ └──────────┘ └──────────┘ │    │
│  │                                                       │    │
│  │  [Visit MIIN →]                                       │    │
│  │                                                       │    │
│  └───────────────────────────────────────────────────────┘    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Glassmorphism 카드 + 골드 border:**
```css
.product-card {
  position: relative;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  padding: 56px;
  backdrop-filter: blur(20px);
  overflow: hidden;
}
/* 골드 그라데이션 보더 */
.product-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 20px;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(232, 212, 139, 0.3),
    rgba(201, 168, 76, 0.1),
    rgba(160, 124, 42, 0.2)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
```

**Feature 미니카드 (4열 그리드):**
```css
.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);     /* mobile: repeat(2, 1fr) */
  gap: 16px;
  margin-top: 32px;
}
.feature-mini {
  background: var(--bg-tertiary);
  border: 1px solid var(--border-subtle);
  border-radius: 12px;
  padding: 20px;
  text-align: center;
}
.feature-mini .icon {
  font-size: 24px;
  margin-bottom: 8px;
}
.feature-mini .title {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-primary);
}
.feature-mini .desc {
  font-size: 12px;
  color: var(--text-secondary);
  margin-top: 4px;
}
```

---

### 5-5. Technology Section

```
┌──────────────────────────────────────────────────────────────┐
│  bg: --bg-secondary                                          │
│                                                              │
│  TECHNOLOGY                                                  │
│  Engineered for scale.                                       │
│                                                              │
│  ┌────────────────┐  ┌────────────────┐                      │
│  │ ◇ Frontend      │  │ ◇ Backend      │                      │
│  │   Flutter       │  │   FastAPI      │                      │
│  │   iOS & Android │  │   Async Python │                      │
│  │   cross-plat.   │  │   high perf.   │                      │
│  └────────────────┘  └────────────────┘                      │
│  ┌────────────────┐  ┌────────────────┐                      │
│  │ ◇ Infrastructure│  │ ◇ AI / ML      │                      │
│  │   AWS Fargate   │  │   LLM-based    │                      │
│  │   Serverless    │  │   NLP Semantic  │                      │
│  │   Auto-scaling  │  │   Search Engine │                      │
│  └────────────────┘  └────────────────┘                      │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Tech 카드:**
```css
.tech-card {
  background: var(--bg-tertiary);
  border: 1px solid var(--border-default);
  border-radius: 14px;
  padding: 32px;
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.tech-card:hover {
  border-color: var(--border-hover);           /* 골드 30% */
  box-shadow: 0 0 30px var(--accent-glow);     /* 골드 glow */
  transform: translateY(-3px);
}
.tech-card .icon {
  font-size: 20px;
  color: var(--accent-primary);               /* 골드 아이콘 */
  margin-bottom: 16px;
}
.tech-card .tech-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 4px;
}
.tech-card .tech-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.5;
}
```

- 2×2 그리드 (desktop), 1열 (mobile)
- 아이콘: monoline diamond (◇) 또는 해당 기술 심플 아이콘 — 골드 컬러

---

### 5-6. Team Section

```
┌──────────────────────────────────────────────────────────────┐
│  bg: --bg-primary                                            │
│                                                              │
│  TEAM                                                        │
│  Built by SNU engineers.                                     │
│                                                              │
│     ┌──────────────────┐       ┌──────────────────┐          │
│     │                  │       │                  │          │
│     │  [Photo]         │       │  [Photo]         │          │
│     │  grayscale →     │       │  grayscale →     │          │
│     │  color on hover  │       │  color on hover  │          │
│     │                  │       │                  │          │
│     │  주재영           │       │  박주용           │          │
│     │  Jaeyoung Ju     │       │  Juyong Park     │          │
│     │  CEO & Co-founder│       │  Director        │          │
│     │                  │       │                  │          │
│     │  SNU Liberal     │       │  SNU Business    │          │
│     │  Studies         │       │  Admin + AI      │          │
│     │  (EE + Business) │       │  Joint Major     │          │
│     │                  │       │                  │          │
│     └──────────────────┘       └──────────────────┘          │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**프로필 카드:**
```css
.team-card {
  background: var(--bg-tertiary);
  border: 1px solid var(--border-default);
  border-radius: 16px;
  padding: 32px;
  text-align: center;
  transition: border-color 0.3s ease;
}
.team-card:hover {
  border-color: var(--border-hover);
}
```

**사진 효과 (grayscale → color):**
```css
.team-photo {
  width: 120px;
  height: 120px;
  border-radius: 50%;                         /* 원형 */
  object-fit: cover;
  filter: grayscale(100%) brightness(0.85);
  transition: filter 0.5s ease;
  margin-bottom: 20px;
}
.team-card:hover .team-photo {
  filter: grayscale(0%) brightness(1);
}
```

**텍스트 계층:**
```css
.team-name {
  font-size: 20px;
  font-weight: 700;
  color: var(--text-primary);
}
.team-name-en {
  font-size: 14px;
  color: var(--text-secondary);
  margin-top: 2px;
}
.team-role {
  font-size: 14px;
  font-weight: 600;
  color: var(--text-accent);                  /* 골드! */
  margin-top: 8px;
}
.team-edu {
  font-size: 13px;
  color: var(--text-secondary);
  margin-top: 8px;
  line-height: 1.4;
}
```

---

### 5-7. Milestones / Timeline

```
┌──────────────────────────────────────────────────────────────┐
│  bg: --bg-secondary                                          │
│                                                              │
│  MILESTONES                                                  │
│  Our journey so far.                                         │
│                                                              │
│       ●━━━━ 2026. 01  Company Founded                        │
│       ┃                AcuIT Inc. established                │
│       ┃                                                      │
│       ●━━━━ 2026. 01  SNU RISE Selected                      │
│       ┃                ₩10M grant awarded                    │
│       ┃                                                      │
│       ◐━━━━ 2026 Q1   MVP Launch                             │
│       ┃                Currently in progress                 │
│       ┃                                                      │
│       ○╌╌╌╌ 2026 Q2   Full Service Launch                    │
│                        Open Beta planned                     │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**타임라인 스타일:**
```css
.timeline {
  position: relative;
  padding-left: 40px;
}
/* 수직 라인 */
.timeline::before {
  content: '';
  position: absolute;
  left: 8px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: linear-gradient(
    180deg,
    var(--accent-primary),
    var(--accent-dark),
    var(--border-default)
  );
}

.timeline-item {
  position: relative;
  margin-bottom: 48px;
}

/* 완료 마커: 골드 filled */
.timeline-marker {
  position: absolute;
  left: -36px;
  top: 4px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--accent-primary);
  border: 2px solid var(--accent-light);
  box-shadow: 0 0 12px var(--accent-glow);
}

/* 진행 중 마커: half-filled */
.timeline-marker.in-progress {
  background: linear-gradient(180deg, var(--accent-primary) 50%, transparent 50%);
  border: 2px solid var(--accent-primary);
}

/* 예정 마커: 빈 원 */
.timeline-marker.planned {
  background: transparent;
  border: 2px solid var(--text-tertiary);
  box-shadow: none;
}

.timeline-date {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--text-tertiary);
  letter-spacing: 0.08em;
  margin-bottom: 4px;
}
.timeline-title {
  font-size: 18px;
  font-weight: 600;
  color: var(--text-primary);
}
.timeline-desc {
  font-size: 14px;
  color: var(--text-secondary);
  margin-top: 4px;
}
```

---

### 5-8. Partners / Backed By

```
┌──────────────────────────────────────────────────────────────┐
│  bg: --bg-primary                                            │
│                                                              │
│  BACKED BY                                                   │
│                                                              │
│       [SNU RISE Logo]     [추후 로고]     [추후 로고]          │
│                                                              │
│  로고: monochrome, opacity 0.4 → hover시 0.8                  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

```css
.partner-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  flex-wrap: wrap;
}
.partner-logo {
  height: 40px;
  opacity: 0.4;
  filter: grayscale(100%) brightness(2);       /* monochrome white */
  transition: opacity 0.3s ease;
}
.partner-logo:hover {
  opacity: 0.8;
}
```

---

### 5-9. Contact / CTA Section

```
┌──────────────────────────────────────────────────────────────┐
│  bg: --bg-secondary                                          │
│                                                              │
│  ┌─── gradient gold border 카드 ──────────────────────┐      │
│  │                                                     │      │
│  │  Let's build the future of                          │      │
│  │  healthcare, together.                   ← H2       │      │
│  │                                                     │      │
│  │  의료의 미래를 함께 만들어갑니다.                      │      │
│  │  파트너십, 투자, 채용 등 문의를 환영합니다.            │      │
│  │                                                     │      │
│  │  [Get in Touch →]                                   │      │
│  │                                                     │      │
│  │  hello@acuitlab.com                                 │      │
│  │                                                     │      │
│  └─────────────────────────────────────────────────────┘      │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Gradient border CTA 카드:**
```css
.cta-card {
  position: relative;
  background: var(--bg-tertiary);
  border-radius: 24px;
  padding: 72px 56px;
  text-align: center;
  overflow: hidden;
}
/* 골드 그라데이션 보더 */
.cta-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 24px;
  padding: 1px;
  background: linear-gradient(
    135deg,
    rgba(232, 212, 139, 0.4),
    rgba(201, 168, 76, 0.1),
    rgba(232, 212, 139, 0.25)
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
/* 카드 내부 골드 glow */
.cta-card::after {
  content: '';
  position: absolute;
  top: -50%;
  left: 50%;
  transform: translateX(-50%);
  width: 60%;
  height: 50%;
  background: radial-gradient(ellipse, rgba(201, 168, 76, 0.06), transparent 70%);
  pointer-events: none;
}

.cta-email {
  font-family: var(--font-mono);
  font-size: 16px;
  color: var(--text-accent);                   /* 골드 */
  letter-spacing: 0.03em;
  margin-top: 24px;
}
```

---

### 5-10. Footer

```
┌──────────────────────────────────────────────────────────────┐
│  bg: --bg-primary                                            │
│  border-top: 1px solid --border-default                      │
│                                                              │
│  [acuIT Logo]                                                │
│                                                              │
│  About   Technology   Product   Team   Contact               │
│                                                              │
│  ─────────────────────────────────────────────               │
│                                                              │
│  © 2026 AcuIT Inc. All rights reserved.                      │
│                                         [LinkedIn] [GitHub]  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

```css
.footer {
  background: var(--bg-primary);
  border-top: 1px solid var(--border-default);
  padding: 48px 0 32px;
}
.footer-links a {
  color: var(--text-secondary);
  font-size: 14px;
  transition: color 0.3s ease;
}
.footer-links a:hover {
  color: var(--text-primary);
}
.footer-copyright {
  font-size: 13px;
  color: var(--text-tertiary);
  margin-top: 24px;
}
.footer-social svg {
  width: 20px;
  height: 20px;
  fill: var(--text-tertiary);
  transition: fill 0.3s ease;
}
.footer-social svg:hover {
  fill: var(--accent-primary);
}
```

---

## 6. Animation & Interaction

### Scroll Reveal (IntersectionObserver)

```css
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1),
              transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

/* 순차 등장 (카드 그리드용) */
.reveal-stagger:nth-child(1) { transition-delay: 0ms; }
.reveal-stagger:nth-child(2) { transition-delay: 100ms; }
.reveal-stagger:nth-child(3) { transition-delay: 200ms; }
.reveal-stagger:nth-child(4) { transition-delay: 300ms; }
```

```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

### 숫자 카운트업 (Market 데이터 표시 시)
```javascript
function countUp(el, target, duration = 2000, prefix = '', suffix = '') {
  let start = null;
  const step = (timestamp) => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    el.textContent = prefix + Math.floor(eased * target).toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// 사용 예: countUp(el, 128, 2500, '$', 'B')
```

### Hover Effects 요약
| 요소 | Hover 동작 |
|------|-----------|
| 카드 (tech/team) | `translateY(-3px)` + 골드 border + 골드 glow shadow |
| CTA Primary | 밝아짐 + 골드 glow box-shadow |
| CTA Secondary | border → 골드, 텍스트 → 밝은 골드 |
| Nav Link | 텍스트 밝아짐 + 골드 밑줄 슬라이드 |
| 팀 사진 | grayscale → color |
| 파트너 로고 | opacity 0.4 → 0.8 |
| Footer 아이콘 | fill → 골드 |

### Smooth Scroll
```css
html {
  scroll-behavior: smooth;
  scroll-padding-top: 80px;   /* navbar 높이만큼 오프셋 */
}
```

---

## 7. Responsive Breakpoints

```css
/* Mobile first */
@media (min-width: 640px)  { /* sm: Landscape phone */ }
@media (min-width: 768px)  { /* md: Tablet          */ }
@media (min-width: 1024px) { /* lg: Desktop          */ }
@media (min-width: 1280px) { /* xl: Large desktop    */ }
```

### Mobile 핵심 변경
- **Nav:** 햄버거 메뉴 → full-screen overlay (blur 배경, 골드 accent)
- **Hero H1:** 34~38px로 축소, 텍스트 좌측 정렬 (모바일은 중앙 정렬보다 좌측이 가독성 좋음)
- **그리드:** 2-col / 4-col → 1-col 스택
- **섹션 패딩:** 120px → 64px
- **Product 카드:** padding 56px → 32px
- **Feature 그리드:** 4열 → 2열
- **CTA 카드:** padding 72px → 40px
- **타임라인:** 왼쪽 정렬 유지, 여전히 잘 작동

---

## 8. 한/영 병행 전략

### 추천: JS 토글 (초기) → URL 분리 (확장 시)

```html
<!-- 동일 페이지에서 토글 -->
<h1>
  <span data-lang="en">Redefining Global Healthcare Access.</span>
  <span data-lang="ko" hidden>글로벌 헬스케어 접근성을 재정의합니다.</span>
</h1>
```

```javascript
function setLang(lang) {
  document.querySelectorAll('[data-lang]').forEach(el => {
    el.hidden = el.dataset.lang !== lang;
  });
  document.documentElement.lang = lang;
  localStorage.setItem('acuit-lang', lang);
  
  // 언어 토글 버튼 상태 업데이트
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

// 초기 로드 시 저장된 언어 또는 브라우저 언어 감지
const savedLang = localStorage.getItem('acuit-lang');
const browserLang = navigator.language.startsWith('ko') ? 'ko' : 'en';
setLang(savedLang || browserLang);
```

**언어 토글 UI:**
```css
.lang-toggle {
  display: flex;
  border: 1px solid var(--border-default);
  border-radius: 6px;
  overflow: hidden;
}
.lang-btn {
  padding: 4px 10px;
  font-size: 12px;
  font-weight: 600;
  color: var(--text-tertiary);
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}
.lang-btn.active {
  color: var(--accent-primary);
  background: var(--accent-subtle);
}
```

---

## 9. Cloudflare Pages 배포

### 프로젝트 구조
```
acuit-landing/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   │   ├── logo-dark.svg          (다크 배경용: acu=웜화이트, IT=골드)
│   │   ├── logo-light.svg         (라이트 배경용: 원본)
│   │   ├── og-image.jpg           (1200×630, SNS 공유용)
│   │   ├── team-jy.jpg
│   │   ├── team-jyp.jpg
│   │   └── snu-rise-logo.svg
│   └── favicon/
│       ├── favicon.ico
│       ├── favicon-32x32.png
│       └── apple-touch-icon.png
├── _headers
├── _redirects
└── README.md
```

### 배포 순서

1. **GitHub Repo 생성 & 푸시**
   ```bash
   git init acuit-landing
   cd acuit-landing
   # ... 파일 작성 ...
   git add .
   git commit -m "Initial landing page"
   git remote add origin https://github.com/acuit/acuit-landing.git
   git push -u origin main
   ```

2. **Cloudflare Pages 연결**
   - Cloudflare Dashboard → Pages → Create a project → Connect to Git
   - GitHub repo 선택
   - Build settings:
     - Framework preset: `None`
     - Build command: (비워두기)
     - Build output directory: `/`
   - Deploy

3. **커스텀 도메인**
   - Pages 프로젝트 → Custom domains → `acuitlab.com` 추가
   - `www.acuitlab.com` → `acuitlab.com` redirect도 설정
   - Cloudflare DNS에서 자동 CNAME 생성, SSL 자동

4. **자동 배포:** `main` push시 자동 빌드 & 배포

### _headers
```
/*
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  Referrer-Policy: strict-origin-when-cross-origin

/assets/*
  Cache-Control: public, max-age=31536000, immutable

/*.html
  Cache-Control: public, max-age=0, must-revalidate
```

### _redirects
```
/www.acuitlab.com/* https://acuitlab.com/:splat 301
```

---

## 10. SEO & Meta Tags

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <title>AcuIT — AI-Powered Global Healthcare Platform</title>
  <meta name="description" content="AcuIT builds AI infrastructure for global medical tourism. Connecting international patients with Korea's world-class healthcare.">
  
  <!-- Open Graph -->
  <meta property="og:title" content="AcuIT — AI-Powered Global Healthcare Platform">
  <meta property="og:description" content="Connecting international patients with Korea's world-class healthcare through AI.">
  <meta property="og:image" content="https://acuitlab.com/assets/images/og-image.jpg">
  <meta property="og:url" content="https://acuitlab.com">
  <meta property="og:type" content="website">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="AcuIT — AI-Powered Global Healthcare Platform">
  <meta name="twitter:description" content="Connecting international patients with Korea's world-class healthcare through AI.">
  <meta name="twitter:image" content="https://acuitlab.com/assets/images/og-image.jpg">
  
  <!-- Favicon -->
  <link rel="icon" href="/assets/favicon/favicon.ico">
  <link rel="apple-touch-icon" href="/assets/favicon/apple-touch-icon.png">
  
  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.min.css">
  
  <!-- CSS -->
  <link rel="stylesheet" href="/css/style.css">
</head>
```

---

## 11. Performance Checklist

- [ ] 이미지: WebP, lazy loading (`loading="lazy"`)
- [ ] 폰트: `display=swap` + preconnect (위 코드에 포함)
- [ ] CSS: 단일 파일, 미니파이
- [ ] JS: 단일 파일, defer, 미니파이
- [ ] Lighthouse 목표: Performance 95+, Accessibility 95+
- [ ] OG 이미지: 1200×630px, WebP or JPG
- [ ] Favicon: .ico + apple-touch-icon
- [ ] 다크 테마 contrast ratio:
  - `#F0EDE6` on `#08090E` ≈ 16:1 ✅ (AAA)
  - `#9B9484` on `#08090E` ≈ 6.5:1 ✅ (AA)
  - `#C9A84C` on `#08090E` ≈ 7.8:1 ✅ (AA)
  - `#E8D48B` on `#08090E` ≈ 11:1 ✅ (AAA)

---

## 12. Reference Sites

| 사이트 | 참고 포인트 |
|--------|------------|
| [scale.com](https://scale.com) | 다크 테마 + 데이터 비주얼, 모션 |
| [linear.app](https://linear.app) | 다크 UI, glassmorphism, 미니멀 |
| [vercel.com](https://vercel.com) | 다크 테마 + 기술 스타트업 구조 |
| [stripe.com](https://stripe.com) | 여백, 타이포그래피, 카드 시스템 |
| [anthropic.com](https://anthropic.com) | 미니멀 + 신뢰감 레이아웃 |
| [deepgram.com](https://deepgram.com) | AI 스타트업 다크 테마 교과서 |
| [composio.dev](https://composio.dev) | 다크 + 모션 + startup 에너지 |

---

## Summary

**골드 × 다크 = 프리미엄 AI 헬스테크** 아이덴티티.

3가지만 기억하면 됩니다:
1. **다크 배경의 깊이** — #08090E ~ #1C1E28 레이어로 depth 표현
2. **골드는 10% 미만** — CTA, 라벨, 아이콘, 링크에만. 많으면 싸 보임
3. **여백이 럭셔리** — 섹션 간 120px, 카드 내부 여유롭게. 다크 테마에서 여백 = 고급감
