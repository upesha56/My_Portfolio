import Image from "next/image";

function CertificateCard({ imgSrc, altText, title, description }) {
  return (
    <div className="p-6 bg-white hover:bg-[#a594f9] hover:cursor-pointer transition duration-500 rounded-lg shadow-lg hover:shadow-xl">
      <div className="flex justify-center mb-4">
        <Image
          src={imgSrc}
          width={200}
          height={150}  // Adjusted to maintain a better aspect ratio for certificates
          alt={altText}
          className="object-contain"  // Ensures the image scales properly
        />
      </div>
      <h3 className="text-2xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}
      
      </p>
    </div>
  );
}

export default CertificateCard;
