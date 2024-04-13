export default function ImageCard({ imageUrl, children }) {
  return (
    <figure className="w-[250px] overflow-hidden rounded-base border-2 border-black bg-main font-bold shadow-base">
      <img className="w-full" src={imageUrl} alt="image" />
      <figcaption className="border-t-2 border-black p-4">
        {children}
      </figcaption>
    </figure>
  )
}
