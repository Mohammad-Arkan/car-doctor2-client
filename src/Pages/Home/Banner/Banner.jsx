import img1 from '../../../assets/images/banner/1.png'
import img2 from '../../../assets/images/banner/2.png'
import img3 from '../../../assets/images/banner/3.png'
import img4 from '../../../assets/images/banner/4.png'
import img5 from '../../../assets/images/banner/5.png'
import img6 from '../../../assets/images/banner/6.png'

const Banner = () => {
    return (
        <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full h-[600px]">
          <img src={img1} className="w-full rounded-xl" />
          <div className="absolute  w-2/5 space-y-10  rounded-xl  text-white pt-20 ps-10 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
           <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
           <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div>
           <button className="btn btn-primary mr-5">Discover More</button>
<button className="btn btn-outline btn-secondary">Latest Project</button>
           </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide6" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div> 
        <div id="slide2" className="carousel-item relative w-full h-[600px]">
          <img src={img2} className="w-full  rounded-xl" />
          <div className="absolute  w-2/5 space-y-10  rounded-xl text-white pt-20 ps-10 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
           <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
           <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div>
           <button className="btn btn-primary mr-5">Discover More</button>
<button className="btn btn-outline btn-secondary">Latest Project</button>
           </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full h-[600px]">
          <img src={img3} className="w-full  rounded-xl" />
          <div className="absolute  w-2/5 space-y-10  rounded-xl text-white pt-20 ps-10 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
           <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
           <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div>
           <button className="btn btn-primary mr-5">Discover More</button>
<button className="btn btn-outline btn-secondary">Latest Project</button>
           </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full h-[600px]">
          <img src={img4} className="w-full  rounded-xl" />
          <div className="absolute  w-2/5 space-y-10  rounded-xl text-white pt-20 ps-10 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
           <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
           <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div>
           <button className="btn btn-primary mr-5">Discover More</button>
<button className="btn btn-outline btn-secondary">Latest Project</button>
           </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide5" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full h-[600px]">
          <img src={img5} className="w-full  rounded-xl" />
          <div className="absolute  w-2/5 space-y-10  rounded-xl text-white pt-20 ps-10 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
           <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
           <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div>
           <button className="btn btn-primary mr-5">Discover More</button>
<button className="btn btn-outline btn-secondary">Latest Project</button>
           </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide6" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide6" className="carousel-item relative w-full h-[600px]">
          <img src={img6} className="w-full  rounded-xl" />
          <div className="absolute  w-2/5 space-y-10  rounded-xl text-white pt-20 ps-10 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
           <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
           <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
           <div>
           <button className="btn btn-primary mr-5">Discover More</button>
<button className="btn btn-outline btn-secondary">Latest Project</button>
           </div>
          </div>
          <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle mr-5">❮</a> 
            <a href="#slide1" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>
    );
};

export default Banner;