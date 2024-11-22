'use client'
import React, { useState, useEffect } from 'react';
import PaginatedBlog from '@components/PaginatedBlog';
import Pagination from '@components/Pagination';
import BlogStrapi from '../../_components/BlogStrapi';
import SkeletonLoader from '@components/SkeletonLoader';
import AppData from "@data/app.json";
import PageBanner from "@components/PageBanner";
import fetchBlogs from '../../_components/FetchBlog'; // Função de fetch dos blogs do Strapi



function Blog() {
  const [blogs, setBlogs] = useState(null); // Estado para os blogs
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [error, setError] = useState(null); // Estado de erro

  useEffect(() => {
    async function loadBlogs() {
      try {
        // Busca dos blogs do Strapi
        const fetchedBlogs = await fetchBlogs();
        setBlogs(fetchedBlogs);
      } catch (err) {
        console.error("Erro ao carregar blogs do Strapi:", err);
        setError("Erro ao carregar blogs do Strapi");
      } finally {
        setLoading(false); // Finaliza o carregamento
      }
    }
    loadBlogs();
  }, []);

  // Exibe o SkeletonLoader enquanto carrega
  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <>
      <PageBanner pageTitle={"Insights"} breadTitle={"Blog"} bgImage={"/img/photo/12.jpg"} />

      {/* blog */}
      <section>
        <div className="container mil-p-120-60">
          <div className="mil-background-grid mil-softened"></div>
          <div className="row justify-content-between">
            <div className="col-lg-12 d-flex flex-column-reverse">
              <BlogStrapi blogs={blogs} loading={loading} error={error} />
            </div>
          </div>
        </div>
      </section>
      {/* blog end */}

      {/* pagination */}
      <div className="container mil-p-0-120">
        <div className="mil-background-grid mil-softened" />
        <Pagination
          currentPage={1} // Exemplo: configure a página atual se necessário
          totalItems={blogs?.length || 0}
          perPage={AppData.settings.perPage}
          renderPageLink={(page) => `/blog/page/${page}`}
        />
      </div>
      {/* pagination end */}
    </>
  );
}

export default Blog;
