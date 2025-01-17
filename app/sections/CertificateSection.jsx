import CertificateCard from '../components/CertificateCard';
import {Certificates} from '../utils/dataBase';

function CertificateSection () {
     return (
        <section className="max-w-6xl mx-auto md:my-[6rem]"
          id="Certificate">

          <h2 className="mb-4 text-3xl font-bold text-center lg:mb-8">
            Certificates
          </h2>

          <p className="mb-4 lg:mb-8 text-center mx-auto max-w-[36rem] text-black/60">
            {''}
            My certificates showcase dedication, skills, knowledge, and professional growth effectively.
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
