document.addEventListener('DOMContentLoaded', function() {
    // Navigation scroll effect
    const navLinks = document.querySelectorAll('.main-nav a');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - 300)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').slice(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Leaderboard tab switching
    const tabButtons = document.querySelectorAll('.leaderboard-tabs .tab-button');
    const tabContents = document.querySelectorAll('.leaderboard-content .tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const target = button.getAttribute('data-tab');
            
            // Remove all active states
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add current active state
            button.classList.add('active');
            document.getElementById(target).classList.add('active');
        });
    });

    // Smooth scrolling effect
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Get target element
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (!targetElement) return;
            
            // Calculate header height for offset
            const headerHeight = document.querySelector('.site-header').offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            // Smooth scroll to target
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
            
            // Update active state in navigation
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            this.classList.add('active');
        });
    });

    // Load actual leaderboard data (can be extended to fetch from API)
    function loadLeaderboardData() {
        // Here you can use the fetch API to get actual data from the backend
        // Demo mock data for new categories

        const productsData = [
            { rank: 1, name: 'MGX (BoN-3)', model: 'MGX Framework', org: 'MGX Team', orgUrl: 'https://mgx.dev/', agentQuality: 0.78, codeQuality: 0.72, visualQuality: 0.41 },
            { rank: 2, name: 'Lovable', model: 'Lovable Framework', org: 'Lovable Team', orgUrl: 'https://lovable.dev', agentQuality: 0.74, codeQuality: 0.58, visualQuality: 0.47 },
            { rank: 3, name: 'MGX', model: 'MGX Framework', org: 'MGX Team', orgUrl: 'https://mgx.dev/', agentQuality: 0.60, codeQuality: 0.68, visualQuality: 0.41 },
            { rank: 4, name: 'Bolt', model: 'Bolt Framework', org: 'StackBlitz', orgUrl: 'https://bolt.new', agentQuality: 0.54, codeQuality: 0.69, visualQuality: 0.50 }
        ];

        const openSourceData = [
            { rank: 1, name: 'Qwen3-Coder-480B', model: 'Qwen3-Coder-480B', org: 'Alibaba', orgUrl: 'https://github.com/QwenLM/Qwen2.5-Coder', agentQuality: 0.53, codeQuality: 0.41, visualQuality: 0.32 },
            { rank: 2, name: 'OpenHands', model: 'OpenHands Framework', org: 'OpenHands Team', orgUrl: 'https://github.com/All-Hands-AI/OpenHands', agentQuality: 0.50, codeQuality: 0.38, visualQuality: 0.33 },
            { rank: 3, name: 'Kimi-K2', model: 'Kimi-K2', org: 'Moonshot AI', orgUrl: 'https://kimi.moonshot.cn', agentQuality: 0.39, codeQuality: 0.41, visualQuality: 0.29 },
            { rank: 4, name: 'Claude-3.7-Sonnet', model: 'Claude-3.7-Sonnet', org: 'Anthropic', orgUrl: 'https://claude.ai', agentQuality: 0.31, codeQuality: 0.41, visualQuality: 0.18 },
            { rank: 5, name: 'Gemini-2.5-Pro', model: 'Gemini-2.5-Pro', org: 'Google', orgUrl: 'https://gemini.google.com', agentQuality: 0.29, codeQuality: 0.45, visualQuality: 0.26 },
            { rank: 6, name: 'DeepSeek-V3', model: 'DeepSeek-V3', org: 'DeepSeek', orgUrl: 'https://github.com/deepseek-ai/DeepSeek-V3', agentQuality: 0.29, codeQuality: 0.18, visualQuality: 0.21 }
        ];

        // Fill new leaderboards
        renderLeaderboard('products', productsData);
        renderLeaderboard('opensource', openSourceData);
    }
    
    function renderLeaderboard(tabId, data) {
        const tabContent = document.getElementById(tabId);
        if (!tabContent) return;
        
        let tableHTML = `
        <table class="leaderboard-table">
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Agent Name</th>
                    <th>Model</th>
                    <th>Organization</th>
                    <th>Agent Quality</th>
                    <th>Code Quality</th>
                    <th>Visual Quality</th>
                </tr>
            </thead>
            <tbody>
        `;
        
        data.forEach(item => {
            let rowClass = '';
            if (item.rank === 1) rowClass = 'first-rank';
            else if (item.rank === 2) rowClass = 'second-rank';
            else if (item.rank === 3) rowClass = 'third-rank';
            
            const orgLink = item.orgUrl ? `<a href="${item.orgUrl}" target="_blank" rel="noopener">${item.org}</a>` : item.org;
            
            tableHTML += `
            <tr class="${rowClass}">
                <td>${item.rank}</td>
                <td>${item.name}</td>
                <td>${item.model}</td>
                <td>${orgLink}</td>
                <td>${item.agentQuality}</td>
                <td>${item.codeQuality}</td>
                <td>${item.visualQuality}</td>
            </tr>
            `;
        });
        
        tableHTML += `
            </tbody>
        </table>
        `;
        
        tabContent.innerHTML = tableHTML;
    }
    
    // Initial data load
    loadLeaderboardData();
    
    // Enhanced animation effects
    if ('IntersectionObserver' in window) {
        const animatedElements = document.querySelectorAll('.feature-card, .case-study-card, .section-title, .stat-item');
        
        const options = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                        entry.target.classList.add('animate-in');
                    }, index * 100); // Stagger animation
                    observer.unobserve(entry.target);
                }
            });
        }, options);
        
        // Initially hide all elements
        animatedElements.forEach(element => {
            element.style.opacity = 0;
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            observer.observe(element);
        });

        // Animate hero stats on load
        const heroStats = document.querySelectorAll('.hero-stats .stat-number');
        heroStats.forEach((stat, index) => {
            const finalValue = stat.textContent;
            const numericValue = parseFloat(finalValue.replace(/[^\d.]/g, ''));
            const isPercentage = finalValue.includes('%');
            
            if (!isNaN(numericValue)) {
                let currentValue = 0;
                const increment = numericValue / 50;
                const timer = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= numericValue) {
                        stat.textContent = finalValue;
                        clearInterval(timer);
                    } else {
                        stat.textContent = isPercentage ? 
                            `${Math.floor(currentValue)}%` : 
                            Math.floor(currentValue).toString();
                    }
                }, 50);
            }
        });
    }

    // Mobile menu toggle functionality
    const mobileMenuButton = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuButton && mainNav) {
        mobileMenuButton.addEventListener('click', () => {
            mainNav.classList.toggle('active');
            mobileMenuButton.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (mainNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when clicking nav links
        const navLinks = document.querySelectorAll('.main-nav a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                mainNav.classList.remove('active');
                mobileMenuButton.classList.remove('active');
                document.body.style.overflow = 'auto';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuButton.contains(e.target) && !mainNav.contains(e.target)) {
                mainNav.classList.remove('active');
                mobileMenuButton.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
    
    // Add sticky header behavior on scroll
    const header = document.querySelector('.site-header');
    let lastScrollTop = 0;
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add sticky class when scrolling down
        if (scrollTop > 50) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
        
        // Show/hide header based on scroll direction
        if (scrollTop > lastScrollTop && scrollTop > 200) {
            header.classList.add('hidden');
        } else {
            header.classList.remove('hidden');
        }
        
        lastScrollTop = scrollTop;
    });
    
    // 处理研究分析标签页
    document.querySelectorAll('.research-tab').forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.getAttribute('data-target');
            
            // 移除所有活跃状态
            document.querySelectorAll('.research-tab').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.research-panel').forEach(panel => panel.classList.remove('active'));
            
            // 添加活跃状态
            this.classList.add('active');
            document.getElementById(targetId).classList.add('active');
        });
    });
});

