import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany();
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image, index) => (
        <div key={index} className="w-48">
          <img src={image.url} />
          <p>{image.name}</p>
        </div>
      ))}
    </div>
  );
}
export default async function HomePage() {
  

  const images = await db.query.images.findMany();

  

  return (
    <main>
      <SignedOut>
        <div>Please sign in to view the gallery</div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
