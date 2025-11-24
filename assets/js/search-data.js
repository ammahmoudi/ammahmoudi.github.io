// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-cv",
          title: "CV",
          description: "an itemized list of my entire education, publications, accomplishments, notable projects, awards, honors, achievements, and professional experiences. An academic styled pdf version is available for download by the icon located on the top-right side of the page.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "Projects",
          description: "A growing collection of my projects",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-portfolio",
          title: "Portfolio",
          description: "My Visual Designs Portfolio",
          section: "Navigation",
          handler: () => {
            window.location.href = "/portfolio/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "Publications by categories in reversed chronological order.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "post-red-black-trees-structure-height-guarantees-and-invariants",
        
          title: "Red–Black Trees: Structure, Height Guarantees, and Invariants",
        
        description: "An introduction to red–black trees: conventions, invariants, case analysis, and their relation to 2–3–4 trees.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/red-black-trees/";
          
        },
      },{id: "post-yerevan-adventure",
        
          title: "Yerevan Adventure",
        
        description: "Experiences of a 4-day trip to Yerevan, Armenia",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2024/yerevan-trip/";
          
        },
      },{id: "post-toefl-notes",
        
          title: "TOEFL Notes",
        
        description: "Resources and templates which i&#39;ve gathered to prepare for TOEFL iBT exam.",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/toefl-notes/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "portfolio-turboshut-2017",
          title: 'TurboSHUT 2017',
          description: "Logo and Letterhead Designed for TurboSHUT Renewable Energy Company",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/turboshut-2017/";
            },},{id: "portfolio-chay-ba-ostad-2019",
          title: 'Chay Ba Ostad 2019',
          description: "Logo Designed for Chay Ba Ostad Event (Tea with Faculty)",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/chay-ba-ostad-2019/";
            },},{id: "portfolio-zanco-2020",
          title: 'Zanco 2020',
          description: "Logo Designed for Zanco Konkor Consulting Group",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/Zanco-2020/";
            },},{id: "portfolio-sharif-visual-arts-club-2020",
          title: 'Sharif Visual Arts Club 2020',
          description: "Posters Designed for Sharif Visual Arts Club",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/sharif-visual-arts-club-2020/";
            },},{id: "portfolio-owj-2020",
          title: 'Owj 2020',
          description: "Covers Designed for Owj, An Aerospace-Based Trade magazine",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/owj-2020/";
            },},{id: "portfolio-maryam-mirzakhani-wallpaper-2021",
          title: 'Maryam Mirzakhani Wallpaper 2021',
          description: "Wallpaper Designed for the Memorial Wall of Maryam Mirzakhani in Sharif University Library",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/sharif-library-maryam-mirzakhani-2021/";
            },},{id: "portfolio-sharif-yarigaran-charity-club-2021",
          title: 'Sharif Yarigaran Charity Club 2021',
          description: "Covers Designed for Sharif Yarigaran Charity Club Magazine (Kish-e Mehr)",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/Sharif-Yarigaran-Charity-Club-2021/";
            },},{id: "portfolio-sharif-library-poster-2022",
          title: 'Sharif Library Poster 2022',
          description: "Poster Template Designed for Events in the library of Sharif University of Technology",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/sharif-library-poster-2022/";
            },},{id: "portfolio-sharif-library-wallpapers-2022",
          title: 'Sharif Library Wallpapers 2022',
          description: "Wallpaper Designed for Walls in Sharif University Library",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/sharif-library-wallpapers-2022/";
            },},{id: "portfolio-koodaroo-2022",
          title: 'Koodaroo 2022',
          description: "Banners, Paper Ads and Letterhead Designed for Kodaroo Onlone Drugstore",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/koodaroo-2022/";
            },},{id: "portfolio-dr-mojtahedi-wallpaper-2023",
          title: 'Dr. Mojtahedi Wallpaper 2023',
          description: "Wallpaper Designed for the Memorial Wall of Mohammad Ali Mojtahedi, The Founder of the University, in Sharif University Library",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/sharif-library-dr-mojtahedi-wallpaper-2023/";
            },},{id: "portfolio-iran-loj-2023",
          title: 'Iran Loj 2023',
          description: "Logo, Letter head and advertising assets for Iran Loj, an international business platform",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/Iran-Loj-2023/";
            },},{id: "portfolio-ialn-poster-2023",
          title: 'IALN Poster 2023',
          description: "Poster Template Designed for Iran Academic Libraries Network Event",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/IALN-poster-2023/";
            },},{id: "portfolio-sharif-poetry-and-literature-club-2023",
          title: 'Sharif Poetry and Literature Club 2023',
          description: "Posters Designed for Sharif Poetry and Literature Club",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/Sharif-Poetry-and-Literature-Club-2023/";
            },},{id: "portfolio-sharif-summer-school-2023",
          title: 'Sharif Summer School 2023',
          description: "Logo and Posters Desigened for Sharif Summer School Event",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/Sharif-Summer-School-2023/";
            },},{id: "portfolio-wss-2023",
          title: 'WSS 2023',
          description: "ID Cards and Pop Up Stand for WSS Event",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/WSS-2023/";
            },},{id: "portfolio-ali-heidari-2023",
          title: 'Ali Heidari 2023',
          description: "Personal Brand Design for Ali Heidari",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/ali-heidari-2023/";
            },},{id: "portfolio-lightening-day-poster-2023",
          title: 'Lightening Day Poster 2023',
          description: "Poster  Designed for Lightening Day Event about cryptography in Math Department, Sharif University of Technology",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/lightening-day-poster-2023/";
            },},{id: "portfolio-deraye-2023",
          title: 'Deraye 2023',
          description: "Covers Designed for Deraye, An Cultural-Scientific Magazine of The Sharif university Math Department",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/deraye-2023/";
            },},{id: "portfolio-gamein-2022",
          title: 'Gamein 2022',
          description: "What I have done as the head of visual content at Gamein 2022, biggest student event in Iran",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/Gamein-2022/";
            },},{id: "portfolio-alma-2023",
          title: 'ALMA 2023',
          description: "logo and personal card designs for ALMA Co.",
          section: "Portfolio",handler: () => {
              window.location.href = "/portfolio/Alma-2023/";
            },},{id: "projects-arkanoid",
          title: 'Arkanoid',
          description: "classic  arkanoid game using java and swing",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Arkanoid/";
            },},{id: "projects-we",
          title: 'WE',
          description: "A social app for postint and messaging  using java , javafx,hibernate ORM",
          section: "Projects",handler: () => {
              window.location.href = "/projects/WE/";
            },},{id: "projects-sea-battle",
          title: 'Sea Battle',
          description: "classic Sea battle game implemented using Java socket, Javafx, Hibernate ORM",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Sea-Battle/";
            },},{id: "projects-dinning-philosophers",
          title: 'Dinning Philosophers',
          description: "Implenting Dinning Philosophers problem in a client-server style with nice GUI using java and javafx",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Dinning-Philosophers/";
            },},{id: "projects-udp-pinger",
          title: 'UDP Pinger',
          description: "a Simple UDP Pinger using python",
          section: "Projects",handler: () => {
              window.location.href = "/projects/UDP-Pinger/";
            },},{id: "projects-ants-colony",
          title: 'Ants Colony',
          description: "Ants Coloney multi-processing app",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Ants-Colony/";
            },},{id: "projects-simple-calculator-server-clinet",
          title: 'Simple Calculator Server Clinet',
          description: "A simple calculator with clinet and server using socket and javafx gui with jfoenix beautiful design",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Simple-Calculator-Server-Clinet/";
            },},{id: "projects-os-taskmanager",
          title: 'Os TaskManager',
          description: "a context switching simulation of operation system supporting every context switching algorithms and deadlock prevention methods",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Os-TaskManager/";
            },},{id: "projects-mapreduce-examples",
          title: 'MapReduce examples',
          description: "Map Rduce Examples  using pure Scala and Then using Spark",
          section: "Projects",handler: () => {
              window.location.href = "/projects/MapReduce-examples/";
            },},{id: "projects-costumerdataplatform",
          title: 'costumerDataPlatform',
          description: "None",
          section: "Projects",handler: () => {
              window.location.href = "/projects/costumerDataPlatform/";
            },},{id: "projects-breast-cancer-prediction",
          title: 'Breast Cancer Prediction',
          description: "Breast Cancer survival analysis using Machine Learning",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Breast-Cancer-Prediction/";
            },},{id: "projects-designalgorithms",
          title: 'DesignAlgorithms',
          description: "Homework Solutions for Design Algorithm Course as Computer Science B.Sc. Student at Department of Mathematical Sciences, Sharif University of Technology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/DesignAlgorithms/";
            },},{id: "projects-introductiontomachinelearning",
          title: 'IntroductionToMachineLearning',
          description: "Introduction to Machine Learning, for B.Sc. Students, Industrial Engineering Department, Sharif University of Technology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/IntroductionToMachineLearning/";
            },},{id: "projects-numericalanalysis",
          title: 'NumericalAnalysis',
          description: "Homework Solutions for Numerical Analysis Course as Computer Science B.Sc. Student at Department of Mathematical Sciences, Sharif University of Technology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/NumericalAnalysis/";
            },},{id: "projects-statisticallearning",
          title: 'StatisticalLearning',
          description: "Homework Solutions for Statistical Learning Course as Computer Science B.Sc. Student at Department of Mathematical Sciences, Sharif University of Technology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/StatisticalLearning/";
            },},{id: "projects-introductiontobioinformatics",
          title: 'IntroductionToBioinformatics',
          description: "Homework Solutions for Introduction to Bioinformatics Course as Computer Science B.Sc. Student at Department of Computer Engineering, Sharif University of Technology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/IntroductionToBioinformatics/";
            },},{id: "projects-tasnim-news-classification",
          title: 'Tasnim News Classification',
          description: "Text classification for news articles sourced from an Iranian newspaper including data exploration, text preprocessing, vectorization, train-test data splitting, and machine learning model training.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Tasnim-News-Classification/";
            },},{id: "projects-bike-sharing-trends",
          title: 'Bike Sharing Trends',
          description: "Predicting bike sharing trends using classic machine learning methods (linear regression, decision tree)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Bike-Sharing-Trends/";
            },},{id: "projects-water-treatment-plant",
          title: 'Water Treatment Plant',
          description: "Categorizing the plant&#39;s operation state using sensor data suing SVMs.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Water-Treatment-Plant/";
            },},{id: "projects-credit-risk-prediction",
          title: 'Credit Risk Prediction',
          description: "Predicting credit risk when a person requests for loan using random forest on south German dataset (fixing imbalanced data)",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Credit-Risk-Prediction/";
            },},{id: "projects-decision-tree-implementation",
          title: 'Decision Tree Implementation',
          description: "Implementing Decision Tree Classifer from scrath and then train it on breast cancer dataset from the University of Wisconsin Hospitals",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Decision-Tree-Implementation/";
            },},{id: "projects-face-recognition",
          title: 'Face Recognition',
          description: "Face recognition using Eigen faces, PCA and support vector machines",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Face-Recognition/";
            },},{id: "projects-adaboost-implementation",
          title: 'AdaBoost Implementation',
          description: "implementing AdaBoost from scratch and comparing it with Scikit-Learn&#39;s implementation along with exploring concept of early stopping and weighted errors in boosting algorithms.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/AdaBoost-Implementation/";
            },},{id: "projects-galaxy-classifier",
          title: 'Galaxy Classifier',
          description: "Classifing galaxy images using a MLP Model with PyTorch",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Galaxy-Classifier/";
            },},{id: "projects-handwritten-digit-classification",
          title: 'Handwritten Digit Classification',
          description: "Handwritten Digit Classification on MNIST dataset using Conventional Neural Network in PyTorch",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Handwritten-Digit-Classification/";
            },},{id: "projects-covid-19-autoencoder",
          title: 'COVID 19 Autoencoder',
          description: "Using Autoencoder in keras as a nonlinear dimensionality reduction method to encode COVID-19 patients data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/COVID-19-Autoencoder/";
            },},{id: "projects-image-captioning-rnn",
          title: 'Image Captioning RNN',
          description: "Image Captioning using Recurrent Neural Networks on Flickr images with pretrained ResNet50 model features.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Image-Captioning-RNN/";
            },},{id: "projects-fluxomic-prediction",
          title: 'Fluxomic Prediction',
          description: "Applying implicit deep learning and convex optimization layers to infer metabolic fluxes from gene expression data",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Fluxomic-Prediction/";
            },},{id: "projects-iterative-methods-for-eigenvalue-problem",
          title: 'Iterative Methods for Eigenvalue Problem',
          description: "Applying Diffrenet iterative methods to find some specific (smallest or largest) eigen values",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Iterative-Methods-for-Eigenvalue-Problem/";
            },},{id: "projects-simple-messanger",
          title: 'Simple Messanger',
          description: "simple chat application implemented in Python using a server-client architecture with groups and channels",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Simple-Messanger/";
            },},{id: "projects-data-visualization",
          title: 'Data Visualization',
          description: "A curated collection of innovative data visualization projects",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Data-Visualization/";
            },},{id: "projects-p2pkh-address-generator",
          title: 'P2PKH Address Generator',
          description: "Generate custom P2PKH Bitcoin addresses with specified characters using Python. This project includes a robust algorithm for address generation with customizable options for developers and enthusiasts.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/P2PKH-Address-Generator/";
            },},{id: "projects-token-swap-dapp",
          title: 'token swap dapp',
          description: "A simple dapp  to connect with wallets and swap tokens in blockchain networks.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/token-swap-dapp/";
            },},{id: "projects-stochastic-processes",
          title: 'Stochastic Processes',
          description: "Homework Solutions for Stochastic Processes Course as Computer Science B.Sc. Student at Department of Mathematical Sciences, Sharif University of Technology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Stochastic-Processes/";
            },},{id: "projects-agricultural-image-instance-segmentation",
          title: 'Agricultural Image Instance Segmentation',
          description: "PyTorch-based Mask R-CNN framework for high-precision instance segmentation of agricultural imagery. Supports custom datasets, advanced training workflows, and robust evaluation for crop and plant analysis.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/Agricultural-Image-Instance-Segmentation/";
            },},{id: "projects-comfyui-legendary-nodes",
          title: 'ComfyUI Legendary Nodes',
          description: "Set of useful nodes for comfyui",
          section: "Projects",handler: () => {
              window.location.href = "/projects/ComfyUI-Legendary-Nodes/";
            },},{id: "projects-structuredvision",
          title: 'StructuredVision',
          description: "A powerful toolkit for extracting structured JSON data from images using multiple AI-powered OCR and vision models. Specialized for game interfaces, documents, forms, and general text extraction with schema validation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/StructuredVision/";
            },},{id: "projects-mamood-django-admin-log-viewer",
          title: 'mamood django admin log viewer',
          description: "A Django app that provides a comprehensive web interface to view and monitor log files directly in the Django admin panel.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/mamood-django-admin-log-viewer/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%61%6D.%6D%61%68%6D%6F%75%64%69@%6F%75%74%6C%6F%6F%6B.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/ammahmoudi", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/ammahmoodi", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/am-mahmoudi", "_blank");
        },
      },{
        id: 'social-telegram',
        title: 'telegram',
        section: 'Socials',
        handler: () => {
          window.open("https://telegram.me/am_mahmoudi", "_blank");
        },
      },{
        id: 'social-whatsapp',
        title: 'whatsapp',
        section: 'Socials',
        handler: () => {
          window.open("https://wa.me/989039232023", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0009-0006-8879-7932", "_blank");
        },
      },{
        id: 'social-instagram',
        title: 'Instagram',
        section: 'Socials',
        handler: () => {
          window.open("https://instagram.com/am.mahmoudi", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
