import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Image src="/bone_white.svg" alt="vercel" width={40} height={40} />
        <Image src="/doberman.svg" alt="vercel" width={40} height={40} />
        VoiceShare
      </div>
      <Link className="link" href="/">
        Topページへ
      </Link>
    </header>
  );
}
