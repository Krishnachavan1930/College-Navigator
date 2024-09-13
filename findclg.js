const colleges = {
    cet: [
        { name: "VJTI (Veermata Jijabai Technological Institute,Mumbai)", percentileRange: [99, 100] },
        { name: "COEP (College of Engineering Pune)", percentileRange: [99, 100] },
        { name: "SPIT (Sardar Patel Institute of Technology), Mumbai", percentileRange: [99, 100] },
        { name: "ICT Mumbai (Institute of Chemical Technology)", percentileRange: [99, 100] },
        { name: "KJ Somaiya College of Engineering, Mumbai)", percentileRange: [99, 100] },
       
        { name: "Government College of Engineering, Nagpur (GCOEN)", percentileRange: [95, 98] },
        { name: "Pimpri Chinchwad College of Engineering, Pune (PCCOE)", percentileRange: [95, 98] },
        { name: "Rajiv Gandhi Institute of Technology, Mumbai (RGIT)", percentileRange: [95, 98] },
        { name: "D. Y. Patil College of Engineering, Pune", percentileRange: [95, 98] },
        { name: "Sinhgad College of Engineering, Pune (SCOE)", percentileRange: [95, 98] },
        { name: "MIT World Peace University, Pune", percentileRange: [84, 94] },
        { name: "Vishwakarma Institute of Technology, Pune", percentileRange: [84, 94] },
        { name: "Nashik Engineering College, Nashik", percentileRange: [84, 94] },
        { name: "Shivajirao S. Jondhle College of Engineering, Mumbai", percentileRange: [84, 94] },
        

        { name: " Smt. Kashibai Navale College of Engineering, Pune", percentileRange: [75, 83] },
        { name: "Atharva College of Engineering, Mumbai ", percentileRange: [75, 83] },
        { name: " JSPM's Jayawantrao Sawant College of Engineering, Pune", percentileRange: [75, 83] },
        { name: "Dr. D.Y. Patil Institute of Engineering and Technology, Pune ", percentileRange: [75, 83] },
        { name: "Shri Shivaji College of Engineering and Technology, Amravati ", percentileRange: [75, 83] },
        // Add more colleges for CET
        { name: "College Not Found", percentileRange: [0, 75] },
    ],
    neet: [
        
            { name: "Grant Medical College, Mumbai", percentileRange: [95, 100] },
            { name: "KEM Hospital and Medical College, Mumbai", percentileRange: [95, 100] },
            { name: "B.J. Medical College, Pune", percentileRange: [95, 100] },
            { name: "Seth GS Medical College, Mumbai", percentileRange: [95, 100] },
            { name: "Dr. DY Patil Medical College, Pune", percentileRange: [95, 100] },
        
        
        
            { "name": "Maharashtra Institute of Medical Sciences and Research, Latur", "percentileRange": [90, 95] },
            { "name": "Dr. D.Y. Patil Medical College, Navi Mumbai", "percentileRange": [90, 95] },
            { "name": "J.J. Hospital, Mumbai", "percentileRange": [90, 95] },
            { "name": "NKP Salve Institute of Medical Sciences, Nagpur", "percentileRange": [90, 95] },
            { "name": "YCM Hospital and Medical College, Pimpri", "percentileRange": [90, 95] },
        
        
        
            { "name": "Padmashree Dr. D.Y. Patil Medical College, Kolhapur", "percentileRange": [80, 90] },
            { "name": "Dr. Vasantrao Pawar Medical College, Nashik", "percentileRange": [80, 90] },
            { "name": "Maharashtra Medical College, Jalgaon", "percentileRange": [80, 90] },
            { "name": "Rural Medical College, Loni", "percentileRange": [80, 90] },
            { "name": "Bharati Vidyapeeth Medical College, Pune", "percentileRange": [80, 90] },
        
            { name: "Dr. Shankarao Chavan Government Medical College, Nanded", percentileRange: [70, 80] },
            { name: "Government Medical College, Aurangabad", percentileRange: [70, 80] },
            { name: "Government Medical College, Akola", percentileRange: [70, 80] },
            { name: "Dr. Vasantrao Pawar Medical College, Nashik", percentileRange: [70, 80] },
            { name: "Government Medical College, Miraj", percentileRange: [70, 80] },
       
            { name: "J. J. Hospital, Mumbai (Government Medical College)", percentileRange: [0, 69] },
            { name: "Government Medical College, Chandrapur", percentileRange: [0, 69] },
            { name: "Government Medical College, Dhule", percentileRange: [0, 69] },
            { name: "Government Medical College, Satara", percentileRange: [0, 69] },
            { name: "Government Medical College, Yavatmal",   percentileRange: [0, 69] }
        
                        
        // Add more colleges for NEET
    ],
    jee: [
        
            { "name": "VJTI (Veermata Jijabai Technological Institute), Mumbai", "percentileRange": [99, 100] },
            { "name": "COEP (College of Engineering Pune)", "percentileRange": [99, 100] },
            { "name": "SPIT (Sardar Patel Institute of Technology), Mumbai", "percentileRange": [99, 100] },
            { "name": "ICT Mumbai (Institute of Chemical Technology)", "percentileRange": [99, 100] },
            { "name": "Shivaji University, Kolhapur", "percentileRange": [99, 100] },
            { "name": "Pimpri Chinchwad College of Engineering, Pune (PCCOE)", "percentileRange": [95, 98] },
            { "name": "MIT World Peace University, Pune", "percentileRange": [95, 98] },
            { "name": "Vishwakarma Institute of Technology, Pune", "percentileRange": [95, 98] },
            { "name": "Nashik Engineering College, Nashik", "percentileRange": [95, 98] },
            { "name": "KJ Somaiya College of Engineering, Mumbai", "percentileRange": [95, 98] },
            { "name": "Smt. Kashibai Navale College of Engineering, Pune", "percentileRange": [90, 94] },
            { "name": "Atharva College of Engineering, Mumbai", "percentileRange": [90, 94] },
            { "name": "JSPM's Jayawantrao Sawant College of Engineering, Pune", "percentileRange": [90, 94] },
            { "name": "Dr. D.Y. Patil Institute of Engineering and Technology, Pune", "percentileRange": [90, 94] },
            { "name": "Shivajirao S. Jondhle College of Engineering, Mumbai", "percentileRange": [90, 94] },
            { "name": "Padmashree Dr. D.Y. Patil Medical College, Kolhapur", "percentileRange": [80, 89] },
            { "name": "Dr. Vasantrao Pawar Medical College, Nashik", "percentileRange": [80, 89] },
            { "name": "Maharashtra Medical College, Jalgaon", "percentileRange": [80, 89] },
            { "name": "Rural Medical College, Loni", "percentileRange": [80, 89] },
            { "name": "Bharati Vidyapeeth Medical College, Pune", "percentileRange": [80, 89] },
            { "name": "Dr. Shankarao Chavan Government Medical College, Nanded", "percentileRange": [70, 79] },
            { "name": "Government Medical College, Aurangabad", "percentileRange": [70, 79] },
            { "name": "Government Medical College, Akola", "percentileRange": [70, 79] },
            { "name": "Dr. Vasantrao Pawar Medical College, Nashik", "percentileRange": [70, 79] },
            { "name": "Government Medical College, Miraj", "percentileRange": [70, 79] },
            { "name": "Government Engineering College, Jalgaon", "percentileRange": [0, 69] },
            { "name": "Government Engineering College, Akola", "percentileRange": [0, 69] },
            { "name": "Shri Sant Gajanan Maharaj College of Engineering, Shegaon", "percentileRange": [0, 69] },
            { "name": "Shri Ramdeobaba College of Engineering and Management, Nagpur", "percentileRange": [0, 69] },
            { "name": "Government College of Engineering, Aurangabad", "percentileRange": [0, 69] }
        
        
        // Add more colleges for JEE
    ]
};

function findColleges() {
    const exam = document.getElementById("exam").value;
    const percentile = parseFloat(document.getElementById("percentile").value);

    const collegeList = colleges[exam].filter(college => 
        percentile >= college.percentileRange[0] && percentile <= college.percentileRange[1]
    );

    const resultDiv = document.getElementById("college-list");
    resultDiv.innerHTML = "<h2>Colleges matching your percentile:</h2>";

    if (collegeList.length === 0) {
        resultDiv.innerHTML += "<p>No colleges found for the given percentile.</p>";
    } else {
        collegeList.forEach(college => {
            resultDiv.innerHTML += `<p>${college.name}</p>`;
        });
    }
}
