describe('Login Test', () => {
  let user;
  let password;

  beforeEach(() => {
    cy.visit('https://hemat-yuk.vercel.app/login')
    cy.contains('Selamat datang kembali!').should('exist');
    cy.get('.input-email').should('exist')
    cy.get('.input-password').should('exist')
    cy.get('.btn-login').should('exist')

    user = 'useriai'
    password = 'useriai'
  })

  // test login dengan masukan yang valid
  it('should allow valid login', () => {
    cy.get('.input-email').type(user + '@gmail.com')
    cy.get('.input-password').type(password)
    cy.get('.btn-login').click()

    // untuk memverifikasi test login dengan masukan yang valid berhasil, 
    // dengan verifikasi : berpindah ke halaman home (/) dan terdapat teks ("Berhasil Masuk")
    cy.url().should('eq', 'https://hemat-yuk.vercel.app/')
    cy.contains('Berhasil Masuk').should('exist');
  })

  // test login dengan masukan yang tidak valid
  it('should show error on invalid login', () => {
    cy.get('.input-email').type(user + 'TidakTerdaftar@gmail.com')
    cy.get('.input-password').type(password + 'userTidakTerdaftar')
    cy.get('.btn-login').click()

    // untuk memverifikasi test login dengan masukan yang tidak valid berhasil, 
    // dengan verifikasi : tetap dihalaman (/login) dan terdapat toast ("Email atau Password Salah")
    cy.url().should('eq', 'https://hemat-yuk.vercel.app/login')
    cy.contains('Email atau Password Salah').should('exist');
  })

  // test login dengan tidak mengisi kolom email 
  it('should show error on invalid login', () => {
    // cy.get('.input-email').type(user+'@gmail.com')
    cy.get('.input-password').type(password)
    cy.get('.btn-login').click()

    // untuk memverifikasi test login dengan tidak mengisi kolom email berhasil, 
    // dengan verifikasi : tetap dihalaman (/login) dan terdapat toast ("Email atau Password Salah")
    cy.url().should('eq', 'https://hemat-yuk.vercel.app/login')
    cy.contains('Email atau Password Salah').should('exist');
  })

  // test login dengan tidak mengisi kolom password 
  it('should show error on invalid login', () => {
    cy.get('.input-email').type(user + '@gmail.com')
    // cy.get('.input-password').type(password)
    cy.get('.btn-login').click()

    // untuk memverifikasi test login dengan tidak mengisi kolom password berhasil, 
    // dengan verifikasi : tetap dihalaman (/login) dan terdapat toast ("Email atau Password Salah")
    cy.url().should('eq', 'https://hemat-yuk.vercel.app/login')
    cy.contains('Email atau Password Salah').should('exist');
  })

})