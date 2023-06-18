describe('Register Test', () => {
  let user;

  beforeEach(() => {
    cy.visit('https://hemat-yuk.vercel.app/register')
    cy.contains('Daftarkan akunmu sekarang!').should('exist');
    cy.get('.input-username').should('exist')
    cy.get('.input-email').should('exist')
    cy.get('.input-phone').should('exist')
    cy.get('.input-password').should('exist')
    cy.get('.input-conf-pass').should('exist')
    cy.get('.btn-register').should('exist')

    user = 'testppl5'  // ganti angka (testppl{angka}) setiap makan melakukan test kembali atau masukan username yang belum terdaftar

  })

  // test register dengan masukan yang valid
  it('should allow valid register', () => {
    cy.get('.input-username').type(user)
    cy.get('.input-email').type(user + '@gmail.com')
    cy.get('.input-phone').type('081')
    cy.get('.input-password').type('testingppl')
    cy.get('.input-conf-pass').type('testingppl')
    cy.get('.btn-register').click()

    // untuk memverifikasi test register dengan masukan yang valid berhasil, 
    // dengan verifikasi : berpindah ke halaman login (/login) dan terdapat toast ("Berhasil Mendaftar Akun")
    cy.url().should('eq', 'https://hemat-yuk.vercel.app/login')
    cy.contains('Berhasil Mendaftar Akun').should('exist');
  })

  // test register dengan masukan yang tidak valid (dengan akun yang sudah terdaftar)
  it('should show error on invalid register (already registered)', () => {
    cy.get('.input-username').type(user)
    cy.get('.input-email').type(user + '@gmail.com')
    cy.get('.input-phone').type('081')
    cy.get('.input-password').type('testingppl')
    cy.get('.input-conf-pass').type('testingppl')
    cy.get('.btn-register').click()

    // untuk memverifikasi test register dengan masukan yang tidak valid berhasil, 
    // dengan verifikasi : tetap di halaman register (/register) dan terdapat toast ("Email Telah Terdaftar")
    cy.url().should('eq', 'https://hemat-yuk.vercel.app/register')
    cy.contains('Email Telah Terdaftar').should('exist');
  })

  // test register dengan tidak mengisi kolom username 
  it('should show error on register (without username field)', () => {
    // cy.get('.input-username').type(user)
    cy.get('.input-email').type(user + '@gmail.com')
    cy.get('.input-phone').type('081')
    cy.get('.input-password').type('testingppl')
    cy.get('.input-conf-pass').type('testingppl')
    cy.get('.btn-register').click()

    // untuk memverifikasi test register dengan tidak mengisi kolom username  berhasil, 
    // dengan verifikasi : tetap di halaman register (/register) dan terdapat toast ("Please fill out all field.")
    cy.url().should('eq', 'https://hemat-yuk.vercel.app/register')
    cy.contains('Please fill out all field.').should('exist');
  })

  // test register dengan tidak mengisi kolom email 
  it('should show error on register (without email field)', () => {
    cy.get('.input-username').type(user)
    // cy.get('.input-email').type(user + '@gmail.com')
    cy.get('.input-phone').type('081')
    cy.get('.input-password').type('testingppl')
    cy.get('.input-conf-pass').type('testingppl')
    cy.get('.btn-register').click()

    // untuk memverifikasi test register dengan tidak mengisi kolom email  berhasil, 
    // dengan verifikasi : tetap di halaman register (/register) dan terdapat toast ("Please fill out all field.")
    cy.url().should('eq', 'https://hemat-yuk.vercel.app/register')
    cy.contains('Please fill out all field.').should('exist');
  })

  // test register dengan tidak mengisi kolom phone 
  it('should show error on register (without phone field)', () => {
    cy.get('.input-username').type(user)
    cy.get('.input-email').type(user + '@gmail.com')
    // cy.get('.input-phone').type('081')
    cy.get('.input-password').type('testingppl')
    cy.get('.input-conf-pass').type('testingppl')
    cy.get('.btn-register').click()

    // untuk memverifikasi test register dengan tidak mengisi kolom phone  berhasil, 
    // dengan verifikasi : tetap di halaman register (/register) dan terdapat toast ("Please fill out all field.")
    cy.url().should('eq', 'https://hemat-yuk.vercel.app/register')
    cy.contains('Please fill out all field.').should('exist');
  })

  // test register dengan tidak mengisi kolom password 
  it('should show error on register (without password field)', () => {
    cy.get('.input-username').type(user)
    cy.get('.input-email').type(user + '@gmail.com')
    cy.get('.input-phone').type('081')
    // cy.get('.input-password').type('testingppl')
    cy.get('.input-conf-pass').type('testingppl')
    cy.get('.btn-register').click()

    // untuk memverifikasi test register dengan tidak mengisi kolom password  berhasil, 
    // dengan verifikasi : tetap di halaman register (/register) dan terdapat toast ("Please fill out all field.")
    cy.url().should('eq', 'https://hemat-yuk.vercel.app/register')
    cy.contains('Please fill out all field.').should('exist');
  })

  // test register dengan tidak mengisi kolom password confirmation 
  it('should show error on register (without password confirmation field)', () => {
    cy.get('.input-username').type(user)
    cy.get('.input-email').type(user + '@gmail.com')
    cy.get('.input-phone').type('081')
    cy.get('.input-password').type('testingppl')
    // cy.get('.input-conf-pass').type('testingppl')
    cy.get('.btn-register').click()

    // untuk memverifikasi test register dengan tidak mengisi kolom password confirmation  berhasil, 
    // dengan verifikasi : tetap di halaman register (/register) dan terdapat toast ("Please fill out all field.")
    cy.url().should('eq', 'https://hemat-yuk.vercel.app/register')
    cy.contains('Please fill out all field.').should('exist');
  })



})