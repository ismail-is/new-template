import React from 'react';
import PageHeader from './global-components/page-header';
import ContactInfo from './section-components/contact-info';
import ContactForm from './section-components/contact-form';
import Map from './section-components/map';
import CallToActionV1 from './section-components/call-to-action-v1';
import Footer from './global-components/footer';
import NavbarV2 from './global-components/navbar-v2';

const ContactV1 = () => {
    return <div>
        <NavbarV2 />
        <PageHeader headertitle="Contact Us" subheader="Contact" />
        <ContactInfo />
        <ContactForm />
        <Map />
        <CallToActionV1 />
        <Footer />
    </div>
}

export default ContactV1

