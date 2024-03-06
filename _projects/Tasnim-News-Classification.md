---
layout: page
category: Repositories
title: Tasnim News Classification
description: Text classification for news articles sourced from an Iranian newspaper including data exploration, text preprocessing, vectorization, train-test data splitting, and machine learning model training.
date: 2023-10-05 22:05:44 
last_modified_at: 2023-10-29 13:54:05 
url: https://github.com/ammahmoudi/Tasnim-News-Classification
importance: 1
img: https://raw.githubusercontent.com/ammahmoudi/Tasnim-News-Classification/main/output.png
og_image: https://raw.githubusercontent.com/ammahmoudi/Tasnim-News-Classification/main/output.png
tags: [knn, machine-learning, ml, mlp, neural-network, nlp, persian-nlp, random-forest, svm]
categories: ["Repository", Jupyter Notebook]
---
<div id="open-in-github" > <table class="table-cv list-group-table"> <tbody> <tr>    <td class="list-group-name"><b>   <a href="https://github.com/ammahmoudi/Tasnim-News-Classification" rel="external nofollow noopener" target="_blank"><i class="fa-brands fa-github"></i> This page is auto-generated. For more info and materials take a look at the original repository.</a> </b></td></tr> </tbody> </table></div>
---

This project represents a Machine Learning course's midterm exam which I designed as a teacher assistant, focusing on the task of text classification. The project specifically involved a case study related to an Iranian newspaper dataset ([dataset](https://www.kaggle.com/datasets/amirpourmand/tasnimdataset)). The primary objective was to build and evaluate text classification models to categorize newspaper articles into predefined topics accurately.

## Project Steps

### A. Exploratory Analysis

The initial step involved exploring the Iranian newspaper dataset provided. This exploratory analysis aimed to gain insights into the dataset's characteristics, class distribution, and the nature of its textual content. These insights were essential in understanding the challenges and opportunities associated with the task.

### B. Text Cleaning

To ensure data quality and consistency, rigorous text cleaning procedures were applied. This included removing special characters, punctuation, and common stopwords. The objective was to prepare the text data for subsequent analysis and modeling.

### C. Vectorization

Text data was transformed into numerical vectors using two prominent techniques: TF-IDF (Term Frequency-Inverse Document Frequency) and Count Vectorization. These techniques converted the textual data from the Iranian newspaper case study into a format suitable for machine learning model training.

### D. Train and Test Split

Appropriate partitioning of the dataset into training and testing subsets was crucial for accurate model evaluation. Care was taken to maintain class balance in both the training and testing datasets. This division allowed for a comprehensive assessment of model generalization to unseen data.

### E. Model Training

The core of the code involved training and evaluating text classification models. Various machine learning algorithms were explored, including Random Forest, Linear SVC, Logistic Regression, Decision Tree, and K-Nearest Neighbors (KNN). Model performance was assessed using accuracy as the primary evaluation metric on both training and testing datasets.

## Conclusion

{% include figure.html path="https://raw.githubusercontent.com/ammahmoudi/Tasnim-News-Classification/main/output.png" alt="results" class="img-fluid rounded z-depth-1" zoomable=true %}

This code focused on the task of text classification within the context of an Iranian newspaper dataset. The project encompassed data exploration, text preprocessing, feature engineering, and model training. Notably, it provided an opportunity to assess the performance of different machine learning algorithms on the given task.

The results indicated that the Random Forest model, coupled with TF-IDF vectorization, demonstrated the highest accuracy in categorizing newspaper articles into predefined topics. This achievement highlights the potential of this approach for similar real-world applications in the domain of Iranian newspapers or text classification in general.

It's important to recognize that text classification tasks often involve ongoing refinement and exploration. Further enhancements, such as hyperparameter tuning and advanced modeling techniques, could be explored to further improve classification performance. (for example, it is obvious that methods used in this project made high-dimension feature space which caused overfitting.)
