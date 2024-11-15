"use client";

import { useEffect, useState } from "react";
import PageBannerTwo from "@components/PageBannerTwo";
import fetchBlogs from "../../../_components/FetchBlog";
import Link from "next/link";
import { marked } from "marked";
import Head from "next/head";
import AppData from "@data/app.json";
import SkeletonLoader from "@components/SkeletonLoader";

const PostsDetail = ({ params }) => {
  const { slug } = params;
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const allBlogsData = await fetchBlogs();
        const postData = allBlogsData.find((item) => item.slug === slug);

        if (!postData) {
          throw new Error("Post não encontrado.");
        }

        setPost(postData);
      } catch (error) {
        console.error("Erro ao buscar o post:", error);
      } finally {
        setLoading(false); // Define loading como false para remover o loader
      }
    };

    fetchPostData();
  }, [slug]);

  // Exibe o SkeletonLoader enquanto `loading` for true
  if (loading) return <SkeletonLoader />;

  // Exibe uma mensagem de erro se o post não for encontrado
  if (!post) return <p>Post não encontrado.</p>;

  const postImageUrl = post.feature
    ? `${process.env.NEXT_PUBLIC_API_URL}${post.feature}`
    : "/path/to/default-image.jpg";

  // Extrai e concatena os textos de cada parágrafo do rich text
  const contentString = post.content
    .map((paragraph) => paragraph.children.map((child) => child.text).join(""))
    .join("\n\n");

  const contentHTML = marked(contentString);
  const shareMessage = "Confira o novo post do Blog da SEL"; // Mensagem personalizada
  const currentUrl = encodeURIComponent(window.location.href); // URL atual codificada
  return (
    <>
      <Head>
        <title>{post.title} | Blog</title>
        <meta name="description" content={post.description} />
      </Head>
      <PageBannerTwo
        title={post.title}
        subTitle={post.category}
        bgImage={postImageUrl}
        dataTitle={post.date}
      />
      <section>
        <div className="container mil-p-120-60">
          <div className="mil-background-grid mil-softened" />
          <div className="row justify-content-between">
            <div className="col-lg-12">
              <div className="mil-publication">
                <ul className="mil-post-top mil-list mil-dark mil-mb-30">
                  <li className="mil-text-sm mil-up mil-mb-10">
                    {post.author}
                  </li>
                  <li className="mil-text-sm mil-up mil-mb-10">
                    <span className="mil-additional-text mil-text-sm mil-upper">
                      <p>{post.date}</p>
                    </span>
                  </li>
                </ul>

                <div
                  className="mil-text mil-up mil-mb-40"
                  dangerouslySetInnerHTML={{ __html: contentHTML }}
                />

                <div className="mil-divider-lg mil-mb-40"></div>

                <div className="row">
                  {post.tags && (
                    <div className="col-lg-6">
                      <div className="row">
                        <div className="col-lg-4">
                          <h6 className="mil-upper mil-up mil-mb-30">Tags:</h6>
                        </div>
                        <div className="col-lg-8">
                          <ul className="mil-list mil-dark mil-up mil-mb-30">
                            {post.tags.map((tag, key) => (
                              <li className="mil-text-sm" key={key}>
                                <Link
                                  href={`/blog/tag/${tag
                                    .toLowerCase()
                                    .replace(" ", "-")}`}
                                >
                                  {tag}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-lg-5">
                        <h6 className="mil-upper mil-up mil-mb-30">
                          Compartilhe em suas redes sociais
                        </h6>
                      </div>
                      <div className="col-lg-7">
                        <ul className="mil-list mil-dark mil-up mil-mb-30">
                          <li className="mil-text-sm">
                            <a
                              href={`https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Facebook
                            </a>
                          </li>
                          <li className="mil-text-sm">
                            <a
                              href={`https://www.linkedin.com/shareArticle?mini=true&url=${currentUrl}&title=${encodeURIComponent(
                                shareMessage
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              LinkedIn
                            </a>
                          </li>
                          <li className="mil-text-sm">
                            <a
                              href={`https://wa.me/?text=${encodeURIComponent(
                                shareMessage + " " + window.location.href
                              )}`}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              WhatsApp
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostsDetail;
