---
layout: page
category: Repositories
title: StructuredVision
description: A powerful toolkit for extracting structured JSON data from images using multiple AI-powered OCR and vision models. Specialized for game interfaces, documents, forms, and general text extraction with schema validation.
date: 2025-06-03 11:11:29 +0000
last_modified_at: 2025-09-12 10:21:28 +0000
url: https://github.com/ammahmoudi/StructuredVision
importance: 1
img: https://raw.githubusercontent.com/ammahmoudi/StructuredVision/main/sample_easyocr_text_regions.jpg
og_image: https://raw.githubusercontent.com/ammahmoudi/StructuredVision/main/sample_easyocr_text_regions.jpg
tags: [ocr, structured-output, text-extraction, vlm]
categories: ["Repository", Python]
---
<div id="open-in-github" > <table class="table-cv list-group-table"> <tbody> <tr>    <td class="list-group-name"><b>   <a href="https://github.com/ammahmoudi/StructuredVision" rel="external nofollow noopener" target="_blank"><i class="fa-brands fa-github"></i> This page is auto-generated. For more info and materials take a look at the original repository.</a> </b></td></tr> </tbody> </table></div>
---
A powerful toolkit for extracting structured JSON data from images using multiple AI-powered OCR and vision models. Specialized for game interfaces, documents, forms, and general text extraction with schema validation.

## 🚀 Overview

StructuredVision converts images into structured JSON data using state-of-the-art extraction methods:

- **Google Gemini Vision API** for AI-powered structured data extraction with schema validation
- **Traditional OCR** (Tesseract) for reliable text extraction with preprocessing
- **Vision Language Models (VLM)** for advanced text understanding
- **EasyOCR** for multi-language text recognition

Perfect for automating data extraction from screenshots, documents, forms, and game interfaces.

## ✨ Features

### 🎯 **Multi-Method Extraction**
- **Gemini AI**: Schema-based structured data extraction with validation
- **OCR**: Traditional text extraction with preprocessing options
- **VLM**: Vision-language models for context-aware extraction
- **Auto-Selection**: Intelligent method selection based on input

### 🎮 **Gaming Specialization**
- **Rainbow Six Siege**: Extract lobby data, team compositions, match details
- **Custom Gaming Schemas**: Extensible for other games
- **Real-time Analysis**: Process game screenshots for data analysis

### 📄 **Document Processing**
- **Receipts**: Extract merchant, items, totals, dates
- **Invoices**: Parse billing information, line items, amounts
- **Business Cards**: Extract contact information
- **Forms**: Process filled form data

### 🔧 **Advanced Features**
- **JSON Schema Validation**: Ensure data structure consistency
- **Batch Processing**: Handle multiple images efficiently
- **Method Comparison**: Compare different extraction approaches
- **Visualization**: Generate annotated output images
- **CLI Interface**: Command-line tool for automation

## 📦 Installation

### Prerequisites

- **Python 3.10+** (required)
- **Git** for cloning the repository

### Method 1: Development Installation (Recommended)

```bash
# Clone the repository
git clone https://github.com/ammahmoudi/StructuredVision.git
cd StructuredVision

# Install with uv (recommended)
uv sync

# Or install with pip
pip install -e .
```

### Method 2: Install with Dependencies

```bash
# Install with all optional dependencies
pip install -e ".[test,dev,ocr,docs]"

# Install only testing dependencies
pip install -e ".[test]"

# Install only OCR dependencies
pip install -e ".[ocr]"
```

### Method 3: Package Installation

```bash
# Install as package
pip install .

# Or using setup.py
python setup.py install
```

### API Keys Setup

```bash
# For Gemini API (required for structured extraction)
export GOOGLE_API_KEY="your_google_api_key_here"

# Or create a .env file
echo "GOOGLE_API_KEY=your_api_key" > .env
```

### System Dependencies

