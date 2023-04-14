import './css/Services.css'
import content from './pics/6082959.png';
import audience from './pics/beautiful-meticulously-designed-target-audience-icon-target-audience-icon-120823079.jpeg';
import analytics from './pics/pngtree-analytics-icon-design-template-vector-isolated-png-image_745943.jpeg';
import payment from './pics/2914.3-payment-icon-iconbunny.jpg';
import personal from './pics/icon-personal-brand-suitable-for-art-symbol-line-style-simple-design-editable-design-template-simple-illustration-vector.jpeg';

function Services () {
    return (
        <div className="services">
            <div className="titles">
                <h2 className="title1">ONLYFANS ISN'T EASY..</h2>
                <p className="title2">The main problems of models who want to <b>begin</b> or to grow their account:</p>
            </div>

            <div className="service-section">
                <div className="service-icon">
                    <img src={content} alt="Content Creation" />
                </div>
                <div className="service-info">
                    <h3>Content Creation and Management</h3>
                    <p>Our team of experts can help you produce and edit high-quality photos, videos, and other content to keep your fans engaged and coming back for more.</p>
                    <a href="#contact-form" className="cta-button">Learn More</a>
                </div>
            </div>

            <div className="service-section">
                <div className="service-icon">
                    <img src={audience} alt="Audience Management" />
                </div>
                <div className="service-info">
                    <h3>Audience Management and Engagement</h3>
                    <p>We can help you build and engage with your audience on social media and other platforms, increasing your visibility and growing your subscriber base.</p>
                    <a href="#contact-form" className="cta-button">Learn More</a>
                </div>
            </div>

            <div className="service-section">
                <div className="service-icon">
                    <img src={analytics} alt="Analytics and Insights" />
                </div>
                <div className="service-info">
                    <h3>Analytics and Insights</h3>
                    <p>Our analytics tools provide detailed insights into your subscriber base and engagement, helping you optimize your content and grow your following.</p>
                    <a href="#contact-form" className="cta-button">Learn More</a>
                </div>
            </div>

            <div className="service-section">
                <div className="service-icon">
                    <img src={payment} alt="Payment and Financial Management" />
                </div>
                <div className="service-info">
                    <h3>Payment and Financial Management</h3>
                    <p>We can help you manage payments, subscriptions, and taxes, providing reporting and analytics on revenue and earnings.</p>
                    <a href="#contact-form" className="cta-button">Learn More</a>
                </div>
            </div>

            <div className="service-section">
                <div className="service-icon">
                    <img src={personal} alt="Personal Branding and Marketing" />
                </div>
                <div className="service-info">
                    <h3>Personal Branding and Marketing</h3>
                    <p>Our branding and marketing services can help you build your personal brand and market yourself effectively on platforms like OnlyFans and social media.</p>
                    <a href="#contact-form" className="cta-button">Learn More</a>
                </div>
            </div>    
        </div>

        
        
    );
}

export default Services;