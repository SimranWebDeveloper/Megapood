import React from 'react'
import '../aboutText/style.scss'

const AboutText = () => {
  return (
    <>
        <section className='aboutAs py-5'>
            <div className='container py-5'>
                <div className='row g-3'>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-4'>
                        <p className='text-primary fw-semibold'>We Are Meeapod</p>
                        <h2>About Us</h2>
                        <p className='text-muted'>
                            Enjoy listening to our podcast? Consider making a donation!
                        </p>
                        <button className='btn btn-primary py-2'>Make a Dunation</button>

                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-4'>
                        <p className='fw-semibold'>This article is floated online with an aim to help you find the best dvd printing solution.</p>
                        <p className='text-muted'>
                        Your DVDs usually come coated with directly printable lacquer films with ability to absorb ink, and the process of directly printing the lacquer films on your DVDs is technically known as dvd printing. Your dvd printing solution lies in – inkjet dvd printing, thermal transfer dvd printing, screen dvd printing, and offset dvd printing – which you may choose according to need and requirement.
                        </p>
                    </div>
                    <div className='col-12 col-sm-12 col-md-12 col-lg-4'>
                        <p className='fw-semibold'>This article is floated online with an aim to help you find the best dvd printing solution.</p>
                        <p className='text-muted'>
                        Your DVDs usually come coated with directly printable lacquer films with ability to absorb ink, and the process of directly printing the lacquer films on your DVDs is technically known as dvd printing. Your dvd printing solution lies in – inkjet dvd printing, thermal transfer dvd printing, screen dvd printing, and offset dvd printing – which you may choose according to need and requirement.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="https://preview.colorlib.com/theme/megapod/img/about-pic.jpg" alt="" />
                </div>
            </div>
            <div className='BGimage container-fluid my-5'>
                <div className='text-light d-flex justify-content-center align-items-center flex-column '>
                    <h2>Support The Show</h2>
                    <h6 className='lh-lg'>Enjoy listening to our podcast? Consider making a donation!</h6>
                    <button className='btn btn-primary'>Make a Dunation</button>
                </div>
                
            </div>
            <div className='container'>
                <div className='row g-3'>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
                        <div className='rounded p-3'>
                            <img src="https://preview.colorlib.com/theme/megapod/img/team/team-1.jpg" alt="" className='rounded' />
                            <div className='d-flex justify-content-center align-items-center flex-column '>
                                <h5>Alfred Day</h5>
                                <p className='text-primary'>PRUDUCER</p>
                            </div>


                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
                        <div className='rounded p-3'>
                            <img src="https://preview.colorlib.com/theme/megapod/img/team/team-2.jpg" alt="" className='rounded '/>
                            <div className='d-flex justify-content-center align-items-center flex-column'>
                            <h5>Jayden White</h5>
                            <p className='text-primary'>DRUMER</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 col-lg-4'>
                        <div className='rounded p-3'>
                            <img src="https://preview.colorlib.com/theme/megapod/img/team/team-3.jpg" alt="" className='rounded'/>
                            <div className='d-flex justify-content-center align-items-center flex-column'>
                            <h5>Vincent Reid</h5>
                            <p className='text-primary'>ENTERPRENEUR</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

    </>
  )
}

export default AboutText