```bash
# Install Tesseract OCR (optional, for OCR functionality)
# Ubuntu/Debian:
sudo apt-get install tesseract-ocr

# macOS:
brew install tesseract

# Windows: Download from [https://github.com/UB-Mannheim/tesseract/wiki](https://github.com/UB-Mannheim/tesseract/wiki)
```

### Verify Installation

```bash
# Run tests to verify installation
uv run pytest tests/schemas/ tests/extractors/test_base_extractor.py tests/utils/test_config.py

# Or run the full test suite
python run_tests.py

# Check basic functionality
python -c "from structured_vision import StructuredVision; print('Installation successful!')"
```

## 🎯 Quick Start

### Basic Text Extraction
```python
from structured_vision import StructuredVision

# Initialize
sv = StructuredVision()

# Extract text
result = sv.extract_text("image.png")
print(result["extracted_text"])
```

### Structured Data with Schema
```python
# Extract receipt data
result = sv.extract_document_data("receipt.jpg", "receipt")
print(f"Merchant: {result['merchant_name']}")
print(f"Total: {result['total_amount']}")

# Extract gaming data
result = sv.extract_gaming_data("r6_lobby.png", "r6")
print(f"Map: {result['match_details']['map_name']}")
print(f"Teams: {result['teams']}")
```

### Custom Schema
```python
# Define custom schema
schema = {
    "title": "Business Card",
    "type": "object",
    "properties": {
        "name": {"type": "string"},
        "title": {"type": "string"},
        "company": {"type": "string"},
        "email": {"type": "string"}
    }
}

# Extract with schema
result = sv.extract("business_card.jpg", schema=schema)
```

## 🖥️ Command Line Interface

```bash
# Extract text from image
sv-extract image.png --text

# Extract document data
sv-extract receipt.jpg --document receipt

# Extract gaming data
sv-extract r6_lobby.png --gaming r6

# Compare methods
sv-extract image.png --compare

# Batch processing
sv-extract *.png --batch --output results/

# Use custom schema
sv-extract image.png --schema custom_schema.json

# Full example with options
sv-extract image.png --extractor gemini --output results/ --verbose
```

## 📊 Output Examples

### Text Extraction
```json
{
    "extractor": "ocr",
    "image_path": "sample.png",
    "extracted_text": "PLAY OPERATORS SHOP...",
    "total_words": 15,
    "extracted_words": [
        {
            "text": "PLAY",
            "confidence": 96,
            "position": {"left": 380, "top": 55, "width": 61, "height": 42}
        }
    ]
}
```

<!-- Add sample images for EasyOCR regions and structured data examples -->

{% include figure.liquid path="https://raw.githubusercontent.com/ammahmoudi/StructuredVision/mainsample_easyocr_text_regions.jpg" alt="EasyOCR text regions example" class="img-fluid rounded z-depth-1" zoomable=true %}
*Figure: Detected text regions using EasyOCR — useful for debugging region detection and OCR preprocessing.*


### Gaming Data (R6 Lobby)
```json
{
    "match_details": {
        "lobby_header": "CUSTOM GAME",
        "time_remaining": "4:00",
        "game_type": "BOMB",
        "map_name": "OREGON",
        "map_time_of_day": "DAY"
    },
    "teams": {
        "blue_team": ["Player1", "Player2", "Player3"],
        "orange_team": ["Player4", "Player5"]
    },
    "spectators": ["Spectator1"]
}
```

{% include figure.liquid path="https://raw.githubusercontent.com/ammahmoudi/StructuredVision/mainsample_structured_data.jpg" alt="Structured data extraction example" class="img-fluid rounded z-depth-1" zoomable=true %}
*Figure: Example of the structured JSON output visualized alongside the original image — helpful for verifying schema fields and values.*


### Receipt Data
```json
{
    "merchant_name": "SuperMarket",
    "date": "2024-01-15",
    "total_amount": "$45.67",
    "items": [
        {"name": "Bread", "price": "$2.99"},
        {"name": "Milk", "price": "$3.49"}
    ]
}
```
## 🔧 Configuration

