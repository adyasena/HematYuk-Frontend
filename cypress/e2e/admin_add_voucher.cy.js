describe('Admin add voucher test', () => {
  let user;
  let password;

  let vocName;
  let vocCompany;
  let vocType;
  let vocValue;
  let vocMinimal;
  let vocPrice;
  let vocQuantity;
  let vocCode;

  beforeEach(() => {
    // user dan password untuk admin
    user = 'adminiai'
    password = 'adminiai'

    // {ganti properti dibawah ini sesuai dengan inputan yang diinginkan dan code voucher belum digunakan}
    vocName = "promo 17 agustus"
    vocCompany = "TOKOPEDIA"
    vocType = "discount"
    vocValue = 17000
    vocMinimal = 20000
    vocPrice = 17
    vocQuantity = 1000
    vocCode = "TOKOPEDIA17"

    cy.visit('https://hemat-yuk.vercel.app/login')
    cy.get('.input-email').type(user + '@gmail.com')
    cy.get('.input-password').type(password)
    cy.get('.btn-login').click()

    cy.url().should('eq', 'https://hemat-yuk.vercel.app/admin')
    cy.contains('Berhasil Masuk').should('exist');
    cy.contains('button', 'Tambah Voucher').click();
    cy.contains('Tambah Voucher').should('exist');
  })

  // test menambahakan voucher dengan masukan yang valid
  it('should allow valid add voucher', () => {
    cy.get('.in-name').type(vocName)
    cy.get('.in-company').type(vocCompany)
    cy.get('.in-type').type(vocType)
    cy.get('.in-value').type(vocValue)
    cy.get('.in-minimal').type(vocMinimal)
    cy.get('.in-price').type(vocPrice)
    cy.get('.in-quantity').type(vocQuantity)
    cy.get('.in-code').type(vocCode)
    cy.get('.btn-add').click()

    // untuk memverifikasi test login dengan masukan yang valid berhasil, 
    // dengan verifikasi : berpindah ke halaman home (/) dan terdapat teks ("Berhasil Masuk")
    cy.url().should('eq', 'https://hemat-yuk.vercel.app/')
    cy.contains('Berhasil Masuk').should('exist');
  })

})