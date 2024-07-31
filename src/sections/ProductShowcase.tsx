import productImage from '@/assets/product-image.png';
import Image from 'next/image';
import pyramidImage from '@/assets/pyramid.png';
import tubeImage from '@/assets/tube.png';

export const ProductShowcase = () => {
    return (
        <section className="bg-gradient-to-b from-[#fff] to-[#d2dcff] py-24 overflow-x-clip">
            <div className="container">
                <div className="section-heading">
                    <div className="flex justify-center">
                        <div className="tag">Boost Your productivity</div>
                    </div>
                    <h2 className="section-title mt-5">
                        A more effective way to track progress
                    </h2>
                    <p className="section-description mt-5">
                        Effortlessly turn your ideas into a fully functional,
                        responsive, Saas website in jusy minutes with this
                        template
                    </p>
                </div>
                <div className="relative">
                    <Image
                        src={productImage}
                        alt="Product Image"
                        className="mt-10"
                    />
                    <Image
                        src={pyramidImage}
                        alt="Pyramid Image"
                        className="hidden md:block absolute -right-36 -top-32"
                        height={262}
                        width={262}
                    />
                    <Image
                        src={tubeImage}
                        alt="Tube Image"
                        className="hidden md:block absolute bottom-24 -left-36"
                        height={248}
                        width={248}
                    />
                </div>
            </div>
        </section>
    );
};
