import Appbar from "@/components/Appbar";
import VideoGrid from "@/components/VideoGrid";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-neutral-950">
      <div className="pt-3 px-3">
        <Appbar />
      </div>
      <VideoGrid />
    </div>
  );
}
