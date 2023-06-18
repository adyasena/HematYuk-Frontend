describe('Admin view voucher test', () => {
  let user;
  let password;

  beforeEach(() => {
    // user dan password untuk admin
    user = 'adminiai'
    password = 'adminiai'

    cy.visit('https://hemat-yuk.vercel.app/login')
    cy.get('.input-email').type(user + '@gmail.com')
    cy.get('.input-password').type(password)
    cy.get('.btn-login').click()

    cy.url().should('eq', 'https://hemat-yuk.vercel.app/admin')
    cy.contains('Berhasil Masuk').should('exist');
  })

  // test admin dapat melihat voucher pada dashboar admin
  it('should should display the voucher (dashboard admin)', () => {

    // untuk memverifikasi test admin dapat melihat voucher pada dashboar admin berhasil, 
    // dengan verifikasi : berpindah ke halaman admin (/admin) dan terdapat bagian voucher yaitu teks (Dashboard Admin, Promo, Aplikasi, Tipe, Potongan, Minimum Pembelian, Poin, Jumlah, Kode )
    cy.contains('Dashboard Admin').should('exist');
    cy.contains('Promo').should('exist');
    cy.contains('Aplikasi').should('exist');
    cy.contains('Tipe').should('exist');
    cy.contains('Potongan').should('exist');
    cy.contains('Minimum Pembelian').should('exist');
    cy.contains('Poin').should('exist');
    cy.contains('Jumlah').should('exist');
    cy.contains('Kode').should('exist');
  })

})