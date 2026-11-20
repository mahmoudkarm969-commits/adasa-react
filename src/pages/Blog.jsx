import { Link } from 'react-router-dom'
import articles from '../data/articles'
import './Blog.css'

export default function Blog() {
  return (
    <main className="blog-page">
      <header className="blog-heading">
        <span className="blog-eyebrow">مدونتنا</span>
        <h1>استكشف مقالاتنا</h1>
        <p>اكتشف الدروس والرؤى وأفضل الممارسات لتطوير مهاراتك في التصوير.</p>
      </header>

      <section className="blog-grid" aria-label="مقالات التصوير">
        {articles.map((article) => (
          <article className="blog-card" key={article.slug}>
            <Link
              className="blog-card-image-wrap"
              to={`/blog/${article.slug}`}
              aria-label={`اقرأ ${article.title}`}
            >
              <img src={article.image} alt="" className="blog-card-image" />
              <span className="blog-card-category">{article.category}</span>
            </Link>

            <div className="blog-card-content">
              <div className="blog-card-meta">
                <span>{article.readingTime}</span>
                <span className="blog-meta-dot" aria-hidden="true"></span>
                <time>{article.date}</time>
              </div>
              <h2>
                <Link to={`/blog/${article.slug}`}>{article.title}</Link>
              </h2>
              <p className="blog-card-excerpt">{article.excerpt}</p>

              <div className="blog-card-footer">
                <Link
                  className="blog-card-arrow"
                  to={`/blog/${article.slug}`}
                  aria-label={`اقرأ ${article.title}`}
                >
                  <span aria-hidden="true">←</span>
                </Link>
                <div className="blog-author">
                  <img src={article.avatar} alt="" />
                  <div>
                    <strong>{article.author}</strong>
                    <span>{article.role}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>
    </main>
  )
}