// 图片模态框功能
function openImageModal(imageSrc, imageAlt) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageSrc;
    modalImage.alt = imageAlt;
    modal.classList.add('active');
    
    // 禁止背景滚动
    document.body.style.overflow = 'hidden';
}

function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    
    // 恢复背景滚动
    document.body.style.overflow = 'auto';
}

// 点击图片放大
document.addEventListener('DOMContentLoaded', function() {
    const chartImages = document.querySelectorAll('.chart-image');
    
    chartImages.forEach(image => {
        image.addEventListener('click', function() {
            openImageModal(this.src, this.alt);
        });
    });
    
    // 点击模态框背景关闭
    document.getElementById('imageModal').addEventListener('click', function(e) {
        if (e.target === this) {
            closeImageModal();
        }
    });
    
    // 按ESC键关闭
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeImageModal();
        }
    });
    
    // 视频播放器增强功能
    const videoWrapper = document.querySelector('.video-wrapper');
    const video = document.querySelector('.demo-video-player');
    const overlay = document.querySelector('.video-overlay');
    const playButton = document.querySelector('.play-button');

    if (videoWrapper && video && overlay && playButton) {
        // 点击播放按钮或overlay播放视频
        overlay.addEventListener('click', function() {
            if (video.paused) {
                video.play();
                overlay.style.opacity = '0';
            }
        });

        // 视频播放时隐藏overlay
        video.addEventListener('play', function() {
            overlay.style.opacity = '0';
        });

        // 视频暂停时显示overlay
        video.addEventListener('pause', function() {
            overlay.style.opacity = '1';
        });

        // 视频结束时显示overlay
        video.addEventListener('ended', function() {
            overlay.style.opacity = '1';
        });

        // 鼠标离开视频区域时隐藏overlay（如果视频正在播放）
        videoWrapper.addEventListener('mouseleave', function() {
            if (!video.paused) {
                overlay.style.opacity = '0';
            }
        });

        // 鼠标进入视频区域时显示overlay（如果视频暂停）
        videoWrapper.addEventListener('mouseenter', function() {
            if (video.paused) {
                overlay.style.opacity = '1';
            }
        });
        
        // 为feature-item添加动画效果
        const featureItems = document.querySelectorAll('.feature-item');
        if ('IntersectionObserver' in window) {
            const featureObserver = new IntersectionObserver((entries) => {
                entries.forEach((entry, index) => {
                    if (entry.isIntersecting) {
                        setTimeout(() => {
                            entry.target.style.opacity = '1';
                            entry.target.style.transform = 'translateY(0)';
                        }, index * 150); // 错开动画时间
                        featureObserver.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.2 });

            featureItems.forEach(item => {
                item.style.opacity = '0';
                item.style.transform = 'translateY(30px)';
                item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                featureObserver.observe(item);
            });
        }

        // ===== 任务分布饼图百分比标签 =====
        const pieCharts = document.querySelectorAll('.pie-chart');
        pieCharts.forEach(chart => {
            const radius = chart.offsetWidth / 2;
            const slices = chart.querySelectorAll('.pie-slice');

            slices.forEach(slice => {
                const start = parseFloat(slice.style.getPropertyValue('--start'));
                const end = parseFloat(slice.style.getPropertyValue('--end'));
                if (isNaN(start) || isNaN(end)) return;

                // 动态计算标签距离中心的半径，扇形越大取值越小，保证文字位于扇形内部
                const wedgeAngle = end - start;
                const labelRadius = radius * (wedgeAngle > 120 ? 0.55 : (wedgeAngle > 60 ? 0.65 : 0.75));

                // 计算刻度中点角度（以度为单位）
                const mid = (start + end) / 2;
                const angleRad = (mid - 90) * Math.PI / 180; // 将 0° 调整到顶部

                // 计算标签位置
                const x = radius + labelRadius * Math.cos(angleRad);
                const y = radius + labelRadius * Math.sin(angleRad);

                // 提取百分比文本
                const match = slice.dataset.label ? slice.dataset.label.match(/\(([^)]+)\)/) : null;
                if (!match) return;
                const labelText = match[1];

                // 创建并添加标签
                const span = document.createElement('span');
                span.className = 'pie-label';
                span.textContent = labelText;
                span.style.left = `${x}px`;
                span.style.top = `${y}px`;
                chart.appendChild(span);
            });
        });
    }
}); 