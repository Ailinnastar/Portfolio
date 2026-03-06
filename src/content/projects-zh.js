export const projectsZh = {
  pageTitle: '项目',
  pageSubtitle: '我参与或主导的项目与成果物 — 按实习、学术、个人分类。',
  tabs: {
    internship: '实习项目',
    academic: '学术项目',
    personal: '个人项目',
  },
  panelDescriptions: {
    internship: '本栏展示我在实习期间产出的项目与交付物。',
    academic: '本栏展示我在课程、实验室或课题中产出的学术与研究项目。',
    personal: '本栏展示我在工作与课程之外产出的个人与兴趣项目。',
  },
  sectionTitles: {
    approach: '我的做法',
    outcomes: '主要成果',
    viewProject: '查看项目 →',
  },
  internship: [
    {
      title: '多语言爬取与价格对标',
      company: 'OC&C',
      role: '数据分析咨询项目实习',
      period: '2025年10月 – 2026年1月',
      cover: 'image/multilingual-scraping.png',
      description: '全球零售战略相关的数据流程与看板。',
      points: [
        'Python 多语言产品采集与匹配流程 — 跨市场比价准确率提升约 70%',
        'Power BI 看板及客户可用的本地化定价与销售建议',
        '竞品品类、定价架构与渠道策略（零售、电商、配送）对标',
      ],
    },
    {
      title: '电商分析',
      company: 'IPSOS Strategy3',
      role: '咨询实习生',
      period: '2025年8月 – 2025年10月',
      cover: 'image/ipsos-ecommerce.png',
      description: '产品与价格数据整合、品牌表现与跨国定价分析等电商分析与战略相关交付物。',
      points: [
        '电商产品与价格数据整合；品牌表现与跨国定价结构',
        '竞品与渠道分析，支持品类与定价决策',
        '国际制造商在中国市场本地化策略的全球专家访谈',
      ],
    },
    {
      title: '拉曼分析',
      company: '德国默克',
      role: '临床数据分析实习',
      period: '2025年6月 – 2025年9月',
      cover: 'image/IMG_1795.png',
      description: '拉曼实验相关分析模型构建与验证；成分预测准确率提升至 90%。',
      points: [
        '拉曼实验相关分析模型 — 成分预测准确率提升至 90%',
      ],
    },
    {
      title: '信用风险模型优化',
      company: '奥纬咨询',
      role: '数据分析咨询项目实习',
      period: '2024年9月 – 2025年4月',
      cover: 'image/credit-risk-model.png',
      description: '银行风险与合规相关交付物。',
      points: [
        '信用风险模型（PD、LGD）优化；巴塞尔 III 合规；预测准确率提升 18%',
        'Python 与 SQL 实现模型更新与报告自动化 — 周期缩短约 30%',
        '模型短板诊断；从 30+ 因素中识别 9 大违约驱动因素',
      ],
    },
    {
      title: '医院合作项目落地与评估',
      company: '阿斯利康',
      role: '商业运营实习',
      period: '2024年7月 – 2024年9月',
      cover: 'image/IMG_6007.JPG',
      description: '合作与运营相关交付物。',
      points: [
        '阿斯利康与三甲医院重点合作项目的落地与评估支持',
        '跨部门协调；合作医院满意度 95%',
        '需求收集与反馈流程优化，提供定制化解决方案以支持业务拓展',
      ],
    },
  ],
  academic: [
    // Liver Cancer Immune — commented out for now
    // {
    //   title: '肝癌免疫微环境机制与治疗模型开发',
    //   period: '2024年5月 – 2024年11月',
    //   context: '生物信息学 / 计算生物学',
    //   points: [
    //     '肝癌免疫微环境中促癌性免疫细胞作用机制解析',
    //     '靶向基质细胞的治疗响应预测计算模型（Python）',
    //   ],
    // },
    {
      title: '蛋白亚细胞定位预测',
      period: '2025年3月 – 2025年5月',
      context: '计算生物学',
      cover: 'image/protein-subcellular.png',
      description: '基于氨基酸序列预测蛋白亚细胞定位（胞质、胞外/分泌、线粒体、核、其他）的机器学习流程。用 Biopython 提取每蛋白 143 维序列特征：全局性质（长度、分子量、等电点、芳香性、不稳定指数、GRAVY）、氨基酸组成、N 端 20 与 C 端 50 残基、以及靶向信号等 motif 匹配。经特征选择保留 69 个最有用特征（如 n_hydrophobicity、hydrophobic_density、n_negative、molecular_weight_kDa、length、starts_with_M、mito_score）。数据存在类别不平衡，故用 SMOTE 将五类均平衡至每类 2189 样本后训练。采用两阶段集成：通用模型（Random Forest、Gradient Boosting，GridSearchCV 调参）与类别专属专家模型；各类的融合权重在 15% 分层留出验证集上以 F1 为指标进行调优。专用集成测试集准确率 72.62%（基线 RF 69.19%），Extr 与 Othr 表现较好，Cyto 与 Nucl 仍有混淆。设计三类置信度（高/中/低），根据验证集概率分布设定类别特定阈值；高置信预测准确率约 90%。对盲测集（20 条序列）使用同一流程，盲测准确率 75%，并输出预测与置信度。',
      approach: '（1）特征提取：Biopython 读入 FASTA，计算全局理化描述符、残基组成、末端窗口（N 20、C 50）、 motif 得分。（2）数据处理：分层 80/20 划分训练/测试；对训练集做特征选择、标准化、SMOTE；同一选择与 scaler 用于测试与盲测。（3）模型：先训练基线 RF，再训练 RF+GBM+各类专家的集成，在留出验证集上对每类做权重网格搜索、最大化 F1。（4）评估：报告各类及整体准确率、精确率、召回率、F1、混淆矩阵；分析 Cyto–Nucl 混淆；根据验证集概率分布设定类别置信阈值，使高/中/低三档反映实际可靠性（高置信约 90% 准确）。盲测沿用同一特征流程与置信度划分。',
      points: [
        'Biopython 143 维特征（全局、组成、N/C 末端、motif）经选择保留 69 维；SMOTE 平衡五类',
        '两阶段集成（RF+GBM+类别专家）；15% 留出验证集按 F1 调各类权重；测试准确率 72.62%，盲测 75%',
        '类别特定阈值的三档置信度（高/中/低）；高置信预测约 90% 准确',
      ],
    },
    {
      title: 'MRI 脂肪-水分离定量分析（生物影像）',
      period: '2025年3月 – 2025年5月',
      context: '生物医学影像',
      cover: 'image/fat-water-mri.png',
      description: '实现了从多回波 MRI 幅度图像定量估计脂肪分数（PDFF）与 R2* 的完整流程。采用六峰脂肪谱加水及 R2* 衰减的信号模型，针对仅幅度拟合带来的脂肪-水歧义做了可视化分析；通过多起点约束优化（fmincon）减小局部极小，并比较了 SSE 与 Rician 似然目标。先在仿真数据上验证，再对体内 DICOM 多回波数据做 4D 加载、逐体素并行拟合，并经中值滤波与高斯平滑得到 PDFF 与 R2* 图。',
      approach: '分三层推进：信号模型与歧义（单峰/多峰脂肪、有无 R2* 衰减，复平面轨迹）；参数估计（幅度 SSE 最小化、水/脂幅度与 R2* 边界、20 次多起点取最优、Rician 似然对比）；实数据流程（DICOM 解析 EchoTime/SliceLocation、体素单次拟合同时得到 PDFF 与 R2*、实数据用原始幅度不加合成噪声、成功率与误差计算中采用安全分母防除零、后处理生成 PDFF/R2* 图）。',
      points: [
        '六峰脂肪谱 + 水 + R2* 衰减；仅幅度拟合及脂肪-水歧义分析',
        '多起点约束优化（fmincon）；SSE 与 Rician 似然对比；双 R2* 稳定性分析',
        '4D DICOM 加载、体素并行拟合、中值+高斯平滑得到 PDFF 与 R2* 图',
      ],
    },
    // Decoding Brain Activity — commented out for now
    // {
    //   title: '解码脑活动以翻译语义视频内容',
    //   period: '2024年4月 – 2024年12月',
    //   context: '自然语言处理 / 神经科学',
    //   points: [
    //     '从观看视频时的脑活动中解码语义视频内容的方法',
    //     '将脑信号映射到大语言模型表示',
    //   ],
    // },
    {
      title: '《英雄联盟》对局结果预测',
      period: '2024年2月 – 2024年3月',
      context: '数据科学 / 机器学习',
      cover: 'image/league-of-legends.png',
      link: 'https://ailinnastar.github.io/LeagueOfLegends/',
      points: [
        '大规模对局数据的清洗、缺失值填补与假设检验',
        '特征工程与超参数调优 — 预测准确率 88%；不同玩家群体的公平性分析',
      ],
    },
  ],
  personal: [
    {
      title: '基于稳定币的跨境电商支付',
      period: '进行中',
      context: 'Web3 / 个人研究',
      points: [
        '传统与稳定币跨境支付流程对比；手续费、汇率风险与监管',
        '结算成本与资金占用的情景模型；对典型跨境卖家单位经济的影响',
      ],
    },
  ],
}
