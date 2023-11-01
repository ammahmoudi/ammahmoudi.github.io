---
layout: page
category: Repositories
title: Water Treatment Plant
description: Categorizing the plant's operation state using sensor data suing SVMs.
date: 2023-10-29 13:39:24 
last_modified_at: 2023-10-29 13:54:28 
url: https://github.com/ammahmoudi/Water-Treatment-Plant
importance: 1
img: https://raw.githubusercontent.com/ammahmoudi/Water-Treatment-Plant/main/input_sed-e.png
tags: [eda, knn, ml, svm, water-treatment, machine-learning]
categories: ["Repository", Jupyter Notebook]
---
<div id="open-in-github" > <table class="table-cv list-group-table"> <tbody> <tr>    <td class="list-group-name"><b>   <a href="https://github.com/ammahmoudi/Water-Treatment-Plant" rel="external nofollow noopener" target="_blank"><i class="fa-brands fa-github"></i> This page is auto-generated. For more info and materials take a look at the original repository.</a> </b></td></tr> </tbody> </table></div>
---
This problem comes from the daily measures of sensors in an urban waste water treatment plant. The objective is to classify the operation state of the plant at each of the stages of the treatment process using SVMs and KNN.
The plant is constituted by a primary settler, a biological reactor, and a secondary settler. After the biological reactor, where the level of substrate is reduced by the action of microorganisms, the water flows to the secondary settler where the biomass sludge settles. Clean water hence remains at the top of the settler and can be easily carried out of the plant. A portion of the sludge is returned to the bioreactor’s input to maintain an appropriate level of biomass, allowing the oxidation of organic matter, while the rest of the sludge is purged.


## Data Documentation

This dataset comes from the daily measures of sensors in a urban waste water treatment plant. The objective is to classify the operational state of the plant in order to predict faults through the state variables of the plant at each of the stages of the treatment process. This domain has been stated as an ill-structured domain.

For more information please read the [data documentation](https://data.world/uci/water-treatment-plant).


### Attributes
Water treatment plant dataset has 38 attributes. All atrributes are numeric and continuous:
1. Q-E (input flow to plant)

2. ZN-E (input Zinc to plant)

3. PH-E (input pH to plant)

4. DBO-E (input Biological demand of oxygen to plant)

5. DQO-E (input chemical demand of oxygen to plant)

6. SS-E (input suspended solids to plant)

7. SSV-E (input volatile supended solids to plant)

8. SED-E (input sediments to plant)

9. COND-E (input conductivity to plant)

10. PH-P (input pH to primary settler)

11. DBO-P (input Biological demand of oxygen to primary settler)

12. SS-P (input suspended solids to primary settler)

13. SSV-P (input volatile supended solids to primary settler)

14. SED-P (input sediments to primary settler)

15. COND-P (input conductivity to primary settler)

16. PH-D (input pH to secondary settler)

17. DBO-D (input Biological demand of oxygen to secondary settler)

18. DQO-D (input chemical demand of oxygen to secondary settler)

19. SS-D (input suspended solids to secondary settler)

20. SSV-D (input volatile supended solids to secondary settler)

21. SED-D (input sediments to secondary settler)

22. COND-D (input conductivity to secondary settler)

23. PH-S (output pH)

24. DBO-S (output Biological demand of oxygen)

25. DQO-S (output chemical demand of oxygen)

26. SS-S (output suspended solids)

27. SSV-S (output volatile supended solids)

28. SED-S (output sediments)

29. COND-S (output conductivity)

30. RD-DBO-P (performance input Biological demand of oxygen in 
primary settler)

31. RD-SS-P (performance input suspended solids to primary settler)

32. RD-SED-P (performance input sediments to primary settler)

33. RD-DBO-S (performance input Biological demand of oxygen to secondary settler)

34. RD-DQO-S (performance input chemical demand of oxygen to secondary settler)

35. RD-DBO-G (global performance input Biological demand of oxygen)

36. RD-DQO-G (global performance input chemical demand of oxygen)

37. RD-SS-G (global performance input suspended solids)

38. RD-SED-G (global performance input sediments)


## Code Explanation

### **Import Libraries**
The code begins by importing the necessary libraries, including `pandas` and `numpy`. These libraries are used for data manipulation and analysis.

### **Read Data**
The water treatment plant dataset is read from Google Drive using the `pd.read_csv()` function. The shape of the loaded dataframe is printed.

### **Display Samples**
The top few rows of the dataset are displayed using `water_data.head()`. This shows how the data looks.

### *Data Summary*
A concise summary of the dataframe is printed using `water_data.info()`. It provides information about non-null counts and data types for each column.

{% include figure.html path="https://raw.githubusercontent.com/ammahmoudi/Water-Treatment-Plant/main/input_sed-e.png" alt="input-sed vs sed-e" class="img-fluid rounded z-depth-1" zoomable=true %}

### **Data Visualization**

- Histograms: Histograms are created using `sns.histplot()` to visualize the distribution of features like `PH-E`, `SSV-E`, and `SED-E`.
- Bar Plots: Bar plots are used to show relationships between features like `PH-E` and class labels.
- Correlation Matrix: A heatmap displays correlations between features extracted from primary and secondary settlers.
- Scatter Plots: Scatter plots show relationships between features like `PH-P` and `PH-D`.

{% include figure.html path="https://raw.githubusercontent.com/ammahmoudi/Water-Treatment-Plant/main/cmatrix.png" alt="corelation matrix" class="img-fluid rounded z-depth-1" zoomable=true %}

### **Data Preprocessing**

- Missing Value Imputation: The KNNImputer is used to impute missing values in the dataset.
- Feature Normalization: Features are normalized to a range between 0 and 1 using MinMaxScaler.
- Label Encoding: Class labels are transformed into integer values.

### **Model Training and Evaluation**

- Linear SVM: A linear SVM model is trained and evaluated on training and test data.
- Kernel SVM (RBF): A kernel SVM model with an RBF kernel is fine-tuned using GridSearchCV for hyperparameter optimization.

### **Results**
- Linear SVM achieved a training accuracy of approximately 70% and a test accuracy of around 66%.
- Kernel SVM (RBF) with optimized hyperparameters achieved a training accuracy of 98% and a test accuracy of 83%.
