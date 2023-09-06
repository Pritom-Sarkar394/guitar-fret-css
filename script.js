function calculateFretPosition() {
    const scaleLength = parseFloat(document.getElementById("scaleLength").value);
    const desiredNote = document.getElementById("desiredNote").value;
    
    // Define the standard tuning notes for a 6-string guitar (E2 to E4).
    const standardTuning = ["E2", "A2", "D3", "G3", "B3", "E4"];
    
    // Find the index of the desired note in the standard tuning.
    const desiredNoteIndex = standardTuning.indexOf(desiredNote);
    
    if (desiredNoteIndex !== -1) {
        // Calculate the fret position using the formula.
        const fretPosition = scaleLength / 17.817 / Math.pow(2, desiredNoteIndex / 12);
        
        // Update the result on the webpage.
        document.getElementById("fretPosition").textContent = fretPosition.toFixed(2);
    } else {
        alert("Invalid desired note. Please choose a note from the list.");
    }
}