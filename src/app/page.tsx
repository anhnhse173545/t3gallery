import Link from "next/link";

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

export default function HomePage() {
  return (
    <main>
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
