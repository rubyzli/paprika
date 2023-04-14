import './css/WhyUs.css';
import expertise from './pics/expertise-icons-symbol-elements-for-infographic-web-free-vector.webp';
import personalised from './pics/person-covered-with-both-hands-line-icon-of-staff-care-vector.jpeg';
import data from './pics/Screenshot 2023-04-14 at 17.10.45.png';

function WhyUs () {
    return (
        <section className="why-us">
            <h2>Why Choose Paprika Agency?</h2>
            <div className="reasons">
                <div className="reason">
                    <img src={expertise} className='he' alt="Reason 1" />
                    <h3>Expertise</h3>
                    <p>Our team has years of experience managing OnlyFans accounts and we know what it takes to help you succeed.</p>
                </div>
                <div className="reason">
                    <img src={personalised} className='he' alt="Reason 2" />
                    <h3>Personalized Service</h3>
                    <p>We work closely with each of our clients to create a customized plan that meets their unique needs and goals.</p>
                </div>
                <div className="reason">
                    <img src={data} className='he' alt="Reason 3" />
                    <h3>Data-Driven Approach</h3>
                    <p>Our services are backed by data and analytics, ensuring that our strategies are effective and provide results.</p>
                </div>
            </div>
        </section>
    );
}

export default WhyUs;
