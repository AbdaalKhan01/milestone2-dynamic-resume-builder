document.getElementById('generateResume').addEventListener('click', () => {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const education = document.getElementById('education').value;
    const institute = document.getElementById('institute').value;
    const year = document.getElementById('year').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const company = document.getElementById('company').value;
    const duration = document.getElementById('duration').value;
    const responsibilities = document.getElementById('responsibilities').value;
    const skills = document.getElementById('skills').value;
  
    const outputContent = `
      <h3>${fullName}</h3>
      <p>Email: ${email}</p>
      <p>Phone: ${phone}</p>
      <h4>Education</h4>
      <p>${education} from ${institute} (${year})</p>
      <h4>Experience</h4>
      <p>${jobTitle} at ${company} (${duration})</p>
      <p>${responsibilities}</p>
      <h4>Skills</h4>
      <p>${skills}</p>
    `;
  
    document.getElementById('outputContent').innerHTML = outputContent;
    document.getElementById('resumeForm').classList.add('hidden');
    document.getElementById('resumeOutput').classList.remove('hidden');
  });
  
  document.getElementById('editResume').addEventListener('click', () => {
    document.getElementById('resumeForm').classList.remove('hidden');
    document.getElementById('resumeOutput').classList.add('hidden');
  });
  