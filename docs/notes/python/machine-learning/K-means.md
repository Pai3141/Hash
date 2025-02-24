---
title: 聚类算法
createTime: 2025/02/24 10:08:04
permalink: /python/ol2i7fiq/
---
[聚类可视化平台](http://naftaliharris.com/blog/visualizing-k-means-clustering)
### 步骤分析
::: steps
1. Step1：聚类问题概述

   K-means 算法是一种无监督学习方法，用于将数据集划分为 $K$ 个簇（clusters）。目标是根据样本的特征，将相似的样本分配到同一个簇，使得簇内样本尽可能相似，簇间样本尽可能不同。K-means 通过最小化簇内方差（即样本到簇中心的距离平方和）来实现聚类。

2. Step2：K-means 模型
    - 数据集：$X = \{x_1, x_2, \dots, x_n\}$，其中 $x_i \in \mathbb{R}^d$ 是 $d$ 维特征向量。
    - 簇数量：$K$，需预先指定。
    - 簇中心：$\mu_k$，表示第 $k$ 个簇的质心，$k = 1, 2, \dots, K$。
    - 分配标签：$c_i$，表示样本 $x_i$ 所属的簇，$c_i \in \{1, 2, \dots, K\}$。
    - 目标函数（损失函数）：最小化簇内平方和（Within-Cluster Sum of Squares, WCSS）：
      $$
      J = \sum_{i=1}^n \sum_{k=1}^K r_{ik} \| x_i - \mu_k \|^2
      $$
      其中，$r_{ik}$ 是一个指示变量：
        - 若 $x_i$ 属于簇 $k$，则 $r_{ik} = 1$；
        - 否则，$r_{ik} = 0$。
   > 解释：$\| x_i - \mu_k \|^2$ 是样本 $x_i$ 到簇中心 $\mu_k$ 的欧几里得距离平方，$J$ 表示所有样本到其所属簇中心的总距离平方和。

3. Step3：算法流程

   K-means 采用迭代优化的方式实现聚类，主要包括以下两个步骤：
    - **步骤 1：分配样本到最近的簇中心**
      对于每个样本 $x_i$，计算其与所有簇中心 $\mu_k$ 的距离，选择距离最小的簇：
      $$
      c_i = \arg\min_k \| x_i - \mu_k \|^2
      $$
      更新指示变量 $r_{ik}$：
        - 若 $c_i = k$，则 $r_{ik} = 1$；
        - 否则，$r_{ik} = 0$。
    - **步骤 2：更新簇中心**
      根据当前分配的样本，重新计算每个簇的中心（取均值）：
      $$
      \mu_k = \frac{\sum_{i=1}^n r_{ik} x_i}{\sum_{i=1}^n r_{ik}}
      $$
      其中，分母 $\sum_{i=1}^n r_{ik}$ 是簇 $k$ 中的样本数量。
    - **迭代**：重复上述步骤，直到簇中心 $\mu_k$ 不再变化（收敛）或达到最大迭代次数。

4. Step4：初始化与收敛

   K-means 的性能高度依赖初始簇中心的选择：
    - **随机初始化**：随机选择 $K$ 个样本作为初始簇中心。
    - **K-means++ 初始化**：改进方法，通过逐步选择初始中心以避免局部最优：
        1. 随机选择第一个簇中心 $\mu_1$。
        2. 对于每个样本 $x_i$，计算其与已有簇中心的最小距离 $D(x_i)$。
        3. 以概率 $\frac{D(x_i)^2}{\sum D(x_j)^2}$ 选择下一个簇中心。
        4. 重复直到选出 $K$ 个中心。
    - **收敛性**：由于 $J$ 是非增函数，每次迭代都会减少或保持 $J$ 不变，最终收敛到局部最优解。
   > 解释：K-means 不保证全局最优解，结果可能因初始化不同而变化。

5. Step5：优化与评估

   K-means 的目标是最小化 $J$，但需要选择合适的 $K$ 值：
    - **肘部法则（Elbow Method）**：绘制 $K$ 与 $J$ 的关系曲线，选择 $J$ 下降趋于平缓的 $K$ 值。
    - **轮廓系数（Silhouette Score）**：衡量簇内紧密度与簇间分离度的指标，取值范围 $[-1, 1]$，越高越好。
    - 计算公式：
      $$
      s(i) = \frac{b(i) - a(i)}{\max(a(i), b(i))}
      $$
      其中：
        - $a(i)$：样本 $i$ 与同一簇内其他样本的平均距离；
        - $b(i)$：样本 $i$ 与最近的其他簇的平均距离。
   > [!tip]
   > K-means 假设簇是球形且大小相似，对噪声和异常值敏感。
   >
   > Tips：[K-means 实现](https://scikit-learn.org/stable/modules/generated/sklearn.cluster.KMeans.html) 可参考 scikit-learn 提供的实现。
:::