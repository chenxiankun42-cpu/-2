# EAT 互动页面

这是一个可直接部署到 GitHub Pages 的静态站点包。

## 目录

- `index.html`：页面结构
- `styles.css`：页面样式和动效
- `app.js`：选项切换、重选、分享等交互
- `assets/`：本页面用到的 PNG、JPG 和 SVG 素材

## 本地预览

直接打开 `index.html`，或通过任意静态文件服务器预览。

## GitHub Pages 部署

1. 新建 GitHub 仓库并上传此目录内的全部文件，保持 `index.html` 位于仓库根目录。
2. 进入仓库 **Settings → Pages**。
3. 在 **Build and deployment** 中选择 **Deploy from a branch**。
4. 选择包含这些文件的分支，并将目录设为 `/(root)`，保存即可。

所有资源均通过相对路径引用，因此部署后不依赖本机文件路径。
