import React from 'react';
import './People.css'; // Ensure this is the correct path to your CSS file

const teamMembers = [
    {
        name: 'Harun Onur',
        title: 'Founder and CEO',
        imgSrc: 'https://media.licdn.com/dms/image/D4D35AQGV-gm6h_cw_A/profile-framedphoto-shrink_100_100/0/1703076731153?e=1722290400&v=beta&t=M92cq6KIakZ1T53TEUYagvp-XiptAi3mNHUFLwIfzKU',
        links: [
            'https://x.com/serotonin_q',
            'https://x.com/serotonin_q',
            'https://x.com/serotonin_q',
            'https://x.com/serotonin_q'
        ]
    },
    {
        name: 'Ali Boztepe',
        title: 'Creative Director',
        imgSrc: 'https://media.licdn.com/dms/image/D4D03AQGCEbn41KC0NA/profile-displayphoto-shrink_400_400/0/1709741267369?e=1727308800&v=beta&t=rdt10ELN8JZ7a2cND_OuZ0K0xOeDVnIJfmz6Ft2EAmA',
        links: [
            'https://x.com/serotonin_q',
            'https://x.com/serotonin_q',
            'https://x.com/serotonin_q',
            'https://x.com/serotonin_q'
        ]
    },
    {
        name: 'Ege Deniz Yaşar',
        title: 'Developer Head',
        imgSrc: 'https://media.licdn.com/dms/image/D4D03AQHoaPGOln-HYg/profile-displayphoto-shrink_400_400/0/1709985900431?e=1727308800&v=beta&t=GC37EqVof2DMeWpjXu8lpmhH36mQfm9RtWMQJK28QUc',
        links: [
            'https://x.com/serotonin_q',
            'https://x.com/serotonin_q',
            'https://x.com/serotonin_q',
            'https://x.com/serotonin_q'
        ]
    },
    {
        name: 'Serhat Aydın',
        title: 'Marketing Head',
        imgSrc: 'https://media.licdn.com/dms/image/D4D03AQHawQAUO1-ICg/profile-displayphoto-shrink_400_400/0/1701083805961?e=1727308800&v=beta&t=oZ2AoA5ALQaA9zGoZffCYSo_AQFmuaZg4g-_qVUM-Ss',
        links: [
            'https://x.com/serotonin_q',
            'https://www.instagram.com/aydn_serhatt/',
            'https://www.linkedin.com/in/serhat-aydın-00759b230/',
            'https://github.com/Serhatt2'
           
        ]
    },
    {
        name: 'Beyza Altuner',
        title: 'Sales Manager',
        imgSrc: 'https://media.licdn.com/dms/image/D4D03AQEC0NTwxbxNVw/profile-displayphoto-shrink_800_800/0/1716151059509?e=1727308800&v=beta&t=TJYHSKTk0EeV1PzqfNHaTy3wvOyA-OSd9B2HW8X034g',
        links: [
            'https://x.com/serotonin_q',
            'https://x.com/serotonin_q',
            'https://x.com/serotonin_q',
            'https://x.com/serotonin_q'
        ]
    },
    {
        name: 'Oğuz Kaan Tavur',
        title: 'HR Manager',
        imgSrc: 'https://media.licdn.com/dms/image/D4D03AQF4YbDQuxqGCA/profile-displayphoto-shrink_400_400/0/1693155845683?e=1727308800&v=beta&t=PhrosdVVwzeUQqTZ2vZlW_PzQP6W9ug5QCiNYfSf348',
        links: [
            'https://x.com/serotonin_q',
            'https://x.com/serotonin_q',
            'https://x.com/serotonin_q',
            'https://x.com/serotonin_q'
        ]
    },
];

const icons = [
    'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/x-social-media-round-icon.svg',
    'https://cdn-icons-png.freepik.com/256/3670/3670274.png?ga=GA1.1.982740956.1721117972&semt=ais_hybrid',
    'https://cdn-icons-png.freepik.com/256/1384/1384014.png?ga=GA1.1.982740956.1721117972&semt=ais_hybrid',
    'https://cdn-icons-png.freepik.com/256/5968/5968896.png?ga=GA1.1.982740956.1721117972&semt=ais_hybrid'
];

const People = () => {
    return (
        <div className="team-container">
            <h2>Meet Our People</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry...</p>
            <div className="team-grid">
                {teamMembers.map((member, index) => (
                    <div className="team-member" key={index}>
                        <img src={member.imgSrc} alt={member.name} />
                        <h3>{member.name}</h3>
                        <div className="title-line" />
                        <p>{member.title}</p>
                        <div className="icons-container">
                            {member.links.map((link, i) => (
                                <a href={link} target="_blank" rel="noopener noreferrer" key={i}>
                                    <img src={icons[i]} alt={`Icon ${i + 1}`} />
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default People;
