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
        <section id="contact" className="w-full flex flex-col justify-center items-center space-y-6 py-8">
            <h2 className="text-xl font-semibold inter-font mt-12" style={{ color: 'var(--custom-gray)' }}>Contact Us</h2>
            <div className="w-3/4 grid lg:grid-cols-2 grid-cols-1">
                <div className="">Image</div>
                <div className="bg-white border-2 rounded-2xl py-4 px-10">
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="space-y-2">
                            <label className="block text-sm">Full Name</label>
                            <input 
                                type="text" 
                                name="fullName" 
                                className="w-full py-2 px-3 border-2 rounded-md" 
                                placeholder="Harun Onur" 
                                value={formData.fullName}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm">Email</label>
                            <input 
                                type="email" 
                                name="email" 
                                className="w-full py-2 px-3 border-2 rounded-md" 
                                placeholder="harunonur@example.com"
                                value={formData.email}
                                onChange={handleChange}
                                required 
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm">Company Name (Optional)</label>
                            <input 
                                type="text" 
                                name="companyName" 
                                className="w-full py-2 px-3 border-2 rounded-md" 
                                placeholder="bohesa" 
                                value={formData.companyName}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="block text-sm">Subject</label>
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
                            <label className="block text-sm">Message</label>
                            <textarea 
                                name="message" 
                                className="w-full py-2 px-3 border-2 rounded-md" 
                                placeholder="Message..."
                                value={formData.message}
                                onChange={handleChange}
                                required
                                style={{resize: "none"}}
                            />
                        </div>
                        <button type="submit" className="bg-blue-second py-2 px-3 rounded-md text-white hover:bg-opacity-85">Send message</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
