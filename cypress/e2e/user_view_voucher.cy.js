describe('User view voucher test', () => {
  let user;
  let password;

  beforeEach(() => {
    user = 'useriai'
    password = 'useriai'

    cy.visit('https://hemat-yuk.vercel.app/login')
    cy.get('.input-email').type(user + '@gmail.com')
    cy.get('.input-password').type(password)
    cy.get('.btn-login').click()

    cy.url().should('eq', 'https://hemat-yuk.vercel.app/')
    cy.contains('Telusuri Promo').should('exist');

    cy.get('.btn-explore-voc').click()

  })

  // test user dapat melihat voucher 
  it('should should display the voucher elements', () => {

    // untuk memverifikasi test user dapat melihat voucher  berhasil, 
    // dengan verifikasi : berpindah ke halaman promo (/promo) dan terdapat bagian voucher yaitu teks ("Min. transaksi" dan "Diskon" )
    cy.url().should('eq', 'https://hemat-yuk.vercel.app/promo')
    cy.contains('Min. transaksi').should('exist');
    cy.contains('Diskon').should('exist');
  })

  // test user dapat menyalin kode voucher 
  it('should show success copy voucher code', () => {
    cy.contains('button', 'MAKANYUK70').click();

    // untuk memverifikasi test user dapat menyalin kode voucher   berhasil, 
    // dengan verifikasi : terdapat teks ("Kode berhasil disalin" )

    cy.contains('Kode berhasil disalin').should('exist');
  })

})