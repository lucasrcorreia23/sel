const fetchBlogs = async () => {
  console.log("API URL:", process.env.NEXT_PUBLIC_API_URL);
  console.log("Token de API:", process.env.NEXT_PUBLIC_API_TOKEN);

  const reqOptions = {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
    },
  };

  try {
    const request = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/blog-pages?populate=*`,
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

    // Ajuste no mapeamento dos dados para garantir que acessamos os atributos corretos
    const blogs = data.data.map((item) => {
      const attributes = item; // Acessa diretamente os dados, sem 'attributes'

      return {
        id: item.id,
        title: attributes.Titulo || "Untitled",
        date: attributes.Data || "Data indisponível", // Usa o campo Data corretamente
        category: attributes.Categorias || "Uncategorized",
        description: attributes.Description || "No description available",
        image: attributes.Thumbnail?.[0]?.formats?.medium?.url || attributes.Thumbnail?.[0]?.url || "", // Usa o URL correto da imagem
        feature: attributes.Destaque?.[0]?.formats?.medium?.url || attributes.Destaque?.[0]?.url || "", // Usa o URL correto da imagem
        slug: attributes.slug,
        content: attributes.Conteudo,
        author: attributes.Autor,
        description: attributes.Resumo,
      };
    });

    return blogs;
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
    return { error: "Failed to fetch blogs" };
  }
};

export default fetchBlogs;
