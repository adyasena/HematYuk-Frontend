describe('Admin delete voucher test', () => {
  let user;
  let password;
  let voucherCode;

  beforeEach(() => {
    // user dan password untuk admin
    user = 'adminiai'
    password = 'adminiai'

    voucherCode = 'VOCTESTING19' //ganti kode voucher sesuai kode voucher yang ingin dihapus

    cy.visit('https://hemat-yuk.vercel.app/login')
    cy.get('.input-email').type(user + '@gmail.com')
    cy.get('.input-password').type(password)
    cy.get('.btn-login').click()

    cy.url().should('eq', 'https://hemat-yuk.vercel.app/admin')
    cy.contains('Berhasil Masuk').should('exist');
    cy.wait(3000);
  })

  // test admin dapat menghapus voucher pada dashboar admin
  it('should success delete the voucher', () => {

    cy.contains('tr', voucherCode)
      .first()
      .find('button.rounded-md.p-1.bg-red-primary')
      .click();

    cy.contains('button', 'Hapus')
      .click();

    // untuk memverifikasi test admin dapat menghapus voucher pada dashboar admin berhasil, 
    // dengan verifikasi : dengan memeriksa bahsa voucher dengan code voucher tersebut sudah terhapus atau tidak tertampil pada dashboard
    cy.contains(voucherCode).should('not.exist');
  })

})