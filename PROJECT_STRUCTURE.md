# 個人網站專案架構文檔

## 專案概述

這是一個現代北歐風格的個人作品集網站，採用 **Vite + Vue 3 + Vue Router** 技術棧，強調簡潔設計、自然色調和優秀的使用者體驗。

## 技術棧

- **前端框架**：Vue 3（Composition API）
- **打包工具**：Vite
- **路由管理**：Vue Router
- **樣式**：SCSS（Sass）
- **UI 框架**：Bootstrap 5（已安裝，可選使用）
- **圖標**：Bootstrap Icons

## 目錄結構

```
src/
├── assets/
│   ├── styles.scss          # 全域樣式與北歐風格設計系統
│   ├── hero.png             # 英雄圖片
│   ├── vite.svg
│   └── vue.svg
├── components/
│   ├── layout/
│   │   ├── Navbar.vue       # 導覽列元件
│   │   └── Footer.vue       # 頁尾元件
│   └── HeroSection.vue      # 英雄區塊元件
├── router/
│   └── router.js            # 路由配置
├── views/
│   ├── Home.vue             # 首頁
│   ├── About.vue            # 關於我頁面
│   ├── Portfolio.vue        # 作品集頁面
│   └── Contact.vue          # 聯絡我頁面
├── App.vue                  # 根元件
└── main.js                  # 應用程式入口
```

## 色調系統

### 主色調（灰階系列）

| 變數名 | 色碼 | 用途 |
|--------|------|------|
| `$color-white` | `#fafaf8` | 溫暖米白背景 |
| `$color-light-gray` | `#f0ede8` | 淺灰米背景 |
| `$color-medium-gray` | `#d4cfc8` | 中灰邊框/分隔線 |
| `$color-dark-gray` | `#8b8680` | 淺色文字 |
| `$color-charcoal` | `#3d3935` | 深色文字 |

### 點綴色（自然色系）

| 變數名 | 色碼 | 用途 |
|--------|------|------|
| `$color-forest-green` | `#2d5a3d` | 主要強調色 |
| `$color-sage-green` | `#7a9b8e` | 次要強調色 |
| `$color-warm-brown` | `#8b7355` | 溫暖棕色點綴 |
| `$color-soft-beige` | `#c9b8a8` | 柔和米色點綴 |

## 頁面說明

### 首頁 (Home.vue)

展示英雄區塊、最新作品和技能概覽。包含：
- 大型標題和行動呼籲按鈕
- 最新作品網格展示
- 技能分類列表

### 關於我 (About.vue)

個人介紹和職業經歷。包含：
- 個人簡介文字
- 統計數據卡片（經驗年數、完成專案數等）
- 時間軸展示教育與工作經歷

### 作品集 (Portfolio.vue)

完整的作品展示。包含：
- 分類篩選按鈕（全部、網頁設計、應用程式、其他）
- 作品卡片網格
- 懸停效果和詳情連結

### 聯絡我 (Contact.vue)

聯繫表單和聯絡資訊。包含：
- 聯絡方式（郵件、電話、地址）
- 社群媒體連結
- 聯繫表單

## 元件說明

### Navbar.vue

**功能**：
- 響應式導覽列
- 行動裝置漢堡選單
- 活躍頁面指示器

**Props**：無

### Footer.vue

**功能**：
- 多欄位頁尾佈局
- 導航連結
- 社群媒體連結
- 版權資訊

**Props**：無

### HeroSection.vue

**功能**：
- 可自訂的英雄區塊
- 背景漸層和裝飾圖形
- 行動呼籲按鈕

**Props**：
- `title` (String)：主標題
- `subtitle` (String)：副標題

## 樣式系統

### 字體系統

- **主字體**：系統無襯線字體（-apple-system, BlinkMacSystemFont 等）
- **備用字體**：Georgia, Garamond（襯線字體）

### 間距系統

使用 8px 基數的間距系統：
- `$spacing-xs`: 8px
- `$spacing-sm`: 16px
- `$spacing-md`: 24px
- `$spacing-lg`: 32px
- `$spacing-xl`: 48px
- `$spacing-2xl`: 64px
- `$spacing-3xl`: 96px

### 陰影系統

四級陰影深度：
- `$shadow-sm`：輕微陰影
- `$shadow-md`：中等陰影
- `$shadow-lg`：較深陰影
- `$shadow-xl`：最深陰影

### 過渡效果

- `$transition-fast`: 150ms
- `$transition-base`: 250ms
- `$transition-slow`: 350ms

## 路由配置

| 路徑 | 名稱 | 元件 |
|------|------|------|
| `/` | Home | Home.vue |
| `/about` | About | About.vue |
| `/portfolio` | Portfolio | Portfolio.vue |
| `/contact` | Contact | Contact.vue |

## 開發指南

### 安裝依賴

```bash
npm install
```

### 開發服務器

```bash
npm run dev
```

### 構建生產版本

```bash
npm run build
```

### 預覽構建結果

```bash
npm run preview
```

## 自訂指南

### 修改色調

編輯 `src/assets/styles.scss` 中的色彩變數：

```scss
$color-forest-green: #2d5a3d;  // 修改主要強調色
$color-charcoal: #3d3935;      // 修改文字顏色
```

### 新增頁面

1. 在 `src/views/` 中建立新的 `.vue` 檔案
2. 在 `src/router/router.js` 中新增路由
3. 在 `Navbar.vue` 中新增導航連結

### 新增元件

1. 在 `src/components/` 中建立新的 `.vue` 檔案
2. 在需要的地方匯入並使用

## 響應式設計

網站採用行動優先設計方法，主要斷點：
- **平板及以上**：768px
- **行動裝置**：< 768px

## 最佳實踐

1. **使用 SCSS 變數**：所有顏色、間距和過渡效果都應使用定義的變數
2. **保持一致性**：遵循既有的設計系統和命名約定
3. **響應式設計**：使用 `@media` 查詢確保所有裝置上的良好體驗
4. **語義化 HTML**：使用適當的 HTML 標籤提高可訪問性
5. **效能優化**：使用 Vue 3 的 Composition API 編寫高效的元件

## 常見問題

### Q: 如何新增新的作品到作品集？

A: 編輯 `src/views/Portfolio.vue` 中的 `projects` 陣列，新增物件即可。

### Q: 如何修改導覽列連結？

A: 編輯 `src/components/layout/Navbar.vue` 中的 `navbar-menu` 清單。

### Q: 如何自訂聯絡表單？

A: 編輯 `src/views/Contact.vue` 中的表單欄位和提交邏輯。

## 許可證

MIT License

---

**最後更新**：2026 年 4 月 1 日
