

const ServiceCard = ({service}) => {
    const {img, title, price} = service
    return (
        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="flex justify-between pt-3">
    <div>
    <h2 className="card-title">{title}</h2>
    <p className="text-orange-800 font-bold"> Price: {price}</p>
    </div>   
    <div className="">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;