import CertificateCard from '../components/CertificateCard';
import {Certificates} from '../utils/dataBase';

function CertificateSection () {
     return (
        <section className="max-w-6xl mx-auto md:my-[6rem]"
          id="Certificate">

          <h2 className="mb-4 text-3xl font-bold text-center lg:mb-8">
            certificate
          </h2>

          <p className="mb-4 lg:mb-8 text-center mx-auto max-w-[36rem] text-black/60">
            {''}
             i offer a range of UI/UX design ,user friendly interface and visually stricking design from web app to branding solluition
          </p>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {Certificates.map((service, index) => (
                <CertificateCard
                    key={index}
                    imgSrc={service.imgSrc}
                    altText={service.altText}
                    title={service.title}
                    description={service.description}
                />
            ))}
          </div>

        </section>
    
    );    
}

export default CertificateSection;
