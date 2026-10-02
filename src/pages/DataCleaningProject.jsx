import { useEffect, useState } from 'react'
import './DataCleaningProject.css'

import dc1 from '../assets/dc1-duplicates-highlighted.png'
import dc2 from '../assets/dc2-remove-duplicates-dialog.png'
import dc3 from '../assets/dc3-duplicates-removed.png'
import dc4 from '../assets/dc4-clean-after-duplicates.png'
import dc5 from '../assets/dc5-blank-rule.png'
import dc6 from '../assets/dc6-blanks-highlighted.png'
import dc7 from '../assets/dc7-delete-blank-rows.png'
import dc8 from '../assets/dc8-clean-after-blanks.png'
import dc9 from '../assets/dc9-text-wizard-step1.png'
import dc10 from '../assets/dc10-text-wizard-step2.png'
import dc11 from '../assets/dc11-text-columns-result.png'
import dc12 from '../assets/dc12-parsed-columns.png'
import dc13 from '../assets/dc13-trim-function.png'
import dc14 from '../assets/dc14-trim-applied.png'
import dc15 from '../assets/dc15-upper-lower-proper.png'
import dc16 from '../assets/dc16-highlight-errors.png'
import dc17 from '../assets/dc17-find-replace.png'
import dc18 from '../assets/dc18-spell-check.png'

const steps = [
  {
    num: 1,
    title: 'Finding Duplicates',
    description: 'The first step in any data cleaning process is identifying duplicate entries. I used Conditional Formatting → Highlight Cell Rules → Duplicate Values to visually flag rows with repeated Sales Order numbers. These types of duplicate entries commonly occur during manual data entry or when copying data between worksheets — as a data analyst, it\'s critical to catch these before any analysis begins.',
    images: [
      { src: dc1, caption: 'Conditional Formatting highlights duplicate Sales Order numbers in orange' },
      { src: dc4, caption: 'Clean worksheet after identifying all duplicate rows' },
    ]
  },
  {
    num: 2,
    title: 'Removing Duplicates',
    description: 'Rather than removing duplicate rows one by one (impractical with large datasets), I used Excel\'s built-in Remove Duplicates tool located in the Data toolbar. I selected the Sales_Order_Number column, confirmed that my data has headers, and executed the removal — Excel confirmed that 2 duplicate values were found and removed, leaving 87 unique records.',
    images: [
      { src: dc2, caption: 'Remove Duplicates dialog — selecting Sales_Order column with headers checked' },
      { src: dc3, caption: 'Confirmation: 2 duplicates removed, 87 unique values remain' },
    ]
  },
  {
    num: 3,
    title: 'Finding Empty Cells',
    description: 'Blank cells can result from human error during manual data entry or from copying data from external sources. As a data analyst, I need to decide whether to fill blanks with a constant value, infer the value from surrounding data, or go back to the source. I used Conditional Formatting → New Rule → Format cells that contain Blanks to highlight all empty cells across the dataset.',
    images: [
      { src: dc5, caption: 'New Formatting Rule — formatting cells that contain Blanks' },
      { src: dc6, caption: 'Empty cells highlighted in red across multiple columns' },
    ]
  },
  {
    num: 4,
    title: 'Removing Blank Rows',
    description: 'After identifying the blank cells, I evaluated each one to determine the best course of action. Where the missing data couldn\'t be recovered from the source, I removed the entire row to maintain dataset integrity. The result is a clean, complete dataset ready for the next cleaning steps.',
    images: [
      { src: dc7, caption: 'Right-click context menu — deleting blank rows from the dataset' },
      { src: dc8, caption: 'Clean dataset after all blank rows have been removed' },
    ]
  },
  {
    num: 5,
    title: 'Data Parsing — Text to Columns',
    description: 'Some cells contained multiple data elements combined with comma delimiters — for example, Product_Description held values like "Mountain-200,Black,46" (model, color, size all in one cell). I used Data → Text to Columns to parse this into separate columns. The wizard detected the comma delimiter and split the data cleanly into individual Product, Color, and Size columns.',
    images: [
      { src: dc9, caption: 'Text to Columns Wizard Step 1 — selecting "Delimited" data type' },
      { src: dc10, caption: 'Step 2 — comma selected as delimiter, preview shows clean column splits' },
      { src: dc11, caption: 'After parsing — new Color and Size columns appear' },
      { src: dc12, caption: 'Final result — Product_Description, Color, and Size in separate columns' },
    ]
  },
  {
    num: 6,
    title: 'Removing Extra Spaces — TRIM Function',
    description: 'When data is pasted from external sources, cells often contain leading, trailing, or extra spaces that cause search and query errors. I created comparison columns showing the string length before and after applying the TRIM function — =TRIM(cell) — to prove the extra spaces existed and were successfully removed. This ensures accurate filtering and matching.',
    images: [
      { src: dc13, caption: 'TRIM function with "length before" vs "length after" columns showing space removal' },
      { src: dc14, caption: '=TRIM() formula applied directly to clean the State column' },
    ]
  },
  {
    num: 7,
    title: 'Changing Case — UPPER, LOWER, PROPER',
    description: 'Inconsistent text casing makes data unreliable for analysis. Excel provides three case functions: =UPPER() converts text to ALL CAPS, =LOWER() converts to all lowercase, and =PROPER() capitalizes the first letter of each word. I demonstrated all three on the State column — using =PROPER() as the final standard for clean, readable data like "New South Wales" instead of "NEW SOUTH WALES" or "new south wales".',
    images: [
      { src: dc15, caption: 'Side-by-side: UPPER, LOWER, and PROPER case conversions on State data' },
    ]
  },
  {
    num: 8,
    title: 'Highlighting Possible Errors',
    description: 'Every dataset contains potential errors that can skew analysis results. I identified cells in the Cost and Revenue columns containing $0.00 values — which are clearly false entries for product sales. Using Conditional Formatting → Highlight Cell Rules → Equal To 0, I flagged these records. As a data analyst, the next step is to determine whether to correct these values from the source or remove the rows entirely.',
    images: [
      { src: dc16, caption: 'Conditional Formatting rule highlighting all cells equal to 0' },
    ]
  },
  {
    num: 9,
    title: 'Find & Replace',
    description: 'To improve data readability and prepare for visualization, I used Find & Replace (Ctrl+H) to convert abbreviated gender codes in the Customer_Gender column — replacing "F" with "Female" and "M" with "Male". This makes the data immediately understandable in charts and reports without needing a legend or decoder, which is essential for clear decision-making dashboards.',
    images: [
      { src: dc17, caption: 'Find & Replace dialog — replacing "F" with "Female" across the dataset' },
    ]
  },
  {
    num: 10,
    title: 'Spell Check',
    description: 'The final quality check — I ran Excel\'s Spell Check (Review tab) across the entire worksheet to catch any spelling errors that could cause incorrect search results or mismatched queries. For example, "Decemeber" was flagged and corrected to "December". This small but crucial step prevents data mismatches during analysis and reporting.',
    images: [
      { src: dc18, caption: 'Spell Check dialog — correcting "Decemeber" to "December"' },
    ]
  },
]

