import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <main className="home">
      <nav className="top">
        <div className="brand">
          <Image src="/logo/tongdao-mark.svg" alt="" width={42} height={42} />
          <span className="cn">同道</span><span className="en">Bible</span>
        </div>
        <Link href="/reader" className="preview">Open reader preview</Link>
      </nav>

      <section className="hero">
        <Image src="/logo/tongdao-mark.svg" alt="同道 Bible mark" width={118} height={118} />
        <h1>同道 Bible</h1>
        <p className="tagline">Scripture Together.</p>
        <p className="sub">A calm bilingual Bible for English and Chinese readers, families, churches, and language learners.</p>
        <Link href="/reader" className="button">Open reader preview</Link>
      </section>
    </main>
  );
}
