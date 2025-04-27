// Filtrování tabulky
document.getElementById('filterTableInput').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const rows = document.querySelectorAll('#tableBody tr');
    
    rows.forEach(row => {
      const city = row.children[1].textContent.toLowerCase();
      row.style.display = city.includes(filter) ? '' : 'none';
    });
  });
  
  // Filtrování selectu
  const originalOptions = Array.from(document.querySelectorAll('#citySelect option'));
  
  document.getElementById('filterSelectInput').addEventListener('input', function () {
    const filter = this.value.toLowerCase();
    const select = document.getElementById('citySelect');
    select.innerHTML = '';
  
    const filteredOptions = originalOptions.filter(option => 
      option.textContent.toLowerCase().includes(filter)
    );
  
    filteredOptions.forEach(option => select.appendChild(option.cloneNode(true)));
  
    if (filteredOptions.length === 0) {
      const noResult = document.createElement('option');
      noResult.textContent = 'Žádné výsledky';
      select.appendChild(noResult);
    }
  });
  
  // Zpracování formuláře
  document.getElementById('cityForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const selectedCity = document.getElementById('citySelect').value;
    alert('Vybrané město: ' + selectedCity);
  });  