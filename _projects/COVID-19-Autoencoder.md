---
layout: page
category: Repositories
title: COVID 19 Autoencoder
description: Using Autoencoder in keras as a nonlinear dimensionality reduction method to encode COVID-19 patients data
date: 2023-10-30 18:02:07 +0000
last_modified_at: 2023-10-30 18:11:54 +0000
url: https://github.com/ammahmoudi/COVID-19-Autoencoder
importance: 1
img: https://raw.githubusercontent.com/ammahmoudi/COVID-19-Autoencoder/main/output.png
og_image: https://raw.githubusercontent.com/ammahmoudi/COVID-19-Autoencoder/main/output.png
tags: [autoencoder, covid-19, deep-learning, deep-neural-networks, dimension-reduction, machine-learning, ml, keras-tensorflow]
categories: ["Repository", Jupyter Notebook]
---
<div id="open-in-github" > <table class="table-cv list-group-table"> <tbody> <tr>    <td class="list-group-name"><b>   <a href="https://github.com/ammahmoudi/COVID-19-Autoencoder" rel="external nofollow noopener" target="_blank"><i class="fa-brands fa-github"></i> This page is auto-generated. For more info and materials take a look at the original repository.</a> </b></td></tr> </tbody> </table></div>
---
Using Autoencoder in keras as a nonlinear dimensionality reduction method.The goal is to reduce and encode patients data in a 2d space which could be seperated easily.
## Data Documnetation

We used Symptoms and COVID Presence (May 2020 data) dataset.COVID is a contagious disease. The purpose of this dataset is to provide symptoms as input and it should be able to predict if COVID is possibly present or not. It cannot be used for serious medical purposes.
For more information please read the [data documentation](https://www.kaggle.com/datasets/hemanthhari/symptoms-and-covid-presence).

## Code Explanation
- **0. Preparation**: A section that loads the dataset using pandas, encodes the categorical features using LabelEncoder, and splits the data into train and test sets.
- **1. DNN as nonlinear dimensionality reduction method**: A section that defines and trains an autoencoder using Keras, which compresses the data from 20 dimensions to 2 dimensions and then reconstructs the original data. The section also plots the encoded data using matplotlib.

{% include figure.liquid path="https://raw.githubusercontent.com/ammahmoudi/COVID-19-Autoencoder/main/output.png" alt="result" class="img-fluid rounded z-depth-1" zoomable=true %}
