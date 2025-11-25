import fallbackImage from "../assets/imageNotFound.png";

function Product({ title, images, price }) {
  return (
    <div className="border-2 p-4 rounded-lg text-lg">
      <img
        src={images?.[0]}
        alt={title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = fallbackImage;
        }}
        loading="lazy"
        className={`aspect-square object-contain rounded-lg`}
      />
      <div className="mt-4">
        <h2 className="whitespace-nowrap overflow-hidden text-ellipsis font-medium">
          {title}
        </h2>
        <p>₹{price}.00</p>
      </div>
    </div>
  );
}

export default Product;
