import Link from "next/link";
import { db } from "~/server/db";

const mockURLs = [
  "https://utfs.io/f/bKGrwwMj5D1jUzwMxdFqcitzG12LE4YSxWJjIHnlCKye65dr",
  "https://utfs.io/f/bKGrwwMj5D1jqV6OJRSLjath9JwBfZcm71dEYCP3syeOxWMr",
  "https://utfs.io/f/bKGrwwMj5D1jmvlZe6rLJOpg6UX9NfAZtTlr7kDYcn1aqV0I",
  "https://utfs.io/f/bKGrwwMj5D1j92okIlFKcwoPSWmRMQfpi2vqZb0YXNGEhuAa",
];

const mockImages = mockURLs.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  console.log(posts);

  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {posts.map((post) => (
          <div key={post.id} className="w-48">
            {post.name}
          </div>
        ))}
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
