import { Link, useParams } from 'react-router-dom'
import articles from '../data/articles'
import NotFound from './NotFound'
import './Blog.css'

export default function BlogArticle() {
  const { slug } = useParams()
  const article = articles.find((item) => item.slug === slug)

  if (!article) return <NotFound />

  return (
    <main className="blog-page">
      <article className="blog-article">
        <Link className="blog-back-link" to="/blog">العودة إلى المدونة</Link>
        <img className="blog-article-image" src={article.image} alt="" />
        <div className="blog-article-content">
          <span className="blog-card-category">{article.category}</span>
          <div className="blog-card-meta">
            <span>{article.readingTime}</span>
            <span className="blog-meta-dot" aria-hidden="true"></span>
            <time>{article.date}</time>
          </div>
          <h1>{article.title}</h1>
          <p className="blog-article-lead">{article.excerpt}</p>
          <div className="blog-article-author">
            <img src={article.avatar} alt="" />
            <div>
              <strong>{article.author}</strong>
              <span>{article.role}</span>
            </div>
          </div>
          <p className="blog-article-text">{article.content}</p>
        </div>
      </article>
    </main>
  )
}
