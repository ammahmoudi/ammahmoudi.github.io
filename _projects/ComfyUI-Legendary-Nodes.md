---
layout: page
category: Repositories
title: ComfyUI Legendary Nodes
description: Set of useful nodes for comfyui
date: 2025-01-20 06:19:31 +0000
last_modified_at: 2025-09-12 08:44:33 +0000
url: https://github.com/ammahmoudi/ComfyUI-Legendary-Nodes
importance: 1
img: https://raw.githubusercontent.com/ammahmoudi/ComfyUI-Legendary-Nodes/main/images/legendary_dataset_saver.png
og_image: https://raw.githubusercontent.com/ammahmoudi/ComfyUI-Legendary-Nodes/main/images/legendary_dataset_saver.png
tags: [comfyui, comfyui-custom-node, comfyui-nodes]
categories: ["Repository", Python]
---

## <div id="open-in-github" > <table class="table-cv list-group-table"> <tbody> <tr> <td class="list-group-name"><b> <a href="https://github.com/ammahmoudi/ComfyUI-Legendary-Nodes" rel="external nofollow noopener" target="_blank"><i class="fa-brands fa-github"></i> This page is auto-generated. For more info and materials take a look at the original repository.</a> </b></td></tr> </tbody> </table></div>

---

ComfyUI-Legendary-Nodes is a collection of helpful ComfyUI nodes that extend and simplify common workflows in ComfyUI — from loading images and LoRA files by URL to saving and managing datasets. This repository provides implementation and utilities for nodes that make iterative design, data handling, and model adaptation easier whether you're running ComfyUI locally or in a cloud environment.

## Table of contents

- Features
- Available nodes
- Installation
- Usage
- Examples
- Troubleshooting
- Contributing
- License & contact

## Features

- Load images directly from URLs and resize/validate them before passing to the rest of your ComfyUI graph.
- Download and apply LoRA adaptations from URLs (including optional CLIP adjustments).
- Save datasets produced in workflows to a designated location for reuse and analysis.
- Small utilities and helpers for streamlined downloader and installation flows.

## Available nodes

This project contains several high-value nodes and utilities. Main nodes include:

- Legendary Dataset Saver (`nodes/dataset_loader/dataset_loader.py`): Save and manage datasets produced by your workflow. Useful for logging experiments, storing user submissions, or exporting intermediate results.

  {% include figure.liquid path="https://raw.githubusercontent.com/ammahmoudi/ComfyUI-Legendary-Nodes/mainimages/legendary_dataset_saver.png" alt="Legendary Dataset Saver" class="img-fluid rounded z-depth-1" zoomable=true %}

- Legendary Image URL Loader (`nodes/image_url_loader/image_url_loader.py`): Load images from remote URLs and output them into ComfyUI for immediate processing. Supports basic size/format options and timeouts.

  {% include figure.liquid path="https://raw.githubusercontent.com/ammahmoudi/ComfyUI-Legendary-Nodes/mainimages/legendary_image_url_loader.png" alt="Legendary Image URL Loader" class="img-fluid rounded z-depth-1" zoomable=true %}

- Legendary LoRA URL Loader (`nodes/lora_url_loader/lora_url_loader.py`): Download and (optionally) apply LoRA files from a URL to your models and CLIP embeddings. Includes strength controls for model and CLIP adaptation.

  {% include figure.liquid path="https://raw.githubusercontent.com/ammahmoudi/ComfyUI-Legendary-Nodes/mainimages/legendary_lora_url_loader.png" alt="Legendary LoRA URL Loader" class="img-fluid rounded z-depth-1" zoomable=true %}

There are also downloader utilities and workflow helpers in `nodes/` (for example `base_downloader.py`, `download_utils.py`, and `install.py`) and higher-level automation under `nodes/auto/`.

## Installation

This project is a collection of ComfyUI nodes — it is NOT a pip-installable Python package. To install, copy the repository (or the `nodes/` folder) into your ComfyUI installation's custom nodes directory so ComfyUI can load the nodes at startup.

Steps (Windows / PowerShell example):

1. Clone or download this repository locally:

```pwsh
git clone https://github.com/ammahmoudi/ComfyUI-Legendary-Nodes.git
cd ComfyUI-Legendary-Nodes
```

1. Copy the repo (or just the `nodes/` folder) into your ComfyUI installation `custom_nodes` folder. Replace the destination path below with the path to your ComfyUI folder:

```pwsh
# Option A: copy the entire repository into ComfyUI's custom_nodes
Copy-Item -Path . -Destination 'C:\Path\To\ComfyUI\custom_nodes\ComfyUI-Legendary-Nodes' -Recurse -Force

# Option B: copy only the nodes folder
Copy-Item -Path .\nodes -Destination 'C:\Path\To\ComfyUI\custom_nodes\nodes' -Recurse -Force
```

1. Restart ComfyUI. The nodes should appear in the node palette after a restart.

Notes:

- If your ComfyUI install uses a different custom nodes directory (for example `extensions/custom_nodes`), place the files there instead.
- For cloud-hosted ComfyUI instances, follow your host's instructions for adding custom nodes or extensions; copying files may not be permitted on managed services.

## Usage

After installation the nodes should appear in ComfyUI's node palette. Typical usage patterns:

- Drag the node into your graph.
- Connect inputs (URL, model names, parameters) according to the node's fields.
- Execute or run the graph to process data through the node.

Each node exposes parameters in the node UI. See the `nodes/` folder for implementation details and parameter names.

## Examples

Example: Save a dataset using Legendary Dataset Saver

1. Add the Legendary Dataset Saver node to your workspace.
1. Configure `Dataset Name`, `Save Location`, and `Data Format`.
1. Connect the node to your data-producing nodes and run the graph.

Example: Load an image from a URL

1. Add Legendary Image URL Loader.
1. Provide an `Image URL` and optional `Resize` or `Format` settings.
1. Connect the output image to downstream processors or a visualization node.

Example: Apply a LoRA by URL

1. Place the Legendary LoRA URL Loader node.
1. Set `model`, `clip`, `lora_link`, and `strength_model` / `strength_clip`.
1. Run the graph — the node will download the LoRA and apply adaptations according to the strengths provided.

## Troubleshooting / Common issues

- Connection Errors: Verify node parameters and check for typographical mistakes. Ensure graph connections are made to compatible ports.
- Node Not Responding: Try restarting your ComfyUI session; transient network or resource issues can cause stalls.
- Invalid URL / Timeout: Ensure the provided URL is reachable and points directly to a valid resource (image or LoRA file). Increase timeout for slow hosts.
- Unsupported Format: Confirm the requested format (e.g., image format) is supported by your environment. Convert the resource if necessary.
- Save / Permission Errors: Confirm the target save path exists and the running process has write permissions.

If the problem persists, inspect the logs from ComfyUI and open an issue with a reproducible example.

## Contributing

Contributions, bug reports, and feature requests are welcome.

Suggested workflow:

1. Fork the repository and create a feature branch.
1. Add tests or a small example demonstrating the change.
1. Open a pull request describing what you changed and why.

Please follow repository coding style and include small, focused commits.

## License & contact

If this repository includes a `LICENSE` file, that file governs the licensing terms. If not, contact the repository owner for clarification before using this code in production.

For questions or help, open an issue on the project's GitHub page or contact the maintainer.

---

This README was generated and adapted from the documentation provided for the project; for more details, inspect the source files under the `nodes/` directory.
