import { Link } from "react-router-dom";

const CosmeticsBands = ({c}) => {
    const {id, image, brand} = c;
    return (
        <Link to={`/cosmeticsBrands/${brand}`}>
            <div className="text-center lg:w-60 border-2 border-dotted border-orange-200 rounded-lg">
              <div className="border-2 border-pink-400 rounded-lg">
              <img className="lg:w-60 lg:h-40 border rounded-lg border-rose-500" src={image} alt="" />
                <h1 className="font-mono text-xl py-2">{brand}</h1>
              </div>
            </div>
        </Link>
    );
};

export default CosmeticsBands;