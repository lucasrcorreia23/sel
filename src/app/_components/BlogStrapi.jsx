'use client';

import Link from "next/link";
import DateComponent from '@library/date';

const BlogStrapiPosts = ({ blogs, loading, error }) => {

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!blogs || blogs.length === 0) {
    return <p>Nenhum blog encontrado.</p>;
  }

  return (
    <>
      {blogs.map((blog) => {
        const blogImageUrl = process.env.NEXT_PUBLIC_API_URL + blog.image;
        return (
          <Link href={`/blog/${blog.slug}`} className="mil-blog-card mil-pagination mil-mb-60" key={blog.id}>
            <div className="mil-cover mil-square mil-up">
              {blog.image && <img src={blogImageUrl} alt={blog.title} />}
              <div className="mil-date">
                <DateComponent dateString={blog.date} />
              </div>
            </div>
            <div className="mil-description">
              <span className="mil-suptitle mil-upper mil-up mil-mb-30">
                {blog.category}
              </span>
              <h4 className="mil-upper mil-up mil-mb-30">
                {blog.title}
              </h4>
              <p className="mil-up mil-mb-30">
                {blog.description}
              </p>
              <span className="mil-link mil-upper mil-up">
                Leia <span className="mil-arrow"><img src="/img/icons/1.svg" alt="arrow" /></span>
              </span>
            </div>
          </Link>
        );
      })}
    </>
  );
};

export default BlogStrapiPosts;
