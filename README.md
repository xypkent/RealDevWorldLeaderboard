# RealDevWorld Leaderboard

一个基于学术论文《RealDevWorld: Benchmarking Production-Ready Software Engineering》的AI代理软件开发能力评估排行榜平台。

[![Website](https://img.shields.io/badge/Website-Live-brightgreen)](https://your-github-username.github.io/RealDevWorld-Leaderboard)
[![Dataset](https://img.shields.io/badge/Dataset-HuggingFace-yellow)](https://huggingface.co/datasets/stellaHsr-mm/RealDevBench)
[![Agent](https://img.shields.io/badge/Agent-AppEvalPilot-blue)](https://github.com/tanghaom/AppEvalPilot)

## 📖 项目概述

RealDevWorld Leaderboard是一个专门用于展示和比较AI代理在真实世界软件开发任务中表现的综合性平台。该平台基于RealDevBench数据集，提供多维度的AI代理能力评估，包括设计理解、代码实现、调试能力等核心开发技能。

## ✨ 主要功能

- **🏆 动态排行榜**: 多维度AI代理性能比较，支持实时筛选和排序
- **📊 数据可视化**: 详细的性能分析图表和统计数据展示
- **🎯 数据集信息**: RealDevBench数据集的完整介绍和使用指南
- **🔬 研究分析**: 评估方法论、流程图和研究结果展示
- **🎥 Agent演示**: AppEvalPilot运行演示视频和功能特性介绍
- **📱 响应式设计**: 完美适配桌面端和移动端设备

## 🛠️ 技术栈

- **前端**: HTML5, CSS3, JavaScript (ES6+)
- **样式**: 现代CSS特性（Grid, Flexbox, 渐变, 动画）
- **媒体**: HTML5视频播放器，图表可视化
- **设计**: 响应式布局，毛玻璃效果，现代UI/UX

## 📁 项目结构

```
RelDevWorldLeaderboard/
├── index.html              # 主页面
├── dataset.html             # 数据集页面
├── agent-detail.html        # 代理详情页面
├── css/
│   └── main.css            # 主样式文件
├── js/
│   └── main.js             # 主JavaScript文件
├── images/
│   └── charts/             # 图表和分析图片
├── videos/
│   └── appevalpilot-demo.mp4  # 演示视频
└── README.md               # 项目说明
```

## 🚀 本地开发

### 快速开始

1. **克隆仓库**
   ```bash
   git clone https://github.com/your-username/RealDevWorld-Leaderboard.git
   cd RealDevWorld-Leaderboard
   ```

2. **启动本地服务器**
   
   使用Python (推荐):
   ```bash
   # Python 3
   python -m http.server 8000
   
   # Python 2
   python -m SimpleHTTPServer 8000
   ```
   
   或使用Node.js:
   ```bash
   npx serve .
   ```
   
   或使用Live Server (VS Code扩展)

3. **访问网站**
   
   打开浏览器访问：`http://localhost:8000`

### 开发说明

- 这是一个纯静态网站，无需构建过程
- 所有样式在 `css/main.css` 中
- 所有JavaScript交互在 `js/main.js` 中
- 图片资源放置在 `images/` 目录
- 视频文件放置在 `videos/` 目录

## 📊 数据集信息

- **RealDevBench**: 包含194个真实世界软件开发任务
- **任务类别**: 4个主要分类维度
- **评估指标**: 多维度综合评估体系
- **数据源**: [Hugging Face数据集](https://huggingface.co/datasets/stellaHsr-mm/RealDevBench)

## 🤖 AI代理

- **AppEvalPilot**: 参考AI代理实现
- **源代码**: [GitHub仓库](https://github.com/tanghaom/AppEvalPilot)
- **演示案例**: [在线演示](https://appevalpilot.realdev.world/)

## 🌐 部署

### GitHub Pages部署

1. **推送代码到GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **启用GitHub Pages**
   - 进入仓库Settings
   - 找到Pages部分
   - 选择Source为"Deploy from a branch"
   - 选择branch为"main"，folder为"/ (root)"
   - 保存设置

3. **访问网站**
   
   网站将在几分钟后可通过以下地址访问：
   `https://your-username.github.io/RealDevWorld-Leaderboard`

### 其他部署选项

- **Netlify**: 拖拽项目文件夹到Netlify dashboard
- **Vercel**: 连接GitHub仓库进行自动部署
- **传统主机**: 上传所有文件到web服务器根目录

## 🎨 页面结构

1. **概述 (Overview)**: 项目介绍和核心亮点
2. **数据集 (Dataset)**: RealDevBench详细信息
3. **研究分析 (Research)**: 方法论和评估结果
4. **排行榜 (Leaderboard)**: AI代理性能比较
5. **代理演示 (Agent Demo)**: AppEvalPilot功能展示
6. **案例研究 (Case Studies)**: 详细分析案例

## 🤝 贡献指南

欢迎为项目贡献代码或提出改进建议！

1. Fork本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建Pull Request

## 📄 许可证

本项目采用MIT许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 📧 联系方式

如有问题或建议，请通过GitHub Issues联系我们。

---

⭐ 如果这个项目对您有帮助，请给我们一个star！ 