### Configuration File
```python
from structured_vision.utils import create_default_config

# Create default config
config = create_default_config("config.json")

# Use custom config
sv = StructuredVision(config="config.json")
```

### Environment Variables
```bash
# Extraction settings
export SV_EXTRACTOR_TYPE=gemini
export SV_PREPROCESSING=adaptive
export SV_CONFIDENCE_THRESHOLD=70

# API keys
export GOOGLE_API_KEY=your_key
```

## 🎮 Gaming Examples

### Rainbow Six Siege Lobby
```python
# Specialized R6 extraction
result = sv.extract_gaming_data("r6_lobby.png", "r6")

# Access structured data
match_info = result["match_details"]
teams = result["teams"]
print(f"Playing {match_info['game_type']} on {match_info['map_name']}")
```

### Custom Gaming Schema
```python
# Define custom game schema
valorant_schema = {
    "title": "Valorant Match",
    "properties": {
        "map": {"type": "string"},
        "mode": {"type": "string"},
        "players": {"type": "array", "items": {"type": "string"}}
    }
}

result = sv.extract("valorant.png", schema=valorant_schema)
```

## 📄 Document Processing

### Receipts
```python
# Extract receipt data
result = sv.extract_document_data("receipt.jpg", "receipt")
print(f"Total: {result['total_amount']}")
for item in result["items"]:
    print(f"- {item['name']}: {item['price']}")
```

### Invoices
```python
# Extract invoice data
result = sv.extract_document_data("invoice.pdf", "invoice")
print(f"Invoice #{result['invoice_number']}")
print(f"Vendor: {result['vendor']['name']}")
```

## 🔍 Method Comparison

```python
# Compare different extraction methods
comparison = sv.compare_methods("image.png")

for method, result in comparison["methods"].items():
    if result["success"]:
        print(f"{method}: {len(result['extracted_text'])} characters")
    else:
        print(f"{method}: Failed - {result['error']}")
```

## 📚 Advanced Usage

### Batch Processing
```python
# Process multiple images
results = sv.batch_extract(
    image_paths=["img1.png", "img2.png", "img3.png"],
    schema=receipt_schema,
    output_dir="results/"
)

print(f"Processed {results['successful']} images successfully")
```

### Custom Preprocessing
```python
from structured_vision.utils import preprocess_image

# Custom image preprocessing
enhanced_image = preprocess_image("image.png", "sharpen")
result = sv.extract_text(enhanced_image)
```

## 🏗️ Project Structure

```
StructuredVision/
├── structured_vision/          # Main package
│   ├── extractors/            # Extraction engines
│   │   ├── gemini_extractor.py    # Gemini API extractor
│   │   ├── ocr_extractor.py       # OCR-based extractors
│   │   └── base_extractor.py      # Base class
│   ├── utils/                 # Utilities
│   │   ├── image_processing.py    # Image preprocessing
│   │   └── config.py              # Configuration management
│   ├── schemas/               # Predefined schemas
│   │   ├── gaming.py              # Gaming schemas (R6, etc.)
│   │   └── documents.py           # Document schemas
│   ├── examples/              # Usage examples
│   └── main.py               # Main API class
├── sv_extract.py             # CLI script
├── setup.py                  # Package setup
└── requirements.txt          # Dependencies
```

## 📋 Requirements

### Core Dependencies

- **Python 3.10+** (required)
- **google-genai ≥1.36.0** - Gemini API for structured extraction
- **opencv-python ≥4.11.0** - Computer vision operations
- **pillow ≥11.3.0** - Image processing
- **numpy ≥2.2.6** - Numerical operations
- **matplotlib ≥3.10.6** - Visualizations
- **jsonschema ≥4.0.0** - Schema validation
- **python-dotenv ≥1.1.1** - Environment variable management

### Optional Dependencies

#### OCR Support
- **pytesseract ≥0.3.0** - Traditional OCR (requires system Tesseract)
- **easyocr ≥1.7.0** - Multi-language OCR

