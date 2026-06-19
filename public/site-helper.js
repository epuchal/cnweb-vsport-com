// public/site-helper.js
// 页面辅助模块：生成提示卡片、关键词徽章和访问说明

(function() {
  'use strict';

  // 配置数据
  const CONFIG = {
    siteUrl: 'https://cnweb-vsport.com',
    keyword: 'v体育',
    badgeColor: '#1e90ff',
    cardBg: '#f0f8ff'
  };

  // 提示卡片数据
  const tips = [
    { icon: '💡', title: '快速导航', content: '使用顶部菜单栏可以快速切换不同模块，建议先浏览首页概览。' },
    { icon: '🔍', title: '搜索技巧', content: '在搜索框输入关键词即可查找相关内容，支持模糊匹配。' },
    { icon: '📌', title: '收藏功能', content: '点击星标按钮可将常用页面加入收藏夹，方便下次访问。' }
  ];

  // 关键词徽章列表
  const badges = [
    { label: '热门', tag: CONFIG.keyword, color: '#ff6347' },
    { label: '推荐', tag: CONFIG.keyword + '资讯', color: '#32cd32' },
    { label: '新上线', tag: CONFIG.keyword + '专区', color: '#ffa500' }
  ];

  // 访问说明条目
  const guideSteps = [
    { step: 1, description: '打开浏览器，在地址栏输入 ' + CONFIG.siteUrl },
    { step: 2, description: '点击“注册”按钮，填写基本信息完成账号创建。' },
    { step: 3, description: '登录后即可浏览 ' + CONFIG.keyword + ' 相关内容和功能。' }
  ];

  // 创建提示卡片
  function createTipCard(tip) {
    var card = document.createElement('div');
    card.className = 'tip-card';
    card.style.cssText = 'background:' + CONFIG.cardBg + ';border:1px solid #ddd;border-radius:8px;padding:16px;margin:12px 0;display:flex;align-items:flex-start;gap:12px;';

    var iconSpan = document.createElement('span');
    iconSpan.textContent = tip.icon;
    iconSpan.style.cssText = 'font-size:28px;line-height:1;';

    var textDiv = document.createElement('div');
    var titleEl = document.createElement('h4');
    titleEl.textContent = tip.title;
    titleEl.style.cssText = 'margin:0 0 6px 0;font-size:16px;color:#333;';
    var descEl = document.createElement('p');
    descEl.textContent = tip.content;
    descEl.style.cssText = 'margin:0;font-size:14px;color:#555;line-height:1.5;';

    textDiv.appendChild(titleEl);
    textDiv.appendChild(descEl);
    card.appendChild(iconSpan);
    card.appendChild(textDiv);

    return card;
  }

  // 创建关键词徽章
  function createBadge(badge) {
    var span = document.createElement('span');
    span.className = 'keyword-badge';
    span.textContent = badge.tag;
    span.style.cssText = 'display:inline-block;background:' + badge.color + ';color:#fff;padding:4px 12px;border-radius:20px;font-size:13px;font-weight:bold;margin:4px;';

    if (badge.label) {
      var labelSpan = document.createElement('span');
      labelSpan.textContent = '[' + badge.label + '] ';
      labelSpan.style.cssText = 'font-weight:normal;opacity:0.9;';
      span.insertBefore(labelSpan, span.firstChild);
    }

    return span;
  }

  // 创建访问说明列表
  function createGuideList(steps) {
    var list = document.createElement('ol');
    list.style.cssText = 'padding-left:24px;margin:8px 0;';

    steps.forEach(function(item) {
      var li = document.createElement('li');
      li.textContent = item.description;
      li.style.cssText = 'margin:8px 0;font-size:14px;color:#444;line-height:1.6;';
      list.appendChild(li);
    });

    return list;
  }

  // 渲染所有组件到指定容器
  function renderToContainer(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;

    // 清空容器
    container.innerHTML = '';

    // 添加提示卡片区域
    var tipsSection = document.createElement('div');
    tipsSection.className = 'tips-section';
    var tipsTitle = document.createElement('h3');
    tipsTitle.textContent = '📋 页面提示';
    tipsTitle.style.cssText = 'margin:0 0 12px 0;font-size:18px;';
    tipsSection.appendChild(tipsTitle);

    tips.forEach(function(tip) {
      tipsSection.appendChild(createTipCard(tip));
    });

    container.appendChild(tipsSection);

    // 添加关键词徽章区域
    var badgesSection = document.createElement('div');
    badgesSection.className = 'badges-section';
    badgesSection.style.cssText = 'margin-top:24px;';
    var badgesTitle = document.createElement('h3');
    badgesTitle.textContent = '🏷️ 关键词徽章';
    badgesTitle.style.cssText = 'margin:0 0 12px 0;font-size:18px;';
    badgesSection.appendChild(badgesTitle);

    var badgesContainer = document.createElement('div');
    badges.forEach(function(badge) {
      badgesContainer.appendChild(createBadge(badge));
    });
    badgesSection.appendChild(badgesContainer);

    container.appendChild(badgesSection);

    // 添加访问说明区域
    var guideSection = document.createElement('div');
    guideSection.className = 'guide-section';
    guideSection.style.cssText = 'margin-top:24px;';
    var guideTitle = document.createElement('h3');
    guideTitle.textContent = '📖 访问说明';
    guideTitle.style.cssText = 'margin:0 0 12px 0;font-size:18px;';
    guideSection.appendChild(guideTitle);

    var guideNote = document.createElement('p');
    guideNote.textContent = '以下是开始使用 ' + CONFIG.siteUrl + ' 的简单步骤：';
    guideNote.style.cssText = 'font-size:14px;color:#666;margin:0 0 8px 0;';
    guideSection.appendChild(guideNote);

    guideSection.appendChild(createGuideList(guideSteps));

    container.appendChild(guideSection);
  }

  // 暴露初始化函数到全局
  window.initSiteHelper = function(containerId) {
    if (typeof containerId === 'string' && containerId.length > 0) {
      renderToContainer(containerId);
    } else {
      // 默认容器
      var defaultContainer = document.getElementById('site-helper');
      if (defaultContainer) {
        renderToContainer('site-helper');
      }
    }
  };

})();