import appleLogo from "../assets/apple.png"
        descrption: "High-performance smartphone with advanced features and sleek design.",
function ProductItem({brandName, title, startingPrice, cuttprice, descrption, thumbnail, id}) {
  return (
    <div>
        {/* Left */}
        <div>
            <div>
                <img src={appleLogo} alt="" />
                <h1>Apple</h1>
            </div>
            <div>
                <h1>{title}</h1>
                <h3>{price}</h3>
                <p>{para}</p>
            </div>
            <button>Details</button>

        </div>
        {/* Right */}
        <div>
        <img src={thumbnail} alt="" />
        </div>
    </div>
  )
}

export default ProductItem