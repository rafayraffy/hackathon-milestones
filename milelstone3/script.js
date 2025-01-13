var _a;
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', generateResume);
function generateResume(event) {
    event.preventDefault();
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var skills = document.getElementById('skills').value;
    var education = document.getElementById('education').value;
    var skillsList = skills.split(',').map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); }).join('');
    var resumeContent = "\n        <div class=\"resume-header\">\n            <h3>".concat(fullName, "</h3>\n            <p>Email: ").concat(email, "</p>\n            <p>Phone: ").concat(phone, "</p>\n        </div>\n        <div class=\"resume-section\">\n            <h4>Skills</h4>\n            <ul>").concat(skillsList, "</ul>\n        </div>\n        <div class=\"resume-section\">\n            <h4>Education</h4>\n            <p>").concat(education, "</p>\n        </div>\n    ");
    var resumeContainer = document.getElementById('resume-container');
    var resumeContentContainer = document.getElementById('resume-content');
    if (resumeContainer && resumeContentContainer) {
        resumeContentContainer.innerHTML = resumeContent;
        resumeContainer.style.display = 'block';
    }
}