const DataCleaningProject = () => {
  const [lightboxImg, setLightboxImg] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="dc-page">
      {/* Top Nav */}
      <div className="dc-top-nav">
        <a href="#home" className="btn btn-outline dc-back-btn">← Back to Home</a>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="dc-lightbox" onClick={() => setLightboxImg(null)}>
          <span className="dc-lightbox-close">&times;</span>
          <img src={lightboxImg} alt="Enlarged screenshot" className="dc-lightbox-img" />
        </div>
      )}

      {/* Hero */}
      <section className="dc-hero">
        <div className="container">
          <div className="dc-hero-badge">DATA ANALYTICS</div>
          <h1 className="dc-hero-title">Preparing & Cleaning Data for Analysis</h1>
          <h2 className="dc-hero-subtitle">Microsoft Excel • Data Cleaning • Data Preparation</h2>
          <p className="dc-hero-intro">
            Cleaned and transformed a Bike Sales dataset using Excel's data preparation tools — removing duplicates, handling missing values, parsing combined fields, standardizing formats, and validating data integrity to make it analysis-ready.
          </p>
          <div className="dc-hero-stats">
            <div className="dc-stat">
              <span className="dc-stat-number">10</span>
              <span className="dc-stat-label">Cleaning Steps</span>
            </div>
            <div className="dc-stat">
              <span className="dc-stat-number">87</span>
              <span className="dc-stat-label">Clean Records</span>
            </div>
            <div className="dc-stat">
              <span className="dc-stat-number">Excel</span>
              <span className="dc-stat-label">Primary Tool</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Tags */}
      <section className="dc-skills-section">
        <div className="container">
          <div className="dc-skills-tags">
            {['Data Cleaning', 'Excel Formulas', 'TRIM', 'Text to Columns', 'Conditional Formatting', 'Find & Replace', 'Data Validation', 'Spell Check', 'UPPER/LOWER/PROPER', 'Remove Duplicates'].map(tag => (
              <span key={tag} className="dc-skill-tag">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="dc-steps-section">
        <div className="container">
          <h3 className="dc-steps-heading">The Process — Step by Step</h3>
          <div className="dc-steps">
            {steps.map((step) => (
              <div key={step.num} className="dc-step">
                <div className="dc-step-header">
                  <div className="dc-step-num">{String(step.num).padStart(2, '0')}</div>
                  <div className="dc-step-info">
                    <h4 className="dc-step-title">{step.title}</h4>
                    <p className="dc-step-desc">{step.description}</p>
                  </div>
                </div>
                <div className={`dc-step-gallery ${step.images.length === 1 ? 'single' : ''}`}>
                  {step.images.map((img, i) => (
                    <div key={i} className="dc-step-image" onClick={() => setLightboxImg(img.src)}>
                      <img src={img.src} alt={img.caption} />
                      <p className="dc-step-caption">{img.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="dc-takeaways">
        <div className="container">
          <h3 className="dc-takeaways-title">Key Takeaways</h3>
          <div className="dc-takeaways-grid">
            <div className="dc-takeaway-card">
              <div className="dc-takeaway-icon">🔍</div>
              <h4>Data Quality Matters</h4>
              <p>Duplicates, blanks, and errors in raw data make analysis results unreliable. Cleaning is the critical first step before any insights can be drawn.</p>
            </div>
            <div className="dc-takeaway-card">
              <div className="dc-takeaway-icon">🛠️</div>
              <h4>Excel is Powerful</h4>
              <p>Functions like TRIM, Text to Columns, and Conditional Formatting transform messy data into structured, analysis-ready datasets efficiently.</p>
            </div>
            <div className="dc-takeaway-card">
              <div className="dc-takeaway-icon">📊</div>
              <h4>Foundation for Analysis</h4>
              <p>This cleaned dataset is now ready for deeper analysis — sorting, filtering, pivot tables, and visualizations that drive real business decisions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="container">
        <section className="dc-footer">
          <a href="#home" className="btn btn-outline">← Back to Home</a>
        </section>
      </div>
    </div>
  )
}

export default DataCleaningProject