#### AI/ML Support
- **torch ≥2.8.0** - PyTorch for VLM models
- **transformers ≥4.56.1** - Hugging Face transformers
- **sentencepiece ≥0.2.1** - Text tokenization

#### Development Tools
- **pytest ≥7.0.0** - Testing framework
- **pytest-cov ≥4.0.0** - Coverage reporting
- **black ≥23.0.0** - Code formatting
- **isort ≥5.12.0** - Import sorting
- **mypy ≥1.0.0** - Type checking

### System Requirements

- **Tesseract OCR**: For traditional OCR functionality
  - Ubuntu/Debian: `sudo apt-get install tesseract-ocr`
  - macOS: `brew install tesseract`
  - Windows: [Download installer](https://github.com/UB-Mannheim/tesseract/wiki)
- **GPU Support**: CUDA for accelerated VLM processing (optional)
- **Memory**: 4GB+ RAM recommended for large image processing

## � Testing

StructuredVision comes with a comprehensive test suite covering core functionality:

### Quick Test Run

```bash
# Run core working tests (75 tests)
uv run pytest tests/schemas/ tests/extractors/test_base_extractor.py tests/utils/test_config.py

# Run with coverage
python run_tests.py

# PowerShell (Windows)
.\run_tests.ps1
```

### Test Categories

- **Schema Tests** (40 tests) ✅ - Document and gaming schema validation
- **Base Extractor Tests** (16 tests) ✅ - Core extraction functionality
- **Configuration Tests** (19 tests) ✅ - Config loading and environment handling

### Current Test Status

- **Total Tests**: 149 (75 currently passing)
- **Test Coverage**: 28% and growing
- **CI/CD**: GitHub Actions integration ready

### Running All Tests

```bash
# Full test suite (includes some failing tests under development)
uv run pytest tests/ --cov=structured_vision

# Generate HTML coverage report
uv run pytest tests/ --cov=structured_vision --cov-report=html
```

### Test Development

Tests are organized by component:

```
tests/
├── schemas/           # Schema validation tests ✅
├── extractors/        # Extractor functionality tests
├── utils/            # Utility function tests ✅
├── test_integration.py # End-to-end integration tests
└── conftest.py       # Shared test fixtures
```

## �🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make changes** and add tests
4. **Run tests**: `python run_tests.py` or `pytest tests/`
5. **Submit a Pull Request**

### Development Setup

```bash
# Clone your fork
git clone https://github.com/your-username/StructuredVision.git
cd StructuredVision

# Install in development mode with all dependencies
uv sync

# Or with pip
pip install -e ".[test,dev,ocr,docs]"

# Run tests to verify setup
python run_tests.py

# Run linting and formatting
black structured_vision/ tests/
isort structured_vision/ tests/
mypy structured_vision/
```

### Testing Guidelines

- Write tests for new features in the appropriate `tests/` subdirectory
- Aim for high test coverage of new code
- Use the existing test patterns and fixtures in `conftest.py`
- Test both success and error cases

### Code Style

- **Black** for code formatting (line length: 100)
- **isort** for import sorting
- **mypy** for type checking
- **pytest** for testing

Run the pre-commit hooks:

```bash
# Install pre-commit
pip install pre-commit
pre-commit install

# Run manually
pre-commit run --all-files
```

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini** - AI-powered structured extraction
- **Tesseract OCR** - Open source OCR engine
- **OpenCV** - Computer vision library
- **EasyOCR** - Multi-language text recognition
- **Transformers** - Hugging Face model library

## 📞 Support

- **Issues**: [GitHub Issues](https://github.com/ammahmoudi/StructuredVision/issues)
- **Discussions**: [GitHub Discussions](https://github.com/ammahmoudi/StructuredVision/discussions)
- **Documentation**: [Project Wiki](https://github.com/ammahmoudi/StructuredVision/wiki)

---

**StructuredVision** - Transform images into structured data with AI precision 🎯
