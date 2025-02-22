import React from 'react'

function Location() {
    return (
        <div className='row m-0 p-0'>
            <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3626.3683925280416!2d46.699878675363934!3d24.645444878070226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjTCsDM4JzQzLjYiTiA0NsKwNDInMDguOCJF!5e0!3m2!1sen!2seg!4v1740181289386!5m2!1sen!2seg"
                // width="600"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className='col-md-12 col-12'
            ></iframe>
        </div>
    )
}

export default Location
