const fetchBlogs = async () => {
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
  console.log("Token de API:", process.env.NEXT_PUBLIC_API_TOKEN);

  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };

  try {
    // Adicione sort=publishedAt:desc na URL
    const request = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blog-pages?populate=*&sort=publishedAt:desc`,
      reqOptions
    );

    if (!request.ok) {
      if (request.status === 401) {
        throw new Error("Unauthorized: Verifique o token de API e as permissões no Strapi.");
      }
      throw new Error(`Error: ${request.statusText}`);
    }

    const data = await request.json();
    console.log("Dados completos da API:", data);

    const blogs = data.data.map((item) => {
      const attributes = item;

      return {
        id: item.id,
        title: attributes.Titulo || "Sem título",
        date: attributes.Data || "Sem Data",
        category: attributes.Categorias || "Uncategorized",
        description: attributes.Resumo || "No description available",
        image: attributes.Thumbnail?.[0]?.formats?.medium?.url || attributes.Thumbnail?.[0]?.url || "",
        feature: attributes.Destaque?.[0]?.formats?.medium?.url || attributes.Destaque?.[0]?.url || "",
        slug: attributes.slug,
        content: attributes.Conteudo,
        author: attributes.Autor,
      };
    });

    return blogs;
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return []; // Retorna array vazio em vez de objeto
  }
};

export default fetchBlogs;