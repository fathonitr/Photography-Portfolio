//Mansory Style Grid
type Pictures = {
  id: number;
  title: string;
  imageUrl: string;
};

const pictures: Pictures[] = [
  { id: 1, title: "bagus", imageUrl: "/bagus.jpg" },
  { id: 2, title: "lichtenberg", imageUrl: "/lichtenberg.jpeg" },
  { id: 6, title: "lichtenberg2", imageUrl: "/lichtenberg2.jpeg" },
  { id: 4, title: "umar", imageUrl: "/umar.jpg" },
  { id: 11, title: "alex", imageUrl: "/alex.JPG" },
  { id: 10, title: "umarutsman", imageUrl: "/umarutsman.jpg" },
  { id: 7, title: "lichtenberg3", imageUrl: "/lichtenberg3.jpeg" },
  { id: 3, title: "novan", imageUrl: "/novan.jpg" },
  { id: 5, title: "ilham", imageUrl: "/ilham.jpg" },
  { id: 8, title: "kaegar", imageUrl: "/kaegar.jpg" },
  { id: 9, title: "wana", imageUrl: "/wanna.jpg" },
];
export default function Home() {
  return (
    <div className="columns-1 sm:columns-2 md:columns-3 gap-4 p-4 space-y-4">
      {pictures.map((item) => (
        <div key={item.id}  className="break-inside-avoid overflow-hidden">
          <img src={item.imageUrl} alt={item.title} width={600}
            height={800}
            className="w-full h-auto" />
        </div>
      ))}
    </div>
  );
}
