function skillsMember() {
    var skills = document.getElementById("skills");
    var member = document.getElementById("member");
    var skillsBtn = document.getElementById("skillsBtn");
    var memberBtn = document.getElementById("memberBtn");
    var skillsContent = document.getElementById("skillsContent");
    var memberContent = document.getElementById("memberContent");
    var skillsBtn = document.getElementById("skillsBtn");
    var memberBtn = document.getElementById("memberBtn");

    if (skills.style.display === "none") {
        skills.style.display = "block";
        member.style.display = "none";
        skillsContent.style.display = "block";
        memberContent.style.display = "none";
        skillsBtn.style.background = "#ffffff";
        memberBtn.style.background = "#f0f0f0";
    } else {
        skills.style.display = "none";
        member.style.display = "block";
        skillsContent.style.display = "none";
        memberContent.style.display = "block";
        skillsBtn.style.background = "#f0f0f0";
        memberBtn.style.background = "#ffffff";
    }
}