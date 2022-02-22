import { Text } from "../text"
import { Star } from "react-feather"

export const ProductItem = (props) => {

    const { item, productDetail } = props
    return (
        <div className="card mb-3 border-0 mt-5" style={{ maxWidth: "70" }} >
            <div className="row g-0">
                <div className="col-md-2">
                    <img src={item.image} alt={item.title} className="img-fluid rounded-start" height={320} width={200} />
                </div>
                <div className="col-md-10">
                    <div className="card-body">
                        <Text className="card-title fw-bolder fs-22">{item.title}</Text>
                        <Text className="card-text">{item.description}</Text>
                        <Text className="fw-bold fs-16">£ {item.price}</Text>
                        <div className="d-flex justify-content-start">
                            <Text className="mb-0 fs-14">Product Reviews</Text>
                            <Text className="fs-14 ms-4"><Star size={15} className='text-magenta' /><Star size={15} className='text-magenta' /><Star size={15} className='text-magenta' /><Star size={15} className='text-magenta' /><Star size={15} className='text-magenta' /> {`${productDetail.rating.rate}(${productDetail.rating.count})`}</Text>
                        </div>
                        <button className='ps-3 pe-3 pt-2 pb-2 border bag'>Add To Bag</button>
                    </div>
                </div>
            </div>
        </div>
    )
}