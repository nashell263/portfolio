import { useEffect, useState } from 'react'
import './PowerBIProject.css'

import pbiDashboard from '../assets/pbi-dashboard.png'

const PowerBIProject = () => {
  const [lightboxImg, setLightboxImg] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="pbi-page">
      {/* Top Nav */}
      <div className="pbi-top-nav">
        <a href="#home" className="btn btn-outline pbi-back-btn">← Back to Home</a>
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div className="pbi-lightbox" onClick={() => setLightboxImg(null)}>
          <span className="pbi-lightbox-close">&times;</span>
          <img src={lightboxImg} alt="Enlarged screenshot" className="pbi-lightbox-img" />
        </div>
      )}

      {/* Hero */}
      <section className="pbi-hero">
        <div className="container">
          <div className="pbi-hero-badge">DATA ANALYTICS / BUSINESS INTELLIGENCE</div>
          <h1 className="pbi-hero-title">Data Professional Survey Analysis Dashboard</h1>
          <h2 className="pbi-hero-subtitle">Power BI • Power Query • Excel</h2>
          <p className="pbi-hero-intro">
            This project explores survey responses from data professionals using Microsoft Power BI. The aim was to transform raw survey data into an interactive dashboard that highlights patterns in reported salaries, job roles, programming language preferences, geographical differences, and career satisfaction.
          </p>
          <p className="pbi-hero-intro">
            Using Power Query, I cleaned and transformed the dataset before building visualisations to compare categories and summarise survey responses. The project strengthened my understanding of data preparation, data analysis, visualisation, and dashboard design.
          </p>
          <div className="pbi-hero-stats">
            <div className="pbi-stat">
              <span className="pbi-stat-number">630</span>
              <span className="pbi-stat-label">Survey Respondents</span>
            </div>
            <div className="pbi-stat">
              <span className="pbi-stat-number">29.87</span>
              <span className="pbi-stat-label">Avg Age</span>
            </div>
            <div className="pbi-stat">
              <span className="pbi-stat-number">6+</span>
              <span className="pbi-stat-label">Visualisations</span>
            </div>
            <div className="pbi-stat">
              <span className="pbi-stat-number">Power BI</span>
              <span className="pbi-stat-label">Primary Tool</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Tags */}
      <section className="pbi-skills-section">
        <div className="container">
          <div className="pbi-skills-tags">
            {['Power BI', 'Power Query', 'Excel', 'Data Cleaning', 'Data Analysis', 'Data Visualisation', 'Business Intelligence', 'DAX', 'ETL'].map(tag => (
              <span key={tag} className="pbi-skill-tag">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Screenshot */}
      <section className="pbi-dashboard-section">
        <div className="container">
          <h3 className="pbi-section-heading">Completed Dashboard</h3>
          <div className="pbi-dashboard-image" onClick={() => setLightboxImg(pbiDashboard)}>
            <img src={pbiDashboard} alt="Data Professional Survey Analysis Dashboard in Power BI — showing salary comparisons, programming language preferences, geographic breakdowns, and satisfaction ratings" />
            <p className="pbi-dashboard-caption">Click to enlarge — Data Professional Survey Breakdown dashboard</p>
          </div>
        </div>
      </section>

      {/* Business Questions */}
      <section className="pbi-questions-section">
        <div className="container">
          <h3 className="pbi-section-heading">Business Questions Explored</h3>
          <div className="pbi-questions-grid">
            {[
              { icon: '💰', question: 'Which data-related job roles report the highest average salaries?' },
              { icon: '💻', question: 'Which programming languages are most popular among survey respondents?' },
              { icon: '🌍', question: 'How do estimated salaries vary across countries?' },
              { icon: '⚖️', question: 'What are the reported levels of salary satisfaction and work-life balance?' },
              { icon: '🚪', question: 'How do respondents describe the difficulty of entering the data profession?' },
              { icon: '📊', question: 'What differences appear in reported salary figures across demographic groups?' },
            ].map((item, i) => (
              <div key={i} className="pbi-question-card">
                <span className="pbi-question-icon">{item.icon}</span>
                <p>{item.question}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Workflow Steps */}
      <section className="pbi-workflow-section">
        <div className="container">
          <h3 className="pbi-section-heading">Project Workflow</h3>
          <div className="pbi-workflow-steps">
            <div className="pbi-workflow-step">
              <div className="pbi-workflow-header">
                <div className="pbi-workflow-num">01</div>
                <div className="pbi-workflow-info">
                  <h4>Data Import & Exploration</h4>
                  <p>I worked with a survey dataset containing responses from data professionals. The dataset included fields related to job titles, salary, countries, programming language preferences, and career satisfaction. I imported the dataset into Power BI and examined the available fields to understand which information was relevant to the analysis.</p>
                </div>
              </div>
            </div>
            <div className="pbi-workflow-step">
              <div className="pbi-workflow-header">
                <div className="pbi-workflow-num">02</div>
                <div className="pbi-workflow-info">
                  <h4>Data Cleaning & Transformation</h4>
                  <p>I used Power Query to prepare the dataset for analysis. This included removing unnecessary columns, standardising and simplifying job-title categories, cleaning programming-language responses and grouping less common responses into an 'Other' category, preparing salary ranges for numerical analysis, setting appropriate data types for numerical and categorical fields, and preparing the cleaned data for use in visualisations.</p>
                </div>
              </div>
            </div>
            <div className="pbi-workflow-step">
              <div className="pbi-workflow-header">
                <div className="pbi-workflow-num">03</div>
                <div className="pbi-workflow-info">
                  <h4>Data Analysis</h4>
                  <p>I explored the cleaned data using counts, averages, and comparisons across categories — comparing average reported salaries by job title, exploring programming language preferences, comparing salary estimates across countries, summarising salary satisfaction and work-life balance ratings, and examining responses about entering the data profession.</p>
                </div>
              </div>
            </div>
            <div className="pbi-workflow-step">
              <div className="pbi-workflow-header">
                <div className="pbi-workflow-num">04</div>
                <div className="pbi-workflow-info">
                  <h4>Data Visualisation & Dashboard Design</h4>
                  <p>I used Power BI visuals to make the results easier to interpret — including KPI cards for high-level statistics (count of survey takers, average age), bar charts for salary comparisons by job title, a stacked column chart for programming language preferences by role, a treemap for geographical salary comparisons, gauge charts for work-life balance and salary satisfaction ratings, and a donut chart for average salary by sex.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Findings */}
      <section className="pbi-findings-section">
        <div className="container">
          <h3 className="pbi-section-heading">Key Findings</h3>
          <div className="pbi-findings-grid">
            <div className="pbi-finding-card">
              <span className="pbi-finding-icon">🐍</span>
              <h4>Python Most Popular</h4>
              <p>Python was the most popular programming language among survey respondents across nearly all job roles.</p>
            </div>
            <div className="pbi-finding-card">
              <span className="pbi-finding-icon">📈</span>
              <h4>Data Scientists Earn Most</h4>
              <p>Data Scientists reported the highest average salary among the compared job roles in the survey.</p>
            </div>
            <div className="pbi-finding-card">
              <span className="pbi-finding-icon">⚖️</span>
              <h4>Work-Life Balance: 5.74/10</h4>
              <p>The average reported work-life balance satisfaction among respondents was 5.74 out of 10.</p>
            </div>
            <div className="pbi-finding-card">
              <span className="pbi-finding-icon">💰</span>
              <h4>Salary Satisfaction: 4.27/10</h4>
              <p>Salary satisfaction was notably lower than work-life balance, averaging 4.27 out of 10.</p>
            </div>
          </div>
          <p className="pbi-findings-note">
            <em>Note: These findings describe the survey sample and should not automatically be generalised to the entire data industry.</em>
          </p>
        </div>
      </section>

      {/* Learning Outcomes */}
      <section className="pbi-learning-section">
        <div className="container">
          <h3 className="pbi-section-heading">Learning Outcomes</h3>
          <div className="pbi-learning-grid">
            <div className="pbi-learning-card">
              <div className="pbi-learning-icon">🔧</div>
              <h4>Power Query Transformations</h4>
              <p>Practical experience cleaning and shaping data — removing columns, standardising categories, parsing salary ranges, and setting data types.</p>
            </div>
            <div className="pbi-learning-card">
              <div className="pbi-learning-icon">📊</div>
              <h4>Chart Selection & Design</h4>
              <p>Choosing appropriate visuals for different data types — bar charts for comparisons, gauges for ratings, treemaps for geographical data, and KPI cards for summaries.</p>
            </div>
            <div className="pbi-learning-card">
              <div className="pbi-learning-icon">🎯</div>
              <h4>Communicating Insights</h4>
              <p>Arranging visualisations into a consolidated dashboard that makes patterns and comparisons immediately visible to viewers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="pbi-resources-section">
        <div className="container">
          <h3 className="pbi-section-heading">Project Resources & Acknowledgements</h3>
          <p className="pbi-resources-note">This project was completed as a guided learning exercise following Alex The Analyst's Power BI tutorial.</p>
          <div className="pbi-resources-grid">
            <a href="https://www.youtube.com/watch?v=pixlHHe_lNQ" target="_blank" rel="noreferrer" className="pbi-resource-card">
              <span className="pbi-resource-icon">🎥</span>
              <h4>Original Tutorial</h4>
              <p>Alex The Analyst — Power BI Final Project on YouTube</p>
            </a>
            <a href="https://github.com/AlexTheAnalyst/Power-BI/blob/main/Power%20BI%20-%20Final%20Project.xlsx" target="_blank" rel="noreferrer" className="pbi-resource-card">
              <span className="pbi-resource-icon">📁</span>
              <h4>Source Dataset</h4>
              <p>Power BI Final Project Excel file on GitHub</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="container">
        <section className="pbi-footer">
          <a href="#home" className="btn btn-outline">← Back to Home</a>
        </section>
      </div>
    </div>
  )
}

export default PowerBIProject
