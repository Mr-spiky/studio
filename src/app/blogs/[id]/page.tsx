import Image from 'next/image';

// This is a placeholder for fetching blog post data
const getPostData = async (id: string) => {
  const posts = [
    { id: '1', title: 'The Future of Web Development in 2025', content: '<p>Content for web dev future...</p>', image: 'https://picsum.photos/seed/blog1/1200/600' },
    { id: '2', title: 'AI Integration Best Practices', content: '<p>Content for AI best practices...</p>', image: 'https://picsum.photos/seed/blog2/1200/600' },
    { id: '3', title: 'Cloud Security Essentials', content: '<p>Content for cloud security...</p>', image: 'https://picsum.photos/seed/blog3/1200/600' },
  ];
  return posts.find(p => p.id === id);
};

export default async function BlogPostPage({ params }: { params: { id: string } }) {
  const post = await getPostData(params.id);

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 md:px-6 text-center">
        <h1 className="text-4xl font-bold">Post not found</h1>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-12 md:px-6 max-w-4xl">
      <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl font-headline mb-4">{post.title}</h1>
      <Image src={post.image} alt={post.title} width={1200} height={600} className="rounded-lg shadow-md mb-8" />
      <div className="prose lg:prose-xl max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}
