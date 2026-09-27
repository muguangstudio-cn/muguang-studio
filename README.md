# 沐光效率工作室

一个用原生 HTML、CSS 和 JavaScript 编写的亮色系个人服务网站，适配手机与电脑，不需要安装前端依赖或构建工具。页面逐项说明网站与页面、PPT、Word 文档、Excel 表格、Stata / Python 数据处理辅导和求职材料服务，包括可处理范围、适合提供的资料及交付注意事项；不公开展示统一价格。

## 本地预览

直接用浏览器打开 `index.html` 即可预览。也可以从项目目录运行任意静态文件服务器，例如：

```sh
python -m http.server 8000
```

然后访问 `http://localhost:8000`。

## 文件结构

```text
index.html          页面内容与结构
style.css           配色、插画、布局和响应式样式
script.js           移动导航、当前导航状态、QQ / 微信号复制
assets/favicon.svg  工作室图标
```

## 联系方式

网页公开展示 QQ：`2521784719` 和微信号：`Xhxh1722`，不展示邮箱。联系时间为每天 07:00–23:00，通常 2 小时内回复。联系区说明留言建议、资料脱敏和前期沟通安排；FAQ 说明报价如何沟通、交付文件、修改、加急、资料处理及服务边界。修改联系方式或联系时段后，请同时更新 `index.html` 联系区、FAQ 和页脚对应内容。

## 发布

本仓库已连接到 Cloudflare Pages GitHub 集成，项目名为 `muguang-studio`，生产分支为 `main`。Cloudflare 使用仓库根目录中的静态文件发布，不需要前端框架、依赖安装或 ZIP 手动上传。部署设置：

- Framework preset：None
- Build command：留空
- Build output directory：`.`（项目根目录，包含 `index.html`、`style.css`、`script.js` 和 `assets/`）
- Production branch：`main`

正式网址：[https://muguang-studio.pages.dev](https://muguang-studio.pages.dev)。对 `main` 的每次推送都会触发 Cloudflare 自动构建和发布。

## 后续修改

编辑 `index.html`、`style.css`、`script.js` 或 `assets/` 后，提交并推送到 GitHub 的 `main` 分支，Cloudflare Pages 会自动构建并发布新版本，无需再手动上传 ZIP。README 的后续提交也会触发部署，但不会改变访客看到的页面。
