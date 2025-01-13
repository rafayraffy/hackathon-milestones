document.getElementById('resume-form')?.addEventListener('submit', generateResume);

function generateResume(event: Event) {
    event.preventDefault();

    const fullName = (<HTMLInputElement>document.getElementById('fullName')).value;
    const email = (<HTMLInputElement>document.getElementById('email')).value;
    const phone = (<HTMLInputElement>document.getElementById('phone')).value;
    const skills = (<HTMLInputElement>document.getElementById('skills')).value;
    const education = (<HTMLTextAreaElement>document.getElementById('education')).value;

    const skillsList = skills.split(',').map(skill => `<li>${skill.trim()}</li>`).join('');

    const resumeContent = `
        <div class="resume-header">
            <h3 contenteditable="true">${fullName}</h3>
            <p contenteditable="true">Email: ${email}</p>
            <p contenteditable="true">Phone: ${phone}</p>
        </div>
        <div class="resume-section">
            <h4>Skills</h4>
            <ul contenteditable="true">${skillsList}</ul>
        </div>
        <div class="resume-section">
            <h4>Education</h4>
            <p contenteditable="true">${education}</p>
        </div>
    `;

    const resumeContainer = document.getElementById('resume-container');
    const resumeContentContainer = document.getElementById('resume-content');
    
    if (resumeContainer && resumeContentContainer) {
        resumeContentContainer.innerHTML = resumeContent;
        resumeContainer.style.display = 'block';
    }
}
