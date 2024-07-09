// Zakat Pendapatan Calculation
function calculateZakatPendapatan() {
    const pendapatan = parseFloat(document.getElementById('jumlahPendapatan').value);
    const perbelanjaan = parseFloat(document.getElementById('jumlahPerbelanjaan').value);
    const netIncome = pendapatan - perbelanjaan;
    if (netIncome >= 24198) {
        const result = (netIncome * 0.025).toFixed(2); // Corrected rate to 0.25
        document.getElementById('resultPendapatan').innerText = `Zakat Pendapatan: ${result}`;
    } else {
        document.getElementById('resultPendapatan').innerText = "Zakat does not apply";
    }
}
  
  // Zakat Perniagaan Calculation
  function calculateZakatPerniagaan() {
    const jualan = document.getElementById('jualanSetahun').value;
    const modal = document.getElementById('modalSetahun').value;
    const untungBersih = jualan - modal;
    const result = (untungBersih * 0.025).toFixed(2);
    document.getElementById('resultPerniagaan').innerText = untungBersih >= 24198 ? `Zakat Perniagaan: ${result}` : "Zakat does not apply";
  }
  
  // Zakat Emas Calculation
  function calculateZakatEmas() {
    const weight = document.getElementById('weightOfGold').value;
    const usage = document.getElementById('goldUsage').value;
    const goldPrice = 284.69;
    const totalValue = weight * goldPrice;
    const result = (totalValue * 0.025).toFixed(2);
    let threshold = usage === 'simpan' ? 85 : 800;
    document.getElementById('resultEmas').innerText = weight >= threshold ? `Zakat Emas: ${result}` : "Zakat does not apply";
  }
  
  // Zakat Wang Simpanan Calculation
  function calculateZakatSimpanan() {
    const simpanan = document.getElementById('jumlahSimpanan').value;
    const result = (simpanan * 0.025).toFixed(2);
    document.getElementById('resultSimpanan').innerText = simpanan >= 24198 ? `Zakat Wang Simpanan: ${result}` : "Zakat does not apply";
  }

  function resetZakatForm(formId) {
    // Select the form based on its ID
    const form = document.getElementById(formId);
  
    // Reset input fields
    const inputs = form.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
      input.value = '';
    });
  
    // Reset result text
    const resultParagraph = form.querySelector('p');
    if (resultParagraph) {
      resultParagraph.innerText = '';
    }
  }