---
layout: page
category: Repositories
title: Galaxy Classifier
description: Classifing galaxy images using a MLP Model with PyTorch
date: 2023-10-30 12:25:16 
last_modified_at: 2023-10-30 13:01:53 
url: https://github.com/ammahmoudi/Galaxy-Classifier
importance: 1
img: https://raw.githubusercontent.com/ammahmoudi/Galaxy-Classifier/main/sam.png
tags: [cnn, deep-learning, machine-learning, ml, mlp, neural-network, pytorch]
categories: ["Repository", Jupyter Notebook]
---
<div id="open-in-github" > <table class="table-cv list-group-table"> <tbody> <tr>    <td class="list-group-name"><b>   <a href="https://github.com/ammahmoudi/Galaxy-Classifier" rel="external nofollow noopener" target="_blank"><i class="fa-brands fa-github"></i> This page is auto-generated. For more info and materials take a look at the original repository.</a> </b></td></tr> </tbody> </table></div>
---
This code uses PyTorch to build and implement a MLP model with PyTorch for solving a classification problem. Our goal is to classify galaxy images into 4 classes: ellipticals, lenticulars, spirals, and irregulars.

## Data Documentation
We will use [EFIGI](https://www.astromatic.net/projects/efigi/) dataset which contains 4458 images.

{% include figure.html path="https://raw.githubusercontent.com/ammahmoudi/Galaxy-Classifier/main/sam.png" alt="sample galaxies" class="img-fluid rounded z-depth-1" zoomable=true %}
## Code Explanation

- **Importing libraries**: The first cell imports the necessary libraries for the project, such as PyTorch, NumPy, Matplotlib, and scikit-learn. These libraries provide tools for data manipulation, visualization, and machine learning.
- **Loading data**: The second cell loads the galaxy images and labels from a folder using the `torchvision.datasets.ImageFolder` function. It also applies some transformations to the images, such as resizing, cropping, converting to grayscale, and normalizing. The data is then split into training, validation, and testing sets using the `torch.utils.data.random_split` function.
- **Defining MLP model**: The third cell defines a multilayer perceptron (MLP) model using the `torch.nn.Module` class.
The structure of the MLP constructed in this code is as follows:

    - **Convolutional and MaxPool layers**: These layers extract features from the input images by applying filters and reducing the spatial dimensions. The code defines four convolutional layers and three max-pooling layers. The number of filters increases from 32 to 128 as the depth of the network increases. The kernel sizes of the filters decrease from 6 to 3 as the spatial dimensions of the images decrease. The max-pooling layers have a kernel size of 2 and a stride of 2, which means they reduce the image size by half in each dimension.
    - **Dense layers**: These layers perform classification based on the extracted features. The code defines three dense layers. The first dense layer flattens the output of the last convolutional layer into a vector of size 128*2*2. The second dense layer reduces the dimensionality from 128 to 64. The third dense layer outputs a vector of size num_classes, which is 4 in this case. The dense layers use ReLU activation functions.
- **Training MLP model**: The fourth cell trains the MLP model using the `torch.optim.Adam` optimizer and the `torch.nn.CrossEntropyLoss` criterion. It also tracks the training and validation accuracy and loss using the `sklearn.metrics.accuracy_score` function. It plots the learning curves using Matplotlib.
- **Evaluating MLP model**: The fifth cell evaluates the MLP model on the test set using the `sklearn.metrics.classification_report` function. It also displays some sample predictions and their corresponding labels using Matplotlib.
