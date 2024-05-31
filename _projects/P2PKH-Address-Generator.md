---
layout: page
category: Repositories
title: P2PKH Address Generator
description: Generate custom P2PKH Bitcoin addresses with specified characters using Python. This project includes a robust algorithm for address generation with customizable options for developers and enthusiasts.
date: 2024-05-26 12:22:41 +0000
last_modified_at: 2024-05-26 13:44:39 +0000
url: https://github.com/ammahmoudi/P2PKH-Address-Generator
importance: 1
img: https://raw.githubusercontent.com/ammahmoudi/P2PKH-Address-Generator/main/images/cover.jpg
og_image: https://raw.githubusercontent.com/ammahmoudi/P2PKH-Address-Generator/main/images/cover.jpg
tags: [bitcoin, blockchain, cryptography, p2pkh]
categories: ["Repository", Python]
---
<div id="open-in-github" > <table class="table-cv list-group-table"> <tbody> <tr>    <td class="list-group-name"><b>   <a href="https://github.com/ammahmoudi/P2PKH-Address-Generator" rel="external nofollow noopener" target="_blank"><i class="fa-brands fa-github"></i> This page is auto-generated. For more info and materials take a look at the original repository.</a> </b></td></tr> </tbody> </table></div>
---

{% include figure.liquid path="https://raw.githubusercontent.com/ammahmoudi/P2PKH-Address-Generator/main/images/cover.jpg" alt="cover" class="img-fluid rounded z-depth-1" zoomable=true %}

This Python application is designed to generate Pay-to-PubKey-Hash (P2PKH) Bitcoin addresses with the ability to specify the second and third characters of the address. It includes a loop to generate both public and private keys, runs the address generation algorithm, and checks if the address meets the specified criteria.

## Features

- Generates P2PKH Bitcoin addresses.
- Allows customization of the second and third characters of the address.
- Implements the full address generation algorithm, including SHA-256 and RIPEMD-160 hashing, network byte addition, checksum calculation, and Base58 encoding.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

```
Python 3.x
```

### Installing

A step by step series of examples that tell you how to get a development environment running:

First, clone the repository to your local machine:

```sh
git clone https://github.com/your-username/P2PKH-Address-Generator.git
```

Then, navigate to the cloned directory:

```sh
cd P2PKH-Address-Generator
```

Install the required packages:

```sh
pip install -r requirements.txt
```