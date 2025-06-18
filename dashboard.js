function exportReport() {
    alert("Exporting executive brief as PDF (simulated).");
}

window.onload = function() {
    document.getElementById("vulns").textContent = demoData.vulnerabilities.length;
    document.getElementById("poams").textContent = demoData.poams.length;
    document.getElementById("escalations").textContent = demoData.escalations.length;
};
