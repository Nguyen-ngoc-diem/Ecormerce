import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,

    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';
export default function App() {
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark'>
            <MDBContainer className='p-4'>
                <section className='mb-4'>
                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon icon="facebook" />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon icon='twitter' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon icon='google' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon icon='instagram' />
                    </MDBBtn>



                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <MDBIcon icon='github' />
                    </MDBBtn>
                </section>



                <section className='mb-4'>
                    <p>
                        Privacy. It’s always personal.Easily control what you share or don’t share with us.
                    </p>
                </section>

                <section className=''>
                    <MDBRow>
                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'> SUPPORT</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Product Support
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Order Support
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Your Account
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Contac Us
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>ABOUT US</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Leadership & Mission
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Our Business
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Carneers
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Ethics
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>
                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>PRODUCT</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Cameras
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Acessories
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Headphone
                                    </a>
                                </li>
                                <li>
                                    <a href='#!' className='text-white'>
                                        Laptop
                                    </a>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>CONTACT</h5>

                            <ul className='list-unstyled mb-0'>
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
                            </ul>
                        </MDBCol>


                    </MDBRow>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                Copyright ©2022 All rights reserved | This template is made with by Huy&Diem
                {/* <a className='text-white' href='/'>
                    MStore.Com
                </a> */}
            </div>
        </MDBFooter>
    );
}
