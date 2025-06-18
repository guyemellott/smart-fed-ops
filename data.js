const demoData = {
    vulnerabilities: Array.from({length: 5000}, (_, i) => ({id: i+1, status: "open"})),
    poams: Array.from({length: 200}, (_, i) => ({id: i+1, status: "open"})),
    escalations: Array.from({length: 12}, (_, i) => ({id: i+1, status: "pending"}))
};
