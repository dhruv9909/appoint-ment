import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center">
      Appoint-ment
      <div>
        <Link href="/login">
          Want to signin as Customer or Seller
        </Link>
      </div>
    </div>
  );
}
