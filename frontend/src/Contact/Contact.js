import React, { useState } from "react";

const sendEmail = async (formdata) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/send-email/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formdata),
        });

        const result = await response.json();
        if (result.status === 'success'){
            alert("Message Sent Successfully");
            window.location.reload();

        } else {
            alert('Error mail sending: ', result.message);
        }
    }
    catch (error) {
        console.error('Error:', error);
    }
}

export default function Contact() {
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        companyName: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendEmail(formData);
    }

    return (
        <section id="contact" className="w-full flex flex-col justify-center items-center py-10">
            <div className="w-3/4 grid lg:grid-cols-2 grid-cols-1 space-y-2">
                <div className="flex justify-center items-center overflow-hidden">
                    <img src='deneme2.jpg' className='w-3/4  -mb-10 md:bottom-0'  alt=''/>
                </div>
                
                <div className="w-full lg:w-3/4 mx-auto lg:mx-0 bg-white py-4 px-4">
                    <h2 className="text-2xl font-semibold " style={{ color: 'var(--custom-gray)' }}>Contact Us</h2>
                    <form className="space-y-4 my-6" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="block text-sm text-light-gray">Full Name</label>
                            <input 
                                type="text" 
                                name="fullName" 
                                className="w-full py-2 px-3 border-2 rounded-md" 
                                placeholder="John Doe" 
                                value={formData.fullName}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm text-light-gray">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                className="w-full py-2 px-3 border-2 rounded-md" 
                                placeholder="johndoe@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm text-light-gray">Company Name (Optional)</label>
                            <input 
                                type="text" 
                                name="companyName" 
                                className="w-full py-2 px-3 border-2 rounded-md" 
                                placeholder="BOHESA" 
                                value={formData.companyName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm text-light-gray">Subject</label>
                            <input 
                                type="text" 
                                name="subject" 
                                className="w-full py-2 px-3 border-2 rounded-md" 
                                placeholder="About Services" 
                                value={formData.subject}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm inter-font-400 text-light-gray">Message</label>
                            <textarea 
                                name="message" 
                                className="w-full py-2 px-3 border-2 rounded-md " 
                                placeholder="Message..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                style={{resize: "none"}}
                            />
                        </div>
                        <button type="submit" className="bg-blue-second py-2 px-3 rounded-md inter-font-500 text-white hover:bg-opacity-85">Send message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
