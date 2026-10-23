(function () {
  "use strict";

  document.body.classList.add("maintenance-mode");

  document.body.insertAdjacentHTML("afterbegin", `
    <main id="maintenance-screen" aria-labelledby="maintenance-title">
      <header class="maintenance-topbar">
        <div class="maintenance-brand">Pilkades Sindangsari 2026</div>
        <div class="maintenance-state">Maintenance dulu</div>
      </header>
      <section class="maintenance-main">
        <p class="maintenance-kicker">Sedang istirahat sebentar</p>
        <h1 class="maintenance-title" id="maintenance-title">Lagi maintenance.<span>Resource-nya ikut cuti.</span></h1>
        <p class="maintenance-copy">
          Panitia pengin serba digital, tapi resource-nya masih saya nombok sendiri.
          <strong>Belum ada bayaran atau traktiran yang masuk nih.</strong>
          Kalau berkenan bantu isi ulang tenaga proyeknya, QRIS ada di sini. Kalau belum,
          tidak apa-apa, saya maintenance sambil menunggu kabar baik.
        </p>
        <div class="maintenance-actions">
          <button class="maintenance-support" id="maintenance-open" type="button" aria-haspopup="dialog">Bantu resource via QRIS</button>
          <span class="maintenance-aside">Klik boleh, transfer sukarela, bercandanya serius.</span>
        </div>
      </section>
      <footer class="maintenance-ticker" aria-hidden="true"><span>RESOURCE: NOMBOK SENDIRI &nbsp; * &nbsp; STATUS: NUNGGU TRAKTIRAN &nbsp; * &nbsp; PILKADES SINDANGSARI &nbsp; * &nbsp; RESOURCE: NOMBOK SENDIRI &nbsp; * &nbsp; STATUS: NUNGGU TRAKTIRAN &nbsp; * &nbsp; PILKADES SINDANGSARI &nbsp; * &nbsp;</span></footer>
      <div class="maintenance-dialog" id="maintenance-dialog" role="dialog" aria-modal="true" aria-labelledby="maintenance-dialog-title" hidden>
        <div class="maintenance-dialog-box">
          <div class="maintenance-dialog-head">
            <h2 class="maintenance-dialog-title" id="maintenance-dialog-title">Traktir resource-nya</h2>
            <button class="maintenance-close" id="maintenance-close" type="button" aria-label="Tutup QRIS">&times;</button>
          </div>
          <img class="maintenance-qr" src="qris1.jpg" alt="QRIS untuk dukungan resource">
          <p class="maintenance-dialog-copy">Terima kasih sudah bantu. Sedikit dukungan bikin resource dan yang nombok ikut tersenyum.</p>
        </div>
      </div>
    </main>
  `);

  var dialog = document.getElementById("maintenance-dialog");
  var openButton = document.getElementById("maintenance-open");
  var closeButton = document.getElementById("maintenance-close");

  function closeDialog() {
    dialog.hidden = true;
    openButton.focus();
  }

  openButton.addEventListener("click", function () {
    dialog.hidden = false;
    closeButton.focus();
  });
  closeButton.addEventListener("click", closeDialog);
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) closeDialog();
  });
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !dialog.hidden) closeDialog();
  });
})();