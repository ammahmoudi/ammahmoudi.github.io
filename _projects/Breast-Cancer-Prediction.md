---
layout: page
category: Repositories
title: Breast Cancer Prediction
description: Breast Cancer survival analysis using Machine Learning
date: 2023-02-01 14:51:10 
last_modified_at: 2023-02-03 03:37:57 
url: https://github.com/ammahmoudi/Breast-Cancer-Prediction
importance: 1
img: https://raw.githubusercontent.com/ammahmoudi/Breast-Cancer-Prediction/master/output.png
og_image: https://raw.githubusercontent.com/ammahmoudi/Breast-Cancer-Prediction/master/output.png
tags: [machine-learning, ml, mlp, nuralnetwork]
categories: ["Repository", Jupyter Notebook]
---
<div id="open-in-github" > <table class="table-cv list-group-table"> <tbody> <tr>    <td class="list-group-name"><b>   <a href="https://github.com/ammahmoudi/Breast-Cancer-Prediction" rel="external nofollow noopener" target="_blank"><i class="fa-brands fa-github"></i> This page is auto-generated. For more info and materials take a look at the original repository.</a> </b></td></tr> </tbody> </table></div>
---

An exploratory data analysis (EDA) and machine learning on the "Breast Cancer Gene Expression Profiles (METABRIC)" dataset.
The primary goal is to gain insights and understanding from the dataset, especially regarding clinical information and its relationship with breast cancer survival.


## Data Documentation
We will use "Breast Cancer Gene Expression Profiles (METABRIC)" data.
- **Clinical Data**: The first 31 columns contain clinical information, including patient demographics, treatment details, and overall survival status.
- **Gene Expression Data**: These columns include gene expression values and provide insights into the genetic characteristics of patients.
- **Gene Mutation Data**: These columns contain information about gene mutations, which can be critical in cancer research. Gene's mutation info columns have been marked with \"\\_mut\" at the end of the names of the columns.
  
For more information please read the [data documentation](https://www.kaggle.com/datasets/raghadalharbi/breast-cancer-gene-expression-profiles-metabric).


## Code Explanation
In this project, the following tasks were performed:

1. **Data Loading**: I load the dataset from a CSV file and explore the initial records to understand its structure.

2. **Data Preparation**:
   - I split the data into three separate datasets: clinical, gene expression, and gene mutation. Each dataset includes the `patient_id` and `overall_survival` columns for future analysis.
   - Data type warnings are addressed to ensure data consistency.

3. **Exploratory Data Analysis (EDA)**:
   - I conducted an EDA on the clinical data, including:
     - Identifying missing values and visualizing their percentages.
     - Creating box plots to explore the distribution of numerical attributes.
     - Plotting histograms for key clinical variables based on overall survival status to uncover potential patterns.

4. **Data Transformation**:
   - I created dummy variables for categorical columns in the clinical data, making them suitable for modeling.
5. **Dimension Reduction**:
   - Trying to reduce dataset dimension using UMAP, PCA, Autoencoder
6. **Model training and Results**:
   - predict breast cancer using several machine-learning classification models.
   - Baseline models including Logistic Regression, SVM, Naive Bayes, and Random Forest are implemented using Scikit-Learn.
   - The models are evaluated and compared using accuracy, precision, recall, and ROC AUC metrics.
   - Key techniques employed include data preprocessing, hyperparameter tuning using GridSearchCV, and cross-validation to combat overfitting.
   - Visualizations including correlation plots and confusion matrices provide additional insight into model performance.

The XG_BOOST classifier achieved the best performance.
This end-to-end implementation serves as a guide for applying core machine learning concepts to classify and predict breast cancer from medical imaging data. There may be some issues and problems in data and models which are skipped.
{% include figure.liquid path="https://raw.githubusercontent.com/ammahmoudi/Breast-Cancer-Prediction/master/output.png" alt="result" class="img-fluid rounded z-depth-1" zoomable=true %}

Please refer to the code file for a detailed explanation and code implementation.

