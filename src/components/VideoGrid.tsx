import VideoCard from "./VideoCard";

const data = [
  {
    title: "Why Next.js deleted the bad parts? Next 15 Is Here ",
    image: "/avatar.jpg",
    thumbnail: "/thumbnail.png",
    author: "Theo -T3.gg",
    views: "300k Views",
    timestamp: "12 days ago",
  },
  {
    title: "Why Next.js deleted the bad parts? Next 15 Is Here ",
    image: "/avatar.jpg",
    thumbnail: "/thumbnail.png",
    author: "Theo -T3.gg",
    views: "300k Views",
    timestamp: "12 days ago",
  },
  {
    title: "Why Next.js deleted the bad parts? Next 15 Is Here ",
    image: "/avatar.jpg",
    thumbnail: "/thumbnail.png",
    author: "Theo -T3.gg",
    views: "300k Views",
    timestamp: "12 days ago",
  },
  {
    title: "Why Next.js deleted the bad parts? Next 15 Is Here ",
    image: "/avatar.jpg",
    thumbnail: "/thumbnail.png",
    author: "Theo -T3.gg",
    views: "300k Views",
    timestamp: "12 days ago",
  },
  {
    title: "Why Next.js deleted the bad parts? Next 15 Is Here ",
    image: "/avatar.jpg",
    thumbnail: "/thumbnail.png",
    author: "Theo -T3.gg",
    views: "300k Views",
    timestamp: "12 days ago",
  },
  {
    title: "Why Next.js deleted the bad parts? Next 15 Is Here ",
    image: "/avatar.jpg",
    thumbnail: "/thumbnail.png",
    author: "Theo -T3.gg",
    views: "300k Views",
    timestamp: "12 days ago",
  },
  {
    title: "Why Next.js deleted the bad parts? Next 15 Is Here ",
    image: "/avatar.jpg",
    thumbnail: "/thumbnail.png",
    author: "Theo -T3.gg",
    views: "300k Views",
    timestamp: "12 days ago",
  },
  {
    title: "Why Next.js deleted the bad parts? Next 15 Is Here ",
    image: "/avatar.jpg",
    thumbnail: "/thumbnail.png",
    author: "Theo -T3.gg",
    views: "300k Views",
    timestamp: "12 days ago",
  },
  {
    title: "Why Next.js deleted the bad parts? Next 15 Is Here ",
    image: "/avatar.jpg",
    thumbnail: "/thumbnail.png",
    author: "Theo -T3.gg",
    views: "300k Views",
    timestamp: "12 days ago",
  },
  {
    title: "Why Next.js deleted the bad parts? Next 15 Is Here ",
    image: "/avatar.jpg",
    thumbnail: "/thumbnail.png",
    author: "Theo -T3.gg",
    views: "300k Views",
    timestamp: "12 days ago",
  },
  {
    title: "Why Next.js deleted the bad parts? Next 15 Is Here ",
    image: "/avatar.jpg",
    thumbnail: "/thumbnail.png",
    author: "Theo -T3.gg",
    views: "300k Views",
    timestamp: "12 days ago",
  },
  {
    title: "Why Next.js deleted the bad parts? Next 15 Is Here ",
    image: "/avatar.jpg",
    thumbnail: "/thumbnail.png",
    author: "Theo -T3.gg",
    views: "300k Views",
    timestamp: "12 days ago",
  },
];

export default function VideoGrid() {
  return (
    <div className="grid grid-cols-1 place-content-center md:grid-cols-2 lg:grid-cols-4 ">
      {data.map((data, index) => (
        <div>
          <VideoCard
            title={data.title}
            image={data.image}
            thumbnail={data.thumbnail}
            author={data.author}
            views={data.views}
            timestamp={data.timestamp}
            key={index}
          />
        </div>
      ))}
    </div>
  );
}
