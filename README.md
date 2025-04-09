# Cover Letter Generator PWA

A Progressive Web App that generates professional cover letters based on your CV and job description.

## Features

- Upload your CV (PDF/DOC/DOCX)
- Enter job details (company, position, description)
- Generate professional cover letter PDF
- Download the generated letter
- PWA support for offline use
- Animated UI with smooth transitions

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`

### Building for Production

```bash
npm run build
```

### Previewing Production Build

```bash
npm run preview
```

## Usage

1. **Upload your CV**:
   - Click "Upload CV" button
   - Select your CV file (PDF, DOC, or DOCX)

2. **Enter job details**:
   - Fill in company name
   - Enter position title
   - Paste job description

3. **Generate cover letter**:
   - The app automatically generates a preview
   - Click "Download PDF" to save your cover letter

## Project Structure

```
src/
├── components/       # React components
├── features/         # Redux slices
├── data-source/      # Mock API implementations
├── store/            # Redux store configuration
├── App.jsx           # Main application component
└── main.jsx          # Application entry point
```

## Technologies Used

- React
- Redux Toolkit
- Tailwind CSS
- Framer Motion (animations)
- PDF-lib (PDF generation)
- Vite (build tool)
- PWA support

## License

MIT
