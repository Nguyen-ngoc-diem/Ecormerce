// import React, { Fragment } from 'react'

// const Footer = () => {
//     return (
//         <Fragment>
//             <footer className="py-1">
//                 <p className="text-center mt-1">
//                     Shopping Cart - 2019-2020, All Rights Reserved
//                 </p>
//             </footer>
//         </Fragment>
//     )
// }

// export default Footer
import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </a>
                    <a href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                SUPPORT
                            </h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Product Support
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Order Support
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Your Account
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Contac Us
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Products & Services</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Cameras
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Acessories
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Headphone
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Laptop
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Sports
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Outdoor
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>ABOUT US</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Leadership & Mission
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Our Business
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Carneers
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Ethics
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-2" />
                                New York, NY 10012, US
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                info@example.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022:
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
                    MSTORE
                </a>
            </div>
        </MDBFooter>
    );
}